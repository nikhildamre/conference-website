import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaClock, FaCheckCircle, FaPaperPlane, FaBell, FaUsers, FaChevronDown } from 'react-icons/fa';

const Dates = () => {
  const [isVisible, setIsVisible] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

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

    return () => observer.disconnect();
  }, []);

  const importantDates = [
    {
      title: "Abstract Submission Deadline",
      date: "November 30, 2024",
      description: "Submit your abstract for review",
      icon: FaPaperPlane,
      status: "upcoming"
    },
    {
      title: "Full Paper Submission",
      date: "December 15, 2024",
      description: "Complete paper submission deadline",
      icon: FaCheckCircle,
      status: "upcoming"
    },
    {
      title: "Notification of Acceptance",
      date: "January 25, 2025",
      description: "Authors will be notified of paper acceptance",
      icon: FaBell,
      status: "upcoming"
    },
    {
      title: "Final Paper Submission",
      date: "February 10, 2025",
      description: "Camera-ready paper submission",
      icon: FaCheckCircle,
      status: "upcoming"
    },
    {
      title: "Early Bird Registration",
      date: "February 20, 2025",
      description: "Register early for discounted rates",
      icon: FaUsers,
      status: "upcoming"
    },
    {
      title: "Conference Dates",
      date: "March 15-17, 2025",
      description: "Three days of presentations and networking",
      icon: FaCalendarAlt,
      status: "highlight"
    }
  ];

  const DateCard = ({ item, index }) => {
    const IconComponent = item.icon;
    const isHighlight = item.status === 'highlight';
    
    return (
      <div 
        className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-blue-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
        style={{animationDelay: `${index * 200}ms`}}
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
          isHighlight 
            ? 'from-cyan-500 to-blue-600' 
            : 'from-blue-500 to-indigo-600'
        }`}></div>
        
        <div className="relative">
          {/* Highlight Badge */}
          {isHighlight && (
            <div className="absolute -top-4 -right-4 z-20">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transform transition-all duration-300 group-hover:scale-110">
                <FaCalendarAlt className="w-3 h-3" />
                Main Event
              </div>
            </div>
          )}

          {/* Icon Section */}
          <div className="flex items-start space-x-4 mb-6">
            <div className="relative">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                isHighlight 
                  ? 'bg-gradient-to-br from-cyan-500 to-blue-600' 
                  : 'bg-gradient-to-br from-blue-500 to-indigo-600'
              }`}>
                <IconComponent className="text-white text-2xl" />
              </div>
              
              {/* Floating status badge */}
              <div className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs px-2 py-1 rounded-full transform transition-all duration-300 group-hover:scale-110">
                {isHighlight ? 'Event' : 'Deadline'}
              </div>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent leading-tight mb-2">
                {item.title}
              </h3>
              <div className={`text-lg font-semibold mb-2 ${
                isHighlight ? 'text-cyan-700' : 'text-indigo-700'
              }`}>
                {item.date}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Progress indicator */}
          <div className={`transform transition-all duration-500 ${
            hoveredCard === index 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-2'
          }`}>
            <div className="w-full bg-blue-100 rounded-full h-1.5">
              <div className={`h-1.5 rounded-full transition-all duration-700 ${
                isHighlight 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 w-full' 
                  : 'bg-gradient-to-r from-blue-500 to-indigo-600 w-3/4'
              }`}></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-100 pt-20 pb-10 relative overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        
        {/* Header with Animation */}
        <div 
          id="header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-600 bg-clip-text text-transparent mb-6 animate-gradient-x">
            Important Dates
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 animate-pulse"></div>
          <p className="text-slate-700 text-xl max-w-3xl mx-auto mb-8">
            Mark your calendar with these crucial deadlines and conference dates
          </p>
          
          <FaChevronDown className="text-blue-600 text-2xl mx-auto mt-8 animate-bounce" />
        </div>

        {/* Important Dates Grid */}
        <div 
          id="dates-grid"
          data-animate
          className={`grid lg:grid-cols-2 gap-8 mb-16 transition-all duration-1000 ${
            isVisible['dates-grid'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {importantDates.map((item, index) => (
            <DateCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Conference Schedule Preview */}
        <div 
          id="schedule"
          data-animate
          className={`relative mb-16 transition-all duration-1000 ${
            isVisible.schedule ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 rounded-2xl p-12 text-white">
            
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-transparent to-purple-400/20 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
              <div className="absolute top-8 right-8 w-3 h-3 bg-white/20 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-6 left-1/3 w-2 h-2 bg-white/25 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-block mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 transition-all duration-300">
                    <FaClock className="text-2xl" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold mb-4">Conference Schedule</h2>
                <p className="text-xl opacity-90">March 15-17, 2025</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { day: "Day 1", date: "March 15, 2025", event: "Opening Ceremony & Keynote" },
                  { day: "Day 2", date: "March 16, 2025", event: "Technical Sessions & Workshops" },
                  { day: "Day 3", date: "March 17, 2025", event: "Poster Sessions & Closing" }
                ].map((schedule, index) => (
                  <div key={index} className="group">
                    <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 transform transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:-translate-y-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-200 transition-colors duration-300">
                        {schedule.day}
                      </h3>
                      <p className="text-blue-100 mb-2 font-medium">{schedule.date}</p>
                      <p className="text-sm text-blue-200">{schedule.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Submission Guidelines */}
        <div 
          id="guidelines"
          data-animate
          className={`bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-blue-100/50 transition-all duration-1000 ${
            isVisible.guidelines ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-600 bg-clip-text text-transparent mb-4">
              Submission Guidelines
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100/50 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                    <FaCheckCircle className="text-white text-sm" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">Paper Requirements</h3>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    All submissions must be original and not published elsewhere
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Papers should be submitted in IEEE format
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Maximum length: 6 pages including references
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Submissions will undergo double-blind peer review
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100/50 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <FaUsers className="text-white text-sm" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">Registration</h3>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    At least one author must register for the conference
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Early bird registration available until February 20
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Student discounts available
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Group registration discounts for 5+ participants
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Dates;