import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal, boolean } from "drizzle-orm/mysql-core";

/**
 * Users table - Custom authentication with email/password
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * User Teams - Fantasy teams created by users
 */
export const userTeams = mysqlTable("user_teams", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  matchId: varchar("matchId", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  captainId: varchar("captainId", { length: 255 }).notNull(),
  viceCaptainId: varchar("viceCaptainId", { length: 255 }).notNull(),
  totalCreditsUsed: decimal("totalCreditsUsed", { precision: 5, scale: 2 }).notNull(),
  totalPoints: decimal("totalPoints", { precision: 10, scale: 2 }).default("0"),
  isLocked: boolean("isLocked").default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type UserTeam = typeof userTeams.$inferSelect;
export type InsertUserTeam = typeof userTeams.$inferInsert;

/**
 * Team Players - Players in a user's fantasy team
 */
export const teamPlayers = mysqlTable("team_players", {
  id: int("id").autoincrement().primaryKey(),
  teamId: int("teamId").notNull().references(() => userTeams.id, { onDelete: "cascade" }),
  playerId: varchar("playerId", { length: 255 }).notNull(),
  playerName: varchar("playerName", { length: 255 }).notNull(),
  playerRole: varchar("playerRole", { length: 100 }),
  playerTeam: varchar("playerTeam", { length: 255 }),
  credits: decimal("credits", { precision: 4, scale: 1 }).notNull(),
  points: decimal("points", { precision: 10, scale: 2 }).default("0"),
});

export type TeamPlayer = typeof teamPlayers.$inferSelect;
export type InsertTeamPlayer = typeof teamPlayers.$inferInsert;

/**
 * Contests - Free to play contests for matches
 */
export const contests = mysqlTable("contests", {
  id: int("id").autoincrement().primaryKey(),
  matchId: varchar("matchId", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  maxEntries: int("maxEntries").notNull(),
  currentEntries: int("currentEntries").default(0),
  status: mysqlEnum("status", ["upcoming", "live", "completed"]).default("upcoming").notNull(),
  prizeDescription: text("prizeDescription"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Contest = typeof contests.$inferSelect;
export type InsertContest = typeof contests.$inferInsert;

/**
 * Contest Entries - User entries in contests
 */
export const contestEntries = mysqlTable("contest_entries", {
  id: int("id").autoincrement().primaryKey(),
  contestId: int("contestId").notNull().references(() => contests.id, { onDelete: "cascade" }),
  userId: int("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  teamId: int("teamId").notNull().references(() => userTeams.id, { onDelete: "cascade" }),
  points: decimal("points", { precision: 10, scale: 2 }).default("0"),
  rankPosition: int("rankPosition"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ContestEntry = typeof contestEntries.$inferSelect;
export type InsertContestEntry = typeof contestEntries.$inferInsert;

/**
 * Match Cache - Cache for match data from CricAPI
 */
export const matchCache = mysqlTable("match_cache", {
  id: int("id").autoincrement().primaryKey(),
  matchId: varchar("matchId", { length: 255 }).notNull().unique(),
  matchData: text("matchData").notNull(),
  squadData: text("squadData"),
  lastUpdated: timestamp("lastUpdated").defaultNow().onUpdateNow().notNull(),
});

export type MatchCache = typeof matchCache.$inferSelect;
export type InsertMatchCache = typeof matchCache.$inferInsert;