import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Call for Papers', path: '/call-for-papers' },
    { name: 'Publication', path: '/publication' },
    { name: 'Dates', path: '/dates' },
    { name: 'Committees', path: '/committees' },
    { name: 'Keynote Speakers', path: '/speakers' },
    { name: 'Registration', path: '/registration' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Venue', path: '/venue' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#033344] shadow-lg py-2' : 'bg-gradient-to-b from-[#033344] to-[#05506c] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="College Logo" 
              className="h-12 w-auto transition-transform duration-300 hover:scale-105"
            />
            <div className="hidden md:block ml-4">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      location.pathname === link.path
                        ? 'text-cyan-300 font-bold border-b-2 border-cyan-300'
                        : 'text-white hover:text-cyan-200'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="hidden md:block text-lime-300 text-xl font-bold animate-pulse">
            IET
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <div className="text-lime-300 text-xl font-bold mr-4">IET</div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-200 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#033344]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-cyan-300 font-bold'
                    : 'text-white hover:text-cyan-200'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;