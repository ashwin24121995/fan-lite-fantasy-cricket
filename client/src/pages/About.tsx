import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Target, Shield, Heart, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="text-primary">Fan Lite Fantasy Cricket</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              India's premier free-to-play fantasy cricket platform, bringing the excitement of cricket to millions of fans across the nation.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At Fan Lite Fantasy Cricket, we believe that every cricket fan deserves the thrill of building their dream team and competing with fellow enthusiasts—without any financial barriers.
              </p>
              <p className="text-muted-foreground mb-4">
                Our platform is designed exclusively for Indian cricket fans who want to test their cricket knowledge, strategic thinking, and player analysis skills in a fun, engaging, and completely free environment.
              </p>
              <p className="text-muted-foreground">
                We are committed to providing real-time cricket data, fair gameplay, and an inclusive community where passion for cricket is the only requirement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <Trophy className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground">100% Free</h3>
                  <p className="text-sm text-muted-foreground">No entry fees, ever</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground">For India</h3>
                  <p className="text-sm text-muted-foreground">Made for Indian fans</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground">Real-Time</h3>
                  <p className="text-sm text-muted-foreground">Live match data</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground">Fair Play</h3>
                  <p className="text-sm text-muted-foreground">Transparent scoring</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Passion for Cricket</h3>
                <p className="text-muted-foreground">
                  We share the same love for cricket that drives millions of Indian fans. Every feature we build is designed to enhance your cricket experience.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Skill-Based Gaming</h3>
                <p className="text-muted-foreground">
                  Fantasy cricket is a game of skill. Success comes from knowledge, analysis, and strategic thinking—not luck or money.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Integrity & Transparency</h3>
                <p className="text-muted-foreground">
                  We maintain complete transparency in our scoring system, contest rules, and platform operations. Fair play is non-negotiable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tagline Section */}
        <section className="py-16 container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            EntertainmentLimitless
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of cricket enthusiasts who have discovered the joy of fantasy cricket without limits. Your cricket knowledge is your only investment.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
