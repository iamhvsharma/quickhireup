import React from 'react';
import JobListingCard from '../Seeker/JobList/JobListingCard';

const SavedJobs = () => {
  // This would typically come from your backend/state management
  const savedJobs = [
    {
      companyLogo: "https://placeholder.com/50",
      companyName: "Tech Corp",
      jobTitle: "Senior Developer",
      tags: ["React", "Node.js", "Full-time"],
      location: "New York, NY",
      postedTime: "2 days ago",
    },
    // Add more sample jobs as needed
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Saved Jobs</h1>
      
      <div className="space-y-4">
        {savedJobs.length > 0 ? (
          savedJobs.map((job, index) => (
            <JobListingCard
              key={index}
              {...job}
              onSave={() => console.log('Toggle save job', index)}
            />
          ))
        ) : (
          <div className="text-center py-8 bg-white rounded-lg shadow">
            <p className="text-gray-600">No saved jobs yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedJobs; 