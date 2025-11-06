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
  const buyVolPercentage = 52;
  const sellVolPercentage = 48;

  return (
    <Card className="mx-6 mb-4 p-6 bg-card border-card-border" data-testid="card-trading-metrics">
      <div className="grid grid-cols-3 gap-6">
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">TXNS</div>
          <div className="text-2xl font-bold" data-testid="text-txns">{txns}</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">BUYS</div>
          <div className="text-2xl font-bold text-green-500" data-testid="text-buys">{buys}</div>
          <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${buyPercentage}%` }}
            />
          </div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">SELLS</div>
          <div className="text-2xl font-bold text-red-500" data-testid="text-sells">{sells}</div>
          <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden flex justify-end">
            <div 
              className="h-full bg-red-500 rounded-full"
              style={{ width: `${sellPercentage}%` }}
            />
          </div>
        </div>

        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">VOLUME</div>
          <div className="text-2xl font-bold" data-testid="text-volume">{volume}</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">BUY VOL</div>
          <div className="text-2xl font-bold text-green-500" data-testid="text-buy-vol">{buyVol}</div>
          <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${buyVolPercentage}%` }}
            />
          </div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">SELL VOL</div>
          <div className="text-2xl font-bold text-red-500" data-testid="text-sell-vol">{sellVol}</div>
          <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden flex justify-end">
            <div 
              className="h-full bg-red-500 rounded-full"
              style={{ width: `${sellVolPercentage}%` }}
            />
          </div>
        </div>

        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">MAKERS</div>
          <div className="text-2xl font-bold" data-testid="text-makers">{makers}</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">BUYERS</div>
          <div className="text-2xl font-bold text-green-500" data-testid="text-buyers">{buyers}</div>
          <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${buyersPercentage}%` }}
            />
          </div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">SELLERS</div>
          <div className="text-2xl font-bold text-red-500" data-testid="text-sellers">{sellers}</div>
          <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden flex justify-end">
            <div 
              className="h-full bg-red-500 rounded-full"
              style={{ width: `${sellersPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
