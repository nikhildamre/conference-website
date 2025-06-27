import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          About the Conference
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mt-4"></div>
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              The International Conference on Advancing Technology in Engineering and Science (ICATES-2025) 
              is a premier event organized by Vasantdada Patil Pratishthan's College of Engineering, Mumbai.
            </p>
            
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Conference Objectives</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>To provide a platform for researchers to present innovative work</li>
              <li>To foster collaboration between academia and industry</li>
              <li>To explore emerging trends in engineering and science</li>
              <li>To facilitate knowledge exchange among participants</li>
              <li>To showcase cutting-edge research in various domains</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Organizing Institution</h2>
            <div className="flex items-start mb-8">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
              <div>
                <h3 className="text-xl font-bold">VPPCOE, Mumbai</h3>
                <p className="text-gray-700">
                  Established in 1990, Vasantdada Patil Pratishthan's College of Engineering is one of 
                  Mumbai's premier engineering institutions with state-of-the-art facilities and a strong 
                  focus on research and innovation.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Conference Chairs</h3>
              <ul className="space-y-4">
                <li>
                  <strong>Dr. Sanjay Sharma</strong> - Principal, VPPCOE
                </li>
                <li>
                  <strong>Dr. Meera Patel</strong> - Head of Research, VPPCOE
                </li>
                <li>
                  <strong>Prof. Rajesh Kumar</strong> - Conference Coordinator
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;