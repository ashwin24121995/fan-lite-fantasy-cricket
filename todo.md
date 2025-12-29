# Fan Lite Fantasy Cricket - TODO

## Brand Assets
- [x] Generate realistic logo with transparent background
- [x] Create favicon (multiple sizes)
- [x] Generate hero images for landing page
- [x] Apply charcoal/emerald/gold color theme

## Authentication System
- [x] Custom user registration with email/password
- [x] Password hashing with bcrypt
- [x] Custom login with credentials validation
- [x] Secure session management with JWT
- [x] Logout functionality
- [x] Protected routes

## Cricket API Integration (CricAPI - Real-time Only)
- [x] Store CricAPI key securely
- [x] Fetch live matches with real-time scores
- [x] Fetch upcoming fixtures
- [x] Fetch completed matches with results
- [x] Match squad viewer with player details
- [x] Timezone conversion (GMT to IST for Indian users)
- [x] Player information (role, team, credits)

## Fantasy Team Builder
- [x] Player selection interface from match squads
- [x] 100-credit budget system
- [x] Captain designation (2x points)
- [x] Vice-captain designation (1.5x points)
- [x] Team validation (11 players, budget limit)
- [x] Team name customization
- [x] Player role filters (batsman, bowler, all-rounder, wicket-keeper)

## Contest Management (Free to Play Only)
- [x] Create free contests
- [x] Contest listing by match
- [x] Join contest functionality
- [x] Contest status tracking (upcoming/live/completed)
- [x] Maximum entries limit per contest
- [x] Prize distribution display (rankings/rewards)

## Live Scoring Engine
- [x] Fantasy points calculation for runs (1 pt/run, +10 for 50, +25 for 100)
- [x] Points for wickets (25 pts, +10 for 3-wicket, +25 for 5-wicket)
- [x] Points for catches (10 pts)
- [x] Points for stumpings (15 pts)
- [x] Points for run-outs (10 pts)
- [x] Captain 2x multiplier
- [x] Vice-captain 1.5x multiplier
- [x] Real-time points update

## User Dashboard
- [x] View all created teams
- [x] View joined contests
- [x] Current rankings display
- [x] Total points earned
- [x] Recent activity feed

## Contest Leaderboard
- [x] Real-time ranking updates
- [x] Points display per user
- [x] Prize/rank distribution breakdown
- [x] View opponent team details

## Team Management
- [x] Edit team composition before match start
- [x] Change captain/vice-captain
- [x] Delete teams before match start
- [x] Team preview with player stats

## UI/UX
- [x] Unique color theme (charcoal/emerald/gold - no blue/red/white/black)
- [x] Responsive design for all screen sizes
- [x] Navigation header with auth state
- [x] Loading states and skeletons
- [x] Error handling and toast notifications
- [x] Footer with disclaimer and contact info
- [x] "Free to Play" messaging throughout

## Footer Requirements
- [x] Disclaimer: "This is a game of skill. Play responsibly."
- [x] Contact: www.FanLiteFantasyCricket.com
- [x] Copyright notice
- [x] Platform description

## Bug Fixes
- [x] Fix score object rendering error on /matches page (CricAPI returns score as object with r,w,o,inning keys)
- [x] Add all page links to Navbar (Home, Matches, Dashboard, My Teams, My Contests, Leaderboard)
- [x] Add all page links to Footer navigation

## Missing Pages (from PDF Guide Part 9)
- [x] About Us page (/about)
- [x] How to Play page (/how-to-play)
- [x] FAQ page (/faq)
- [x] Contact Us page (/contact)
- [x] Terms of Service page (/terms)
- [x] Privacy Policy page (/privacy)
- [x] Fair Play Policy page (/fair-play)
- [x] Responsible Gaming page (/responsible-gaming)
- [x] Live Scores page (/live-scores/:id)
- [x] Match Contests page (/match/:id/contests)
- [x] Update Footer with all new page links
- [x] Update App.tsx with all new routes

## Railway Deployment
- [x] Create railway.json configuration file
- [x] Create README.md with deployment instructions
- [x] Update database connection for Railway MySQL
- [x] Push changes to GitHub
- [x] Provide deployment instructions

## Bug Fixes - Railway Deployment
- [ ] Fix health check failure - application not starting on Railway
