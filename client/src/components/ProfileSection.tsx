import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Twitter, ChevronDown, ChevronUp, Users, RotateCcw } from "lucide-react";
import clippyProfile from "@assets/IMG_5016_1762430441740.jpeg";

export default function ProfileSection() {
  return (
    <div className="px-6 pb-6">
      <Card className="p-6 bg-card border-card-border" data-testid="card-profile">
        <div className="flex flex-col items-center">
          <img
            src={clippyProfile}
            alt="Clippy PFP"
            className="w-32 h-32 rounded-2xl mb-4 object-cover"
            data-testid="img-token-profile"
          />
          <h2 className="text-2xl font-bold mb-4" data-testid="text-token-name">Clippy PFP</h2>

          <div className="w-full space-y-2 mb-4">
            <Button
              variant="secondary"
              className="w-full justify-between h-12"
              onClick={() => console.log('Community Takeover toggled')}
              data-testid="button-community-takeover"
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Community Takeover</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </Button>

            <Button
              variant="secondary"
              className="w-full justify-between h-12"
              onClick={() => console.log('Original Profile toggled')}
              data-testid="button-original-profile"
            >
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                <span>Original Profile</span>
              </div>
              <ChevronUp className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex gap-2 w-full mb-4">
            <Button
              variant="secondary"
              className="flex-1 gap-2 h-12"
              onClick={() => console.log('Website clicked')}
              data-testid="button-profile-website"
            >
              <Globe className="w-4 h-4" />
              <span>Website</span>
            </Button>
            <Button
              variant="secondary"
              className="flex-1 gap-2 h-12"
              onClick={() => console.log('Twitter clicked')}
              data-testid="button-profile-twitter"
            >
              <Twitter className="w-4 h-4" />
              <span>Twitter</span>
            </Button>
          </div>

          <div className="w-full text-center">
            <div className="text-sm text-muted-foreground mb-1">Clippy PFP</div>
            <div className="text-xs text-muted-foreground font-mono break-all" data-testid="text-token-address">
              BDPiL9eADYz1mUPtAiWmmGEYCjJ3hQLFB51obkbdiEY1
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
