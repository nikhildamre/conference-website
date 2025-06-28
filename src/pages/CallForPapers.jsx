
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

  const importantDates = [
    { event: "Paper Submission Deadline", date: "March 15, 2025" },
    { event: "Notification of Acceptance", date: "April 10, 2025" },
    { event: "Camera Ready Submission", date: "April 25, 2025" },
    { event: "Conference Dates", date: "May 15-17, 2025" }
  ];

  const guidelines = [
    "Papers must be original and not published elsewhere",
    "Maximum 8 pages including references (IEEE format)",
    "Submit through EasyChair submission system",
    "All papers will undergo peer review",
    "Accepted papers will be published in conference proceedings"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-bold gradient-text-primary mb-6">
            Call for Papers
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            Submit your cutting-edge research to ICATES-2025 and join the global conversation on emerging technologies
          </p>
        </div>

        {/* Paper Types */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 card-hover animate-scaleIn">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaFileAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold gradient-text-primary text-center mb-4">Research Papers</h3>
            <p className="text-gray-700 text-center">
              Submit original research contributions with novel findings and methodologies
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 card-hover animate-scaleIn" style={{animationDelay: '0.2s'}}>
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold gradient-text-primary text-center mb-4">Short Papers</h3>
            <p className="text-gray-700 text-center">
              Present work-in-progress, preliminary results, or innovative ideas
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 card-hover animate-scaleIn" style={{animationDelay: '0.4s'}}>
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaPaperPlane className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold gradient-text-primary text-center mb-4">Industry Papers</h3>
            <p className="text-gray-700 text-center">
              Share practical applications and real-world implementations
            </p>
          </div>
        </div>

        {/* Research Tracks */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Research Tracks</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tracks.map((track, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
                <span className="text-gray-700">{track}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Important Dates & Guidelines */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Dates</h2>
            <div className="space-y-4">
              {importantDates.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl">
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-emerald-600 mr-3" />
                    <span className="font-medium text-gray-900">{item.event}</span>
                  </div>
                  <span className="text-emerald-700 font-bold">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Submission Guidelines</h2>
            <div className="space-y-3">
              {guidelines.map((guideline, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">{guideline}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a 
            href="/paper-submission" 
            className="inline-flex items-center btn-primary text-lg px-8 py-4 group"
          >
            <FaPaperPlane className="mr-3" />
            Submit Your Paper
            <span className="ml-3 transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
