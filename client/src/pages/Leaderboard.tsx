import { useParams, Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Trophy, ArrowLeft, Medal, Crown, TrendingUp, Users, RefreshCw
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function LeaderboardRow({ entry, rank, isCurrentUser }: { entry: any; rank: number; isCurrentUser: boolean }) {
  const getMedalColor = (rank: number) => {
    if (rank === 1) return "text-yellow-500";
    if (rank === 2) return "text-gray-400";
    if (rank === 3) return "text-amber-600";
    return "text-muted-foreground";
  };

  return (
    <div className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
      isCurrentUser ? "bg-primary/10 border-2 border-primary" : "bg-muted/50 hover:bg-muted"
    }`}>
      <div className="flex items-center gap-4">
        {/* Rank */}
        <div className="w-12 text-center">
          {rank <= 3 ? (
            <Medal className={`h-6 w-6 mx-auto ${getMedalColor(rank)}`} />
          ) : (
            <span className="text-lg font-bold text-muted-foreground">#{rank}</span>
          )}
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
            isCurrentUser ? "bg-primary text-primary-foreground" : "bg-primary/10"
          }`}>
            <span className={`font-bold text-sm ${isCurrentUser ? "" : "text-primary"}`}>
              {entry.userName?.substring(0, 2).toUpperCase() || "??"}
            </span>
          </div>
          <div>
            <p className="font-medium flex items-center gap-2">
              {entry.userName || "Anonymous"}
              {isCurrentUser && <Badge variant="outline" className="text-xs">You</Badge>}
            </p>
            <p className="text-xs text-muted-foreground">{entry.teamName}</p>
          </div>
        </div>
      </div>

      {/* Points */}
      <div className="text-right">
        <div className="flex items-center gap-1 justify-end">
          <TrendingUp className="h-4 w-4 text-primary" />
          <span className="text-xl font-bold">{parseFloat(entry.points || "0").toFixed(1)}</span>
        </div>
        <p className="text-xs text-muted-foreground">points</p>
      </div>
    </div>
  );
}

export default function Leaderboard() {
  const { contestId } = useParams<{ contestId: string }>();
  const { user, isAuthenticated } = useAuth();

  const { data: leaderboard, isLoading, refetch } = trpc.contests.getLeaderboard.useQuery(
    { contestId: parseInt(contestId || "0") },
    { 
      enabled: !!contestId,
      refetchInterval: 30000, // Refresh every 30 seconds for live updates
    }
  );

  const { data: contest } = trpc.contests.getByMatch.useQuery(
    { matchId: "" },
    { enabled: false } // We'll get contest info from leaderboard
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href={`/contest/${contestId}`}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Contest
          </Link>
        </Button>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Trophy className="h-8 w-8 text-primary" />
              Leaderboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Real-time rankings for this contest
            </p>
          </div>
          <Button variant="outline" onClick={() => refetch()}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Stats Summary */}
        {leaderboard && leaderboard.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                  <Crown className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Leader</p>
                  <p className="font-semibold">{leaderboard[0]?.userName || "N/A"}</p>
                  <p className="text-xs text-muted-foreground">
                    {parseFloat(leaderboard[0]?.points || "0").toFixed(1)} pts
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Participants</p>
                  <p className="font-semibold">{leaderboard.length}</p>
                  <p className="text-xs text-muted-foreground">total entries</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/50 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Average Points</p>
                  <p className="font-semibold">
                    {(leaderboard.reduce((sum: number, e: any) => sum + parseFloat(e.points || "0"), 0) / leaderboard.length).toFixed(1)}
                  </p>
                  <p className="text-xs text-muted-foreground">per entry</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle>Rankings</CardTitle>
            <CardDescription>
              Updated in real-time based on match performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} className="h-16 w-full rounded-lg" />
                ))}
              </div>
            ) : leaderboard && leaderboard.length > 0 ? (
              <div className="space-y-3">
                {leaderboard.map((entry: any, index: number) => (
                  <LeaderboardRow
                    key={entry.id}
                    entry={entry}
                    rank={index + 1}
                    isCurrentUser={isAuthenticated && entry.userId === user?.id}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Trophy className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Entries Yet</h3>
                <p className="text-muted-foreground mb-4">
                  Be the first to join this contest!
                </p>
                <Button asChild>
                  <Link href={`/contest/${contestId}`}>
                    Join Contest
                  </Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Your Position (if not in top) */}
        {isAuthenticated && leaderboard && leaderboard.length > 10 && (
          (() => {
            const userEntry = leaderboard.find((e: any) => e.userId === user?.id);
            const userRank = leaderboard.findIndex((e: any) => e.userId === user?.id) + 1;
            if (userEntry && userRank > 10) {
              return (
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Your Position</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <LeaderboardRow entry={userEntry} rank={userRank} isCurrentUser={true} />
                  </CardContent>
                </Card>
              );
            }
            return null;
          })()
        )}
      </main>

      <Footer />
    </div>
  );
}
