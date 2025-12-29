import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Trophy, Users, Star, Calendar, ArrowRight, 
  Shield, Target, Zap, ChevronRight, Clock, Radio
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Convert GMT to IST
function convertToIST(dateString: string | undefined): string {
  if (!dateString) return "Time TBD";
  try {
    const date = new Date(dateString);
    const istDate = new Date(date.getTime() + (5.5 * 60 * 60 * 1000));
    return istDate.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  } catch {
    return dateString;
  }
}

function FeatureCard({ icon: Icon, title, description, gradient }: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  gradient: string;
}) {
  return (
    <Card className="cricket-card overflow-hidden group">
      <CardContent className="pt-6 pb-6">
        <div className={`h-14 w-14 rounded-2xl ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <Icon className="h-7 w-7 text-primary-foreground" />
        </div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

function LiveMatchCard({ match }: { match: any }) {
  const isLive = match.matchStarted && !match.matchEnded;
  
  return (
    <Card className="cricket-card overflow-hidden border-2 hover:border-primary/30">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            {match.matchType?.toUpperCase() || "MATCH"}
          </Badge>
          {isLive ? (
            <span className="badge-live flex items-center gap-1">
              <Radio className="h-3 w-3" />
              LIVE
            </span>
          ) : (
            <span className="badge-upcoming">Upcoming</span>
          )}
        </div>
        <p className="font-semibold text-sm line-clamp-2">{match.name}</p>
        
        {/* Teams with logos and scores */}
        <div className="space-y-2">
          {match.teams?.slice(0, 2).map((team: string, index: number) => {
            const teamInfo = match.teamInfo?.find((t: any) => 
              t.name === team || t.shortname === team?.substring(0, 3).toUpperCase()
            );
            return (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  {teamInfo?.img ? (
                    <img 
                      src={teamInfo.img} 
                      alt={team} 
                      className="h-6 w-6 rounded-full object-cover bg-white"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-[10px]">
                        {teamInfo?.shortname || team?.substring(0, 2).toUpperCase() || "??"}
                      </span>
                    </div>
                  )}
                  <span className="truncate max-w-[100px]">{team}</span>
                </div>
                {match.score?.[index] && (
                  <span className="font-bold">
                    {typeof match.score[index] === 'object' 
                      ? `${match.score[index].r || 0}/${match.score[index].w || 0}`
                      : match.score[index]}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          {convertToIST(match.dateTimeGMT || match.date)} IST
        </div>
        
        <Button asChild size="sm" className="w-full">
          <Link href={`/match/${match.id}`}>
            {isLive ? "Live Score" : "Create Team"}
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function StepCard({ number, title, description, image }: { 
  number: number; 
  title: string; 
  description: string;
  image: string;
}) {
  const gradients = ['gradient-teal', 'gradient-coral', 'gradient-sage'];
  
  return (
    <div className="relative group">
      <div className="image-section h-48 mb-4 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className={`absolute top-4 left-4 h-12 w-12 rounded-xl ${gradients[number - 1]} flex items-center justify-center shadow-lg`}>
          <span className="text-xl font-bold text-primary-foreground">{number}</span>
        </div>
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function Home() {
  const { isAuthenticated } = useAuth();
  
  const { data: matches, isLoading: matchesLoading } = trpc.matches.getCurrent.useQuery(undefined, {
    refetchInterval: 30000, // Auto-refresh every 30 seconds
  });

  const displayMatches = matches?.slice(0, 4) || [];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/hero-main.webp" 
            alt="Cricket Stadium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        
        <div className="relative container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <Badge className="free-badge text-sm px-4 py-2">
                <Star className="h-4 w-4 mr-2" />
                100% Free to Play
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">Fan Lite</span>{" "}
                <span className="text-secondary">Play</span>
              </h1>
              
              <p className="text-2xl md:text-3xl font-medium text-muted-foreground">
                EntertainmentLimitless
              </p>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Create your dream cricket team, compete with fans across India, and prove your cricket knowledge. 
                No entry fees, just pure cricket entertainment!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {isAuthenticated ? (
                  <>
                    <Button asChild size="lg" className="text-lg px-8 h-14">
                      <Link href="/matches">
                        <Trophy className="h-5 w-5 mr-2" />
                        Browse Matches
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-lg px-8 h-14">
                      <Link href="/dashboard">
                        My Dashboard
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button asChild size="lg" className="text-lg px-8 h-14">
                      <Link href="/register">
                        <Star className="h-5 w-5 mr-2" />
                        Start Playing Free
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-lg px-8 h-14">
                      <Link href="/login">
                        Sign In
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Link>
                    </Button>
                  </>
                )}
              </div>
              
              {/* Stats */}
              <div className="flex gap-8 pt-6">
                <div>
                  <p className="text-3xl font-bold text-primary">Free</p>
                  <p className="text-sm text-muted-foreground">No Entry Fees</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary">Live</p>
                  <p className="text-sm text-muted-foreground">Real-Time Data</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">IST</p>
                  <p className="text-sm text-muted-foreground">India Timezone</p>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="image-section rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/section-team.webp" 
                    alt="Fantasy Team"
                    className="w-full h-auto"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 glass p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl gradient-teal flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold">Join Now</p>
                      <p className="text-sm text-muted-foreground">Free Forever</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Matches Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <Badge variant="secondary" className="mb-3">Real-Time</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Cricket Matches</h2>
              <p className="text-muted-foreground mt-2">Live and upcoming matches • All times in IST</p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href="/matches">
                View All Matches
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          {matchesLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-64 w-full rounded-xl" />
              ))}
            </div>
          ) : displayMatches.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayMatches.map((match: any) => (
                <LiveMatchCard key={match.id} match={match} />
              ))}
            </div>
          ) : (
            <Card className="text-center py-16">
              <CardContent>
                <Calendar className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Matches Available</h3>
                <p className="text-muted-foreground">Check back soon for upcoming cricket matches!</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-3">Simple Steps</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <div className="section-divider mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Get started with fantasy cricket in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <StepCard
              number={1}
              title="Select a Match"
              description="Browse live and upcoming cricket matches from around the world. Choose any match to start building your fantasy team."
              image="/section-live.webp"
            />
            <StepCard
              number={2}
              title="Create Your Team"
              description="Pick 11 players within 100 credits. Choose your captain for 2x points and vice-captain for 1.5x points."
              image="/section-team.webp"
            />
            <StepCard
              number={3}
              title="Join Contests"
              description="Enter free contests and compete with other cricket fans. Track your ranking on the live leaderboard."
              image="/section-contest.webp"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="image-section rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/section-points.webp" 
                  alt="Fantasy Points"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -top-6 -right-6 glass p-5 rounded-2xl shadow-xl hidden md:block">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">2x</p>
                  <p className="text-sm text-muted-foreground">Captain Points</p>
                </div>
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Fan Lite Play?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                The ultimate fantasy cricket experience designed for Indian cricket fans
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FeatureCard
                  icon={Star}
                  title="100% Free"
                  description="No entry fees, no hidden charges. Pure cricket entertainment!"
                  gradient="gradient-teal"
                />
                <FeatureCard
                  icon={Zap}
                  title="Real-Time Data"
                  description="Live scores powered by CricAPI for accurate fantasy points"
                  gradient="gradient-coral"
                />
                <FeatureCard
                  icon={Shield}
                  title="Secure Platform"
                  description="Your data is safe with industry-standard security"
                  gradient="gradient-sage"
                />
                <FeatureCard
                  icon={Target}
                  title="Fair Play"
                  description="Transparent scoring based on actual match performance"
                  gradient="gradient-teal"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points System Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-3">Scoring</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fantasy Points System</h2>
            <div className="section-divider mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Earn points based on your players' real match performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="cricket-card text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">🏏</div>
                <h3 className="font-bold text-lg mb-2">Batting</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>1 point per run</p>
                  <p>+10 for half-century</p>
                  <p>+25 for century</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="cricket-card text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-bold text-lg mb-2">Bowling</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>25 points per wicket</p>
                  <p>+10 for 3-wicket haul</p>
                  <p>+25 for 5-wicket haul</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="cricket-card text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">🧤</div>
                <h3 className="font-bold text-lg mb-2">Fielding</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>10 points per catch</p>
                  <p>15 points per stumping</p>
                  <p>10 points per run-out</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="cricket-card text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">⭐</div>
                <h3 className="font-bold text-lg mb-2">Multipliers</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Captain: 2x points</p>
                  <p>Vice-Captain: 1.5x points</p>
                  <p>Choose wisely!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-teal opacity-95" />
        <div className="relative container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Ready to Play?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of cricket fans and start your fantasy cricket journey today. It's completely free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAuthenticated ? (
              <Button asChild size="lg" variant="secondary" className="text-lg px-10 h-14">
                <Link href="/matches">
                  <Trophy className="h-5 w-5 mr-2" />
                  Browse Matches
                </Link>
              </Button>
            ) : (
              <>
                <Button asChild size="lg" variant="secondary" className="text-lg px-10 h-14">
                  <Link href="/register">
                    <Star className="h-5 w-5 mr-2" />
                    Start Playing Free
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-10 h-14 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <Link href="/how-to-play">
                    Learn More
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
