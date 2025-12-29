import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Scale, 
  Shield, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  Ban,
  Eye,
  Award,
  ChevronRight,
  Target
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FairPlayPolicy() {
  const sections = [
    {
      id: "commitment",
      icon: Shield,
      title: "1. Our Commitment to Fair Play",
      content: `At Fan Lite Play, we are dedicated to providing a fair, transparent, and enjoyable fantasy cricket experience for all users. Our Fair Play Policy outlines the standards of conduct we expect from all participants and the measures we take to ensure a level playing field.

We believe that fantasy cricket should be won through skill, knowledge, and strategic thinking—not through manipulation, cheating, or unfair advantages.

Our commitment includes:
• Transparent scoring and ranking systems
• Equal access to information for all users
• Swift action against policy violations
• Continuous monitoring and improvement of fair play measures`
    },
    {
      id: "prohibited",
      icon: Ban,
      title: "2. Prohibited Activities",
      content: `The following activities are strictly prohibited on Fan Lite Play:

Multiple Accounts:
• Creating or operating more than one account
• Using another person's account
• Sharing account credentials with others

Collusion & Match Fixing:
• Coordinating team selections with other users
• Sharing insider information not publicly available
• Attempting to influence real cricket match outcomes

Automated Systems:
• Using bots, scripts, or automated tools
• Employing data scraping or harvesting techniques
• Using third-party software to gain advantages

Information Manipulation:
• Spreading false information about players or matches
• Attempting to manipulate scoring systems
• Exploiting bugs or glitches for advantage`
    },
    {
      id: "detection",
      icon: Eye,
      title: "3. Detection & Monitoring",
      content: `We employ sophisticated systems to detect and prevent unfair play:

Automated Detection:
• Pattern recognition algorithms
• Behavioral analysis systems
• IP and device fingerprinting
• Statistical anomaly detection

Manual Review:
• Expert review of flagged accounts
• Investigation of user reports
• Regular audits of contest results

Our detection systems operate 24/7 to ensure fair play across all contests and activities on the platform.`
    },
    {
      id: "consequences",
      icon: AlertTriangle,
      title: "4. Consequences of Violations",
      content: `Violations of our Fair Play Policy will result in appropriate action:

Warning:
• First-time minor violations
• Educational notification sent
• Account flagged for monitoring

Temporary Suspension:
• Repeated minor violations
• First-time moderate violations
• Account suspended for 7-30 days

Permanent Ban:
• Severe violations
• Repeated moderate violations
• Any form of match fixing or collusion
• Use of automated systems

Additional Actions:
• Forfeiture of contest positions
• Removal from leaderboards
• Legal action where applicable`
    },
    {
      id: "reporting",
      icon: Users,
      title: "5. Reporting Violations",
      content: `We encourage all users to report suspected violations:

How to Report:
• Use the in-app reporting feature
• Email fairplay@fanliteplay.com
• Contact customer support

What to Include:
• Username of suspected violator
• Description of the suspected violation
• Date and time of occurrence
• Any supporting evidence (screenshots, etc.)

Our Promise:
• All reports are treated confidentially
• Reports are investigated within 48 hours
• Reporters are protected from retaliation`
    },
    {
      id: "scoring",
      icon: Target,
      title: "6. Scoring Integrity",
      content: `We maintain the highest standards of scoring integrity:

Data Sources:
• Official cricket data providers (CricAPI)
• Real-time match data feeds
• Multiple verification sources

Scoring Transparency:
• Clear scoring rules published
• Real-time point calculations
• Detailed breakdown available

Error Handling:
• Prompt correction of scoring errors
• Notification to affected users
• Fair resolution of disputes`
    },
    {
      id: "appeals",
      icon: Scale,
      title: "7. Appeals Process",
      content: `Users have the right to appeal decisions:

How to Appeal:
• Submit appeal within 7 days of decision
• Email appeals@fanliteplay.com
• Provide detailed explanation
• Include any supporting evidence

Appeal Review:
• Independent review team
• Thorough investigation
• Response within 14 days
• Final decision communicated`
    },
    {
      id: "community",
      icon: Award,
      title: "8. Community Standards",
      content: `Beyond fair play in contests, we expect all users to:

Respectful Conduct:
• Treat other users with respect
• Avoid harassment or bullying
• Refrain from offensive language

Honest Communication:
• Provide accurate information
• Report issues honestly
• Avoid spreading misinformation

Responsible Participation:
• Play within your means
• Take breaks when needed
• Seek help if gaming becomes problematic`
    }
  ];

  const principles = [
    { icon: Shield, title: "Integrity", desc: "Honest and transparent operations" },
    { icon: Scale, title: "Fairness", desc: "Equal opportunity for all users" },
    { icon: Eye, title: "Transparency", desc: "Clear rules and processes" },
    { icon: Users, title: "Community", desc: "Respectful environment for all" }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900 py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-teal-400 mb-4">
                <Scale className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Legal Document</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Fair Play <span className="text-teal-400">Policy</span>
              </h1>
              <p className="text-xl text-gray-200 mb-4 leading-relaxed">
                Our commitment to maintaining a fair, transparent, and enjoyable fantasy cricket experience for all users.
              </p>
              <p className="text-gray-400">
                Last updated: December 2025
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-12 px-4 bg-slate-50 border-b">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Our Core Principles</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {principles.map((principle, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{principle.title}</h3>
                  <p className="text-sm text-gray-600">{principle.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-8 px-4 bg-white border-b">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Quick Navigation</h2>
            <div className="flex flex-wrap gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="px-4 py-2 bg-slate-50 rounded-lg text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-600 transition border border-slate-200"
                >
                  {section.title.split(". ")[1]}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-16 px-4 bg-white">
          <div className="container max-w-4xl mx-auto">
            <div className="space-y-12">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-teal-100 rounded-lg">
                      <section.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                  </div>
                  <div className="pl-12">
                    <div className="prose prose-slate max-w-none">
                      {section.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
              <CheckCircle className="w-12 h-12 text-teal-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Play Fair, Play Smart</h2>
              <p className="text-gray-600 mb-6">
                By using Fan Lite Play, you agree to abide by this Fair Play Policy. Together, we can ensure a great experience for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/terms">
                  <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
                    Terms of Service <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/responsible-gaming">
                  <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
                    Responsible Gaming <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-teal-500 to-emerald-500">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Report a Violation
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Help us maintain fair play by reporting suspicious activity.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Contact Fair Play Team <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
