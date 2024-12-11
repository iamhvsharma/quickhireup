import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { jobsData } from '../JobList/JobsData';

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    // Find the job from jobsData
    const jobDetails = jobsData.find(j => j.id === jobId);
    setJob(jobDetails);
  }, [jobId]);

  if (!job) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold mb-4">{job.jobTitle}</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{job.companyName}</h2>
          <p className="text-gray-600">{job.location}</p>
          <p className="text-gray-600">{job.salary}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Job Description</h3>
          <p className="text-gray-700">{job.description}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Requirements</h3>
          <ul className="list-disc list-inside text-gray-700">
            {job.requirements?.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-2 mb-6">
          {job.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={() => {/* Add your apply logic here */}}
        >
          Apply for this position
        </button>
      </div>
    </div>
  );
};

export default JobDetails; 