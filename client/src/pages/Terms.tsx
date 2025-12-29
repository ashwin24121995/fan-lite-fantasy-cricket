import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 container">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Fan Lite Play ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Platform. These terms apply to all users, including visitors, registered users, and contributors.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Eligibility</h2>
                <p>
                  To use Fan Lite Play, you must:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Be at least 18 years of age</li>
                  <li>Be a resident of India</li>
                  <li>Have the legal capacity to enter into a binding agreement</li>
                  <li>Not be prohibited from using the Platform under applicable laws</li>
                </ul>
                <p className="mt-4">
                  By using the Platform, you represent and warrant that you meet all eligibility requirements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Account Registration</h2>
                <p>
                  To access certain features, you must create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information as needed</li>
                  <li>Keep your password secure and confidential</li>
                  <li>Not share your account with others</li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>
                <p className="mt-4">
                  You are responsible for all activities that occur under your account.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Free-to-Play Model</h2>
                <p>
                  Fan Lite Play is a free-to-play platform. We do not charge any entry fees, and there are no monetary prizes or rewards. The Platform is designed purely for entertainment and skill development. Any references to "winning" or "prizes" refer to rankings and achievements within the Platform, not monetary compensation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Game of Skill</h2>
                <p>
                  Fantasy cricket as offered on this Platform is a game of skill. Success depends on your knowledge of cricket, player analysis, strategic thinking, and decision-making abilities. The outcome is not determined by chance or luck but by the skill and judgment of the participant.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. User Conduct</h2>
                <p>
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Create multiple accounts</li>
                  <li>Use automated systems, bots, or scripts</li>
                  <li>Engage in collusion with other users</li>
                  <li>Exploit bugs or vulnerabilities in the Platform</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Post offensive, defamatory, or illegal content</li>
                  <li>Attempt to gain unauthorized access to the Platform</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Intellectual Property</h2>
                <p>
                  All content on the Platform, including but not limited to text, graphics, logos, images, and software, is the property of Fan Lite Play or its licensors and is protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Third-Party Data</h2>
                <p>
                  The Platform uses third-party services (including CricAPI) for cricket data. While we strive to provide accurate information, we do not guarantee the accuracy, completeness, or timeliness of third-party data. We are not responsible for any errors or omissions in such data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Disclaimer of Warranties</h2>
                <p>
                  The Platform is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the Platform will be uninterrupted, error-free, or free of viruses or other harmful components.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Fan Lite Play shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Termination</h2>
                <p>
                  We reserve the right to suspend or terminate your account at any time, with or without cause, and with or without notice. Upon termination, your right to use the Platform will immediately cease.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Changes to Terms</h2>
                <p>
                  We may modify these Terms of Service at any time. We will notify users of significant changes through the Platform. Your continued use of the Platform after changes constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in India.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">14. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">Website:</strong> www.fanliteplay.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
