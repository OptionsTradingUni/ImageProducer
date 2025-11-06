import TokenHeader from "@/components/TokenHeader";
import PriceDisplay from "@/components/PriceDisplay";
import MarketStats from "@/components/MarketStats";
import TimeframeStats from "@/components/TimeframeStats";
import TradingMetrics from "@/components/TradingMetrics";
import ActionButtons from "@/components/ActionButtons";
import AuditSection from "@/components/AuditSection";
import ProfileSection from "@/components/ProfileSection";
import ExchangeWidget from "@/components/ExchangeWidget";
import DownloadButton from "@/components/DownloadButton";
import { MessageSquare, X, Home as HomeIcon, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar */}
      <aside className="w-80 border-r border-border flex flex-col">
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="w-12 h-12" data-testid="img-avatar">
              <AvatarImage src="/attached_assets/IMG_5016_1762430441740.jpeg" alt="Clippy PFF Cult" />
              <AvatarFallback>CP</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold text-lg" data-testid="text-sidebar-title">Audit</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">No issues</span>
                <span className="text-green-500">✓</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-2">
          <div className="bg-accent/30 rounded-lg p-3 flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/attached_assets/IMG_5016_1762430441740.jpeg" alt="Bot" />
              <AvatarFallback>CP</AvatarFallback>
            </Avatar>
            <Badge variant="secondary" className="rounded-full px-4">
              How may I help?
            </Badge>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 rounded-lg hover-elevate">
              <span className="text-sm" data-testid="text-nav-website">Website</span>
              <Button size="icon" variant="ghost" className="h-6 w-6" data-testid="button-close-website">
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg hover-elevate">
              <span className="text-sm" data-testid="text-nav-website-2">Website</span>
              <Button size="icon" variant="ghost" className="h-6 w-6" data-testid="button-close-website-2">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="pt-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start gap-3" data-testid="button-community-original">
              <span className="text-sm">Community 🔄 Original Profile</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3" data-testid="button-community-takeover">
              <span className="text-sm">Community Takeover</span>
              <span className="ml-auto text-xs">▼</span>
            </Button>
          </div>
        </div>

        <div className="mt-auto p-4 border-t border-border">
          <div className="space-y-2">
            <div className="text-sm font-medium" data-testid="text-token-name">Clippy PFF Cult</div>
            <div className="text-xs text-muted-foreground font-mono break-all" data-testid="text-token-address">
              BDPiL9yADAn1YTzAiwsiwwmGEY651obbbdiBY1
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div id="dashboard-content" className="max-w-5xl mx-auto p-6 space-y-6">
          {/* Top Stats Bar */}
          <AuditSection />

          {/* Token Header Section */}
          <div className="text-center space-y-4">
            <TokenHeader />
          </div>

          {/* Price and Market Stats */}
          <div className="grid grid-cols-3 gap-4">
            <PriceDisplay usdPrice="0.002711" solPrice="0.00001711" />
            <MarketStats liquidity="$362K" fdv="$2.7M" marketCap="$2.7M" />
          </div>

          {/* Timeframe Stats */}
          <TimeframeStats />

          {/* Trading Metrics Grid */}
          <TradingMetrics
            txns="15,459"
            buys="8,381"
            sells="7,078"
            volume="$2.7M"
            buyVol="$1.4M"
            sellVol="$1.3M"
            makers="3,351"
            buyers="2,727"
            sellers="2,272"
          />

          {/* Exchange Widget */}
          <ExchangeWidget />

          {/* Action Buttons */}
          <div className="flex gap-4">
            <ActionButtons />
            <DownloadButton />
          </div>
        </div>
      </main>
    </div>
  );
}
