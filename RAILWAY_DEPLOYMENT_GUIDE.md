# Railway Deployment Guide - Fan Lite Play

## Project Overview
**Fan Lite Play** - A free-to-play fantasy cricket platform with real-time match data, contest management, and points calculation system.

**Repository:** https://github.com/ashwin24121995/fan-lite-fantasy-cricket

## Latest Deployment Status
- **Latest Commit:** 5c7bc63 - "🎨 Update: Replace logo with better F design"
- **Branch:** main
- **Status:** ✅ All files synced to GitHub

## Key Features Implemented
1. ✅ Hero carousel with 7 rotating images (4s interval)
2. ✅ Cricket Matches section with live/upcoming matches
3. ✅ Join Contests section with contest cards
4. ✅ Fantasy Points System with detailed infographics
5. ✅ Auto-refresh (30s for matches, 3s for live scores)
6. ✅ Team logos on all match cards
7. ✅ Modern F logo (teal/orange with cricket ball and trophy)
8. ✅ Cron job endpoints for automation
9. ✅ Points calculation system
10. ✅ Contest management APIs

## Railway Configuration Checklist

### 1. Environment Variables (Must Set)
```
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
VITE_APP_ID=your_app_id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=your_oauth_portal_url
OWNER_OPEN_ID=your_owner_id
OWNER_NAME=your_owner_name
BUILT_IN_FORGE_API_KEY=your_api_key
BUILT_IN_FORGE_API_URL=your_api_url
VITE_FRONTEND_FORGE_API_KEY=your_frontend_key
VITE_FRONTEND_FORGE_API_URL=your_frontend_url
CRIC_API_KEY=your_cricapi_key
```

### 2. Build Command
```bash
pnpm install && pnpm build
```

### 3. Start Command
```bash
pnpm start
```

### 4. Port
```
3000
```

## Deployment Steps

### Step 1: Connect GitHub Repository
1. Go to Railway Dashboard
2. Click "New Project" → "Deploy from GitHub"
3. Select: `ashwin24121995/fan-lite-fantasy-cricket`
4. Click "Deploy"

### Step 2: Configure Environment Variables
1. Go to Project Settings
2. Add all environment variables from the checklist above
3. Save changes

### Step 3: Configure Database
1. Add MySQL/PostgreSQL plugin from Railway marketplace
2. Railway will auto-generate DATABASE_URL
3. Run migrations: `pnpm db:push`

### Step 4: Verify Deployment
After deployment completes, verify:
- [ ] Homepage loads with hero carousel
- [ ] Logo displays correctly in header
- [ ] Cricket Matches section shows matches
- [ ] Join Contests section displays (may show "No Contests Available" initially)
- [ ] Fantasy Points System section displays with infographics
- [ ] All images load correctly
- [ ] Auto-refresh working (30s for matches)

## Troubleshooting

### Contest Section Shows "No Contests Available"
**Cause:** No contests in database or API not responding
**Solution:** 
1. Check database connection
2. Call `/api/trpc/cron.autoCreateContests` to create contests
3. Verify CRIC_API_KEY is set

### Logo Not Displaying
**Cause:** Image path issue or cache
**Solution:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+Shift+R)
3. Verify `/logo.webp` exists in public folder

### Images Not Loading
**Cause:** Missing image files in public folder
**Solution:**
1. Verify all .webp files exist in `client/public/`
2. Check file permissions
3. Clear CDN cache if applicable

### Database Migrations Failed
**Cause:** Schema not pushed to database
**Solution:**
```bash
cd /home/ubuntu/fantasy-cricket-platform
pnpm db:push
```

## File Structure
```
fantasy-cricket-platform/
├── client/
│   ├── src/
│   │   ├── pages/          # All page components
│   │   ├── components/     # Reusable components
│   │   └── lib/            # tRPC client setup
│   └── public/             # Static assets (images, logos)
├── server/
│   ├── routers.ts          # tRPC procedures
│   ├── db.ts               # Database functions
│   └── _core/              # Framework plumbing
├── drizzle/
│   ├── schema.ts           # Database schema
│   └── migrations/         # Database migrations
└── package.json            # Dependencies
```

## API Endpoints

### Matches
- `trpc.matches.getAll` - Get all matches
- `trpc.matches.getUpcoming` - Get upcoming matches
- `trpc.matches.getCompleted` - Get completed matches

### Contests
- `trpc.contests.getAll` - Get all contests
- `trpc.contests.getByMatch` - Get contests for a match
- `trpc.contests.seed` - Create default contests for a match
- `trpc.contests.calculatePoints` - Calculate points for a contest

### Cron Jobs (For Automation)
- `trpc.cron.fullSync` - Auto-create contests, sync status, calculate points
- `trpc.cron.autoCreateContests` - Auto-create contests for upcoming matches
- `trpc.cron.syncStatus` - Sync contest status with match status
- `trpc.cron.calculateAllPoints` - Calculate points for all completed contests

## Recommended Cron Schedule
Set up external cron job (cron-job.org, AWS Lambda, etc.) to call:
```
POST https://your-domain/api/trpc/cron.fullSync
```
**Frequency:** Every 5-10 minutes

## Performance Optimization
- Images are in WebP format for better compression
- Auto-refresh intervals: 30s (matches), 3s (live scores)
- Lazy loading for images
- Optimized database queries

## Support & Monitoring
- Check Railway logs for errors
- Monitor database connection
- Verify API key validity
- Check CricAPI rate limits

## Next Steps
1. Deploy to Railway using this guide
2. Set up cron jobs for automation
3. Monitor logs for any issues
4. Test all features on production
5. Collect user feedback

---
**Last Updated:** December 29, 2025
**Version:** 1.0.0
**Status:** Production Ready ✅
