import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { trpc } from "@/lib/trpc";
import { 
  RefreshCw, 
  ArrowLeft, 
  Clock, 
  MapPin, 
  Trophy,
  Users,
  Activity
} from "lucide-react";

// Helper function to format score from CricAPI
function formatScore(score: unknown): string {
  if (!score) return "Yet to bat";
  if (typeof score === "string") return score;
  if (typeof score === "object" && score !== null) {
    const s = score as { r?: number; w?: number; o?: number; inning?: string };
    if (s.r !== undefined) {
      return `${s.r}/${s.w || 0} (${s.o || 0})`;
    }
  }
  return "Yet to bat";
}

export default function LiveScores() {
  const { matchId } = useParams<{ matchId: string }>();
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const { data: matchData, isLoading, refetch, isRefetching } = trpc.matches.getMatch.useQuery(
    { matchId: matchId || "" },
    { 
      enabled: !!matchId,
      refetchInterval: autoRefresh ? 30000 : false, // Auto-refresh every 30 seconds
    }
  );

  useEffect(() => {
    if (!isRefetching) {
      setLastUpdated(new Date());
    }
  }, [isRefetching]);

  const handleManualRefresh = () => {
    refetch();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 container py-8">
          <Skeleton className="h-8 w-48 mb-6" />
          <Skeleton className="h-64 w-full mb-6" />
          <Skeleton className="h-48 w-full" />
        </main>
        <Footer />
      </div>
    );
  }

  const match = matchData?.data;

  if (!match) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 container py-8">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">Match Not Found</h2>
            <p className="text-muted-foreground mb-6">
              The match you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/matches">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Matches
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const isLive = match.matchStarted && !match.matchEnded;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-8">
          <div className="container">
            <Link href="/matches" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Matches
            </Link>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">{match.name}</h1>
                  {isLive && (
                    <Badge className="bg-red-500 text-white animate-pulse">
                      <Activity className="w-3 h-3 mr-1" />
                      LIVE
                    </Badge>
                  )}
                  {match.matchEnded && (
                    <Badge variant="secondary">Completed</Badge>
                  )}
                  {!match.matchStarted && (
                    <Badge variant="outline">Upcoming</Badge>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  {match.venue && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {match.venue}
                    </span>
                  )}
                  {match.date && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {new Date(match.date).toLocaleDateString("en-IN", {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleManualRefresh}
                  disabled={isRefetching}
                >
                  <RefreshCw className={`w-4 h-4 mr-2 ${isRefetching ? "animate-spin" : ""}`} />
                  Refresh
                </Button>
                <Button
                  variant={autoRefresh ? "default" : "outline"}
                  size="sm"
                  onClick={() => setAutoRefresh(!autoRefresh)}
                >
                  {autoRefresh ? "Auto-Refresh ON" : "Auto-Refresh OFF"}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Live Score Card */}
        <section className="py-8 container">
          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  Live Score
                </CardTitle>
                <span className="text-xs text-muted-foreground">
                  Last updated: {lastUpdated.toLocaleTimeString("en-IN")}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Team 1 */}
                <div className="text-center p-6 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {match.teams?.[0] || "Team 1"}
                  </h3>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {match.score && match.score[0] ? formatScore(match.score[0]) : "Yet to bat"}
                  </div>
                </div>

                {/* Team 2 */}
                <div className="text-center p-6 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {match.teams?.[1] || "Team 2"}
                  </h3>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {match.score && match.score[1] ? formatScore(match.score[1]) : "Yet to bat"}
                  </div>
                </div>
              </div>

              {/* Match Status */}
              {match.status && (
                <div className="mt-6 text-center">
                  <p className="text-lg font-semibold text-primary">{match.status}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Match Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground text-lg">Match Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Match Type</span>
                  <span className="text-foreground font-medium">{match.matchType?.toUpperCase() || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Venue</span>
                  <span className="text-foreground font-medium">{match.venue || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date</span>
                  <span className="text-foreground font-medium">
                    {match.date ? new Date(match.date).toLocaleDateString("en-IN") : "N/A"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <span className="text-foreground font-medium">
                    {match.matchEnded ? "Completed" : match.matchStarted ? "In Progress" : "Upcoming"}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground text-lg flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href={`/match/${matchId}`}>
                  <Button className="w-full" variant="default">
                    View Match Details
                  </Button>
                </Link>
                <Link href={`/match/${matchId}/create-team`}>
                  <Button className="w-full" variant="outline">
                    Create Fantasy Team
                  </Button>
                </Link>
                <Link href={`/match/${matchId}/contests`}>
                  <Button className="w-full" variant="outline">
                    View Contests
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Auto-refresh notice */}
          {autoRefresh && isLive && (
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                <Activity className="w-4 h-4 inline mr-1 text-primary" />
                Scores auto-refresh every 30 seconds
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
