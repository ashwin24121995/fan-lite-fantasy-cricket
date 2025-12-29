# PDF Requirements Analysis

## Part 1: Project Setup, Core Configuration, and Base Styles
- Project initialization with Next.js, TypeScript, Tailwind CSS
- Dependencies: Drizzle ORM, MySQL driver, NextAuth.js, react-hot-toast, date-fns
- Environment variables: DATABASE_URL, CRIC_API_KEY, NEXTAUTH_URL, NEXTAUTH_SECRET, CRON_SECRET
- Base styles: Dark theme with bg-[#0a0f1a] and text-gray-300

## Part 2: Database Schema, ORM, and Initialization API
### Database Tables:
1. **users** - id, name, email, password, createdAt
2. **user_teams** - id, userId, matchId, name, captainId, viceCaptainId, totalCreditsUsed, createdAt
3. **team_players** - id, teamId, playerId
4. **contests** - id, matchId, name, entryFee, prizePool, maxEntries, currentEntries, status, createdAt
5. **contest_entries** - id, contestId, userId, teamId, points, rankPosition, createdAt

### API Endpoints needed:
- Database initialization endpoint


## Part 3: Authentication (NextAuth.js) and User API
- NextAuth.js API route with CredentialsProvider
- bcrypt password comparison
- JWT session strategy
- Custom login page at /login
- User Registration API at /api/register
- Login Page UI
- Registration Page UI


## Part 4: Cricket Data API Integration and Match Display

### CricAPI Library (src/lib/cricketApi.ts):
- **getMatches()** - Fetch from `/cricScore` endpoint with 60s revalidation
- **getMatchSquad(matchId)** - Fetch from `/match_squad` endpoint

### API Routes:
- **GET /api/cricscore** - Returns { live, upcoming, completed } matches
  - live: matches where ms === "live"
  - upcoming: matches where ms === "fixture" (sorted by date ascending)
  - completed: matches where ms === "result" (sorted by date descending)
- **GET /api/matches/[id]/squad** - Returns squad for specific match

## Part 5: Core Application Pages (Homepage, Dashboard, Matches)

### Components:
- Header component with navigation links (About, How to Play, FAQ, Contact)
- Session-based auth buttons (Dashboard/Logout or Login/Register)

### Pages Required:
- Homepage
- Dashboard
- Matches list page


### Homepage Components (Part 5.3):
- FeaturedContestsSection
- LiveMatchesSection
- UpcomingMatchesSection
- CompletedMatchesSection

### Dashboard Page (Part 5.4):
- User dashboard with stats

### Matches Page (Part 5.5):
- LiveMatchesSection
- UpcomingMatchesSection
- CompletedMatchesSection

## Part 6: Team Creation Flow (UI and API)

### Team Creation API (POST /api/teams):
- Requires session authentication
- Validates: matchId, name, players (must be 11), captainId, viceCaptainId
- Creates team in userTeams table
- Creates player entries in teamPlayers table

### Team Creation Page UI:
- Player interface with: pid, name, role, battingStyle, bowlingStyle, country, playerImg, credits
- Team state with: name, players[], captainId, viceCaptainId, totalCredits
- Features:
  - Fetch squad data from API
  - Player selection with role filters (All, Batsman, Bowler, All-Rounder, Wicket-Keeper)
  - 100 credit budget system
  - Captain/Vice-Captain selection
  - Team validation (11 players, budget limit)


## Part 7: Contest System (API, Pages, and Seeding)

### Contest List API (GET /api/contests):
- Returns all contests with count

### Contest Seeding API (POST /api/contests/seed):
- Creates sample contests for a match
- Sample contests:
  - Mega Contest: entryFee 10, prizePool 1000, maxEntries 100
  - Head to Head: entryFee 50, prizePool 90, maxEntries 2
  - Winner Takes All: entryFee 25, prizePool 225, maxEntries 10

### Join Contest API (POST /api/contests/join):
- Requires session authentication
- Validates: contestId, teamId
- Checks if contest is full (currentEntries >= maxEntries)
- Creates entry in contestEntries table
- Increments currentEntries in contests table

### Match Contests Page (/dashboard/matches/[id]/contests):
- Lists all contests for a specific match
- Shows: name, entryFee, prizePool, maxEntries, currentEntries
- Join button for each contest


## Part 8: Live Score System and Automated Contest Sync

### Live Score Page (/dashboard/live-scores/[id]):
- Displays live scores for a specific match
- Auto-refresh every 30 seconds
- Shows: team1 vs team2, score, status
- Toggle button for enable/disable auto-refresh

### Contest Sync API (GET /api/contests/sync):
- Synchronizes contest status with match status
- Match status types: "fixture" (upcoming), "live", "result" (completed)
- Updates contest status to: "upcoming", "live", "completed"
- Auto-creates contests for new upcoming matches
- Calculates points for completed contests

### Cron Job API (GET /api/cron/sync-contests):
- Requires CRON_SECRET authorization
- Triggers the contest sync process
- Can be called by external cron service

## Part 9: Informational Pages and Final Touches

### Required Informational Pages:
1. /about - About Us page
2. /how-to-play - How to Play tutorial
3. /faq - Frequently Asked Questions
4. /contact - Contact page
5. /terms - Terms of Service
6. /privacy - Privacy Policy
7. /fair-play - Fair Play Policy
8. /responsible-gaming - Responsible Gaming


## Part 10: Deployment and Final Verification

### Environment Variables Required:
- DATABASE_URL
- CRIC_API_KEY
- NEXTAUTH_URL
- NEXTAUTH_SECRET
- CRON_SECRET (optional)

### Final Verification Checklist:
1. User Registration and Login
2. Database Initialization (/api/db-init)
3. Match Display on homepage and matches page
4. Team Creation for upcoming match
5. Contest Seeding (/api/contests/seed with match ID)
6. Join Contest with team
7. Live Scores page with auto-refresh
8. Contest Sync via cron job (/api/cron/sync-contests)
9. Leaderboard for completed contests

## Appendix A: Complete Project File Structure

### Required Images:
- favicon.ico, favicon.webp
- logo-full.webp, logo-icon.webp, logo-hero.webp
- images/hero-bg.webp
- images/feature-team.webp
- images/feature-contest.webp
- images/feature-live.webp
- images/auth-bg.webp
- images/about-hero.webp
- images/faq-hero.webp

### Required API Routes:
- /api/auth/[...nextauth] - Authentication
- /api/register - User registration
- /api/db-init - Database initialization
- /api/cricscore - Live cricket scores
- /api/matches/[id]/squad - Match squad
- /api/teams - Team CRUD
- /api/contests - Contest list
- /api/contests/join - Join contest
- /api/contests/seed - Seed contests
- /api/contests/sync - Sync contest status
- /api/my-entries - User's contest entries
- /api/contests/[id]/leaderboard - Contest leaderboard
- /api/cron/sync-contests - Cron job for sync

### Required Components:
- Header.tsx
- Footer.tsx
- LiveMatchesSection.tsx
- UpcomingMatchesSection.tsx
- CompletedMatchesSection.tsx
- FeaturedContestsSection.tsx
- CricScoreMatchCard.tsx
- HeroCTA.tsx
- AuthAwareCTA.tsx

## Appendix B: Common Issues
- "Unknown column" error → Call /api/db-init
- "Failed to create team" → Ensure ALTER TABLE is run
- Contests not showing → Call /api/contests/seed
- Text not visible → Ensure dark theme is consistent
- Favicon not showing → Add favicon.ico to public/

