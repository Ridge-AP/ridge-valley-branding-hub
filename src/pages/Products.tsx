import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Package, Palette } from 'lucide-react';

const ProductsPage = () => {
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
            <div className="bg-white p-8 rounded-2xl shadow-xl border">
              <div className="w-20 h-20 rounded-full bg-ridge-gold/10 flex items-center justify-center mb-8 mx-auto">
                <Package className="text-ridge-gold w-10 h-10" />
              </div>
              
              <h2 className="text-3xl font-bold mb-6 text-center">Stock Products</h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Ridge Valley, we understand that time is money. That's why we maintain an extensive inventory of high-quality packaging solutions ready for immediate delivery.
              </p>
              
              <p className="text-gray-600 mb-6">
                Our comprehensive stock includes corrugated boxes, shipping materials, and protective packaging in the most commonly needed sizes and specifications. With our strategically located distribution centers, we have the means to get you exactly what you need, when you need it.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-ridge-gold rounded-full mr-3"></span>
                  <span>Immediate availability on standard sizes</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-ridge-gold rounded-full mr-3"></span>
                  <span>Same-day or next-day shipping</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-ridge-gold rounded-full mr-3"></span>
                  <span>Competitive pricing with volume discounts</span>
                </div>
              </div>
              
              <Button asChild className="btn-primary w-full text-lg">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
            
            {/* Custom Products */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border">
              <div className="w-20 h-20 rounded-full bg-ridge-gold/10 flex items-center justify-center mb-8 mx-auto">
                <Palette className="text-ridge-gold w-10 h-10" />
              </div>
              
              <h2 className="text-3xl font-bold mb-6 text-center">Custom Products</h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                You've created an incredible product that customers love. Your innovation, quality, and vision are undeniable. But here's the challenge: your packaging isn't telling that story.
              </p>
              
              <p className="text-gray-600 mb-6">
                Generic packaging undermines your brand's potential and limits your market reach. Your product deserves packaging that captures attention, communicates value, and drives sales. That's where Ridge Valley's custom packaging solutions transform your business.
              </p>
              
              <p className="text-gray-600 mb-8">
                We design and manufacture packaging that doesn't just protect your product—it elevates it. From concept to creation, we partner with you to develop packaging that becomes a powerful marketing tool, turning every shipment into a brand experience that customers remember and share.
              </p>
              
              <Button asChild className="btn-primary w-full text-lg">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
            
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;