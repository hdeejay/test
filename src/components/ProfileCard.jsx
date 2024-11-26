function ProfileCard() {
  return (
    <div className="bg-white rounded-lg shadow">
      {/* Profile Header */}
      <div className="p-6">
        <div className="flex justify-between items-start">
          {/* Left side - Profile info */}
          <div className="flex items-start space-x-4">
            <div className="relative">
              <img 
                src="https://placekitten.com/100/100"
                alt="Philip Maya"
                className="w-16 h-16 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
            
            <div>
              <h1 className="text-xl font-bold text-gray-900">Philip Maya</h1>
              <p className="text-gray-600 text-sm">UI/UX Designer</p>
              <p className="text-gray-500 text-sm">Porto, Portugal</p>
            </div>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center space-x-2">
            <button className="px-4 py-1.5 border border-gray-300 rounded-full text-sm font-medium text-gray-700">
              Open to
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded-full">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-6 mt-6">
          <button className="text-green-500 border-b-2 border-green-500 px-1 py-2 text-sm font-medium">
            About
          </button>
          <button className="text-gray-500 px-1 py-2 text-sm font-medium">
            Resume
          </button>
          <button className="text-gray-500 px-1 py-2 text-sm font-medium">
            My Activities
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold text-gray-700">About</h2>
          <button className="p-1.5 hover:bg-gray-100 rounded-full">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </div>

        <p className="text-gray-600 text-sm mb-6">
          Updating your information will offer you the most relevent content
        </p>

        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Employment Status <span className="text-red-500">*</span>
            </label>
            <p className="text-gray-500">Not Employed</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <p className="text-gray-500">Philip Maya</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Job Title <span className="text-red-500">*</span>
            </label>
            <p className="text-gray-500">UI/UX Designer</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
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

      {/* Resume Section */}
      <div className="p-6 border-t border-gray-200">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Resume</h2>
          <button className="p-1.5 hover:bg-gray-100 rounded-full">
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>

        {/* Resume File */}
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2">
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">philip Resume.Pdf</p>
              <p className="text-sm text-gray-500">Date Added</p>
            </div>
            <button className="ml-auto p-1.5 hover:bg-gray-100 rounded-full">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Add More Button */}
        <button className="flex items-center text-green-500 font-medium mt-6">
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add More
        </button>
      </div>

      {/* My Activities Section */}
      <div className="p-6 border-t border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">My Activities</h2>

        <div className="grid grid-cols-2 gap-4">
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

              <div className="flex items-center space-x-1">
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

          {/* Second Activity Card - Duplicate of the first */}
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

              <div className="flex items-center space-x-1">
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

        {/* Show All Info Button */}
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

export default ProfileCard; 