import { Link, useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Trophy, Users, Calendar, ArrowRight, Medal, TrendingUp, Star
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

function ContestEntryCard({ entry }: { entry: any }) {
  const getStatusBadge = (status: string) => {
    switch (status?.toLowerCase()) {
      case "live":
        return <Badge className="bg-emerald-500 text-white animate-pulse">LIVE</Badge>;
      case "completed":
        return <Badge variant="secondary">Completed</Badge>;
      case "upcoming":
        return <Badge variant="outline">Upcoming</Badge>;
      default:
        return <Badge variant="outline">{status || "Open"}</Badge>;
    }
  };

  return (
    <Card className="cricket-card">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">{entry.contest.name}</CardTitle>
          </div>
          {getStatusBadge(entry.contest.status)}
        </div>
        {entry.contest.description && (
          <CardDescription>{entry.contest.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Team Info */}
        <div className="p-3 rounded-lg bg-muted/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Your Team</span>
            </div>
            <span className="font-medium">{entry.team.name}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium">Points</span>
            </div>
            <p className="text-xl font-bold">{parseFloat(entry.entry.points || "0").toFixed(1)}</p>
          </div>
          <div className="p-3 rounded-lg bg-accent/50 border border-accent">
            <div className="flex items-center gap-2 mb-1">
              <Medal className="h-4 w-4 text-accent-foreground" />
              <span className="text-xs font-medium">Rank</span>
            </div>
            <p className="text-xl font-bold">
              {entry.entry.rankPosition ? `#${entry.entry.rankPosition}` : "-"}
            </p>
          </div>
        </div>

        {/* Contest Info */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {entry.contest.currentEntries || 0}/{entry.contest.maxEntries} joined
          </span>
          <span className="free-badge text-xs">FREE</span>
        </div>

        {/* Prize Info */}
        {entry.contest.prizeDescription && (
          <div className="flex items-center gap-2 text-sm">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>{entry.contest.prizeDescription}</span>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          <Button asChild className="flex-1">
            <Link href={`/contest/${entry.contest.id}/leaderboard`}>
              View Leaderboard
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/contest/${entry.contest.id}`}>
              Details
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function MyContests() {
  const { isAuthenticated, loading: authLoading } = useAuth();
  const [, setLocation] = useLocation();

  const { data: entries, isLoading } = trpc.contests.getMyEntries.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      setLocation("/login");
    }
  }, [authLoading, isAuthenticated, setLocation]);

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 container py-8">
          <Skeleton className="h-12 w-48 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-72 w-full rounded-lg" />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Contests</h1>
            <p className="text-muted-foreground mt-1">
              Track your contest entries and rankings
            </p>
          </div>
          <Button asChild>
            <Link href="/matches">
              <Trophy className="h-4 w-4 mr-2" />
              Join More Contests
            </Link>
          </Button>
        </div>

        {/* Contests Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-72 w-full rounded-lg" />
            ))}
          </div>
        ) : entries && entries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entries.map((entry: any) => (
              <ContestEntryCard key={entry.entry.id} entry={entry} />
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <Trophy className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Contests Joined</h3>
              <p className="text-muted-foreground mb-4">
                You haven't joined any contests yet. Browse matches to find free contests!
              </p>
              <Button asChild>
                <Link href="/matches">
                  Browse Matches
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  );
}
