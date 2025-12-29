import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy <span className="text-primary">Policy</span>
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
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p>
                  Fan Lite Fantasy Cricket ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this policy carefully to understand our practices regarding your personal data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">2.1 Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Account Information:</strong> Email address and password when you register</li>
                  <li><strong className="text-foreground">Profile Information:</strong> Username and display name</li>
                  <li><strong className="text-foreground">Communication Data:</strong> Information you provide when contacting us</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">2.2 Information Collected Automatically</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Usage Data:</strong> Pages visited, features used, time spent on the platform</li>
                  <li><strong className="text-foreground">Device Information:</strong> Browser type, operating system, device type</li>
                  <li><strong className="text-foreground">Log Data:</strong> IP address, access times, referring URLs</li>
                  <li><strong className="text-foreground">Cookies:</strong> Session cookies for authentication and preferences</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>To create and manage your account</li>
                  <li>To provide and maintain our services</li>
                  <li>To enable you to participate in fantasy cricket contests</li>
                  <li>To communicate with you about updates, features, and support</li>
                  <li>To improve and optimize our platform</li>
                  <li>To detect and prevent fraud or abuse</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Sharing and Disclosure</h2>
                <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong className="text-foreground">Service Providers:</strong> Third-party vendors who assist in operating our platform</li>
                  <li><strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong className="text-foreground">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong className="text-foreground">With Your Consent:</strong> When you explicitly agree to share information</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Encryption of passwords using bcrypt hashing</li>
                  <li>Secure HTTPS connections</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                </ul>
                <p className="mt-4">
                  However, no method of transmission over the Internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Keep you logged in to your account</li>
                  <li>Remember your preferences</li>
                  <li>Analyze platform usage and performance</li>
                </ul>
                <p className="mt-4">
                  You can control cookies through your browser settings. Disabling cookies may affect some features of the platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
                <p>You have the following rights regarding your personal data:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong className="text-foreground">Access:</strong> Request a copy of your personal data</li>
                  <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong className="text-foreground">Deletion:</strong> Request deletion of your account and data</li>
                  <li><strong className="text-foreground">Objection:</strong> Object to certain processing of your data</li>
                  <li><strong className="text-foreground">Portability:</strong> Request transfer of your data</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us through our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Data Retention</h2>
                <p>
                  We retain your personal information for as long as your account is active or as needed to provide services. We may retain certain information for longer periods as required by law or for legitimate business purposes such as resolving disputes and enforcing our agreements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Children's Privacy</h2>
                <p>
                  Our platform is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete such information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Third-Party Links</h2>
                <p>
                  Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of the platform after changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Us</h2>
                <p>
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">Website:</strong> www.FanLiteFantasyCricket.com
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
