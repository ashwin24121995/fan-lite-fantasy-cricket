# Fan Lite Play - Comprehensive TODO List
## Based on PDF Guide vs Current Implementation

---

## Part 1: Project Setup ✅ COMPLETED
- [x] Project initialization
- [x] Dependencies installed
- [x] Environment variables configured
- [x] Database connection setup

## Part 2: Database Schema ✅ COMPLETED
- [x] Users table with custom auth fields (email, password)
- [x] User teams table
- [x] Team players table
- [x] Contests table
- [x] Contest entries table
- [x] Match cache table

## Part 3: Authentication System ✅ COMPLETED
- [x] Custom email/password registration
- [x] Password hashing with bcrypt
- [x] Custom login endpoint
- [x] JWT session management
- [x] Logout functionality
- [x] Protected routes

## Part 4: Cricket API Integration ⚠️ NEEDS FIXES
- [x] CricAPI key stored securely
- [x] Fetch current matches endpoint
- [ ] **FIX: Separate matches by status (fixture/live/result)**
- [ ] **FIX: Use correct API fields for categorization**
- [x] Match details endpoint
- [x] Squad fetching endpoint
- [ ] **ADD: Upcoming matches endpoint (separate API call)**

## Part 5: Team Creation System ✅ MOSTLY COMPLETED
- [x] Create team page with player selection
- [x] 100-credit budget system
- [x] Captain/Vice-captain selection
- [x] Team validation (11 players)
- [x] Save team to database
- [ ] **FIX: Player credits should be based on player data, not random**

## Part 6: Dashboard and User Pages ✅ COMPLETED
- [x] User dashboard with stats
- [x] My Teams page
- [x] My Contests page
- [x] Team editing before match start
- [x] Team deletion

## Part 7: Contest System ⚠️ NEEDS IMPROVEMENTS
- [x] Contest list API
- [x] Join contest functionality
- [x] Contest details page
- [ ] **ADD: Contest seeding API (/api/contests/seed)**
- [ ] **ADD: Auto-create contests for new matches**
- [ ] **FIX: Contest status tracking (upcoming/live/completed)**

## Part 8: Live Score System ⚠️ NEEDS FIXES
- [x] Live scores page created
- [x] Auto-refresh functionality (30 seconds)
- [ ] **ADD: Contest sync API (/api/contests/sync)**
- [ ] **ADD: Cron job API for automated sync**
- [ ] **ADD: Points calculation for completed matches**

## Part 9: Informational Pages ✅ COMPLETED
- [x] About Us page
- [x] How to Play page
- [x] FAQ page
- [x] Contact page
- [x] Terms of Service page
- [x] Privacy Policy page
- [x] Fair Play Policy page
- [x] Responsible Gaming page

## Part 10: Deployment ✅ COMPLETED
- [x] Railway deployment configured
- [x] MySQL database connected
- [x] Environment variables set
- [x] Health check endpoint
- [x] GitHub repository created

---

## CRITICAL FIXES NEEDED

### 1. Matches Page - Category Logic (HIGH PRIORITY)
**Problem:** All matches showing in "Completed" column, Live/Upcoming empty
**Root Cause:** CricAPI `currentMatches` only returns recent matches, need to use match status fields correctly
**Solution:**
- Use `matchStarted` and `matchEnded` fields from API
- `matchStarted: false` → Upcoming
- `matchStarted: true && matchEnded: false` → Live
- `matchEnded: true` → Completed
- May need to fetch from multiple endpoints or filter by date

### 2. Contest Seeding System (MEDIUM PRIORITY)
**Problem:** No contests exist for matches
**Solution:** Create `/api/contests/seed` endpoint that:
- Takes matchId as input
- Creates default free contests (Mega Contest, Head to Head, etc.)
- Should be called when viewing a match or automatically

### 3. Contest Sync System (MEDIUM PRIORITY)
**Problem:** Contest status doesn't update with match status
**Solution:** Create `/api/contests/sync` endpoint that:
- Updates contest status based on match status
- Calculates points for completed matches
- Can be triggered by cron job

### 4. Points Calculation (LOW PRIORITY - COMPLEX)
**Problem:** Fantasy points not calculated from actual match data
**Solution:** Implement scoring engine that:
- Fetches scorecard data from CricAPI
- Calculates points per player based on performance
- Updates team total points
- Updates leaderboard rankings

---

## MISSING FEATURES TO ADD

### API Endpoints Needed:
- [ ] POST /api/contests/seed - Seed contests for a match
- [ ] GET /api/contests/sync - Sync contest status with match status
- [ ] GET /api/cron/sync-contests - Cron-callable sync endpoint

### UI Improvements Needed:
- [ ] Better empty state messages for Live/Upcoming columns
- [ ] Loading indicators for match data
- [ ] Error handling for API failures

---

## SUMMARY

| Category | Status | Items Done | Items Pending |
|----------|--------|------------|---------------|
| Project Setup | ✅ | 4/4 | 0 |
| Database | ✅ | 6/6 | 0 |
| Authentication | ✅ | 6/6 | 0 |
| Cricket API | ⚠️ | 4/7 | 3 |
| Team Creation | ⚠️ | 5/6 | 1 |
| Dashboard | ✅ | 5/5 | 0 |
| Contest System | ⚠️ | 3/6 | 3 |
| Live Scores | ⚠️ | 2/5 | 3 |
| Info Pages | ✅ | 8/8 | 0 |
| Deployment | ✅ | 5/5 | 0 |
| **TOTAL** | | **48/58** | **10** |

**Completion: ~83%**

