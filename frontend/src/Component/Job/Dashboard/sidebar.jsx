import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  UserIcon, 
  CogIcon, 
  LogoutIcon,
  BookmarkIcon,
  DocumentTextIcon 
} from '@heroicons/react/outline';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: UserIcon, label: 'Profile', path: '/dashboard/profile' },
    { icon: BookmarkIcon, label: 'Saved Jobs', path: '/dashboard/saved-jobs' },
    { icon: DocumentTextIcon, label: 'My Applications', path: '/dashboard/applications' },
    { icon: CogIcon, label: 'Settings', path: '/dashboard/settings' },
  ];

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...');
  };

  return (
    <div className="w-64 bg-white shadow-sm h-[calc(100vh-4rem)]">
      <div className="p-4">
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 
                ${location.pathname === item.path ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
          
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 text-red-600 w-full"
          >
            <LogoutIcon className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

