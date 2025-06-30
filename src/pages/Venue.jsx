import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaHome, FaCar, FaTrain, FaBed, FaPhoneAlt, FaArrowUp, FaDirections, FaParking, FaWifi, FaCoffee } from 'react-icons/fa';

const Venue = () => {
  const [isVisible, setIsVisible] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 pt-20 pb-10 relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-gradient-to-br from-indigo-200/25 to-slate-200/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div 
          id="header" 
          data-animate
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible.header ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-cyan-600 bg-clip-text text-transparent mb-6 animate-gradient">
            Conference Venue
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-full mx-auto mb-8 animate-pulse"></div>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            Join us at the prestigious VPPCOE campus in the heart of Mumbai for an unforgettable conference experience.
          </p>
        </div>

        {/* Main Venue Section */}
        <div 
          id="main-venue" 
          data-animate
          className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-16 border border-blue-200/50 transition-all duration-1000 transform ${
            isVisible['main-venue'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Campus Image and Info */}
            <div className="space-y-8">
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://via.placeholder.com/600x400/3b82f6/ffffff?text=VPPCOE+Campus"
                  alt="VPPCOE Campus"
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">Modern Campus</h3>
                    <p className="text-blue-200">State-of-the-art facilities</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 rounded-xl p-6 border border-blue-200/30 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent mb-4 flex items-center">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg mr-3">
                    <FaHome className="text-white text-xl" />
                  </div>
                  VPPCOE Campus
                </h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Our campus features modern facilities including smart classrooms, advanced laboratories, 
                  and a spacious auditorium equipped with the latest presentation technology.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: FaMapMarkerAlt, text: "Vasantdada Patil Pratishthan's College of Engineering, Sion, Mumbai", color: "text-blue-600" },
                    { icon: FaHome, text: "Main Auditorium (Capacity: 500 persons)", color: "text-indigo-600" },
                    { icon: FaCalendarAlt, text: "October 04-05, 2025 | 9:00 AM - 6:00 PM", color: "text-cyan-600" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-300 group">
                      <div className={`${item.color} mr-4 p-2 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="text-lg" />
                      </div>
                      <span className="text-slate-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Travel Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-800 to-blue-700 bg-clip-text text-transparent mb-6">Getting to VPPCOE</h2>
              
              {/* Transportation Options */}
              <div className="space-y-6">
                {[
                  {
                    icon: FaTrain,
                    title: "By Public Transport",
                    description: "The college is easily accessible from Sion Railway Station (Central Line) and Sion Bus Depot. It's a 10-minute walk from the station.",
                    gradient: "from-blue-50/80 to-cyan-50/80",
                    iconColor: "from-blue-500 to-cyan-600"
                  },
                  {
                    icon: FaCar,
                    title: "By Car",
                    description: "Ample parking space is available within the campus. Use the main gate entrance on Veer Savarkar Marg for direct access to the conference venue.",
                    gradient: "from-indigo-50/80 to-blue-50/80",
                    iconColor: "from-indigo-500 to-blue-600"
                  },
                  {
                    icon: FaBed,
                    title: "Accommodation",
                    description: "Special rates are available at partner hotels near the campus. Contact our hospitality desk for reservations and information.",
                    gradient: "from-cyan-50/80 to-blue-50/80",
                    iconColor: "from-cyan-500 to-blue-600"
                  }
                ].map((item, index) => (
                  <div key={index} className={`bg-gradient-to-r ${item.gradient} rounded-xl p-6 border border-blue-200/30 hover:shadow-lg hover:scale-105 transition-all duration-300 group`}>
                    <div className="flex items-start space-x-4">
                      <div className={`bg-gradient-to-br ${item.iconColor} p-3 rounded-xl group-hover:rotate-12 transition-transform duration-300`}>
                        <item.icon className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-blue-800 mb-3 group-hover:text-indigo-800 transition-colors duration-300">{item.title}</h3>
                        <p className="text-slate-700 leading-relaxed mb-4">{item.description}</p>
                        {index === 2 && (
                          <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-full text-sm font-bold hover:from-blue-700 hover:to-indigo-800 hover:scale-105 transition-all duration-300 transform hover:shadow-lg flex items-center group">
                            <FaBed className="mr-2 group-hover:animate-bounce" />
                            View Accommodation Options
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div 
          id="facilities" 
          data-animate
          className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-16 border border-indigo-200/50 transition-all duration-1000 transform ${
            isVisible.facilities ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-cyan-700 bg-clip-text text-transparent mb-4">Campus Facilities</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-full mx-auto animate-pulse"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaParking, title: "Free Parking", description: "Secure parking for 200+ vehicles", color: "from-blue-500 to-indigo-600" },
              { icon: FaWifi, title: "High-Speed WiFi", description: "Complimentary internet access", color: "from-indigo-500 to-cyan-600" },
              { icon: FaCoffee, title: "Refreshments", description: "Coffee & snacks available", color: "from-cyan-500 to-blue-600" },
              { icon: FaDirections, title: "Easy Access", description: "Wheelchair accessible venue", color: "from-blue-500 to-cyan-600" }
            ].map((facility, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 rounded-xl border border-blue-200/30 hover:shadow-xl hover:scale-105 transition-all duration-500 group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`bg-gradient-to-br ${facility.color} p-4 rounded-full w-fit mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                  <facility.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{facility.title}</h3>
                <p className="text-slate-700 group-hover:text-indigo-800 transition-colors duration-300">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Directions */}
        <div 
          id="contact" 
          data-animate
          className={`text-center bg-gradient-to-r from-blue-600 via-indigo-700 to-cyan-700 rounded-2xl p-12 text-white shadow-2xl transition-all duration-1000 transform ${
            isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          } relative overflow-hidden`}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full animate-bounce" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-cyan-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">Need Directions or Assistance?</h2>
            <p className="text-xl mb-8 opacity-90 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Our support team is here to help you reach the venue and make your visit comfortable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-100 hover:scale-110 transition-all duration-300 transform hover:shadow-lg flex items-center justify-center group">
                <FaDirections className="mr-2 group-hover:animate-pulse" />
                Get Directions
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-blue-600 hover:scale-110 transition-all duration-300 transform hover:shadow-lg flex items-center justify-center group">
                <FaPhoneAlt className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 animate-bounce"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Venue;