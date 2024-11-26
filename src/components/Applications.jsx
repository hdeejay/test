import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';

function Applications() {
  const navigate = useNavigate();

  const applicants = [
    { id: 1, name: 'Jane Smith', role: 'Product Designer', date: '05/Dec/2024', status: 'In Review' },
    { id: 2, name: 'Smith Joe', role: 'UX Researcher', date: '07/Jun/2024', status: 'In Review' },
    { id: 3, name: 'Jay Ruhe', role: 'Product Designer', date: '08/Dec/2023', status: 'In Review' },
    { id: 4, name: 'Benjamin Kolt', role: 'UI/UX Designer', date: '08/Mar/2024', status: 'In Review' },
    { id: 5, name: 'Elena Streep', role: 'Product Designer', date: '08/Apr/2024', status: 'In Review' },
    { id: 6, name: 'Julian Mark', role: 'Product Designer', date: '08/Mar/2024', status: 'In Review' },
    { id: 7, name: 'Nicole Kidman', role: 'Product Designer', date: '05/Jul/2024', status: 'In Review' },
  ];

  const handleSuggestedApplicantsClick = () => {
    navigate('/suggested-applicants');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-2xl font-semibold">Applicants</h1>
          </div>
          <button 
            onClick={handleSuggestedApplicantsClick}
            className="px-4 py-2 text-sm rounded-full border border-gray-300 bg-white"
          >
            Suggested Applicants
          </button>
        </div>

        {/* Search and Filter */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search and Filter"
              className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Status Tabs */}
        <div className="flex space-x-4 mb-6">
          <button className="text-gray-600 hover:text-gray-900">Approved</button>
          <button className="px-4 py-1 bg-purple-600 text-white rounded-full">Waiting</button>
          <button className="text-gray-600 hover:text-gray-900">Rejected</button>
        </div>

        {/* Applicants Table */}
        <div className="bg-white rounded-lg shadow">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">
                  Applicant Name
                  <svg className="inline-block ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">
                  Job Title
                  <svg className="inline-block ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">
                  Application Date
                  <svg className="inline-block ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Status</th>
                <th className="text-right px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((applicant) => (
                <tr key={applicant.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {applicant.id > 2 && (
                        <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                      )}
                      <span className="text-sm font-medium text-gray-900">{applicant.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{applicant.role}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{applicant.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600">{applicant.status}</span>
                      <svg className="ml-1 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-purple-600 text-sm font-medium">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-6 py-4 text-center">
            <button className="text-purple-600 text-sm font-medium">See More</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Applications;