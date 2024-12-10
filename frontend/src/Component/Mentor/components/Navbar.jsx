import React from 'react';

const Navbar = () => {
  return (
    <header className="border-b">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          </svg>
          <span className="text-xl font-medium">Mentor</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="/Mentor" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900 transition-colors"
          >
            Find a mentor
          </a>
          <a 
            href="/become-mentor" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900 transition-colors"
          >
            Become a mentor
          </a>
        </div>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
          Sign in
        </button>
      </nav>
    </header>
  );
};

export default Navbar;


