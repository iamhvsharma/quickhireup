import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Home = () => {
  // Array of user avatars - you can replace these with your actual image URLs
  const userAvatars = [
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/3.jpg',
    'https://randomuser.me/api/portraits/women/4.jpg',
  ];

  return (
    <div className="flex flex-col items-center justify-center  bg-gradient-to-b  py-12">
      <div className="text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 ">
        Unlock Your<span className="text-blue-600">⚡Career</span> Potential with Exciting<span className="text-blue-600">📄Opportunities!</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
        We leverage AI to make hiring faster, Find positions that inspire and challenge you daily Access resources, tools, and support for your journey.
        </p>

        {/* Search Bar */}
        <div className="mt-8 flex items-center justify-center">
          <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search Job & Companies"
              className="px-4 py-3 w-64 text-gray-700 focus:outline-none"
            />
            <div className="border-l border-gray-300 h-8"></div>
            <select className="px-4 py-3 text-gray-700 focus:outline-none">
              <option>Select experience</option>
              <option>Entry Level</option>
              <option>Mid Level</option>
              <option>Senior Level</option>
            </select>
            <div className="border-l border-gray-300 h-8"></div>
            <input
              type="text"
              placeholder="Enter location"
              className="px-4 py-3 w-48 text-gray-700 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Call-To-Action Section */}
      <div className="flex flex-col items-center gap-8 py-12">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center transition-all duration-300 shadow-lg hover:shadow-xl">
            Find Your Next Hire
           
          </button>
          <button className="bg-white text-[#4F46E5] px-8 py-3 rounded-full text-lg font-semibold border-2 border-[#4F46E5] flex items-center hover:bg-[#4F46E5] hover:text-white transition-all duration-300">
   
            Find Your Dream Job
          </button>
        </div>
        
        {/* Trusted By Section */}
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

        {/* Optional: Add a background pattern or illustration */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
