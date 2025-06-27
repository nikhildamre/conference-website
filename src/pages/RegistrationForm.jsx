import React, { useState } from 'react';
import { FaUser, FaCreditCard } from 'react-icons/fa';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    designation: '',
    category: 'student',
    paperTitle: '',
    specialRequirements: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.success) {
        alert(`Registration submitted successfully! Your registration ID is: ${result.registrationId}`);
        // Reset form or redirect as needed
      } else {
        alert('Error submitting registration. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting registration. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const categoryPrices = {
    student: '₹1,500',
    academic: '₹3,000',
    industry: '₹5,000'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-5xl font-bold gradient-text-primary mb-6">
            Conference Registration
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-700 text-xl">
            Complete your registration for ICATES-2025
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h2 className="text-2xl font-bold gradient-text-primary mb-6 flex items-center">
                <FaUser className="mr-3" />
                Personal Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-emerald-800 font-bold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-emerald-800 font-bold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-emerald-800 font-bold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-emerald-800 font-bold mb-2">Organization *</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-emerald-800 font-bold mb-2">Designation</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                  placeholder="e.g., Professor, Student, Engineer"
                />
              </div>
            </div>

            {/* Registration Category */}
            <div>
              <h2 className="text-2xl font-bold gradient-text-primary mb-6">
                Registration Category
              </h2>

              <div className="grid md:grid-cols-3 gap-4">
                {['student', 'academic', 'industry'].map((category) => (
                  <label key={category} className="cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={formData.category === category}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`p-6 rounded-xl border-2 transition-all ${
                      formData.category === category 
                        ? 'border-emerald-500 bg-emerald-50' 
                        : 'border-emerald-200 hover:border-emerald-300'
                    }`}>
                      <h3 className="font-bold text-emerald-800 capitalize mb-2">{category}</h3>
                      <p className="text-2xl font-bold text-emerald-600 mb-2">{categoryPrices[category]}</p>
                      <p className="text-sm text-gray-600">
                        {category === 'student' && 'Student ID required'}
                        {category === 'academic' && 'Academic institution'}
                        {category === 'industry' && 'Corporate participant'}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Paper Information */}
            <div>
              <h2 className="text-2xl font-bold gradient-text-primary mb-6">
                Paper Information (Optional)
              </h2>

              <div>
                <label className="block text-emerald-800 font-bold mb-2">Paper Title</label>
                <input
                  type="text"
                  name="paperTitle"
                  value={formData.paperTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                  placeholder="If you're presenting a paper"
                />
              </div>
            </div>

            {/* Special Requirements */}
            <div>
              <label className="block text-emerald-800 font-bold mb-2">Special Requirements</label>
              <textarea
                name="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors resize-none"
                placeholder="Dietary restrictions, accessibility needs, etc."
              ></textarea>
            </div>

            {/* Payment Summary */}
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center">
                <FaCreditCard className="mr-2" />
                Payment Summary
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-emerald-700 capitalize">
                  {formData.category} Registration
                </span>
                <span className="text-2xl font-bold text-emerald-800">
                  {categoryPrices[formData.category]}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="btn-primary px-12 py-4 text-lg"
              >
                Complete Registration
              </button>
              <p className="text-sm text-gray-600 mt-4">
                You will be redirected to payment gateway after submission
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;