import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Address',
      info: 'VPPCOE, Mumbai, Maharashtra, India',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      info: 'info@icates2025.com',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      info: '+91 22 1234 5678',
      gradient: 'from-slate-600 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 pt-24 pb-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-slate-700 bg-clip-text text-transparent mb-6">
            Contact Us
          </h1>
          <div className="w-40 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-full mx-auto mb-6 animate-pulse"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for any queries about ICATES-2025. We're here to help you with registration, submissions, and conference information.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} delay-300`}>
            {/* Contact Cards */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className={`group flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-blue-50/50 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                    style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-blue-800 mb-1">{item.title}</h3>
                      <p className="text-slate-600 group-hover:text-slate-700 transition-colors">{item.info}</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent mb-6">
                Our Location
              </h3>
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="text-blue-700 font-medium">Interactive Map Coming Soon</p>
                    <p className="text-slate-600 text-sm mt-2">Click to view detailed location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} delay-500`}>
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent mb-8">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-blue-800 font-bold mb-2 group-focus-within:text-indigo-600 transition-colors">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                        focusedField === 'name' 
                          ? 'border-indigo-500 ring-4 ring-indigo-500/20 bg-white transform scale-105' 
                          : 'border-blue-200 hover:border-blue-300'
                      }`}
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-blue-800 font-bold mb-2 group-focus-within:text-indigo-600 transition-colors">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                        focusedField === 'email' 
                          ? 'border-indigo-500 ring-4 ring-indigo-500/20 bg-white transform scale-105' 
                          : 'border-blue-200 hover:border-blue-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-blue-800 font-bold mb-2 group-focus-within:text-indigo-600 transition-colors">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                      focusedField === 'subject' 
                        ? 'border-indigo-500 ring-4 ring-indigo-500/20 bg-white transform scale-105' 
                        : 'border-blue-200 hover:border-blue-300'
                    }`}
                    placeholder="Message subject"
                  />
                </div>

                <div className="group">
                  <label className="block text-blue-800 font-bold mb-2 group-focus-within:text-indigo-600 transition-colors">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows="6"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none bg-white/50 backdrop-blur-sm ${
                      focusedField === 'message' 
                        ? 'border-indigo-500 ring-4 ring-indigo-500/20 bg-white transform scale-105' 
                        : 'border-blue-200 hover:border-blue-300'
                    }`}
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 relative overflow-hidden group shadow-lg hover:shadow-xl ${
                    isSubmitting 
                      ? 'opacity-75 cursor-not-allowed' 
                      : 'hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105'
                  }`}
                >
                  <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>

            {/* Quick Contact Options */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <button className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </div>
              </button>
              <button className="group bg-gradient-to-r from-indigo-500 to-slate-600 text-white p-4 rounded-xl font-medium hover:from-indigo-600 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Live Chat
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;