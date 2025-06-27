import React from 'react';
import { FaUser, FaUniversity, FaEnvelope } from 'react-icons/fa';

const Committees = () => {
  const committeeData = [
    {
      title: "Advisory Committee",
      members: [
        { name: "Dr. Rajesh Kumar", affiliation: "IIT Bombay", email: "rajesh@iitb.ac.in" },
        { name: "Prof. Meera Sharma", affiliation: "BITS Pilani", email: "meera@bits.ac.in" },
        { name: "Dr. Amit Patel", affiliation: "NIT Surathkal", email: "amit@nits.ac.in" },
        { name: "Prof. Sunita Gupta", affiliation: "VJTI Mumbai", email: "sunita@vjti.ac.in" }
      ]
    },
    {
      title: "Technical Program Committee",
      members: [
        { name: "Dr. Priya Joshi", affiliation: "VPPCOE Mumbai", email: "priya@vppcoe.ac.in" },
        { name: "Prof. Vikram Singh", affiliation: "Delhi University", email: "vikram@du.ac.in" },
        { name: "Dr. Neha Agarwal", affiliation: "Pune University", email: "neha@unipune.ac.in" },
        { name: "Prof. Rohit Mehta", affiliation: "Anna University", email: "rohit@annauniv.edu" }
      ]
    },
    {
      title: "Organizing Committee",
      members: [
        { name: "Dr. Sanjay Patil", affiliation: "VPPCOE Mumbai", email: "sanjay@vppcoe.ac.in" },
        { name: "Prof. Kavita Desai", affiliation: "VPPCOE Mumbai", email: "kavita@vppcoe.ac.in" },
        { name: "Dr. Rahul Jain", affiliation: "VPPCOE Mumbai", email: "rahul@vppcoe.ac.in" },
        { name: "Prof. Anita Shah", affiliation: "VPPCOE Mumbai", email: "anita@vppcoe.ac.in" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-bold gradient-text-primary mb-6">
            Conference Committees
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            Meet the distinguished professionals guiding ICATES-2025
          </p>
        </div>

        <div className="space-y-12">
          {committeeData.map((committee, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden card-hover animate-fadeInUp"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-8">
                <h2 className="text-3xl font-bold text-white text-center">
                  {committee.title}
                </h2>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {committee.members.map((member, idx) => (
                    <div 
                      key={idx}
                      className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <FaUser className="text-white text-lg" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-emerald-800 mb-2 leading-tight">
                            {member.name}
                          </h3>

                          <div className="flex items-center text-gray-600 mb-2">
                            <FaUniversity className="text-emerald-600 mr-2 flex-shrink-0" />
                            <span className="text-sm font-medium truncate">
                              {member.affiliation}
                            </span>
                          </div>

                          <div className="flex items-center text-gray-600">
                            <FaEnvelope className="text-emerald-600 mr-2 flex-shrink-0" />
                            <a 
                              href={`mailto:${member.email}`}
                              className="text-sm text-emerald-700 hover:text-emerald-800 transition-colors truncate"
                            >
                              {member.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fadeInUp">
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text-primary mb-4">
              Join Our Committee
            </h3>
            <p className="text-gray-700 mb-6">
              Interested in contributing to future conferences? We welcome experienced professionals to join our committees.
            </p>
            <a 
              href="mailto:committee@icates2025.org"
              className="btn-primary inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committees;