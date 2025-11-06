import { Card } from "@/components/ui/card";

interface PriceDisplayProps {
  usdPrice: string;
  solPrice: string;
}

export default function PriceDisplay({ usdPrice, solPrice }: PriceDisplayProps) {
  return (
    <Card className="p-6 bg-card border-card-border text-center" data-testid="card-price-usd">
      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">PRICE USD</div>
      <div className="text-3xl font-bold mb-2" data-testid="text-usd-price">${usdPrice}</div>
      <div className="text-sm text-muted-foreground">USD</div>
    </Card>
  );
}
