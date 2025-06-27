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
import React from 'react';
import { FaPaperPlane, FaCalendarAlt, FaFileAlt, FaCheckCircle } from 'react-icons/fa';

const CallForPapers = () => {
  const tracks = [
    "Artificial Intelligence & Machine Learning",
    "Internet of Things & Smart Systems",
    "Cybersecurity & Information Security",
    "Sustainable Engineering & Green Technology",
    "Biomedical Engineering & Healthcare Technology",
    "Advanced Materials & Nanotechnology",
    "Renewable Energy & Power Systems",
    "Robotics & Automation",
    "Data Science & Big Data Analytics",
    "Computer Vision & Image Processing"
  ];

  const guidelines = [
    "Papers must be original and not published elsewhere",
    "Maximum 6 pages in IEEE format",
    "All papers will undergo peer review",
    "At least one author must register for the conference",
    "Submit through EasyChair submission system",
    "Include keywords and abstract (max 200 words)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-bold gradient-text-primary mb-6">
            Call for Papers
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            Share your research and innovations with the global scientific community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Conference Tracks */}
          <div className="bg-white rounded-3xl shadow-xl p-8 card-hover animate-slideInLeft">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center mr-4">
                <FaFileAlt className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold gradient-text-primary">Conference Tracks</h2>
            </div>
            
            <div className="space-y-3">
              {tracks.map((track, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-emerald-50 transition-colors">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{track}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Submission Guidelines */}
          <div className="bg-white rounded-3xl shadow-xl p-8 card-hover animate-slideInRight">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center mr-4">
                <FaCheckCircle className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold gradient-text-primary">Submission Guidelines</h2>
            </div>
            
            <div className="space-y-4">
              {guidelines.map((guideline, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-emerald-50 transition-colors">
                  <FaCheckCircle className="text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{guideline}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Dates */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl shadow-2xl text-white p-8 mb-12 animate-fadeInUp">
          <div className="text-center mb-8">
            <FaCalendarAlt className="text-4xl mb-4 mx-auto" />
            <h2 className="text-3xl font-bold">Important Dates</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">Paper Submission</h3>
              <p className="text-emerald-100 text-lg">December 15, 2024</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">Notification</h3>
              <p className="text-emerald-100 text-lg">January 25, 2025</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">Final Submission</h3>
              <p className="text-emerald-100 text-lg">February 10, 2025</p>
            </div>
          </div>
        </div>

        {/* Submission CTA */}
        <div className="text-center animate-fadeInUp">
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold gradient-text-primary mb-6">
              Ready to Submit Your Paper?
            </h3>
            <p className="text-gray-700 text-lg mb-8">
              Join researchers from around the world in advancing technology and science
            </p>
            <a 
              href="https://easychair.org/conferences/?conf=icates2025"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center group"
            >
              <FaPaperPlane className="mr-2" />
              Submit via EasyChair
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
