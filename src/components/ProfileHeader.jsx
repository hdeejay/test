function ProfileHeader() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-start space-x-4">
            {/* Profile Image with Edit Icon */}
            <div className="relative">
              <img 
                src="https://placekitten.com/100/100"
                alt="Philip Maya"
                className="w-24 h-24 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">Philip Maya</h1>
              <p className="text-gray-600">UI/UX Designer</p>
              <p className="text-gray-500 mt-1">Porto, Portugal</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50">
              Open to
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-8 mt-8">
          <button className="text-primary border-b-2 border-primary px-1 py-4 text-sm font-medium">
            About
          </button>
          <button className="text-gray-500 px-1 py-4 text-sm font-medium hover:text-gray-700">
            Resume
          </button>
          <button className="text-gray-500 px-1 py-4 text-sm font-medium hover:text-gray-700">
            My Activities
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200">
        {/* Content sections will be rendered here based on selected tab */}
      </div>
    </div>
  );
}

export default ProfileHeader; 