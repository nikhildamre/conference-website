
import React from 'react';
import { FaUser, FaUniversity, FaEnvelope } from 'react-icons/fa';

const Committees = () => {
  const organizingCommittee = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Conference Chair",
      affiliation: "VPPCOE",
      email: "rajesh.kumar@vppcoe.ac.in",
      image: "https://via.placeholder.com/150x150/4F46E5/ffffff?text=RK"
    },
    {
      name: "Dr. Priya Sharma",
      position: "Program Chair",
      affiliation: "VPPCOE",
      email: "priya.sharma@vppcoe.ac.in",
      image: "https://via.placeholder.com/150x150/059669/ffffff?text=PS"
    },
    {
      name: "Dr. Amit Patel",
      position: "Technical Chair",
      affiliation: "VPPCOE",
      email: "amit.patel@vppcoe.ac.in",
      image: "https://via.placeholder.com/150x150/DC2626/ffffff?text=AP"
    },
    {
      name: "Dr. Sunita Desai",
      position: "Registration Chair",
      affiliation: "VPPCOE",
      email: "sunita.desai@vppcoe.ac.in",
      image: "https://via.placeholder.com/150x150/7C3AED/ffffff?text=SD"
    }
  ];

  const technicalCommittee = [
    {
      name: "Dr. Vikram Singh",
      position: "Senior Review Chair",
      affiliation: "IIT Bombay",
      email: "vikram.singh@iitb.ac.in",
      image: "https://via.placeholder.com/150x150/1F2937/ffffff?text=VS"
    },
    {
      name: "Dr. Meena Agarwal",
      position: "Review Committee Member",
      affiliation: "IIT Delhi",
      email: "meena.agarwal@iitd.ac.in",
      image: "https://via.placeholder.com/150x150/B91C1C/ffffff?text=MA"
    },
    {
      name: "Dr. Ravi Gupta",
      position: "Review Committee Member",
      affiliation: "COEP",
      email: "ravi.gupta@coep.ac.in",
      image: "https://via.placeholder.com/150x150/059669/ffffff?text=RG"
    },
    {
      name: "Dr. Kavita Joshi",
      position: "Review Committee Member",
      affiliation: "PICT",
      email: "kavita.joshi@pict.edu",
      image: "https://via.placeholder.com/150x150/7C2D12/ffffff?text=KJ"
    }
  ];

  const CommitteeCard = ({ member }) => (
    <div className="bg-white rounded-3xl shadow-xl p-8 text-center card-hover animate-scaleIn group">
      <div className="relative mb-6">
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 rounded-full mx-auto border-4 border-emerald-200 group-hover:border-emerald-400 transition-all duration-300"
        />
        <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-emerald-600/20 to-teal-600/20 group-hover:from-emerald-600/30 group-hover:to-teal-600/30 transition-all duration-300"></div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
      <div className="flex items-center justify-center mb-2">
        <FaUser className="text-emerald-600 mr-2" />
        <p className="text-emerald-700 font-semibold">{member.position}</p>
      </div>
      
      <div className="flex items-center justify-center mb-4">
        <FaUniversity className="text-gray-600 mr-2" />
        <p className="text-gray-600">{member.affiliation}</p>
      </div>

      <a
        href={`mailto:${member.email}`}
        className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium transition-colors group/email"
      >
        <FaEnvelope className="mr-2 group-hover/email:scale-110 transition-transform" />
        {member.email}
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-bold gradient-text-primary mb-6">
            Conference Committees
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            Meet the distinguished team of academics and professionals organizing ICATES-2025
          </p>
        </div>

        {/* Organizing Committee */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Organizing Committee</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {organizingCommittee.map((member, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <CommitteeCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* Technical Program Committee */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Program Committee</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalCommittee.map((member, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <CommitteeCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committees;
