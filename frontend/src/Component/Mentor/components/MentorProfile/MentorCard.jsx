import React from 'react';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';

const MentorCard = ({
  date,
  company,
  title,
  skills,
  rate,
  location,
  isSaved,
  onSave,
  image
}) => {
  return (
    <div className="p-4 bg-[#F8FAFC] border border-gray-200 rounded-2xl hover:shadow-sm transition-all">
      <div className="flex justify-between items-start mb-2">
        <span className="text-sm text-gray-600">{date}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSave();
          }}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          {isSaved ? (
            <BsBookmarkFill className="w-5 h-5 text-blue-600" />
          ) : (
            <BsBookmark className="w-5 h-5 text-gray-400 hover:text-gray-600" />
          )}
        </button>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <img 
          src={image || 'https://via.placeholder.com/64'}
          alt={`${title} at ${company}`}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600">{company}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white rounded-full text-sm border border-gray-200"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <div className="text-gray-900 font-medium">
          ${rate}/hr
          <span className="text-gray-500 text-sm ml-2">{location}</span>
        </div>
        <button className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition-colors">
          Details
        </button>
      </div>
    </div>
  );
};

export default MentorCard; 