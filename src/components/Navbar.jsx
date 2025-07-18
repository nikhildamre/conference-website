import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Call for Papers', path: '/call-for-papers' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Committees', path: '/committees' },
    { name: 'Dates', path: '/dates' },
    { name: 'Publication', path: '/publication' },
    { name: 'Venue', path: '/venue' },
    { name: 'Registration', path: '/registration' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/98 backdrop-blur-xl shadow-2xl py-3 border-b border-blue-200' 
        : 'bg-white/95 backdrop-blur-lg py-4 shadow-xl'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-indigo-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
              <img 
                src="https://via.placeholder.com/40x40/ffffff/3b82f6?text=VPPCOE" 
                alt="VPPCOE Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900 leading-tight">
                ICATES-2025
              </h1>
              <p className="text-xs text-blue-800 font-bold leading-tight">Engineering & Science</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                  isActive(link.path)
                    ? 'text-blue-700 bg-blue-50 font-bold'
                    : 'text-gray-800 hover:text-blue-700 hover:bg-blue-50/70'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-blue-100 text-blue-700 hover:bg-blue-200 transition-all duration-300"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 space-y-2 border border-blue-200 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;