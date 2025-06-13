import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Package } from 'lucide-react';

const StockProductsPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Stock Products" 
        subtitle="Ready-to-ship packaging solutions with immediate availability."
      />
      
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl border">
            <div className="w-20 h-20 rounded-full bg-ridge-gold/10 flex items-center justify-center mb-8 mx-auto">
              <Package className="text-ridge-gold w-10 h-10" />
            </div>
            
            {/* Hero Image */}
            <div className="w-full h-96 mb-8 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=6052&h=4035&auto=format&fit=crop"
                alt="Warehouse with organized packaging inventory" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Detailed Description */}
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Ridge Valley, we understand that time is money in today's fast-paced business environment. That's why we've revolutionized packaging distribution by maintaining extensive, strategically positioned inventory across our Phoenix, Brooklyn, and Salt Lake City locations.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Our comprehensive stock includes premium corrugated boxes, protective shipping materials, cushioning solutions, and specialized packaging in the most commonly needed sizes and specifications. We don't just store inventory—we curate it based on real market demand and emerging trends.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                With our advanced logistics network and AI-powered inventory management system, we have the means to get you exactly what you need, precisely when you need it. Our distribution centers are equipped with cutting-edge automation that ensures accuracy, speed, and reliability in every order.
              </p>
              
              <div className="bg-ridge-gold/10 border border-ridge-gold/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-ridge-gold">Why Choose Our Stock Solutions?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-ridge-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-semibold">Immediate Availability:</span> 
                      <span className="text-gray-600"> 99.7% in-stock rate on standard sizes</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-ridge-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-semibold">Lightning Fast Delivery:</span> 
                      <span className="text-gray-600"> Same-day or next-day shipping</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-ridge-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-semibold">Volume Advantages:</span> 
                      <span className="text-gray-600"> Competitive pricing with bulk discounts</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-ridge-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-semibold">Quality Guaranteed:</span> 
                      <span className="text-gray-600"> Premium materials, rigorously tested</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Button asChild className="btn-primary w-full text-lg py-6">
              <Link to="/contact">Get a Quote for Stock Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StockProductsPage;