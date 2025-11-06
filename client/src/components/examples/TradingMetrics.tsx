import TradingMetrics from '../TradingMetrics';

export default function TradingMetricsExample() {
  return (
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
  );
}
