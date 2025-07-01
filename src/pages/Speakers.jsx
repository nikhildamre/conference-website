import React, { useState, useEffect } from 'react';
import { FaChalkboardTeacher, FaUniversity, FaGlobe, FaLinkedin, FaTwitter, FaChevronDown } from 'react-icons/fa';

const Speakers = () => {
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

  const speakers = [
    {
      id: 1,
      name: 'Dr. Rajesh Sharma',
      title: 'Professor of Computer Science',
      affiliation: 'IIT Bombay',
      expertise: 'AI & Machine Learning',
      bio: 'Leading researcher in artificial intelligence with 15+ years of experience in machine learning algorithms.',
    },
    {
      id: 2,
      name: 'Dr. Priya Patel',
      title: 'Research Director',
      affiliation: 'MIT, USA',
      expertise: 'Quantum Computing',
      bio: 'Pioneer in quantum computing research, developing next-generation quantum algorithms.',
    },
    {
      id: 3,
      name: 'Dr. Amit Kumar',
      title: 'Chief Scientist',
      affiliation: 'Google Research',
      expertise: 'Natural Language Processing',
      bio: 'Expert in NLP and conversational AI, leading breakthrough research in language models.',
    },
    {
      id: 4,
      name: 'Dr. Sunita Verma',
      title: 'Dean of Engineering',
      affiliation: 'Stanford University',
      expertise: 'Renewable Energy Systems',
      bio: 'Renowned expert in sustainable energy solutions and green technology innovation.',
    },
    {
      id: 5,
      name: 'Dr. Michael Johnson',
      title: 'Director of Research',
      affiliation: 'Microsoft Research',
      expertise: 'Cloud Computing',
      bio: 'Architect of modern cloud infrastructure with focus on scalable distributed systems.',
    },
    {
      id: 6,
      name: 'Dr. Emily Chen',
      title: 'Head of AI Department',
      affiliation: 'ETH Zurich',
      expertise: 'Computer Vision',
      bio: 'Leading computer vision researcher specializing in deep learning and image recognition.',
    },
  ];

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
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
            Keynote Speakers
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 animate-pulse"></div>
          <p className="text-slate-700 text-xl max-w-3xl mx-auto mb-8">
            We are honored to host world-renowned experts who will share their groundbreaking insights 
            and cutting-edge research in various fields of engineering and science.
          </p>
          
          <FaChevronDown className="text-blue-600 text-2xl mx-auto mt-8 animate-bounce" />
        </div>

        {/* Speakers Grid */}
        <div 
          id="speakers-grid"
          data-animate
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${
            isVisible['speakers-grid'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {speakers.map((speaker, index) => (
            <div 
              key={speaker.id}
              className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-blue-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
              style={{animationDelay: `${index * 200}ms`}}
              onMouseEnter={() => setHoveredCard(speaker.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Avatar Section */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1 transform transition-all duration-500 group-hover:scale-110">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center shadow-lg">
                        <span className="text-xl font-bold text-indigo-700">
                          {getInitials(speaker.name)}
                        </span>
                      </div>
                    </div>
                    
                    {/* Floating expertise badge */}
                    <div className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs px-2 py-1 rounded-full transform transition-all duration-300 group-hover:scale-110">
                      Expert
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent">
                    {speaker.name}
                  </h3>
                  
                  <p className="text-indigo-700 font-medium">
                    {speaker.title}
                  </p>
                  
                  <div className="flex items-center justify-center text-slate-600">
                    <FaUniversity className="mr-2 text-blue-500 transform transition-all duration-300 group-hover:scale-110" />
                    <span className="font-medium">{speaker.affiliation}</span>
                  </div>
                  
                  <div className="flex justify-center">
                    <span className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                      {speaker.expertise}
                    </span>
                  </div>
                  
                  {/* Bio section - appears on hover */}
                  <div className={`transform transition-all duration-500 overflow-hidden ${
                    hoveredCard === speaker.id 
                      ? 'max-h-32 opacity-100 translate-y-0' 
                      : 'max-h-0 opacity-0 translate-y-4'
                  }`}>
                    <p className="text-slate-600 text-sm leading-relaxed mt-4 px-2">
                      {speaker.bio}
                    </p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 pt-4">
                    <button className="p-3 text-indigo-600 hover:text-white hover:bg-indigo-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
                      <FaChalkboardTeacher className="h-5 w-5" />
                    </button>
                    <button className="p-3 text-blue-600 hover:text-white hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
                      <FaLinkedin className="h-5 w-5" />
                    </button>
                    <button className="p-3 text-slate-600 hover:text-white hover:bg-slate-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
                      <FaGlobe className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
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
            <h2 className="text-4xl font-bold mb-4">Don't Miss These Inspiring Sessions</h2>
            <p className="text-xl mb-8 opacity-90">
              Register now to secure your spot and learn from industry leaders
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="group relative overflow-hidden bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <span className="relative z-10 flex items-center">
                  <FaChalkboardTeacher className="mr-3" />
                  Register Now
                  <span className="ml-3 transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaChalkboardTeacher className="mr-3" />
                  Register Now
                  <span className="ml-3">→</span>
                </span>
              </button>
              
              <button className="group relative overflow-hidden border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">View Schedule</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute inset-0 z-10 flex items-center justify-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Schedule
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

export default Speakers;