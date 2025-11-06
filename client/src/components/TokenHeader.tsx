import clippyImage from "@assets/IMG_4997_1762430071322.jpeg";

export default function TokenHeader() {
  return (
    <div className="relative w-full">
      <div className="flex items-start gap-4 p-6 bg-gradient-to-b from-card/50 to-transparent">
        <img 
          src={clippyImage} 
          alt="Clippy mascot" 
          className="w-24 h-24 object-contain"
          data-testid="img-clippy-mascot"
        />
        <div className="flex-1 pt-2">
          <div className="inline-block bg-yellow-100 dark:bg-yellow-200 text-foreground px-6 py-3 rounded-2xl border-2 border-foreground/20 relative">
            <span className="text-lg font-serif" data-testid="text-mascot-message">How may I help?</span>
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[16px] border-r-yellow-100 dark:border-r-yellow-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
