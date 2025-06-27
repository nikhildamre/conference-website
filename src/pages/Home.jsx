
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaPaperPlane, FaUsers, FaAward, FaGlobeAmericas, FaChevronDown } from 'react-icons/fa';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const highlights = [
    { icon: FaUsers, count: "500+", label: "Expected Participants" },
    { icon: FaAward, count: "50+", label: "Expert Speakers" },
    { icon: FaGlobeAmericas, count: "25+", label: "Countries" },
    { icon: FaPaperPlane, count: "200+", label: "Research Papers" }
  ];

  const conferenceThemes = [
    "Artificial Intelligence & Machine Learning",
    "Sustainable Engineering Solutions",
    "Quantum Computing & Technologies",
    "Biotechnology & Life Sciences",
    "Renewable Energy Systems",
    "Advanced Materials Science"
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % conferenceThemes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const ParticleBackground = () => (
    <div className="particle-bg">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${Math.random() * 3 + 4}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden pt-16">
      {/* Enhanced Hero Section */}
      <section 
        className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.9) 50%, rgba(51,65,85,0.85) 100%)",
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <ParticleBackground />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative z-10 px-4 max-w-6xl mx-auto">
          {/* Sponsor logos with enhanced animation */}
          <div className="flex justify-center space-x-8 mb-12 animate-fadeInUp">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-effect p-4 rounded-2xl animate-float hover:animate-glow transition-all duration-300" style={{animationDelay: `${i * 0.5}s`}}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  S{i}
                </div>
              </div>
            ))}
          </div>
          
          <div className="animate-slideInLeft" style={{animationDelay: '0.3s'}}>
            <h2 className="gradient-text-blue font-bold text-xl md:text-3xl mb-6 tracking-wide">
              International Conference on Advancing Technology in Engineering and Science
            </h2>
          </div>
          
          <div className="animate-scaleIn" style={{animationDelay: '0.6s'}}>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                ICATES
              </span>
              <span className="text-white">-2025</span>
            </h1>
          </div>
          
          <div className="animate-slideInRight" style={{animationDelay: '0.9s'}}>
            <div className="glass-effect px-6 py-3 rounded-full text-cyan-200 mb-8 inline-flex items-center space-x-3">
              <FaCalendarAlt className="text-cyan-400" />
              <span className="font-semibold">March 15-17, 2025</span>
              <span className="text-gray-300">|</span>
              <FaMapMarkerAlt className="text-cyan-400" />
              <span className="font-semibold">Mumbai, India</span>
            </div>
          </div>

          {/* Theme slider */}
          <div className="animate-fadeInUp mb-12" style={{animationDelay: '1.2s'}}>
            <div className="glass-dark p-6 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-cyan-400 font-semibold mb-3">Conference Themes</h3>
              <div className="h-8 overflow-hidden">
                <div 
                  className="transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateY(-${currentSlide * 32}px)` }}
                >
                  {conferenceThemes.map((theme, index) => (
                    <div key={index} className="text-white text-lg font-medium h-8 flex items-center justify-center">
                      {theme}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12 animate-fadeInUp" style={{animationDelay: '1.5s'}}>
            <Link to="/registration" className="btn-primary group">
              Register Now
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link to="/call-for-papers" className="btn-secondary group">
              Submit Paper
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <FaChevronDown className="text-white/60 text-2xl" />
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold gradient-text mb-4">Conference at a Glance</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join the premier gathering of minds shaping the future of technology
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 text-center card-hover shadow-lg group animate-scaleIn"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-white text-2xl" />
                </div>
                <div className="text-3xl font-bold gradient-text-blue mb-2">{item.count}</div>
                <p className="text-gray-600 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-white to-slate-50 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold gradient-text relative pb-4 inline-block">
              About the Conference
              <div className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
            </h2>
            <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
              A transformative experience at the intersection of technology, engineering and science
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden card-hover">
            <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600">
              <div className="bg-white rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="animate-slideInLeft">
                    <h3 className="text-3xl font-bold gradient-text-blue mb-6">Welcome to ICATES-2025</h3>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      The International Conference on Advancing Technology in Engineering and Science (ICATES-2025) 
                      aims to bring together leading academic scientists, researchers, and research scholars to exchange 
                      and share their experiences and research results.
                    </p>
                    
                    <div className="space-y-4">
                      {[
                        "Share research findings and collaborate on interdisciplinary projects",
                        "Discuss pedagogical innovations and emerging technologies",
                        "Network with industry professionals and academic experts"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="animate-slideInRight">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { title: "For Researchers", desc: "Platform to share findings and collaborate" },
                        { title: "For Industry", desc: "Showcase advancements and identify talent" },
                        { title: "For Students", desc: "Learn from experts and network" },
                        { title: "For Academics", desc: "Discuss innovations and methodologies" }
                      ].map((item, index) => (
                        <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                          <h4 className="font-bold text-blue-800 mb-2">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact CTA */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <ParticleBackground />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl font-bold text-cyan-200 mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-cyan-100 mb-12 max-w-3xl mx-auto">
              Don't miss this opportunity to be part of the future of technology and innovation
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl group"
              >
                Contact Organizers
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <button className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-purple-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-2xl group">
                Download Brochure
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">↓</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
