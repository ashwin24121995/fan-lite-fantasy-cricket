import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  UserPlus, 
  Search, 
  Users, 
  Trophy, 
  Star, 
  Target,
  Zap,
  Award,
  TrendingUp
} from "lucide-react";

export default function HowToPlay() {
  const pointsSystem = [
    { category: "Batting", action: "Run scored", points: "+1" },
    { category: "Batting", action: "Boundary (4)", points: "+1" },
    { category: "Batting", action: "Six", points: "+2" },
    { category: "Batting", action: "Half-century (50 runs)", points: "+10 bonus" },
    { category: "Batting", action: "Century (100 runs)", points: "+25 bonus" },
    { category: "Batting", action: "Duck (0 runs, out)", points: "-5" },
    { category: "Bowling", action: "Wicket taken", points: "+25" },
    { category: "Bowling", action: "3-wicket haul", points: "+10 bonus" },
    { category: "Bowling", action: "5-wicket haul", points: "+25 bonus" },
    { category: "Bowling", action: "Maiden over", points: "+10" },
    { category: "Fielding", action: "Catch taken", points: "+10" },
    { category: "Fielding", action: "Stumping", points: "+15" },
    { category: "Fielding", action: "Run-out (direct)", points: "+10" },
    { category: "Fielding", action: "Run-out (indirect)", points: "+5" },
    { category: "Multiplier", action: "Captain", points: "2x points" },
    { category: "Multiplier", action: "Vice-Captain", points: "1.5x points" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How to Play <span className="text-primary">Fantasy Cricket</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Learn how to create your dream team, join contests, and compete with fellow cricket fans—all for free!
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Getting Started in 4 Easy Steps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                1
              </div>
              <CardHeader>
                <UserPlus className="w-10 h-10 text-primary mb-2" />
                <CardTitle className="text-foreground">Create Account</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Sign up with your email and password. It's completely free—no payment information required, ever.
              </CardContent>
            </Card>

            <Card className="bg-card border-border relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                2
              </div>
              <CardHeader>
                <Search className="w-10 h-10 text-primary mb-2" />
                <CardTitle className="text-foreground">Select a Match</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Browse upcoming cricket matches. Choose any match you want to play—IPL, international, or domestic cricket.
              </CardContent>
            </Card>

            <Card className="bg-card border-border relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                3
              </div>
              <CardHeader>
                <Users className="w-10 h-10 text-primary mb-2" />
                <CardTitle className="text-foreground">Build Your Team</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Select 11 players within 100 credits. Choose your captain (2x points) and vice-captain (1.5x points) wisely.
              </CardContent>
            </Card>

            <Card className="bg-card border-border relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                4
              </div>
              <CardHeader>
                <Trophy className="w-10 h-10 text-primary mb-2" />
                <CardTitle className="text-foreground">Join Contests</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Enter free contests with your team. Track live scores and climb the leaderboard as your players perform!
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Building Rules */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Team Building Rules</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">11 Players</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Select exactly 11 players from both teams playing in the match. You can pick players from either team.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">100 Credits Budget</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Each player has a credit value (7-11 credits). Your total team must not exceed 100 credits.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Captain & Vice-Captain</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Choose 1 captain (2x points) and 1 vice-captain (1.5x points). These selections are crucial for success.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Role Balance</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Include a mix of batsmen, bowlers, all-rounders, and wicket-keepers for a balanced team.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Max 7 Per Team</h3>
                  </div>
                  <p className="text-muted-foreground">
                    You can select a maximum of 7 players from any single team to ensure fair competition.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Edit Before Match</h3>
                  </div>
                  <p className="text-muted-foreground">
                    You can edit your team anytime before the match starts. Once the match begins, teams are locked.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Points System */}
        <section className="py-16 container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Fantasy Points System</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-4 text-foreground font-semibold">Category</th>
                  <th className="text-left p-4 text-foreground font-semibold">Action</th>
                  <th className="text-right p-4 text-foreground font-semibold">Points</th>
                </tr>
              </thead>
              <tbody>
                {pointsSystem.map((item, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="p-4">
                      <Badge variant={
                        item.category === "Batting" ? "default" :
                        item.category === "Bowling" ? "secondary" :
                        item.category === "Fielding" ? "outline" : "destructive"
                      }>
                        {item.category}
                      </Badge>
                    </td>
                    <td className="p-4 text-muted-foreground">{item.action}</td>
                    <td className="p-4 text-right font-semibold text-primary">{item.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Pro Tips for Success</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Research Player Form</h3>
                  <p className="text-muted-foreground">Check recent performances, pitch conditions, and head-to-head records before selecting players.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Pick In-Form All-Rounders</h3>
                  <p className="text-muted-foreground">All-rounders can earn points from both batting and bowling, giving you more scoring opportunities.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Consider Pitch Conditions</h3>
                  <p className="text-muted-foreground">Batting-friendly pitches favor batsmen; spin-friendly tracks favor spinners. Adjust your team accordingly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Choose Captain Wisely</h3>
                  <p className="text-muted-foreground">Your captain gets 2x points. Pick a consistent performer who's likely to have a big impact.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
