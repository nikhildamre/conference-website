import React, { useState, useEffect } from 'react';
import { FaPaperPlane, FaCalendarAlt, FaFileAlt, FaCheckCircle, FaRocket, FaClock, FaUsers, FaChevronDown } from 'react-icons/fa';

const CallForPapers = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTrack, setActiveTrack] = useState(null);
  const [countdownDays, setCountdownDays] = useState(0);

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

    // Countdown to submission deadline
    const deadline = new Date('2025-03-15');
    const today = new Date();
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setCountdownDays(diffDays > 0 ? diffDays : 0);

    return () => observer.disconnect();
  }, []);

  const tracks = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Deep learning, neural networks, AI applications",
      icon: "🤖"
    },
    {
      title: "Internet of Things & Smart Systems", 
      description: "Connected devices, smart cities, IoT security",
      icon: "🌐"
    },
    {
      title: "Cybersecurity & Information Security",
      description: "Network security, cryptography, privacy",
      icon: "🔒"
    },
    {
      title: "Sustainable Engineering & Green Technology",
      description: "Environmental solutions, clean technology",
      icon: "🌱"
    },
    {
      title: "Biomedical Engineering & Healthcare Technology",
      description: "Medical devices, healthcare informatics",
      icon: "⚕️"
    },
    {
      title: "Advanced Materials & Nanotechnology",
      description: "Nanomaterials, smart materials, composites",
      icon: "🔬"
    },
    {
      title: "Renewable Energy & Power Systems",
      description: "Solar, wind, energy storage, smart grids",
      icon: "⚡"
    },
    {
      title: "Robotics & Automation",
      description: "Industrial robots, autonomous systems",
      icon: "🤖"
    },
    {
      title: "Data Science & Big Data Analytics",
      description: "Machine learning, data mining, analytics",
      icon: "📊"
    },
    {
      title: "Computer Vision & Image Processing",
      description: "Image analysis, pattern recognition",
      icon: "👁️"
    }
  ];

  const importantDates = [
    { 
      event: "Paper Submission Deadline", 
      date: "March 15, 2025",
      icon: FaCalendarAlt,
      color: "from-red-500 to-pink-600",
      urgent: true
    },
    { 
      event: "Notification of Acceptance", 
      date: "April 10, 2025",
      icon: FaCheckCircle,
      color: "from-blue-500 to-indigo-600"
    },
    { 
      event: "Camera Ready Submission", 
      date: "April 25, 2025",
      icon: FaFileAlt,
      color: "from-indigo-500 to-purple-600"
    },
    { 
      event: "Conference Dates", 
      date: "May 15-17, 2025",
      icon: FaUsers,
      color: "from-green-500 to-emerald-600"
    }
  ];

  const guidelines = [
    {
      text: "Papers must be original and not published elsewhere",
      icon: "📝",
      detail: "Ensure your work is novel and hasn't been submitted to other venues"
    },
    {
      text: "Maximum 8 pages including references (IEEE format)",
      icon: "📄",
      detail: "Follow IEEE double-column format with proper citations"
    },
    {
      text: "Submit through EasyChair submission system",
      icon: "💻",
      detail: "Create an account and follow the submission guidelines"
    },
    {
      text: "All papers will undergo peer review",
      icon: "👥",
      detail: "Double-blind review process by domain experts"
    },
    {
      text: "Accepted papers will be published in conference proceedings",
      icon: "📚",
      detail: "Indexed in major databases with ISBN/ISSN"
    }
  ];

  const paperTypes = [
    {
      icon: FaFileAlt,
      title: "Research Papers",
      description: "Submit original research contributions with novel findings and methodologies",
      color: "from-blue-500 to-indigo-600",
      features: ["8 pages max", "Peer reviewed", "Full proceedings"]
    },
    {
      icon: FaCheckCircle,
      title: "Short Papers",
      description: "Present work-in-progress, preliminary results, or innovative ideas",
      color: "from-indigo-500 to-purple-600",
      features: ["4 pages max", "Fast track", "Poster session"]
    },
    {
      icon: FaRocket,
      title: "Industry Papers",
      description: "Share practical applications and real-world implementations",
      color: "from-purple-500 to-pink-600",
      features: ["6 pages max", "Industry track", "Best paper award"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-100 pt-20 pb-10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Header with countdown */}
        <div 
          id="header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-600 bg-clip-text text-transparent mb-6 animate-gradient-x">
            Call for Papers
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 animate-pulse"></div>
          <p className="text-slate-700 text-xl max-w-3xl mx-auto mb-8">
            Submit your cutting-edge research to ICATES-2025 and join the global conversation on emerging technologies
          </p>
          
          {/* Countdown Badge */}
          {countdownDays > 0 && (
            <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg animate-bounce">
              <FaClock className="mr-2" />
              <span className="font-bold">{countdownDays} days left to submit!</span>
            </div>
          )}
          
          <FaChevronDown className="text-blue-600 text-2xl mx-auto mt-8 animate-bounce" />
        </div>

        {/* Paper Types */}
        <div 
          id="paper-types"
          data-animate
          className={`grid lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${
            isVisible['paper-types'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {paperTypes.map((type, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-blue-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
              style={{animationDelay: `${index * 200}ms`}}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <type.icon className="text-white text-2xl" />
                </div>
                
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent text-center mb-4">
                  {type.title}
                </h3>
                
                <p className="text-slate-700 text-center mb-6">
                  {type.description}
                </p>
                
                <div className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-600">
                      <div className={`w-2 h-2 bg-gradient-to-r ${type.color} rounded-full mr-3`}></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Tracks */}
        <div 
          id="tracks"
          data-animate
          className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-16 border border-blue-200 transition-all duration-1000 ${
            isVisible.tracks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-indigo-800 bg-clip-text text-transparent mb-8 text-center">
            Research Tracks
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tracks.map((track, index) => (
              <div
                key={index}
                className="group flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 cursor-pointer"
                onClick={() => setActiveTrack(activeTrack === index ? null : index)}
              >
                <div className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {track.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                    {track.title}
                  </h3>
                  <div className={`overflow-hidden transition-all duration-500 ${
                    activeTrack === index ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-sm text-slate-600">{track.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Dates & Guidelines */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Important Dates */}
          <div 
            id="dates"
            data-animate
            className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-200 transition-all duration-1000 ${
              isVisible.dates ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-indigo-800 bg-clip-text text-transparent mb-6">
              Important Dates
            </h2>
            <div className="space-y-4">
              {importantDates.map((item, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden p-4 rounded-xl border-2 transition-all duration-300 ${
                    item.urgent 
                      ? 'border-red-200 bg-gradient-to-r from-red-50 to-pink-50 hover:border-red-300' 
                      : 'border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} text-white`}>
                        <item.icon className="text-sm" />
                      </div>
                      <span className="font-medium text-slate-900">{item.event}</span>
                    </div>
                    <span className={`font-bold ${item.urgent ? 'text-red-700' : 'text-blue-700'}`}>
                      {item.date}
                    </span>
                  </div>
                  {item.urgent && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Submission Guidelines */}
          <div 
            id="guidelines"
            data-animate
            className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-200 transition-all duration-1000 ${
              isVisible.guidelines ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-900 to-blue-800 bg-clip-text text-transparent mb-6">
              Submission Guidelines
            </h2>
            <div className="space-y-4">
              {guidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {guideline.icon}
                    </div>
                    <div>
                      <span className="text-slate-800 font-medium">{guideline.text}</span>
                      <p className="text-sm text-slate-600 mt-1 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                        {guideline.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div 
          id="cta"
          data-animate
          className={`relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 rounded-2xl p-12 text-white text-center transition-all duration-1000 ${
            isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-transparent to-purple-400/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
            <div className="absolute top-8 right-8 w-3 h-3 bg-white/20 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-6 left-1/3 w-2 h-2 bg-white/25 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Ready to Share Your Innovation?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join researchers worldwide in presenting groundbreaking solutions
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="group relative overflow-hidden bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <span className="relative z-10 flex items-center">
                  <FaPaperPlane className="mr-3" />
                  Submit Your Paper
                  <span className="ml-3 transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaPaperPlane className="mr-3" />
                  Submit Your Paper
                  <span className="ml-3">→</span>
                </span>
              </button>
              
              <button className="group relative overflow-hidden border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">Download Template</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute inset-0 z-10 flex items-center justify-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Download Template
                </span>
              </button>
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

export default CallForPapers;