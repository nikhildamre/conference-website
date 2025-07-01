import React, { useState, useEffect } from 'react';
import { FaUser, FaUniversity, FaEnvelope, FaLinkedin, FaPhone, FaStar, FaAward, FaChevronDown } from 'react-icons/fa';

const Committees = () => {
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

  const organizingCommittee = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Conference Chair",
      affiliation: "VPPCOE",
      email: "rajesh.kumar@vppcoe.ac.in",
      specialization: "Computer Science",
      experience: "15+ years",
      role: "chair"
    },
    {
      name: "Dr. Priya Sharma",
      position: "Program Chair",
      affiliation: "VPPCOE",
      email: "priya.sharma@vppcoe.ac.in",
      specialization: "Electronics Engineering",
      experience: "12+ years",
      role: "chair"
    },
    {
      name: "Dr. Amit Patel",
      position: "Technical Chair",
      affiliation: "VPPCOE",
      email: "amit.patel@vppcoe.ac.in",
      specialization: "Mechanical Engineering",
      experience: "18+ years",
      role: "chair"
    },
    {
      name: "Dr. Sunita Desai",
      position: "Registration Chair",
      affiliation: "VPPCOE",
      email: "sunita.desai@vppcoe.ac.in",
      specialization: "Information Technology",
      experience: "10+ years",
      role: "chair"
    }
  ];

  const technicalCommittee = [
    {
      name: "Dr. Vikram Singh",
      position: "Senior Review Chair",
      affiliation: "IIT Bombay",
      email: "vikram.singh@iitb.ac.in",
      specialization: "Artificial Intelligence",
      experience: "20+ years",
      role: "senior"
    },
    {
      name: "Dr. Meena Agarwal",
      position: "Review Committee Member",
      affiliation: "IIT Delhi",
      email: "meena.agarwal@iitd.ac.in",
      specialization: "Data Science",
      experience: "14+ years",
      role: "member"
    },
    {
      name: "Dr. Ravi Gupta",
      position: "Review Committee Member",
      affiliation: "COEP",
      email: "ravi.gupta@coep.ac.in",
      specialization: "IoT & Embedded Systems",
      experience: "16+ years",
      role: "member"
    },
    {
      name: "Dr. Kavita Joshi",
      position: "Review Committee Member",
      affiliation: "PICT",
      email: "kavita.joshi@pict.edu",
      specialization: "Cybersecurity",
      experience: "11+ years",
      role: "member"
    }
  ];

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const CommitteeCard = ({ member, index }) => {
    const isChair = member.role === 'chair' || member.role === 'senior';
    
    return (
      <div 
        className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-blue-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
        style={{animationDelay: `${index * 200}ms`}}
        onMouseEnter={() => setHoveredCard(member.name)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
        
        {/* Role Badge */}
        {isChair && (
          <div className="absolute top-4 right-4 z-20">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transform transition-all duration-300 group-hover:scale-110">
              <FaAward className="w-3 h-3" />
              {member.role === 'chair' ? 'Chair' : 'Senior'}
            </div>
          </div>
        )}
        
        <div className="relative">
          {/* Avatar Section */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1 transform transition-all duration-500 group-hover:scale-110">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-indigo-700">
                    {getInitials(member.name)}
                  </span>
                </div>
              </div>
              
              {/* Experience badge */}
              <div className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs px-2 py-1 rounded-full transform transition-all duration-300 group-hover:scale-110">
                {member.experience}
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent">
              {member.name}
            </h3>
            
            <p className="text-indigo-700 font-medium">
              {member.position}
            </p>
            
            <div className="flex items-center justify-center text-slate-600">
              <FaUniversity className="mr-2 text-blue-500 transform transition-all duration-300 group-hover:scale-110" />
              <span className="font-medium">{member.affiliation}</span>
            </div>
            
            <div className="flex justify-center">
              <span className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                {member.specialization}
              </span>
            </div>
            
            {/* Email section - appears on hover */}
            <div className={`transform transition-all duration-500 overflow-hidden ${
              hoveredCard === member.name 
                ? 'max-h-20 opacity-100 translate-y-0' 
                : 'max-h-0 opacity-0 translate-y-4'
            }`}>
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center text-blue-600 hover:text-indigo-700 text-sm font-medium transition-all duration-300 transform hover:scale-105 mt-4"
              >
                <FaEnvelope className="mr-2 text-xs" />
                <span className="truncate">{member.email}</span>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-4 pt-4">
              <button className="p-3 text-indigo-600 hover:text-white hover:bg-indigo-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
                <FaUser className="h-5 w-5" />
              </button>
              <button className="p-3 text-blue-600 hover:text-white hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
                <FaLinkedin className="h-5 w-5" />
              </button>
              <button className="p-3 text-slate-600 hover:text-white hover:bg-slate-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
                <FaPhone className="h-5 w-5" />
              </button>
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
            Conference Committees
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 animate-pulse"></div>
          <p className="text-slate-700 text-xl max-w-3xl mx-auto mb-8">
            Meet the distinguished team of academics and professionals organizing ICATES-2025. 
            Our committees bring together expertise from leading institutions to ensure conference excellence.
          </p>
          
          <FaChevronDown className="text-blue-600 text-2xl mx-auto mt-8 animate-bounce" />
        </div>

        {/* Organizing Committee Section */}
        <div 
          id="organizing-committee"
          data-animate
          className={`mb-20 transition-all duration-1000 ${
            isVisible['organizing-committee'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent mb-4">
              Organizing Committee
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The core team responsible for planning and executing the conference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {organizingCommittee.map((member, index) => (
              <CommitteeCard key={`org-${index}`} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Technical Committee Section */}
        <div 
          id="technical-committee"
          data-animate
          className={`mb-16 transition-all duration-1000 ${
            isVisible['technical-committee'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent mb-4">
              Technical Program Committee
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-4"></div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Expert reviewers ensuring the highest quality of technical content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalCommittee.map((member, index) => (
              <CommitteeCard key={`tech-${index}`} member={member} index={index + 4} />
            ))}
          </div>
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
            <div className="flex items-center justify-center mb-4">
              <FaStar className="text-yellow-300 mr-3" />
              <h2 className="text-4xl font-bold">Have Questions?</h2>
              <FaStar className="text-yellow-300 ml-3" />
            </div>
            <p className="text-xl mb-8 opacity-90">
              Feel free to reach out to any of our committee members for conference-related inquiries
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="group relative overflow-hidden bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <span className="relative z-10 flex items-center">
                  <FaEnvelope className="mr-3" />
                  Contact Us
                  <span className="ml-3 transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaEnvelope className="mr-3" />
                  Contact Us
                  <span className="ml-3">→</span>
                </span>
              </button>
              
              <button className="group relative overflow-hidden border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">View All Members</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute inset-0 z-10 flex items-center justify-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View All Members
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

export default Committees;