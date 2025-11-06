import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DownloadButton() {
  const handleDownload = () => {
    const data = {
      token: "Clippy PFP",
      address: "BDPiL9eADYz1mUPtAiWmmGEYCjJ3hQLFB51obkbdiEY1",
      priceUSD: "$0.002724",
      priceSOL: "0.00001711 SOL",
      liquidity: "$362K",
      fdv: "$2.7M",
      marketCap: "$2.7M",
      volume24h: "$2.7M",
      transactions: {
        total: "15,459",
        buys: "8,381",
        sells: "7,078"
      },
      traders: {
        makers: "3,351",
        buyers: "2,727",
        sellers: "2,272"
      },
      priceChange: {
        "5m": "0.20%",
        "1h": "15.07%",
        "6h": "6.35%",
        "24h": "720%"
      },
      timestamp: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `clippy-pfp-data-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    console.log('Downloaded token data');
  };

  return (
    <div className="px-6 pb-6">
      <Button
        variant="default"
        className="w-full gap-2 h-14"
        onClick={handleDownload}
        data-testid="button-download"
      >
        <Download className="w-5 h-5" />
        <span className="text-lg font-semibold">Download Token Data</span>
      </Button>
    </div>
  );
}
