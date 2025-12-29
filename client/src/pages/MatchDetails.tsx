import { useParams, Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, MapPin, Trophy, Users, ArrowLeft, 
  UserPlus, AlertCircle, Clock, Star
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function PlayerCard({ player, teamName }: { player: any; teamName: string }) {
  const getRoleBadge = (role: string) => {
    const roleColors: Record<string, string> = {
      batsman: "bg-blue-500",
      bowler: "bg-green-500",
      "all-rounder": "bg-purple-500",
      "allrounder": "bg-purple-500",
      "wicket-keeper": "bg-orange-500",
      "wk-batsman": "bg-orange-500",
    };
    return roleColors[role?.toLowerCase()] || "bg-gray-500";
  };

  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-primary font-bold text-sm">
            {player.name?.substring(0, 2).toUpperCase() || "??"}
          </span>
        </div>
        <div>
          <p className="font-medium">{player.name || "Unknown Player"}</p>
          <p className="text-xs text-muted-foreground">{teamName}</p>
        </div>
      </div>
      <Badge className={`${getRoleBadge(player.role)} text-white text-xs`}>
        {player.role || "Player"}
      </Badge>
    </div>
  );
}

export default function MatchDetails() {
  const { matchId } = useParams<{ matchId: string }>();
  const { isAuthenticated } = useAuth();

  const { data: match, isLoading: matchLoading, error: matchError } = trpc.matches.getMatch.useQuery(
    { matchId: matchId || "" },
    { enabled: !!matchId }
  );

  const { data: squad, isLoading: squadLoading } = trpc.matches.getSquad.useQuery(
    { matchId: matchId || "" },
    { enabled: !!matchId }
  );

  const { data: contests, isLoading: contestsLoading } = trpc.contests.getByMatch.useQuery(
    { matchId: matchId || "" },
    { enabled: !!matchId }
  );

  const isLoading = matchLoading || squadLoading;

  if (matchError) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 container py-8">
          <Card className="text-center py-12">
            <CardContent>
              <AlertCircle className="h-12 w-12 mx-auto text-destructive mb-4" />
              <h3 className="text-lg font-semibold mb-2">Error Loading Match</h3>
              <p className="text-muted-foreground mb-4">{matchError.message}</p>
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
          <Link href="/matches">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Matches
          </Link>
        </Button>

        {isLoading ? (
          <div className="space-y-6">
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-96 w-full rounded-lg" />
          </div>
        ) : (
          <>
            {/* Match Header */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{match?.matchType?.toUpperCase() || "MATCH"}</Badge>
                  {match?.matchStarted && !match?.matchEnded && (
                    <Badge className="bg-emerald-500 text-white animate-pulse">LIVE</Badge>
                  )}
                </div>
                <CardTitle className="text-2xl">{match?.name || "Cricket Match"}</CardTitle>
                <CardDescription className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {match?.date || "Date TBD"}
                    {match?.dateTimeGMT && (
                      <span className="text-xs">({new Date(match.dateTimeGMT).toLocaleTimeString()})</span>
                    )}
                  </div>
                  {match?.venue && (
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {match.venue}
                    </div>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Teams & Score */}
                <div className="space-y-3 mb-6">
                  {match?.teams?.map((team: string, index: number) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold">
                            {team?.substring(0, 2).toUpperCase() || "??"}
                          </span>
                        </div>
                        <span className="font-semibold text-lg">{team}</span>
                      </div>
                      {match?.score?.[index] && (
                        <span className="font-bold text-xl">
                          {typeof match.score[index] === 'object' 
                            ? `${match.score[index].r || 0}/${match.score[index].w || 0} (${match.score[index].o || 0})`
                            : match.score[index]}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Status */}
                {match?.status && (
                  <p className="text-muted-foreground italic mb-4">{match.status}</p>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {isAuthenticated ? (
                    <Button asChild size="lg">
                      <Link href={`/match/${matchId}/create-team`}>
                        <UserPlus className="h-4 w-4 mr-2" />
                        Create Team
                      </Link>
                    </Button>
                  ) : (
                    <Button asChild size="lg">
                      <Link href="/login">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Login to Create Team
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Tabs for Squad and Contests */}
            <Tabs defaultValue="squad" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="squad" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Squad
                </TabsTrigger>
                <TabsTrigger value="contests" className="flex items-center gap-2">
                  <Trophy className="h-4 w-4" />
                  Contests
                </TabsTrigger>
              </TabsList>

              {/* Squad Tab */}
              <TabsContent value="squad">
                {squad && squad.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {squad.map((teamSquad: any, index: number) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-primary font-bold text-sm">
                                {teamSquad.teamName?.substring(0, 2).toUpperCase() || "??"}
                              </span>
                            </div>
                            {teamSquad.teamName || `Team ${index + 1}`}
                          </CardTitle>
                          <CardDescription>
                            {teamSquad.players?.length || 0} players
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 max-h-96 overflow-y-auto">
                          {teamSquad.players?.map((player: any, pIndex: number) => (
                            <PlayerCard 
                              key={pIndex} 
                              player={player} 
                              teamName={teamSquad.teamName || ""}
                            />
                          ))}
                          {(!teamSquad.players || teamSquad.players.length === 0) && (
                            <p className="text-muted-foreground text-center py-4">
                              Squad not announced yet
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="text-center py-12">
                    <CardContent>
                      <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Squad Not Available</h3>
                      <p className="text-muted-foreground">
                        The squad for this match has not been announced yet.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Contests Tab */}
              <TabsContent value="contests">
                {contestsLoading ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <Skeleton key={i} className="h-24 w-full rounded-lg" />
                    ))}
                  </div>
                ) : contests && contests.length > 0 ? (
                  <div className="space-y-4">
                    {contests.map((contest: any) => (
                      <Card key={contest.id} className="cricket-card">
                        <CardContent className="flex items-center justify-between p-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Trophy className="h-5 w-5 text-primary" />
                              <h3 className="font-semibold">{contest.name}</h3>
                              <span className="free-badge text-xs">FREE</span>
                            </div>
                            {contest.description && (
                              <p className="text-sm text-muted-foreground">{contest.description}</p>
                            )}
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {contest.currentEntries || 0}/{contest.maxEntries} joined
                              </span>
                              {contest.prizeDescription && (
                                <span className="flex items-center gap-1">
                                  <Star className="h-4 w-4" />
                                  {contest.prizeDescription}
                                </span>
                              )}
                            </div>
                          </div>
                          <Button asChild>
                            <Link href={`/contest/${contest.id}`}>
                              View Contest
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="text-center py-12">
                    <CardContent>
                      <Trophy className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No Contests Available</h3>
                      <p className="text-muted-foreground">
                        There are no contests for this match yet. Check back later!
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
