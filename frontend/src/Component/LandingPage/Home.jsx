import React, { useState } from 'react';
import typescriptIcon from '../../assets/icons/typescript.svg';
import reactIcon from '../../assets/icons/reactjs.svg';
import nodeIcon from '../../assets/icons/nodejs.svg';
import mongodbIcon from '../../assets/icons/mongodb.svg';

import bitcoinIcon from '../../assets/icons/lightroom.svg';
import { Background } from "@/components/ui/Background";

const Home = () => {
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Array of user avatars - you can replace these with your actual image URLs
  const userAvatars = [
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/3.jpg',
    'https://randomuser.me/api/portraits/women/4.jpg',
  ];

  // Define tech stack icons with their positions
  const techIcons = [
    { src: typescriptIcon, alt: "TypeScript", className: "absolute top-20 left-20" },
    { src: reactIcon, alt: "React", className: "absolute top-40 right-20" },
    { src: nodeIcon, alt: "Node.js", className: "absolute bottom-25 left-38" },
    { src: mongodbIcon, alt: "MongoDB", className: "absolute top-60 right-40" },
   
    { src: bitcoinIcon, alt: "Bitcoin", className: "absolute bottom-60 right-60" }
  ];

  return (
    <div className="relative md:min-h-max h-max">
      <Background />
      <div
        className="flex flex-col items-center justify-center py-12 relative"
        onMouseMove={handleMouseMove}
      >
        
        {/* Floating Tech Icons - Now hidden on mobile */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {techIcons.map((icon, index) => (
            <div
              key={index}
              className={`${icon.className} transform transition-all duration-500 ease-out`}
              style={{
                transform: `translate(${(mousePosition.x - window.innerWidth/2) * 0.1}px, ${(mousePosition.y - window.innerHeight/2) * 0.1}px)`
              }}
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-12 h-12 md:w-16 md:h-16 hover:opacity-100 transition-opacity duration-300 filter contrast-125"
              />
            </div>
          ))}
        </div>
        
        {/* Hero Content - Updated text sizes */}
        <div className="text-center px-4 max-w-4xl mx-auto relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Unlock Your<span className="text-blue-600">⚡Career</span> Potential with Exciting<span className="text-blue-600">📄Opportunities!</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4 md:mt-6 max-w-3xl mx-auto">
            We leverage AI to make hiring faster, Find positions that inspire and challenge you daily Access resources.
          </p>

          {/* Search Bars */}
          <div className="mt-6 md:mt-8">
            {/* Mobile Search Bar */}
            <div className="block md:hidden w-full px-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search jobs, companies, or keywords..."
                  className="w-full px-4 py-3 rounded-full bg-white shadow-lg text-gray-700 focus:outline-none pr-16"
                />
                <button className="absolute right-0 top-0 h-full bg-blue-600 text-white px-6 rounded-r-full">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex items-center">
              <div className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-full shadow-lg overflow-hidden w-full max-w-4xl mx-4">
                <input
                  type="text"
                  placeholder="Search Job & Companies"
                  className="px-4 py-3 w-full sm:w-64 text-gray-700 focus:outline-none"
                />
                <div className="hidden sm:block border-l border-gray-300 h-8"></div>
                <select className="px-4 py-3 w-full sm:w-auto text-gray-700 focus:outline-none">
                  <option>Select experience</option>
                  <option>Entry Level</option>
                  <option>Mid Level</option>
                  <option>Senior Level</option>
                </select>
                <div className="hidden sm:block border-l border-gray-300 h-8"></div>
                <input
                  type="text"
                  placeholder="Enter location"
                  className="px-4 py-3 w-full sm:w-48 text-gray-700 focus:outline-none"
                />
                <button className="sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-full">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call-To-Action Section - Updated spacing */}
        <div className="flex flex-col items-center gap-6 md:gap-8 py-8 md:py-12">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full px-4 sm:px-0">
            <button className="w-full sm:w-auto bg-[#4F46E5] hover:bg-[#4338CA] text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-semibold flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
              Find Your Next Hire
            </button>
            <button className="w-full sm:w-auto bg-white text-[#4F46E5] px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-semibold border-2 border-[#4F46E5] flex items-center justify-center hover:bg-[#4F46E5] hover:text-white transition-all duration-300">
              Find Your Dream Job
            </button>
          </div>

          {/* Trusted By Section - Made responsive */}
          <div className="flex items-center bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-md">
            <div className="flex -space-x-3 mr-3 sm:mr-4">
              {userAvatars.map((avatar, i) => (
                <div
                  key={i}
                  className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white shadow-sm hover:z-10 transition-transform hover:scale-110"
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
            <p className="text-xs sm:text-sm text-gray-700">
              Trusted by <span className="text-[#4F46E5] font-semibold">10,000+</span> authors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;