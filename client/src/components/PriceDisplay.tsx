import { Card } from "@/components/ui/card";

interface PriceDisplayProps {
  usdPrice: string;
  solPrice: string;
}

export default function PriceDisplay({ usdPrice, solPrice }: PriceDisplayProps) {
  return (
    <div className="grid grid-cols-2 gap-3 px-6 pb-4">
      <Card className="p-4 bg-card border-card-border" data-testid="card-price-usd">
        <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">PRICE USD</div>
        <div className="text-2xl font-bold" data-testid="text-usd-price">${usdPrice}</div>
      </Card>
      <Card className="p-4 bg-card border-card-border" data-testid="card-price-sol">
        <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">PRICE</div>
        <div className="text-2xl font-bold" data-testid="text-sol-price">{solPrice} SOL</div>
      </Card>
    </div>
  );
}
