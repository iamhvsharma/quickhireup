import React from 'react';
import { ClockIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline';

const MyApplications = () => {
  const applications = [
    {
      companyName: 'Tech Corp',
      position: 'Senior Developer',
      status: 'pending',
      appliedDate: '2024-03-15',
      logo: 'https://placeholder.com/50'
    },
    // Add more sample applications
  ];

  const getStatusBadge = (status) => {
    const badges = {
      pending: 'bg-yellow-100 text-yellow-800',
      accepted: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800'
    };
    return badges[status] || badges.pending;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Applications</h1>
      
      <div className="bg-white rounded-lg shadow">
        {applications.length > 0 ? (
          applications.map((application, index) => (
            <div 
              key={index}
              className="p-4 border-b last:border-b-0 flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <img 
                  src={application.logo} 
                  alt={application.companyName}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{application.position}</h3>
                  <p className="text-sm text-gray-600">{application.companyName}</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    Applied on {new Date(application.appliedDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
              
              <span className={`px-3 py-1 rounded-full text-sm ${getStatusBadge(application.status)}`}>
                {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
              </span>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600">No applications yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyApplications; 