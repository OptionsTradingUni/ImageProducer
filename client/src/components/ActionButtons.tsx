import { Star, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ActionButtons() {
  return (
    <Button 
      variant="secondary" 
      className="flex-1 gap-2"
      onClick={() => console.log('Trade CLIPPY/SOL clicked')}
      data-testid="button-trade"
    >
      <ArrowDownUp className="w-5 h-5" />
      <span className="font-semibold">Trade CLIPPY/SOL</span>
    </Button>
  );
}

function ArrowDownUp({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
    </svg>
  );
}
