
```jsx
import React from 'react';
import { FaPaperPlane, FaCalendarAlt, FaFileAlt, FaCheckCircle } from 'react-icons/fa';

const CallForPapers = () => {
  const tracks = [
    "Artificial Intelligence & Machine Learning",
    "Internet of Things & Smart Systems", 
    "Cybersecurity & Information Security",
    "Sustainable Engineering & Green Technology",
    "Biomedical Engineering & Healthcare Technology"
  ];

  const dates = [
    { event: "Abstract Submission Deadline", date: "November 30, 2024" },
    { event: "Full Paper Submission", date: "December 15, 2024" },
    { event: "Notification of Acceptance", date: "January 25, 2025" },
    { event: "Final Paper Submission", date: "February 10, 2025" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-bold gradient-text-primary mb-6">Call for Papers</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            Submit your research and contribute to advancing technology and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FaFileAlt className="mr-3 text-emerald-600" />
              Research Tracks
            </h2>
            <div className="space-y-3">
              {tracks.map((track, index) => (
                <div key={index} className="flex items-center p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                  <FaCheckCircle className="text-emerald-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{track}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FaCalendarAlt className="mr-3 text-emerald-600" />
              Important Dates
            </h2>
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
```
