
import React, { useState } from 'react';
import { FaPaperPlane, FaFileUpload, FaUser, FaEnvelope } from 'react-icons/fa';

const PaperSubmission = () => {
  const [formData, setFormData] = useState({
    title: '',
    authorName: '',
    authorEmail: '',
    coAuthors: '',
    affiliation: '',
    track: '',
    abstract: '',
    keywords: '',
    fileUrl: ''
  });

  const tracks = [
    "Artificial Intelligence & Machine Learning",
    "Internet of Things & Smart Systems",
    "Cybersecurity & Information Security",
    "Sustainable Engineering & Green Technology",
    "Biomedical Engineering & Healthcare Technology",
    "Advanced Materials & Nanotechnology",
    "Renewable Energy & Power Systems",
    "Robotics & Automation",
    "Data Science & Big Data Analytics",
    "Computer Vision & Image Processing"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit-paper', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.success) {
        alert(`Paper submitted successfully! Your paper ID is: ${result.paperId}`);
        // Reset form
        setFormData({
          title: '',
          authorName: '',
          authorEmail: '',
          coAuthors: '',
          affiliation: '',
          track: '',
          abstract: '',
          keywords: '',
          fileUrl: ''
        });
      } else {
        alert('Error submitting paper. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting paper. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-5xl font-bold gradient-text-primary mb-6">
            Submit Your Paper
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-700 text-xl">
            Share your research with the global scientific community
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Paper Information */}
            <div>
              <h2 className="text-2xl font-bold gradient-text-primary mb-6 flex items-center">
                <FaPaperPlane className="mr-3" />
                Paper Information
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-emerald-800 font-bold mb-2">Paper Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                    placeholder="Enter your paper title"
                  />
                </div>

                <div>
                  <label className="block text-emerald-800 font-bold mb-2">Research Track *</label>
                  <select
                    name="track"
                    value={formData.track}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                  >
                    <option value="">Select a track</option>
                    {tracks.map((track) => (
                      <option key={track} value={track}>{track}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-emerald-800 font-bold mb-2">Abstract *</label>
                  <textarea
                    name="abstract"
                    value={formData.abstract}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors resize-none"
                    placeholder="Enter your paper abstract (max 200 words)"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-emerald-800 font-bold mb-2">Keywords *</label>
                  <input
                    type="text"
                    name="keywords"
                    value={formData.keywords}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                    placeholder="Enter keywords separated by commas"
                  />
                </div>
              </div>
            </div>

            {/* Author Information */}
            <div>
              <h2 className="text-2xl font-bold gradient-text-primary mb-6 flex items-center">
                <FaUser className="mr-3" />
                Author Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-emerald-800 font-bold mb-2">Lead Author Name *</label>
                  <input
                    type="text"
                    name="authorName"
                    value={formData.authorName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-emerald-800 font-bold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="authorEmail"
                    value={formData.authorEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-emerald-800 font-bold mb-2">Affiliation *</label>
                <input
                  type="text"
                  name="affiliation"
                  value={formData.affiliation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                  placeholder="University/Organization name"
                />
              </div>

              <div className="mt-6">
                <label className="block text-emerald-800 font-bold mb-2">Co-Authors</label>
                <textarea
                  name="coAuthors"
                  value={formData.coAuthors}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors resize-none"
                  placeholder="List co-authors with their affiliations (one per line)"
                ></textarea>
              </div>
            </div>

            {/* File Upload */}
            <div>
              <h2 className="text-2xl font-bold gradient-text-primary mb-6 flex items-center">
                <FaFileUpload className="mr-3" />
                File Upload
              </h2>

              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                <p className="text-emerald-800 mb-4">
                  Please upload your paper to a cloud service (Google Drive, Dropbox, etc.) and provide the link below.
                  Make sure the link is accessible for review.
                </p>
                <input
                  type="url"
                  name="fileUrl"
                  value={formData.fileUrl}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                  placeholder="https://drive.google.com/... or https://dropbox.com/..."
                />
                <p className="text-sm text-emerald-600 mt-2">
                  File format: PDF | Max size: 10MB | IEEE format required
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="btn-primary px-12 py-4 text-lg"
              >
                Submit Paper
              </button>
              <p className="text-sm text-gray-600 mt-4">
                You will receive a confirmation email after submission
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaperSubmission;
