import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Shield, 
  Clock, 
  AlertTriangle, 
  Phone, 
  Users,
  Brain,
  Lightbulb,
  ChevronRight,
  CheckCircle,
  HelpCircle,
  Target
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ResponsibleGaming() {
  const sections = [
    {
      id: "commitment",
      icon: Heart,
      title: "1. Our Commitment",
      content: `At Fan Lite Play, we are committed to promoting responsible gaming practices. While our platform is free-to-play with no real money involved, we believe it's important to maintain healthy gaming habits and ensure that fantasy cricket remains an enjoyable pastime.

We encourage all users to:
• Play for entertainment and fun
• Set personal time limits
• Maintain balance with other activities
• Recognize when gaming becomes problematic

Our platform is designed to be a skill-based entertainment experience, not a substitute for real-life activities or relationships.`
    },
    {
      id: "healthy",
      icon: Brain,
      title: "2. Healthy Gaming Habits",
      content: `Maintaining healthy gaming habits is essential for enjoying fantasy cricket responsibly:

Time Management:
• Set daily or weekly time limits for gaming
• Take regular breaks during extended sessions
• Don't let gaming interfere with work, school, or relationships
• Schedule gaming time rather than playing impulsively

Balanced Lifestyle:
• Maintain physical activity and exercise
• Spend quality time with family and friends
• Pursue other hobbies and interests
• Ensure adequate sleep and rest

Mindful Gaming:
• Play for enjoyment, not to escape problems
• Don't chase losses or become obsessed with rankings
• Celebrate wins moderately
• Accept that outcomes depend on real match results`
    },
    {
      id: "warning",
      icon: AlertTriangle,
      title: "3. Warning Signs",
      content: `Be aware of these warning signs that gaming may be becoming problematic:

Behavioral Signs:
• Spending excessive time on the platform
• Neglecting responsibilities or relationships
• Feeling restless or irritable when not playing
• Lying about time spent gaming

Emotional Signs:
• Gaming to escape negative emotions
• Feeling anxious or depressed about rankings
• Becoming overly competitive or aggressive
• Experiencing mood swings related to contest results

Social Signs:
• Withdrawing from friends and family
• Preferring gaming over social activities
• Conflicts with loved ones about gaming
• Declining performance at work or school

If you recognize these signs in yourself or others, it may be time to seek help or take a break.`
    },
    {
      id: "tools",
      icon: Shield,
      title: "4. Self-Help Tools",
      content: `We provide several tools to help you manage your gaming:

Time Limits:
• Set daily session reminders
• Configure break notifications
• Track your total time spent

Account Controls:
• Self-exclusion options available
• Temporary account suspension
• Permanent account closure

Activity Monitoring:
• View your gaming history
• Track contest participation
• Monitor time spent on platform

To access these tools, visit your account settings or contact our support team for assistance.`
    },
    {
      id: "support",
      icon: Phone,
      title: "5. Getting Help",
      content: `If you or someone you know needs help with gaming-related issues, these resources are available:

Fan Lite Play Support:
• Email: support@fanliteplay.com
• Available 24/7 for assistance
• Confidential and non-judgmental

Professional Resources:
• National Mental Health Helpline: 1800-599-0019 (India)
• iCall: 9152987821
• Vandrevala Foundation: 1860-2662-345

Online Resources:
• www.nimhans.ac.in
• www.thelivelovelaughfoundation.org
• www.mindyourmind.ca

Remember, seeking help is a sign of strength, not weakness.`
    },
    {
      id: "parents",
      icon: Users,
      title: "6. Information for Parents",
      content: `Parents and guardians play a crucial role in promoting responsible gaming:

Age Restrictions:
• Fan Lite Play is for users 18 years and older
• We verify age during registration
• Underage accounts are terminated

Parental Guidance:
• Monitor your children's online activities
• Discuss responsible gaming habits
• Set clear rules and boundaries
• Be aware of warning signs

Communication:
• Talk openly about gaming
• Understand what your children are playing
• Encourage balanced activities
• Be a positive role model

If you believe a minor is using our platform, please contact us immediately.`
    },
    {
      id: "education",
      icon: Lightbulb,
      title: "7. Understanding Fantasy Sports",
      content: `Fantasy cricket is a game of skill that involves:

Skill-Based Elements:
• Player selection based on knowledge
• Strategic team composition
• Understanding cricket statistics
• Analyzing match conditions

What It's Not:
• Not gambling or betting
• No real money prizes on our platform
• Not based on chance alone
• Not a way to make money

Healthy Perspective:
• View it as entertainment
• Enjoy the strategic challenge
• Connect with fellow cricket fans
• Learn more about the sport

Understanding the nature of fantasy sports helps maintain a healthy relationship with the game.`
    },
    {
      id: "contact",
      icon: HelpCircle,
      title: "8. Contact Us",
      content: `If you have questions about responsible gaming or need assistance:

Support Team:
• Email: support@fanliteplay.com
• Response within 24 hours

Responsible Gaming Team:
• Email: responsible@fanliteplay.com
• Dedicated support for gaming concerns

Office Address:
Fan Lite Play
F-73, DLF Promenade Mall,
Nelson Mandela Marg, Vasant Kunj,
New Delhi, Delhi - 110070, India

We're here to help you enjoy fantasy cricket responsibly.`
    }
  ];

  const tips = [
    { icon: Clock, title: "Set Time Limits", desc: "Decide how much time you'll spend before you start" },
    { icon: Heart, title: "Play for Fun", desc: "Remember, it's entertainment, not a competition" },
    { icon: Users, title: "Stay Connected", desc: "Don't let gaming replace real relationships" },
    { icon: Brain, title: "Stay Balanced", desc: "Maintain other hobbies and activities" }
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
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Player Wellbeing</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Responsible <span className="text-teal-400">Gaming</span>
              </h1>
              <p className="text-xl text-gray-200 mb-4 leading-relaxed">
                We're committed to ensuring fantasy cricket remains a fun and healthy activity. Learn about responsible gaming practices and available support.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 text-teal-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>100% Free Platform</span>
                </div>
                <div className="flex items-center gap-2 text-teal-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>No Real Money</span>
                </div>
                <div className="flex items-center gap-2 text-teal-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Play for Fun</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="py-12 px-4 bg-slate-50 border-b">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Quick Tips for Healthy Gaming</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {tips.map((tip, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <tip.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.desc}</p>
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

        {/* Content */}
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

        {/* Help Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
              <Phone className="w-12 h-12 text-teal-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Need Help?</h2>
              <p className="text-gray-600 mb-6">
                If you or someone you know needs support, we're here to help. Reach out to our team or access professional resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
                    Contact Support <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/faq">
                  <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
                    View FAQ <ChevronRight className="w-4 h-4 ml-2" />
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
              Play Responsibly, Play Happy
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Fantasy cricket is best enjoyed as a fun, skill-based game. Keep it that way!
            </p>
            <Link href="/">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Start Playing <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
