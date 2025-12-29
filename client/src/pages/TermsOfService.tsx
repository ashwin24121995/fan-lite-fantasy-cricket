import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Shield, 
  Users, 
  AlertTriangle, 
  Scale,
  Clock,
  CheckCircle,
  ChevronRight
} from "lucide-react";

export default function TermsOfService() {
  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "eligibility", title: "2. Eligibility Requirements" },
    { id: "account", title: "3. Account Registration" },
    { id: "services", title: "4. Description of Services" },
    { id: "contests", title: "5. Contest Rules & Participation" },
    { id: "conduct", title: "6. User Conduct" },
    { id: "intellectual", title: "7. Intellectual Property" },
    { id: "privacy", title: "8. Privacy & Data Protection" },
    { id: "disclaimer", title: "9. Disclaimers & Limitations" },
    { id: "termination", title: "10. Termination" },
    { id: "disputes", title: "11. Dispute Resolution" },
    { id: "changes", title: "12. Changes to Terms" },
    { id: "contact", title: "13. Contact Information" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-coral-500/10" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-teal-400 mb-4">
              <FileText className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Legal Document</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of <span className="text-teal-400">Service</span>
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Please read these Terms of Service carefully before using Fan Lite Play. 
              By accessing or using our platform, you agree to be bound by these terms.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Last Updated: December 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Version 2.0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-slate-800/50 border-y border-slate-700">
        <div className="container">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <span className="text-slate-400 whitespace-nowrap">Jump to:</span>
            {sections.slice(0, 6).map((section) => (
              <a 
                key={section.id}
                href={`#${section.id}`}
                className="text-teal-400 hover:text-teal-300 whitespace-nowrap text-sm"
              >
                {section.title.split(". ")[1]}
              </a>
            ))}
            <span className="text-slate-500">...</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="bg-slate-900/50 border-slate-700">
                  <CardContent className="p-4">
                    <h3 className="text-white font-semibold mb-4">Table of Contents</h3>
                    <nav className="space-y-1">
                      {sections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          className="block py-2 px-3 text-sm text-slate-400 hover:text-teal-400 hover:bg-slate-800 rounded transition-colors"
                        >
                          {section.title}
                        </a>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Introduction */}
              <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-teal-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Important Notice</h3>
                    <p className="text-slate-300">
                      These Terms of Service ("Terms") constitute a legally binding agreement between you 
                      ("User," "you," or "your") and Fan Lite Play ("Company," "we," "us," or "our"). 
                      By creating an account or using our services, you acknowledge that you have read, 
                      understood, and agree to be bound by these Terms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 1: Acceptance of Terms */}
              <div id="acceptance" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center text-teal-400 text-sm">1</span>
                  Acceptance of Terms
                </h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    By accessing, browsing, or using the Fan Lite Play website, mobile application, or any 
                    associated services (collectively, the "Platform"), you acknowledge that you have read, 
                    understood, and agree to be bound by these Terms of Service, our Privacy Policy, Fair Play 
                    Policy, and all applicable laws and regulations.
                  </p>
                  <p>
                    If you do not agree with any part of these Terms, you must immediately discontinue use of 
                    our Platform. Your continued use of the Platform following the posting of any changes to 
                    these Terms constitutes acceptance of those changes.
                  </p>
                  <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-teal-500">
                    <p className="text-sm">
                      <strong className="text-white">Key Point:</strong> These Terms apply to all users, 
                      including visitors, registered users, and any other persons who access or use our Platform.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: Eligibility Requirements */}
              <div id="eligibility" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center text-teal-400 text-sm">2</span>
                  Eligibility Requirements
                </h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    To use Fan Lite Play, you must meet the following eligibility requirements:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Age Requirement:</strong> You must be at least 18 years of age or the legal age of majority in your jurisdiction, whichever is higher.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Legal Capacity:</strong> You must have the legal capacity to enter into binding contracts under applicable law.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Jurisdiction:</strong> You must be located in a jurisdiction where participation in fantasy sports is legal and not prohibited.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">No Restrictions:</strong> You must not be prohibited from using our services under any applicable laws or regulations.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Single Account:</strong> You may only maintain one active account on the Platform.</span>
                    </li>
                  </ul>
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">
                        <strong className="text-amber-400">Restricted Persons:</strong> Employees, directors, and immediate family members 
                        of Fan Lite Play, its affiliates, or any cricket board/team are prohibited from participating in contests 
                        involving matches they may have insider knowledge about.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Account Registration */}
              <div id="account" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center text-teal-400 text-sm">3</span>
                  Account Registration
                </h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    To access certain features of our Platform, you must create an account. When registering, you agree to:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Provide accurate, current, and complete information during registration</li>
                    <li>• Maintain and promptly update your account information to keep it accurate and complete</li>
                    <li>• Maintain the security and confidentiality of your login credentials</li>
                    <li>• Accept responsibility for all activities that occur under your account</li>
                    <li>• Notify us immediately of any unauthorized use of your account</li>
                  </ul>
                  <p>
                    We reserve the right to suspend or terminate accounts that contain false or misleading information, 
                    or that we reasonably believe are being used in violation of these Terms.
                  </p>
                </div>
              </div>

              {/* Section 4: Description of Services */}
              <div id="services" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center text-teal-400 text-sm">4</span>
                  Description of Services
                </h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    Fan Lite Play is a fantasy cricket platform that allows users to:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Create virtual fantasy cricket teams using real cricket players</li>
                    <li>• Participate in free-to-play fantasy contests</li>
                    <li>• Earn points based on the real-world performance of selected players</li>
                    <li>• Compete against other users for bragging rights and recognition</li>
                    <li>• Track live scores, statistics, and leaderboard rankings</li>
                  </ul>
                  <div className="bg-teal-500/10 border border-teal-500/30 rounded-lg p-4">
                    <p className="text-sm">
                      <strong className="text-teal-400">100% Free Platform:</strong> Fan Lite Play is a completely free-to-play 
                      platform. We do not offer real-money contests, gambling, or betting of any kind. All contests are for 
                      entertainment purposes only, with rewards limited to bragging rights and recognition.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5: Contest Rules */}
              <div id="contests" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center text-teal-400 text-sm">5</span>
                  Contest Rules & Participation
                </h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    By participating in any contest on Fan Lite Play, you agree to the following rules:
                  </p>
                  
                  <h4 className="text-white font-semibold mt-6">5.1 Team Selection</h4>
                  <ul className="space-y-2 ml-4">
                    <li>• Teams must be created within the specified budget constraints</li>
                    <li>• Player selection must comply with role and team composition requirements</li>
                    <li>• Teams must be finalized before the contest deadline (match start time)</li>
                    <li>• Captain and Vice-Captain must be designated for each team</li>
                  </ul>

                  <h4 className="text-white font-semibold mt-6">5.2 Scoring</h4>
                  <ul className="space-y-2 ml-4">
                    <li>• Points are calculated based on the official scoring system published on our Platform</li>
                    <li>• Captain earns 2x points; Vice-Captain earns 1.5x points</li>
                    <li>• Scoring is based on official match statistics from recognized sources</li>
                    <li>• In case of statistical corrections, points may be adjusted accordingly</li>
                  </ul>

                  <h4 className="text-white font-semibold mt-6">5.3 Contest Cancellation</h4>
                  <p>
                    We reserve the right to cancel, modify, or postpone any contest due to:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Match cancellation, abandonment, or significant delay</li>
                    <li>• Technical issues affecting fair competition</li>
                    <li>• Suspected fraud or manipulation</li>
                    <li>• Force majeure events</li>
                  </ul>
                </div>
              </div>

              {/* Section 6: User Conduct */}
              <div id="conduct" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center text-teal-400 text-sm">6</span>
                  User Conduct
                </h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    You agree not to engage in any of the following prohibited activities:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Creating multiple accounts or using false identities</li>
                    <li>• Using automated systems, bots, or scripts to access the Platform</li>
                    <li>• Attempting to manipulate contest outcomes or exploit system vulnerabilities</li>
                    <li>• Sharing account credentials or allowing others to use your account</li>
                    <li>• Engaging in collusion with other users</li>
                    <li>• Using insider information for unfair advantage</li>
                    <li>• Harassing, threatening, or abusing other users or staff</li>
                    <li>• Posting offensive, defamatory, or illegal content</li>
                    <li>• Violating any applicable laws or regulations</li>
                  </ul>
                  <p>
                    Violation of these conduct rules may result in immediate account suspension or termination, 
                    forfeiture of any accumulated points or rankings, and potential legal action.
                  </p>
                </div>
              </div>

              {/* Section 7: Intellectual Property */}
              <div id="intellectual" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center text-teal-400 text-sm">7</span>
                  Intellectual Property
                </h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    All content, features, and functionality on the Platform, including but not limited to text, 
                    graphics, logos, icons, images, audio clips, software, and the compilation thereof, are the 
                    exclusive property of Fan Lite Play or its licensors and are protected by copyright, trademark, 
                    and other intellectual property laws.
                  </p>
                  <p>
                    You are granted a limited, non-exclusive, non-transferable license to access and use the 
                    Platform for personal, non-commercial purposes. This license does not include:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Any resale or commercial use of the Platform or its contents</li>
                    <li>• Any derivative use of the Platform or its contents</li>
                    <li>• Any downloading or copying of account information for third parties</li>
                    <li>• Any use of data mining, robots, or similar data gathering tools</li>
                  </ul>
                </div>
              </div>

              {/* Section 8: Privacy */}
              <div id="privacy" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center text-teal-400 text-sm">8</span>
                  Privacy & Data Protection
                </h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    Your privacy is important to us. Our collection, use, and disclosure of personal information 
                    is governed by our Privacy Policy, which is incorporated into these Terms by reference. 
                    By using our Platform, you consent to the collection and use of your information as described 
                    in our Privacy Policy.
                  </p>
                  <Link href="/privacy">
                    <Button variant="outline" className="border-teal-500 text-teal-400 hover:bg-teal-500/10">
                      Read Privacy Policy <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Section 9: Disclaimers */}
              <div id="disclaimer" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center text-teal-400 text-sm">9</span>
                  Disclaimers & Limitations
                </h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
                    EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL 
                    WARRANTIES, INCLUDING BUT NOT LIMITED TO:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Implied warranties of merchantability and fitness for a particular purpose</li>
                    <li>• Warranties that the Platform will be uninterrupted, timely, secure, or error-free</li>
                    <li>• Warranties regarding the accuracy or reliability of any information obtained through the Platform</li>
                  </ul>
                  <p>
                    IN NO EVENT SHALL FAN LITE PLAY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
                    CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE PLATFORM.
                  </p>
                </div>
              </div>

              {/* Section 10: Termination */}
              <div id="termination" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center text-teal-400 text-sm">10</span>
                  Termination
                </h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    We may terminate or suspend your account and access to the Platform immediately, 
                    without prior notice or liability, for any reason, including but not limited to:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Breach of these Terms of Service</li>
                    <li>• Violation of our Fair Play Policy</li>
                    <li>• Fraudulent or illegal activity</li>
                    <li>• At our sole discretion for any other reason</li>
                  </ul>
                  <p>
                    Upon termination, your right to use the Platform will immediately cease. All provisions 
                    of these Terms which by their nature should survive termination shall survive, including 
                    ownership provisions, warranty disclaimers, and limitations of liability.
                  </p>
                </div>
              </div>

              {/* Section 11: Dispute Resolution */}
              <div id="disputes" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center text-teal-400 text-sm">11</span>
                  Dispute Resolution
                </h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    Any dispute, controversy, or claim arising out of or relating to these Terms or the 
                    Platform shall be resolved through the following process:
                  </p>
                  <ol className="space-y-3 ml-4 list-decimal list-inside">
                    <li><strong className="text-white">Informal Resolution:</strong> Contact our support team to attempt to resolve the dispute informally within 30 days.</li>
                    <li><strong className="text-white">Mediation:</strong> If informal resolution fails, parties agree to attempt mediation before pursuing arbitration.</li>
                    <li><strong className="text-white">Arbitration:</strong> Any unresolved disputes shall be settled by binding arbitration in accordance with applicable arbitration rules.</li>
                  </ol>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of India, 
                    without regard to its conflict of law provisions. The courts of New Delhi, India shall 
                    have exclusive jurisdiction over any disputes.
                  </p>
                </div>
              </div>

              {/* Section 12: Changes to Terms */}
              <div id="changes" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center text-teal-400 text-sm">12</span>
                  Changes to Terms
                </h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    We reserve the right to modify or replace these Terms at any time at our sole discretion. 
                    If a revision is material, we will provide at least 30 days' notice prior to any new terms 
                    taking effect. What constitutes a material change will be determined at our sole discretion.
                  </p>
                  <p>
                    By continuing to access or use our Platform after any revisions become effective, you agree 
                    to be bound by the revised terms. If you do not agree to the new terms, you are no longer 
                    authorized to use the Platform.
                  </p>
                </div>
              </div>

              {/* Section 13: Contact Information */}
              <div id="contact" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center text-teal-400 text-sm">13</span>
                  Contact Information
                </h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-slate-800/50 rounded-lg p-6 space-y-3">
                    <p><strong className="text-white">Email:</strong> legal@fanliteplay.com</p>
                    <p><strong className="text-white">Support:</strong> support@fanliteplay.com</p>
                    <p><strong className="text-white">Address:</strong> Fan Lite Play, 123 Tech Park, Sector 62, Noida, UP 201301, India</p>
                  </div>
                  <Link href="/contact">
                    <Button className="bg-teal-500 hover:bg-teal-600 text-white mt-4">
                      Contact Us <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Acknowledgment */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mt-12">
                <h3 className="text-lg font-semibold text-white mb-3">Acknowledgment</h3>
                <p className="text-slate-300">
                  By using Fan Lite Play, you acknowledge that you have read these Terms of Service, 
                  understood them, and agree to be bound by them. If you do not agree to these Terms, 
                  please do not use our Platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-slate-800/50">
        <div className="container">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Related Legal Documents</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/privacy">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                Privacy Policy
              </Button>
            </Link>
            <Link href="/fair-play">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                Fair Play Policy
              </Button>
            </Link>
            <Link href="/responsible-gaming">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                Responsible Gaming
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
