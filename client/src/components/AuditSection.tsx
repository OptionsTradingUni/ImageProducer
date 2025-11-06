import { Card } from "@/components/ui/card";
import { CheckCircle2, ChevronDown } from "lucide-react";

interface EmojiStat {
  emoji: string;
  value: string;
}

const emojiStats: EmojiStat[] = [
  { emoji: "🚀", value: "1,407" },
  { emoji: "🔥", value: "64" },
  { emoji: "💩", value: "17" },
  { emoji: "🚩", value: "124" },
];

export default function AuditSection() {
  return (
    <div className="px-6 pb-6">
      <Card className="p-4 bg-card border-card-border mb-4" data-testid="card-audit-header">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">Audit</span>
          <div className="flex items-center gap-2">
            <span className="text-sm">No issues</span>
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-4 gap-3">
        {emojiStats.map((stat, index) => (
          <Card
            key={index}
            className="p-4 bg-card border-card-border flex flex-col items-center gap-2 hover-elevate active-elevate-2 cursor-pointer"
            onClick={() => console.log(`Emoji stat clicked: ${stat.emoji}`)}
            data-testid={`card-emoji-${index}`}
          >
            <div className="text-3xl" data-testid={`emoji-${index}`}>{stat.emoji}</div>
            <div className="text-lg font-bold" data-testid={`value-${index}`}>{stat.value}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
