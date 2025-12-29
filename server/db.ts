import { eq, and, desc, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import bcrypt from "bcryptjs";
import { 
  InsertUser, users, 
  InsertUserTeam, userTeams, 
  InsertTeamPlayer, teamPlayers,
  InsertContest, contests,
  InsertContestEntry, contestEntries,
  matchCache
} from "../drizzle/schema";

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

// ==================== USER AUTHENTICATION ====================

export async function createUser(name: string, email: string, password: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const hashedPassword = await bcrypt.hash(password, 10);
  
  const result = await db.insert(users).values({
    name,
    email,
    password: hashedPassword,
  });

  return result;
}

export async function getUserByEmail(email: string) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getUserById(id: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function verifyPassword(email: string, password: string) {
  const user = await getUserByEmail(email);
  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return null;

  // Update last signed in
  const db = await getDb();
  if (db) {
    await db.update(users).set({ lastSignedIn: new Date() }).where(eq(users.id, user.id));
  }

  return user;
}

// ==================== USER TEAMS ====================

export async function createUserTeam(team: InsertUserTeam, players: Omit<InsertTeamPlayer, 'teamId'>[]) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const [result] = await db.insert(userTeams).values(team);
  const teamId = result.insertId;

  if (players.length > 0) {
    await db.insert(teamPlayers).values(
      players.map(p => ({ ...p, teamId }))
    );
  }

  return teamId;
}

export async function getUserTeams(userId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(userTeams).where(eq(userTeams.userId, userId)).orderBy(desc(userTeams.createdAt));
}

export async function getUserTeamsByMatch(userId: number, matchId: string) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(userTeams).where(
    and(eq(userTeams.userId, userId), eq(userTeams.matchId, matchId))
  ).orderBy(desc(userTeams.createdAt));
}

export async function getTeamById(teamId: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(userTeams).where(eq(userTeams.id, teamId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getTeamPlayers(teamId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(teamPlayers).where(eq(teamPlayers.teamId, teamId));
}

export async function updateUserTeam(teamId: number, updates: Partial<InsertUserTeam>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(userTeams).set(updates).where(eq(userTeams.id, teamId));
}

export async function deleteUserTeam(teamId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Delete team players first (cascade should handle this, but being explicit)
  await db.delete(teamPlayers).where(eq(teamPlayers.teamId, teamId));
  await db.delete(userTeams).where(eq(userTeams.id, teamId));
}

export async function updateTeamPlayers(teamId: number, players: Omit<InsertTeamPlayer, 'teamId'>[]) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Delete existing players
  await db.delete(teamPlayers).where(eq(teamPlayers.teamId, teamId));

  // Insert new players
  if (players.length > 0) {
    await db.insert(teamPlayers).values(
      players.map(p => ({ ...p, teamId }))
    );
  }
}

// ==================== CONTESTS ====================

export async function createContest(contest: InsertContest) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const [result] = await db.insert(contests).values(contest);
  return result.insertId;
}

export async function getContestsByMatch(matchId: string) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(contests).where(eq(contests.matchId, matchId)).orderBy(desc(contests.createdAt));
}

export async function getContestById(contestId: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(contests).where(eq(contests.id, contestId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getAllContests() {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(contests).orderBy(desc(contests.createdAt));
}

export async function updateContestStatus(contestId: number, status: 'upcoming' | 'live' | 'completed') {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(contests).set({ status }).where(eq(contests.id, contestId));
}

// ==================== CONTEST ENTRIES ====================

export async function joinContest(entry: InsertContestEntry) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Check if user already joined with this team
  const existing = await db.select().from(contestEntries).where(
    and(
      eq(contestEntries.contestId, entry.contestId),
      eq(contestEntries.userId, entry.userId),
      eq(contestEntries.teamId, entry.teamId)
    )
  ).limit(1);

  if (existing.length > 0) {
    throw new Error("You have already joined this contest with this team");
  }

  const [result] = await db.insert(contestEntries).values(entry);

  // Increment contest entries count
  await db.update(contests).set({
    currentEntries: sql`${contests.currentEntries} + 1`
  }).where(eq(contests.id, entry.contestId));

  return result.insertId;
}

export async function getContestEntries(contestId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db.select({
    entry: contestEntries,
    user: users,
    team: userTeams
  })
  .from(contestEntries)
  .innerJoin(users, eq(contestEntries.userId, users.id))
  .innerJoin(userTeams, eq(contestEntries.teamId, userTeams.id))
  .where(eq(contestEntries.contestId, contestId))
  .orderBy(desc(contestEntries.points));
}

export async function getUserContestEntries(userId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db.select({
    entry: contestEntries,
    contest: contests,
    team: userTeams
  })
  .from(contestEntries)
  .innerJoin(contests, eq(contestEntries.contestId, contests.id))
  .innerJoin(userTeams, eq(contestEntries.teamId, userTeams.id))
  .where(eq(contestEntries.userId, userId))
  .orderBy(desc(contestEntries.createdAt));
}

export async function updateEntryPoints(entryId: number, points: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(contestEntries).set({ points }).where(eq(contestEntries.id, entryId));
}

// ==================== MATCH CACHE ====================

export async function getCachedMatch(matchId: string) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(matchCache).where(eq(matchCache.matchId, matchId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function upsertMatchCache(matchId: string, matchData: string, squadData?: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.insert(matchCache).values({
    matchId,
    matchData,
    squadData: squadData || null
  }).onDuplicateKeyUpdate({
    set: {
      matchData,
      squadData: squadData || sql`squadData`
    }
  });
}


// ==================== POINTS CALCULATION ====================

export async function updateTeamPlayerPoints(playerId: number, points: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(teamPlayers).set({ points }).where(eq(teamPlayers.id, playerId));
}

export async function updateTeamPoints(teamId: number, totalPoints: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(userTeams).set({ totalPoints }).where(eq(userTeams.id, teamId));
}

export async function updateEntryRank(entryId: number, rankPosition: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(contestEntries).set({ rankPosition }).where(eq(contestEntries.id, entryId));
}

export async function getUpcomingContests() {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(contests).where(eq(contests.status, "upcoming"));
}

export async function getCompletedContests() {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(contests).where(eq(contests.status, "completed"));
}
