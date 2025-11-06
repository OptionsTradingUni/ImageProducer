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
      const element = document.getElementById('dashboard-content');
      if (!element) {
        throw new Error('Dashboard content not found');
      }
      const canvas = await html2canvas(element, {
        backgroundColor: '#0f0f0f',
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
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
    <Button
      variant="default"
      className="flex-1 gap-2"
      onClick={handleDownload}
      disabled={isDownloading}
      data-testid="button-download"
    >
      <Download className="w-5 h-5" />
      <span className="font-semibold">
        {isDownloading ? 'Capturing...' : 'Download'}
      </span>
    </Button>
  );
}
