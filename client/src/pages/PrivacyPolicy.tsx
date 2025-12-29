import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Share2, 
  Bell, 
  UserCheck, 
  Globe,
  Clock,
  ChevronRight,
  Mail
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "introduction",
      icon: Shield,
      title: "1. Introduction",
      content: `Fan Lite Play ("we", "us", "our") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our fantasy cricket platform.

By accessing or using Fan Lite Play, you consent to the practices described in this Privacy Policy. If you do not agree with our policies and practices, please do not use our Service.`
    },
    {
      id: "collection",
      icon: Database,
      title: "2. Information We Collect",
      content: `We collect several types of information from and about users of our Service:

Personal Information:
• Name and display name
• Email address
• Phone number (optional)
• Date of birth (for age verification)
• Profile picture (optional)

Account Information:
• Username and password
• Login history and session data
• Account preferences and settings

Usage Information:
• Contest participation history
• Team selections and strategies
• Points earned and rankings
• Time spent on the platform

Device Information:
• Device type and operating system
• Browser type and version
• IP address and location data
• Device identifiers`
    },
    {
      id: "usage",
      icon: Eye,
      title: "3. How We Use Your Information",
      content: `We use the information we collect for various purposes:

Service Delivery:
• To create and manage your account
• To enable participation in fantasy contests
• To calculate and display fantasy points and rankings
• To provide customer support

Platform Improvement:
• To analyze usage patterns and improve our Service
• To develop new features and functionality
• To personalize your experience

Communication:
• To send important account notifications
• To provide contest updates and results
• To send promotional communications (with your consent)

Security & Compliance:
• To detect and prevent fraud and abuse
• To enforce our Terms of Service
• To comply with legal obligations`
    },
    {
      id: "sharing",
      icon: Share2,
      title: "4. Information Sharing & Disclosure",
      content: `We do not sell your personal information to third parties. We may share your information in the following circumstances:

Public Information:
• Your display name and profile picture may be visible to other users
• Contest rankings and leaderboard positions are publicly displayed

Service Providers:
• We share information with vendors who help us operate our Service
• These providers are bound by confidentiality agreements

Legal Requirements:
• We may disclose information to comply with legal obligations
• To respond to lawful requests from public authorities
• To protect our rights, privacy, safety, or property

Business Transfers:
• In the event of a merger, acquisition, or sale of assets
• Your information may be transferred to the acquiring entity`
    },
    {
      id: "security",
      icon: Lock,
      title: "5. Data Security",
      content: `We implement appropriate technical and organizational measures to protect your personal information:

Security Measures:
• Encryption of data in transit and at rest
• Secure authentication mechanisms
• Regular security assessments and audits
• Access controls and monitoring
• Incident response procedures

Password Security:
• Passwords are hashed using industry-standard algorithms
• We never store passwords in plain text
• We encourage users to use strong, unique passwords

While we strive to protect your information, no method of transmission over the Internet or electronic storage is 100% secure.`
    },
    {
      id: "cookies",
      icon: Globe,
      title: "6. Cookies & Tracking Technologies",
      content: `We use cookies and similar tracking technologies to collect and track information about your use of our Service:

Types of Cookies:
• Essential Cookies: Required for basic functionality
• Performance Cookies: Help us understand how you use our Service
• Functional Cookies: Remember your preferences
• Analytics Cookies: Help us analyze usage patterns

Managing Cookies:
• You can control cookies through your browser settings
• Disabling cookies may affect some features of our Service
• You can opt out of analytics tracking where available`
    },
    {
      id: "rights",
      icon: UserCheck,
      title: "7. Your Rights & Choices",
      content: `You have certain rights regarding your personal information:

Access & Portability:
• Request a copy of your personal data
• Receive your data in a portable format
• Know what information we have about you

Correction & Deletion:
• Update or correct inaccurate information
• Request deletion of your personal data
• Close your account at any time

Communication Preferences:
• Opt out of promotional emails
• Manage notification settings
• Control marketing communications

To exercise these rights, contact us at privacy@fanliteplay.com.`
    },
    {
      id: "children",
      icon: Shield,
      title: "8. Children's Privacy",
      content: `Fan Lite Play is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.

Age Verification:
• Users must confirm they are 18 or older during registration
• We may request additional verification if we suspect underage use
• Accounts of underage users will be terminated

If you believe a child has provided us with personal information, please contact us immediately at privacy@fanliteplay.com.`
    },
    {
      id: "retention",
      icon: Clock,
      title: "9. Data Retention",
      content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy:

Retention Periods:
• Active account data: Retained while your account is active
• Contest history: Retained for 3 years after participation
• Communication records: Retained for 2 years
• Legal records: Retained as required by law

Account Deletion:
• You can request account deletion at any time
• We will delete your data within 30 days of request
• Some data may be retained for legal compliance`
    },
    {
      id: "changes",
      icon: Bell,
      title: "10. Changes to This Policy",
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons:

Notification of Changes:
• We will post the updated policy on this page
• We will update the "Last Updated" date
• Material changes will be notified via email or platform notification

Your Continued Use:
• Continued use after changes constitutes acceptance
• Review this policy periodically for updates`
    },
    {
      id: "contact",
      icon: Mail,
      title: "11. Contact Us",
      content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

Data Protection Officer:
Fan Lite Play
F-73, DLF Promenade Mall,
Nelson Mandela Marg, Vasant Kunj,
New Delhi, Delhi - 110070, India

Email: privacy@fanliteplay.com
Support: support@fanliteplay.com

We aim to respond to all privacy inquiries within 7 business days.`
    }
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
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Legal Document</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Privacy <span className="text-teal-400">Policy</span>
              </h1>
              <p className="text-xl text-gray-200 mb-4 leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use Fan Lite Play.
              </p>
              <p className="text-gray-400">
                Last updated: December 2025
              </p>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-12 px-4 bg-slate-50 border-b">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Navigation</h2>
            <div className="flex flex-wrap gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="px-4 py-2 bg-white rounded-lg text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-600 transition border border-slate-200"
                >
                  {section.title.split(". ")[1]}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Content */}
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

        {/* Your Privacy Matters */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
              <Lock className="w-12 h-12 text-teal-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Privacy Matters</h2>
              <p className="text-gray-600 mb-6">
                We are committed to protecting your personal information and being transparent about our data practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/terms">
                  <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
                    Terms of Service <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
                    Contact Us <ChevronRight className="w-4 h-4 ml-2" />
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
              Questions About Your Data?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Our privacy team is here to help with any concerns.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Contact Privacy Team <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
