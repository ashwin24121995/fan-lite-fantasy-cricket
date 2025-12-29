import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Clock, Users, Brain, Shield, Lightbulb, Phone, Mail, HelpCircle, ChevronRight, Target, AlertTriangle, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ResponsibleGaming() {
  const supportResources = [
    { name: "iCall", phone: "9152987821", desc: "Psychosocial helpline by TISS", hours: "Mon-Sat, 8am-10pm" },
    { name: "Vandrevala Foundation", phone: "1860-2662-345", desc: "Mental health support", hours: "24/7" },
    { name: "NIMHANS", phone: "080-46110007", desc: "National mental health institute", hours: "Mon-Sat, 9am-5pm" }
  ];

  const warningSigns = [
    "Spending more time on fantasy cricket than intended",
    "Neglecting work, studies, or personal relationships",
    "Feeling anxious or irritable when not playing",
    "Constantly thinking about fantasy cricket",
    "Difficulty controlling the urge to play",
    "Using fantasy cricket to escape problems or negative feelings",
    "Lying to family or friends about time spent playing",
    "Feeling restless when trying to cut back"
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/responsible-gaming-hero.jpg" alt="Responsible Gaming" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
          </div>
          <div className="container relative z-10">
            <div className="flex items-center gap-2 text-primary mb-4">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Player Wellbeing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Responsible <span className="text-primary">Gaming</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-6">
              At Fan Lite Play, we believe that fantasy cricket should be a fun and entertaining experience. We are committed to promoting responsible gaming and providing resources to help our users maintain a healthy relationship with our platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-primary">
                <CheckCircle className="w-5 h-5" />
                <span>100% Free Platform</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <CheckCircle className="w-5 h-5" />
                <span>No Real Money</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <CheckCircle className="w-5 h-5" />
                <span>Play for Fun</span>
              </div>
            </div>
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

        {/* Professional Support Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">Professional Support Resources</h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              If you or someone you know is struggling with gaming habits or mental health concerns, professional help is available.
            </p>
            <div className="max-w-3xl mx-auto space-y-4">
              {supportResources.map((resource, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h4 className="text-foreground font-semibold">{resource.name}</h4>
                        <p className="text-muted-foreground text-sm">{resource.desc}</p>
                        <p className="text-muted-foreground/70 text-xs mt-1">{resource.hours}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span className="text-primary font-medium">{resource.phone}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-8 max-w-3xl mx-auto">
              <p className="text-sm text-center">
                <strong className="text-primary">Remember:</strong> Seeking help is a sign of strength, not weakness. If you're concerned about your gaming habits or mental health, please reach out to a professional.
              </p>
            </div>
          </div>
        </section>

        {/* Self-Help Tools */}
        <section className="py-16 container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Self-Help Tools</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Session Reminders</h3>
                  <p className="text-muted-foreground text-sm">Set reminders to notify you when you've been playing for a certain amount of time.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <Target className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Activity History</h3>
                  <p className="text-muted-foreground text-sm">Review your activity history to understand your gaming patterns.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Self-Exclusion</h3>
                  <p className="text-muted-foreground text-sm">Request a temporary or permanent self-exclusion from the platform if needed.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <AlertTriangle className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Account Deletion</h3>
                  <p className="text-muted-foreground text-sm">Request permanent deletion of your account at any time.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 bg-muted/30">
          <div className="container text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about responsible gaming or need assistance with any of our self-help tools, our support team is here to help.
            </p>
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">support@fanliteplay.com</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">responsiblegaming@fanliteplay.com</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Contact Us <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/faq">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  View FAQ
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Final Message */}
        <section className="py-16 container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-primary/20 to-emerald-500/20 border border-primary/30 rounded-xl p-8 text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Play Smart, Play Safe</h3>
              <p className="text-muted-foreground">
                Fantasy cricket is meant to be fun and entertaining. By practicing responsible gaming habits, you can ensure that it remains a positive part of your life. Remember, it's just a game – enjoy it responsibly!
              </p>
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
