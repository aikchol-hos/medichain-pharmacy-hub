
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Pill, 
  Users, 
  Store, 
  ClipboardList, 
  LogOut, 
  Home,
  QrCode,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DashboardStats from "@/components/DashboardStats";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Pill className="h-6 w-6 text-purple-600" />
            <h1 className="text-xl font-semibold text-gray-800">MediChain Pharmacy Hub</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/" className="flex items-center gap-1">
                <User size={18} />
                <span>Login</span>
              </Link>
            </Button>
          </nav>
          
          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 py-4">
                <Button variant="ghost" className="justify-start" asChild>
                  <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <User size={18} />
                    <span>Login</span>
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Pharmacy Inventory Management System</h2>
          <p className="text-lg text-gray-600 mb-8">
            Efficiently manage your pharmacy inventory with real-time tracking, QR code scanning, and comprehensive reporting.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <Pill className="h-10 w-10 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Drug Management</h3>
              <p className="text-gray-600 mb-4">Add, edit, and manage your medication inventory with ease.</p>
              <Button className="w-full" disabled>Coming Soon</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <QrCode className="h-10 w-10 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">QR Code Scanning</h3>
              <p className="text-gray-600 mb-4">Quickly scan medications to access detailed information.</p>
              <Button className="w-full" disabled>Coming Soon</Button>
            </div>
          </div>
        </section>

        <DashboardStats />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 text-sm">
            © 2025 MediChain Pharmacy Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
