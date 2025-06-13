import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Package, Palette } from 'lucide-react';

const SolutionsPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Our Products" 
        subtitle="Choose the perfect packaging solution for your business needs."
      />
      
      {/* Product Options */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Stock Products */}
            <div className="bg-white rounded-2xl shadow-xl border overflow-hidden">
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" 
                  alt="Open packaging boxes showing stock products" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="w-20 h-20 rounded-full bg-ridge-gold/10 flex items-center justify-center mb-6 mx-auto">
                  <Package className="text-ridge-gold w-10 h-10" />
                </div>
                
                <h2 className="text-3xl font-bold mb-4 text-center">Stock Products</h2>
                
                <p className="text-gray-600 mb-6 text-center">
                  Ready-to-ship packaging solutions with immediate availability and fast delivery.
                </p>
                
                <Button asChild variant="outline" className="w-full mb-4">
                  <Link to="/stock-products">
                    More Details
                  </Link>
                </Button>
                
                <Button asChild className="btn-primary w-full text-lg">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
            
            {/* Custom Products */}
            <div className="bg-white rounded-2xl shadow-xl border overflow-hidden">
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/bbbd61c5-019d-44b8-a197-d7bd74c8705e.png" 
                  alt="Custom shipping packaging in warehouse setting" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="w-20 h-20 rounded-full bg-ridge-gold/10 flex items-center justify-center mb-6 mx-auto">
                  <Palette className="text-ridge-gold w-10 h-10" />
                </div>
                
                <h2 className="text-3xl font-bold mb-4 text-center">Custom Products</h2>
                
                <p className="text-gray-600 mb-6 text-center">
                  Branded packaging solutions that elevate your product and enhance customer experience.
                </p>
                
                <Button asChild variant="outline" className="w-full mb-4">
                  <Link to="/custom-products">
                    More Details
                  </Link>
                </Button>
                
                <Button asChild className="btn-primary w-full text-lg">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionsPage;
