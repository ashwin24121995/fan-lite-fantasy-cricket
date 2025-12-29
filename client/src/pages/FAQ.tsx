import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "Is Fan Lite Fantasy Cricket really free to play?",
          a: "Yes, absolutely! Fan Lite Fantasy Cricket is 100% free to play. There are no entry fees, no hidden charges, and no in-app purchases required. We believe fantasy cricket should be accessible to everyone."
        },
        {
          q: "How do I create an account?",
          a: "Simply click on 'Register' in the navigation bar, enter your email address and create a password. That's it! You can start playing immediately after registration."
        },
        {
          q: "Do I need to download an app?",
          a: "No, Fan Lite Fantasy Cricket is a web-based platform. You can access it from any device with a web browser—mobile, tablet, or desktop. No downloads required."
        },
        {
          q: "Is this platform only for Indian users?",
          a: "Yes, Fan Lite Fantasy Cricket is designed specifically for Indian cricket fans. Our match timings are displayed in IST, and we focus on matches that are most relevant to Indian audiences."
        }
      ]
    },
    {
      category: "Team Creation",
      questions: [
        {
          q: "How many players can I select in my team?",
          a: "You must select exactly 11 players for your fantasy team. You can choose players from both teams playing in the match."
        },
        {
          q: "What is the credit system?",
          a: "Each player has a credit value ranging from 7 to 11 credits based on their skill and recent performance. Your total team must not exceed 100 credits. This ensures fair competition and strategic team building."
        },
        {
          q: "What are Captain and Vice-Captain?",
          a: "Captain earns 2x (double) the fantasy points, while Vice-Captain earns 1.5x points. Choosing the right captain and vice-captain is crucial for maximizing your score."
        },
        {
          q: "Can I edit my team after creating it?",
          a: "Yes, you can edit your team anytime before the match starts. Once the match begins, all teams are locked and cannot be modified."
        },
        {
          q: "How many players can I pick from one team?",
          a: "You can select a maximum of 7 players from any single team. This rule ensures balanced team composition."
        }
      ]
    },
    {
      category: "Contests & Scoring",
      questions: [
        {
          q: "How do I join a contest?",
          a: "After creating your team for a match, you can browse available contests and join any of them. Simply click 'Join Contest' and select the team you want to use."
        },
        {
          q: "How are fantasy points calculated?",
          a: "Points are awarded based on real match performance: runs scored, wickets taken, catches, stumpings, and run-outs. Bonus points are given for milestones like half-centuries, centuries, and multi-wicket hauls. Check our 'How to Play' page for the complete points system."
        },
        {
          q: "When are points updated?",
          a: "Fantasy points are updated in real-time as the match progresses. You can track your team's performance and leaderboard position throughout the match."
        },
        {
          q: "What happens if a player doesn't play?",
          a: "If a player in your team doesn't participate in the match (not in playing XI), they will score 0 points. This is why it's important to check team announcements before the match."
        }
      ]
    },
    {
      category: "Technical & Support",
      questions: [
        {
          q: "Where does the match data come from?",
          a: "We use CricAPI to fetch real-time cricket data including live scores, match schedules, player information, and match statistics. All data is authentic and updated in real-time."
        },
        {
          q: "What browsers are supported?",
          a: "Fan Lite Fantasy Cricket works on all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest version of your browser."
        },
        {
          q: "I forgot my password. How can I reset it?",
          a: "Currently, please contact us through our website www.FanLiteFantasyCricket.com for password reset assistance. We're working on adding a self-service password reset feature."
        },
        {
          q: "How can I report a bug or provide feedback?",
          a: "We welcome your feedback! Please visit www.FanLiteFantasyCricket.com to report any issues or share your suggestions. Your input helps us improve the platform."
        }
      ]
    },
    {
      category: "Fair Play & Rules",
      questions: [
        {
          q: "Is fantasy cricket legal in India?",
          a: "Yes, fantasy sports are legal in India. The Supreme Court of India and various High Courts have recognized fantasy sports as games of skill, which are exempt from gambling laws."
        },
        {
          q: "How do you ensure fair play?",
          a: "We have strict fair play policies in place. Multiple accounts, collusion, and any form of cheating are prohibited. Our system monitors for suspicious activity, and violators may be permanently banned."
        },
        {
          q: "Can I create multiple accounts?",
          a: "No, each user is allowed only one account. Creating multiple accounts is a violation of our terms of service and may result in permanent ban from the platform."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Find answers to common questions about Fan Lite Fantasy Cricket. Can't find what you're looking for? Contact us!
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 container">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-2xl font-bold text-foreground mb-6">{section.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {section.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${sectionIndex}-${faqIndex}`}
                      className="bg-card border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:text-primary">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              We're here to help! Reach out to us and we'll get back to you as soon as possible.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
