import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, MapPin, Clock, Trophy, AlertCircle, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function MatchCard({ match }: { match: any }) {
  const getStatusBadge = (status: string) => {
    if (status?.toLowerCase().includes("live")) {
      return <Badge className="bg-emerald-500 text-white animate-pulse">LIVE</Badge>;
    }
    if (status?.toLowerCase().includes("completed") || status?.toLowerCase().includes("result")) {
      return <Badge variant="secondary">Completed</Badge>;
    }
    return <Badge variant="outline">Upcoming</Badge>;
  };

  const isLive = match.matchStarted && !match.matchEnded;
  const isUpcoming = !match.matchStarted;

  return (
    <Card className="cricket-card overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            {match.matchType?.toUpperCase() || "MATCH"}
          </Badge>
          {getStatusBadge(match.status)}
        </div>
        <CardTitle className="text-lg mt-2">{match.name || "Cricket Match"}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {match.date || "Date TBD"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Teams */}
        <div className="space-y-3">
          {match.teams?.map((team: string, index: number) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {team?.substring(0, 2).toUpperCase() || "??"}
                  </span>
                </div>
                <span className="font-medium">{team || "Team"}</span>
              </div>
              {match.score?.[index] && (
                <span className="font-bold text-lg">{match.score[index]}</span>
              )}
            </div>
          ))}
        </div>

        {/* Match Info */}
        {match.venue && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {match.venue}
          </div>
        )}

        {/* Status */}
        {match.status && (
          <p className="text-sm text-muted-foreground italic">{match.status}</p>
        )}

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button asChild className="flex-1">
            <Link href={`/match/${match.id}`}>
              {isUpcoming ? "Create Team" : "View Details"}
            </Link>
          </Button>
          {isLive && (
            <Button variant="outline" asChild>
              <Link href={`/match/${match.id}`}>
                <Trophy className="h-4 w-4 mr-2" />
                Live Score
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function MatchesSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card key={i} className="overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-5 w-12" />
            </div>
            <Skeleton className="h-6 w-3/4 mt-2" />
            <Skeleton className="h-4 w-1/2 mt-1" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Skeleton className="h-16 w-full rounded-lg" />
              <Skeleton className="h-16 w-full rounded-lg" />
            </div>
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-10 w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function Matches() {
  const { data: matches, isLoading, error, refetch } = trpc.matches.getCurrent.useQuery(undefined, {
    refetchInterval: 60000, // Refetch every minute for live updates
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Live Matches</h1>
            <p className="text-muted-foreground mt-1">
              Real-time cricket matches from around the world
            </p>
          </div>
          <Button variant="outline" onClick={() => refetch()}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Free to Play Banner */}
        <div className="mb-8 p-4 rounded-lg gradient-emerald text-white">
          <div className="flex items-center gap-3">
            <Trophy className="h-6 w-6" />
            <div>
              <p className="font-semibold">100% Free to Play</p>
              <p className="text-sm opacity-90">Create teams, join contests, and compete with other fans!</p>
            </div>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <Card className="mb-8 border-destructive">
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
        {isLoading && <MatchesSkeleton />}

        {/* Matches Grid */}
        {!isLoading && !error && matches && (
          <>
            {matches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {matches.map((match: any) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Live Matches</h3>
                  <p className="text-muted-foreground">
                    There are no live or upcoming matches at the moment. Check back later!
                  </p>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
