import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function MainContent() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/CompanyProfile');
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Let's find your Company</h1>
      <p className="text-gray-600 mb-6">
        Nearly 5 million startups already have a Wellfound profile. We'll look for yours, and if you use an applicant tracking system, we'll help find the jobs you've already posted.
      </p>
      <div className="relative">
        <input
          type="text"
          placeholder="Enter company name"
          className="w-full border-2 border-purple-300 rounded-lg p-3 pl-10 focus:outline-none focus:border-purple-500"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
      </div>
      <Button className=" mt-4 "onClick={handleNext}>Next</Button>
    </div>
  );
}
