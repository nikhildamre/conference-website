import React from 'react';

const Committees = () => {
  const committees = [
    {
      name: "Organizing Committee",
      members: [
        "Dr. Sanjay Sharma (Chair)",
        "Dr. Meera Patel (Co-Chair)",
        "Prof. Rajesh Kumar (Coordinator)",
        "Dr. Anjali Deshpande",
        "Prof. Vikram Singh"
      ]
    },
    {
      name: "Technical Program Committee",
      members: [
        "Dr. Priya Reddy (Chair)",
        "Dr. Amit Joshi",
        "Dr. Sunita Verma",
        "Dr. Ramesh Kumar",
        "Dr. Neha Sharma"
      ]
    },
    {
      name: "Advisory Board",
      members: [
        "Dr. R.K. Mishra (IIT Bombay)",
        "Dr. S. Patel (MIT, USA)",
        "Dr. M. Johnson (Stanford University)",
        "Dr. A. Khan (Cambridge University)",
        "Dr. L. Chen (NUS, Singapore)"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Conference Committees
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mt-4"></div>
        </h1>
        
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-lg text-gray-700">
            Our dedicated committees work together to ensure a successful and impactful conference experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {committees.map((committee, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100"
            >
              <div className="p-1 bg-gradient-to-r from-cyan-500 to-blue-600">
                <div className="bg-white p-6">
                  <h2 className="text-xl font-bold text-blue-900 mb-4">{committee.name}</h2>
                  <ul className="space-y-3">
                    {committee.members.map((member, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-cyan-600 mr-2">•</span>
                        <span className="text-gray-700">{member}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Committees;
import React from 'react';
import { FaUser, FaUniversity, FaEnvelope } from 'react-icons/fa';

const Committees = () => {
  const committees = [
    {
      title: "Organizing Committee",
      members: [
        { name: "Dr. Rajesh Kumar", role: "Conference Chair", affiliation: "VPPCOE, Mumbai", email: "rajesh@vppcoe.edu" },
        { name: "Prof. Anita Sharma", role: "Co-Chair", affiliation: "VPPCOE, Mumbai", email: "anita@vppcoe.edu" },
        { name: "Dr. Sunil Patel", role: "Secretary", affiliation: "VPPCOE, Mumbai", email: "sunil@vppcoe.edu" }
      ]
    },
    {
      title: "Technical Program Committee",
      members: [
        { name: "Dr. Michael Johnson", role: "Program Chair", affiliation: "MIT, USA", email: "mjohnson@mit.edu" },
        { name: "Prof. Sarah Chen", role: "Co-Chair", affiliation: "Stanford University", email: "schen@stanford.edu" },
        { name: "Dr. Priya Gupta", role: "Track Chair - AI/ML", affiliation: "IIT Delhi", email: "priya@iitd.ac.in" },
        { name: "Prof. David Wilson", role: "Track Chair - Robotics", affiliation: "Oxford University", email: "dwilson@ox.ac.uk" }
      ]
    },
    {
      title: "Advisory Committee",
      members: [
        { name: "Dr. Robert Smith", role: "Advisor", affiliation: "Harvard University", email: "rsmith@harvard.edu" },
        { name: "Prof. Lisa Zhang", role: "Advisor", affiliation: "Cambridge University", email: "lzhang@cam.ac.uk" },
        { name: "Dr. Amit Verma", role: "Industry Advisor", affiliation: "Google Research", email: "averma@google.com" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-emerald-900 mb-8 text-center">
          Committees
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mt-4"></div>
        </h1>
        
        <div className="space-y-12">
          {committees.map((committee, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6 text-center">
                {committee.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {committee.members.map((member, memberIndex) => (
                  <div key={memberIndex} className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <FaUser className="text-emerald-600 mr-2" />
                      <h3 className="font-bold text-emerald-800">{member.name}</h3>
                    </div>
                    <p className="text-emerald-600 font-medium mb-2">{member.role}</p>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <FaUniversity className="mr-2" />
                      <span>{member.affiliation}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <FaEnvelope className="mr-2" />
                      <a href={`mailto:${member.email}`} className="text-emerald-600 hover:text-emerald-800">
                        {member.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Committees;
