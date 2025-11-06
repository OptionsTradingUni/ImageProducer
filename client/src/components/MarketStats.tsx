import { Card } from "@/components/ui/card";
import { Lock } from "lucide-react";

interface MarketStatsProps {
  liquidity: string;
  fdv: string;
  marketCap: string;
}

export default function MarketStats({ liquidity, fdv, marketCap }: MarketStatsProps) {
  return (
    <>
      <Card className="p-6 bg-card border-card-border text-center" data-testid="card-liquidity">
        <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">LIQUIDITY</div>
        <div className="flex items-center gap-2 justify-center">
          <div className="text-3xl font-bold" data-testid="text-liquidity">{liquidity}</div>
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
            <Lock className="w-3 h-3 text-white" />
          </div>
        </div>
      </Card>
      <Card className="p-6 bg-card border-card-border text-center" data-testid="card-market-cap">
        <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">MARKET CAP</div>
        <div className="flex items-center gap-2 justify-center">
          <div className="text-3xl font-bold" data-testid="text-market-cap">{marketCap}</div>
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
            <Lock className="w-3 h-3 text-white" />
          </div>
        </div>
      </Card>
    </>
  );
}
