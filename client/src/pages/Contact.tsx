import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Globe, MessageSquare, Clock, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Have questions, feedback, or need assistance? We're here to help you with anything related to Fan Lite Play.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-foreground">Website</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://www.fanliteplay.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.fanliteplay.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardHeader>
                <Mail className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-foreground">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  support@fanliteplay.com
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardHeader>
                <MessageSquare className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-foreground">Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We value your input
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-foreground">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Within 24-48 hours
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Office Address */}
          <div className="max-w-3xl mx-auto mb-12">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-primary" />
                  <CardTitle className="text-foreground">Our Office</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground space-y-1">
                  <p className="font-semibold text-foreground">Fan Lite Play</p>
                  <p>F-73, DLF Promenade Mall</p>
                  <p>Nelson Mandela Marg, Vasant Kunj</p>
                  <p>New Delhi, Delhi - 110070</p>
                  <p>India</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">How Can We Help?</h2>
            
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">General Inquiries</h3>
                  <p className="text-muted-foreground">
                    For general questions about Fan Lite Play, how to play, or platform features, please visit our FAQ page first. If you can't find your answer there, reach out to us through our website.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Technical Support</h3>
                  <p className="text-muted-foreground">
                    Experiencing technical issues with the platform? Please provide as much detail as possible including your browser, device type, and steps to reproduce the issue. Screenshots are helpful!
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Account Issues</h3>
                  <p className="text-muted-foreground">
                    Having trouble with your account, login, or password? Contact us with your registered email address and we'll help you resolve the issue as quickly as possible.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Feedback & Suggestions</h3>
                  <p className="text-muted-foreground">
                    We're always looking to improve! If you have ideas for new features, improvements, or any feedback about your experience, we'd love to hear from you. Your input shapes the future of Fan Lite Play.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Report Violations</h3>
                  <p className="text-muted-foreground">
                    If you suspect any user is violating our fair play policy or terms of service, please report it immediately. We take all reports seriously and investigate thoroughly to maintain a fair gaming environment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Response Promise */}
        <section className="py-16 bg-muted/30">
          <div className="container text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Promise</h2>
            <p className="text-muted-foreground">
              We strive to respond to all inquiries within 24-48 hours. Your satisfaction and gaming experience are our top priorities. Thank you for being part of the Fan Lite Play community!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
