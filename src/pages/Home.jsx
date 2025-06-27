import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaUserGraduate, FaChalkboardTeacher, FaPaperPlane } from 'react-icons/fa';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="overflow-hidden pt-16">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(3,51,68,0.9) 0%, rgba(5,80,108,0.85) 100%), url('/conference-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="px-4 max-w-4xl">
          <div className="flex justify-center space-x-6 mb-8 animate-pulse">
            <img src="/sponsor1.png" alt="Sponsor 1" className="h-12 opacity-90 hover:opacity-100 transition-opacity" />
            <img src="/sponsor2.png" alt="Sponsor 2" className="h-12 opacity-90 hover:opacity-100 transition-opacity" />
            <img src="/sponsor3.png" alt="Sponsor 3" className="h-12 opacity-90 hover:opacity-100 transition-opacity" />
          </div>
          
          <h2 className="text-cyan-200 font-bold italic text-xl md:text-2xl mb-4 tracking-wide">
            International Conference on Advancing Technology in Engineering and Science
          </h2>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-2">
            ICATES-2025
          </h1>
          
          <div className="inline-flex items-center bg-cyan-700/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white mb-4">
            <FaCalendarAlt className="inline mr-2" />
            October 04–05, 2025 | <span className="font-semibold">(Hybrid Mode)</span>
          </div>
          
          <p className="mt-6 text-white text-lg">
            Organized by
          </p>
          <h3 className="font-bold text-2xl md:text-3xl text-white mt-2 mb-6">
            VASANTDADA PATIL PRATISHTHAN'S COLLEGE OF ENGINEERING
          </h3>
          
          <div 
            className="inline-flex items-center bg-cyan-800/80 backdrop-blur-sm mt-4 px-6 py-2 rounded-full text-white text-md transition-all duration-300 hover:bg-cyan-700 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FaMapMarkerAlt className={`mr-2 transition-transform ${isHovered ? 'animate-bounce' : ''}`} />
            Sion, Mumbai, Maharashtra, India - 400022
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/registration" className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-full text-lg font-bold hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Register Now
            </Link>
            <Link to="/call-for-papers" className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white px-8 py-3 rounded-full text-lg font-bold hover:from-blue-700 hover:to-cyan-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Submit Paper
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 animate-bounce">
          <svg className="w-8 h-8 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Conference Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 relative pb-2 inline-block">
              About the Conference
              <div className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Join us for a transformative experience at the intersection of technology, engineering and science
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-1 bg-gradient-to-r from-cyan-500 to-blue-600">
              <div className="bg-white p-6 md:p-10">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Welcome to ICATES-2025</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The International Conference on Advancing Technology in Engineering and Science (ICATES-2025) aims to bring together leading academic scientists, researchers, and research scholars to exchange and share their experiences and research results on all aspects of Engineering and Science.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      It provides a premier interdisciplinary platform for researchers, practitioners, and educators to present and discuss the most recent innovations, trends, and concerns as well as practical challenges encountered and solutions adopted in these fields.
                    </p>
                  </div>
                  
                  <div className="md:w-1/2 flex flex-col gap-6">
                    <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl border border-blue-200">
                      <h4 className="font-bold text-blue-800 text-lg mb-2 flex items-center">
                        <FaUserGraduate className="mr-2 text-cyan-600" />
                        For Students
                      </h4>
                      <p className="text-gray-700">
                        Opportunities to present research, network with professionals, and explore career paths in emerging technologies.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl border border-blue-200">
                      <h4 className="font-bold text-blue-800 text-lg mb-2 flex items-center">
                        <FaChalkboardTeacher className="mr-2 text-cyan-600" />
                        For Academics
                      </h4>
                      <p className="text-gray-700">
                        Platform to share research findings, collaborate on interdisciplinary projects, and discuss pedagogical innovations.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl border border-blue-200">
                      <h4 className="font-bold text-blue-800 text-lg mb-2 flex items-center">
                        <FaPaperPlane className="mr-2 text-cyan-600" />
                        For Industry Professionals
                      </h4>
                      <p className="text-gray-700">
                        Showcase technological advancements, identify talent, and explore commercialization opportunities for research.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-tr from-blue-900 to-cyan-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-cyan-300">500+</div>
              <div className="text-sm text-cyan-100">Participants</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-cyan-300">50+</div>
              <div className="text-sm text-cyan-100">Technical Sessions</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-cyan-300">12+</div>
              <div className="text-sm text-cyan-100">Keynote Speakers</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-cyan-300">8+</div>
              <div className="text-sm text-cyan-100">Sponsors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900">Explore Conference</h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Quick access to important conference sections
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Registration', icon: '📝', path: '/registration', color: 'from-red-500 to-orange-500' },
              { title: 'Call for Papers', icon: '📄', path: '/call-for-papers', color: 'from-blue-500 to-cyan-500' },
              { title: 'Keynote Speakers', icon: '🎤', path: '/speakers', color: 'from-purple-500 to-fuchsia-500' },
              { title: 'Conference Venue', icon: '📍', path: '/venue', color: 'from-green-500 to-emerald-500' },
              { title: 'Committees', icon: '👥', path: '/committees', color: 'from-amber-500 to-yellow-500' },
              { title: 'Important Dates', icon: '📅', path: '/dates', color: 'from-indigo-500 to-violet-500' },
              { title: 'Publications', icon: '📚', path: '/publication', color: 'from-pink-500 to-rose-500' },
              { title: 'Contact Us', icon: '📧', path: '/contact', color: 'from-cyan-500 to-blue-500' },
            ].map((link, index) => (
              <Link 
                key={index}
                to={link.path}
                className={`bg-gradient-to-br ${link.color} rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105`}
              >
                <div className="p-6 h-full flex flex-col items-center justify-center">
                  <div className="text-4xl mb-4">{link.icon}</div>
                  <h3 className="text-lg font-bold text-white text-center">{link.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-cyan-200 mb-6">Have Questions?</h2>
          <p className="text-xl text-cyan-100 mb-10 max-w-3xl mx-auto">
            Our organizing committee is ready to assist you with any inquiries about the conference
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Contact Organizers
            </Link>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;