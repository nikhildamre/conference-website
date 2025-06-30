import React, { useState, useEffect } from 'react';
import { FaChalkboardTeacher, FaUniversity, FaGlobe, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Speakers = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      speakers.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index]);
        }, index * 200);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-blue-300/30 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-cyan-200/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Header Section with Animation */}
        <div className="text-center mb-16 transform transition-all duration-1000 ease-out opacity-100 translate-y-0">
          <div className="inline-block mb-6">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-800 bg-clip-text text-transparent animate-pulse">
              Keynote Speakers
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mx-auto mt-6 transform scale-x-0 animate-pulse" style={{animation: 'scaleX 1s ease-out 0.5s forwards'}}></div>
          </div>
          
          <div className="max-w-4xl mx-auto transform transition-all duration-1000 ease-out delay-300">
            <p className="text-xl text-slate-700 leading-relaxed">
              We are honored to host world-renowned experts who will share their groundbreaking insights 
              and cutting-edge research in various fields of engineering and science.
            </p>
          </div>
        </div>
        
        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={speaker.id}
              className={`group relative transform transition-all duration-700 ease-out ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              onMouseEnter={() => setHoveredCard(speaker.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-indigo-100/50 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 group-hover:bg-white/90">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 p-0.5 rounded-2xl">
                  <div className="bg-white rounded-2xl h-full w-full"></div>
                </div>
                
                <div className="relative z-10 p-8">
                  {/* Avatar Section */}
                  <div className="flex justify-center mb-6">
                    <div className="relative group">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-1 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12">
                          <span className="text-2xl font-bold text-indigo-700 transform transition-all duration-300 group-hover:scale-110">
                            {getInitials(speaker.name)}
                          </span>
                        </div>
                      </div>
                      
                      {/* Floating expertise badge */}
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-2 py-1 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                        Expert
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-blue-900 transform transition-all duration-300 group-hover:text-indigo-800">
                      {speaker.name}
                    </h3>
                    
                    <p className="text-indigo-700 font-medium transform transition-all duration-300 group-hover:text-blue-700">
                      {speaker.title}
                    </p>
                    
                    <div className="flex items-center justify-center text-slate-600 transform transition-all duration-300 group-hover:text-slate-700">
                      <FaUniversity className="mr-2 text-cyan-500 transform transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-600" />
                      <span className="font-medium">{speaker.affiliation}</span>
                    </div>
                    
                    <div className="flex justify-center">
                      <span className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium transform transition-all duration-300 group-hover:from-cyan-100 group-hover:to-blue-100 group-hover:scale-105">
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
                      <button className="p-3 text-cyan-600 hover:text-white hover:bg-cyan-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
                        <FaLinkedin className="h-5 w-5" />
                      </button>
                      <button className="p-3 text-blue-600 hover:text-white hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
                        <FaGlobe className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action Section */}
        <div className="text-center mt-20 transform transition-all duration-1000 ease-out">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-indigo-100/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              Don't Miss These Inspiring Sessions
            </h3>
            <p className="text-slate-700 mb-6">
              Register now to secure your spot and learn from industry leaders
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-8 py-3 rounded-full font-medium transform transition-all duration-300 hover:from-cyan-600 hover:to-indigo-700 hover:scale-105 hover:-translate-y-1 hover:shadow-xl">
              Register Now
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Speakers;