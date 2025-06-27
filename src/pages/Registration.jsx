import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Registration
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mt-4"></div>
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose max-w-none">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Secure your spot at the premier technology conference. Choose the registration category that best fits your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { 
                  title: 'Student', 
                  price: '₹1,500', 
                  features: [
                    'Access to all sessions',
                    'Conference kit',
                    'Lunch & refreshments',
                    'Certificate of participation'
                  ],
                  color: 'from-cyan-500 to-blue-600'
                },
                { 
                  title: 'Academic', 
                  price: '₹3,000', 
                  features: [
                    'All student benefits',
                    'Conference proceedings',
                    'Access to VIP sessions',
                    'Networking dinner'
                  ],
                  color: 'from-blue-500 to-indigo-600',
                  popular: true
                },
                { 
                  title: 'Industry', 
                  price: '₹5,000', 
                  features: [
                    'All academic benefits',
                    'Exhibition booth access',
                    'Priority for paper presentation',
                    'Post-conference resources'
                  ],
                  color: 'from-indigo-500 to-purple-600'
                },
              ].map((plan, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${plan.color} rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.03] relative`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.title}</h3>
                    <div className="text-4xl font-bold text-white mb-6">{plan.price}</div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-white">
                          <svg className="h-5 w-5 text-green-300 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to="/registration-form" 
                      className="w-full bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg font-bold hover:bg-white/30 transition-colors text-center block"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-200 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Registration Policy</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>All fees are non-refundable</li>
                <li>Early bird registration ends on August 30, 2025</li>
                <li>Student registrations require valid student ID</li>
                <li>Registration includes access to all conference sessions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;