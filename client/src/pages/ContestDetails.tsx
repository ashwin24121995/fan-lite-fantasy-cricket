import { useParams, Link, useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useState } from "react";
import { 
  Trophy, Users, ArrowLeft, Star, Calendar, 
  AlertCircle, Loader2, Check, Medal
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContestDetails() {
  const { contestId } = useParams<{ contestId: string }>();
  const { isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  const [selectedTeamId, setSelectedTeamId] = useState<string>("");
  const utils = trpc.useUtils();

  const { data: contest, isLoading: contestLoading, error: contestError } = trpc.contests.getDetails.useQuery(
    { contestId: parseInt(contestId || "0") },
    { enabled: !!contestId }
  );

  const { data: myTeams, isLoading: teamsLoading } = trpc.teams.getMyTeams.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  // Note: We check if user has joined by looking at myEntries
  const { data: myEntries } = trpc.contests.getMyEntries.useQuery(undefined, {
    enabled: isAuthenticated,
  });
  const myEntry = myEntries?.find((e: any) => e.contest.id === parseInt(contestId || "0"));

  const joinContestMutation = trpc.contests.join.useMutation({
    onSuccess: () => {
      toast.success("Successfully joined the contest!");
      utils.contests.getMyEntries.invalidate();
      utils.contests.getDetails.invalidate();
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to join contest");
    },
  });

  const handleJoinContest = () => {
    if (!selectedTeamId) {
      toast.error("Please select a team");
      return;
    }
    joinContestMutation.mutate({
      contestId: parseInt(contestId || "0"),
      teamId: parseInt(selectedTeamId),
    });
  };

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

  if (contestError) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 container py-8">
          <Card className="text-center py-12">
            <CardContent>
              <AlertCircle className="h-12 w-12 mx-auto text-destructive mb-4" />
              <h3 className="text-lg font-semibold mb-2">Error Loading Contest</h3>
              <p className="text-muted-foreground mb-4">{contestError.message}</p>
              <Button asChild>
                <Link href="/matches">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Matches
                </Link>
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href={contest?.matchId ? `/match/${contest.matchId}` : "/matches"}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Match
          </Link>
        </Button>

        {contestLoading ? (
          <div className="space-y-6">
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-64 w-full rounded-lg" />
          </div>
        ) : contest ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Contest Info */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-6 w-6 text-primary" />
                      <CardTitle className="text-2xl">{contest.name}</CardTitle>
                    </div>
                    {getStatusBadge(contest.status)}
                  </div>
                  {contest.description && (
                    <CardDescription className="text-base">{contest.description}</CardDescription>
                  )}
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Free Badge */}
                  <div className="flex items-center gap-3">
                    <span className="free-badge">
                      <Star className="h-4 w-4 mr-1" />
                      100% FREE TO PLAY
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold">{contest.currentEntries || 0}</p>
                      <p className="text-sm text-muted-foreground">Joined</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <Users className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-2xl font-bold">{contest.maxEntries}</p>
                      <p className="text-sm text-muted-foreground">Max Entries</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <Medal className="h-6 w-6 mx-auto mb-2 text-yellow-500" />
                      <p className="text-lg font-bold">{contest.prizeDescription || "Bragging Rights"}</p>
                      <p className="text-sm text-muted-foreground">Prize</p>
                    </div>
                  </div>

                  {/* Prize Info */}
                  {contest.prizeDescription && (
                    <div className="p-4 rounded-lg bg-accent/20 border border-accent">
                      <div className="flex items-center gap-2 mb-2">
                        <Medal className="h-5 w-5 text-yellow-500" />
                        <span className="font-semibold">Prize</span>
                      </div>
                      <p className="text-muted-foreground">{contest.prizeDescription}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Leaderboard Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Leaderboard</CardTitle>
                  <CardDescription>Top performers in this contest</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={`/contest/${contestId}/leaderboard`}>
                      View Full Leaderboard
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Join Contest Sidebar */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Join Contest</CardTitle>
                  <CardDescription>
                    {myEntry ? "You have already joined this contest" : "Select a team to participate"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {myEntry ? (
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span className="font-semibold">Already Joined!</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Team: {myEntry.team?.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Points: {parseFloat(myEntry.entry?.points || "0").toFixed(1)}
                        </p>
                        {myEntry.entry?.rankPosition && (
                          <p className="text-sm text-muted-foreground">
                            Rank: #{myEntry.entry.rankPosition}
                          </p>
                        )}
                      </div>
                      <Button asChild className="w-full">
                        <Link href={`/contest/${contestId}/leaderboard`}>
                          View Leaderboard
                        </Link>
                      </Button>
                    </div>
                  ) : isAuthenticated ? (
                    <>
                      {teamsLoading ? (
                        <Skeleton className="h-10 w-full" />
                      ) : myTeams && myTeams.length > 0 ? (
                        <>
                          <Select value={selectedTeamId} onValueChange={setSelectedTeamId}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a team" />
                            </SelectTrigger>
                            <SelectContent>
                              {myTeams.map((team: any) => (
                                <SelectItem key={team.id} value={team.id.toString()}>
                                  {team.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Button 
                            className="w-full" 
                            onClick={handleJoinContest}
                            disabled={!selectedTeamId || joinContestMutation.isPending}
                          >
                            {joinContestMutation.isPending ? (
                              <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                Joining...
                              </>
                            ) : (
                              <>
                                <Trophy className="h-4 w-4 mr-2" />
                                Join Contest (Free)
                              </>
                            )}
                          </Button>
                        </>
                      ) : (
                        <div className="text-center py-4">
                          <p className="text-sm text-muted-foreground mb-4">
                            You need to create a team first
                          </p>
                          <Button asChild>
                            <Link href={`/match/${contest.matchId}/create-team`}>
                              Create Team
                            </Link>
                          </Button>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-sm text-muted-foreground mb-4">
                        Login to join this contest
                      </p>
                      <Button asChild>
                        <Link href="/login">Login to Join</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        ) : null}
      </main>

      <Footer />
    </div>
  );
}
