import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Shield, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  Scale,
  Lock,
  Ban,
  Clock,
  ChevronRight,
  BookOpen
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  const sections = [
    {
      id: "acceptance",
      icon: CheckCircle,
      title: "1. Acceptance of Terms",
      content: `By accessing or using Fan Lite Play ("Platform", "Service", "we", "us", or "our"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.

These Terms apply to all visitors, users, and others who access or use the Service. By using the Service, you represent that you are at least 18 years of age and have the legal capacity to enter into these Terms.

We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.`
    },
    {
      id: "eligibility",
      icon: Users,
      title: "2. Eligibility Requirements",
      content: `To use Fan Lite Play, you must meet the following eligibility criteria:

• Be at least 18 years of age
• Be a resident of India (excluding Assam, Odisha, Telangana, Andhra Pradesh, Sikkim, and Nagaland where fantasy sports may be restricted)
• Have the legal capacity to enter into binding contracts
• Not be a person barred from using the Service under applicable laws

You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.

We reserve the right to refuse service, terminate accounts, or cancel participation in contests at our sole discretion if we believe you do not meet these eligibility requirements.`
    },
    {
      id: "account",
      icon: Lock,
      title: "3. Account Registration & Security",
      content: `When you create an account with us, you must provide accurate and complete information. You are responsible for safeguarding your account credentials and for any activities or actions under your account.

Account Security Guidelines:
• Create a strong, unique password
• Do not share your login credentials with anyone
• Enable two-factor authentication when available
• Log out from shared or public devices
• Notify us immediately of any unauthorized access

You agree not to create multiple accounts, use another person's account, or transfer your account to anyone else. We reserve the right to suspend or terminate accounts that violate these guidelines.

One person may only have one active account on Fan Lite Play. Creating multiple accounts to gain unfair advantages is strictly prohibited and may result in permanent ban.`
    },
    {
      id: "platform",
      icon: BookOpen,
      title: "4. Platform Usage & Rules",
      content: `Fan Lite Play is a free-to-play fantasy cricket platform. No real money is involved in any contests or competitions on our platform.

Platform Rules:
• All contests are free to enter with no entry fees
• Points are earned based on real cricket match performances
• Rankings are determined by fantasy points accumulated
• No monetary prizes or cash rewards are offered
• The platform is for entertainment and skill development only

By participating in contests, you agree to:
• Follow all contest rules and guidelines
• Accept the final results as determined by our scoring system
• Not engage in any form of cheating or manipulation
• Respect other users and maintain fair play standards

We reserve the right to modify contest rules, scoring systems, and platform features at any time.`
    },
    {
      id: "conduct",
      icon: Shield,
      title: "5. User Conduct & Prohibited Activities",
      content: `You agree not to engage in any of the following prohibited activities:

Prohibited Activities:
• Using automated systems, bots, or scripts to access the Service
• Attempting to gain unauthorized access to our systems or user accounts
• Interfering with or disrupting the Service or servers
• Engaging in any form of harassment, abuse, or harmful behavior
• Posting or transmitting malicious code, viruses, or harmful content
• Impersonating any person or entity
• Collecting user information without consent
• Using the Service for any illegal or unauthorized purpose

Violations of these rules may result in immediate account suspension or termination without prior notice. We reserve the right to take legal action against users who violate these terms.`
    },
    {
      id: "intellectual",
      icon: FileText,
      title: "6. Intellectual Property Rights",
      content: `The Service and its original content, features, and functionality are owned by Fan Lite Play and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.

Our trademarks, service marks, logos, and trade names may not be used without our prior written consent. You are granted a limited, non-exclusive, non-transferable license to access and use the Service for personal, non-commercial purposes.

You may not:
• Copy, modify, or distribute our content without permission
• Use our branding or logos without authorization
• Reverse engineer or attempt to extract source code
• Create derivative works based on our Service
• Remove any copyright or proprietary notices

Any unauthorized use of our intellectual property may result in legal action.`
    },
    {
      id: "disclaimer",
      icon: AlertTriangle,
      title: "7. Disclaimers & Limitations",
      content: `THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.

We do not warrant that:
• The Service will be uninterrupted, secure, or error-free
• Results obtained from the Service will be accurate or reliable
• Any errors in the Service will be corrected
• The Service will meet your specific requirements

Cricket match data is sourced from third-party providers (CricAPI) and we do not guarantee its accuracy, completeness, or timeliness. Fantasy points calculations are based on this data and may be subject to corrections.

IN NO EVENT SHALL FAN LITE PLAY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE SERVICE.`
    },
    {
      id: "indemnification",
      icon: Scale,
      title: "8. Indemnification",
      content: `You agree to defend, indemnify, and hold harmless Fan Lite Play, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:

• Your violation of these Terms
• Your use of the Service
• Your violation of any third-party rights
• Any content you submit or transmit through the Service
• Your violation of any applicable laws or regulations

This indemnification obligation will survive the termination of these Terms and your use of the Service.`
    },
    {
      id: "termination",
      icon: Ban,
      title: "9. Termination",
      content: `We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.

Upon termination:
• Your right to use the Service will immediately cease
• All provisions of these Terms which should survive termination shall survive
• We may delete your account data after a reasonable period

You may also terminate your account at any time by contacting our support team. Upon your request, we will deactivate your account and delete your personal data in accordance with our Privacy Policy.

Termination does not relieve you of any obligations incurred prior to termination, including any indemnification obligations.`
    },
    {
      id: "governing",
      icon: Scale,
      title: "10. Governing Law & Disputes",
      content: `These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.

Any disputes arising out of or relating to these Terms or the Service shall be resolved through:

1. Informal Resolution: We encourage you to contact us first to resolve any disputes informally.

2. Arbitration: If informal resolution fails, disputes shall be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996.

3. Jurisdiction: The courts of New Delhi, India shall have exclusive jurisdiction over any disputes not subject to arbitration.

You agree to waive any right to participate in class action lawsuits or class-wide arbitration against Fan Lite Play.`
    },
    {
      id: "changes",
      icon: Clock,
      title: "11. Changes to Terms",
      content: `We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.

What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.

We recommend reviewing these Terms periodically for any changes. Changes to these Terms are effective when they are posted on this page.

If you do not agree to the new terms, please stop using the Service and contact us to delete your account.`
    },
    {
      id: "contact",
      icon: Users,
      title: "12. Contact Information",
      content: `If you have any questions about these Terms of Service, please contact us:

Fan Lite Play
F-73, DLF Promenade Mall,
Nelson Mandela Marg, Vasant Kunj,
New Delhi, Delhi - 110070, India

Email: legal@fanliteplay.com
Support: support@fanliteplay.com
Website: www.fanliteplay.com

For legal notices, please send correspondence to our registered office address or email legal@fanliteplay.com.

We aim to respond to all legal inquiries within 7 business days.`
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
                <FileText className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Legal Document</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Terms of <span className="text-teal-400">Service</span>
              </h1>
              <p className="text-xl text-gray-200 mb-4 leading-relaxed">
                Please read these terms carefully before using Fan Lite Play. By accessing our platform, you agree to be bound by these terms and conditions.
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

        {/* Terms Content */}
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

        {/* Agreement Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
              <CheckCircle className="w-12 h-12 text-teal-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Agreement</h2>
              <p className="text-gray-600 mb-6">
                By using Fan Lite Play, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/privacy">
                  <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
                    Privacy Policy <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/fair-play">
                  <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
                    Fair Play Policy <ChevronRight className="w-4 h-4 ml-2" />
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
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Our support team is here to help clarify any concerns.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Contact Us <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
