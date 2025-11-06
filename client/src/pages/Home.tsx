import TokenHeader from "@/components/TokenHeader";
import SocialLinks from "@/components/SocialLinks";
import PriceDisplay from "@/components/PriceDisplay";
import MarketStats from "@/components/MarketStats";
import TimeframeStats from "@/components/TimeframeStats";
import TradingMetrics from "@/components/TradingMetrics";
import ActionButtons from "@/components/ActionButtons";
import AuditSection from "@/components/AuditSection";
import ProfileSection from "@/components/ProfileSection";
import ExchangeWidget from "@/components/ExchangeWidget";
import DownloadButton from "@/components/DownloadButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto">
        <TokenHeader />
        <SocialLinks />
        <PriceDisplay usdPrice="0.002724" solPrice="0.00001711" />
        <MarketStats liquidity="$362K" fdv="$2.7M" marketCap="$2.7M" />
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
        <ActionButtons />
        <AuditSection />
        <ProfileSection />
        <ExchangeWidget />
        <DownloadButton />
      </div>
    </div>
  );
}
