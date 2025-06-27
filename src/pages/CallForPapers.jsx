import React from 'react';
import { FaPaperPlane, FaCalendarAlt, FaFileAlt, FaCheckCircle } from 'react-icons/fa';

const CallForPapers = () => {
  const tracks = [
    "Artificial Intelligence & Machine Learning",
    "Cybersecurity & Privacy", 
    "Data Science & Analytics",
    "Cloud Computing & Distributed Systems",
    "Internet of Things (IoT)",
    "Blockchain Technology",
    "Human-Computer Interaction",
    "Software Engineering"
  ];

  const dates = [
    { event: "Paper Submission Deadline", date: "March 15, 2025" },
    { event: "Notification of Acceptance", date: "April 20, 2025" },
    { event: "Camera-Ready Submission", date: "May 10, 2025" },
    { event: "Conference Date", date: "June 15-17, 2025" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Call for <span className="text-emerald-600">Papers</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Submit your research to ICATES-2025 and join the conversation on advanced technology solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-100 p-3 rounded-full mr-4">
                <FaFileAlt className="text-emerald-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Research Tracks</h2>
            </div>

            <div className="space-y-3">
              {tracks.map((track, index) => (
                <div key={index} className="flex items-center">
                  <FaCheckCircle className="text-emerald-500 mr-3" />
                  <span className="text-gray-700">{track}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-100 p-3 rounded-full mr-4">
                <FaCalendarAlt className="text-emerald-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Important Dates</h2>
            </div>

            <div className="space-y-4">
              {dates.map((item, index) => (
                <div key={index} className="border-l-4 border-emerald-500 pl-4">
                  <h3 className="font-semibold text-gray-900">{item.event}</h3>
                  <p className="text-emerald-600 font-medium">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Submission Guidelines</h2>
          <div className="prose max-w-none text-gray-700">
            <ul className="space-y-2">
              <li>Papers must be original and not published elsewhere</li>
              <li>Maximum 8 pages including references (IEEE format)</li>
              <li>Submit through EasyChair submission system</li>
              <li>All papers will undergo peer review</li>
              <li>Accepted papers will be published in conference proceedings</li>
            </ul>
          </div>
        </div>

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