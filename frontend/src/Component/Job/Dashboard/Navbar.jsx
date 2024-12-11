import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HomeIcon, 
  ChipIcon, 
  UserCircleIcon,
  DocumentTextIcon,
  UserGroupIcon,
  VideoCameraIcon,
  ChevronDownIcon,
  BriefcaseIcon ,
  BookmarkIcon
} from '@heroicons/react/outline';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isJobsDropdownOpen, setIsJobsDropdownOpen] = useState(false);

  const aiTools = [
    {
      name: 'AI Resume Builder',
      icon: DocumentTextIcon,
      path: '/AiResume',
      description: 'Create professional resumes with AI'
    },
    {
      name: 'AI Match Making',
      icon: UserGroupIcon,
      path: '/ai-matching',
      description: 'Find perfect job matches'
    },
    {
      name: 'AI Interview',
      icon: VideoCameraIcon,
      path: '/AiMock',
      description: 'Practice with AI interviews'
    }
  ];

  const jobOptions = [
    {
      name: 'Browse Jobs',
      icon: BriefcaseIcon,
      path: '/SeekerJobListing',
      description: 'Search all available jobs'
    },
    {
      name: 'Saved Jobs',
      icon:  BookmarkIcon,
      path: '/dashboard/saved-jobs',
      description: 'View your saved jobs'
    },
    {
      name: 'Applied Jobs',
      icon: DocumentTextIcon,
      path: '/dashboard/applications',
      description: 'Track your applications'
    }
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="w-screen px-11">
        <div className="flex justify-between h-16">
          <div className="flex items-center">

            <Link to="/" className="flex items-center">
              <img src="/Logo.png" alt="Logo" className="h-20 w-20" />
              <span className="ml-2 text-xl font-bold">QuickHireUp</span>
            </Link>

            
            <div className="hidden md:flex items-center space-x-8 ml-10">
              <Link to="/" className="flex items-center text-gray-600 hover:text-blue-500">
                <HomeIcon className="h-5 w-5 mr-1" />
                Home
              </Link>
              
              {/* Jobs Dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center text-gray-600 hover:text-blue-500"
                  onClick={() => setIsJobsDropdownOpen(!isJobsDropdownOpen)}
                >
                  <BriefcaseIcon className="h-5 w-5 mr-1" />
                  Jobs
                  <ChevronDownIcon className="h-4 w-4 ml-1" />
                </button>

                {isJobsDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1" role="menu">
                      {jobOptions.map((option, index) => (
                        <Link
                          key={index}
                          to={option.path}
                          className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                          onClick={() => setIsJobsDropdownOpen(false)}
                        >
                          <option.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-blue-500" />
                          <div>
                            <p className="font-medium">{option.name}</p>
                            <p className="text-xs text-gray-500">{option.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* AI Tools Dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center text-gray-600 hover:text-blue-500"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <ChipIcon className="h-5 w-5 mr-1" />
                  AI Tools
                  <ChevronDownIcon className="h-4 w-4 ml-1" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1" role="menu">
                      {aiTools.map((tool, index) => (
                        <Link
                          key={index}
                          to={tool.path}
                          className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <tool.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-blue-500" />
                          <div>
                            <p className="font-medium">{tool.name}</p>
                            <p className="text-xs text-gray-500">{tool.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <UserCircleIcon className="h-8 w-8 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;