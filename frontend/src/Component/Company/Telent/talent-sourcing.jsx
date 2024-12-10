import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { CandidateProfile } from './components/candidate-profile';
import { FiltersSidebar } from './components/filters-sidebar';

export default function TalentSourcing() {
  const navigate = useNavigate();

  const handlePublish = () => {
    navigate('/CompanyDashboard');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Find Talent</h1>
          <button
            onClick={handlePublish}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
          >
        Publish
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-1">
        <Sidebar />
        <CandidateProfile />
        <FiltersSidebar />
      </div>
    </div>
  );
}

