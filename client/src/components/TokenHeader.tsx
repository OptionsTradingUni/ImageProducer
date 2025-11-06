import clippyImage from "@assets/IMG_5016_1762430441740.jpeg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TokenHeader() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Avatar className="w-32 h-32" data-testid="img-token-avatar">
        <AvatarImage src={clippyImage} alt="Clippy PFF Cult" />
        <AvatarFallback>CP</AvatarFallback>
      </Avatar>
      <h1 className="text-3xl font-bold" data-testid="text-token-title">Clippy PFF Cult</h1>
    </div>
  );
}
