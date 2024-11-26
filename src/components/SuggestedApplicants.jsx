import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function SuggestedApplicants() {
  const applicants = [
    { 
      id: 1, 
      name: 'David Lane',
      role: 'UI/UX Designer',
      location: 'London, England',
      hasResume: true,
      education: {
        degree: 'Bachelor',
        field: 'Art',
        type: 'Technology Field'
      }
    },
    { 
      id: 2, 
      name: 'Kathryn Murphy',
      role: 'UI/UX Designer',
      location: 'London, England',
      education: {
        degree: 'Bachelor',
        field: 'Art',
        type: 'Technology Field'
      }
    },
    { 
      id: 3, 
      name: 'Elena Pena',
      role: 'UI/UX Designer',
      location: 'London, England',
      education: {
        degree: 'Bachelor',
        field: 'Art',
        type: 'Technology Field'
      }
    },
    { 
      id: 4, 
      name: 'Floyd Miles',
      role: 'UI/UX Designer',
      location: 'London, England',
      education: {
        degree: 'Bachelor',
        field: 'Art',
        type: 'Technology Field'
      }
    },
    { 
      id: 5, 
      name: 'John Cooper',
      role: 'UI/UX Designer',
      location: 'London, England',
      education: {
        degree: 'Bachelor',
        field: 'Art',
        type: 'Technology Field'
      }
    },
    { 
      id: 6, 
      name: 'Jacob Jones',
      role: 'UI/UX Designer',
      location: 'London, England',
      education: {
        degree: 'Bachelor',
        field: 'Art',
        type: 'Technology Field'
      }
    },
    { 
      id: 7, 
      name: 'Ronald Richards',
      role: 'UI/UX Designer',
      location: 'London, England',
      education: {
        degree: 'Bachelor',
        field: 'Art',
        type: 'Technology Field'
      }
    },
    { 
      id: 8, 
      name: 'Kristina Watson',
      role: 'UI/UX Designer',
      location: 'London, England',
      education: {
        degree: 'Bachelor',
        field: 'Art',
        type: 'Technology Field'
      }
    },
    { 
      id: 9, 
      name: 'Sara Wilson',
      role: 'UI/UX Designer',
      location: 'London, England',
      education: {
        degree: 'Bachelor',
        field: 'Art',
        type: 'Technology Field'
      }
    },
    { 
      id: 10, 
      name: 'Jenny Fox',
      role: 'UI/UX Designer',
      location: 'London, England',
      education: {
        degree: 'Bachelor',
        field: 'Art',
        type: 'Technology Field'
      }
    },
    { 
      id: 11, 
      name: 'Cody Fisher',
      role: 'UI/UX Designer',
      location: 'London, England',
      education: {
        degree: 'Bachelor',
        field: 'Art',
        type: 'Technology Field'
      }
    },
    { 
      id: 12, 
      name: 'Giulia Edwards',
      role: 'UI/UX Designer',
      location: 'London, England',
      education: {
        degree: 'Bachelor',
        field: 'Art',
        type: 'Technology Field'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Link to="/applications" className="text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-2xl font-semibold">Suggested Applicants</h1>
          </div>
          <div>
            <button className="text-sm text-gray-600">all jobs ▼</button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by Candidates Position"
              className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-full"
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

        {/* Applicants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {applicants.map((applicant) => (
            <div key={applicant.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <h3 className="font-medium text-gray-900">{applicant.name}</h3>
                  <p className="text-sm text-gray-500">{applicant.role}</p>
                  <p className="text-xs text-gray-500">{applicant.location}</p>
                </div>
              </div>
              
              {applicant.hasResume && (
                <button className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Resume.PDF</span>
                </button>
              )}

              <div className="flex items-center space-x-4 text-xs">
                <span className="px-2 py-1 bg-gray-100 rounded">{applicant.education.degree}</span>
                <span className="px-2 py-1 bg-gray-100 rounded">{applicant.education.field}</span>
                <span className="px-2 py-1 bg-gray-100 rounded">{applicant.education.type}</span>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-8">
          <button className="text-purple-600 text-sm font-medium">See More</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SuggestedApplicants;
