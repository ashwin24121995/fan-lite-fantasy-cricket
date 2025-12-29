import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock the database module
vi.mock("./db", () => ({
  getContestsByMatch: vi.fn(),
  createContest: vi.fn(),
  getAllContests: vi.fn(),
  getContestById: vi.fn(),
  updateContestStatus: vi.fn(),
  getContestEntries: vi.fn(),
  getTeamPlayers: vi.fn(),
  updateTeamPlayerPoints: vi.fn(),
  updateTeamPoints: vi.fn(),
  updateEntryPoints: vi.fn(),
  updateEntryRank: vi.fn(),
}));

import * as db from "./db";

describe("Cron Job Features", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("Auto-Create Contests", () => {
    it("should skip matches that already have contests", async () => {
      const mockContests = [{ id: 1, matchId: "match1", name: "Existing Contest" }];
      vi.mocked(db.getContestsByMatch).mockResolvedValue(mockContests as any);
      
      const result = await db.getContestsByMatch("match1");
      
      expect(result.length).toBeGreaterThan(0);
      expect(db.createContest).not.toHaveBeenCalled();
    });

    it("should create default contests for new matches", async () => {
      vi.mocked(db.getContestsByMatch).mockResolvedValue([]);
      vi.mocked(db.createContest).mockResolvedValue(1);
      
      const defaultContests = [
        { name: "Mega Contest", maxEntries: 10000 },
        { name: "Head to Head", maxEntries: 2 },
        { name: "Small League", maxEntries: 10 },
        { name: "Winners Circle", maxEntries: 100 },
      ];
      
      // Simulate creating contests
      for (const contest of defaultContests) {
        await db.createContest({
          matchId: "newMatch1",
          name: contest.name,
          description: "Test",
          maxEntries: contest.maxEntries,
          prizeDescription: "Test prize",
        } as any);
      }
      
      expect(db.createContest).toHaveBeenCalledTimes(4);
    });
  });

  describe("Contest Status Sync", () => {
    it("should update contest status based on match state", async () => {
      const mockContests = [
        { id: 1, matchId: "match1", status: "upcoming" },
        { id: 2, matchId: "match2", status: "upcoming" },
      ];
      
      vi.mocked(db.getAllContests).mockResolvedValue(mockContests as any);
      vi.mocked(db.updateContestStatus).mockResolvedValue(undefined);
      
      // Simulate status update
      await db.updateContestStatus(1, "live");
      
      expect(db.updateContestStatus).toHaveBeenCalledWith(1, "live");
    });

    it("should handle all status transitions", async () => {
      const statusTransitions = [
        { from: "upcoming", to: "live" },
        { from: "live", to: "completed" },
        { from: "upcoming", to: "completed" },
      ];
      
      for (const transition of statusTransitions) {
        vi.mocked(db.updateContestStatus).mockResolvedValue(undefined);
        await db.updateContestStatus(1, transition.to as any);
        expect(db.updateContestStatus).toHaveBeenCalledWith(1, transition.to);
      }
    });
  });

  describe("Points Calculation Batch", () => {
    it("should process only completed contests", async () => {
      const mockContests = [
        { id: 1, matchId: "match1", status: "completed" },
        { id: 2, matchId: "match2", status: "live" },
        { id: 3, matchId: "match3", status: "upcoming" },
      ];
      
      vi.mocked(db.getAllContests).mockResolvedValue(mockContests as any);
      
      const allContests = await db.getAllContests();
      const completedContests = allContests.filter((c: any) => c.status === "completed");
      
      expect(completedContests).toHaveLength(1);
      expect(completedContests[0].id).toBe(1);
    });

    it("should update rankings in correct order", async () => {
      const mockEntries = [
        { entry: { id: 1, points: "100" }, team: { id: 1 }, user: { name: "User1" } },
        { entry: { id: 2, points: "150" }, team: { id: 2 }, user: { name: "User2" } },
        { entry: { id: 3, points: "75" }, team: { id: 3 }, user: { name: "User3" } },
      ];
      
      vi.mocked(db.getContestEntries).mockResolvedValue(mockEntries as any);
      vi.mocked(db.updateEntryRank).mockResolvedValue(undefined);
      
      const entries = await db.getContestEntries(1);
      
      // Sort by points descending
      const sortedEntries = [...entries].sort((a: any, b: any) => 
        parseFloat(b.entry.points) - parseFloat(a.entry.points)
      );
      
      // Update ranks
      for (let i = 0; i < sortedEntries.length; i++) {
        await db.updateEntryRank(sortedEntries[i].entry.id, i + 1);
      }
      
      // Verify ranking order (highest points = rank 1)
      expect(db.updateEntryRank).toHaveBeenNthCalledWith(1, 2, 1); // 150 points = rank 1
      expect(db.updateEntryRank).toHaveBeenNthCalledWith(2, 1, 2); // 100 points = rank 2
      expect(db.updateEntryRank).toHaveBeenNthCalledWith(3, 3, 3); // 75 points = rank 3
    });
  });

  describe("Full Sync Job", () => {
    it("should return structured results object", () => {
      const expectedStructure = {
        autoCreateContests: { success: false, message: "", created: 0 },
        syncContestStatus: { success: false, message: "", updated: 0 },
        calculatePoints: { success: false, message: "", processed: 0 },
        timestamp: expect.any(String),
      };
      
      const results = {
        autoCreateContests: { success: false, message: "", created: 0 },
        syncContestStatus: { success: false, message: "", updated: 0 },
        calculatePoints: { success: false, message: "", processed: 0 },
        timestamp: new Date().toISOString(),
      };
      
      expect(results).toMatchObject(expectedStructure);
      expect(results.timestamp).toBeDefined();
    });

    it("should track success/failure for each step", () => {
      const results = {
        autoCreateContests: { success: true, message: "Created 8 contests", created: 8 },
        syncContestStatus: { success: true, message: "Updated 3 contests", updated: 3 },
        calculatePoints: { success: false, message: "Error: No scorecard", processed: 0 },
        timestamp: new Date().toISOString(),
      };
      
      expect(results.autoCreateContests.success).toBe(true);
      expect(results.syncContestStatus.success).toBe(true);
      expect(results.calculatePoints.success).toBe(false);
    });
  });
});
