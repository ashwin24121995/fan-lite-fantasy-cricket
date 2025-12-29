import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
import { 
  Trophy, Users, Star, Calendar, ArrowRight, 
  Shield, Target, Zap, ChevronRight, Clock, Radio,
  TrendingUp, Play, Sparkles, Crown, Medal
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Feature showcase data with badges
const featureShowcases = [
  {
    image: "/section-team.webp",
    badge: { icon: Users, title: "Join Now", subtitle: "Free Forever" },
    animation: "animate-float"
  },
  {
    image: "/hero-main.webp",
    badge: { icon: TrendingUp, title: "Live Stats", subtitle: "Real-Time Updates" },
    animation: "animate-pulse-slow"
  },
  {
    image: "/hero-cricket.webp",
    badge: { icon: Play, title: "Play Now", subtitle: "No Downloads" },
    animation: "animate-bounce-slow"
  },
  {
    image: "/section-live.webp",
    badge: { icon: Crown, title: "Top Rankings", subtitle: "Compete & Win" },
    animation: "animate-float"
  },
  {
    image: "/section-contest.webp",
    badge: { icon: Trophy, title: "Champions", subtitle: "Glory Awaits" },
    animation: "animate-pulse-slow"
  },
  {
    image: "/section-points.webp",
    badge: { icon: Radio, title: "Live Scores", subtitle: "Ball by Ball" },
    animation: "animate-bounce-slow"
  },
  {
    image: "/hero-team.webp",
    badge: { icon: Target, title: "Team Builder", subtitle: "Build Your XI" },
    animation: "animate-float"
  }
];

// Hero Carousel Component
function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featureShowcases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  const current = featureShowcases[currentIndex];
  const BadgeIcon = current.badge.icon;
  
  return (
    <div className="relative">
      <div className="image-section rounded-3xl overflow-hidden shadow-2xl transition-all duration-700">
        <img 
          src={current.image} 
          alt="Feature"
          className={`w-full h-auto object-cover ${current.animation}`}
          style={{ minHeight: '400px', maxHeight: '500px' }}
        />
      </div>
      {/* Floating badge with animation */}
      <div className={`absolute -bottom-4 -left-4 glass p-4 rounded-2xl shadow-xl ${current.animation}`}>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl gradient-teal flex items-center justify-center">
            <BadgeIcon className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <p className="font-bold">{current.badge.title}</p>
            <p className="text-sm text-muted-foreground">{current.badge.subtitle}</p>
          </div>
        </div>
      </div>
      
      {/* Indicator dots */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
        {featureShowcases.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-6 bg-primary' : 'w-2 bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Contests Section Component
function ContestsSection() {
  const { data: contests, isLoading: contestsLoading } = trpc.contests.getAll.useQuery(undefined, { refetchInterval: 30000 });

  if (contestsLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-64 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (!contests || contests.length === 0) {
    return (
      <Card className="text-center py-16">
        <CardContent>
          <Trophy className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold mb-2">No Contests Available</h3>
          <p className="text-muted-foreground">Contests will be created when matches are available!</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {contests.slice(0, 4).map((contest: any) => (
        <Card key={contest.id} className="cricket-card overflow-hidden hover:shadow-lg transition-all duration-300 group">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <Badge variant={contest.status === "live" ? "destructive" : contest.status === "completed" ? "secondary" : "default"} className="text-xs">
                {contest.status === "live" ? (
                  <span className="flex items-center gap-1">
                    <Radio className="h-3 w-3 animate-pulse" />
                    LIVE
                  </span>
                ) : contest.status.toUpperCase()}
              </Badge>
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{contest.currentEntries || 0}/{contest.maxEntries}</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-base group-hover:text-primary transition-colors">{contest.name}</h3>
            </div>
            
            <p className="text-xs text-muted-foreground line-clamp-2">{contest.description}</p>
            
            {/* Progress bar */}
            <div className="space-y-1">
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                  style={{ width: `${((contest.currentEntries || 0) / contest.maxEntries) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">{contest.maxEntries - (contest.currentEntries || 0)} spots left</span>
                <span className="text-primary font-medium">{contest.prizeDescription}</span>
              </div>
            </div>
            
            <Button asChild size="sm" className="w-full" variant={contest.status === "upcoming" ? "default" : "outline"}>
              <Link href={`/contest/${contest.id}`}>
                {contest.status === "upcoming" ? "Join Contest" : "View Details"}
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

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
            
            {/* Right Image - Auto-rotating Carousel */}
            <div className="hidden lg:block">
              <HeroCarousel />
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

      {/* Contests Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <Badge variant="secondary" className="mb-3">Free Contests</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Join Contests</h2>
              <p className="text-muted-foreground mt-2">Compete with cricket fans • Win bragging rights</p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href="/contests">
                View All Contests
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <ContestsSection />
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
          
          {/* Batting Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
              <div className="order-2 lg:order-1">
                <img src="/points-batting.png" alt="Batting Points" className="w-full rounded-2xl shadow-lg" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold mb-6 text-primary">Batting Points</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="text-2xl">🏃</div>
                    <div><p className="font-bold text-lg">Runs Scored</p><p className="text-muted-foreground">1 point per run</p></div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="text-2xl">🎯</div>
                    <div><p className="font-bold text-lg">Half-Century (50 Runs)</p><p className="text-muted-foreground">+10 bonus points</p></div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="text-2xl">🏆</div>
                    <div><p className="font-bold text-lg">Century (100 Runs)</p><p className="text-muted-foreground">+25 bonus points</p></div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="text-2xl">👑</div>
                    <div><p className="font-bold text-lg">Double Century (200 Runs)</p><p className="text-muted-foreground">+50 bonus points</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bowling Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">Bowling Points</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="text-2xl">🎳</div>
                    <div><p className="font-bold text-lg">Per Wicket</p><p className="text-muted-foreground">25 points per wicket</p></div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="text-2xl">🔥</div>
                    <div><p className="font-bold text-lg">3-Wicket Haul</p><p className="text-muted-foreground">+10 bonus points</p></div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="text-2xl">⚡</div>
                    <div><p className="font-bold text-lg">5-Wicket Haul</p><p className="text-muted-foreground">+25 bonus points</p></div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="text-2xl">💎</div>
                    <div><p className="font-bold text-lg">Economy Rate Bonuses</p><p className="text-muted-foreground">+5 to +15 points based on economy</p></div>
                  </div>
                </div>
              </div>
              <div>
                <img src="/points-bowling.png" alt="Bowling Points" className="w-full rounded-2xl shadow-lg" />
              </div>
            </div>
          </div>
          
          {/* Fielding Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
              <div className="order-2 lg:order-1">
                <img src="/points-fielding.png" alt="Fielding Points" className="w-full rounded-2xl shadow-lg" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold mb-6 text-primary">Fielding Points</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="text-2xl">🧤</div>
                    <div><p className="font-bold text-lg">Catches</p><p className="text-muted-foreground">10 points per catch</p></div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="text-2xl">🎯</div>
                    <div><p className="font-bold text-lg">Stumpings</p><p className="text-muted-foreground">15 points per stumping</p></div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="text-2xl">💥</div>
                    <div><p className="font-bold text-lg">Run-Outs</p><p className="text-muted-foreground">10 points per run-out</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Multipliers Section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-3xl font-bold mb-8 text-center">Captain & Vice-Captain Multipliers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center p-6 rounded-xl bg-background/50">
                <div className="text-5xl font-bold text-primary mb-2">2x</div>
                <p className="text-xl font-bold mb-2">Captain</p>
                <p className="text-muted-foreground">All points earned by your captain are doubled. Choose your best performer!</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-background/50">
                <div className="text-5xl font-bold text-primary mb-2">1.5x</div>
                <p className="text-xl font-bold mb-2">Vice-Captain</p>
                <p className="text-muted-foreground">All points earned by your vice-captain are multiplied by 1.5. Strategic choice matters!</p>
              </div>
            </div>
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
