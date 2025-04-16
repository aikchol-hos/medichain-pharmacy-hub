
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Pill, 
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DashboardStats from "@/components/DashboardStats";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Mobile-optimized Header */}
      <header className="bg-white shadow-sm border-b safe-top">
        <div className="px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Pill className="h-6 w-6 text-purple-600" />
            <h1 className="text-xl font-semibold text-gray-800">MediChain</h1>
          </div>
          
          <Button variant="ghost" size="sm" asChild className="mobile-button">
            <Link to="/login" className="flex items-center gap-1">
              <User size={18} />
              <span>Login</span>
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Content with mobile scrolling */}
      <main className="flex-1 px-4 py-6 mobile-scroll">
        <section className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Pharmacy Inventory Management</h2>
          <p className="text-base text-gray-600 mb-8">
            Efficiently manage your pharmacy inventory with real-time tracking and QR code scanning.
          </p>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <Pill className="h-10 w-10 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Drug Management</h3>
              <p className="text-gray-600 mb-4">Add, edit, and manage your medication inventory with ease.</p>
              <Button className="w-full mobile-button" disabled>Coming Soon</Button>
            </div>
          </div>
        </section>

        <DashboardStats />
      </main>

      {/* Mobile-optimized Footer with safe area */}
      <footer className="bg-white border-t py-4 px-4 safe-bottom">
        <p className="text-center text-gray-600 text-sm">
          © 2025 MediChain Pharmacy Hub
        </p>
      </footer>
    </div>
  );
};

export default Index;

