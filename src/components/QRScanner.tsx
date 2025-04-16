
import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface QRScannerProps {
  onResult: (result: string) => void;
}

const QRScanner = ({ onResult }: QRScannerProps) => {
  const [isScanning, setIsScanning] = useState(false);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const scannerContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const startScanner = () => {
    if (scannerContainerRef.current) {
      // Clear any previous content
      scannerContainerRef.current.innerHTML = '';
      
      const config = {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        formatsToSupport: [0], // QR code format
      };
      
      scannerRef.current = new Html5QrcodeScanner(
        "qr-reader", 
        config, 
        /* verbose= */ false
      );
      
      scannerRef.current.render(
        (decodedText) => {
          // Success callback
          onResult(decodedText);
          
          toast({
            title: "QR Code Scanned",
            description: "Successfully scanned QR code",
          });
          
          // Stop the scanner after successful scanning
          if (scannerRef.current) {
            scannerRef.current.clear();
          }
          setIsScanning(false);
        },
        (errorMessage) => {
          // Error callback
          console.error(errorMessage);
        }
      );
      
      setIsScanning(true);
    }
  };

  const stopScanner = () => {
    if (scannerRef.current) {
      scannerRef.current.clear();
      setIsScanning(false);
    }
  };

  useEffect(() => {
    // Cleanup on component unmount
    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear();
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex space-x-2">
        <Button 
          onClick={startScanner} 
          disabled={isScanning}
          variant="default"
        >
          Start Scanner
        </Button>
        <Button 
          onClick={stopScanner}
          disabled={!isScanning}
          variant="outline"
        >
          Stop Scanner
        </Button>
      </div>
      
      <div 
        ref={scannerContainerRef}
        className="w-full max-w-md border border-gray-300 rounded-lg p-4"
      >
        <div id="qr-reader" className="relative"></div>
      </div>
      
      <p className="text-gray-600 text-sm mt-4 text-center">
        Position the QR code within the scanner frame to scan
      </p>
    </div>
  );
};

export default QRScanner;
