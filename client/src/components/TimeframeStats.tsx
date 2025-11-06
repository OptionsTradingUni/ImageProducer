import { Card } from "@/components/ui/card";
import { useState } from "react";

interface TimeframeData {
  label: string;
  value: string;
  isPositive: boolean;
}

const timeframes: TimeframeData[] = [
  { label: "5M", value: "0.20%", isPositive: true },
  { label: "1H", value: "15.07%", isPositive: true },
  { label: "6H", value: "6.35%", isPositive: true },
  { label: "24H", value: "720%", isPositive: true },
];

export default function TimeframeStats() {
  const [selected, setSelected] = useState("24H");

  return (
    <div className="grid grid-cols-4 gap-2 px-6 pb-4">
      {timeframes.map((tf) => (
        <Card
          key={tf.label}
          className={`p-3 cursor-pointer transition-colors hover-elevate active-elevate-2 ${
            selected === tf.label ? "bg-muted border-muted-border" : "bg-card border-card-border"
          }`}
          onClick={() => {
            setSelected(tf.label);
            console.log(`Timeframe selected: ${tf.label}`);
          }}
          data-testid={`card-timeframe-${tf.label.toLowerCase()}`}
        >
          <div className="text-xs text-muted-foreground uppercase mb-1">{tf.label}</div>
          <div
            className={`text-lg font-bold ${
              tf.isPositive ? "text-green-500" : "text-red-500"
            }`}
            data-testid={`text-change-${tf.label.toLowerCase()}`}
          >
            {tf.value}
          </div>
        </Card>
      ))}
    </div>
  );
}
