import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaHome } from 'react-icons/fa';

const Venue = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Conference Venue
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mt-4"></div>
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose max-w-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
                
                <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">VPPCOE Campus</h3>
                  <p className="text-gray-700 mb-4">
                    Our campus features modern facilities including smart classrooms, advanced laboratories, 
                    and a spacious auditorium equipped with the latest presentation technology.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-blue-600 mr-3 flex-shrink-0" />
                      <span>Vasantdada Patil Pratishthan's College of Engineering, Sion, Mumbai</span>
                    </div>
                    
                    <div className="flex items-center">
                      <FaHome className="text-blue-600 mr-3 flex-shrink-0" />
                      <span>Main Auditorium (Capacity: 500 persons)</span>
                    </div>
                    
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-blue-600 mr-3 flex-shrink-0" />
                      <span>October 04-05, 2025 | 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Getting to VPPCOE</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">By Public Transport</h3>
                  <p className="text-gray-700 mb-4">
                    The college is easily accessible from Sion Railway Station (Central Line) and 
                    Sion Bus Depot. It's a 10-minute walk from the station.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">By Car</h3>
                  <p className="text-gray-700 mb-4">
                    Ample parking space is available within the campus. Use the main gate entrance 
                    on Veer Savarkar Marg for direct access to the conference venue.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">Accommodation</h3>
                  <p className="text-gray-700 mb-4">
                    Special rates are available at partner hotels near the campus. Contact our 
                    hospitality desk for reservations and information.
                  </p>
                  <a 
                    href="#" 
                    className="inline-block bg-gradient-to-r from-blue-600 to-cyan-700 text-white px-6 py-2 rounded-full text-sm font-bold hover:from-blue-700 hover:to-cyan-800 transition-colors"
                  >
                    View Accommodation Options
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;