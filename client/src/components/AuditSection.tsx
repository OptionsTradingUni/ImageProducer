import { Card } from "@/components/ui/card";
import { CheckCircle2, ChevronDown } from "lucide-react";

interface EmojiStat {
  emoji: string;
  value: string;
}

const emojiStats: EmojiStat[] = [
  { emoji: "🚀", value: "1,407" },
  { emoji: "🔥", value: "842" },
  { emoji: "💩", value: "4" },
  { emoji: "👍", value: "17" },
  { emoji: "🚩", value: "124" },
];

export default function AuditSection() {
  return (
    <Card className="p-4 bg-card border-card-border" data-testid="card-audit-header">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold">Audit</span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">No issues</span>
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          {emojiStats.map((stat, index) => (
            <Card
              key={index}
              className="px-4 py-2 bg-muted/50 border-card-border flex items-center gap-2 hover-elevate active-elevate-2 cursor-pointer min-w-[80px] justify-center"
              onClick={() => console.log(`Emoji stat clicked: ${stat.emoji}`)}
              data-testid={`card-emoji-${index}`}
            >
              <div className="text-xl" data-testid={`emoji-${index}`}>{stat.emoji}</div>
              <div className="text-sm font-bold" data-testid={`value-${index}`}>{stat.value}</div>
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
}
