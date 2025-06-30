import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaClock, FaCheckCircle, FaPaperPlane, FaBell, FaUsers } from 'react-icons/fa';

const Dates = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

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

  useEffect(() => {
    importantDates.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, index * 150);
    });
  }, []);

  const DateCard = ({ item, index }) => {
    const IconComponent = item.icon;
    const isHighlight = item.status === 'highlight';
    
    return (
      <div 
        className={`group relative transform transition-all duration-700 ease-out ${
          visibleItems.includes(index)
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-95'
        }`}
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className={`relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border h-full transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group-hover:bg-white/95 ${
          isHighlight 
            ? 'border-cyan-200/70 bg-gradient-to-br from-cyan-50/50 to-blue-50/50' 
            : 'border-blue-100/50'
        }`}>
          
          {/* Highlight Badge */}
          {isHighlight && (
            <div className="absolute top-4 right-4 z-20">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transform transition-all duration-300 group-hover:scale-110">
                <FaCalendarAlt className="w-3 h-3" />
                Main Event
              </div>
            </div>
          )}

          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-indigo-600/20 p-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <div className="relative z-10 p-8 h-full flex flex-col">
            
            {/* Icon Section */}
            <div className="flex items-start space-x-4 mb-6">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                isHighlight 
                  ? 'bg-gradient-to-br from-cyan-500 to-blue-600' 
                  : 'bg-gradient-to-br from-blue-500 to-indigo-600'
              }`}>
                <IconComponent className="text-white text-2xl" />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-blue-900 leading-tight group-hover:text-indigo-800 transition-colors duration-300 mb-2">
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
            <div className="flex-1">
              <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Progress indicator */}
            <div className={`mt-4 transform transition-all duration-500 ${
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
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 relative overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-cyan-200/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-200/15 to-indigo-200/15 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-800 bg-clip-text text-transparent">
              Important Dates
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mx-auto mt-4"></div>
          </div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Mark your calendar with these crucial deadlines and conference dates
          </p>
        </div>

        {/* Important Dates Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {importantDates.map((item, index) => (
            <DateCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Conference Schedule Preview */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 rounded-3xl shadow-2xl text-white p-8 overflow-hidden">
            
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-400/10 rounded-full"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-400/10 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-block mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 transition-all duration-300">
                    <FaClock className="text-2xl" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-2">Conference Schedule</h2>
                <p className="text-blue-100">March 15-17, 2025</p>
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
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-blue-100/50">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-800 bg-clip-text text-transparent mb-4">
              Submission Guidelines
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto"></div>
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
    </div>
  );
};

export default Dates;