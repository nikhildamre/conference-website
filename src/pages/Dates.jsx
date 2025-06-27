
import React from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Dates = () => {
  const importantDates = [
    {
      title: "Abstract Submission Deadline",
      date: "November 30, 2024",
      description: "Submit your abstract for review"
    },
    {
      title: "Full Paper Submission",
      date: "December 15, 2024",
      description: "Complete paper submission deadline"
    },
    {
      title: "Notification of Acceptance",
      date: "January 25, 2025",
      description: "Authors will be notified of paper acceptance"
    },
    {
      title: "Final Paper Submission",
      date: "February 10, 2025",
      description: "Camera-ready paper submission"
    },
    {
      title: "Early Bird Registration",
      date: "February 20, 2025",
      description: "Register early for discounted rates"
    },
    {
      title: "Conference Dates",
      date: "March 15-17, 2025",
      description: "Three days of presentations and networking"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-bold gradient-text-primary mb-6">
            Important Dates
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            Mark your calendar with these crucial deadlines and conference dates
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {importantDates.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl p-8 card-hover animate-scaleIn" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaCalendarAlt className="text-white text-xl" />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold gradient-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-emerald-700 text-lg font-semibold mb-2">
                    {item.date}
                  </p>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conference Schedule Preview */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl shadow-2xl text-white p-8 mb-12 animate-fadeInUp">
          <div className="text-center mb-8">
            <FaClock className="text-4xl mb-4 mx-auto" />
            <h2 className="text-3xl font-bold">Conference Schedule</h2>
            <p className="text-emerald-100 mt-2">March 15-17, 2025</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">Day 1</h3>
              <p className="text-emerald-100 mb-2">March 15, 2025</p>
              <p className="text-sm text-emerald-200">Opening Ceremony & Keynote</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">Day 2</h3>
              <p className="text-emerald-100 mb-2">March 16, 2025</p>
              <p className="text-sm text-emerald-200">Technical Sessions & Workshops</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">Day 3</h3>
              <p className="text-emerald-100 mb-2">March 17, 2025</p>
              <p className="text-sm text-emerald-200">Poster Sessions & Closing</p>
            </div>
          </div>
        </div>

        {/* Submission Guidelines */}
        <div className="bg-white rounded-3xl shadow-xl p-8 animate-fadeInUp">
          <h2 className="text-3xl font-bold gradient-text-primary text-center mb-8">
            Submission Guidelines
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-emerald-800 mb-4">Paper Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• All submissions must be original and not published elsewhere</li>
                <li>• Papers should be submitted in IEEE format</li>
                <li>• Maximum length: 6 pages including references</li>
                <li>• Submissions will undergo double-blind peer review</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-emerald-800 mb-4">Registration</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• At least one author must register for the conference</li>
                <li>• Early bird registration available until February 20</li>
                <li>• Student discounts available</li>
                <li>• Group registration discounts for 5+ participants</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dates;
