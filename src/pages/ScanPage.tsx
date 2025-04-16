
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import QRScanner from "@/components/QRScanner";
import { useToast } from "@/hooks/use-toast";

const ScanPage = () => {
  const { toast } = useToast();
  const [scannedResult, setScannedResult] = useState<string | null>(null);
  const [drugInfo, setDrugInfo] = useState<any | null>(null);

  const handleScanResult = (result: string) => {
    setScannedResult(result);
    
    // In a real app, you would fetch drug information from the API
    // For now, we'll simulate a successful lookup
    setTimeout(() => {
      setDrugInfo({
        id: result,
        name: "Paracetamol 500mg",
        description: "Pain reliever and fever reducer",
        quantity: 250,
        expiryDate: "2025-12-31",
        batchNumber: "BN-23456",
        vendor: "MedPharm Inc."
      });
    }, 500);
  };

  const resetScan = () => {
    setScannedResult(null);
    setDrugInfo(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-3">
          <Link to="/dashboard" className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Back to Dashboard</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">QR Code Scanner</h1>
          
          {!scannedResult ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Scan Drug QR Code</h2>
              <p className="text-gray-600 mb-6">
                Use the scanner below to scan a medication QR code and retrieve its information.
              </p>
              
              <QRScanner onResult={handleScanResult} />
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Scan Result</h2>
              
              <div className="mb-6">
                <p className="text-gray-600">QR Code Content:</p>
                <p className="font-mono bg-gray-100 p-2 rounded mt-1">{scannedResult}</p>
              </div>
              
              {drugInfo ? (
                <div className="border rounded-lg p-4 mb-6">
                  <h3 className="text-xl font-semibold mb-3">{drugInfo.name}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Description</p>
                      <p>{drugInfo.description}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Quantity in Stock</p>
                      <p>{drugInfo.quantity} units</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Expiry Date</p>
                      <p>{drugInfo.expiryDate}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Batch Number</p>
                      <p>{drugInfo.batchNumber}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Vendor</p>
                      <p>{drugInfo.vendor}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center items-center h-32">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-700"></div>
                  <span className="ml-2">Loading drug information...</span>
                </div>
              )}
              
              <div className="flex space-x-3">
                <Button onClick={resetScan} variant="outline">
                  Scan Another QR Code
                </Button>
                
                {drugInfo && (
                  <Button asChild>
                    <Link to={`/drugs/${drugInfo.id}`}>
                      View Full Details
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ScanPage;
