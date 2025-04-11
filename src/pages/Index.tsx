import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { ArrowRight } from 'lucide-react';
import HeroImage from '@/assets/Hero.png';


const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-ridge-black text-white py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50" 
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1682071115224-8e1a99dc9614?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')` 
            }}
          ></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Simplify Your Operation with Professional Packaging Solutions
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Streamline your shipping and packaging processes with Ridge Valley Co's comprehensive range of packaging solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="btn-primary">
                  <Link to="/solutions">Explore Solutions</Link>
                </Button>
                <Button asChild className="bg-white text-ridge-black hover:bg-gray-200 transition-colors font-montserrat uppercase font-bold py-3 px-6 rounded">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:w-1/2">
              <img 
                src=  {HeroImage} 
                alt="Anton the Giraffe - Ridge Valley Hero" 
                className="w-full max-w-md mx-auto rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" 
                alt="Ridge Valley Packaging Operations" 
                className="rounded-lg shadow-md w-full object-cover h-[400px]"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About Ridge Valley Co</h2>
              <p className="text-gray-600 mb-4">
                Ridge Valley Co is a leading packaging solutions provider with locations in Phoenix, Brooklyn, and Salt Lake City. We specialize in providing high-quality packaging materials, cutting-edge technology, and exceptional customer service.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to help businesses optimize their packaging operations, reduce costs, and improve customer satisfaction through innovative packaging solutions.
              </p>
              <Button asChild className="btn-secondary">
                <Link to="/locations" className="flex items-center">
                  Our Locations <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Our Services" 
            subtitle="We offer a comprehensive range of packaging solutions to meet your business needs."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                link={`/solutions#${service.id}`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="btn-primary">
              <Link to="/solutions">Learn More About Our Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-ridge-gold/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Packaging?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Contact our team today to discuss your specific packaging needs and discover how Ridge Valley Co can help streamline your operations.
          </p>
          <Button asChild className="btn-primary">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
