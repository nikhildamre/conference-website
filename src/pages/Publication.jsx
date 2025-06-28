import React from 'react';

const Publication = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Publication
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mt-4"></div>
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose max-w-none">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                All accepted and presented papers will be published in conference proceedings with ISBN number.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Publication Partners</h2>
                <div className="space-y-6">
                  {[
                    "Springer Lecture Notes in Networks and Systems",
                    "IEEE Xplore Digital Library",
                    "Scopus Indexed Journals",
                    "ACM Digital Library"
                  ].map((partner, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{partner}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Publication Process</h2>
                <ol className="list-decimal pl-6 space-y-4">
                  <li className="text-gray-700">
                    <span className="font-semibold">Paper Submission:</span> Authors submit full papers through the conference submission system
                  </li>
                  <li className="text-gray-700">
                    <span className="font-semibold">Peer Review:</span> Double-blind review by technical program committee
                  </li>
                  <li className="text-gray-700">
                    <span className="font-semibold">Notification:</span> Acceptance notifications sent to authors
                  </li>
                  <li className="text-gray-700">
                    <span className="font-semibold">Camera Ready:</span> Final submission with revisions
                  </li>
                  <li className="text-gray-700">
                    <span className="font-semibold">Publication:</span> Proceedings published with ISBN
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Indexing Information</h3>
              <p className="text-gray-700 mb-4">
                All conference proceedings will be submitted for indexing in major databases including:
              </p>
              <div className="flex flex-wrap gap-3">
                {['Scopus', 'Web of Science', 'Google Scholar', 'DBLP', 'EI Compendex'].map((index, idx) => (
                  <span key={idx} className="bg-blue-200 text-blue-800 px-4 py-1 rounded-full text-sm">
                    {index}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication;