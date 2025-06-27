The code changes enhance the registration data table with statistics and improved formatting.
```
```replit_final_file
import React, { useState, useEffect } from 'react';
import { FaDownload, FaEye, FaFileExcel, FaFilePdf, FaSignOutAlt } from 'react-icons/fa';
import AdminLogin from '../components/AdminLogin';

const AdminPanel = () => {
  const [registrations, setRegistrations] = useState([]);
  const [papers, setPapers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [activeTab, setActiveTab] = useState('registrations');
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setAuthToken(token);
      setIsAuthenticated(true);
      fetchData(token);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchData = async (token = authToken) => {
    try {
      const headers = {
        'Authorization': `Bearer ${token}`
      };

      const [regRes, paperRes, contactRes] = await Promise.all([
        fetch('/api/admin/registrations', { headers }),
        fetch('/api/admin/papers', { headers }),
        fetch('/api/admin/contacts', { headers })
      ]);

      const regData = await regRes.json();
      const paperData = await paperRes.json();
      const contactData = await contactRes.json();

      setRegistrations(regData);
      setPapers(paperData);
      setContacts(contactData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadExcel = async (type) => {
    try {
      const response = await fetch(`/api/admin/download/${type}/excel`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${type}_${new Date().toISOString().split('T')[0]}.xlsx`;
      a.click();
    } catch (error) {
      console.error('Error downloading Excel:', error);
    }
  };

  const downloadPDF = async (type) => {
    try {
      const response = await fetch(`/api/admin/download/${type}/pdf`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${type}_${new Date().toISOString().split('T')[0]}.pdf`;
      a.click();
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  const handleLogin = (token) => {
    setAuthToken(token);
    setIsAuthenticated(true);
    fetchData(token);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setAuthToken(null);
    setRegistrations([]);
    setPapers([]);
    setContacts([]);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} isLoading={loading} />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 px-8 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
                <p className="text-emerald-100">Conference Management Dashboard</p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
              >
                <FaSignOutAlt className="mr-2" />
                Logout
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            {[
              { id: 'registrations', label: 'Registrations', count: registrations.length },
              { id: 'papers', label: 'Paper Submissions', count: papers.length },
              { id: 'contacts', label: 'Contact Messages', count: contacts.length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-emerald-500 text-emerald-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          <div className="p-8">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2">Total Registrations</h3>
                <p className="text-3xl font-bold">{registrations.length}</p>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2">Paper Submissions</h3>
                <p className="text-3xl font-bold">{papers.length}</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2">Contact Messages</h3>
                <p className="text-3xl font-bold">{contacts.length}</p>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => downloadExcel(activeTab)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
                <FaFileExcel className="mr-2" />
                Download Excel
              </button>
              <button
                onClick={() => downloadPDF(activeTab)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center"
              >
                <FaFilePdf className="mr-2" />
                Download PDF
              </button>
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                🔄 Refresh Data
              </button>
            </div>

            {/* Content */}
            
            <div className="overflow-x-auto">
                {activeTab === 'registrations' && (
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">Registration Statistics</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Student:</span>
                          <span className="ml-2 font-semibold">{registrations.filter(r => r.registrationType === 'student').length}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Faculty:</span>
                          <span className="ml-2 font-semibold">{registrations.filter(r => r.registrationType === 'faculty').length}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Industry:</span>
                          <span className="ml-2 font-semibold">{registrations.filter(r => r.registrationType === 'industry').length}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">International:</span>
                          <span className="ml-2 font-semibold">{registrations.filter(r => r.registrationType === 'international').length}</span>
                        </div>
                      </div>
                    </div>
                    <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                      <thead>
                        <tr className="bg-gradient-to-r from-emerald-50 to-teal-50">
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Name</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Email</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Affiliation</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Type</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Status</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {registrations.map((reg, index) => (
                          <tr key={index} className="hover:bg-gray-50 transition-colors">
                            <td className="border border-gray-200 px-4 py-3">
                              <div className="font-medium text-gray-900">{reg.fullName}</div>
                              <div className="text-sm text-gray-500">{reg.phone}</div>
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-blue-600">{reg.email}</td>
                            <td className="border border-gray-200 px-4 py-3">
                              <div className="font-medium">{reg.organization}</div>
                              <div className="text-sm text-gray-500">{reg.designation}</div>
                            </td>
                            <td className="border border-gray-200 px-4 py-3">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                                {reg.category}
                              </span>
                            </td>
                            <td className="border border-gray-200 px-4 py-3">
                              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                                {reg.status || 'Pending'}
                              </span>
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                              {new Date(reg.timestamp).toLocaleDateString('en-IN', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
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
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Track</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {papers.map((paper) => (
                      <tr key={paper.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{paper.title}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paper.authorName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paper.track}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {paper.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(paper.timestamp).toLocaleDateString()}
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
                    {contacts.map((contact) => (
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
    </div>
  );
};

export default AdminPanel;