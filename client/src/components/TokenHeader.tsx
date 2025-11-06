import clippyImage from "@assets/IMG_5016_1762430441740.jpeg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle2 } from "lucide-react";

export default function TokenHeader() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Avatar className="w-32 h-32 rounded-2xl" data-testid="img-token-avatar">
        <AvatarImage src={clippyImage} alt="Clippy PFF" />
        <AvatarFallback>CP</AvatarFallback>
      </Avatar>
      <div className="flex items-center gap-2">
        <h1 className="text-3xl font-bold" data-testid="text-token-title">Clippy PFF</h1>
        <CheckCircle2 className="w-6 h-6 text-primary" data-testid="icon-verified" />
      </div>
    </div>
  );
}
