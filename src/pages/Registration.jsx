import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaGraduationCap, FaUserTie, FaBuilding, FaInfoCircle, FaComments } from 'react-icons/fa';

const Registration = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
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
      icon: <FaGraduationCap className="text-4xl" />
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
      icon: <FaUserTie className="text-4xl" />
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
      icon: <FaBuilding className="text-4xl" />
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-100 pt-20 pb-10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Header with Animation */}
        <div 
          id="header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-600 bg-clip-text text-transparent mb-6 animate-gradient-x">
            Conference Registration
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 animate-pulse"></div>
          <p className="text-slate-700 text-xl max-w-3xl mx-auto mb-8">
            Secure your spot at the premier technology conference. Choose the registration category that best fits your needs and join innovators from around the world.
          </p>
          
          <FaChevronDown className="text-blue-600 text-2xl mx-auto mt-8 animate-bounce" />
        </div>
        
        {/* Pricing Cards */}
        <div 
          id="pricing-cards"
          data-animate
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible['pricing-cards'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {registrationPlans.map((plan, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br ${plan.color} rounded-2xl ${plan.shadowColor} shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer`}
              style={{animationDelay: `${index * 200}ms`}}
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
                <div className="text-white mb-4 transform group-hover:scale-110 transition-transform duration-300">
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
        <div 
          id="policy-section"
          data-animate
          className={`relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-blue-200 mb-16 transition-all duration-1000 ${
            isVisible['policy-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                <FaInfoCircle className="text-white text-lg" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent">
                Registration Policy & Important Information
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700 transform transition-all duration-300 hover:translate-x-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></span>
                  <span>All fees are non-refundable after confirmation</span>
                </li>
                <li className="flex items-start text-slate-700 transform transition-all duration-300 hover:translate-x-1">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></span>
                  <span>Early bird registration ends on August 30, 2025</span>
                </li>
                <li className="flex items-start text-slate-700 transform transition-all duration-300 hover:translate-x-1">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></span>
                  <span>Student registrations require valid student ID</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700 transform transition-all duration-300 hover:translate-x-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></span>
                  <span>Registration includes access to all conference sessions</span>
                </li>
                <li className="flex items-start text-slate-700 transform transition-all duration-300 hover:translate-x-1">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></span>
                  <span>Digital certificates provided within 48 hours</span>
                </li>
                <li className="flex items-start text-slate-700 transform transition-all duration-300 hover:translate-x-1">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></span>
                  <span>Group discounts available for 5+ registrations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div 
          id="cta"
          data-animate
          className={`relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 rounded-2xl p-12 text-white text-center transition-all duration-1000 ${
            isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-transparent to-purple-400/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
            <div className="absolute top-8 right-8 w-3 h-3 bg-white/20 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-6 left-1/3 w-2 h-2 bg-white/25 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Need Help with Registration?</h2>
            <p className="text-xl mb-8 opacity-90">
              Have questions about the conference or need assistance with your registration?
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={() => window.alert('Contact support would open here!')}
                className="group relative overflow-hidden bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center">
                  <FaComments className="mr-3" />
                  Contact Support
                  <span className="ml-3 transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaComments className="mr-3" />
                  Contact Support
                  <span className="ml-3">→</span>
                </span>
              </button>
              
              <button className="group relative overflow-hidden border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">View Schedule</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute inset-0 z-10 flex items-center justify-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Schedule
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Registration;