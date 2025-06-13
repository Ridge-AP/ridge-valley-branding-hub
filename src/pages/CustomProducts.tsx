import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Palette } from 'lucide-react';

const CustomProductsPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Custom Products" 
        subtitle="Transform your brand story through innovative packaging design."
      />
      
      <section className="section-padding">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl border">
            <div className="w-20 h-20 rounded-full bg-ridge-gold/10 flex items-center justify-center mb-8 mx-auto">
              <Palette className="text-ridge-gold w-10 h-10" />
            </div>
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image - Left Side */}
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/5976acb5-51ad-438a-83e4-1b61277b3fc5.png"
                  alt="Custom branded packaging boxes with company logo and branding"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content - Right Side */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    You've created an incredible product that customers love. Your innovation, quality, and vision are undeniable. But here's the challenge that's holding you back: <em>your packaging isn't telling that story.</em>
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    In today's hyper-competitive marketplace, generic packaging is your silent enemy. It undermines your brand's potential, limits your market reach, and leaves money on the table. Your extraordinary product deserves packaging that captures attention, communicates value, and drives purchase decisions at the critical moment of truth.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    That's where Ridge Valley's custom packaging solutions transform your business trajectory. We don't just create containers—we engineer brand experiences that turn every shipment into a powerful marketing moment.
                  </p>
                </div>
                
                <Button asChild className="btn-primary w-full text-lg py-6">
                  <Link to="/contact">Get a Quote for Custom Products</Link>
                </Button>
              </div>
            </div>
            
            {/* Additional Info Section */}
            <div className="mt-12 bg-gradient-to-r from-ridge-gold/10 to-ridge-gold/5 border border-ridge-gold/20 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-ridge-gold">The Ridge Valley Custom Advantage</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-ridge-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <span className="font-semibold">Strategic Brand Elevation:</span> 
                    <span className="text-gray-600"> Transform packaging into a competitive advantage that differentiates you in crowded markets</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-ridge-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <span className="font-semibold">Social Media Amplification:</span> 
                    <span className="text-gray-600"> Create Instagram-worthy unboxing experiences that customers share organically</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-ridge-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <span className="font-semibold">Premium Perception:</span> 
                    <span className="text-gray-600"> Elevate perceived value, enabling premium pricing and improved margins</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-ridge-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <span className="font-semibold">End-to-End Partnership:</span> 
                    <span className="text-gray-600"> From concept ideation to scalable production, we're your strategic packaging partner</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mt-4">
                From concept to creation, we partner with you to develop packaging that becomes a powerful marketing tool, turning every shipment into a brand experience that customers remember, share, and advocate for. Don't let inferior packaging limit your product's potential—let Ridge Valley unlock the full power of your brand story.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CustomProductsPage;