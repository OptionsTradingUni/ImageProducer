import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import html2canvas from "html2canvas";
import { useToast } from "@/hooks/use-toast";

export default function DownloadButton() {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const element = document.body;
      const canvas = await html2canvas(element, {
        backgroundColor: '#0f0f0f',
        scale: 2,
        logging: false,
        useCORS: true,
      });

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `clippy-pfp-screenshot-${Date.now()}.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          
          toast({
            title: "Screenshot Downloaded!",
            description: "Your token dashboard screenshot has been saved.",
          });
          console.log('Downloaded screenshot');
        }
      }, 'image/png');
    } catch (error) {
      console.error('Error capturing screenshot:', error);
      toast({
        title: "Download Failed",
        description: "Unable to capture screenshot. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="px-6 pb-6">
      <Button
        variant="default"
        className="w-full gap-2 h-14"
        onClick={handleDownload}
        disabled={isDownloading}
        data-testid="button-download"
      >
        <Download className="w-5 h-5" />
        <span className="text-lg font-semibold">
          {isDownloading ? 'Capturing Screenshot...' : 'Download Screenshot'}
        </span>
      </Button>
    </div>
  );
}
