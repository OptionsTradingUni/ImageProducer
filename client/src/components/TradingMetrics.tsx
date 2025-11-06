import { Card } from "@/components/ui/card";

interface TradingMetricsProps {
  txns: string;
  buys: string;
  sells: string;
  volume: string;
  buyVol: string;
  sellVol: string;
  makers: string;
  buyers: string;
  sellers: string;
}

export default function TradingMetrics({
  txns, buys, sells, volume, buyVol, sellVol, makers, buyers, sellers
}: TradingMetricsProps) {
  const buyPercentage = 54;
  const sellPercentage = 46;
  const buyersPercentage = 55;
  const sellersPercentage = 45;
  const buyVolPercentage = 60;
  const sellVolPercentage = 40;

  return (
    <Card className="p-4 bg-card border-card-border" data-testid="card-trading-metrics">
      <div className="grid grid-cols-7 gap-3 items-end">
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">TXNS</div>
          <div className="text-lg font-bold" data-testid="text-txns">{txns}</div>
          <div className="text-lg font-bold text-muted-foreground" data-testid="text-txns-secondary">$1.3M</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">BUYS</div>
          <div className="text-lg font-bold" data-testid="text-buys">{buys}</div>
          <div className="mt-1 flex gap-0.5 h-8 items-end">
            <div className="w-2 bg-muted rounded-sm h-1/4"></div>
            <div className="w-2 bg-muted rounded-sm h-2/4"></div>
            <div className="w-2 bg-muted rounded-sm h-1/3"></div>
            <div className="w-2 bg-green-500 rounded-sm h-full"></div>
          </div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">SELLS</div>
          <div className="text-lg font-bold" data-testid="text-sells">{sells}</div>
          <div className="mt-1 flex gap-0.5 h-8 items-end">
            <div className="w-2 bg-muted rounded-sm h-1/3"></div>
            <div className="w-2 bg-muted rounded-sm h-2/4"></div>
            <div className="w-2 bg-muted rounded-sm h-1/4"></div>
            <div className="w-2 bg-green-500 rounded-sm h-full"></div>
          </div>
        </div>
        
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">BUY VOL</div>
          <div className="text-lg font-bold" data-testid="text-buy-vol">{buyVol}</div>
          <div className="text-lg font-bold" data-testid="text-buy-vol-secondary">$1.4M</div>
          <div className="text-sm text-green-500">✓</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">SELL VOL</div>
          <div className="text-lg font-bold" data-testid="text-sell-vol">{sellVol}</div>
          <div className="mt-1 flex gap-0.5 h-8 items-end">
            <div className="w-2 bg-muted rounded-sm h-1/4"></div>
            <div className="w-2 bg-muted rounded-sm h-2/4"></div>
            <div className="w-2 bg-muted rounded-sm h-1/3"></div>
            <div className="w-2 bg-green-500 rounded-sm h-3/4"></div>
          </div>
        </div>
        
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">MAKERS</div>
          <div className="text-lg font-bold" data-testid="text-makers">{makers}</div>
          <div className="text-lg font-bold text-muted-foreground" data-testid="text-makers-secondary">2,727</div>
          <div className="text-lg font-bold text-muted-foreground" data-testid="text-makers-tertiary">2,272</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">BUYERS</div>
          <div className="text-lg font-bold" data-testid="text-buyers">{buyers}</div>
          <div className="mt-1 flex gap-0.5 h-8 items-end">
            <div className="w-2 bg-muted rounded-sm h-2/4"></div>
            <div className="w-2 bg-muted rounded-sm h-1/3"></div>
            <div className="w-2 bg-muted rounded-sm h-1/4"></div>
            <div className="w-2 bg-green-500 rounded-sm h-full"></div>
          </div>
        </div>
      </div>
    </Card>
  );
}
