import React, { useState, useEffect } from 'react';
import { FaUniversity, FaGraduationCap, FaLightbulb, FaHandshake, FaAward, FaGlobe, FaChevronDown } from 'react-icons/fa';

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeObjective, setActiveObjective] = useState(null);

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

  const objectives = [
    {
      icon: FaGraduationCap,
      title: "Academic Excellence",
      description: "Promote high-quality research and academic discourse across various engineering disciplines.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: FaHandshake,
      title: "Industry Collaboration",
      description: "Foster partnerships between academia and industry for practical solution development.",
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: FaGlobe,
      title: "Global Networking",
      description: "Create opportunities for international collaboration and knowledge exchange.",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: FaAward,
      title: "Innovation Recognition",
      description: "Acknowledge and celebrate breakthrough research and innovative solutions.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: FaLightbulb,
      title: "Technology Transfer",
      description: "Facilitate the translation of research into practical applications and solutions.",
      color: "from-indigo-600 to-blue-700"
    },
    {
      icon: FaUniversity,
      title: "Educational Impact",
      description: "Enhance educational methodologies and pedagogical approaches in engineering.",
      color: "from-blue-700 to-indigo-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-100 pt-20 pb-10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Animated Header */}
        <div 
          id="header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-blue-600 bg-clip-text text-transparent mb-6 animate-gradient-x">
            About the Conference
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-8 animate-pulse"></div>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Join us for an innovative conference that bridges academia and industry, fostering collaboration and advancing technological research.
          </p>
          <FaChevronDown className="text-blue-600 text-2xl mx-auto mt-8 animate-bounce" />
        </div>

        {/* Main Content with staggered animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Conference Overview */}
          <div 
            id="overview"
            data-animate
            className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-200 transition-all duration-1000 hover:shadow-2xl hover:scale-105 ${
              isVisible.overview ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-4 animate-pulse">
                <FaLightbulb className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-indigo-800 bg-clip-text text-transparent">
                Conference Overview
              </h2>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Our conference serves as a premier platform for researchers, academicians, and industry professionals to share cutting-edge research, innovative solutions, and emerging technologies that shape the future.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
              <h3 className="font-bold text-blue-800 text-xl mb-3">Key Highlights</h3>
              <ul className="space-y-3">
                {[
                  "Peer-reviewed research presentations",
                  "Industry keynote speakers", 
                  "Networking opportunities",
                  "Technology exhibitions"
                ].map((item, index) => (
                  <li key={index} className="flex items-center group">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="text-slate-700 group-hover:text-blue-700 transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* About the Institution */}
          <div 
            id="institution"
            data-animate
            className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-200 transition-all duration-1000 hover:shadow-2xl hover:scale-105 ${
              isVisible.institution ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{animationDelay: '200ms'}}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full mr-4 animate-pulse" style={{animationDelay: '1s'}}>
                <FaUniversity className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-900 to-blue-800 bg-clip-text text-transparent">
                About VPPCE
              </h2>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Vasantdada Patil Pratishthan's College of Engineering is a premier educational institution committed to excellence in engineering education and research innovation.
            </p>
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
              <h3 className="font-bold text-indigo-800 text-xl mb-3">Our Legacy</h3>
              <ul className="space-y-3">
                {[
                  "Established center of academic excellence",
                  "Strong industry connections",
                  "Research-focused curriculum",
                  "Innovation and entrepreneurship hub"
                ].map((item, index) => (
                  <li key={index} className="flex items-center group">
                    <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="text-slate-700 group-hover:text-indigo-700 transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Conference Objectives with enhanced animations */}
        <div 
          id="objectives"
          data-animate
          className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-16 border border-blue-200 transition-all duration-1000 ${
            isVisible.objectives ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-700 bg-clip-text text-transparent mb-4">
              Conference Objectives
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto animate-pulse"></div>
            <p className="text-slate-600 mt-4 text-lg">Driving innovation through collaborative excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden bg-gradient-to-br from-white to-blue-50/50 rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-500 hover:shadow-xl cursor-pointer transform hover:-translate-y-2 ${
                  activeObjective === index ? 'scale-105 shadow-2xl' : ''
                }`}
                onClick={() => setActiveObjective(activeObjective === index ? null : index)}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${objective.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-6 text-center">
                  <div className="mb-6 relative">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${objective.color} p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <objective.icon className="text-2xl text-white w-full h-full" />
                    </div>
                    {/* Animated ring */}
                    <div className={`absolute inset-0 w-16 h-16 mx-auto rounded-full border-2 border-blue-300 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500`}></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-indigo-700 transition-colors duration-300">
                    {objective.title}
                  </h3>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${
                    activeObjective === index ? 'max-h-40 opacity-100' : 'max-h-20 opacity-75'
                  }`}>
                    <p className="text-slate-700 leading-relaxed">
                      {objective.description}
                    </p>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div 
          id="cta"
          data-animate
          className={`relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-800 rounded-2xl p-12 text-white transition-all duration-1000 ${
            isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-transparent to-indigo-400/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
            <div className="absolute top-8 right-8 w-3 h-3 bg-white/20 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-6 left-1/3 w-2 h-2 bg-white/25 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-4 animate-pulse">Join Us in Shaping the Future</h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of an extraordinary gathering of minds that drives innovation and technological advancement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="group relative overflow-hidden bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <span className="relative z-10">Register Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Register Now</span>
              </button>
              <button className="group relative overflow-hidden border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">Submit Paper</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute inset-0 z-10 flex items-center justify-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Submit Paper</span>
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

export default About;