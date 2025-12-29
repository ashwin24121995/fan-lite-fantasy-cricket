import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Information() {
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
                  Welcome to <span className="text-teal-400">Fan Lite Play</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Your ultimate destination for free fantasy cricket entertainment. Join thousands of cricket enthusiasts and test your cricket knowledge with our innovative platform.
                </p>
                <div className="flex gap-4">
                  <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition">
                    Get Started
                  </button>
                  <button className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <img src="/info-hero.jpg" alt="Cricket Analytics" className="rounded-lg shadow-2xl w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* What is Fan Lite Play Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                What is <span className="text-teal-600">Fan Lite Play?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A revolutionary free-to-play fantasy cricket platform designed for cricket enthusiasts across India
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-t-4 border-teal-500">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Game of Skill</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fantasy cricket is a game of skill where your cricket knowledge, analytical abilities, and strategic thinking determine your success. It's not about luck—it's about expertise.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-t-4 border-coral-500">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">100% Free</h3>
                <p className="text-gray-600 leading-relaxed">
                  No entry fees, no hidden charges, no monetary prizes. Pure entertainment and skill development. Play as much as you want without spending a single rupee.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-t-4 border-emerald-500">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Bragging Rights</h3>
                <p className="text-gray-600 leading-relaxed">
                  Compete with cricket fans across India, climb the leaderboards, and earn recognition. Win glory, achievements, and the respect of the fantasy cricket community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Powerful <span className="text-teal-600">Platform Features</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to create, manage, and enjoy fantasy cricket contests
              </p>
            </div>

            <div className="mb-12">
              <img src="/info-features.jpg" alt="Platform Features" className="rounded-xl shadow-2xl w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-xl border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">⚡</span> Real-Time Scoring
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Watch your fantasy points update instantly as matches progress. Our advanced scoring engine processes live cricket data from CricAPI and calculates fantasy points in real-time. See your team's performance evolve with every run, wicket, and boundary.
                </p>
              </div>

              <div className="bg-gradient-to-br from-coral-50 to-orange-50 p-8 rounded-xl border-l-4 border-coral-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">📊</span> Live Match Data
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Access comprehensive live match information including ball-by-ball commentary, player statistics, and match analytics. Stay informed with real-time updates from international and domestic cricket tournaments across the globe.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border-l-4 border-emerald-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">👥</span> Team Builder
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Intuitively build your dream team with our advanced team builder interface. Select 11 players within a 100-credit budget, designate your captain (2x points) and vice-captain (1.5x points), and optimize your lineup for maximum performance.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-coral-50 p-8 rounded-xl border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">🎯</span> Contest Management
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Create custom contests with specific rules and formats. Join public contests or create private leagues with friends. Manage multiple contests simultaneously and track your performance across different competition types.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl border-l-4 border-cyan-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">🏅</span> Dynamic Leaderboard
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Compete globally or within your league. Track your ranking in real-time with our dynamic leaderboard system. See how you stack up against thousands of other fantasy cricket enthusiasts and climb to the top.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-xl border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">📱</span> Mobile Responsive
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Play on any device—desktop, tablet, or mobile. Our fully responsive platform ensures a seamless experience whether you're at home or on the go. Manage your teams and contests from anywhere, anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                How <span className="text-teal-400">It Works</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get started in three simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-teal-500 text-white text-4xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Select a Match</h3>
                <p className="text-gray-300 leading-relaxed">
                  Browse through live and upcoming cricket matches from tournaments worldwide. Choose any match that interests you to start building your fantasy team.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-coral-500 text-white text-4xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Create Your Team</h3>
                <p className="text-gray-300 leading-relaxed">
                  Pick 11 players within your 100-credit budget. Choose your captain for 2x points and vice-captain for 1.5x points. Optimize your lineup based on player form and match conditions.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald-500 text-white text-4xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  3
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Join Contests</h3>
                <p className="text-gray-300 leading-relaxed">
                  Enter free contests and compete with other cricket fans. Track your ranking on the live leaderboard and earn bragging rights as you climb to the top.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fantasy Points System Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Fantasy Points <span className="text-teal-600">System</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Earn points based on your players' real match performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-teal-600">Batting Points</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Runs Scored</span>
                    <span className="font-bold text-teal-600">1 point per run</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Half-Century (50 runs)</span>
                    <span className="font-bold text-teal-600">+10 bonus</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Century (100 runs)</span>
                    <span className="font-bold text-teal-600">+25 bonus</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Double Century (200 runs)</span>
                    <span className="font-bold text-teal-600">+50 bonus</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Ducks (0 runs)</span>
                    <span className="font-bold text-red-600">-2 penalty</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-coral-600">Bowling Points</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Per Wicket</span>
                    <span className="font-bold text-coral-600">25 points</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">3-Wicket Haul</span>
                    <span className="font-bold text-coral-600">+10 bonus</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">5-Wicket Haul</span>
                    <span className="font-bold text-coral-600">+25 bonus</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Economy Rate Bonus</span>
                    <span className="font-bold text-coral-600">+5 to +15</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Maiden Overs</span>
                    <span className="font-bold text-coral-600">+5 points</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-emerald-600">Fielding Points</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Catches</span>
                    <span className="font-bold text-emerald-600">10 points each</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Stumpings</span>
                    <span className="font-bold text-emerald-600">15 points each</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Run-Outs</span>
                    <span className="font-bold text-emerald-600">10 points each</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Direct Run-Out</span>
                    <span className="font-bold text-emerald-600">+5 bonus</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-orange-600">Multipliers</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-orange-50 to-coral-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-semibold">Captain</span>
                      <span className="text-3xl font-bold text-orange-600">2x</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">All points earned by your captain are doubled</p>
                  </div>
                  <div className="bg-gradient-to-r from-coral-50 to-orange-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-semibold">Vice-Captain</span>
                      <span className="text-3xl font-bold text-coral-600">1.5x</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">All points earned by your vice-captain are multiplied by 1.5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Why Choose <span className="text-teal-600">Fan Lite Play?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The ultimate fantasy cricket experience for Indian cricket enthusiasts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-6 items-start">
                <div className="text-4xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">100% Free to Play</h3>
                  <p className="text-gray-600 leading-relaxed">
                    No entry fees, no hidden charges, no monetary transactions. Pure entertainment and skill development without any financial commitment.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="text-4xl flex-shrink-0">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Real-Time Data Integration</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Powered by CricAPI for accurate, instant match data. Watch your fantasy points update in real-time as matches progress with live ball-by-ball updates.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="text-4xl flex-shrink-0">🔒</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Secure & Fair Platform</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your data is protected with industry-standard security measures. Transparent scoring based on actual match performance ensures fair play for all users.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="text-4xl flex-shrink-0">🏆</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Competitive Leaderboards</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Compete with thousands of cricket fans across India. Climb global rankings or compete within private leagues with friends and colleagues.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="text-4xl flex-shrink-0">📱</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Mobile Optimized</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Play seamlessly on any device. Our responsive design ensures a perfect experience on smartphones, tablets, and desktops.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="text-4xl flex-shrink-0">🎓</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Skill Development</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Enhance your cricket knowledge and analytical skills. Learn about player statistics, match dynamics, and strategic team building.
                  </p>
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
              Join thousands of cricket enthusiasts and prove your cricket knowledge. It's completely free and takes just a few minutes to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition">
                Get Started Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-bold text-lg transition">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
