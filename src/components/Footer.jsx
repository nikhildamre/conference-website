
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGraduationCap, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaChevronUp
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Call for Papers', path: '/call-for-papers' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Registration', path: '/registration' }
  ];

  const importantLinks = [
    { name: 'Publication', path: '/publication' },
    { name: 'Venue', path: '/venue' },
    { name: 'Committees', path: '/committees' },
    { name: 'Important Dates', path: '/dates' }
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: '#', color: 'hover:text-blue-400' },
    { icon: FaTwitter, href: '#', color: 'hover:text-sky-400' },
    { icon: FaLinkedinIn, href: '#', color: 'hover:text-blue-600' },
    { icon: FaInstagram, href: '#', color: 'hover:text-pink-400' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FaGraduationCap className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    ICATES-2025
                  </h3>
                  <p className="text-sm text-gray-300">Engineering & Science</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                International Conference on Advancing Technology in Engineering and Science - 
                where innovation meets excellence.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white/20 transform hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-cyan-400">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-cyan-400">Important</h4>
              <ul className="space-y-3">
                {importantLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-cyan-400">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <FaMapMarkerAlt className="text-cyan-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Vasantdada Patil Pratishthan's College of Engineering,
                      Sion, Mumbai, Maharashtra 400022
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-cyan-400 text-sm" />
                  </div>
                  <p className="text-gray-300 text-sm">icates2025@vppce.edu.in</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <FaPhone className="text-cyan-400 text-sm" />
                  </div>
                  <p className="text-gray-300 text-sm">+91 22 2404 1315</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2025 ICATES. All rights reserved. | Organized by VPPCE Mumbai
              </p>
              <div className="flex items-center space-x-6">
                <Link to="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 group"
        >
          <FaChevronUp className="text-lg group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
