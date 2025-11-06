import { Card } from "@/components/ui/card";

export default function TradingMetrics() {
  // Your target numbers
  const txns = "15,459";
  const buys = "9,766";
  const sells = "5,693";
  const volume = "$3.80M";
  const buyVol = "$2.78M";
  const sellVol = "$1.02M";
  const makers = "4,011";
  const buyers = "4,277";

  // Percentages for visual bars (adjusted for realism)
  const buyBarHeight = "h-full";     // 100% (strong buy)
  const sellBarHeight = "h-3/5";     // ~60% (sells lower)
  const buyVolHeight = "h-full";     // 100%
  const sellVolHeight = "h-3/4";     // 75%

  return (
    <Card className="p-4 bg-card border-card-border" data-testid="card-trading-metrics">
      <div className="grid grid-cols-7 gap-3 items-end">
        {/* TXNS */}
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">TXNS</div>
          <div className="text-lg font-bold" data-testid="text-txns">{txns}</div>
          <div className="text-lg font-bold text-muted-foreground" data-testid="text-txns-secondary">{volume}</div>
        </div>

        {/* BUYS */}
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">BUYS</div>
          <div className="text-lg font-bold" data-testid="text-buys">{buys}</div>
          <div className="mt-1 flex gap-0.5 h-8 items-end">
            <div className="w-2 bg-muted rounded-sm h-1/4"></div>
            <div className="w-2 bg-muted rounded-sm h-2/4"></div>
            <div className="w-2 bg-muted rounded-sm h-3/4"></div>
            <div className={`w-2 bg-green-500 rounded-sm ${buyBarHeight}`}></div>
          </div>
        </div>

        {/* SELLS */}
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">SELLS</div>
          <div className="text-lg font-bold" data-testid="text-sells">{sells}</div>
          <div className="mt-1 flex gap-0.5 h-8 items-end">
            <div className="w-2 bg-muted rounded-sm h-1/5"></div>
            <div className="w-2 bg-muted rounded-sm h-1/3"></div>
            <div className="w-2 bg-muted rounded-sm h-1/2"></div>
            <div className={`w-2 bg-red-500 rounded-sm ${sellBarHeight}`}></div>
          </div>
        </div>

        {/* BUY VOL */}
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">BUY VOL</div>
          <div className="text-lg font-bold" data-testid="text-buy-vol">{buyVol}</div>
          <div className="text-lg font-bold text-green-500">↑</div>
          <div className="text-sm text-green-500">✓</div>
        </div>

        {/* SELL VOL */}
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">SELL VOL</div>
          <div className="text-lg font-bold" data-testid="text-sell-vol">{sellVol}</div>
          <div className="mt-1 flex gap-0.5 h-8 items-end">
            <div className="w-2 bg-muted rounded-sm h-1/5"></div>
            <div className="w-2 bg-muted rounded-sm h-1/3"></div>
            <div className="w-2 bg-muted rounded-sm h-1/2"></div>
            <div className={`w-2 bg-red-500 rounded-sm ${sellVolHeight}`}></div>
          </div>
        </div>

        {/* MAKERS */}
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">MAKERS</div>
          <div className="text-lg font-bold" data-testid="text-makers">{makers}</div>
          <div className="text-lg font-bold text-muted-foreground">4,011</div>
        </div>

        {/* BUYERS */}
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">BUYERS</div>
          <div className="text-lg font-bold" data-testid="text-buyers">{buyers}</div>
          <div className="mt-1 flex gap-0.5 h-8 items-end">
            <div className="w-2 bg-muted rounded-sm h-1/3"></div>
            <div className="w-2 bg-muted rounded-sm h-2/4"></div>
            <div className="w-2 bg-muted rounded-sm h-3/4"></div>
            <div className={`w-2 bg-green-500 rounded-sm ${buyBarHeight}`}></div>
          </div>
        </div>
      </div>
    </Card>
  );
}
