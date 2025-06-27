
import React from 'react';
import { FaPaperPlane, FaCalendarAlt, FaFileAlt, FaCheckCircle } from 'react-icons/fa';

const CallForPapers = () => {
  const researchTopics = [
    "Artificial Intelligence and Machine Learning",
    "Internet of Things (IoT)",
    "Cybersecurity and Data Privacy",
    "Cloud Computing and Edge Computing",
    "Blockchain Technology",
    "Computer Vision and Image Processing",
    "Natural Language Processing",
    "Robotics and Automation",
    "Big Data Analytics",
    "Software Engineering",
    "Human-Computer Interaction",
    "Distributed Systems"
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
            Submit your cutting-edge research to ICATES-2025 and join the global conversation on emerging technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 card-hover animate-scaleIn">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaFileAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold gradient-text-primary text-center mb-4">
              Research Papers
            </h3>
            <p className="text-gray-700 text-center">
              Submit original research contributions with novel findings and methodologies
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 card-hover animate-scaleIn" style={{animationDelay: '0.2s'}}>
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold gradient-text-primary text-center mb-4">
              Case Studies
            </h3>
            <p className="text-gray-700 text-center">
              Present real-world applications and implementations of emerging technologies
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 card-hover animate-scaleIn" style={{animationDelay: '0.4s'}}>
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaPaperPlane className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold gradient-text-primary text-center mb-4">
              Short Papers
            </h3>
            <p className="text-gray-700 text-center">
              Share preliminary results, work-in-progress, or innovative ideas
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 animate-fadeInUp">
            <h2 className="text-3xl font-bold gradient-text-primary mb-8 flex items-center">
              <FaCalendarAlt className="mr-3" />
              Important Dates
            </h2>
            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-xl">
                <span className="font-bold text-emerald-800">Abstract Submission</span>
                <span className="text-emerald-600 font-bold">Nov 30, 2024</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-xl">
                <span className="font-bold text-emerald-800">Full Paper Due</span>
                <span className="text-emerald-600 font-bold">Dec 15, 2024</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-xl">
                <span className="font-bold text-emerald-800">Notification</span>
                <span className="text-emerald-600 font-bold">Jan 25, 2025</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-xl">
                <span className="font-bold text-emerald-800">Final Submission</span>
                <span className="text-emerald-600 font-bold">Feb 10, 2025</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 animate-fadeInUp">
            <h2 className="text-3xl font-bold gradient-text-primary mb-8">
              Research Topics
            </h2>
            <div className="space-y-3">
              {researchTopics.map((topic, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center animate-fadeInUp">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl shadow-2xl text-white p-8">
            <FaPaperPlane className="text-4xl mb-6 mx-auto" />
            <h3 className="text-3xl font-bold mb-6">
              Ready to Submit?
            </h3>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Join leading researchers from around the world in sharing breakthrough innovations
            </p>
            <button className="bg-white text-emerald-700 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors">
              Submit Your Paper
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
