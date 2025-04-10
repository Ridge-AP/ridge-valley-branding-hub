
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import TestimonialCard from '@/components/TestimonialCard';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';

const SolutionsPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Handle hash navigation
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <Layout>
      <PageHeader 
        title="Our Solutions" 
        subtitle="Explore our comprehensive range of packaging solutions designed to meet your business needs."
      />
      
      {/* Solutions Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Packaging Solutions" 
            subtitle="We offer a wide range of packaging solutions to help businesses streamline their operations and improve customer satisfaction."
            center
          />
          
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12`}>
                  <div className="lg:w-1/2">
                    <img 
                      src={`https://source.unsplash.com/random/800x600?packaging,${service.id}`} 
                      alt={service.title} 
                      className="rounded-lg shadow-lg w-full h-96 object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <div className="w-16 h-16 rounded-full bg-ridge-gold/10 flex items-center justify-center mb-6">
                      <service.icon className="text-ridge-gold w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                    <div className="prose max-w-none">
                      <p className="text-gray-700 mb-6">{service.fullDescription}</p>
                      
                      <h3 className="text-xl font-bold mb-4">Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-ridge-gold rounded-full mr-3"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Don't just take our word for it. Here's what our clients have to say about working with Ridge Valley Co."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionsPage;
