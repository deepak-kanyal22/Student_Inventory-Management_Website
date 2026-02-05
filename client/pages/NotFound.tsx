import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center relative overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-200 to-blue-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative z-10 text-center space-y-6 px-4">
        <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Page Not Found
        </h1>
        <p className="text-lg text-slate-600 max-w-md mx-auto">
          Looks like this page doesn't exist. Let's get you back on track with
          managing your inventory!
        </p>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white mt-4">
          <ArrowLeft className="w-4 h-4" />
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
