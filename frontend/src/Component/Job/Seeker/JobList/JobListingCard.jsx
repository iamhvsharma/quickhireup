import React, { useState } from 'react';
import { BookmarkIcon as BookmarkOutlineIcon } from '@heroicons/react/outline';
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/solid';

const JobCard = ({ 
  companyLogo,
  companyName,
  jobTitle,
  tags,
  location,
  postedTime,
  onSave
}) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow flex justify-between items-start gap-4">
      {/* Left section with logo and job details */}
      <div className="flex gap-4">
        {/* Company logo */}
        <div className="w-12 h-12">
          <img 
            src={companyLogo} 
            alt={`${companyName} logo`}
            className="w-full h-full object-contain rounded"
          />
        </div>

        {/* Job information */}
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-sm text-gray-600">{companyName}</p>
            <h2 className="text-lg font-semibold">{jobTitle}</h2>
          </div>

          {/* Tags section */}
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Location and time */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{location}</span>
            <span>•</span>
            <span>{postedTime}</span>
          </div>
        </div>
      </div>

      {/* Save button */}
      <button 
        onClick={() => {
          setIsSaved(!isSaved);
          onSave();
        }}
        className="p-2 hover:bg-gray-100 rounded-full"
      >
        {isSaved ? (
          <BookmarkSolidIcon className="w-5 h-5 text-blue-500" />
        ) : (
          <BookmarkOutlineIcon className="w-5 h-5 text-gray-600" />
        )}
      </button>
    </div>
  );
};

export default JobCard;