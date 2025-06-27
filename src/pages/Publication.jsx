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
import React from 'react';
import { FaBook, FaDownload, FaCertificate, FaGlobe } from 'react-icons/fa';

const Publication = () => {
  const publicationDetails = [
    {
      title: "Conference Proceedings",
      description: "All accepted papers will be published in the conference proceedings",
      icon: FaBook,
      details: [
        "ISBN will be assigned",
        "Digital and print versions available",
        "Distributed to all participants"
      ]
    },
    {
      title: "Journal Publication",
      description: "Selected papers will be invited for journal publication",
      icon: FaCertificate,
      details: [
        "Peer-reviewed journal",
        "Extended version required",
        "Impact factor journal"
      ]
    },
    {
      title: "Digital Archive",
      description: "Papers will be archived in digital libraries",
      icon: FaGlobe,
      details: [
        "Online accessibility",
        "Permanent digital preservation",
        "Global research visibility"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-bold gradient-text-primary mb-6">
            Publication Opportunities
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            Get your research published and reach a global audience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {publicationDetails.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl p-8 card-hover animate-scaleIn" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="text-white text-2xl" />
              </div>
              
              <h3 className="text-2xl font-bold gradient-text-primary text-center mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-700 text-center mb-6">
                {item.description}
              </p>
              
              <ul className="space-y-3">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Publication Guidelines */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 animate-fadeInUp">
          <h2 className="text-3xl font-bold gradient-text-primary text-center mb-8">
            Publication Guidelines
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-emerald-800 mb-4">Paper Format</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• IEEE conference format</li>
                <li>• Maximum 6 pages</li>
                <li>• Times New Roman, 10pt font</li>
                <li>• Single column for abstract, double column for content</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-emerald-800 mb-4">Quality Standards</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Original research contribution</li>
                <li>• Proper citations and references</li>
                <li>• Clear methodology and results</li>
                <li>• Ethical research practices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center animate-fadeInUp">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl shadow-2xl text-white p-8">
            <FaDownload className="text-4xl mb-6 mx-auto" />
            <h3 className="text-3xl font-bold mb-6">
              Download Resources
            </h3>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Get the necessary templates and guidelines for your paper submission
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#"
                className="bg-white text-emerald-700 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors inline-flex items-center"
              >
                <FaDownload className="mr-2" />
                Paper Template
              </a>
              <a 
                href="#"
                className="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-400 transition-colors inline-flex items-center"
              >
                <FaBook className="mr-2" />
                Style Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication;
