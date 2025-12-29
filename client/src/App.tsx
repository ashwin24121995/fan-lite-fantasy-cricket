import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ScrollToTopOnNavigate, ScrollToTopButton } from "./components/ScrollToTop";

// Main Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Matches from "./pages/Matches";
import MatchDetails from "./pages/MatchDetails";
import CreateTeam from "./pages/CreateTeam";
import Dashboard from "./pages/Dashboard";
import MyTeams from "./pages/MyTeams";
import MyContests from "./pages/MyContests";
import ContestDetails from "./pages/ContestDetails";
import Leaderboard from "./pages/Leaderboard";

// Feature Pages
import LiveScores from "./pages/LiveScores";
import MatchContests from "./pages/MatchContests";

// Informational Pages
import About from "./pages/About";
import HowToPlay from "./pages/HowToPlay";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import FairPlay from "./pages/FairPlay";
import ResponsibleGaming from "./pages/ResponsibleGaming";

function Router() {
  return (
    <Switch>
      {/* Main Routes */}
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/matches" component={Matches} />
      <Route path="/match/:matchId" component={MatchDetails} />
      <Route path="/match/:matchId/create-team" component={CreateTeam} />
      <Route path="/match/:matchId/contests" component={MatchContests} />
      <Route path="/live-scores/:matchId" component={LiveScores} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/my-teams" component={MyTeams} />
      <Route path="/my-contests" component={MyContests} />
      <Route path="/contest/:contestId" component={ContestDetails} />
      <Route path="/contest/:contestId/leaderboard" component={Leaderboard} />
      <Route path="/leaderboard" component={Leaderboard} />
      
      {/* Informational Routes */}
      <Route path="/about" component={About} />
      <Route path="/how-to-play" component={HowToPlay} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/fair-play" component={FairPlay} />
      <Route path="/responsible-gaming" component={ResponsibleGaming} />
      
      {/* Fallback Routes */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" switchable>
        <TooltipProvider>
          <Toaster />
          <ScrollToTopOnNavigate />
          <ScrollToTopButton />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
