import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Sidebar from '../Sidebar';

const ApplicationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [applications] = useState([
    {
      id: 1,
      candidate: 'John Doe',
      position: 'Frontend Developer',
      status: 'Under Review',
      appliedDate: '2024-02-20',
      avatar: 'https://via.placeholder.com/40'
    },
    // Add more sample applications as needed
  ]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Applications</h1>
            
            {/* Search Bar */}
            <div className="relative w-96">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search applications"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Applications List */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="grid grid-cols-5 gap-4 font-medium text-gray-500">
                <div>Candidate</div>
                <div>Position</div>
                <div>Status</div>
                <div>Applied Date</div>
                <div>Actions</div>
              </div>
            </div>

            {applications.length > 0 ? (
              applications.map((application) => (
                <div 
                  key={application.id} 
                  className="px-6 py-4 border-b border-gray-200 hover:bg-gray-50"
                >
                  <div className="grid grid-cols-5 gap-4 items-center">
                    <div className="flex items-center">
                      <img 
                        src={application.avatar} 
                        alt={application.candidate} 
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <span className="font-medium">{application.candidate}</span>
                    </div>
                    <div>{application.position}</div>
                    <div>
                      <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                        {application.status}
                      </span>
                    </div>
                    <div>{application.appliedDate}</div>
                    <div>
                      <button className="text-blue-600 hover:text-blue-800">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-8 text-center text-gray-500">
                No applications found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPage; 