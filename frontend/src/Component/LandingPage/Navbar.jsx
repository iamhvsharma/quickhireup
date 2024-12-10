import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 py-1 rounded-xl mt-8">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo" className="h-16 w-16" />
        </div>
        <Link to="/" className="text-2xl font-bold text-blue-900 ml-1">
          QuickHireUp
        </Link>
      </div>

      {/* Links Section */}
      <ul className="hidden md:flex space-x-8 text-sm text-gray-600">
        <li>
          <Link to="/JobAuth" className="hover:text-blue-700">
            Jobs
          </Link>
        </li>
        <li>
          <Link to="/company" className="hover:text-blue-700">
            Companies
          </Link>
        </li>
        <li>
          <Link to="/student" className="hover:text-blue-700">
            Students
          </Link>
        </li>
        <li>
          <Link to="/MentorAuth" className="hover:text-blue-700">
            Mentors
          </Link>
        </li>
        <li className="relative" ref={dropdownRef}>
          <button
            onClick={handleDropdownToggle}
            className="hover:text-blue-700 focus:outline-none flex items-center"
          >
            AI Suite
            <svg
              className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-white rounded-lg border border-gray-100 shadow-lg overflow-hidden transform origin-top scale-100 transition-all duration-200 ease-in-out">
              <li>
                <Link 
                  to="/resume" 
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 border-b border-gray-50"
                >
                  AI Resume
                </Link>
              </li>
              <li>
                <Link 
                  to="/AiMock" 
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 border-b border-gray-50"
                >
                  AI Mock
                </Link>
              </li>
              <li>
                <Link
                  to="/aiCoverLetter"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150"
                >
                  AI Cover Letter
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* Login & Signup Section */}
      <div className="flex items-center space-x-4">
        <Link to="/login" className="text-sm text-gray-600 hover:text-blue-700">
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors duration-200"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
