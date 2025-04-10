
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Locations', path: '/locations' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-montserrat font-bold uppercase">
            <span className="text-ridge-gold">Ridge</span>
            <span className="text-ridge-black">Valley</span>
            <span className="text-ridge-gray text-sm ml-1">Co</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-montserrat text-sm font-semibold uppercase transition-colors hover:text-ridge-gold ${
                location.pathname === link.path ? 'text-ridge-gold' : 'text-ridge-black'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="btn-primary">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-ridge-black p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-md z-50 animate-fade-in">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-montserrat text-sm font-semibold uppercase py-2 transition-colors hover:text-ridge-gold ${
                  location.pathname === link.path ? 'text-ridge-gold' : 'text-ridge-black'
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="btn-primary w-full mt-4">
              <Link to="/contact" onClick={closeMenu}>Get a Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
