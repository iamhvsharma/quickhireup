import React, { useState } from 'react';
import { FiSearch, FiUpload } from 'react-icons/fi';
import { BsPeople } from 'react-icons/bs';
import Sidebar from '../Dashboard/Sidebar';

const JobsPage = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Jobs</h1>
            <button className="text-blue-600 hover:text-blue-700">+ Post Job</button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by job"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Tabs */}
          <div className="flex mb-6">
            <button
              className={`px-4 py-2 ${
                activeTab === 'active'
                  ? 'bg-white border-t border-l border-r rounded-t-md'
                  : 'bg-gray-100'
              }`}
              onClick={() => setActiveTab('active')}
            >
              Active (0)
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === 'drafts'
                  ? 'bg-white border-t border-l border-r rounded-t-md'
                  : 'bg-gray-100'
              }`}
              onClick={() => setActiveTab('drafts')}
            >
              Drafts (0)
            </button>
          </div>

          {/* Post Job Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold text-center mb-3">Post a job for free</h2>
            <p className="text-gray-600 text-center mb-6">
              We have a global network of over 3.5M active job seekers. Let them know you're hiring.
            </p>
            <div className="space-y-3">
              <button className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 flex items-center justify-center gap-2">
                <FiUpload /> Post a Job
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center gap-2">
                <BsPeople /> Connect ATS
              </button>
            </div>
          </div>

          {/* No Jobs State */}
          <div className="bg-white/50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">No jobs.</h3>
            <p className="text-gray-600 mb-6">
              You don't need to post a job to start reaching out to candidates.
            </p>
            <div className="flex justify-center gap-4">
              <button className="py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2">
                <BsPeople /> Find Talent
              </button>
              <button className="py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 flex items-center gap-2">
                <FiUpload /> Post a Job
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Help Button */}
      <button className="fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
        Help
      </button>
    </div>
  );
};

export default JobsPage; 