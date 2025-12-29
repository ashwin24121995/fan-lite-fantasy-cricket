import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  HelpCircle,
  FileText,
  Shield,
  Users,
  ChevronRight,
  CheckCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", category: "", message: "" });
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses within 24 hours",
      contact: "support@fanliteplay.com",
      availability: "24/7 Support"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant assistance from our team",
      contact: "Available on website",
      availability: "9 AM - 11 PM IST"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+91 1800-XXX-XXXX",
      availability: "Mon-Sat, 10 AM - 8 PM IST"
    }
  ];

  const quickLinks = [
    { icon: HelpCircle, title: "FAQ", description: "Find answers to common questions", href: "/faq" },
    { icon: FileText, title: "How to Play", description: "Learn the basics", href: "/how-to-play" },
    { icon: Shield, title: "Fair Play Policy", description: "Our fair play guidelines", href: "/fair-play" },
    { icon: Users, title: "About Us", description: "Learn more about us", href: "/about" }
  ];

  const supportCategories = [
    "Account Issues",
    "Contest Queries",
    "Technical Problems",
    "Team Selection Help",
    "Scoring Questions",
    "Feedback & Suggestions",
    "Report a Bug",
    "Partnership Inquiry",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900 py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Contact <span className="text-teal-400">Us</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Have questions or need assistance? Our dedicated support team is here to help you with anything related to Fan Lite Play.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-teal-400">
                    <CheckCircle className="w-5 h-5" />
                    <span>24/7 Email Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-teal-400">
                    <CheckCircle className="w-5 h-5" />
                    <span>Quick Response Time</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <img src="/contact-hero.jpg" alt="Contact Support" className="rounded-lg shadow-2xl w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Get in <span className="text-teal-600">Touch</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the most convenient way to reach us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-t-4 border-teal-500">
                  <method.icon className="w-12 h-12 text-teal-500 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="text-teal-600 font-semibold mb-2">{method.contact}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{method.availability}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Office Info */}
        <section className="py-20 px-4 bg-white">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {submitStatus === "success" && (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-lg mb-6 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-slate-50 border-slate-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-slate-50 border-slate-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">Select a category</option>
                      {supportCategories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <Input
                      type="text"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-slate-50 border-slate-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea
                      placeholder="Please describe your query in detail..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-slate-50 border-slate-200"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Office Info */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Office</h2>
                <p className="text-gray-600 mb-8">
                  Visit us at our headquarters or send us mail at the address below.
                </p>

                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-xl border-l-4 border-teal-500 mb-8">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Registered Office</h3>
                      <p className="text-gray-600">
                        F-73, DLF Promenade Mall,<br />
                        Nelson Mandela Marg, Vasant Kunj,<br />
                        New Delhi, Delhi - 110070, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <Clock className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 10:00 AM - 8:00 PM IST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Email Addresses</h3>
                      <p className="text-gray-600">
                        General: support@fanliteplay.com<br />
                        Business: business@fanliteplay.com<br />
                        Press: media@fanliteplay.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 gap-4">
                  {quickLinks.map((link, index) => (
                    <Link key={index} href={link.href}>
                      <Card className="hover:shadow-md transition cursor-pointer bg-slate-50 border-slate-200">
                        <CardContent className="p-4 flex items-center gap-3">
                          <link.icon className="w-5 h-5 text-teal-600" />
                          <div>
                            <p className="font-medium text-slate-900">{link.title}</p>
                            <p className="text-xs text-gray-500">{link.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Expected <span className="text-teal-400">Response Times</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We strive to respond to all queries as quickly as possible
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-teal-500 text-white text-3xl font-bold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  &lt;1h
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
                <p className="text-gray-400">Instant responses during business hours</p>
              </div>
              <div className="text-center">
                <div className="bg-coral-500 text-white text-3xl font-bold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  24h
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
                <p className="text-gray-400">Within 24 hours for most queries</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-500 text-white text-3xl font-bold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  48h
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Complex Issues</h3>
                <p className="text-gray-400">For detailed investigations</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-teal-500 to-emerald-500">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Playing?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Join thousands of cricket fans on Fan Lite Play today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Get Started Free <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/how-to-play">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold">
                  Learn How to Play
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
