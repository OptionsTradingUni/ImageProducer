import TokenHeader from "@/components/TokenHeader";
import PriceDisplay from "@/components/PriceDisplay";
import MarketStats from "@/components/MarketStats";
import TimeframeStats from "@/components/TimeframeStats";
import TradingMetrics from "@/components/TradingMetrics";
import ActionButtons from "@/components/ActionButtons";
import AuditSection from "@/components/AuditSection";
import ExchangeWidget from "@/components/ExchangeWidget";
import DownloadButton from "@/components/DownloadButton";
import ProfileSection from "@/components/ProfileSection";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-start p-6 gap-6">
      <div id="dashboard-content" className="w-full max-w-7xl flex gap-6">
        <Card className="w-80 bg-card border-card-border shrink-0" data-testid="card-sidebar">
          <ProfileSection />
        </Card>

        <div className="flex-1 space-y-6">
          <AuditSection />
          <TokenHeader />
          
          <div className="grid grid-cols-3 gap-4">
            <PriceDisplay usdPrice="0.002711" solPrice="0.00001711" />
            <MarketStats liquidity="$1.42M" fdv="$7.9M" marketCap="$7.9M" />
          </div>

          <TimeframeStats />

          <TradingMetrics
            txns="15,459"
            buys="8,381"
            sells="7,078"
            volume="$3.0M"
            buyVol="$1.8M"
            sellVol="$1.2M"
            makers="3,351"
            buyers="2,727"
            sellers="2,272"
          />

          <ExchangeWidget />

          <div className="flex gap-4">
            <ActionButtons />
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-7xl">
        <DownloadButton />
      </div>
    </div>
  );
}
