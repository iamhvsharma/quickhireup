import React from 'react';

function MockInterviewPage() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex">
        <div className="w-1/4 pr-8">
          <button className="w-full mb-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Mock Store
          </button>
          <nav className="space-y-2">
            <a href="#" className="block text-gray-600 hover:text-gray-900">AI Mock</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Upcoming Mocks</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Mock History</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Terms</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Privacy</a>
          </nav>
        </div>
        <div className="w-3/4">
          <h1 className="text-3xl font-bold mb-4">Mock Interview Shop</h1>
          <p className="text-gray-600 mb-6">
            Our interviewers are meticulously chosen to uphold our stringent standards, ensuring that each interview session meets our customers' expectations. Moreover, the information provided about our interviewers is both accurate and up-to-date. Please select your preferred interviewer from the list provided below.
          </p>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Search by name or position"
              className="flex-grow mr-2 px-4 py-2 border rounded"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Search
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">1</span>
            <button className="px-4 py-2 border rounded">Filters</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MockInterviewPage;

