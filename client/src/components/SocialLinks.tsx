import { Globe, Twitter, ChevronDown, CheckCircle2, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-2 px-6 pb-4">
      {/* Website — Verified */}
      <Button
        variant="secondary"
        className="flex-1 h-12 gap-2 justify-between"
        onClick={() => console.log("Website clicked")}
        data-testid="button-website"
      >
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span className="font-semibold">Website</span>
        </div>
        <CheckCircle2 className="w-4 h-4 text-blue-500" />
      </Button>

      {/* Twitter — Verified + LIVE */}
      <Button
        variant="secondary"
        className="flex-1 h-12 gap-2 justify-between"
        onClick={() => console.log("Twitter clicked")}
        data-testid="button-twitter"
      >
        <div className="flex items-center gap-2">
          <Twitter className="w-4 h-4" />
          <span className="font-semibold">Twitter</span>
        </div>
        <div className="flex items-center gap-1">
          <CheckCircle2 className="w-4 h-4 text-blue-500" />
          <Badge
            variant="destructive"
            className="h-5 px-1.5 text-[10px] font-bold flex items-center gap-0.5"
          >
            <Radio className="w-2.5 h-2.5 fill-current" />
            LIVE
          </Badge>
        </div>
      </Button>

      {/* More Options */}
      <Button
        variant="secondary"
        size="icon"
        className="h-12 w-12"
        onClick={() => console.log("More options clicked")}
        data-testid="button-more"
      >
        <ChevronDown className="w-4 h-4" />
      </Button>
    </div>
  );
}
