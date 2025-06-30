import React, { useState, useEffect } from 'react';
import { FaBook, FaAward, FaDownload, FaExternalLinkAlt, FaCalendarAlt, FaUsers, FaCheckCircle, FaArrowUp } from 'react-icons/fa';

const Publication = () => {
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
            Publication Guidelines
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-full mx-auto mb-8 animate-pulse"></div>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            Comprehensive guidelines for publishing your research in our prestigious conference proceedings.
          </p>
        </div>

        {/* Publication Info */}
        <div 
          id="publication-info" 
          data-animate
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 transition-all duration-1000 transform ${
            isVisible['publication-info'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl mr-4 group-hover:rotate-12 transition-transform duration-300">
                <FaBook className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-indigo-800 bg-clip-text text-transparent">Conference Proceedings</h2>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              All accepted papers will be published in the official conference proceedings with ISBN registration and will be available for download.
            </p>
            <div className="bg-gradient-to-r from-blue-100/80 to-indigo-100/80 p-6 rounded-xl border border-blue-200/30">
              <h3 className="font-bold text-blue-800 text-xl mb-3 flex items-center">
                <FaCheckCircle className="text-cyan-600 mr-2" />
                Publication Features
              </h3>
              <ul className="space-y-3 text-slate-700">
                {['ISBN registered proceedings', 'Digital and print versions', 'Open access availability', 'DOI assignment for papers'].map((item, index) => (
                  <li key={index} className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mr-3 animate-pulse" style={{ animationDelay: `${index * 0.2}s` }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-indigo-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-indigo-500 to-blue-600 p-3 rounded-xl mr-4 group-hover:rotate-12 transition-transform duration-300">
                <FaAward className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-900 to-blue-800 bg-clip-text text-transparent">Journal Publication</h2>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Selected high-quality papers will be recommended for publication in reputed international journals after extended review.
            </p>
            <div className="bg-gradient-to-r from-indigo-100/80 to-blue-100/80 p-6 rounded-xl border border-indigo-200/30">
              <h3 className="font-bold text-indigo-800 text-xl mb-3 flex items-center">
                <FaCheckCircle className="text-cyan-600 mr-2" />
                Journal Benefits
              </h3>
              <ul className="space-y-3 text-slate-700">
                {['Scopus indexed journals', 'Fast-track review process', 'International visibility', 'Citation tracking'].map((item, index) => (
                  <li key={index} className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-full mr-3 animate-pulse" style={{ animationDelay: `${index * 0.2}s` }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Publication Guidelines */}
        <div 
          id="guidelines" 
          data-animate
          className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-16 border border-blue-200/50 transition-all duration-1000 transform ${
            isVisible.guidelines ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-slate-800 bg-clip-text text-transparent mb-4">Publication Guidelines</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-full mx-auto animate-pulse"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                {
                  title: "Format Requirements",
                  items: ["Paper length: 6-8 pages maximum", "IEEE format template mandatory", "Times New Roman, 10pt font", "Double column format", "High-resolution figures (300 DPI)"],
                  gradient: "from-blue-50/80 to-indigo-50/80",
                  border: "border-blue-200/30"
                },
                {
                  title: "Content Guidelines", 
                  items: ["Original research work only", "Proper citation format", "Abstract: 150-200 words", "Keywords: 4-6 relevant terms", "References: Minimum 15 citations"],
                  gradient: "from-indigo-50/80 to-cyan-50/80",
                  border: "border-indigo-200/30"
                }
              ].map((section, sectionIndex) => (
                <div key={sectionIndex} className={`bg-gradient-to-r ${section.gradient} p-6 rounded-xl border ${section.border} hover:shadow-lg transition-all duration-300 group`}>
                  <h3 className="text-xl font-bold text-blue-800 mb-4 group-hover:text-indigo-800 transition-colors duration-300">{section.title}</h3>
                  <ul className="space-y-3 text-slate-700">
                    {section.items.map((item, index) => (
                      <li key={index} className="flex items-start transform hover:translate-x-1 transition-transform duration-200">
                        <span className="text-cyan-600 mr-2 mt-1">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Submission Process",
                  items: ["Submit via conference portal", "PDF format only", "Include copyright form", "Author registration required", "Camera-ready deadline strict"],
                  gradient: "from-cyan-50/80 to-blue-50/80",
                  border: "border-cyan-200/30"
                },
                {
                  title: "Review Process",
                  items: ["Double-blind peer review", "Minimum 3 reviewers", "4-week review cycle", "Revision opportunity provided", "Final decision notification"],
                  gradient: "from-blue-50/80 to-slate-50/80",
                  border: "border-blue-200/30"
                }
              ].map((section, sectionIndex) => (
                <div key={sectionIndex} className={`bg-gradient-to-r ${section.gradient} p-6 rounded-xl border ${section.border} hover:shadow-lg transition-all duration-300 group`}>
                  <h3 className="text-xl font-bold text-indigo-800 mb-4 group-hover:text-blue-800 transition-colors duration-300">{section.title}</h3>
                  <ul className="space-y-3 text-slate-700">
                    {section.items.map((item, index) => (
                      <li key={index} className="flex items-start transform hover:translate-x-1 transition-transform duration-200">
                        <span className="text-indigo-600 mr-2 mt-1">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Dates */}
        <div 
          id="dates" 
          data-animate
          className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-16 border border-indigo-200/50 transition-all duration-1000 transform ${
            isVisible.dates ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent mb-4">Important Publication Dates</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-600 rounded-full mx-auto animate-pulse"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { date: "June 15, 2025", event: "Paper Submission Deadline", icon: FaCalendarAlt, color: "from-blue-500 to-indigo-600" },
              { date: "July 20, 2025", event: "Review Results", icon: FaUsers, color: "from-indigo-500 to-blue-600" },
              { date: "August 10, 2025", event: "Camera-Ready Submission", icon: FaDownload, color: "from-cyan-500 to-blue-600" },
              { date: "October 04, 2025", event: "Conference Proceedings", icon: FaBook, color: "from-blue-500 to-cyan-600" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 rounded-xl border border-blue-200/30 hover:shadow-xl hover:scale-105 transition-all duration-500 group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`bg-gradient-to-br ${item.color} p-3 rounded-full w-fit mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                  <item.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{item.date}</h3>
                <p className="text-slate-700 group-hover:text-indigo-800 transition-colors duration-300">{item.event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div 
          id="download" 
          data-animate
          className={`text-center bg-gradient-to-r from-blue-600 via-indigo-700 to-cyan-700 rounded-2xl p-12 text-white shadow-2xl transition-all duration-1000 transform ${
            isVisible.download ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          } relative overflow-hidden`}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full animate-bounce" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-cyan-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">Download Resources</h2>
            <p className="text-xl mb-8 opacity-90 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Get all the necessary templates and guidelines for your paper submission.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-100 hover:scale-110 transition-all duration-300 transform hover:shadow-lg flex items-center justify-center group">
                <FaDownload className="mr-2 group-hover:animate-bounce" />
                IEEE Template
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-blue-600 hover:scale-110 transition-all duration-300 transform hover:shadow-lg flex items-center justify-center group">
                <FaExternalLinkAlt className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Submission Portal
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

export default Publication;