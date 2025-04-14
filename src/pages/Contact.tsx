import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team for inquiries, quotes, or support."
      />
      
      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Mail className="w-5 h-5 text-ridge-gold mr-3" />
                    <h3 className="text-lg font-bold">Email Us</h3>
                  </div>
                  <a 
                    href="mailto:info@ridgevalley.co" 
                    className="text-lg hover:text-ridge-gold transition-colors"
                  >
                    info@ridgevalley.co
                  </a>
                  <p className="text-gray-600 mt-2">
                    For general inquiries and information
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Phone className="w-5 h-5 text-ridge-gold mr-3" />
                    <h3 className="text-lg font-bold">Call Us</h3>
                  </div>
                  <a 
                    href="tel:+18001234567" 
                    className="text-lg hover:text-ridge-gold transition-colors"
                  >
                    (702) 817-4778
                  </a>
                  <p className="text-gray-600 mt-2">
                    Monday to Friday, 9am to 5pm EST
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 text-ridge-gold mr-3" />
                    <h3 className="text-lg font-bold">Response Time</h3>
                  </div>
                  <p className="text-gray-600">
                    We strive to respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please call our toll-free number.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          {/* Added missing closing tag for the container div */}
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What packaging solutions do you offer?</h3>
              <p className="text-gray-600">
                We offer a comprehensive range of packaging solutions including corrugated boxes, 
                stock packaging materials, custom shipping packaging, and custom retail packaging.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Do you offer custom packaging design services?</h3>
              <p className="text-gray-600">
                Yes, our team includes packaging design specialists who can create custom packaging 
                solutions tailored to your specific product needs and brand requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What are your minimum order quantities?</h3>
              <p className="text-gray-600">
                Minimum order quantities vary depending on the product. We strive to accommodate 
                businesses of all sizes and can discuss options that fit your specific needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How quickly can you fulfill orders?</h3>
              <p className="text-gray-600">
                Standard stock items are typically shipped within 1-2 business days. Custom 
                packaging solutions may require additional lead time depending on complexity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;

//dylanananananagit add .
