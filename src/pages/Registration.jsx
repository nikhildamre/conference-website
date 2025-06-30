import React, { useState, useEffect } from 'react';

const Registration = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const registrationPlans = [
    { 
      title: 'Student', 
      price: '₹1,500', 
      originalPrice: '₹2,000',
      features: [
        'Access to all sessions',
        'Conference kit',
        'Lunch & refreshments',
        'Certificate of participation',
        'Digital resources'
      ],
      color: 'from-blue-500 to-cyan-500',
      shadowColor: 'shadow-blue-500/25',
      icon: '🎓'
    },
    { 
      title: 'Academic', 
      price: '₹3,000', 
      originalPrice: '₹4,000',
      features: [
        'All student benefits',
        'Conference proceedings',
        'Access to VIP sessions',
        'Networking dinner',
        'Research collaboration access'
      ],
      color: 'from-indigo-500 to-blue-600',
      shadowColor: 'shadow-indigo-500/25',
      popular: true,
      icon: '👨‍🏫'
    },
    { 
      title: 'Industry', 
      price: '₹5,000', 
      originalPrice: '₹6,500',
      features: [
        'All academic benefits',
        'Exhibition booth access',
        'Priority for paper presentation',
        'Post-conference resources',
        'Business networking lounge'
      ],
      color: 'from-slate-600 to-indigo-600',
      shadowColor: 'shadow-slate-500/25',
      icon: '🏢'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 pt-20 pb-10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        {/* Animated Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-slate-700 bg-clip-text text-transparent mb-6 animate-fade-in">
            Conference Registration
          </h1>
          <div className="w-40 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-full mx-auto mb-6 animate-pulse"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Secure your spot at the premier technology conference. Choose the registration category that best fits your needs and join innovators from around the world.
          </p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {registrationPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-gradient-to-br ${plan.color} rounded-2xl ${plan.shadowColor} shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-xl transform -translate-x-12 translate-y-12 group-hover:scale-150 transition-transform duration-700 delay-200"></div>
                </div>

                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-6 right-6 z-10">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-bounce">
                      ⭐ MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="relative z-10 p-8">
                  {/* Plan Icon */}
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {plan.icon}
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2">{plan.title}</h3>
                  
                  {/* Price with Animation */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-lg text-white/70 line-through">{plan.originalPrice}</span>
                    </div>
                    <p className="text-white/80 text-sm mt-1">Early bird pricing</p>
                  </div>
                  
                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className={`flex items-start text-white transform transition-all duration-300 ${hoveredCard === index ? 'translate-x-2' : ''}`}
                        style={{ transitionDelay: `${idx * 100}ms` }}
                      >
                        <div className="h-5 w-5 text-cyan-300 mt-0.5 mr-3 flex-shrink-0">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="animate-pulse">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <button 
                    onClick={() => window.alert('Registration form would open here!')}
                    className="group/btn w-full bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl font-bold hover:bg-white/30 transition-all duration-300 text-center block relative overflow-hidden border border-white/30 hover:border-white/50 cursor-pointer"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Register Now
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Registration Policy Section */}
          <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200/50 max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} delay-700`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent">
                Registration Policy & Important Information
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>All fees are non-refundable after confirmation</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Early bird registration ends on August 30, 2025</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Student registrations require valid student ID</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Registration includes access to all conference sessions</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Digital certificates provided within 48 hours</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Group discounts available for 5+ registrations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Support Section */}
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Need help with registration? Have questions about the conference?</p>
            <button 
              onClick={() => window.alert('Contact support would open here!')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Support
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Registration;