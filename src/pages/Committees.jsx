
```jsx
import React from 'react';
import { FaUser, FaUniversity, FaEnvelope } from 'react-icons/fa';

const Committees = () => {
  const committeeMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "General Chair",
      affiliation: "Indian Institute of Technology, Delhi",
      email: "rajesh.kumar@iitd.ac.in"
    },
    {
      name: "Prof. Priya Sharma",
      role: "Program Chair",
      affiliation: "Indian Institute of Science, Bangalore", 
      email: "priya.sharma@iisc.ac.in"
    },
    {
      name: "Dr. Anil Gupta",
      role: "Technical Program Chair",
      affiliation: "Indian Institute of Technology, Bombay",
      email: "anil.gupta@iitb.ac.in"
    },
    {
      name: "Prof. Sunita Agarwal",
      role: "Publication Chair",
      affiliation: "Jawaharlal Nehru University, Delhi",
      email: "sunita.agarwal@jnu.ac.in"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-bold gradient-text-primary mb-6">Organizing Committee</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            Meet the distinguished academicians and researchers organizing this premier conference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {committeeMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl p-8 card-hover animate-fadeInUp border border-emerald-100">
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full p-4 flex-shrink-0">
                  <FaUser className="text-white text-2xl" />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="bg-emerald-100 text-emerald-800 inline-block px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {member.role}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <FaUniversity className="mr-3 text-emerald-600" />
                      <span className="text-sm">{member.affiliation}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <FaEnvelope className="mr-3 text-emerald-600" />
                      <a href={`mailto:${member.email}`} className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                        {member.email}
                      </a>
                    </div>
                  </div>
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
```
