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