import React from 'react';

function AboutSection() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold text-gray-900">About</h2>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <p className="text-gray-600 text-sm mb-6">
          Updating your information will offer you the most relevent content
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Employment Status <span className="text-red-500">*</span>
            </label>
            <p className="text-gray-500">Not Employed</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <p className="text-gray-500">Philip Maya</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Job Title <span className="text-red-500">*</span>
            </label>
            <p className="text-gray-500">UI/UX Designer</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Location <span className="text-red-500">*</span>
            </label>
            <p className="text-gray-500">Porto, (Portugal)</p>
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
    </div>
  );
}

export default AboutSection; 