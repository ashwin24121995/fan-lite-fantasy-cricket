import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "Is Fan Lite Play really 100% free?",
          a: "Yes, absolutely! Fan Lite Play is completely free to use. There are no entry fees, no hidden charges, and no monetary prizes. We believe fantasy cricket should be about skill and passion, not money. You can create unlimited teams, join unlimited contests, and play as much as you want without spending a single rupee."
        },
        {
          q: "How do I create an account?",
          a: "Creating an account is simple and quick. Click on the 'Get Started' button on our homepage, enter your email address, create a strong password, and verify your email. You can also sign up using your Google or Facebook account for faster registration. Once your account is created, you're ready to start playing!"
        },
        {
          q: "Do I need to provide payment information?",
          a: "No, we never ask for payment information. Since our platform is completely free, there's no need to provide credit card details or any payment method. Your personal and financial information is always safe with us."
        },
        {
          q: "Can I play on mobile?",
          a: "Yes! Our platform is fully optimized for mobile devices. You can play on your smartphone, tablet, or desktop. Simply visit our website on your mobile browser or download our mobile app (available on iOS and Android) for the best experience."
        }
      ]
    },
    {
      category: "Team Building",
      questions: [
        {
          q: "How many players should I select in my team?",
          a: "You must select exactly 11 players for your fantasy cricket team. This includes batsmen, bowlers, all-rounders, and a wicket-keeper. The 11-player format mirrors the actual cricket match composition, ensuring a balanced and realistic team structure."
        },
        {
          q: "What is the credit budget for building a team?",
          a: "You have a total budget of 100 credits to build your 11-player team. Each player has a credit cost (typically ranging from 6 to 10.5 credits) based on their performance history and current form. You must allocate your 100 credits wisely to get the best players within your budget constraints."
        },
        {
          q: "Can I select players from both teams?",
          a: "Yes, you can select players from both teams playing in the match. This gives you flexibility to build a balanced team with the best performers from either side. However, you can select a maximum of 7 players from any single team to ensure fair competition."
        },
        {
          q: "What is the difference between Captain and Vice-Captain?",
          a: "Your captain earns 2x points for all their actions (batting, bowling, fielding), while your vice-captain earns 1.5x points. These multipliers can significantly impact your total score, so choose them strategically based on form, matchup, and recent performance."
        },
        {
          q: "Can I change my team after the match starts?",
          a: "No, you cannot change your team after the match has started. You can edit your team anytime before the match begins. Once the match starts, your team is locked and cannot be modified. Make sure to finalize your team well before the match start time."
        }
      ]
    },
    {
      category: "Contests & Scoring",
      questions: [
        {
          q: "How do fantasy points work?",
          a: "Fantasy points are awarded based on actual player performance in the match. Batsmen earn 1 point per run, bowlers earn 25 points per wicket, fielders earn 10 points per catch, and so on. Milestone bonuses are awarded for centuries, half-centuries, and wicket hauls. Your captain's points are doubled (2x) and your vice-captain's points are multiplied by 1.5."
        },
        {
          q: "What contests are available?",
          a: "We offer various contest types: Head-to-Head (1v1), Small Leagues (10 spots), Medium Leagues (100 spots), and Mega Contests (10,000+ spots). All contests are completely free to join. You can join multiple contests with different teams to maximize your chances of winning."
        },
        {
          q: "How is the leaderboard calculated?",
          a: "The leaderboard is calculated based on the total fantasy points earned by all 11 players in your team. Your captain's points are doubled, and your vice-captain's points are multiplied by 1.5. The player with the highest total score ranks first on the leaderboard."
        },
        {
          q: "Can I join multiple contests?",
          a: "Yes, you can join as many contests as you want with different teams. This strategy allows you to diversify your team compositions and maximize your chances of winning. Create multiple teams for different contests to test different strategies."
        },
        {
          q: "What happens if a player doesn't play in the match?",
          a: "If a player in your team doesn't play in the match, they will earn 0 points. This is why it's important to stay updated with team news and last-minute changes before the match starts. Always have backup options in mind while building your team."
        }
      ]
    },
    {
      category: "Scoring Details",
      questions: [
        {
          q: "How many points do batsmen earn?",
          a: "Batsmen earn 1 point per run scored. They also earn milestone bonuses: +10 for a half-century (50 runs), +25 for a century (100 runs), and +50 for a double century (200 runs). If a batsman gets out without scoring (duck), they receive a -2 penalty."
        },
        {
          q: "How many points do bowlers earn?",
          a: "Bowlers earn 25 points per wicket taken. They also earn bonuses: +10 for a 3-wicket haul, +25 for a 5-wicket haul, and +5 for each maiden over (over without conceding runs). Economy rate bonuses (+5 to +15) are awarded based on runs conceded per over."
        },
        {
          q: "How many points do fielders earn?",
          a: "Fielders earn 10 points per catch, 15 points per stumping (wicket-keeper), and 10 points per run-out contribution. Direct run-outs earn an additional +5 bonus. All-rounders and wicket-keepers can earn points from both batting and fielding."
        },
        {
          q: "What are multipliers?",
          a: "Multipliers apply to your captain and vice-captain. Your captain earns 2x points for all actions (batting, bowling, fielding), while your vice-captain earns 1.5x points. These multipliers can significantly boost your total score, so choose them wisely."
        }
      ]
    },
    {
      category: "Account & Security",
      questions: [
        {
          q: "Is my personal information safe?",
          a: "Yes, your personal information is completely safe with us. We use industry-standard encryption and security measures to protect your data. We never sell your information to third parties and are fully transparent about how we use your data. Read our Privacy Policy for more details."
        },
        {
          q: "Can I change my password?",
          a: "Yes, you can change your password anytime from your account settings. Go to Settings > Security > Change Password, enter your current password, and set a new password. Make sure to use a strong password with a mix of letters, numbers, and special characters."
        },
        {
          q: "What if I forget my password?",
          a: "If you forget your password, click on 'Forgot Password' on the login page. Enter your email address, and we'll send you a password reset link. Click the link in the email and set a new password. If you don't receive the email, check your spam folder or contact our support team."
        },
        {
          q: "Can I delete my account?",
          a: "Yes, you can delete your account anytime. Go to Settings > Account > Delete Account. Note that this action is permanent and cannot be undone. All your teams, contests, and historical data will be deleted."
        },
        {
          q: "How do I report suspicious activity?",
          a: "If you notice any suspicious activity on your account, immediately change your password and contact our support team at support@fanliteplay.com. We take security seriously and will investigate any concerns promptly."
        }
      ]
    },
    {
      category: "Matches & Contests",
      questions: [
        {
          q: "Which cricket matches are available?",
          a: "We feature matches from all major cricket tournaments including IPL, international matches (Test, ODI, T20I), domestic leagues, and other cricket events. New matches are added regularly as they are scheduled. You can filter matches by tournament, team, or date."
        },
        {
          q: "How do I know which matches are available?",
          a: "Visit the 'Matches' section on our homepage to see all available matches. Each match shows the teams playing, match time, tournament name, and venue. You can click on any match to view detailed information including team lineups, recent form, and head-to-head statistics."
        },
        {
          q: "When can I create a team for a match?",
          a: "You can create a team for any match until 15 minutes before the match starts. After that, team creation is locked. This ensures that all players have equal time to create their teams and prevents last-minute changes that could give unfair advantages."
        },
        {
          q: "Can I create multiple teams for the same match?",
          a: "Yes, you can create multiple teams for the same match and join different contests with each team. This allows you to test different strategies and maximize your chances of winning. Each team must have a different composition."
        }
      ]
    },
    {
      category: "Technical Issues",
      questions: [
        {
          q: "The website is loading slowly. What should I do?",
          a: "If the website is loading slowly, try: 1) Refreshing the page (Ctrl+R or Cmd+R), 2) Clearing your browser cache and cookies, 3) Disabling browser extensions, 4) Trying a different browser, 5) Checking your internet connection. If the problem persists, contact our support team."
        },
        {
          q: "I'm getting an error message. What does it mean?",
          a: "Error messages provide specific information about what went wrong. Common errors include: 'Team Locked' (match has started), 'Budget Exceeded' (team cost exceeds 100 credits), 'Invalid Team' (team doesn't meet requirements). Read the error message carefully and adjust accordingly. Contact support if you need help."
        },
        {
          q: "Why can't I join a contest?",
          a: "You might not be able to join a contest if: 1) The contest is full, 2) The match has already started, 3) You've already joined with another team (some contests don't allow multiple entries), 4) Your team doesn't meet contest requirements. Check the contest details for specific restrictions."
        },
        {
          q: "How do I contact support?",
          a: "You can contact our support team through multiple channels: 1) Email: support@fanliteplay.com, 2) In-app chat: Click the help icon in the app, 3) Contact form: Visit our Contact Us page, 4) Social media: Message us on Twitter or Facebook. We typically respond within 24 hours."
        }
      ]
    },
    {
      category: "Responsible Gaming",
      questions: [
        {
          q: "Is fantasy cricket legal?",
          a: "Fantasy cricket is legal in most countries and is recognized as a game of skill. In India, fantasy cricket is regulated and legal. However, laws vary by region, so please check your local regulations. Our platform complies with all applicable laws and regulations."
        },
        {
          q: "Is fantasy cricket a form of gambling?",
          a: "No, fantasy cricket is not gambling. It's a game of skill where success depends on your cricket knowledge, analytical abilities, and strategic thinking. The outcome is determined by actual player performance, not chance or luck. Since our platform is completely free, there's no financial risk involved."
        },
        {
          q: "How can I play responsibly?",
          a: "Play responsibly by: 1) Setting personal limits on time and participation, 2) Treating it as entertainment, not income, 3) Never spending money you can't afford to lose, 4) Taking breaks when needed, 5) Seeking help if you feel you're developing unhealthy habits. We provide resources and support for responsible gaming."
        },
        {
          q: "What is your Fair Play Policy?",
          a: "Our Fair Play Policy ensures a level playing field for all users. We prohibit collusion, match-fixing, account sharing, and other unfair practices. We use advanced detection systems to identify and prevent fraud. Violations result in account suspension or permanent ban. Read our full Fair Play Policy for details."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900 py-20 px-4">
          <div className="container max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Frequently Asked <span className="text-teal-400">Questions</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about Fan Lite Play. Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container max-w-4xl mx-auto">
            <div className="mb-12">
              <img src="/faq-hero.jpg" alt="FAQ Support" className="rounded-xl shadow-2xl w-full" />
            </div>

            <div className="space-y-8">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-4 border-b-2 border-teal-500">
                    {category.category}
                  </h2>

                  <div className="space-y-4">
                    {category.questions.map((faq, qIndex) => {
                      const globalIndex = faqs.slice(0, categoryIndex).reduce((sum, c) => sum + c.questions.length, 0) + qIndex;
                      const isOpen = openIndex === globalIndex;

                      return (
                        <div key={qIndex} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                          <button
                            onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                            className="w-full px-6 py-4 bg-gradient-to-r from-teal-50 to-emerald-50 hover:from-teal-100 hover:to-emerald-100 flex items-center justify-between transition"
                          >
                            <h3 className="text-lg font-semibold text-slate-900 text-left">
                              {faq.q}
                            </h3>
                            <span className={`text-teal-600 font-bold text-2xl transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </button>

                          {isOpen && (
                            <div className="px-6 py-4 bg-white border-t border-gray-200">
                              <p className="text-gray-700 leading-relaxed">
                                {faq.a}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Need Help Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Still Need <span className="text-teal-600">Help?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Can't find the answer you're looking for? Our support team is here to help. Reach out to us through any of these channels.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Email Support</h3>
                <p className="text-gray-600 mb-4">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <a href="mailto:support@fanliteplay.com" className="text-teal-600 font-semibold hover:text-teal-700">
                  support@fanliteplay.com
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Live Chat</h3>
                <p className="text-gray-600 mb-4">
                  Chat with our support team in real-time for instant help.
                </p>
                <button className="text-teal-600 font-semibold hover:text-teal-700">
                  Start Chat Now
                </button>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Social Media</h3>
                <p className="text-gray-600 mb-4">
                  Follow us and message us on social media platforms.
                </p>
                <div className="flex gap-3 justify-center">
                  <a href="#" className="text-teal-600 font-semibold hover:text-teal-700">Twitter</a>
                  <span className="text-gray-400">•</span>
                  <a href="#" className="text-teal-600 font-semibold hover:text-teal-700">Facebook</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-teal-600 to-emerald-600">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Playing?
            </h2>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Now that you have all the answers, it's time to create your first fantasy cricket team!
            </p>
            <button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition">
              Get Started Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
