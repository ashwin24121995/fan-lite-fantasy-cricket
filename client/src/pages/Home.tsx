import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Trophy, Users, Star, Calendar, ArrowRight, 
  Shield, Target, Zap, Medal, ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <Card className="cricket-card text-center">
      <CardContent className="pt-6">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function LiveMatchCard({ match }: { match: any }) {
  const isLive = match.matchStarted && !match.matchEnded;
  
  return (
    <Card className="cricket-card overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            {match.matchType?.toUpperCase() || "MATCH"}
          </Badge>
          {isLive && (
            <Badge className="bg-emerald-500 text-white animate-pulse">LIVE</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="font-medium text-sm line-clamp-2">{match.name}</p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          {match.date}
        </div>
        <Button asChild size="sm" className="w-full">
          <Link href={`/match/${match.id}`}>
            View Match
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const { isAuthenticated } = useAuth();
  
  const { data: matches, isLoading: matchesLoading } = trpc.matches.getCurrent.useQuery(undefined, {
    refetchInterval: 120000,
  });

  const liveMatches = matches?.slice(0, 4) || [];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-charcoal opacity-90" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/hero-cricket.webp')" }}
        />
        <div className="relative container py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Badge className="mb-6 free-badge">
              <Star className="h-4 w-4 mr-1" />
              100% Free to Play
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fan Lite Fantasy Cricket
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-200">
              EntertainmentLimitless
            </p>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
              Create your dream team, compete with cricket fans across India, and prove your cricket knowledge. 
              No entry fees, just pure cricket entertainment!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isAuthenticated ? (
                <>
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link href="/matches">
                      <Trophy className="h-5 w-5 mr-2" />
                      Browse Matches
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white/10">
                    <Link href="/dashboard">
                      My Dashboard
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link href="/register">
                      <Star className="h-5 w-5 mr-2" />
                      Start Playing Free
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white/10">
                    <Link href="/login">
                      Sign In
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Live Matches Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Live Matches</h2>
              <p className="text-muted-foreground mt-1">Real-time cricket action</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/matches">
                View All
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          {matchesLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-48 w-full rounded-lg" />
              ))}
            </div>
          ) : liveMatches.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {liveMatches.map((match: any) => (
                <LiveMatchCard key={match.id} match={match} />
              ))}
            </div>
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Live Matches</h3>
                <p className="text-muted-foreground">Check back soon for upcoming matches!</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get started with fantasy cricket in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full gradient-emerald flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Select a Match</h3>
              <p className="text-muted-foreground">
                Browse live and upcoming cricket matches from around the world
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Create Your Team</h3>
              <p className="text-muted-foreground">
                Pick 11 players within 100 credits and choose your captain
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full gradient-emerald flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Join Contests</h3>
              <p className="text-muted-foreground">
                Compete in free contests and climb the leaderboard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Fan Lite?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The ultimate fantasy cricket experience for Indian cricket fans
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Star}
              title="100% Free"
              description="No entry fees, no hidden charges. Pure cricket entertainment!"
            />
            <FeatureCard
              icon={Zap}
              title="Real-Time Data"
              description="Live scores and stats powered by CricAPI for accurate fantasy points"
            />
            <FeatureCard
              icon={Shield}
              title="Secure Platform"
              description="Your data is safe with industry-standard security measures"
            />
            <FeatureCard
              icon={Target}
              title="Fair Play"
              description="Transparent scoring system based on actual match performance"
            />
          </div>
        </div>
      </section>

      {/* Points System Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Fantasy Points System</h2>
              <p className="text-muted-foreground mb-6">
                Earn points based on your players' real match performance. 
                Captain earns 2x points and Vice-Captain earns 1.5x points!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <span className="text-blue-500 font-bold">🏏</span>
                  </div>
                  <div>
                    <p className="font-medium">Batting</p>
                    <p className="text-sm text-muted-foreground">1 pt/run, +10 for 50s, +25 for 100s</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <span className="text-green-500 font-bold">🎯</span>
                  </div>
                  <div>
                    <p className="font-medium">Bowling</p>
                    <p className="text-sm text-muted-foreground">25 pts/wicket, +10 for 3-wicket haul</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="h-10 w-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                    <span className="text-orange-500 font-bold">🧤</span>
                  </div>
                  <div>
                    <p className="font-medium">Fielding</p>
                    <p className="text-sm text-muted-foreground">10 pts/catch, 15 pts/stumping</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/hero-team.webp" 
                alt="Fantasy Team" 
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 p-4 rounded-lg bg-card shadow-lg">
                <div className="flex items-center gap-2">
                  <Medal className="h-6 w-6 text-yellow-500" />
                  <div>
                    <p className="font-semibold">Captain Bonus</p>
                    <p className="text-sm text-muted-foreground">2x Points</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-emerald">
        <div className="container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Play?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of cricket fans and start your fantasy cricket journey today. 
            It's completely free!
          </p>
          {isAuthenticated ? (
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/matches">
                <Trophy className="h-5 w-5 mr-2" />
                Browse Matches
              </Link>
            </Button>
          ) : (
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/register">
                <Star className="h-5 w-5 mr-2" />
                Create Free Account
              </Link>
            </Button>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
