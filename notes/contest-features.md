# Contest Features from PDF Guide

## Key Features to Implement

### 1. Contest Sync API (Step 8.2)
- Synchronize contest status with match status
- Handle point calculation for completed matches
- Auto-create contests for new upcoming matches

### 2. Logic Flow:
1. Get all matches from CricAPI
2. Categorize by status: fixture (upcoming), live, result (completed)
3. Update contest statuses based on match status:
   - If match is live → contest status = "live"
   - If match is completed → contest status = "completed"
4. Auto-create contests for new upcoming matches that don't have contests yet

### 3. Cron Job API (Step 8.3)
- Create a cron-callable API endpoint to trigger the contest sync process
- Protected with CRON_SECRET for security

### 4. Points Calculation
- Points for runs, wickets, catches, etc.
- Requires fetching detailed match scorecard data
- Calculate points for each player in user teams
- Update contest entries with points
- Rank users based on points

## Implementation Plan for Our Platform:

1. **Contest Seeding API** - Create default contests for matches
2. **Auto-Create Contests** - When new matches appear, auto-create contests
3. **Contest Status Sync** - Update contest status based on match status
4. **Points Calculation** - Calculate fantasy points when match completes
