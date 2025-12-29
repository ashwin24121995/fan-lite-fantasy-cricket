import { Link } from "wouter";
import { Trophy, Mail, Globe, Shield, Heart, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.webp" alt="Fan Lite Play" className="h-10 w-auto" />
              <span className="font-bold text-lg text-primary">Fan Lite Play</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              EntertainmentLimitless - India's favorite free-to-play fantasy cricket platform.
            </p>
            <div className="flex items-center gap-2">
              <span className="free-badge">
                <Trophy className="h-4 w-4 mr-1" />
                100% Free to Play
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/matches" className="text-muted-foreground hover:text-primary transition-colors">
                  Live Matches
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/my-teams" className="text-muted-foreground hover:text-primary transition-colors">
                  My Teams
                </Link>
              </li>
              <li>
                <Link href="/my-contests" className="text-muted-foreground hover:text-primary transition-colors">
                  My Contests
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/information" className="text-muted-foreground hover:text-primary transition-colors">
                  Fantasy Cricket
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-to-play" className="text-muted-foreground hover:text-primary transition-colors">
                  How to Play
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/fair-play" className="text-muted-foreground hover:text-primary transition-colors">
                  Fair Play Policy
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming" className="text-muted-foreground hover:text-primary transition-colors">
                  Responsible Gaming
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Globe className="h-4 w-4 flex-shrink-0" />
                <a href="https://www.fanliteplay.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  www.fanliteplay.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>support@fanliteplay.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-xs">
                  F-73, DLF Promenade Mall,<br />
                  Nelson Mandela Marg, Vasant Kunj,<br />
                  New Delhi, Delhi - 110070, India
                </span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground mt-4">
                <Shield className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-xs">This is a game of skill. Play responsibly. 18+ only.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Fan Lite Play. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-destructive" /> for Indian Cricket Fans
            </p>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-6 p-4 rounded-lg bg-muted/50 text-center">
            <p className="text-xs text-muted-foreground">
              <strong className="text-foreground">Disclaimer:</strong> Fan Lite Play is a free-to-play fantasy sports platform. 
              No real money is involved in any contests. This is purely for entertainment purposes. 
              Cricket statistics and match data are sourced from CricAPI and are updated in real-time. 
              We do not guarantee the accuracy of third-party data. This platform is intended for users 18 years and above residing in India. 
              Play responsibly and enjoy the game!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
