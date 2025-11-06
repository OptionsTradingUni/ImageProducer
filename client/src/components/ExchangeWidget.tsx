import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowDownUp, Check } from "lucide-react";
import { useState } from "react";

export default function ExchangeWidget() {
  const [fromAmount, setFromAmount] = useState("1");
  const [toAmount, setToAmount] = useState("0.002499");
  const [toCurrency, setToCurrency] = useState<"USD" | "SOL">("USD");

  return (
    <Card className="mx-6 mb-6 p-6 bg-card border-card-border" data-testid="card-exchange">
      <div className="space-y-4">
        <div className="relative">
          <Input
            type="number"
            value={fromAmount}
            onChange={(e) => {
              setFromAmount(e.target.value);
              const numValue = parseFloat(e.target.value) || 0;
              setToAmount((numValue * 0.002499).toFixed(6));
            }}
            className="h-14 text-right pr-20 text-lg"
            data-testid="input-from-amount"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted-foreground">
            CLIPPY
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => console.log('Swap direction clicked')}
            data-testid="button-swap-direction"
          >
            <ArrowDownUp className="w-5 h-5" />
          </Button>
        </div>

        <div className="relative">
          <Input
            type="number"
            value={toAmount}
            onChange={(e) => {
              setToAmount(e.target.value);
              const numValue = parseFloat(e.target.value) || 0;
              setFromAmount((numValue / 0.002499).toFixed(6));
            }}
            className="h-14 text-right pr-32 text-lg"
            data-testid="input-to-amount"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <Button
              variant={toCurrency === "USD" ? "default" : "ghost"}
              size="sm"
              className="h-8"
              onClick={() => setToCurrency("USD")}
              data-testid="button-currency-usd"
            >
              {toCurrency === "USD" && <Check className="w-3 h-3 mr-1" />}
              USD
            </Button>
            <Button
              variant={toCurrency === "SOL" ? "default" : "ghost"}
              size="sm"
              className="h-8"
              onClick={() => setToCurrency("SOL")}
              data-testid="button-currency-sol"
            >
              {toCurrency === "SOL" && <Check className="w-3 h-3 mr-1" />}
              SOL
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
