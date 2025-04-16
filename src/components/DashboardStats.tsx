
import { BarChart3, AlertTriangle, Package } from "lucide-react";

const DashboardStats = () => {
  // These would be fetched from API in a real application
  const mockStats = {
    totalDrugs: 128,
    lowStock: 12,
    vendors: 8
  };

  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Inventory Overview</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-50 p-3 rounded-full">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total Drugs</p>
              <p className="text-2xl font-bold text-gray-800">{mockStats.totalDrugs}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex items-center space-x-4">
            <div className="bg-red-50 p-3 rounded-full">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Low Stock Items</p>
              <p className="text-2xl font-bold text-gray-800">{mockStats.lowStock}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex items-center space-x-4">
            <div className="bg-green-50 p-3 rounded-full">
              <Store className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Vendors</p>
              <p className="text-2xl font-bold text-gray-800">{mockStats.vendors}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardStats;
