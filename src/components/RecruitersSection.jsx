import React from 'react';

function RecruitersSection() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Best Recruiters for you</h2>

      {/* Recruiter Cards */}
      <div className="space-y-4">
        {/* First Recruiter */}
        <div className="bg-white rounded-lg border border-gray-100 p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center space-x-3">
              <img 
                src="https://placekitten.com/64/64" 
                alt="Susan Jeans"
                className="w-12 h-12 rounded-full object-cover"
              />
              <h3 className="font-medium text-gray-900">Susan Jeans</h3>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-600">3.8</span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              Hiring
            </span>
            
            <div>
              <p className="font-medium text-gray-900 text-sm">Talent Acquisition Manager, Hays</p>
              <p className="text-sm text-gray-500">Recruiter For Position At Hays</p>
            </div>

            {/* Tags */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="text-center px-2 py-1 bg-gray-50 rounded text-xs text-gray-600">
                <div>+100</div>
                <div>Company</div>
              </div>
              <div className="text-center px-2 py-1 bg-gray-50 rounded text-xs text-gray-600">
                <div>+100</div>
                <div>Hired</div>
              </div>
              <div className="text-center px-2 py-1 bg-gray-50 rounded text-xs text-gray-600">
                <div>Technology</div>
                <div>Field</div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Recruiter */}
        <div className="bg-white rounded-lg border border-gray-100 p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center space-x-3">
              <img 
                src="https://placekitten.com/65/65" 
                alt="Susan Jeans"
                className="w-12 h-12 rounded-full object-cover"
              />
              <h3 className="font-medium text-gray-900">Susan Jeans</h3>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-600">3.8</span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              Hiring
            </span>
            
            <div>
              <p className="font-medium text-gray-900 text-sm">Talent Acquisition Manager, Hays</p>
              <p className="text-sm text-gray-500">Recruiter For Position At Hays</p>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2 pt-2">
              <button className="flex-1 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700">
                Message
              </button>
              <button className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruitersSection; 