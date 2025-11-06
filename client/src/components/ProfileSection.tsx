import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { X, ChevronDown, RotateCcw } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import clippyProfile from "@assets/IMG_5016_1762430441740.jpeg";

export default function ProfileSection() {
  const [tokenAddress, setTokenAddress] = useState("BDPiL9yADAt1YzAiwsiwwmGEY651obbbdiBY1");

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-start gap-3">
        <Avatar className="w-16 h-16 rounded-xl" data-testid="img-sidebar-avatar">
          <AvatarImage src={clippyProfile} alt="Clippy" />
          <AvatarFallback>CP</AvatarFallback>
        </Avatar>
      </div>

      <div className="space-y-2">
        <Badge
          variant="secondary"
          className="w-full h-10 justify-between px-4 rounded-lg hover-elevate active-elevate-2 cursor-pointer"
          data-testid="badge-website"
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm font-medium">Website</span>
          </div>
          <X className="w-4 h-4" />
        </Badge>
        <Badge
          variant="secondary"
          className="w-full h-10 justify-between px-4 rounded-lg hover-elevate active-elevate-2 cursor-pointer"
          data-testid="badge-twitter"
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span className="text-sm font-medium">Twitter</span>
          </div>
          <X className="w-4 h-4" />
        </Badge>
      </div>

      <Button
        variant="secondary"
        className="w-full justify-between h-10 px-4 rounded-lg"
        onClick={() => console.log('Community toggle clicked')}
        data-testid="button-community-toggle"
      >
        <div className="flex items-center gap-2">
          <span className="text-sm">Community</span>
          <RotateCcw className="w-3 h-3" />
          <span className="text-sm">Original Profile</span>
        </div>
      </Button>

      <Button
        variant="secondary"
        className="w-full justify-between h-10 px-4 rounded-lg"
        onClick={() => console.log('Community Takeover clicked')}
        data-testid="button-community-takeover"
      >
        <span className="text-sm">Community Control</span>
        <ChevronDown className="w-4 h-4" />
      </Button>

      <div className="pt-4">
        <div className="text-lg font-bold mb-2" data-testid="text-sidebar-token-name">Clippy PFF</div>
        <Input
          type="text"
          value={tokenAddress}
          onChange={(e) => setTokenAddress(e.target.value)}
          className="text-xs font-mono bg-muted border-muted-foreground/20 h-auto py-2"
          placeholder="Enter token address"
          data-testid="input-token-address"
        />
      </div>
    </div>
  );
}
