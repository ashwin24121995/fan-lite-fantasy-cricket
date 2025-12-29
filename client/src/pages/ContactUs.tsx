import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  CheckCircle,
  AlertCircle
} from "lucide-react";

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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", category: "", message: "" });
    
    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses to your queries within 24 hours",
      contact: "support@fanliteplay.com",
      availability: "24/7 Support"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant assistance from our support team",
      contact: "Available on website",
      availability: "9 AM - 11 PM IST"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our customer care team",
      contact: "+91 1800-XXX-XXXX",
      availability: "Mon-Sat, 10 AM - 8 PM IST"
    }
  ];

  const quickLinks = [
    { icon: HelpCircle, title: "FAQ", description: "Find answers to common questions", href: "/faq" },
    { icon: FileText, title: "How to Play", description: "Learn the basics of fantasy cricket", href: "/how-to-play" },
    { icon: Shield, title: "Fair Play Policy", description: "Understand our fair play guidelines", href: "/fair-play" },
    { icon: Users, title: "About Us", description: "Learn more about Fan Lite Play", href: "/about" }
  ];

  const supportCategories = [
    "Account Issues",
    "Contest Queries",
    "Technical Problems",
    "Payment & Withdrawals",
    "Team Selection Help",
    "Scoring Questions",
    "Feedback & Suggestions",
    "Report a Bug",
    "Partnership Inquiry",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/contact-hero.jpg" 
            alt="Customer Support Team" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="text-teal-400">Touch</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We're here to help! Whether you have questions about contests, need technical support, 
              or want to share feedback, our dedicated team is ready to assist you. Reach out through 
              any of our support channels and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-teal-400">
                <CheckCircle className="w-5 h-5" />
                <span>24/7 Email Support</span>
              </div>
              <div className="flex items-center gap-2 text-teal-400">
                <CheckCircle className="w-5 h-5" />
                <span>Average Response: 4 Hours</span>
              </div>
              <div className="flex items-center gap-2 text-teal-400">
                <CheckCircle className="w-5 h-5" />
                <span>98% Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-slate-800/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Methods</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Choose the support channel that works best for you. Our team is committed to 
              providing prompt and helpful assistance through all channels.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-teal-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                    <method.icon className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{method.description}</p>
                  <div className="space-y-2">
                    <p className="text-teal-400 font-medium">{method.contact}</p>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{method.availability}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Send Us a Message</h2>
              <p className="text-slate-400 mb-8">
                Fill out the form below and our support team will get back to you within 24 hours. 
                Please provide as much detail as possible to help us assist you better.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select a category</option>
                    {supportCategories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    placeholder="Brief description of your inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    placeholder="Please describe your issue or question in detail. Include any relevant information such as contest names, dates, or error messages."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  />
                </div>
                
                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                  </div>
                )}
                
                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                    <AlertCircle className="w-5 h-5" />
                    <span>Something went wrong. Please try again or contact us directly via email.</span>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
            
            {/* Additional Info */}
            <div className="space-y-8">
              {/* Office Information */}
              <Card className="bg-slate-900/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-teal-400" />
                    Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-slate-300 font-medium">Fan Lite Play Headquarters</p>
                    <p className="text-slate-400">
                      123 Tech Park, Sector 62<br />
                      Noida, Uttar Pradesh 201301<br />
                      India
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-700">
                    <p className="text-sm text-slate-400">
                      <strong className="text-slate-300">Note:</strong> We primarily operate online. 
                      For in-person meetings, please schedule an appointment in advance via email.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Response Times */}
              <Card className="bg-slate-900/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-teal-400" />
                    Expected Response Times
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-slate-700">
                      <span className="text-slate-400">Email Support</span>
                      <span className="text-teal-400 font-medium">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-700">
                      <span className="text-slate-400">Live Chat</span>
                      <span className="text-teal-400 font-medium">Instant (when available)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-700">
                      <span className="text-slate-400">Phone Support</span>
                      <span className="text-teal-400 font-medium">Immediate</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-400">Social Media</span>
                      <span className="text-teal-400 font-medium">Within 12 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Links */}
              <Card className="bg-slate-900/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {quickLinks.map((link, index) => (
                      <Link key={index} href={link.href}>
                        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer group">
                          <div className="flex items-center gap-3">
                            <link.icon className="w-5 h-5 text-teal-400" />
                            <div>
                              <p className="text-white font-medium">{link.title}</p>
                              <p className="text-sm text-slate-400">{link.description}</p>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-teal-400 transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-slate-800/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Connect With Us</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Follow us on social media for the latest updates, contest announcements, 
              cricket news, and exclusive tips from our fantasy experts.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Twitter", handle: "@FanLitePlay", color: "bg-blue-500" },
              { name: "Instagram", handle: "@fanliteplay", color: "bg-pink-500" },
              { name: "Facebook", handle: "FanLitePlay", color: "bg-blue-600" },
              { name: "YouTube", handle: "Fan Lite Play", color: "bg-red-500" },
              { name: "Telegram", handle: "@FanLitePlayOfficial", color: "bg-sky-500" }
            ].map((social, index) => (
              <div 
                key={index}
                className="px-6 py-4 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-teal-500/50 transition-all cursor-pointer"
              >
                <div className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center mb-2 mx-auto`}>
                  <span className="text-white font-bold text-lg">{social.name[0]}</span>
                </div>
                <p className="text-white font-medium text-center">{social.name}</p>
                <p className="text-slate-400 text-sm text-center">{social.handle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-r from-teal-500/20 to-coral-500/20 border border-teal-500/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Check out our comprehensive FAQ section for instant answers to common questions, 
              or browse our How to Play guide to learn everything about fantasy cricket.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/faq">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                  Browse FAQ
                </Button>
              </Link>
              <Link href="/how-to-play">
                <Button variant="outline" className="border-teal-500 text-teal-400 hover:bg-teal-500/10">
                  How to Play
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
