import { useState, useMemo } from "react";
import { useParams, Link, useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { 
  ArrowLeft, Users, Star, Crown, Shield, Check, X, 
  Loader2, AlertCircle, Coins
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Player {
  id: string;
  name: string;
  role?: string;
  team?: string;
  credits: number;
}

interface SelectedPlayer extends Player {
  isCaptain: boolean;
  isViceCaptain: boolean;
}

// Assign credits based on player role (simplified algorithm)
function assignCredits(player: any): number {
  const role = player.role?.toLowerCase() || "";
  if (role.includes("all-rounder") || role.includes("allrounder")) return 9.0;
  if (role.includes("wicket") || role.includes("wk")) return 8.5;
  if (role.includes("batsman") || role.includes("batter")) return 8.0;
  if (role.includes("bowler")) return 7.5;
  return 8.0;
}

function PlayerSelectCard({ 
  player, 
  isSelected, 
  isCaptain, 
  isViceCaptain,
  onSelect, 
  onSetCaptain, 
  onSetViceCaptain,
  disabled 
}: { 
  player: Player;
  isSelected: boolean;
  isCaptain: boolean;
  isViceCaptain: boolean;
  onSelect: () => void;
  onSetCaptain: () => void;
  onSetViceCaptain: () => void;
  disabled: boolean;
}) {
  const getRoleBadge = (role: string) => {
    const roleColors: Record<string, string> = {
      batsman: "bg-blue-500",
      batter: "bg-blue-500",
      bowler: "bg-green-500",
      "all-rounder": "bg-purple-500",
      "allrounder": "bg-purple-500",
      "wicket-keeper": "bg-orange-500",
      "wk-batsman": "bg-orange-500",
    };
    return roleColors[role?.toLowerCase()] || "bg-gray-500";
  };

  return (
    <div className={`p-3 rounded-lg border-2 transition-all ${
      isSelected 
        ? "border-primary bg-primary/5" 
        : "border-transparent bg-muted/50 hover:bg-muted"
    } ${disabled && !isSelected ? "opacity-50" : ""}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
              isSelected ? "bg-primary text-primary-foreground" : "bg-primary/10"
            }`}>
              <span className={`font-bold text-sm ${isSelected ? "" : "text-primary"}`}>
                {player.name?.substring(0, 2).toUpperCase() || "??"}
              </span>
            </div>
            {isCaptain && (
              <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center">
                <Crown className="h-3 w-3 text-white" />
              </div>
            )}
            {isViceCaptain && (
              <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center">
                <Shield className="h-3 w-3 text-white" />
              </div>
            )}
          </div>
          <div>
            <p className="font-medium text-sm">{player.name}</p>
            <div className="flex items-center gap-2">
              <Badge className={`${getRoleBadge(player.role || "")} text-white text-xs`}>
                {player.role || "Player"}
              </Badge>
              <span className="text-xs text-muted-foreground">{player.team}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-sm font-semibold">
            <Coins className="h-4 w-4 text-yellow-500" />
            {player.credits.toFixed(1)}
          </div>
          {isSelected ? (
            <div className="flex items-center gap-1">
              <Button
                size="sm"
                variant={isCaptain ? "default" : "outline"}
                className="h-7 w-7 p-0"
                onClick={(e) => { e.stopPropagation(); onSetCaptain(); }}
                title="Set as Captain (2x points)"
              >
                <Crown className="h-3 w-3" />
              </Button>
              <Button
                size="sm"
                variant={isViceCaptain ? "default" : "outline"}
                className="h-7 w-7 p-0"
                onClick={(e) => { e.stopPropagation(); onSetViceCaptain(); }}
                title="Set as Vice Captain (1.5x points)"
              >
                <Shield className="h-3 w-3" />
              </Button>
              <Button
                size="sm"
                variant="destructive"
                className="h-7 w-7 p-0"
                onClick={onSelect}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ) : (
            <Button
              size="sm"
              variant="outline"
              className="h-7"
              onClick={onSelect}
              disabled={disabled}
            >
              <Check className="h-3 w-3 mr-1" />
              Select
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CreateTeam() {
  const { matchId } = useParams<{ matchId: string }>();
  const [, setLocation] = useLocation();
  const { isAuthenticated } = useAuth();

  const [teamName, setTeamName] = useState("");
  const [selectedPlayers, setSelectedPlayers] = useState<SelectedPlayer[]>([]);
  const [captainId, setCaptainId] = useState<string | null>(null);
  const [viceCaptainId, setViceCaptainId] = useState<string | null>(null);

  const { data: match, isLoading: matchLoading } = trpc.matches.getMatch.useQuery(
    { matchId: matchId || "" },
    { enabled: !!matchId }
  );

  const { data: squad, isLoading: squadLoading } = trpc.matches.getSquad.useQuery(
    { matchId: matchId || "" },
    { enabled: !!matchId }
  );

  const createTeamMutation = trpc.teams.create.useMutation({
    onSuccess: () => {
      toast.success("Team created successfully!");
      setLocation("/my-teams");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create team");
    },
  });

  // Process squad data into flat player list
  const allPlayers = useMemo(() => {
    if (!squad) return [];
    const players: Player[] = [];
    squad.forEach((teamSquad: any) => {
      teamSquad.players?.forEach((player: any) => {
        players.push({
          id: player.id || `${teamSquad.teamName}-${player.name}`,
          name: player.name,
          role: player.role,
          team: teamSquad.teamName,
          credits: assignCredits(player),
        });
      });
    });
    return players;
  }, [squad]);

  const totalCredits = useMemo(() => {
    return selectedPlayers.reduce((sum, p) => sum + p.credits, 0);
  }, [selectedPlayers]);

  const remainingCredits = 100 - totalCredits;
  const canAddMore = selectedPlayers.length < 11;

  const handleSelectPlayer = (player: Player) => {
    const isSelected = selectedPlayers.some(p => p.id === player.id);
    
    if (isSelected) {
      setSelectedPlayers(prev => prev.filter(p => p.id !== player.id));
      if (captainId === player.id) setCaptainId(null);
      if (viceCaptainId === player.id) setViceCaptainId(null);
    } else {
      if (selectedPlayers.length >= 11) {
        toast.error("You can only select 11 players");
        return;
      }
      if (totalCredits + player.credits > 100) {
        toast.error("Not enough credits remaining");
        return;
      }
      setSelectedPlayers(prev => [...prev, { ...player, isCaptain: false, isViceCaptain: false }]);
    }
  };

  const handleSetCaptain = (playerId: string) => {
    if (viceCaptainId === playerId) {
      setViceCaptainId(null);
    }
    setCaptainId(captainId === playerId ? null : playerId);
  };

  const handleSetViceCaptain = (playerId: string) => {
    if (captainId === playerId) {
      setCaptainId(null);
    }
    setViceCaptainId(viceCaptainId === playerId ? null : playerId);
  };

  const handleSubmit = () => {
    if (!teamName.trim()) {
      toast.error("Please enter a team name");
      return;
    }
    if (selectedPlayers.length !== 11) {
      toast.error("Please select exactly 11 players");
      return;
    }
    if (!captainId) {
      toast.error("Please select a captain");
      return;
    }
    if (!viceCaptainId) {
      toast.error("Please select a vice captain");
      return;
    }

    createTeamMutation.mutate({
      matchId: matchId || "",
      name: teamName,
      captainId,
      viceCaptainId,
      players: selectedPlayers.map(p => ({
        playerId: p.id,
        playerName: p.name,
        playerRole: p.role,
        playerTeam: p.team,
        credits: p.credits.toString(),
      })),
      totalCreditsUsed: totalCredits.toString(),
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 container py-8">
          <Card className="text-center py-12">
            <CardContent>
              <AlertCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Login Required</h3>
              <p className="text-muted-foreground mb-4">
                Please login to create a fantasy team.
              </p>
              <Button asChild>
                <Link href="/login">Login to Continue</Link>
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  const isLoading = matchLoading || squadLoading;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href={`/match/${matchId}`}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Match
          </Link>
        </Button>

        {isLoading ? (
          <div className="space-y-6">
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-96 w-full rounded-lg" />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Player Selection */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Create Your Team</CardTitle>
                  <CardDescription>
                    {match?.name || "Select players for your fantasy team"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="teamName">Team Name</Label>
                    <Input
                      id="teamName"
                      placeholder="Enter your team name"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      maxLength={50}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Players List */}
              {squad && squad.length > 0 ? (
                squad.map((teamSquad: any, index: number) => (
                  <Card key={index}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">
                            {teamSquad.teamName?.substring(0, 2).toUpperCase()}
                          </span>
                        </div>
                        {teamSquad.teamName}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {teamSquad.players?.map((player: any) => {
                        const processedPlayer: Player = {
                          id: player.id || `${teamSquad.teamName}-${player.name}`,
                          name: player.name,
                          role: player.role,
                          team: teamSquad.teamName,
                          credits: assignCredits(player),
                        };
                        const isSelected = selectedPlayers.some(p => p.id === processedPlayer.id);
                        const canSelect = canAddMore && remainingCredits >= processedPlayer.credits;
                        
                        return (
                          <PlayerSelectCard
                            key={processedPlayer.id}
                            player={processedPlayer}
                            isSelected={isSelected}
                            isCaptain={captainId === processedPlayer.id}
                            isViceCaptain={viceCaptainId === processedPlayer.id}
                            onSelect={() => handleSelectPlayer(processedPlayer)}
                            onSetCaptain={() => handleSetCaptain(processedPlayer.id)}
                            onSetViceCaptain={() => handleSetViceCaptain(processedPlayer.id)}
                            disabled={!isSelected && !canSelect}
                          />
                        );
                      })}
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="text-center py-12">
                  <CardContent>
                    <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Squad Not Available</h3>
                    <p className="text-muted-foreground">
                      The squad for this match has not been announced yet.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Team Summary Sidebar */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Team Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Credits */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Credits Used</span>
                      <span className="font-semibold">{totalCredits.toFixed(1)} / 100</span>
                    </div>
                    <Progress value={totalCredits} max={100} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">
                      {remainingCredits.toFixed(1)} credits remaining
                    </p>
                  </div>

                  {/* Players Count */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Players Selected</span>
                      <span className="font-semibold">{selectedPlayers.length} / 11</span>
                    </div>
                    <Progress value={selectedPlayers.length} max={11} className="h-2" />
                  </div>

                  {/* Captain & VC */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-muted">
                      <div className="flex items-center gap-2">
                        <Crown className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">Captain (2x)</span>
                      </div>
                      <span className="text-sm font-medium">
                        {captainId 
                          ? selectedPlayers.find(p => p.id === captainId)?.name || "Selected"
                          : "Not selected"
                        }
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-muted">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">Vice Captain (1.5x)</span>
                      </div>
                      <span className="text-sm font-medium">
                        {viceCaptainId 
                          ? selectedPlayers.find(p => p.id === viceCaptainId)?.name || "Selected"
                          : "Not selected"
                        }
                      </span>
                    </div>
                  </div>

                  {/* Selected Players List */}
                  {selectedPlayers.length > 0 && (
                    <div className="space-y-1 max-h-48 overflow-y-auto">
                      <p className="text-sm font-medium mb-2">Selected Players:</p>
                      {selectedPlayers.map((player) => (
                        <div key={player.id} className="flex items-center justify-between text-sm p-1">
                          <span className="truncate">{player.name}</span>
                          <span className="text-muted-foreground">{player.credits.toFixed(1)}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handleSubmit}
                    disabled={
                      createTeamMutation.isPending ||
                      selectedPlayers.length !== 11 ||
                      !captainId ||
                      !viceCaptainId ||
                      !teamName.trim()
                    }
                  >
                    {createTeamMutation.isPending ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      <>
                        <Star className="h-4 w-4 mr-2" />
                        Create Team
                      </>
                    )}
                  </Button>

                  {/* Validation Messages */}
                  {selectedPlayers.length !== 11 && (
                    <p className="text-xs text-muted-foreground text-center">
                      Select {11 - selectedPlayers.length} more player{11 - selectedPlayers.length !== 1 ? "s" : ""}
                    </p>
                  )}
                  {selectedPlayers.length === 11 && (!captainId || !viceCaptainId) && (
                    <p className="text-xs text-muted-foreground text-center">
                      Select captain and vice captain
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
