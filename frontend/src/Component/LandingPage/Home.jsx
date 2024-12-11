import React, { useState } from 'react';
import { Search } from 'lucide-react';
import CompanyLogos from './CompanyLogos';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");

  // Array of user avatars
  const userAvatars = [
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/3.jpg',
    'https://randomuser.me/api/portraits/women/4.jpg',
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching with:", { searchQuery, location, experience });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center w-full">
        {/* Hero Text */}
        <div className="w-full md:max-w-none md:w-full mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 max-w-xl md:max-w-none mx-auto">
            Unlock Your<span className="text-blue-600">⚡Career</span> Potential with Exciting<span className="text-blue-600">📄Opportunities!</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-6 max-w-xl md:max-w-3xl mx-auto">
            We leverage AI to make hiring faster, Find positions that inspire and challenge you daily Access resources, tools, and support for your journey.
          </p>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex mt-8 justify-center">
          <form onSubmit={handleSearch} className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search Job & Companies"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-6 py-3 w-64 text-gray-700 focus:outline-none"
            />
            <div className="border-l border-gray-300 h-8"></div>
            <select 
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="px-6 py-3 text-gray-700 focus:outline-none"
            >
              <option value="">Select experience</option>
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
            </select>
            <div className="border-l border-gray-300 h-8"></div>
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="px-6 py-3 w-48 text-gray-700 focus:outline-none"
            />
            <button type="submit" className="bg-blue-600 text-white px-8 py-3 hover:bg-blue-700 transition-colors">
              Search
            </button>
          </form>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-6">
          <form onSubmit={handleSearch} className="flex flex-col space-y-3 w-full max-w-xs mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search jobs, companies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 text-base text-gray-700 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors text-base font-medium">
              Search Jobs
            </button>
          </form>
        </div>

        {/* Company Logos */}
        <CompanyLogos />

        {/* Trusted By Section */}
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-md">
            <div className="flex -space-x-3 mr-4">
              {userAvatars.map((avatar, i) => (
                <div 
                  key={i} 
                  className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm hover:z-10 transition-transform hover:scale-110"
                >
                  <img
                    src={avatar}
                    alt={`User ${i + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=User${i + 1}&background=random`;
                    }}
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-700">
              Trusted by <span className="text-[#4F46E5] font-semibold">10,000+</span> authors
            </p>
          </div>
        </div>
      </div>

      {/* Call-To-Action Section */}
      <div className="flex flex-col items-center gap-6 py-8 mt-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 max-w-xs sm:max-w-md mx-auto">
          <button className="w-full sm:w-auto bg-[#4F46E5] hover:bg-[#4338CA] text-white px-6 py-2.5 rounded-full text-base font-semibold flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
            Find Your Next Hire
          </button>
          <button className="w-full sm:w-auto bg-white text-[#4F46E5] px-6 py-2.5 rounded-full text-base font-semibold border-2 border-[#4F46E5] flex items-center justify-center hover:bg-[#4F46E5] hover:text-white transition-all duration-300">
            Find Your Dream Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
