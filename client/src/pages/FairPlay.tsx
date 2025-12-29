import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, AlertTriangle, Ban, Eye, Scale, CheckCircle } from "lucide-react";

export default function FairPlay() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Fair Play <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              At Fan Lite Fantasy Cricket, we are committed to providing a fair, transparent, and enjoyable gaming experience for all users.
            </p>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-16 container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Fair Play Principles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards of integrity in all aspects of our platform, from scoring to contest management.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Transparency</h3>
                <p className="text-muted-foreground">
                  Our scoring system, rules, and contest mechanics are clearly documented and consistently applied to all users.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Scale className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Equality</h3>
                <p className="text-muted-foreground">
                  Every user has an equal opportunity to succeed based on their cricket knowledge and strategic skills.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Prohibited Activities */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Prohibited Activities</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="bg-card border-border border-l-4 border-l-destructive">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Ban className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Multiple Accounts</h3>
                      <p className="text-muted-foreground">
                        Each user is allowed only one account. Creating multiple accounts to gain unfair advantages, manipulate contests, or circumvent restrictions is strictly prohibited. Violators will have all accounts permanently banned.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border border-l-4 border-l-destructive">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Ban className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Collusion</h3>
                      <p className="text-muted-foreground">
                        Coordinating with other users to manipulate contest outcomes, share inside information, or engage in any form of team coordination is prohibited. Fantasy cricket is an individual game of skill.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border border-l-4 border-l-destructive">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Ban className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Automation & Bots</h3>
                      <p className="text-muted-foreground">
                        Using automated systems, bots, scripts, or any software to create teams, join contests, or interact with the platform is strictly forbidden. All actions must be performed manually by the account holder.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border border-l-4 border-l-destructive">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Ban className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Exploiting Bugs</h3>
                      <p className="text-muted-foreground">
                        Intentionally exploiting bugs, glitches, or vulnerabilities in the platform for personal gain is prohibited. If you discover a bug, please report it to us immediately.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border border-l-4 border-l-destructive">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Ban className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Abuse & Harassment</h3>
                      <p className="text-muted-foreground">
                        Any form of harassment, abuse, hate speech, or threatening behavior towards other users or our team is strictly prohibited. We are committed to maintaining a respectful community.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Detection & Enforcement */}
        <section className="py-16 container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Detection & Enforcement</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-primary" />
                How We Detect Violations
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Automated monitoring systems for suspicious patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>IP address and device fingerprint analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Behavioral analysis and anomaly detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>User reports and community feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Manual review by our security team</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                Consequences of Violations
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">1.</span>
                  <span><strong className="text-foreground">Warning:</strong> First-time minor violations may receive a warning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">2.</span>
                  <span><strong className="text-foreground">Temporary Suspension:</strong> Repeated or moderate violations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">3.</span>
                  <span><strong className="text-foreground">Permanent Ban:</strong> Serious or repeated violations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">4.</span>
                  <span><strong className="text-foreground">Contest Disqualification:</strong> Removal from active contests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">5.</span>
                  <span><strong className="text-foreground">Legal Action:</strong> In cases of fraud or criminal activity</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reporting */}
        <section className="py-16 bg-muted/30">
          <div className="container text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">Report a Violation</h2>
            <p className="text-muted-foreground mb-6">
              If you suspect any user is violating our fair play policy, please report it immediately. All reports are treated confidentially and investigated thoroughly. Together, we can maintain a fair gaming environment for everyone.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Report Violation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
