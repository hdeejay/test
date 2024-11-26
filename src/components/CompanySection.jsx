import React from 'react';

function CompanySection() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Best Company for you</h2>

      {/* Company Cards */}
      <div className="space-y-4">
        {/* First Company */}
        <div className="flex items-start justify-between pb-4">
          <div className="flex items-start space-x-3">
            {/* Company Logo */}
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-xs font-medium">Bluefox</span>
            </div>

            <div>
              <div className="flex items-center">
                <h3 className="font-medium text-gray-900">Bluefox</h3>
                <div className="flex items-center ml-2">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-600">4.2</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">Graphic Designer</p>
              <p className="text-sm text-gray-500">Netherlands</p>
              <p className="text-sm text-gray-500">7k+ Employees</p>
            </div>
          </div>
        </div>

        {/* Join Button */}
        <button className="w-full px-4 py-2 bg-purple-100 text-purple-800 rounded-lg text-sm font-medium hover:bg-purple-200">
          5 Jobs
        </button>

        {/* Second Company */}
        <div className="flex items-start justify-between pt-4 border-t border-gray-200">
          <div className="flex items-start space-x-3">
            {/* Company Logo */}
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-xs font-medium">Corvana</span>
            </div>

            <div>
              <div className="flex items-center">
                <h3 className="font-medium text-gray-900">Corvana</h3>
                <div className="flex items-center ml-2">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-600">4.1</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">UI/UX Designer</p>
              <p className="text-sm text-gray-500">Italy</p>
              <p className="text-sm text-gray-500">4k+ Employees</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 mt-4">
          <button className="flex-1 px-4 py-2 bg-purple-100 text-purple-800 rounded-lg text-sm font-medium hover:bg-purple-200">
            15 Jobs
          </button>
          <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-200">
            High benefit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompanySection; 