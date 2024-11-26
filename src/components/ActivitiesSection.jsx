import React from 'react';

function ActivitiesSection() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-600 mb-6">My Activities</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Activity Card */}
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <img 
                  src="/meta-logo.png" 
                  alt="Meta company"
                  className="w-5 h-5"
                />
              </div>
              <span className="text-gray-600 text-sm">Meta company</span>
            </div>

            <div className="flex items-center space-x-2">
              <button className="p-1.5 hover:bg-gray-100 rounded-sm">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                </svg>
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded-sm">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-3">
            <h3 className="font-semibold text-gray-900">Product Designer</h3>
            <p className="text-sm text-gray-500 mt-1">
              Porto, Portugal <span className="text-gray-400">(On Site)</span>
            </p>
          </div>

          <div className="mt-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-green-700 bg-green-50 border border-green-200">
              Archived 5 Days Ago
            </span>
          </div>
        </div>

        {/* Second Activity Card */}
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <img 
                  src="/meta-logo.png" 
                  alt="Meta company"
                  className="w-5 h-5"
                />
              </div>
              <span className="text-gray-600 text-sm">Meta company</span>
            </div>

            <div className="flex items-center space-x-2">
              <button className="p-1.5 hover:bg-gray-100 rounded-sm">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                </svg>
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded-sm">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-3">
            <h3 className="font-semibold text-gray-900">Product Designer</h3>
            <p className="text-sm text-gray-500 mt-1">
              Porto, Portugal <span className="text-gray-400">(On Site)</span>
            </p>
          </div>

          <div className="mt-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-green-700 bg-green-50 border border-green-200">
              Archived 5 Days Ago
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button className="flex items-center text-indigo-600 text-sm font-medium">
          Show All Info
          <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ActivitiesSection; 