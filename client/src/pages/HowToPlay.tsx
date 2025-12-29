import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HowToPlay() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900 py-20 px-4">
          <div className="container max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              How to <span className="text-teal-400">Play</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Master the art of fantasy cricket with our comprehensive guide. Learn the rules, strategies, and tips to dominate the leaderboards.
            </p>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Quick <span className="text-teal-600">Start Guide</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started in just 3 simple steps
              </p>
            </div>

            <div className="mb-12">
              <img src="/howtoplay-steps.jpg" alt="How to Play Steps" className="rounded-xl shadow-2xl w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-xl border-l-4 border-teal-500">
                <div className="text-5xl font-bold text-teal-600 mb-4">1</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Select a Match</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Browse through live and upcoming cricket matches from around the world. You can filter by tournament, team, or date. Click on any match to view detailed information including team lineups, recent form, and head-to-head statistics.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm font-semibold text-slate-900 mb-2">💡 Pro Tip:</p>
                  <p className="text-sm text-gray-600">
                    Choose matches where you have good knowledge of both teams for better decision-making.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-coral-50 to-orange-50 p-8 rounded-xl border-l-4 border-coral-500">
                <div className="text-5xl font-bold text-coral-600 mb-4">2</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Create Your Team</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Select 11 players from the match within your 100-credit budget. Each player has a credit cost based on their performance history and current form. Choose your captain (2x points) and vice-captain (1.5x points) strategically.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm font-semibold text-slate-900 mb-2">💡 Pro Tip:</p>
                  <p className="text-sm text-gray-600">
                    Balance your team with a mix of batsmen, bowlers, all-rounders, and a wicket-keeper.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border-l-4 border-emerald-500">
                <div className="text-5xl font-bold text-emerald-600 mb-4">3</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Join Contests</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Enter free contests and compete with other cricket fans. Join public contests to compete globally or create private leagues with friends. Track your performance on the live leaderboard as the match progresses.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm font-semibold text-slate-900 mb-2">💡 Pro Tip:</p>
                  <p className="text-sm text-gray-600">
                    Join multiple contests with different teams to maximize your chances of winning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Building Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Team <span className="text-teal-600">Building</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master the art of building a winning fantasy cricket team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Budget Management</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You have a total budget of 100 credits to build your 11-player team. Each player has a credit cost based on their performance history and current form. Allocate your budget wisely to get the best players within your constraints.
                  </p>
                  <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                    <p className="text-sm font-semibold text-slate-900 mb-2">Budget Breakdown Example:</p>
                    <p className="text-sm text-gray-600">
                      Star players: 9-10.5 CR | Good performers: 8-9 CR | Emerging talents: 7-8 CR | Budget options: 6-7 CR
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Player Roles</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Build a balanced team with different player roles. Each role contributes differently to your fantasy points.
                  </p>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="text-2xl">🏏</span>
                      <div>
                        <p className="font-semibold text-slate-900">Batsmen</p>
                        <p className="text-sm text-gray-600">Score runs and earn points</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl">🎳</span>
                      <div>
                        <p className="font-semibold text-slate-900">Bowlers</p>
                        <p className="text-sm text-gray-600">Take wickets and earn points</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl">⚡</span>
                      <div>
                        <p className="font-semibold text-slate-900">All-Rounders</p>
                        <p className="text-sm text-gray-600">Bat and bowl, earn from both</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl">🧤</span>
                      <div>
                        <p className="font-semibold text-slate-900">Wicket-Keeper</p>
                        <p className="text-sm text-gray-600">Bat and field, earn from both</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img src="/howtoplay-teambuilder.jpg" alt="Team Builder Interface" className="rounded-xl shadow-2xl w-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Captain Selection</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your captain earns 2x points for all their actions. This is a crucial decision that can make or break your fantasy team. Choose a player who:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-teal-600 font-bold">✓</span>
                    <span>Is in excellent form and confidence</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-600 font-bold">✓</span>
                    <span>Has a favorable matchup against the opposition</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-600 font-bold">✓</span>
                    <span>Is likely to play the full match</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-teal-600 font-bold">✓</span>
                    <span>Has a history of big performances</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Vice-Captain Selection</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your vice-captain earns 1.5x points for all their actions. Choose a reliable performer who:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-coral-600 font-bold">✓</span>
                    <span>Is a consistent performer</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-coral-600 font-bold">✓</span>
                    <span>Complements your captain's strengths</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-coral-600 font-bold">✓</span>
                    <span>Has good form in recent matches</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-coral-600 font-bold">✓</span>
                    <span>Is likely to play the full match</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Scoring System Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Fantasy Points <span className="text-teal-600">System</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understand how fantasy points are calculated for each player action
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-xl border-t-4 border-teal-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Batting Points</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-900">Runs Scored</span>
                      <span className="text-teal-600 font-bold">1 point/run</span>
                    </div>
                    <p className="text-sm text-gray-600">Every run scored adds 1 point to your player's total</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-900">Half-Century (50 runs)</span>
                      <span className="text-teal-600 font-bold">+10 bonus</span>
                    </div>
                    <p className="text-sm text-gray-600">Milestone bonus for reaching 50 runs</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-900">Century (100 runs)</span>
                      <span className="text-teal-600 font-bold">+25 bonus</span>
                    </div>
                    <p className="text-sm text-gray-600">Major milestone bonus for reaching 100 runs</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-900">Double Century (200 runs)</span>
                      <span className="text-teal-600 font-bold">+50 bonus</span>
                    </div>
                    <p className="text-sm text-gray-600">Exceptional performance bonus</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-900">Duck (0 runs)</span>
                      <span className="text-red-600 font-bold">-2 penalty</span>
                    </div>
                    <p className="text-sm text-gray-600">Penalty for getting out without scoring</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-coral-50 to-orange-50 p-8 rounded-xl border-t-4 border-coral-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Bowling Points</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-900">Per Wicket</span>
                      <span className="text-coral-600 font-bold">25 points</span>
                    </div>
                    <p className="text-sm text-gray-600">Each wicket taken earns 25 points</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-900">3-Wicket Haul</span>
                      <span className="text-coral-600 font-bold">+10 bonus</span>
                    </div>
                    <p className="text-sm text-gray-600">Bonus for taking 3 wickets in an innings</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-900">5-Wicket Haul</span>
                      <span className="text-coral-600 font-bold">+25 bonus</span>
                    </div>
                    <p className="text-sm text-gray-600">Major bonus for taking 5 wickets in an innings</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-900">Maiden Overs</span>
                      <span className="text-coral-600 font-bold">+5 points</span>
                    </div>
                    <p className="text-sm text-gray-600">Bonus for bowling an over without conceding runs</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-900">Economy Rate Bonus</span>
                      <span className="text-coral-600 font-bold">+5 to +15</span>
                    </div>
                    <p className="text-sm text-gray-600">Bonus based on economy rate (runs conceded per over)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border-t-4 border-emerald-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Fielding Points</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-900">Catches</span>
                      <span className="text-emerald-600 font-bold">10 points</span>
                    </div>
                    <p className="text-sm text-gray-600">Each catch taken earns 10 points</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-900">Stumpings</span>
                      <span className="text-emerald-600 font-bold">15 points</span>
                    </div>
                    <p className="text-sm text-gray-600">Each stumping earns 15 points (wicket-keeper bonus)</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-900">Run-Outs</span>
                      <span className="text-emerald-600 font-bold">10 points</span>
                    </div>
                    <p className="text-sm text-gray-600">Each run-out contribution earns 10 points</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-900">Direct Run-Out</span>
                      <span className="text-emerald-600 font-bold">+5 bonus</span>
                    </div>
                    <p className="text-sm text-gray-600">Bonus for directly running out a batsman</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-coral-50 p-8 rounded-xl border-t-4 border-orange-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Multipliers</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-900">Captain</span>
                      <span className="text-orange-600 font-bold text-2xl">2x</span>
                    </div>
                    <p className="text-sm text-gray-600">All points earned by your captain are doubled</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-900">Vice-Captain</span>
                      <span className="text-orange-600 font-bold text-2xl">1.5x</span>
                    </div>
                    <p className="text-sm text-gray-600">All points earned by your vice-captain are multiplied by 1.5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-teal-600 to-emerald-600">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Team?
            </h2>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Now that you understand how to play, it's time to create your first fantasy cricket team and start competing!
            </p>
            <button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition">
              Create Your Team Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
