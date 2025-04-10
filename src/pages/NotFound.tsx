
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center section-padding">
        <h1 className="text-6xl md:text-8xl font-bold text-ridge-gold mb-6">404</h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button asChild className="btn-primary">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
