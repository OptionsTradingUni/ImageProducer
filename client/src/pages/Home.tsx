import TokenHeader from "@/components/TokenHeader";
import PriceDisplay from "@/components/PriceDisplay";
import MarketStats from "@/components/MarketStats";
import TimeframeStats from "@/components/TimeframeStats";
import TradingMetrics from "@/components/TradingMetrics";
import ActionButtons from "@/components/ActionButtons";
import AuditSection from "@/components/AuditSection";
import ExchangeWidget from "@/components/ExchangeWidget";
import DownloadButton from "@/components/DownloadButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex items-start justify-center p-6">
      <div id="dashboard-content" className="w-full max-w-4xl space-y-6">
        <AuditSection />
        <TokenHeader />
        
        <div className="grid grid-cols-3 gap-4">
          <PriceDisplay usdPrice="0.002711" solPrice="0.00001711" />
          <MarketStats liquidity="$362K" fdv="$2.7M" marketCap="$2.7M" />
        </div>

        <TimeframeStats />

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

        <ExchangeWidget />

        <div className="flex gap-4">
          <ActionButtons />
          <DownloadButton />
        </div>
      </div>
    </div>
  );
}
