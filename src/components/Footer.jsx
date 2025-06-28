import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#033344] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-300">ICATES-2025</h3>
            <p className="text-sm text-gray-300 mb-4">
              International Conference on Advancing Technology in Engineering and Science
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-cyan-300 transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-300 transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-300 transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-300 transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-300">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Conference', path: '/about' },
                { name: 'Call for Papers', path: '/call-for-papers' },
                { name: 'Registration', path: '/registration' },
                { name: 'Keynote Speakers', path: '/speakers' },
                { name: 'Schedule', path: '/schedule' },
                { name: 'Venue', path: '/venue' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-gray-300 hover:text-cyan-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-300">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Vasantdada Patil Pratishthan's College of Engineering, <br />
                  Sion, Mumbai, Maharashtra, India - 400022
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-300">+91 22 2407 4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-cyan-400 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:icates2025@vppcoe.in" 
                  className="text-sm text-gray-300 hover:text-cyan-300 transition-colors"
                >
                  icates2025@vppcoe.in
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-300">Stay Updated</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to receive conference updates and important announcements
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-md bg-[#022735] border border-[#05506c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-2 px-4 rounded-md hover:from-cyan-700 hover:to-blue-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-[#05506c] mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 VPP COE. All Rights Reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a 
                href="#" 
                className="inline-block text-xs text-white bg-cyan-700 hover:bg-cyan-600 px-3 py-1 rounded-full mr-3"
              >
                Download Conference Brochure
              </a>
              <a 
                href="#" 
                className="inline-block text-xs text-white bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded-full"
              >
                Conference Schedule
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;