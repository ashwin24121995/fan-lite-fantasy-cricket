import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, Settings, Clock, Mail, Globe, UserCheck, FileText, ChevronRight, CheckCircle } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "collection", title: "2. Information We Collect" },
    { id: "usage", title: "3. How We Use Your Information" },
    { id: "sharing", title: "4. Information Sharing" },
    { id: "cookies", title: "5. Cookies & Tracking" },
    { id: "security", title: "6. Data Security" },
    { id: "retention", title: "7. Data Retention" },
    { id: "rights", title: "8. Your Rights" },
    { id: "children", title: "9. Children's Privacy" },
    { id: "international", title: "10. International Transfers" },
    { id: "changes", title: "11. Policy Changes" },
    { id: "contact", title: "12. Contact Us" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-coral-500/10" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-teal-400 mb-4">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Legal Document</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy <span className="text-teal-400">Policy</span>
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Your privacy is important to us. This Privacy Policy explains how Fan Lite Play collects, uses, discloses, and safeguards your information.
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
              { icon: Lock, title: "Secure Storage", desc: "256-bit encryption" },
              { icon: Eye, title: "Transparent", desc: "Clear data practices" },
              { icon: Settings, title: "Your Control", desc: "Manage your data" },
              { icon: Shield, title: "Protected", desc: "Industry standards" }
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
                  <p>Welcome to Fan Lite Play. We are committed to protecting your personal information and your right to privacy. This Privacy Policy describes how we collect, use, store, and share your information when you use our fantasy cricket platform.</p>
                  <p>By using our Platform, you agree to the collection and use of information in accordance with this Privacy Policy.</p>
                </div>
              </div>

              <div id="collection" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                <div className="text-slate-300 space-y-4">
                  <p>We collect information in several ways:</p>
                  <h4 className="text-white font-semibold">Account Information</h4>
                  <ul className="space-y-2 ml-4">
                    <li>• Name and username</li>
                    <li>• Email address</li>
                    <li>• Phone number (optional)</li>
                    <li>• Profile picture</li>
                    <li>• Date of birth</li>
                  </ul>
                  <h4 className="text-white font-semibold mt-4">Usage Data</h4>
                  <ul className="space-y-2 ml-4">
                    <li>• Contest participation history</li>
                    <li>• Team selections</li>
                    <li>• Login timestamps</li>
                    <li>• Feature interactions</li>
                    <li>• Device information</li>
                  </ul>
                  <h4 className="text-white font-semibold mt-4">Technical Data</h4>
                  <ul className="space-y-2 ml-4">
                    <li>• IP address</li>
                    <li>• Browser type and version</li>
                    <li>• Operating system</li>
                    <li>• Device identifiers</li>
                    <li>• Location data (approximate)</li>
                  </ul>
                </div>
              </div>

              <div id="usage" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                <div className="text-slate-300 space-y-4">
                  <p>We use the information we collect for:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong className="text-white">Provide Services:</strong> Create and manage your account, process contest entries, calculate scores</li>
                    <li>• <strong className="text-white">Improve Platform:</strong> Analyze usage patterns, identify bugs, develop new features</li>
                    <li>• <strong className="text-white">Communication:</strong> Send service updates, contest notifications, promotional content</li>
                    <li>• <strong className="text-white">Security:</strong> Detect and prevent fraud, abuse, and security incidents</li>
                    <li>• <strong className="text-white">Legal Compliance:</strong> Comply with applicable laws and regulations</li>
                    <li>• <strong className="text-white">Personalization:</strong> Customize your experience and recommend contests</li>
                  </ul>
                </div>
              </div>

              <div id="sharing" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
                <div className="text-slate-300 space-y-4">
                  <p>We do not sell your personal information. We may share your information with:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong className="text-white">Service Providers:</strong> Cloud hosting, analytics, customer support platforms</li>
                    <li>• <strong className="text-white">Legal Requirements:</strong> When required by law or court order</li>
                    <li>• <strong className="text-white">Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                    <li>• <strong className="text-white">With Your Consent:</strong> When you give us explicit permission</li>
                  </ul>
                </div>
              </div>

              <div id="cookies" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Cookies & Tracking Technologies</h2>
                <div className="text-slate-300 space-y-4">
                  <p>We use cookies and similar tracking technologies to:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Remember your preferences and settings</li>
                    <li>• Keep you logged in to your account</li>
                    <li>• Understand how you use our Platform</li>
                    <li>• Improve our services and user experience</li>
                  </ul>
                  <p className="mt-4">Types of cookies we use: Essential, Performance, Functional, and Analytics cookies.</p>
                </div>
              </div>

              <div id="security" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
                <div className="text-slate-300 space-y-4">
                  <p>We implement industry-standard security measures:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong className="text-white">Encryption:</strong> TLS/SSL (256-bit encryption) for all data transmission</li>
                    <li>• <strong className="text-white">Secure Storage:</strong> Data stored on secure servers with restricted access</li>
                    <li>• <strong className="text-white">Access Controls:</strong> Only authorized personnel can access personal data</li>
                    <li>• <strong className="text-white">Regular Audits:</strong> Security assessments and vulnerability testing</li>
                  </ul>
                </div>
              </div>

              <div id="retention" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
                <div className="text-slate-300 space-y-4">
                  <p>We retain your personal information for as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce agreements.</p>
                  <p>When you delete your account, we will delete or anonymize your personal information within 30 days, except where required for legal purposes.</p>
                </div>
              </div>

              <div id="rights" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Your Rights</h2>
                <div className="text-slate-300 space-y-4">
                  <p>You have the following rights regarding your personal data:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong className="text-white">Access:</strong> Request a copy of your personal data</li>
                    <li>• <strong className="text-white">Correction:</strong> Request correction of inaccurate data</li>
                    <li>• <strong className="text-white">Deletion:</strong> Request deletion of your data (right to be forgotten)</li>
                    <li>• <strong className="text-white">Portability:</strong> Receive your data in a machine-readable format</li>
                    <li>• <strong className="text-white">Objection:</strong> Object to processing for certain purposes</li>
                    <li>• <strong className="text-white">Restriction:</strong> Request restriction of processing</li>
                  </ul>
                  <p className="mt-4">Contact privacy@fanliteplay.com to exercise these rights.</p>
                </div>
              </div>

              <div id="children" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
                <div className="text-slate-300 space-y-4">
                  <p>Our Platform is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you believe your child has provided us with personal information, please contact us immediately.</p>
                </div>
              </div>

              <div id="international" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">10. International Data Transfers</h2>
                <div className="text-slate-300 space-y-4">
                  <p>Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place, including standard contractual clauses and compliance with applicable data protection frameworks.</p>
                </div>
              </div>

              <div id="changes" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Policy</h2>
                <div className="text-slate-300 space-y-4">
                  <p>We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page, updating the "Last Updated" date, and sending email notifications for significant changes.</p>
                </div>
              </div>

              <div id="contact" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
                <div className="text-slate-300 space-y-4">
                  <p>If you have questions about this Privacy Policy, please contact us:</p>
                  <div className="bg-slate-800/50 rounded-lg p-6 space-y-3">
                    <p><strong className="text-white">Privacy Inquiries:</strong> privacy@fanliteplay.com</p>
                    <p><strong className="text-white">Data Protection Officer:</strong> dpo@fanliteplay.com</p>
                    <p><strong className="text-white">Address:</strong> Fan Lite Play, 123 Tech Park, Sector 62, Noida, UP 201301, India</p>
                  </div>
                  <Link href="/contact">
                    <Button className="bg-teal-500 hover:bg-teal-600 text-white mt-4">
                      Contact Us <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
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
            <Link href="/fair-play">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">Fair Play Policy</Button>
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
