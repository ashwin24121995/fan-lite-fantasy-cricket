import { Link, useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Trophy, Users, Star, Medal, Calendar, ArrowRight, 
  AlertCircle, TrendingUp, Target
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  description 
}: { 
  title: string; 
  value: string | number; 
  icon: React.ElementType; 
  description?: string;
}) {
  return (
    <Card className="cricket-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold mt-1">{value}</p>
            {description && (
              <p className="text-xs text-muted-foreground mt-1">{description}</p>
            )}
          </div>
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  const { user, isAuthenticated, loading: authLoading } = useAuth();
  const [, setLocation] = useLocation();

  const { data: stats, isLoading: statsLoading } = trpc.dashboard.getStats.useQuery(undefined, {
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
          <div className="space-y-6">
            <Skeleton className="h-32 w-full rounded-lg" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-32 w-full rounded-lg" />
              ))}
            </div>
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
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome back, {user?.name}!</h1>
          <p className="text-muted-foreground mt-1">
            Here's your fantasy cricket overview
          </p>
        </div>

        {/* Stats Grid */}
        {statsLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-32 w-full rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard
              title="Total Points"
              value={stats?.totalPoints?.toFixed(1) || "0"}
              icon={TrendingUp}
              description="Across all contests"
            />
            <StatCard
              title="Teams Created"
              value={stats?.teamsCreated || 0}
              icon={Users}
              description="Fantasy teams"
            />
            <StatCard
              title="Contests Joined"
              value={stats?.contestsJoined || 0}
              icon={Trophy}
              description="Free contests"
            />
            <StatCard
              title="Best Rank"
              value={stats?.bestRank || "-"}
              icon={Medal}
              description="Highest position"
            />
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="cricket-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Live Matches
              </CardTitle>
              <CardDescription>
                View current matches and create teams
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/matches">
                  Browse Matches
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="cricket-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                My Teams
              </CardTitle>
              <CardDescription>
                Manage your fantasy teams
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="/my-teams">
                  View Teams
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="cricket-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                My Contests
              </CardTitle>
              <CardDescription>
                Track your contest entries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="/my-contests">
                  View Contests
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Teams */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Teams</CardTitle>
              <CardDescription>Your latest fantasy teams</CardDescription>
            </CardHeader>
            <CardContent>
              {statsLoading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-16 w-full rounded-lg" />
                  ))}
                </div>
              ) : stats?.recentTeams && stats.recentTeams.length > 0 ? (
                <div className="space-y-3">
                  {stats.recentTeams.map((team: any) => (
                    <div key={team.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div>
                        <p className="font-medium">{team.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(team.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{parseFloat(team.totalPoints || "0").toFixed(1)} pts</p>
                        <p className="text-xs text-muted-foreground">
                          {parseFloat(team.totalCreditsUsed || "0").toFixed(1)} credits
                        </p>
                      </div>
                    </div>
                  ))}
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/my-teams">
                      View All Teams
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-4">No teams created yet</p>
                  <Button asChild>
                    <Link href="/matches">Create Your First Team</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Contests */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Contests</CardTitle>
              <CardDescription>Your contest entries</CardDescription>
            </CardHeader>
            <CardContent>
              {statsLoading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-16 w-full rounded-lg" />
                  ))}
                </div>
              ) : stats?.recentEntries && stats.recentEntries.length > 0 ? (
                <div className="space-y-3">
                  {stats.recentEntries.map((entry: any) => (
                    <div key={entry.entry.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div>
                        <p className="font-medium">{entry.contest.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Team: {entry.team.name}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{parseFloat(entry.entry.points || "0").toFixed(1)} pts</p>
                        {entry.entry.rankPosition && (
                          <p className="text-xs text-muted-foreground">
                            Rank #{entry.entry.rankPosition}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/my-contests">
                      View All Contests
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Trophy className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-4">No contests joined yet</p>
                  <Button asChild>
                    <Link href="/matches">Join a Contest</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
