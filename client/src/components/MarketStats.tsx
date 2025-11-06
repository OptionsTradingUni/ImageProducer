import { Card } from "@/components/ui/card";
import { Lock } from "lucide-react";

interface MarketStatsProps {
  liquidity: string;
  fdv: string;
  marketCap: string;
}

export default function MarketStats({ liquidity, fdv, marketCap }: MarketStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-3 px-6 pb-4">
      <Card className="p-4 bg-card border-card-border" data-testid="card-liquidity">
        <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">LIQUIDITY</div>
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold" data-testid="text-liquidity">{liquidity}</div>
          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
            <Lock className="w-3 h-3 text-white" />
          </div>
        </div>
      </Card>
      <Card className="p-4 bg-card border-card-border" data-testid="card-fdv">
        <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">FDV</div>
        <div className="text-xl font-bold" data-testid="text-fdv">{fdv}</div>
      </Card>
      <Card className="p-4 bg-card border-card-border" data-testid="card-market-cap">
        <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">MARKET CAP</div>
        <div className="text-xl font-bold" data-testid="text-market-cap">{marketCap}</div>
      </Card>
    </div>
  );
}
