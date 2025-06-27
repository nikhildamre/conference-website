import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const Dates = () => {
  const importantDates = [
    { event: 'Abstract Submission Deadline', date: 'June 15, 2025' },
    { event: 'Full Paper Submission Deadline', date: 'July 15, 2025' },
    { event: 'Notification of Acceptance', date: 'August 15, 2025' },
    { event: 'Early Bird Registration', date: 'August 30, 2025' },
    { event: 'Camera Ready Submission', date: 'September 10, 2025' },
    { event: 'Conference Dates', date: 'October 04-05, 2025' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Important Dates
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mt-4"></div>
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose max-w-none">
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
                <FaCalendarAlt className="mr-3 text-cyan-600" />
                Conference Timeline
              </h2>
              <p className="text-gray-700">
                Mark your calendars for these important deadlines and events
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <ul className="space-y-6">
                {importantDates.map((date, index) => (
                  <li 
                    key={index}
                    className="flex items-start border-b border-gray-200 pb-6 last:border-0 last:pb-0"
                  >
                    <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-blue-900">{date.event}</h3>
                      <div className="mt-2 flex items-center text-blue-600">
                        <FaCalendarAlt className="mr-2" />
                        <span className="font-semibold">{date.date}</span>
                      </div>
                    </div>
                    <button className="ml-4 bg-blue-50 text-blue-700 hover:bg-blue-100 text-sm font-semibold px-4 py-2 rounded-full transition-colors">
                      Add to Calendar
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Note</h3>
                <p className="text-blue-800 mb-2">
                  All deadlines are at 11:59 PM Anywhere on Earth (AoE)
                </p>
                <p className="text-gray-700">
                  For any queries regarding deadlines or extensions, please contact the organizing committee at 
                  <a href="mailto:dates@icates2025.vppcoe.in" className="text-cyan-600 hover:underline ml-1">
                    dates@icates2025.vppcoe.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dates;
import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

const Dates = () => {
  const importantDates = [
    { event: "Paper Submission Deadline", date: "December 15, 2024", status: "upcoming" },
    { event: "Extended Submission Deadline", date: "January 10, 2025", status: "upcoming" },
    { event: "Notification of Acceptance", date: "January 25, 2025", status: "upcoming" },
    { event: "Camera Ready Submission", date: "February 10, 2025", status: "upcoming" },
    { event: "Early Bird Registration", date: "February 15, 2025", status: "upcoming" },
    { event: "Regular Registration Deadline", date: "March 1, 2025", status: "upcoming" },
    { event: "Conference Dates", date: "March 15-17, 2025", status: "conference" }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'conference': return 'bg-teal-100 text-teal-800 border-teal-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50 pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-emerald-900 mb-8 text-center">
          Important Dates
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mt-4"></div>
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-6">
            {importantDates.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <FaCalendarAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-800 text-lg">{item.event}</h3>
                    <div className="flex items-center text-gray-600 mt-1">
                      <FaClock className="mr-2 text-sm" />
                      <span className="text-sm">{item.date}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(item.status)}`}>
                  {item.status === 'upcoming' ? 'Upcoming' : 'Conference'}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-xl border border-teal-200">
            <h3 className="text-xl font-bold text-teal-800 mb-3">Submission Guidelines</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• All submissions must be original and not published elsewhere</li>
              <li>• Papers should be submitted in IEEE format</li>
              <li>• Maximum length: 6 pages including references</li>
              <li>• Submissions will undergo double-blind peer review</li>
              <li>• At least one author must register for the conference</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dates;
