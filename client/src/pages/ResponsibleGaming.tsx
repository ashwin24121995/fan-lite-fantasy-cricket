import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Clock, Users, Brain, Shield, Lightbulb } from "lucide-react";

export default function ResponsibleGaming() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Responsible <span className="text-primary">Gaming</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              At Fan Lite Play, we believe in promoting healthy gaming habits. While our platform is free to play, we encourage all users to game responsibly.
            </p>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-16 container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Our Commitment to You</h2>
            <p className="text-muted-foreground text-center text-lg mb-12">
              Fantasy cricket should be an enjoyable experience that enhances your love for the sport. We are committed to providing a safe, responsible, and entertaining environment for all cricket fans.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <Heart className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">100% Free to Play</h3>
                  <p className="text-muted-foreground">
                    Our platform is completely free. There are no entry fees, no in-app purchases, and no monetary stakes. This eliminates financial risk and keeps the focus on fun and skill.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <Brain className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Game of Skill</h3>
                  <p className="text-muted-foreground">
                    Fantasy cricket rewards knowledge, analysis, and strategic thinking. Success comes from understanding the game, not from luck or chance.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Age Restriction</h3>
                  <p className="text-muted-foreground">
                    Our platform is strictly for users 18 years and above. We take measures to prevent underage access and encourage parents to monitor their children's online activities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <Users className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Community Focus</h3>
                  <p className="text-muted-foreground">
                    We foster a positive community where cricket fans can connect, compete, and share their passion for the sport in a healthy environment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tips for Responsible Gaming */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Tips for Responsible Gaming</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Set Time Limits</h3>
                    <p className="text-muted-foreground">
                      Decide in advance how much time you want to spend on fantasy cricket. Take regular breaks and don't let gaming interfere with your daily responsibilities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Play for Fun</h3>
                    <p className="text-muted-foreground">
                      Remember that fantasy cricket is meant to be entertaining. Focus on enjoying the game and learning about cricket rather than obsessing over rankings.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Balance with Real Life</h3>
                    <p className="text-muted-foreground">
                      Maintain a healthy balance between online gaming and real-world activities. Spend time with family, friends, and pursue other hobbies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Know When to Stop</h3>
                    <p className="text-muted-foreground">
                      If you feel frustrated, stressed, or if gaming is affecting your mood negatively, take a break. It's okay to step away and return when you're in a better mindset.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Stay Informed</h3>
                    <p className="text-muted-foreground">
                      Educate yourself about responsible gaming practices. Understanding the nature of games of skill helps you maintain a healthy perspective.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Protect Your Account</h3>
                    <p className="text-muted-foreground">
                      Never share your login credentials with anyone. Keep your account secure and report any suspicious activity immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="py-16 container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Recognize the Warning Signs</h2>
            <p className="text-muted-foreground text-center mb-8">
              While our platform is free and designed for entertainment, it's important to recognize if gaming is becoming problematic:
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>Spending more time on fantasy cricket than intended</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>Neglecting work, studies, or personal relationships</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>Feeling irritable or anxious when not playing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>Lying to others about time spent gaming</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>Using gaming as an escape from problems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>Difficulty controlling the urge to play</span>
                </li>
              </ul>
            </div>
            <p className="text-muted-foreground text-center mt-6">
              If you recognize these signs in yourself or someone you know, consider taking a break and seeking support if needed.
            </p>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 bg-muted/30">
          <div className="container text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">Need Support?</h2>
            <p className="text-muted-foreground mb-6">
              If you feel that gaming is affecting your well-being, please don't hesitate to seek help. You can also contact us if you need assistance with your account or want to take a break from the platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Disclaimer:</strong> This is a game of skill. Play responsibly. Fan Lite Play is intended for users 18 years and above residing in India.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
