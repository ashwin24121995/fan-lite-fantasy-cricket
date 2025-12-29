import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";
import { TRPCError } from "@trpc/server";

const CRIC_API_KEY = process.env.CRIC_API_KEY;
const CRIC_API_BASE = "https://api.cricapi.com/v1";

// Helper to fetch from CricAPI
async function fetchCricAPI(endpoint: string, params: Record<string, string> = {}) {
  const url = new URL(`${CRIC_API_BASE}/${endpoint}`);
  url.searchParams.set("apikey", CRIC_API_KEY || "");
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });
  
  const response = await fetch(url.toString());
  const data = await response.json();
  
  if (data.status !== "success") {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: data.reason || "Failed to fetch cricket data",
    });
  }
  
  return data;
}

// Get active series IDs from current matches
async function getActiveSeriesIds(): Promise<string[]> {
  try {
    const data = await fetchCricAPI("currentMatches");
    const matches = data.data || [];
    const seriesIds = new Set<string>();
    matches.forEach((match: any) => {
      if (match.series_id) {
        seriesIds.add(match.series_id);
      }
    });
    return Array.from(seriesIds);
  } catch {
    return [];
  }
}

// Fetch upcoming matches from active series
async function fetchUpcomingMatches(): Promise<any[]> {
  const seriesIds = await getActiveSeriesIds();
  const upcomingMatches: any[] = [];
  
  // Limit to first 3 series to avoid too many API calls
  for (const seriesId of seriesIds.slice(0, 3)) {
    try {
      const data = await fetchCricAPI("series_info", { id: seriesId });
      const matchList = data.data?.matchList || [];
      
      // Filter for upcoming matches (not started yet)
      const upcoming = matchList.filter((match: any) => 
        match.matchStarted === false && match.matchEnded === false
      );
      
      // Add series info to each match
      upcoming.forEach((match: any) => {
        match.seriesName = data.data?.info?.name;
        upcomingMatches.push(match);
      });
    } catch (error) {
      console.error(`Failed to fetch series ${seriesId}:`, error);
    }
  }
  
  // Sort by date ascending (soonest first)
  upcomingMatches.sort((a, b) => {
    const dateA = new Date(a.dateTimeGMT || a.date);
    const dateB = new Date(b.dateTimeGMT || b.date);
    return dateA.getTime() - dateB.getTime();
  });
  
  return upcomingMatches;
}

export const appRouter = router({
  system: systemRouter,
  
  auth: router({
    me: publicProcedure.query(opts => {
      if (!opts.ctx.user) return null;
      return {
        id: opts.ctx.user.id,
        name: opts.ctx.user.name,
        email: opts.ctx.user.email,
        role: opts.ctx.user.role,
      };
    }),
    
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  // Cricket matches from CricAPI
  matches: router({
    // Get current matches (live and recently completed)
    getCurrent: publicProcedure.query(async () => {
      const data = await fetchCricAPI("currentMatches");
      return data.data || [];
    }),
    
    // Get upcoming matches from active series
    getUpcoming: publicProcedure.query(async () => {
      return await fetchUpcomingMatches();
    }),
    
    // Get all matches combined (current + upcoming)
    getAll: publicProcedure.query(async () => {
      const [currentData, upcomingMatches] = await Promise.all([
        fetchCricAPI("currentMatches"),
        fetchUpcomingMatches(),
      ]);
      
      const currentMatches = currentData.data || [];
      
      // Combine and deduplicate by ID
      const matchMap = new Map<string, any>();
      
      // Add current matches first
      currentMatches.forEach((match: any) => {
        matchMap.set(match.id, match);
      });
      
      // Add upcoming matches (won't overwrite existing)
      upcomingMatches.forEach((match: any) => {
        if (!matchMap.has(match.id)) {
          matchMap.set(match.id, match);
        }
      });
      
      return Array.from(matchMap.values());
    }),
    
    getMatch: publicProcedure
      .input(z.object({ matchId: z.string() }))
      .query(async ({ input }) => {
        const data = await fetchCricAPI("match_info", { id: input.matchId });
        return data.data;
      }),
    
    getSquad: publicProcedure
      .input(z.object({ matchId: z.string() }))
      .query(async ({ input }) => {
        const data = await fetchCricAPI("match_squad", { id: input.matchId });
        return data.data || [];
      }),
    
    getScorecard: publicProcedure
      .input(z.object({ matchId: z.string() }))
      .query(async ({ input }) => {
        const data = await fetchCricAPI("match_scorecard", { id: input.matchId });
        return data.data;
      }),
  }),

  // User teams
  teams: router({
    create: protectedProcedure
      .input(z.object({
        matchId: z.string(),
        name: z.string().min(1).max(50),
        captainId: z.string(),
        viceCaptainId: z.string(),
        players: z.array(z.object({
          playerId: z.string(),
          playerName: z.string(),
          playerRole: z.string().optional(),
          playerTeam: z.string().optional(),
          credits: z.string(),
        })),
        totalCreditsUsed: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        if (input.players.length !== 11) {
          throw new TRPCError({ code: "BAD_REQUEST", message: "Team must have exactly 11 players" });
        }
        if (parseFloat(input.totalCreditsUsed) > 100) {
          throw new TRPCError({ code: "BAD_REQUEST", message: "Total credits cannot exceed 100" });
        }
        const playerIds = input.players.map(p => p.playerId);
        if (!playerIds.includes(input.captainId) || !playerIds.includes(input.viceCaptainId)) {
          throw new TRPCError({ code: "BAD_REQUEST", message: "Captain and vice-captain must be in the team" });
        }
        if (input.captainId === input.viceCaptainId) {
          throw new TRPCError({ code: "BAD_REQUEST", message: "Captain and vice-captain must be different" });
        }
        
        const teamId = await db.createUserTeam(
          { userId: ctx.user.id, matchId: input.matchId, name: input.name, captainId: input.captainId, viceCaptainId: input.viceCaptainId, totalCreditsUsed: input.totalCreditsUsed },
          input.players.map(p => ({ playerId: p.playerId, playerName: p.playerName, playerRole: p.playerRole || null, playerTeam: p.playerTeam || null, credits: p.credits }))
        );
        return { teamId };
      }),
    
    getMyTeams: protectedProcedure.query(async ({ ctx }) => {
      return await db.getUserTeams(ctx.user.id);
    }),
    
    getMyTeamsByMatch: protectedProcedure
      .input(z.object({ matchId: z.string() }))
      .query(async ({ ctx, input }) => {
        return await db.getUserTeamsByMatch(ctx.user.id, input.matchId);
      }),
    
    getTeamDetails: protectedProcedure
      .input(z.object({ teamId: z.number() }))
      .query(async ({ ctx, input }) => {
        const team = await db.getTeamById(input.teamId);
        if (!team || team.userId !== ctx.user.id) {
          throw new TRPCError({ code: "NOT_FOUND", message: "Team not found" });
        }
        const players = await db.getTeamPlayers(input.teamId);
        return { team, players };
      }),
    
    update: protectedProcedure
      .input(z.object({
        teamId: z.number(),
        name: z.string().min(1).max(50).optional(),
        captainId: z.string().optional(),
        viceCaptainId: z.string().optional(),
        players: z.array(z.object({
          playerId: z.string(),
          playerName: z.string(),
          playerRole: z.string().optional(),
          playerTeam: z.string().optional(),
          credits: z.string(),
        })).optional(),
        totalCreditsUsed: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        const team = await db.getTeamById(input.teamId);
        if (!team || team.userId !== ctx.user.id) {
          throw new TRPCError({ code: "NOT_FOUND", message: "Team not found" });
        }
        if (team.isLocked) {
          throw new TRPCError({ code: "FORBIDDEN", message: "Team is locked" });
        }
        const updates: any = {};
        if (input.name) updates.name = input.name;
        if (input.captainId) updates.captainId = input.captainId;
        if (input.viceCaptainId) updates.viceCaptainId = input.viceCaptainId;
        if (input.totalCreditsUsed) updates.totalCreditsUsed = input.totalCreditsUsed;
        if (Object.keys(updates).length > 0) await db.updateUserTeam(input.teamId, updates);
        if (input.players) {
          await db.updateTeamPlayers(input.teamId, input.players.map(p => ({ playerId: p.playerId, playerName: p.playerName, playerRole: p.playerRole || null, playerTeam: p.playerTeam || null, credits: p.credits })));
        }
        return { success: true };
      }),
    
    delete: protectedProcedure
      .input(z.object({ teamId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        const team = await db.getTeamById(input.teamId);
        if (!team || team.userId !== ctx.user.id) {
          throw new TRPCError({ code: "NOT_FOUND", message: "Team not found" });
        }
        if (team.isLocked) {
          throw new TRPCError({ code: "FORBIDDEN", message: "Team is locked" });
        }
        await db.deleteUserTeam(input.teamId);
        return { success: true };
      }),
  }),

  // Contests
  contests: router({
    getByMatch: publicProcedure
      .input(z.object({ matchId: z.string() }))
      .query(async ({ input }) => {
        return await db.getContestsByMatch(input.matchId);
      }),
    
    getDetails: publicProcedure
      .input(z.object({ contestId: z.number() }))
      .query(async ({ input }) => {
        const contest = await db.getContestById(input.contestId);
        if (!contest) throw new TRPCError({ code: "NOT_FOUND", message: "Contest not found" });
        return contest;
      }),
    
    join: protectedProcedure
      .input(z.object({ contestId: z.number(), teamId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        const contest = await db.getContestById(input.contestId);
        if (!contest) throw new TRPCError({ code: "NOT_FOUND", message: "Contest not found" });
        if (contest.status !== "upcoming") throw new TRPCError({ code: "FORBIDDEN", message: "Contest closed" });
        if (contest.currentEntries && contest.currentEntries >= contest.maxEntries) {
          throw new TRPCError({ code: "FORBIDDEN", message: "Contest is full" });
        }
        const team = await db.getTeamById(input.teamId);
        if (!team || team.userId !== ctx.user.id) throw new TRPCError({ code: "NOT_FOUND", message: "Team not found" });
        if (team.matchId !== contest.matchId) throw new TRPCError({ code: "BAD_REQUEST", message: "Team not for this match" });
        try {
          const entryId = await db.joinContest({ contestId: input.contestId, userId: ctx.user.id, teamId: input.teamId });
          return { entryId };
        } catch (error: any) {
          throw new TRPCError({ code: "BAD_REQUEST", message: error.message || "Failed to join" });
        }
      }),
    
    getLeaderboard: publicProcedure
      .input(z.object({ contestId: z.number() }))
      .query(async ({ input }) => {
        const entries = await db.getContestEntries(input.contestId);
        return entries.map((e, index) => ({
          rank: index + 1,
          userName: e.user.name,
          teamName: e.team.name,
          points: e.entry.points,
          teamId: e.team.id,
        }));
      }),
    
    getMyEntries: protectedProcedure.query(async ({ ctx }) => {
      return await db.getUserContestEntries(ctx.user.id);
    }),
    
    create: protectedProcedure
      .input(z.object({
        matchId: z.string(),
        name: z.string(),
        description: z.string().optional(),
        maxEntries: z.number().min(2),
        prizeDescription: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") throw new TRPCError({ code: "FORBIDDEN", message: "Admin only" });
        const contestId = await db.createContest({
          matchId: input.matchId,
          name: input.name,
          description: input.description || null,
          maxEntries: input.maxEntries,
          prizeDescription: input.prizeDescription || null,
        });
        return { contestId };
      }),
    
    // Seed contests for a match (creates default free contests)
    seed: protectedProcedure
      .input(z.object({ matchId: z.string() }))
      .mutation(async ({ ctx, input }) => {
        // Check if contests already exist for this match
        const existingContests = await db.getContestsByMatch(input.matchId);
        if (existingContests.length > 0) {
          return { message: "Contests already exist for this match", contestIds: existingContests.map(c => c.id) };
        }
        
        // Create default free contests
        const defaultContests = [
          { name: "Mega Contest", description: "The biggest free contest! Compete with thousands of players.", maxEntries: 10000, prizeDescription: "Top 10% win bragging rights!" },
          { name: "Head to Head", description: "1v1 battle - prove you're the best!", maxEntries: 2, prizeDescription: "Winner takes all glory!" },
          { name: "Small League", description: "Perfect for beginners and casual players.", maxEntries: 10, prizeDescription: "Top 3 positions rewarded!" },
          { name: "Winners Circle", description: "For the competitive players.", maxEntries: 100, prizeDescription: "Top 10 positions rewarded!" },
        ];
        
        const contestIds: number[] = [];
        for (const contest of defaultContests) {
          const contestId = await db.createContest({
            matchId: input.matchId,
            name: contest.name,
            description: contest.description,
            maxEntries: contest.maxEntries,
            prizeDescription: contest.prizeDescription,
          });
          contestIds.push(contestId);
        }
        
        return { message: "Contests seeded successfully", contestIds };
      }),
    
    // Sync contest status with match status
    sync: publicProcedure.mutation(async () => {
      // Get all upcoming contests
      const allContests = await db.getAllContests();
      let updated = 0;
      
      for (const contest of allContests) {
        try {
          // Fetch match info from CricAPI
          const matchData = await fetchCricAPI("match_info", { id: contest.matchId });
          const match = matchData.data;
          
          if (!match) continue;
          
          let newStatus = contest.status;
          
          if (match.matchEnded) {
            newStatus = "completed";
          } else if (match.matchStarted) {
            newStatus = "live";
          } else {
            newStatus = "upcoming";
          }
          
          if (newStatus !== contest.status) {
            await db.updateContestStatus(contest.id, newStatus);
            updated++;
          }
        } catch (error) {
          console.error(`Failed to sync contest ${contest.id}:`, error);
        }
      }
      
      return { message: `Synced ${updated} contests`, updated };
    }),
  }),

  // Dashboard
  dashboard: router({
    getStats: protectedProcedure.query(async ({ ctx }) => {
      const teams = await db.getUserTeams(ctx.user.id);
      const entries = await db.getUserContestEntries(ctx.user.id);
      const totalPoints = entries.reduce((sum, e) => sum + parseFloat(e.entry.points?.toString() || "0"), 0);
      let bestRank: number | null = null;
      for (const entry of entries) {
        if (entry.entry.rankPosition && (!bestRank || entry.entry.rankPosition < bestRank)) {
          bestRank = entry.entry.rankPosition;
        }
      }
      return {
        totalPoints,
        contestsJoined: entries.length,
        teamsCreated: teams.length,
        bestRank,
        recentTeams: teams.slice(0, 5),
        recentEntries: entries.slice(0, 5),
      };
    }),
  }),
});

export type AppRouter = typeof appRouter;
