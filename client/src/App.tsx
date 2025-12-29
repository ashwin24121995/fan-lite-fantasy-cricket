import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/matches" component={Matches} />
      <Route path="/match/:matchId" component={MatchDetails} />
      <Route path="/match/:matchId/create-team" component={CreateTeam} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/my-teams" component={MyTeams} />
      <Route path="/my-contests" component={MyContests} />
      <Route path="/contest/:contestId" component={ContestDetails} />
      <Route path="/contest/:contestId/leaderboard" component={Leaderboard} />
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
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
