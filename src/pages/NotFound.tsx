import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D1117]">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-white/80 mb-8">Oops! Page not found</p>
        <Link 
          to="/" 
          className="inline-block bg-[#C5F82A] text-black px-6 py-2 rounded-full hover:bg-[#C5F82A]/90 transition-all"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
