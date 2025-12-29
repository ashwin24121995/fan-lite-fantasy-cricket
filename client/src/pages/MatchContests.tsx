import { useParams, Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { 
  ArrowLeft, 
  Trophy, 
  Users, 
  Clock,
  ChevronRight,
  Plus
} from "lucide-react";
import { toast } from "sonner";

export default function MatchContests() {
  const { matchId } = useParams<{ matchId: string }>();
  const { isAuthenticated } = useAuth();

  const { data: matchData, isLoading: matchLoading } = trpc.matches.getMatch.useQuery(
    { matchId: matchId || "" },
    { enabled: !!matchId }
  );

  const { data: contests, isLoading: contestsLoading } = trpc.contests.getByMatch.useQuery(
    { matchId: matchId || "" },
    { enabled: !!matchId }
  );

  const { data: userTeams } = trpc.teams.getMyTeamsByMatch.useQuery(
    { matchId: matchId || "" },
    { enabled: !!matchId && isAuthenticated }
  );

  const joinContestMutation = trpc.contests.join.useMutation({
    onSuccess: () => {
      toast.success("Successfully joined the contest!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to join contest");
    },
  });

  const handleJoinContest = (contestId: number) => {
    if (!isAuthenticated) {
      toast.error("Please login to join contests");
      return;
    }
    if (!userTeams || userTeams.length === 0) {
      toast.error("Please create a team first before joining a contest");
      return;
    }
    // Use the first team for simplicity - in a full app, you'd let user choose
    joinContestMutation.mutate({
      contestId,
      teamId: userTeams[0].id,
    });
  };

  const isLoading = matchLoading || contestsLoading;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 container py-8">
          <Skeleton className="h-8 w-48 mb-6" />
          <div className="grid gap-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-32 w-full" />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const match = matchData?.data;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-8">
          <div className="container">
            <Link href={`/match/${matchId}`} className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Match
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Contests for {match?.name || "Match"}
            </h1>
            <p className="text-muted-foreground">
              Join free contests and compete with other cricket fans
            </p>
          </div>
        </section>

        {/* Contests List */}
        <section className="py-8 container">
          {/* Create Team CTA if no teams */}
          {isAuthenticated && (!userTeams || userTeams.length === 0) && (
            <Card className="bg-primary/10 border-primary/30 mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Create Your Team First</h3>
                    <p className="text-muted-foreground">
                      You need to create a fantasy team before joining any contest.
                    </p>
                  </div>
                  <Link href={`/match/${matchId}/create-team`}>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Create Team
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Your Teams */}
          {isAuthenticated && userTeams && userTeams.length > 0 && (
            <Card className="bg-card border-border mb-6">
              <CardHeader>
                <CardTitle className="text-foreground text-lg">Your Teams for This Match</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {userTeams.map((team: { id: number; name: string; totalPoints: string | null }) => (
                    <Badge key={team.id} variant="secondary" className="px-3 py-1">
                      {team.name} - {team.totalPoints || 0} pts
                    </Badge>
                  ))}
                </div>
                <Link href={`/match/${matchId}/create-team`}>
                  <Button variant="outline" size="sm" className="mt-4">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Another Team
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}

          {/* Contests Grid */}
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" />
            Available Contests ({contests?.length || 0})
          </h2>

          {!contests || contests.length === 0 ? (
            <Card className="bg-card border-border">
              <CardContent className="p-12 text-center">
                <Trophy className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No Contests Available</h3>
                <p className="text-muted-foreground">
                  There are no contests available for this match yet. Check back later!
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {contests.map((contest) => (
                <Card key={contest.id} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{contest.name}</h3>
                          <Badge variant={contest.status === "live" ? "destructive" : contest.status === "completed" ? "secondary" : "default"}>
                            {contest.status === "live" ? "LIVE" : contest.status === "completed" ? "Completed" : "Upcoming"}
                          </Badge>
                          <Badge variant="outline" className="text-primary border-primary">
                            FREE
                          </Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {contest.currentEntries || 0} / {contest.maxEntries} joined
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {contest.status === "upcoming" ? "Starts soon" : contest.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {contest.status === "upcoming" && isAuthenticated && userTeams && userTeams.length > 0 && (
                          <Button
                            onClick={() => handleJoinContest(contest.id)}
                            disabled={joinContestMutation.isPending}
                          >
                            {joinContestMutation.isPending ? "Joining..." : "Join Contest"}
                          </Button>
                        )}
                        <Link href={`/contest/${contest.id}`}>
                          <Button variant="outline">
                            View Details
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Info Card */}
          <Card className="bg-muted/30 border-border mt-8">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-2">About Free Contests</h3>
              <p className="text-muted-foreground text-sm">
                All contests on Fan Lite Play are completely free to join. There are no entry fees or monetary stakes. 
                Compete with other cricket fans, test your skills, and climb the leaderboard—all for free! 
                This is a game of skill. Play responsibly.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
