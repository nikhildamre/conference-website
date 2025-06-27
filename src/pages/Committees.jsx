import React from 'react';
import { FaUser, FaUniversity, FaEnvelope } from 'react-icons/fa';

const Committees = () => {
  const committees = [
    {
      title: "Conference Chair",
      members: [
        { name: "Dr. John Smith", affiliation: "MIT", email: "john@mit.edu" }
      ]
    },
    {
      title: "Technical Program Committee",
      members: [
        { name: "Dr. Sarah Johnson", affiliation: "Stanford University", email: "sarah@stanford.edu" },
        { name: "Dr. Michael Brown", affiliation: "Harvard University", email: "michael@harvard.edu" }
      ]
    },
    {
      title: "Organizing Committee", 
      members: [
        { name: "Dr. Emily Davis", affiliation: "Berkeley", email: "emily@berkeley.edu" },
        { name: "Dr. David Wilson", affiliation: "Caltech", email: "david@caltech.edu" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Conference <span className="text-emerald-600">Committees</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the distinguished academics and professionals organizing ICATES-2025
          </p>
        </div>

        <div className="space-y-12">
          {committees.map((committee, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 px-8 py-6">
                <h2 className="text-2xl font-bold text-white">{committee.title}</h2>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {committee.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-emerald-100 p-3 rounded-full">
                          <FaUser className="text-emerald-600 text-xl" />
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {member.name}
                      </h3>

                      <div className="flex items-center text-gray-600 mb-2">
                        <FaUniversity className="mr-2" />
                        <span className="text-sm">{member.affiliation}</span>
                      </div>

                      <div className="flex items-center text-gray-600">
                        <FaEnvelope className="mr-2" />
                        <a href={`mailto:${member.email}`} className="text-sm text-emerald-600 hover:text-emerald-700">
                          {member.email}
                        </a>
                      </div>
                    </div>
                  ))}
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