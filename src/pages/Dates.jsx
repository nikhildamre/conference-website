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