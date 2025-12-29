import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUs() {
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
                  About <span className="text-teal-400">Fan Lite Play</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  We're revolutionizing fantasy cricket by making it accessible, fair, and entertaining for everyone. Our mission is to celebrate the passion for cricket and connect fans through skill-based gaming.
                </p>
              </div>
              <div className="hidden md:block">
                <img src="/about-hero.jpg" alt="Our Team" className="rounded-lg shadow-2xl w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our <span className="text-teal-600">Story</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From a simple idea to a thriving fantasy cricket community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">The Beginning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Fan Lite Play was founded with a simple yet powerful vision: to democratize fantasy cricket and make it accessible to everyone in India. We recognized that millions of cricket enthusiasts wanted to engage with the sport they love in a more interactive and rewarding way, but existing platforms were often complex, expensive, or required monetary commitments.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Breakthrough</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We realized that fantasy cricket didn't need to be about money—it needed to be about passion, skill, and community. By creating a 100% free platform, we removed all barriers to entry and focused on what truly matters: celebrating cricket knowledge and connecting fans across India.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Today</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Today, Fan Lite Play serves thousands of cricket enthusiasts who compete in contests, build teams, and celebrate their cricket knowledge every day. We've built a thriving community where skill, strategy, and passion for cricket are the only requirements to succeed.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-xl border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Milestones</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="text-3xl font-bold text-teal-600 flex-shrink-0">📅</div>
                    <div>
                      <p className="font-bold text-slate-900">2023</p>
                      <p className="text-gray-600">Platform launched with core features</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl font-bold text-coral-600 flex-shrink-0">🚀</div>
                    <div>
                      <p className="font-bold text-slate-900">2024</p>
                      <p className="text-gray-600">Integrated real-time CricAPI data</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl font-bold text-emerald-600 flex-shrink-0">👥</div>
                    <div>
                      <p className="font-bold text-slate-900">2025</p>
                      <p className="text-gray-600">Growing community with thousands of active players</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl border-t-4 border-teal-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">🎯 Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To create the most accessible, fair, and engaging fantasy cricket platform in India. We empower cricket enthusiasts to showcase their knowledge, connect with fellow fans, and celebrate their passion for the sport without any financial barriers.
                </p>
              </div>

              <div className="bg-gradient-to-br from-coral-50 to-orange-50 p-8 rounded-xl border-t-4 border-coral-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">🌟 Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To become the leading fantasy cricket platform in India, recognized for innovation, fairness, and community engagement. We envision a world where every cricket fan can participate, compete, and celebrate their love for the sport.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border-t-4 border-emerald-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">💡 Our Values</h3>
                <p className="text-gray-700 leading-relaxed">
                  Integrity, Innovation, and Inclusivity. We believe in transparent operations, continuous improvement, and making fantasy cricket accessible to everyone regardless of their background or experience level.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <img src="/about-mission.jpg" alt="Our Community" className="rounded-xl shadow-2xl w-full" />
            </div>
          </div>
        </section>

        {/* Why We're Different Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Why We're <span className="text-teal-600">Different</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                What sets Fan Lite Play apart from other fantasy cricket platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">💰</div>
                  <h3 className="text-2xl font-bold text-slate-900">100% Free Forever</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  No entry fees, no hidden charges, no monetary prizes. We believe fantasy cricket should be about skill and passion, not about money. Play as much as you want without any financial commitment.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">⚡</div>
                  <h3 className="text-2xl font-bold text-slate-900">Real-Time Data</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Powered by CricAPI, our platform provides instant, accurate match data. Watch your fantasy points update in real-time as matches progress, ensuring you always have the latest information.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">🎮</div>
                  <h3 className="text-2xl font-bold text-slate-900">Skill-Based Gaming</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Fantasy cricket on our platform is a pure game of skill. Success depends on your cricket knowledge, analytical abilities, and strategic thinking—not luck or chance. This ensures fair competition for all players.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">🔒</div>
                  <h3 className="text-2xl font-bold text-slate-900">Transparent & Fair</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our scoring system is transparent and based on actual match performance. We implement strict fair play policies and maintain the highest standards of security to protect our users' data and interests.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">👥</div>
                  <h3 className="text-2xl font-bold text-slate-900">Community Focused</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We're building a vibrant community of cricket enthusiasts. Connect with fellow fans, participate in leagues, and celebrate your shared passion for cricket. Your feedback shapes our platform's future.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">📱</div>
                  <h3 className="text-2xl font-bold text-slate-900">Mobile First</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Designed for mobile from the ground up. Play seamlessly on your smartphone, tablet, or desktop. Our responsive design ensures a perfect experience on any device, anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our <span className="text-teal-600">Commitment</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                What we promise to our users and the cricket community
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-8 rounded-xl border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Fair Play & Integrity</h3>
                <p className="text-gray-700 leading-relaxed">
                  We maintain the highest standards of fair play. Our anti-fraud systems detect and prevent collusion, match-fixing, and other unfair practices. Every user is treated equally, and the best strategy always wins.
                </p>
              </div>

              <div className="bg-gradient-to-r from-coral-50 to-orange-50 p-8 rounded-xl border-l-4 border-coral-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Data Security & Privacy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your data is our responsibility. We use industry-standard encryption and security measures to protect your personal information. We never sell your data and are fully transparent about how we use your information.
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-xl border-l-4 border-emerald-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Responsible Gaming</h3>
                <p className="text-gray-700 leading-relaxed">
                  While our platform is free and skill-based, we're committed to promoting responsible gaming practices. We provide resources for users to understand the platform, set personal limits, and seek help if needed.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-coral-50 p-8 rounded-xl border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Continuous Innovation</h3>
                <p className="text-gray-700 leading-relaxed">
                  We're constantly improving our platform based on user feedback and technological advancements. New features, better performance, and enhanced user experience are always on our roadmap.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-teal-400 mb-2">10K+</div>
                <p className="text-gray-300 text-lg">Active Players</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-coral-400 mb-2">500+</div>
                <p className="text-gray-300 text-lg">Contests Created</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-emerald-400 mb-2">100%</div>
                <p className="text-gray-300 text-lg">Free to Play</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
                <p className="text-gray-300 text-lg">Available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Meet Our <span className="text-teal-600">Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Passionate cricket enthusiasts and tech experts working together to revolutionize fantasy cricket
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
                  AK
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ashwin Kumar</h3>
                <p className="text-teal-600 font-semibold mb-3">Founder & CEO</p>
                <p className="text-gray-600 leading-relaxed">
                  Cricket enthusiast with 10+ years of experience in tech startups. Passionate about making fantasy cricket accessible to everyone.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
                <div className="w-20 h-20 bg-gradient-to-br from-coral-400 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
                  RJ
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Rajesh Joshi</h3>
                <p className="text-coral-600 font-semibold mb-3">CTO & Co-Founder</p>
                <p className="text-gray-600 leading-relaxed">
                  Full-stack developer with expertise in real-time data processing and platform scalability. Ensures our platform runs smoothly 24/7.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
                  PS
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Priya Singh</h3>
                <p className="text-emerald-600 font-semibold mb-3">Head of Community</p>
                <p className="text-gray-600 leading-relaxed">
                  Community builder and cricket analyst. Dedicated to creating an inclusive and vibrant community of fantasy cricket enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-teal-600 to-emerald-600">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Community Today
            </h2>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Be part of the fantasy cricket revolution. Join thousands of cricket enthusiasts and prove your cricket knowledge.
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
