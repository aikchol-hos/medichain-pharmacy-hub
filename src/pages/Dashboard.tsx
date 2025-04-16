
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
  User,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DashboardStats from "@/components/DashboardStats";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { toast } = useToast();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    // Here you would clear auth tokens/state
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    // Would redirect to login page
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2">
            <Pill className="h-6 w-6 text-purple-600" />
            <h1 className="text-lg font-semibold text-gray-800">MediChain</h1>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/dashboard" className="flex items-center gap-2">
              <Home size={18} />
              <span>Dashboard</span>
            </Link>
          </Button>
          
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/drugs" className="flex items-center gap-2">
              <Pill size={18} />
              <span>Drugs</span>
            </Link>
          </Button>
          
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/vendors" className="flex items-center gap-2">
              <Store size={18} />
              <span>Vendors</span>
            </Link>
          </Button>

          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/scan" className="flex items-center gap-2">
              <QrCode size={18} />
              <span>QR Scan</span>
            </Link>
          </Button>
          
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/reports" className="flex items-center gap-2">
              <ClipboardList size={18} />
              <span>Reports</span>
            </Link>
          </Button>
          
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/users" className="flex items-center gap-2">
              <Users size={18} />
              <span>Users</span>
            </Link>
          </Button>
        </nav>
        
        <div className="p-4 border-t mt-auto">
          <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50" onClick={handleLogout}>
            <LogOut size={18} className="mr-2" />
            <span>Logout</span>
          </Button>
        </div>
      </aside>
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800 md:hidden">MediChain</h1>
            
            {/* Mobile Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu size={18} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="py-4">
                  <div className="flex items-center space-x-2 mb-6 pb-4 border-b">
                    <Pill className="h-6 w-6 text-purple-600" />
                    <h1 className="text-lg font-semibold text-gray-800">MediChain</h1>
                  </div>
                  
                  <nav className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link to="/dashboard" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <Home size={18} />
                        <span>Dashboard</span>
                      </Link>
                    </Button>
                    
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link to="/drugs" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <Pill size={18} />
                        <span>Drugs</span>
                      </Link>
                    </Button>
                    
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link to="/vendors" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <Store size={18} />
                        <span>Vendors</span>
                      </Link>
                    </Button>
                    
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link to="/scan" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <QrCode size={18} />
                        <span>QR Scan</span>
                      </Link>
                    </Button>
                    
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link to="/reports" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <ClipboardList size={18} />
                        <span>Reports</span>
                      </Link>
                    </Button>
                    
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link to="/users" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <Users size={18} />
                        <span>Users</span>
                      </Link>
                    </Button>

                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 mt-6" 
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <LogOut size={18} className="mr-2" />
                      <span>Logout</span>
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 hidden md:inline-block">Welcome, Admin</span>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/profile" className="flex items-center gap-1">
                  <User size={18} />
                  <span className="hidden md:inline-block">Profile</span>
                </Link>
              </Button>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
            <p className="text-gray-600">Welcome to your pharmacy inventory dashboard</p>
          </div>
          
          <DashboardStats />
          
          <section className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Quick Actions</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button asChild className="h-auto py-6 bg-purple-600 hover:bg-purple-700">
                <Link to="/drugs/add" className="flex flex-col items-center">
                  <Pill className="h-6 w-6 mb-2" />
                  <span>Add New Drug</span>
                </Link>
              </Button>
              
              <Button asChild className="h-auto py-6 bg-blue-600 hover:bg-blue-700">
                <Link to="/vendors/add" className="flex flex-col items-center">
                  <Store className="h-6 w-6 mb-2" />
                  <span>Add New Vendor</span>
                </Link>
              </Button>
              
              <Button asChild className="h-auto py-6 bg-green-600 hover:bg-green-700">
                <Link to="/scan" className="flex flex-col items-center">
                  <QrCode className="h-6 w-6 mb-2" />
                  <span>Scan QR Code</span>
                </Link>
              </Button>
              
              <Button asChild className="h-auto py-6 bg-amber-600 hover:bg-amber-700">
                <Link to="/reports" className="flex flex-col items-center">
                  <ClipboardList className="h-6 w-6 mb-2" />
                  <span>View Reports</span>
                </Link>
              </Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
