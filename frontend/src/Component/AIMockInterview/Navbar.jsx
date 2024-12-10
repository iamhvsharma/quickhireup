import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                className="h-8 w-8"
                src="/path-to-your-logo.png"
                alt="Mock.AI"
              />
              <span className="ml-2 text-xl font-bold">Mock.AI</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home Page</Link>
            <Link to="/mock-interview" className="text-blue-600">Mock Interview</Link>
            <Link to="/cover-letter" className="text-gray-600 hover:text-gray-900">Cover Letter Generator</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
            <Link to="/jobs" className="text-gray-600 hover:text-gray-900">Job Board</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/sign-in"
              className="text-gray-600 hover:text-gray-900"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 