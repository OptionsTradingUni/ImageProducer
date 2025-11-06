import { Globe, Twitter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-2 px-6 pb-4">
      <Button 
        variant="secondary" 
        className="flex-1 gap-2 h-12"
        onClick={() => console.log('Website clicked')}
        data-testid="button-website"
      >
        <Globe className="w-4 h-4" />
        <span className="font-semibold">Website</span>
      </Button>
      <Button 
        variant="secondary" 
        className="flex-1 gap-2 h-12"
        onClick={() => console.log('Twitter clicked')}
        data-testid="button-twitter"
      >
        <Twitter className="w-4 h-4" />
        <span className="font-semibold">Twitter</span>
      </Button>
      <Button 
        variant="secondary" 
        size="icon"
        className="h-12 w-12"
        onClick={() => console.log('More options clicked')}
        data-testid="button-more"
      >
        <ChevronDown className="w-4 h-4" />
      </Button>
    </div>
  );
}
