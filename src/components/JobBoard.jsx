import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';

function JobBoard() {
  const navigate = useNavigate();

  const jobListings = [
    {
      id: 1,
      title: "UX/UI Designer",
      type: "Remote",
      location: "Karlsruhe, Germany",
      applicants: 17,
      views: 901,
      datePosted: "06/Jul/2024",
      status: "Closed",
    },
    {
      id: 2,
      title: "Product Designer",
      type: "Hybrid",
      location: "Torino, Italy",
      applicants: 26,
      views: 901,
      datePosted: "06/Jul/2024",
      status: "Closed",
    },
    {
      id: 3,
      title: "Product Designer",
      type: "On Site",
      location: "Delft, Netherlands",
      applicants: 10,
      views: 203,
      datePosted: "09/Jul/2024",
      status: "Open",
    },
    {
      id: 4,
      title: "UX/UI Designer",
      type: "Hybrid",
      location: "Berlin, Germany",
      applicants: 15,
      views: 901,
      datePosted: "06/Jul/2024",
      status: "Paused",
    },
    {
      id: 5,
      title: "Developer",
      type: "Hybrid",
      location: "Bonn, Germany",
      applicants: 25,
      views: 856,
      datePosted: "06/Jul/2024",
      status: "Closed",
    },
  ];

  const handleApplicationsClick = () => {
    navigate('/applications');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center space-x-8 border-b border-gray-200 mb-6">
          <button className="text-purple-600 border-b-2 border-purple-600 px-1 py-4 text-sm font-medium">
            Posts
          </button>
          <button className="text-gray-500 px-1 py-4 text-sm font-medium hover:text-gray-700">
            Jobs
          </button>
          <button className="text-gray-500 px-1 py-4 text-sm font-medium hover:text-gray-700">
            Companies
          </button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Posts</h1>
          <div className="relative">
            <button 
              onClick={handleApplicationsClick}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Applications ▼
            </button>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex space-x-4 mb-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Search and Filter"
              />
            </div>

            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-800 hover:bg-purple-700">
              Marked
            </button>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="font-medium">Open And Paused</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Job Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Location
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Applicants
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Views
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date Posted
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {jobListings.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-purple-600 mr-2">★</span>
                      <div className="text-sm font-medium text-gray-900">
                        {job.title}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-purple-600 hover:text-purple-700 text-sm">
                      {job.applicants}{" "}
                      <span className="text-gray-500">View</span>
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.views}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.datePosted}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex text-xs font-medium ${
                        job.status === "Open"
                          ? "text-green-800"
                          : job.status === "Paused"
                          ? "text-yellow-800"
                          : "text-gray-800"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-purple-600 hover:text-purple-900">
                      ⋮
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default JobBoard;
