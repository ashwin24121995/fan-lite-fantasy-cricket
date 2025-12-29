import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";
import { TRPCError } from "@trpc/server";

const CRIC_API_KEY = process.env.CRIC_API_KEY;
const CRIC_API_BASE = "https://api.cricapi.com/v1";

// Fantasy Points Calculation System
const POINTS_SYSTEM = {
  // Batting
  RUN: 1,
  BOUNDARY_BONUS: 1, // 4s
  SIX_BONUS: 2, // 6s
  HALF_CENTURY: 8,
  CENTURY: 16,
  DUCK: -2, // 0 runs (only for batsmen)
  
  // Bowling
  WICKET: 25,
  MAIDEN: 8,
  THREE_WICKETS: 4,
  FOUR_WICKETS: 8,
  FIVE_WICKETS: 16,
  
  // Fielding
  CATCH: 8,
  STUMPING: 12,
  RUN_OUT_DIRECT: 12,
  RUN_OUT_INDIRECT: 6,
  
  // Economy Rate (per over, min 2 overs)
  ECONOMY_BELOW_5: 6,
  ECONOMY_5_TO_6: 4,
  ECONOMY_6_TO_7: 2,
  ECONOMY_9_TO_10: -2,
  ECONOMY_10_TO_11: -4,
  ECONOMY_ABOVE_11: -6,
  
  // Strike Rate (min 10 balls)
  SR_ABOVE_170: 6,
  SR_150_TO_170: 4,
  SR_130_TO_150: 2,
  SR_60_TO_70: -2,
  SR_50_TO_60: -4,
  SR_BELOW_50: -6,
  
  // Captain/Vice-Captain multipliers
  CAPTAIN_MULTIPLIER: 2,
  VICE_CAPTAIN_MULTIPLIER: 1.5,
};

// Helper function to calculate player points from scorecard
function calculatePlayerPoints(
  player: { playerId: string; playerName: string; playerRole?: string | null },
  scorecard: any,
  captainId: string,
  viceCaptainId: string
): number {
  let points = 0;
  
  // Find player stats in scorecard
  const allInnings = scorecard?.scorecard || [];
  
  for (const innings of allInnings) {
    // Batting stats
    const battingStats = innings?.batsman?.find((b: any) => 
      b.batsman_id === player.playerId || 
      b.batsman?.toLowerCase().includes(player.playerName.toLowerCase().split(' ')[0])
    );
    
    if (battingStats) {
      const runs = parseInt(battingStats.r || battingStats.runs || 0);
      const balls = parseInt(battingStats.b || battingStats.balls || 0);
      const fours = parseInt(battingStats['4s'] || battingStats.fours || 0);
      const sixes = parseInt(battingStats['6s'] || battingStats.sixes || 0);
      
      // Runs
      points += runs * POINTS_SYSTEM.RUN;
      
      // Boundaries
      points += fours * POINTS_SYSTEM.BOUNDARY_BONUS;
      points += sixes * POINTS_SYSTEM.SIX_BONUS;
      
      // Milestones
      if (runs >= 100) points += POINTS_SYSTEM.CENTURY;
      else if (runs >= 50) points += POINTS_SYSTEM.HALF_CENTURY;
      
      // Duck (only for top-order batsmen)
      if (runs === 0 && balls > 0 && player.playerRole !== 'Bowler') {
        points += POINTS_SYSTEM.DUCK;
      }
      
      // Strike rate bonus/penalty (min 10 balls)
      if (balls >= 10) {
        const sr = (runs / balls) * 100;
        if (sr > 170) points += POINTS_SYSTEM.SR_ABOVE_170;
        else if (sr >= 150) points += POINTS_SYSTEM.SR_150_TO_170;
        else if (sr >= 130) points += POINTS_SYSTEM.SR_130_TO_150;
        else if (sr < 50) points += POINTS_SYSTEM.SR_BELOW_50;
        else if (sr < 60) points += POINTS_SYSTEM.SR_50_TO_60;
        else if (sr < 70) points += POINTS_SYSTEM.SR_60_TO_70;
      }
    }
    
    // Bowling stats
    const bowlingStats = innings?.bowler?.find((b: any) => 
      b.bowler_id === player.playerId ||
      b.bowler?.toLowerCase().includes(player.playerName.toLowerCase().split(' ')[0])
    );
    
    if (bowlingStats) {
      const wickets = parseInt(bowlingStats.w || bowlingStats.wickets || 0);
      const overs = parseFloat(bowlingStats.o || bowlingStats.overs || 0);
      const runs = parseInt(bowlingStats.r || bowlingStats.runs || 0);
      const maidens = parseInt(bowlingStats.m || bowlingStats.maidens || 0);
      
      // Wickets
      points += wickets * POINTS_SYSTEM.WICKET;
      
      // Maidens
      points += maidens * POINTS_SYSTEM.MAIDEN;
      
      // Wicket milestones
      if (wickets >= 5) points += POINTS_SYSTEM.FIVE_WICKETS;
      else if (wickets >= 4) points += POINTS_SYSTEM.FOUR_WICKETS;
      else if (wickets >= 3) points += POINTS_SYSTEM.THREE_WICKETS;
      
      // Economy rate (min 2 overs)
      if (overs >= 2) {
        const economy = runs / overs;
        if (economy < 5) points += POINTS_SYSTEM.ECONOMY_BELOW_5;
        else if (economy < 6) points += POINTS_SYSTEM.ECONOMY_5_TO_6;
        else if (economy < 7) points += POINTS_SYSTEM.ECONOMY_6_TO_7;
        else if (economy >= 11) points += POINTS_SYSTEM.ECONOMY_ABOVE_11;
        else if (economy >= 10) points += POINTS_SYSTEM.ECONOMY_10_TO_11;
        else if (economy >= 9) points += POINTS_SYSTEM.ECONOMY_9_TO_10;
      }
    }
  }
  
  // Fielding stats (catches, stumpings, run outs)
  // Note: CricAPI may not provide detailed fielding stats, so we'll check if available
  const catches = scorecard?.catches?.[player.playerId] || 0;
  const stumpings = scorecard?.stumpings?.[player.playerId] || 0;
  const runOuts = scorecard?.runOuts?.[player.playerId] || 0;
  
  points += catches * POINTS_SYSTEM.CATCH;
  points += stumpings * POINTS_SYSTEM.STUMPING;
  points += runOuts * POINTS_SYSTEM.RUN_OUT_DIRECT;
  
  // Apply captain/vice-captain multiplier
  if (player.playerId === captainId) {
    points *= POINTS_SYSTEM.CAPTAIN_MULTIPLIER;
  } else if (player.playerId === viceCaptainId) {
    points *= POINTS_SYSTEM.VICE_CAPTAIN_MULTIPLIER;
  }
  
  return Math.round(points * 100) / 100; // Round to 2 decimal places
}

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
    getAll: publicProcedure.query(async () => {
      return await db.getAllContests();
    }),
    
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
    
    // Auto-create contests for upcoming matches
    autoCreate: publicProcedure.mutation(async () => {
      try {
        // Get all current matches
        const matchData = await fetchCricAPI("currentMatches");
        const matches = matchData.data || [];
        
        // Filter for upcoming matches (not started yet)
        const upcomingMatches = matches.filter((m: any) => 
          !m.matchStarted && !m.matchEnded
        );
        
        let created = 0;
        const createdForMatches: string[] = [];
        
        for (const match of upcomingMatches) {
          // Check if contests already exist for this match
          const existingContests = await db.getContestsByMatch(match.id);
          if (existingContests.length > 0) continue;
          
          // Create default free contests
          const defaultContests = [
            { name: "Mega Contest", description: "The biggest free contest! Compete with thousands of players.", maxEntries: 10000, prizeDescription: "Top 10% win bragging rights!" },
            { name: "Head to Head", description: "1v1 battle - prove you're the best!", maxEntries: 2, prizeDescription: "Winner takes all glory!" },
            { name: "Small League", description: "Perfect for beginners and casual players.", maxEntries: 10, prizeDescription: "Top 3 positions rewarded!" },
            { name: "Winners Circle", description: "For the competitive players.", maxEntries: 100, prizeDescription: "Top 10 positions rewarded!" },
          ];
          
          for (const contest of defaultContests) {
            await db.createContest({
              matchId: match.id,
              name: contest.name,
              description: contest.description,
              maxEntries: contest.maxEntries,
              prizeDescription: contest.prizeDescription,
            });
          }
          
          created += defaultContests.length;
          createdForMatches.push(match.name || match.id);
        }
        
        return { 
          message: `Auto-created ${created} contests for ${createdForMatches.length} matches`,
          created,
          matches: createdForMatches
        };
      } catch (error) {
        console.error("Auto-create contests failed:", error);
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to auto-create contests" });
      }
    }),
    
    // Calculate points for completed matches
    calculatePoints: publicProcedure
      .input(z.object({ contestId: z.number() }))
      .mutation(async ({ input }) => {
        const contest = await db.getContestById(input.contestId);
        if (!contest) throw new TRPCError({ code: "NOT_FOUND", message: "Contest not found" });
        
        // Get match scorecard data
        let scorecard;
        try {
          const scorecardData = await fetchCricAPI("match_scorecard", { id: contest.matchId });
          scorecard = scorecardData.data;
        } catch (error) {
          throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to fetch scorecard" });
        }
        
        if (!scorecard) {
          throw new TRPCError({ code: "NOT_FOUND", message: "Scorecard not available" });
        }
        
        // Get all entries for this contest
        const entries = await db.getContestEntries(input.contestId);
        
        // Calculate points for each entry
        for (const entry of entries) {
          const teamPlayers = await db.getTeamPlayers(entry.team.id);
          let totalPoints = 0;
          
          for (const player of teamPlayers) {
            const playerPoints = calculatePlayerPoints(player, scorecard, entry.team.captainId, entry.team.viceCaptainId);
            totalPoints += playerPoints;
            
            // Update individual player points
            await db.updateTeamPlayerPoints(player.id, playerPoints.toString());
          }
          
          // Update team total points
          await db.updateTeamPoints(entry.team.id, totalPoints.toString());
          
          // Update entry points
          await db.updateEntryPoints(entry.entry.id, totalPoints.toString());
        }
        
        // Update rankings
        const updatedEntries = await db.getContestEntries(input.contestId);
        const sortedEntries = updatedEntries.sort((a, b) => 
          parseFloat(b.entry.points?.toString() || "0") - parseFloat(a.entry.points?.toString() || "0")
        );
        
        for (let i = 0; i < sortedEntries.length; i++) {
          await db.updateEntryRank(sortedEntries[i].entry.id, i + 1);
        }
        
        return { 
          message: `Calculated points for ${entries.length} entries`,
          entriesProcessed: entries.length
        };
      }),
    
    // Batch calculate points for all completed contests
    calculateAllPoints: publicProcedure.mutation(async () => {
      const allContests = await db.getAllContests();
      const completedContests = allContests.filter(c => c.status === "completed");
      
      let processed = 0;
      const errors: string[] = [];
      
      for (const contest of completedContests) {
        try {
          // Get match scorecard data
          const scorecardData = await fetchCricAPI("match_scorecard", { id: contest.matchId });
          const scorecard = scorecardData.data;
          
          if (!scorecard) continue;
          
          // Get all entries for this contest
          const entries = await db.getContestEntries(contest.id);
          
          for (const entry of entries) {
            const teamPlayers = await db.getTeamPlayers(entry.team.id);
            let totalPoints = 0;
            
            for (const player of teamPlayers) {
              const playerPoints = calculatePlayerPoints(player, scorecard, entry.team.captainId, entry.team.viceCaptainId);
              totalPoints += playerPoints;
              await db.updateTeamPlayerPoints(player.id, playerPoints.toString());
            }
            
            await db.updateTeamPoints(entry.team.id, totalPoints.toString());
            await db.updateEntryPoints(entry.entry.id, totalPoints.toString());
          }
          
          // Update rankings
          const updatedEntries = await db.getContestEntries(contest.id);
          const sortedEntries = updatedEntries.sort((a, b) => 
            parseFloat(b.entry.points?.toString() || "0") - parseFloat(a.entry.points?.toString() || "0")
          );
          
          for (let i = 0; i < sortedEntries.length; i++) {
            await db.updateEntryRank(sortedEntries[i].entry.id, i + 1);
          }
          
          processed++;
        } catch (error) {
          errors.push(`Contest ${contest.id}: ${error}`);
        }
      }
      
      return { 
        message: `Processed ${processed} contests`,
        processed,
        errors: errors.length > 0 ? errors : undefined
      };
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
  
  // Cron Jobs - Automated tasks that can be triggered by external schedulers
  cron: router({
    // Full sync job - runs all automated tasks
    fullSync: publicProcedure.mutation(async () => {
      const results = {
        autoCreateContests: { success: false, message: "", created: 0 },
        syncContestStatus: { success: false, message: "", updated: 0 },
        calculatePoints: { success: false, message: "", processed: 0 },
        timestamp: new Date().toISOString(),
      };
      
      // 1. Auto-create contests for new upcoming matches
      try {
        const matchData = await fetchCricAPI("currentMatches");
        const matches = matchData.data || [];
        const upcomingMatches = matches.filter((m: any) => !m.matchStarted && !m.matchEnded);
        
        let created = 0;
        for (const match of upcomingMatches) {
          const existingContests = await db.getContestsByMatch(match.id);
          if (existingContests.length > 0) continue;
          
          const defaultContests = [
            { name: "Mega Contest", description: "The biggest free contest!", maxEntries: 10000, prizeDescription: "Top 10% win bragging rights!" },
            { name: "Head to Head", description: "1v1 battle!", maxEntries: 2, prizeDescription: "Winner takes all glory!" },
            { name: "Small League", description: "Perfect for beginners.", maxEntries: 10, prizeDescription: "Top 3 positions rewarded!" },
            { name: "Winners Circle", description: "For competitive players.", maxEntries: 100, prizeDescription: "Top 10 positions rewarded!" },
          ];
          
          for (const contest of defaultContests) {
            await db.createContest({ matchId: match.id, ...contest });
          }
          created += defaultContests.length;
        }
        
        results.autoCreateContests = { success: true, message: `Created ${created} contests`, created };
      } catch (error) {
        results.autoCreateContests = { success: false, message: `Error: ${error}`, created: 0 };
      }
      
      // 2. Sync contest status with match status
      try {
        const allContests = await db.getAllContests();
        let updated = 0;
        
        for (const contest of allContests) {
          try {
            const matchData = await fetchCricAPI("match_info", { id: contest.matchId });
            const match = matchData.data;
            if (!match) continue;
            
            let newStatus: "upcoming" | "live" | "completed" = "upcoming";
            if (match.matchEnded) newStatus = "completed";
            else if (match.matchStarted) newStatus = "live";
            
            if (newStatus !== contest.status) {
              await db.updateContestStatus(contest.id, newStatus);
              updated++;
            }
          } catch (e) {
            // Skip individual contest errors
          }
        }
        
        results.syncContestStatus = { success: true, message: `Updated ${updated} contests`, updated };
      } catch (error) {
        results.syncContestStatus = { success: false, message: `Error: ${error}`, updated: 0 };
      }
      
      // 3. Calculate points for completed contests
      try {
        const allContests = await db.getAllContests();
        const completedContests = allContests.filter(c => c.status === "completed");
        let processed = 0;
        
        for (const contest of completedContests) {
          try {
            const scorecardData = await fetchCricAPI("match_scorecard", { id: contest.matchId });
            const scorecard = scorecardData.data;
            if (!scorecard) continue;
            
            const entries = await db.getContestEntries(contest.id);
            
            for (const entry of entries) {
              const teamPlayers = await db.getTeamPlayers(entry.team.id);
              let totalPoints = 0;
              
              for (const player of teamPlayers) {
                const playerPoints = calculatePlayerPoints(player, scorecard, entry.team.captainId, entry.team.viceCaptainId);
                totalPoints += playerPoints;
                await db.updateTeamPlayerPoints(player.id, playerPoints.toString());
              }
              
              await db.updateTeamPoints(entry.team.id, totalPoints.toString());
              await db.updateEntryPoints(entry.entry.id, totalPoints.toString());
            }
            
            // Update rankings
            const updatedEntries = await db.getContestEntries(contest.id);
            const sortedEntries = updatedEntries.sort((a, b) => 
              parseFloat(b.entry.points?.toString() || "0") - parseFloat(a.entry.points?.toString() || "0")
            );
            
            for (let i = 0; i < sortedEntries.length; i++) {
              await db.updateEntryRank(sortedEntries[i].entry.id, i + 1);
            }
            
            processed++;
          } catch (e) {
            // Skip individual contest errors
          }
        }
        
        results.calculatePoints = { success: true, message: `Processed ${processed} contests`, processed };
      } catch (error) {
        results.calculatePoints = { success: false, message: `Error: ${error}`, processed: 0 };
      }
      
      return results;
    }),
    
    // Individual cron endpoints for more granular control
    autoCreateContests: publicProcedure.mutation(async () => {
      try {
        const matchData = await fetchCricAPI("currentMatches");
        const matches = matchData.data || [];
        const upcomingMatches = matches.filter((m: any) => !m.matchStarted && !m.matchEnded);
        
        let created = 0;
        const createdForMatches: string[] = [];
        
        for (const match of upcomingMatches) {
          const existingContests = await db.getContestsByMatch(match.id);
          if (existingContests.length > 0) continue;
          
          const defaultContests = [
            { name: "Mega Contest", description: "The biggest free contest!", maxEntries: 10000, prizeDescription: "Top 10% win bragging rights!" },
            { name: "Head to Head", description: "1v1 battle!", maxEntries: 2, prizeDescription: "Winner takes all glory!" },
            { name: "Small League", description: "Perfect for beginners.", maxEntries: 10, prizeDescription: "Top 3 positions rewarded!" },
            { name: "Winners Circle", description: "For competitive players.", maxEntries: 100, prizeDescription: "Top 10 positions rewarded!" },
          ];
          
          for (const contest of defaultContests) {
            await db.createContest({ matchId: match.id, ...contest });
          }
          created += defaultContests.length;
          createdForMatches.push(match.name || match.id);
        }
        
        return { success: true, message: `Created ${created} contests for ${createdForMatches.length} matches`, created, matches: createdForMatches };
      } catch (error) {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: `Failed: ${error}` });
      }
    }),
    
    syncStatus: publicProcedure.mutation(async () => {
      const allContests = await db.getAllContests();
      let updated = 0;
      
      for (const contest of allContests) {
        try {
          const matchData = await fetchCricAPI("match_info", { id: contest.matchId });
          const match = matchData.data;
          if (!match) continue;
          
          let newStatus: "upcoming" | "live" | "completed" = "upcoming";
          if (match.matchEnded) newStatus = "completed";
          else if (match.matchStarted) newStatus = "live";
          
          if (newStatus !== contest.status) {
            await db.updateContestStatus(contest.id, newStatus);
            updated++;
          }
        } catch (e) {
          // Skip individual errors
        }
      }
      
      return { success: true, message: `Updated ${updated} contests`, updated };
    }),
    
    calculateAllPoints: publicProcedure.mutation(async () => {
      const allContests = await db.getAllContests();
      const completedContests = allContests.filter(c => c.status === "completed");
      let processed = 0;
      const errors: string[] = [];
      
      for (const contest of completedContests) {
        try {
          const scorecardData = await fetchCricAPI("match_scorecard", { id: contest.matchId });
          const scorecard = scorecardData.data;
          if (!scorecard) continue;
          
          const entries = await db.getContestEntries(contest.id);
          
          for (const entry of entries) {
            const teamPlayers = await db.getTeamPlayers(entry.team.id);
            let totalPoints = 0;
            
            for (const player of teamPlayers) {
              const playerPoints = calculatePlayerPoints(player, scorecard, entry.team.captainId, entry.team.viceCaptainId);
              totalPoints += playerPoints;
              await db.updateTeamPlayerPoints(player.id, playerPoints.toString());
            }
            
            await db.updateTeamPoints(entry.team.id, totalPoints.toString());
            await db.updateEntryPoints(entry.entry.id, totalPoints.toString());
          }
          
          // Update rankings
          const updatedEntries = await db.getContestEntries(contest.id);
          const sortedEntries = updatedEntries.sort((a, b) => 
            parseFloat(b.entry.points?.toString() || "0") - parseFloat(a.entry.points?.toString() || "0")
          );
          
          for (let i = 0; i < sortedEntries.length; i++) {
            await db.updateEntryRank(sortedEntries[i].entry.id, i + 1);
          }
          
          processed++;
        } catch (error) {
          errors.push(`Contest ${contest.id}: ${error}`);
        }
      }
      
      return { success: true, message: `Processed ${processed} contests`, processed, errors: errors.length > 0 ? errors : undefined };
    }),
  }),
});

export type AppRouter = typeof appRouter;
