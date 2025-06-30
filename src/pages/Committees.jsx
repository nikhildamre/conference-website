import React, { useState, useEffect } from 'react';
import { FaUser, FaUniversity, FaEnvelope, FaLinkedin, FaPhone, FaStar, FaAward } from 'react-icons/fa';

const Committees = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  const organizingCommittee = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Conference Chair",
      affiliation: "VPPCOE",
      email: "rajesh.kumar@vppcoe.ac.in",
      specialization: "Computer Science",
      experience: "15+ years",
      image: "https://via.placeholder.com/200x200/4F46E5/ffffff?text=RK",
      role: "chair"
    },
    {
      name: "Dr. Priya Sharma",
      position: "Program Chair",
      affiliation: "VPPCOE",
      email: "priya.sharma@vppcoe.ac.in",
      specialization: "Electronics Engineering",
      experience: "12+ years",
      image: "https://via.placeholder.com/200x200/059669/ffffff?text=PS",
      role: "chair"
    },
    {
      name: "Dr. Amit Patel",
      position: "Technical Chair",
      affiliation: "VPPCOE",
      email: "amit.patel@vppcoe.ac.in",
      specialization: "Mechanical Engineering",
      experience: "18+ years",
      image: "https://via.placeholder.com/200x200/DC2626/ffffff?text=AP",
      role: "chair"
    },
    {
      name: "Dr. Sunita Desai",
      position: "Registration Chair",
      affiliation: "VPPCOE",
      email: "sunita.desai@vppcoe.ac.in",
      specialization: "Information Technology",
      experience: "10+ years",
      image: "https://via.placeholder.com/200x200/7C3AED/ffffff?text=SD",
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
      image: "https://via.placeholder.com/200x200/1F2937/ffffff?text=VS",
      role: "senior"
    },
    {
      name: "Dr. Meena Agarwal",
      position: "Review Committee Member",
      affiliation: "IIT Delhi",
      email: "meena.agarwal@iitd.ac.in",
      specialization: "Data Science",
      experience: "14+ years",
      image: "https://via.placeholder.com/200x200/B91C1C/ffffff?text=MA",
      role: "member"
    },
    {
      name: "Dr. Ravi Gupta",
      position: "Review Committee Member",
      affiliation: "COEP",
      email: "ravi.gupta@coep.ac.in",
      specialization: "IoT & Embedded Systems",
      experience: "16+ years",
      image: "https://via.placeholder.com/200x200/059669/ffffff?text=RG",
      role: "member"
    },
    {
      name: "Dr. Kavita Joshi",
      position: "Review Committee Member",
      affiliation: "PICT",
      email: "kavita.joshi@pict.edu",
      specialization: "Cybersecurity",
      experience: "11+ years",
      image: "https://via.placeholder.com/200x200/7C2D12/ffffff?text=KJ",
      role: "member"
    }
  ];

  useEffect(() => {
    const totalCards = organizingCommittee.length + technicalCommittee.length;
    organizingCommittee.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, `org-${index}`]);
      }, index * 100);
    });
    
    technicalCommittee.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, `tech-${index}`]);
      }, (organizingCommittee.length + index) * 100 + 500);
    });
  }, []);

  const CommitteeCard = ({ member, index, cardId }) => {
    const isChair = member.role === 'chair' || member.role === 'senior';
    
    return (
      <div 
        className={`group relative transform transition-all duration-700 ease-out ${
          visibleCards.includes(cardId)
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-95'
        }`}
        onMouseEnter={() => setHoveredCard(cardId)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-blue-100/50 h-full transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group-hover:bg-white/95">
          
          {/* Role Badge */}
          {isChair && (
            <div className="absolute top-4 right-4 z-20">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transform transition-all duration-300 group-hover:scale-110">
                <FaAward className="w-3 h-3" />
                {member.role === 'chair' ? 'Chair' : 'Senior'}
              </div>
            </div>
          )}

          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-indigo-600/20 p-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <div className="relative z-10 p-6 h-full flex flex-col">
            
            {/* Avatar Section */}
            <div className="text-center mb-4">
              <div className="relative inline-block">
                <div className="w-20 h-20 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-full p-0.5 transform transition-all duration-500 group-hover:scale-110">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Experience badge */}
                <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-xs px-2 py-0.5 rounded-full transform transition-all duration-300 group-hover:scale-110">
                  {member.experience}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3 text-center">
              <div>
                <h3 className="text-lg font-bold text-blue-900 leading-tight group-hover:text-indigo-800 transition-colors duration-300">
                  {member.name}
                </h3>
                
                <div className="flex items-center justify-center text-indigo-700 mt-1 group-hover:text-blue-700 transition-colors duration-300">
                  <FaUser className="mr-1 text-cyan-500 text-sm" />
                  <p className="font-medium text-sm">{member.position}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                <FaUniversity className="mr-1 text-blue-500 text-sm" />
                <p className="text-sm font-medium">{member.affiliation}</p>
              </div>

              {/* Specialization Badge */}
              <div className="flex justify-center">
                <span className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium border border-blue-100 group-hover:from-cyan-50 group-hover:to-blue-50 transition-all duration-300">
                  {member.specialization}
                </span>
              </div>

              {/* Email Contact */}
              <div className="pt-2">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center text-cyan-600 hover:text-indigo-700 text-xs font-medium transition-all duration-300 transform hover:scale-105 group/email"
                >
                  <FaEnvelope className="mr-1 text-xs" />
                  <span className="truncate max-w-full">{member.email}</span>
                </a>
              </div>

              {/* Social Links */}
              <div className={`flex justify-center space-x-2 pt-2 transform transition-all duration-500 ${
                hoveredCard === cardId 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-2'
              }`}>
                <button className="p-1.5 text-indigo-600 hover:text-white hover:bg-indigo-600 rounded-full transition-all duration-300 transform hover:scale-110">
                  <FaLinkedin className="h-3 w-3" />
                </button>
                <button className="p-1.5 text-cyan-600 hover:text-white hover:bg-cyan-600 rounded-full transition-all duration-300 transform hover:scale-110">
                  <FaPhone className="h-3 w-3" />
                </button>
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-800 bg-clip-text text-transparent">
              Conference Committees
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mx-auto mt-4"></div>
          </div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Meet the distinguished team of academics and professionals organizing ICATES-2025
          </p>
        </div>

        {/* Organizing Committee Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-3">
              Organizing Committee
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto"></div>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              The core team responsible for planning and executing the conference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizingCommittee.map((member, index) => (
              <CommitteeCard key={`org-${index}`} member={member} index={index} cardId={`org-${index}`} />
            ))}
          </div>
        </div>

        {/* Technical Committee Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-3">
              Technical Program Committee
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto"></div>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              Expert reviewers ensuring the highest quality of technical content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalCommittee.map((member, index) => (
              <CommitteeCard key={`tech-${index}`} member={member} index={index} cardId={`tech-${index}`} />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-indigo-100/50 max-w-4xl mx-auto shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <FaStar className="text-cyan-500 mr-2" />
              <h3 className="text-2xl font-bold text-indigo-900">
                Have Questions?
              </h3>
              <FaStar className="text-cyan-500 ml-2" />
            </div>
            <p className="text-slate-700 mb-6">
              Feel free to reach out to any of our committee members for conference-related inquiries
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-8 py-3 rounded-full font-medium transform transition-all duration-300 hover:from-cyan-600 hover:to-indigo-700 hover:scale-105 hover:-translate-y-1 hover:shadow-xl">
                Contact Us
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-medium transform transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:scale-105 hover:-translate-y-1">
                View All Members
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committees;