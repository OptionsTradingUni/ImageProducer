import { Star, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ActionButtons() {
  return (
    <div className="grid grid-cols-2 gap-3 px-6 pb-6">
      <Button 
        variant="secondary" 
        className="gap-2 h-14"
        onClick={() => console.log('Watchlist clicked')}
        data-testid="button-watchlist"
      >
        <Star className="w-5 h-5" />
        <span className="text-lg font-semibold">Watchlist</span>
      </Button>
      <Button 
        variant="secondary" 
        className="gap-2 h-14"
        onClick={() => console.log('Alerts clicked')}
        data-testid="button-alerts"
      >
        <Bell className="w-5 h-5" />
        <span className="text-lg font-semibold">Alerts</span>
      </Button>
    </div>
  );
}
