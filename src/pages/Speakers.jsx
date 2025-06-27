import React from 'react';
import { FaChalkboardTeacher, FaUniversity, FaGlobe } from 'react-icons/fa';

const Speakers = () => {
  const speakers = [
    {
      id: 1,
      name: 'Dr. Rajesh Sharma',
      title: 'Professor of Computer Science',
      affiliation: 'IIT Bombay',
      expertise: 'AI & Machine Learning',
    },
    {
      id: 2,
      name: 'Dr. Priya Patel',
      title: 'Research Director',
      affiliation: 'MIT, USA',
      expertise: 'Quantum Computing',
    },
    {
      id: 3,
      name: 'Dr. Amit Kumar',
      title: 'Chief Scientist',
      affiliation: 'Google Research',
      expertise: 'Natural Language Processing',
    },
    {
      id: 4,
      name: 'Dr. Sunita Verma',
      title: 'Dean of Engineering',
      affiliation: 'Stanford University',
      expertise: 'Renewable Energy Systems',
    },
    {
      id: 5,
      name: 'Dr. Michael Johnson',
      title: 'Director of Research',
      affiliation: 'Microsoft Research',
      expertise: 'Cloud Computing',
    },
    {
      id: 6,
      name: 'Dr. Emily Chen',
      title: 'Head of AI Department',
      affiliation: 'ETH Zurich',
      expertise: 'Computer Vision',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Keynote Speakers
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mt-4"></div>
        </h1>
        
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-lg text-gray-700">
            We are honored to host world-renowned experts who will share their insights and research 
            in various fields of engineering and science.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <div 
              key={speaker.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-1 bg-gradient-to-r from-cyan-400 to-blue-500">
                <div className="bg-white p-6">
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-20 h-20" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold text-blue-900">{speaker.name}</h3>
                    <p className="text-blue-700 mt-1">{speaker.title}</p>
                    
                    <div className="mt-4 flex items-center justify-center text-gray-600">
                      <FaUniversity className="mr-2 text-cyan-500" />
                      <span>{speaker.affiliation}</span>
                    </div>
                    
                    <div className="mt-4">
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {speaker.expertise}
                      </span>
                    </div>
                    
                    <div className="mt-6 flex justify-center space-x-4">
                      <button className="text-blue-600 hover:text-blue-800 transition-colors">
                        <FaChalkboardTeacher className="h-5 w-5" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-800 transition-colors">
                        <FaGlobe className="h-5 w-5" />
                      </button>
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

export default Speakers;