import React from 'react';
import Header from './Header';

function JobApplication() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Job Title Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span>Meta Company</span>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">Product designer</h1>
          <p className="text-sm text-gray-600">Florida, Chicago</p>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <form className="space-y-6">
            {/* Personal Information */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name*
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number*
                </label>
                <div className="flex">
                  <select className="px-3 py-2 border border-gray-300 rounded-l-lg border-r-0">
                    <option>🇺🇸 +1</option>
                  </select>
                  <input
                    type="tel"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
              </div>
            </div>

            {/* File Uploads */}
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload CV*
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <button type="button" className="text-primary hover:text-primary-dark">
                    Choose file
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional file
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <button type="button" className="text-primary hover:text-primary-dark">
                    Choose file
                  </button>
                </div>
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cover Letter
              </label>
              <textarea
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              ></textarea>
            </div>

            {/* Terms */}
            <div className="space-y-3">
              <label className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" />
                <span className="text-sm text-gray-600">
                  By sending this job application, I agree that I have read the Privacy Policy and confirm
                  that all provided information is accurate and complete.
                </span>
              </label>
              <label className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" />
                <span className="text-sm text-gray-600">
                  Yes, Joblor can notify me directly when specific jobs are open.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white rounded-lg py-3 font-medium hover:bg-gray-800 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JobApplication; 