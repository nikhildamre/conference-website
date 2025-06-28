import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Contact Us
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mt-4"></div>
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="prose max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-blue-800 mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-cyan-100 p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="text-cyan-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">Address</h3>
                      <p className="text-gray-700">
                        Vasantdada Patil Pratishthan's College of Engineering<br />
                        Eastern Express Highway, Near Everard Nagar,<br />
                        Sion, Mumbai, Maharashtra 400022
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-cyan-100 p-3 rounded-full mr-4">
                      <FaPhone className="text-cyan-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">Phone</h3>
                      <p className="text-gray-700">
                        +91 22 2407 4567<br />
                        +91 22 2407 4568
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-cyan-100 p-3 rounded-full mr-4">
                      <FaEnvelope className="text-cyan-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">Email</h3>
                      <p className="text-gray-700">
                        <a href="mailto:icates2025@vppcoe.in" className="text-cyan-600 hover:underline">
                          icates2025@vppcoe.in
                        </a>
                        <br />
                        <a href="mailto:support@icates2025.vppcoe.in" className="text-cyan-600 hover:underline">
                          support@icates2025.vppcoe.in
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-cyan-100 p-3 rounded-full mr-4">
                      <FaClock className="text-cyan-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">Office Hours</h3>
                      <p className="text-gray-700">
                        Monday-Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-blue-800 mb-6">Send a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-3 rounded-lg font-bold hover:from-cyan-700 hover:to-blue-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;