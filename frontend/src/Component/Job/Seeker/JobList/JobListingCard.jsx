import React, { useState } from 'react';
import { BookmarkIcon as BookmarkOutlineIcon } from '@heroicons/react/outline';
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/solid';

const JobListCard = ({
  id,
  jobTitle,
  companyName,
  location,
  salary,
  description,
  tags,
  isSaved,
  onSave,
  applyBy,
  duration
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{jobTitle}</h2>
          <p className="text-gray-600">{companyName}</p>
        </div>
        <button
          onClick={() => onSave(id)}
          className={`p-2 rounded-full ${
            isSaved ? 'text-blue-600' : 'text-gray-400'
          } hover:bg-gray-100`}
        >
          {/* Your save icon */}
        </button>
      </div>

      <div className="mb-4">
        <p className="text-gray-700">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center gap-4">
          <span>{location}</span>
          <span>{salary}</span>
          <span>{duration} months</span>
        </div>
        <div>
          Apply by: {new Date(applyBy).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default JobListCard;