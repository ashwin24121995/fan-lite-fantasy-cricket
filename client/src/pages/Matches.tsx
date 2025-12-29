import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, MapPin, Clock, Trophy, AlertCircle, RefreshCw, History, Radio, CalendarClock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useMemo } from "react";

// Convert GMT to IST (add 5 hours 30 minutes)
function convertToIST(dateString: string | undefined): string {
  if (!dateString) return "Time TBD";
  try {
    const date = new Date(dateString);
    // Add 5 hours 30 minutes for IST
    const istDate = new Date(date.getTime() + (5.5 * 60 * 60 * 1000));
    return istDate.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  } catch {
    return dateString;
  }
}

// Get IST date for comparison
function getISTDate(dateString: string | undefined): Date | null {
  if (!dateString) return null;
  try {
    const date = new Date(dateString);
    return new Date(date.getTime() + (5.5 * 60 * 60 * 1000));
  } catch {
    return null;
  }
}

// Categorize matches into Past, Present (Live), Future
function categorizeMatches(matches: any[]) {
  const now = new Date();
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);
  
  const past: any[] = [];
  const live: any[] = [];
  const future: any[] = [];

  matches.forEach((match) => {
    // Check explicit flags from API
    const matchStarted = match.matchStarted === true;
    const matchEnded = match.matchEnded === true;
    
    // Check status string for additional context
    const status = (match.status || "").toLowerCase();
    const isCompletedByStatus = status.includes("won") || status.includes("draw") || 
                                 status.includes("tied") || status.includes("no result") || 
                                 status.includes("abandoned") || status.includes("result");
    const isLiveByStatus = status.includes("live") || status.includes("innings break") || 
                           status.includes("day ") || status.includes("session");
    const isUpcomingByStatus = status.includes("starts at") || status === "";
    
    // Determine category
    if (matchEnded || isCompletedByStatus) {
      past.push(match);
    } else if ((matchStarted && !matchEnded) || isLiveByStatus) {
      live.push(match);
    } else if (!matchStarted || isUpcomingByStatus) {
      // Not started yet = upcoming
      future.push(match);
    } else {
      // Fallback: check date
      const matchDate = getISTDate(match.dateTimeGMT || match.date);
      if (matchDate && matchDate > now) {
        future.push(match);
      } else {
        past.push(match);
      }
    }
  });

  // Sort past by date descending (most recent first)
  past.sort((a, b) => {
    const dateA = getISTDate(a.dateTimeGMT || a.date);
    const dateB = getISTDate(b.dateTimeGMT || b.date);
    if (!dateA || !dateB) return 0;
    return dateB.getTime() - dateA.getTime();
  });

  // Sort future by date ascending (soonest first)
  future.sort((a, b) => {
    const dateA = getISTDate(a.dateTimeGMT || a.date);
    const dateB = getISTDate(b.dateTimeGMT || b.date);
    if (!dateA || !dateB) return 0;
    return dateA.getTime() - dateB.getTime();
  });

  return { past, live, future };
}

function MatchCard({ match, type }: { match: any; type: 'past' | 'live' | 'future' }) {
  const getBadgeClass = () => {
    switch (type) {
      case 'live': return 'badge-live';
      case 'past': return 'badge-completed';
      case 'future': return 'badge-upcoming';
    }
  };

  const getBadgeText = () => {
    switch (type) {
      case 'live': return 'LIVE';
      case 'past': return 'Completed';
      case 'future': return 'Upcoming';
    }
  };

  return (
    <Card className="cricket-card overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="outline" className="text-xs shrink-0">
            {match.matchType?.toUpperCase() || "MATCH"}
          </Badge>
          <span className={getBadgeClass()}>{getBadgeText()}</span>
        </div>
        <CardTitle className="text-base mt-2 line-clamp-2">{match.name || "Cricket Match"}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Teams */}
        <div className="space-y-2">
          {match.teams?.map((team: string, index: number) => (
            <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">
                    {team?.substring(0, 2).toUpperCase() || "??"}
                  </span>
                </div>
                <span className="font-medium text-sm truncate max-w-[100px]">{team || "Team"}</span>
              </div>
              {match.score?.[index] && (
                <span className="font-bold text-sm">
                  {typeof match.score[index] === 'object' 
                    ? `${match.score[index].r || 0}/${match.score[index].w || 0} (${match.score[index].o || 0})`
                    : match.score[index]}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Date/Time in IST */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{convertToIST(match.dateTimeGMT || match.date)} IST</span>
        </div>

        {/* Venue */}
        {match.venue && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span className="truncate">{match.venue}</span>
          </div>
        )}

        {/* Status for completed matches */}
        {type === 'past' && match.status && (
          <p className="text-xs text-muted-foreground italic line-clamp-2">{match.status}</p>
        )}

        {/* Actions */}
        <Button asChild size="sm" className="w-full mt-2" variant={type === 'live' ? 'default' : 'outline'}>
          <Link href={`/match/${match.id}`}>
            {type === 'future' ? "Create Team" : type === 'live' ? "Live Score" : "View Details"}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function ColumnSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-5 w-12" />
            </div>
            <Skeleton className="h-5 w-3/4 mt-2" />
          </CardHeader>
          <CardContent className="space-y-3">
            <Skeleton className="h-12 w-full rounded-lg" />
            <Skeleton className="h-12 w-full rounded-lg" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-8 w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function MatchColumn({ 
  title, 
  icon: Icon, 
  matches, 
  type, 
  emptyMessage,
  columnClass 
}: { 
  title: string; 
  icon: any; 
  matches: any[]; 
  type: 'past' | 'live' | 'future';
  emptyMessage: string;
  columnClass: string;
}) {
  return (
    <div className={`match-column ${columnClass}`}>
      <div className="flex items-center gap-2 mb-4 sticky top-0 bg-inherit py-2">
        <Icon className={`h-5 w-5 ${type === 'live' ? 'text-secondary animate-pulse' : type === 'future' ? 'text-primary' : 'text-accent'}`} />
        <h2 className="text-lg font-bold">{title}</h2>
        <Badge variant={type === 'live' ? 'default' : 'secondary'} className={`ml-auto ${type === 'live' && matches.length > 0 ? 'bg-secondary animate-pulse' : ''}`}>
          {matches.length}
        </Badge>
      </div>
      
      <div className="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto pr-2">
        {matches.length > 0 ? (
          matches.map((match: any) => (
            <MatchCard key={match.id} match={match} type={type} />
          ))
        ) : (
          <Card className={`text-center py-8 ${type === 'live' ? 'border-dashed border-secondary/50' : ''}`}>
            <CardContent>
              <div className={`h-12 w-12 mx-auto mb-3 rounded-full flex items-center justify-center ${type === 'live' ? 'bg-secondary/10' : 'bg-muted'}`}>
                <Icon className={`h-6 w-6 ${type === 'live' ? 'text-secondary' : 'text-muted-foreground'}`} />
              </div>
              <p className="text-sm text-muted-foreground">{emptyMessage}</p>
              {type === 'live' && (
                <p className="text-xs text-muted-foreground/70 mt-2">Auto-refreshing every 30 seconds</p>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export default function Matches() {
  const { data: matches, isLoading, error, refetch } = trpc.matches.getAll.useQuery(undefined, {
    refetchInterval: 30000, // Refetch every 30 seconds for live updates
  });

  const categorizedMatches = useMemo(() => {
    if (!matches) return { past: [], live: [], future: [] };
    return categorizeMatches(matches);
  }, [matches]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">Cricket Matches</h1>
            <p className="text-muted-foreground mt-1">
              Real-time cricket action • All times in IST
            </p>
          </div>
          <Button variant="outline" onClick={() => refetch()} className="shrink-0">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Free to Play Banner */}
        <div className="mb-6 p-4 rounded-xl gradient-teal">
          <div className="flex items-center gap-3">
            <Trophy className="h-6 w-6 text-primary-foreground" />
            <div>
              <p className="font-semibold text-primary-foreground">100% Free to Play</p>
              <p className="text-sm text-primary-foreground/80">Create teams, join contests, and compete with other fans!</p>
            </div>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <Card className="mb-6 border-destructive">
            <CardContent className="flex items-center gap-4 py-6">
              <AlertCircle className="h-8 w-8 text-destructive" />
              <div>
                <p className="font-semibold">Unable to load matches</p>
                <p className="text-sm text-muted-foreground">{error.message}</p>
              </div>
              <Button variant="outline" onClick={() => refetch()} className="ml-auto">
                Try Again
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="match-column match-column-past">
              <div className="flex items-center gap-2 mb-4">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-6 w-24" />
              </div>
              <ColumnSkeleton />
            </div>
            <div className="match-column match-column-live">
              <div className="flex items-center gap-2 mb-4">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-6 w-24" />
              </div>
              <ColumnSkeleton />
            </div>
            <div className="match-column match-column-future">
              <div className="flex items-center gap-2 mb-4">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-6 w-24" />
              </div>
              <ColumnSkeleton />
            </div>
          </div>
        )}

        {/* 3-Column Vertical Layout: Past | Live | Future */}
        {!isLoading && !error && matches && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Past Matches Column */}
            <MatchColumn
              title="Completed"
              icon={History}
              matches={categorizedMatches.past}
              type="past"
              emptyMessage="No completed matches"
              columnClass="match-column-past"
            />

            {/* Live Matches Column */}
            <MatchColumn
              title="Live Now"
              icon={Radio}
              matches={categorizedMatches.live}
              type="live"
              emptyMessage="No matches are live at this moment. Check back during scheduled match times!"
              columnClass="match-column-live"
            />

            {/* Future Matches Column */}
            <MatchColumn
              title="Upcoming"
              icon={CalendarClock}
              matches={categorizedMatches.future}
              type="future"
              emptyMessage="No upcoming matches scheduled"
              columnClass="match-column-future"
            />
          </div>
        )}

        {/* No matches at all */}
        {!isLoading && !error && matches && matches.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Matches Available</h3>
              <p className="text-muted-foreground">
                There are no matches at the moment. Check back later!
              </p>
            </CardContent>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  );
}
