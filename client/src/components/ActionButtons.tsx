import { Bell, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ActionButtons() {
  return (
    <>
      <Button 
        variant="secondary" 
        className="flex-1 gap-2"
        onClick={() => console.log('Alerts clicked')}
        data-testid="button-alerts"
      >
        <Bell className="w-5 h-5" />
        <span className="font-semibold">Alerts</span>
      </Button>
      <Button 
        variant="secondary" 
        className="flex-1 gap-2"
        onClick={() => console.log('Trade CLIPPY/SOL clicked')}
        data-testid="button-trade"
      >
        <RefreshCw className="w-5 h-5" />
        <span className="font-semibold">Trade CLIPPY/SOL</span>
      </Button>
    </>
  );
}
