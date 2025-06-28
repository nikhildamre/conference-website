import React, { useState, useEffect } from 'react';
import { FaUsers, FaFileAlt, FaComments, FaEye, FaDownload, FaEnvelope, FaSearch, FaFilter, FaTrash, FaEdit } from 'react-icons/fa';

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [activeTab, setActiveTab] = useState('dashboard');
  const [registrations, setRegistrations] = useState([]);
  const [papers, setPapers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [selectedItems, setSelectedItems] = useState([]);

  // Login credentials
  const adminCredentials = {
    email: 'nikhildamre17@gmail.com',
    password: '123456'
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn]);

  const fetchData = async () => {
    try {
      // Fetch registrations
      const regResponse = await fetch('/api/registrations');
      if (regResponse.ok) {
        const regData = await regResponse.json();
        setRegistrations(regData);
      }

      // Fetch papers
      const paperResponse = await fetch('/api/papers');
      if (paperResponse.ok) {
        const paperData = await paperResponse.json();
        setPapers(paperData);
      }

      // Fetch contacts
      const contactResponse = await fetch('/api/contacts');
      if (contactResponse.ok) {
        const contactData = await contactResponse.json();
        setContacts(contactData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.email === adminCredentials.email && loginData.password === adminCredentials.password) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const sendEmail = async (type, itemId) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, itemId })
      });
      if (response.ok) {
        alert('Email sent successfully!');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email');
    }
  };

  const generateCertificate = async (registrationId) => {
    try {
      const response = await fetch(`/api/generate-certificate/${registrationId}`, {
        method: 'POST'
      });
      if (response.ok) {
        alert('Certificate generated successfully!');
      }
    } catch (error) {
      console.error('Error generating certificate:', error);
      alert('Error generating certificate');
    }
  };

  const handleBulkDelete = async () => {
    if (selectedItems.length === 0) {
      alert('Please select items to delete');
      return;
    }

    if (window.confirm(`Delete ${selectedItems.length} items?`)) {
      try {
        const response = await fetch('/api/bulk-delete', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items: selectedItems, type: activeTab })
        });
        if (response.ok) {
          fetchData();
          setSelectedItems([]);
          alert('Items deleted successfully!');
        }
      } catch (error) {
        console.error('Error deleting items:', error);
        alert('Error deleting items');
      }
    }
  };

  const filteredData = () => {
    let data = [];
    if (activeTab === 'registrations') data = registrations;
    else if (activeTab === 'papers') data = papers;
    else if (activeTab === 'contacts') data = contacts;

    return data.filter(item => {
      const matchesSearch = Object.values(item).some(value => 
        value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesFilter = filterCategory === 'all' || item.category === filterCategory;
      return matchesSearch && matchesFilter;
    });
  };

  const stats = {
    totalRegistrations: registrations.length,
    totalPapers: papers.length,
    totalContacts: contacts.length,
    pendingPapers: papers.filter(p => p.status === 'pending').length
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h1>
            <p className="text-gray-600">Access the conference management panel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter admin email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <FaUsers className="text-blue-600 text-2xl mr-4" />
              <div>
                <p className="text-gray-600">Registrations</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalRegistrations}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <FaFileAlt className="text-green-600 text-2xl mr-4" />
              <div>
                <p className="text-gray-600">Papers</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalPapers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <FaComments className="text-purple-600 text-2xl mr-4" />
              <div>
                <p className="text-gray-600">Messages</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalContacts}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <FaFileAlt className="text-orange-600 text-2xl mr-4" />
              <div>
                <p className="text-gray-600">Pending Papers</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pendingPapers}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="flex border-b">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: FaUsers },
              { id: 'registrations', label: 'Registrations', icon: FaUsers },
              { id: 'papers', label: 'Papers', icon: FaFileAlt },
              { id: 'contacts', label: 'Messages', icon: FaComments }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <tab.icon className="mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        {activeTab !== 'dashboard' && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
                <option value="industry">Industry</option>
              </select>

              {selectedItems.length > 0 && (
                <button
                  onClick={handleBulkDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center"
                >
                  <FaTrash className="mr-2" />
                  Delete ({selectedItems.length})
                </button>
              )}
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-lg">
          {activeTab === 'dashboard' && (
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Welcome to Admin Dashboard</h2>
              <p className="text-gray-600">
                Manage registrations, papers, and messages from this central panel.
              </p>
            </div>
          )}

          {activeTab === 'registrations' && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input type="checkbox" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organization</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData().map((registration) => (
                    <tr key={registration.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="checkbox" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{registration.fullName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{registration.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.organization}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(registration.timestamp).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex gap-2">
                          <button
                            onClick={() => generateCertificate(registration.id)}
                            className="text-green-600 hover:text-green-800"
                            title="Generate Certificate"
                          >
                            <FaDownload />
                          </button>
                          <button
                            onClick={() => sendEmail('confirmation', registration.id)}
                            className="text-blue-600 hover:text-blue-800"
                            title="Send Email"
                          >
                            <FaEnvelope />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'papers' && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input type="checkbox" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Track</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData().map((paper) => (
                    <tr key={paper.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="checkbox" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{paper.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paper.authorName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paper.track}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {paper.status || 'pending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex gap-2">
                          <button
                            onClick={() => sendEmail('acceptance', paper.id)}
                            className="text-green-600 hover:text-green-800"
                            title="Send Acceptance Email"
                          >
                            <FaEnvelope />
                          </button>
                          <button
                            onClick={() => window.open(paper.fileUrl, '_blank')}
                            className="text-blue-600 hover:text-blue-800"
                            title="View Paper"
                          >
                            <FaEye />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'contacts' && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData().map((contact) => (
                    <tr key={contact.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.subject}</td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{contact.message}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(contact.timestamp).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;