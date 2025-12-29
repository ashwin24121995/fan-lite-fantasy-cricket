# Fan Lite Fantasy Cricket

**EntertainmentLimitless** - India's favorite free-to-play fantasy cricket platform.

## Features

- **100% Free to Play** - No entry fees, no monetary stakes
- **Real-time Cricket Data** - Live matches, scores, and player stats from CricAPI
- **Fantasy Team Builder** - Create teams with 100-credit budget system
- **Free Contests** - Compete with other cricket fans
- **Live Scoring** - Fantasy points calculated in real-time
- **Leaderboards** - Track your rankings and performance

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS 4, shadcn/ui
- **Backend**: Express.js, tRPC
- **Database**: MySQL (Railway)
- **API**: CricAPI for real-time cricket data

## Pages (21 Total)

### Main Pages
- Home, Login, Register, Dashboard
- Matches, Match Details, Live Scores
- Create Team, My Teams
- Contests, My Contests, Contest Details, Leaderboard

### Informational Pages
- About Us, How to Play, FAQ, Contact Us
- Terms of Service, Privacy Policy
- Fair Play Policy, Responsible Gaming

## Railway Deployment

### Prerequisites
1. Railway account
2. GitHub repository connected to Railway
3. MySQL database provisioned on Railway
4. CricAPI key

### Environment Variables

Set these in your Railway project:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | MySQL connection string (auto-set if using Railway MySQL) |
| `JWT_SECRET` | Secret key for JWT tokens (min 32 characters) |
| `CRIC_API_KEY` | Your CricAPI key for cricket data |
| `NODE_ENV` | Set to `production` |
| `PORT` | Set to `3000` (or Railway will auto-assign) |

### Deployment Steps

1. **Connect Repository**
   - Go to Railway Dashboard
   - Create new project from GitHub repo

2. **Add MySQL Database**
   - Click "New" → "Database" → "MySQL"
   - Railway will auto-inject `DATABASE_URL`

3. **Set Environment Variables**
   - Go to your service → Variables
   - Add `JWT_SECRET` and `CRIC_API_KEY`

4. **Deploy**
   - Railway will auto-deploy on push to main branch
   - Build command: `pnpm install && pnpm build`
   - Start command: `pnpm start`

5. **Run Database Migrations**
   - After first deploy, run: `pnpm db:push`
   - Or use Railway CLI: `railway run pnpm db:push`

## Local Development

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env with your values

# Run database migrations
pnpm db:push

# Start development server
pnpm dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm db:push` | Push database schema changes |
| `pnpm test` | Run tests |

## Points System

| Action | Points |
|--------|--------|
| Run scored | 1 point |
| Half-century bonus | +10 points |
| Century bonus | +25 points |
| Wicket taken | 25 points |
| 3-wicket haul bonus | +10 points |
| 5-wicket haul bonus | +25 points |
| Catch | 10 points |
| Stumping | 15 points |
| Run-out | 10 points |
| Captain | 2x multiplier |
| Vice-Captain | 1.5x multiplier |

## License

MIT License - Free to use for personal and commercial projects.

## Disclaimer

Fan Lite Fantasy Cricket is a free-to-play fantasy sports platform. No real money is involved. This is a game of skill intended for users 18 years and above residing in India. Play responsibly.

---

Made with ❤️ for Indian Cricket Fans
