import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gray-900">Mock.ai</h1>
        <p className="text-xl text-gray-600">Get you prepared on technical questions</p>
        <div className="flex justify-center space-x-4">
          <Link to="/mock-store" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md">
            Mock Store
          </Link>
          <Link to="/ai-mock" className="bg-white text-gray-900 px-8 py-3 rounded-md border border-gray-300">
            AI Mock
          </Link>
          <Link to="/tutorials" className="bg-white text-gray-900 px-8 py-3 rounded-md border border-gray-300">
            Tutorials
          </Link>
        </div>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Insightful Human Interviews</h2>
        <p className="text-xl text-gray-600">
          At an affordable price, you gain full access to seasoned senior interviewers who possess a deep understanding of the industry.
        </p>
      </div>
    </div>
  );
}

export default HomePage;

