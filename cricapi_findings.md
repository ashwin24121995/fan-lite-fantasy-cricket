# CricAPI Findings from PDF

## Key Endpoint for Live Matches
The PDF specifies using the **cricScore** endpoint for live matches:
- URL: `https://api.cricapi.com/v1/cricScore?apikey=${CRIC_API_KEY}`

## Match Status Field (ms)
The PDF shows that matches have a `ms` field that indicates status:
- `ms === "live"` - Live matches currently in progress
- `ms === "fixture"` - Upcoming/scheduled matches
- `ms === "result"` - Completed matches with results

## Categorization Logic from PDF
```typescript
const live = matches.filter((m: any) => m.ms === "live");
const upcoming = matches.filter((m: any) => m.ms === "fixture").sort((a: any, b: any) => new Date(a.sdt).getTime() - new Date(b.sdt).getTime());
const completed = matches.filter((m: any) => m.ms === "result").sort((a: any, b: any) => new Date(b.sdt).getTime() - new Date(a.sdt).getTime());
```

## Key Fields
- `ms` - Match status: "live", "fixture", or "result"
- `sdt` - Start date time (for sorting)

## Current Issue
We are using `currentMatches` endpoint and checking `matchStarted`/`matchEnded` flags.
We should use `cricScore` endpoint and check the `ms` field instead.
