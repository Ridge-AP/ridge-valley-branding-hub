
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ridge-black text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-montserrat font-bold uppercase">
                <span className="text-ridge-gold">Ridge</span>
                <span className="text-white">Valley</span>
                <span className="text-ridge-gray text-sm ml-1">Co</span>
              </span>
            </Link>
            <p className="text-gray-300 mt-4">
              Professional packaging solutions provider specializing in high-quality packaging, cutting-edge technology, and exceptional customer service.
            </p>
   
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-montserrat uppercase text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-ridge-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-ridge-gold transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-300 hover:text-ridge-gold transition-colors">Locations</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-ridge-gold transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-ridge-gold transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-montserrat uppercase text-white font-bold mb-4">Locations</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-ridge-gold" />
                <div>
                  <p className="font-semibold">Phoenix</p>
                  <p className="text-gray-300 text-sm">2636 S Wilson St, Suite 104, Tempe, AZ 85282</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-ridge-gold" />
                <div>
                  <p className="font-semibold">Brooklyn</p>
                  <p className="text-gray-300 text-sm">14 53rd St, 6th & 7th Floors, Brooklyn, NY 11232​</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-ridge-gold" />
                <div>
                  <p className="font-semibold">Salt Lake City</p>
                  <p className="text-gray-300 text-sm">1580 S 500 W, Suite 100, Salt Lake City, UT 8411</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-montserrat uppercase text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-ridge-gold" />
                <a href="tel:+18001234567" className="text-gray-300 hover:text-ridge-gold transition-colors">
                  (702) 817-4778
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-ridge-gold" />
                <a href="mailto:info@ridgevalley.co" className="text-gray-300 hover:text-ridge-gold transition-colors">
                  info@ridgevalley.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 Ridge Valley Packaging. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
