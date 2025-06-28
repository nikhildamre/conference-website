import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const CallForPapers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Call for Papers
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mt-4"></div>
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose max-w-none">
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Important Dates</h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Abstract Submission Deadline:</span>
                  <span className="font-bold">June 15, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span>Full Paper Submission Deadline:</span>
                  <span className="font-bold">July 15, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span>Notification of Acceptance:</span>
                  <span className="font-bold">August 15, 2025</span>
                </li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Submission Guidelines</h2>
            <p className="mb-4">
              Authors are invited to submit original, unpublished research papers. Submissions should 
              be in English and must not exceed 6 pages in length, including figures and references.
            </p>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Paper Format</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>PDF format only</li>
              <li>IEEE two-column format</li>
              <li>Font size: 10pt</li>
              <li>Page size: A4</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Topics of Interest</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'Artificial Intelligence & Machine Learning',
                'Renewable Energy Systems',
                'Biotechnology & Bioengineering',
                'Advanced Materials Science',
                'Internet of Things & Cyber Security',
                'Robotics & Automation',
                'Data Science & Big Data Analytics',
                'Cloud Computing & Edge Computing'
              ].map((topic, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{topic}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <a 
                href="#" 
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-700 text-white px-8 py-3 rounded-full text-lg font-bold hover:from-blue-700 hover:to-cyan-800 transition-all duration-300 shadow-lg"
              >
                Submit Your Paper
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;