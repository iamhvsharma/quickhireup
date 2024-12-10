import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <Link to="/" className="flex items-center space-x-2">
        <img src="/placeholder.svg" alt="Mock.AI Logo" className="w-10 h-10" />
        <span className="text-xl font-semibold">MOCK.AI</span>
      </Link>
      
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-gray-500 hover:text-gray-900">Home Page</Link>
        <Link to="/mock-interview" className="text-gray-500 hover:text-gray-900">Mock Interview</Link>
        <Link to="/cover-letter" className="text-gray-500 hover:text-gray-900">Cover Letter Generator</Link>
        <Link to="/about" className="text-gray-500 hover:text-gray-900">About</Link>
        <Link to="/contact" className="text-gray-500 hover:text-gray-900">Contact Us</Link>
        <Link to="/jobs" className="text-gray-500 hover:text-gray-900">Job Board</Link>
        <Link to="/signin" className="text-gray-500 hover:text-gray-900">Sign in</Link>
      </div>
    </nav>
  );
}

export default Navbar;

