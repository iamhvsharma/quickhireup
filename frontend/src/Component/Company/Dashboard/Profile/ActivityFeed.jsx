import React from 'react';

const ActivityFeed = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Activity Feed</h2>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          Get my analytics
        </button>
      </div>
      <p className="text-gray-500 text-sm">
        Here's a reminder of what you and your team have been up to recently
      </p>
    </div>
  );
};

export default ActivityFeed;