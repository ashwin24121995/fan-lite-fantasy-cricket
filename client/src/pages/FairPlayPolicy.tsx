import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, AlertTriangle, Users, Scale, Ban, Eye, CheckCircle, XCircle, ChevronRight, Clock, FileText } from "lucide-react";

export default function FairPlayPolicy() {
  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "principles", title: "2. Core Principles" },
    { id: "prohibited", title: "3. Prohibited Activities" },
    { id: "detection", title: "4. Detection & Monitoring" },
    { id: "consequences", title: "5. Consequences" },
    { id: "reporting", title: "6. Reporting Violations" },
    { id: "appeals", title: "7. Appeals Process" },
    { id: "updates", title: "8. Policy Updates" }
  ];

  const prohibitedActivities = [
    { title: "Multiple Accounts", desc: "Creating or operating more than one account to gain unfair advantages", icon: Users },
    { title: "Collusion", desc: "Coordinating with other users to manipulate contest outcomes", icon: Users },
    { title: "Automated Systems", desc: "Using bots, scripts, or automated tools to play or gather information", icon: Ban },
    { title: "Insider Information", desc: "Using non-public information about players, teams, or matches", icon: Eye },
    { title: "Account Sharing", desc: "Sharing login credentials or allowing others to use your account", icon: Users },
    { title: "Match Fixing", desc: "Any involvement in or knowledge of match manipulation", icon: AlertTriangle },
    { title: "Identity Fraud", desc: "Using false identity or impersonating another person", icon: Ban },
    { title: "Exploitation", desc: "Exploiting bugs, glitches, or system vulnerabilities", icon: AlertTriangle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-coral-500/10" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-teal-400 mb-4">
              <Scale className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Legal Document</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Fair Play <span className="text-teal-400">Policy</span>
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              At Fan Lite Play, we are committed to maintaining a fair, transparent, and enjoyable gaming environment for all users. This policy outlines our standards and expectations for fair play.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Last Updated: December 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-800/50 border-y border-slate-700">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Fair Competition", desc: "Equal opportunity for all" },
              { icon: Eye, title: "Transparency", desc: "Clear rules and scoring" },
              { icon: Scale, title: "Integrity", desc: "Honest gameplay" },
              { icon: Users, title: "Community", desc: "Respect for all users" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <p className="text-white font-medium">{item.title}</p>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="bg-slate-900/50 border-slate-700">
                  <CardContent className="p-4">
                    <h3 className="text-white font-semibold mb-4">Table of Contents</h3>
                    <nav className="space-y-1">
                      {sections.map((section) => (
                        <a key={section.id} href={`#${section.id}`} className="block py-2 px-3 text-sm text-slate-400 hover:text-teal-400 hover:bg-slate-800 rounded transition-colors">
                          {section.title}
                        </a>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-12">
              <div id="introduction" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <div className="text-slate-300 space-y-4">
                  <p>Fan Lite Play is built on the foundation of fair competition and sportsmanship. Our Fair Play Policy ensures that every user has an equal opportunity to enjoy the platform and compete based on their skill and knowledge of cricket.</p>
                  <p>This policy applies to all users of Fan Lite Play, including registered members, guests, and any person accessing our services. By using our platform, you agree to abide by this Fair Play Policy.</p>
                  <div className="bg-teal-500/10 border border-teal-500/30 rounded-lg p-4">
                    <p className="text-sm"><strong className="text-teal-400">Our Commitment:</strong> We invest significant resources in maintaining fair play, including advanced detection systems, manual reviews, and continuous monitoring to ensure a level playing field for all users.</p>
                  </div>
                </div>
              </div>

              <div id="principles" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Core Principles</h2>
                <div className="text-slate-300 space-y-4">
                  <p>Our Fair Play Policy is built on the following core principles:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: "Equal Opportunity", desc: "Every user should have the same chance to succeed based on their skill and knowledge" },
                      { title: "Transparency", desc: "Rules, scoring systems, and contest mechanics are clearly communicated" },
                      { title: "Integrity", desc: "All gameplay should be honest, without manipulation or deception" },
                      { title: "Respect", desc: "Users should treat each other and the platform with respect" },
                      { title: "Accountability", desc: "Users are responsible for their actions and account activity" },
                      { title: "Security", desc: "Personal information and account security are protected" }
                    ].map((principle, index) => (
                      <div key={index} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-5 h-5 text-teal-400" />
                          <p className="text-white font-medium">{principle.title}</p>
                        </div>
                        <p className="text-slate-400 text-sm">{principle.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div id="prohibited" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Prohibited Activities</h2>
                <div className="text-slate-300 space-y-4">
                  <p>The following activities are strictly prohibited on Fan Lite Play:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {prohibitedActivities.map((activity, index) => (
                      <div key={index} className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <XCircle className="w-5 h-5 text-red-400" />
                          <p className="text-white font-medium">{activity.title}</p>
                        </div>
                        <p className="text-slate-400 text-sm">{activity.desc}</p>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-white font-semibold mt-6">Additional Prohibited Conduct</h4>
                  <ul className="space-y-2 ml-4">
                    <li>• Harassment, abuse, or threatening behavior towards other users or staff</li>
                    <li>• Posting offensive, discriminatory, or inappropriate content</li>
                    <li>• Attempting to reverse engineer or hack the platform</li>
                    <li>• Circumventing any security measures or access controls</li>
                    <li>• Using the platform for any illegal purposes</li>
                    <li>• Providing false information during registration or verification</li>
                  </ul>
                </div>
              </div>

              <div id="detection" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Detection & Monitoring</h2>
                <div className="text-slate-300 space-y-4">
                  <p>We employ multiple layers of detection and monitoring to ensure fair play:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Automated Systems:</strong> Advanced algorithms that detect unusual patterns, suspicious activities, and potential violations in real-time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Manual Reviews:</strong> Dedicated team that investigates flagged accounts and reported violations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Device Fingerprinting:</strong> Technology to identify and track devices associated with accounts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Behavioral Analysis:</strong> Monitoring of user behavior patterns to detect anomalies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Community Reports:</strong> User-submitted reports of suspected violations</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="consequences" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Consequences of Violations</h2>
                <div className="text-slate-300 space-y-4">
                  <p>Violations of this Fair Play Policy may result in the following consequences, depending on the severity and frequency of the violation:</p>
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                      <p className="text-yellow-400 font-medium mb-2">Level 1: Warning</p>
                      <p className="text-slate-400 text-sm">First-time minor violations may result in a formal warning and reminder of our policies.</p>
                    </div>
                    <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                      <p className="text-orange-400 font-medium mb-2">Level 2: Temporary Suspension</p>
                      <p className="text-slate-400 text-sm">Repeated or moderate violations may result in temporary account suspension (7-30 days).</p>
                    </div>
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <p className="text-red-400 font-medium mb-2">Level 3: Permanent Ban</p>
                      <p className="text-slate-400 text-sm">Severe violations or repeated offenses will result in permanent account termination.</p>
                    </div>
                  </div>
                  <p className="mt-4">Additional consequences may include:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Forfeiture of any accumulated points or rankings</li>
                    <li>• Disqualification from ongoing contests</li>
                    <li>• Removal from leaderboards</li>
                    <li>• Legal action in cases of fraud or criminal activity</li>
                  </ul>
                </div>
              </div>

              <div id="reporting" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Reporting Violations</h2>
                <div className="text-slate-300 space-y-4">
                  <p>We encourage users to report suspected violations of our Fair Play Policy. You can report violations through:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong className="text-white">Email:</strong> fairplay@fanliteplay.com</li>
                    <li>• <strong className="text-white">In-App:</strong> Use the "Report" feature on user profiles or contest pages</li>
                    <li>• <strong className="text-white">Contact Form:</strong> Submit a report through our Contact Us page</li>
                  </ul>
                  <p className="mt-4">When reporting a violation, please provide:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Username(s) of the suspected violator(s)</li>
                    <li>• Description of the suspected violation</li>
                    <li>• Any evidence or screenshots (if available)</li>
                    <li>• Date and time of the incident</li>
                    <li>• Contest name (if applicable)</li>
                  </ul>
                  <div className="bg-teal-500/10 border border-teal-500/30 rounded-lg p-4 mt-4">
                    <p className="text-sm"><strong className="text-teal-400">Confidentiality:</strong> All reports are treated confidentially. We do not disclose the identity of reporters to the accused parties.</p>
                  </div>
                </div>
              </div>

              <div id="appeals" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Appeals Process</h2>
                <div className="text-slate-300 space-y-4">
                  <p>If you believe your account has been incorrectly penalized, you have the right to appeal:</p>
                  <ol className="space-y-3 ml-4 list-decimal list-inside">
                    <li><strong className="text-white">Submit Appeal:</strong> Send an email to appeals@fanliteplay.com within 14 days of the penalty</li>
                    <li><strong className="text-white">Provide Information:</strong> Include your username, the penalty received, and why you believe it was incorrect</li>
                    <li><strong className="text-white">Review Process:</strong> Our team will review your appeal within 7-14 business days</li>
                    <li><strong className="text-white">Decision:</strong> You will receive a final decision via email</li>
                  </ol>
                  <p className="mt-4">Please note that the decision of our appeals team is final. We reserve the right to uphold, modify, or reverse any penalty based on our investigation.</p>
                </div>
              </div>

              <div id="updates" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Policy Updates</h2>
                <div className="text-slate-300 space-y-4">
                  <p>We may update this Fair Play Policy from time to time to address new challenges and improve our standards. Changes will be communicated through:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Email notifications to registered users</li>
                    <li>• In-app announcements</li>
                    <li>• Updates to this page with a new "Last Updated" date</li>
                  </ul>
                  <p className="mt-4">Continued use of our platform after policy updates constitutes acceptance of the revised policy.</p>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mt-12">
                <h3 className="text-lg font-semibold text-white mb-3">Questions About Fair Play?</h3>
                <p className="text-slate-300 mb-4">If you have any questions about our Fair Play Policy or need clarification on any rules, please don't hesitate to contact us.</p>
                <Link href="/contact">
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                    Contact Us <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-800/50">
        <div className="container">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Related Legal Documents</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/terms">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">Terms of Service</Button>
            </Link>
            <Link href="/privacy">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">Privacy Policy</Button>
            </Link>
            <Link href="/responsible-gaming">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">Responsible Gaming</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
