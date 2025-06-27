
import React from 'react';
import { FaUser, FaUniversity, FaEnvelope } from 'react-icons/fa';

const Committees = () => {
  const committees = [
    {
      title: "General Chair",
      members: [
        {
          name: "Dr. Rajesh Kumar",
          affiliation: "IIT Delhi",
          email: "rajesh.kumar@iitd.ac.in"
        }
      ]
    },
    {
      title: "Program Committee",
      members: [
        {
          name: "Dr. Priya Sharma",
          affiliation: "IISC Bangalore",
          email: "priya.sharma@iisc.ac.in"
        },
        {
          name: "Dr. Amit Patel",
          affiliation: "IIT Bombay",
          email: "amit.patel@iitb.ac.in"
        }
      ]
    },
    {
      title: "Technical Committee",
      members: [
        {
          name: "Dr. Sneha Gupta",
          affiliation: "NIT Trichy",
          email: "sneha.gupta@nitt.edu"
        },
        {
          name: "Dr. Vikram Singh",
          affiliation: "DTU Delhi",
          email: "vikram.singh@dtu.ac.in"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-bold gradient-text-primary mb-6">
            Conference Committees
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            Meet the distinguished experts organizing ICATES-2025
          </p>
        </div>

        <div className="space-y-12">
          {committees.map((committee, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl p-8 animate-scaleIn" style={{animationDelay: `${index * 0.2}s`}}>
              <h2 className="text-3xl font-bold gradient-text-primary text-center mb-8">
                {committee.title}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {committee.members.map((member, idx) => (
                  <div key={idx} className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-100 hover:border-emerald-300 transition-colors">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaUser className="text-white text-2xl" />
                    </div>

                    <h3 className="text-xl font-bold text-emerald-800 text-center mb-2">
                      {member.name}
                    </h3>

                    <div className="flex items-center justify-center text-gray-600 mb-2">
                      <FaUniversity className="mr-2 text-emerald-600" />
                      <span className="text-center">{member.affiliation}</span>
                    </div>

                    <div className="flex items-center justify-center text-gray-600">
                      <FaEnvelope className="mr-2 text-emerald-600" />
                      <a href={`mailto:${member.email}`} className="text-emerald-600 hover:text-emerald-800 transition-colors">
                        {member.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white rounded-3xl shadow-xl p-8 animate-fadeInUp">
          <h2 className="text-3xl font-bold gradient-text-primary mb-6">
            Join Our Committee
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Interested in being part of our organizing committee? We welcome experts and volunteers to help make ICATES-2025 a success.
          </p>
          <a href="mailto:committee@icates2025.org" className="btn-primary inline-block">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Committees;
