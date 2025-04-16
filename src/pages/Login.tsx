import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pill, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: { username: string; password: string }) => {
    setIsLoading(true);
    
    // Simulating API call
    setTimeout(() => {
      setIsLoading(false);
      
      // For demo purposes we'll just show a success message
      // In a real app, you would validate credentials against your API
      toast({
        title: "Login successful",
        description: "Welcome to MediChain Pharmacy Hub",
      });
      
      // Redirect to dashboard after successful login
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 px-4 py-6 safe-top">
      <div className="w-full max-w-md mx-auto">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-white p-3 rounded-full shadow-sm mb-4">
            <Pill className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-2xl font-bold text-center text-gray-900">MediChain</h1>
          <p className="text-gray-600 mt-2 text-center">Login to access your pharmacy inventory</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Enter your password" 
                          {...field}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full mobile-button" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </Form>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Demo credentials:</p>
          <p className="mt-1">Username: admin, Password: admin123</p>
          <p className="mt-1">Username: pharmacist, Password: pharm123</p>
          <p className="mt-1">Username: viewer, Password: view123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
