import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { X, Menu, ChevronDown, Search } from "lucide-react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRolesDropdownOpen, setIsRolesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);
  const rolesDropdownRef = useRef(null);
  const navigate = useNavigate();

  const roles = [
    { name: "Jobs", path: "/auth/register" },
    { name: "Companies", path: "/auth/register" },
    { name: "Students", path: "/auth/register" },
    { name: "Mentors", path: "/auth/register" },
  ];

  const aiSuiteItems = [
    { name: "AI Resume", path: "/resume" },
    { name: "AI Mock", path: "/AiMock" },
    { name: "AI Cover Letter", path: "/aiCoverLetter" },
  ];

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleRolesDropdownToggle = () => {
    setIsRolesDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
    if (rolesDropdownRef.current && !rolesDropdownRef.current.contains(event.target)) {
      setIsRolesDropdownOpen(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchQuery);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative">
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-4 lg:px-6 lg:py-1 rounded-xl mt-8 space-y-4 lg:space-y-0">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-12 lg:h-16 lg:w-16" />
            <Link to="/" className="text-xl lg:text-2xl font-bold text-blue-900 ml-1">
              QuickHireUp
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/auth/register" className="text-sm text-gray-600 hover:text-blue-700">
            Jobs
          </Link>
          <Link to="/auth/register" className="text-sm text-gray-600 hover:text-blue-700">
            Companies
          </Link>
          <Link to="/auth/register" className="text-sm text-gray-600 hover:text-blue-700">
            Students
          </Link>
          <Link to="/auth/register" className="text-sm text-gray-600 hover:text-blue-700">
            Mentors
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleDropdownToggle}
              className="flex items-center space-x-1 text-sm text-gray-600 hover:text-blue-700"
            >
              <span>AI Suite</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100">
                {aiSuiteItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 ${
                      index !== aiSuiteItems.length - 1 ? 'border-b border-gray-50' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/auth/login" className="text-sm text-gray-600 hover:text-blue-700">
            Login
          </Link>
          <Link
            to="/auth/register"
            className="px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors duration-200"
          >
            Register
          </Link>
        </div>

        {/* Mobile Sidebar */}
        <div 
          className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}
        >
          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="py-4 px-4 space-y-6">


            {/* Roles Section */}
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-gray-800 mb-2">Roles</h3>
              {roles.map((role) => (
                <Link
                  key={role.name}
                  to={role.path}
                  className="block text-base text-gray-600 hover:text-blue-700 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {role.name}
                </Link>
              ))}
            </div>

            {/* AI Suite Section */}
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-gray-800 mb-2">AI Suite</h3>
              {aiSuiteItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-base text-gray-600 hover:text-blue-700 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Auth Section */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <Link 
                to="/auth/login" 
                className="block text-base font-medium text-gray-600 hover:text-blue-700 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="block text-base font-medium text-gray-600 hover:text-blue-700 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
