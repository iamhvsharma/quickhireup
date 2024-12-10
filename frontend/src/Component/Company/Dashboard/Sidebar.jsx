import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  MessageSquareMore, 
  Search,
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { 
      path: '/CompanyDashboard', 
      icon: <LayoutDashboard size={22} />, 
      label: 'Dashboard',
      color: 'text-blue-500' 
    },
    { 
      path: '/jobs', 
      icon: <Briefcase size={22} />, 
      label: 'Jobs',
      color: 'text-purple-500'
    },
    { 
      path: '/applications', 
      icon: <Users size={22} />, 
      label: 'Applications',
      color: 'text-green-500'
    },
    { 
      path: '/FindTalent', 
      icon: <Search size={22} />, 
      label: 'Find Talent',
      color: 'text-orange-500'
    },
    { 
      path: '/messages', 
      icon: <MessageSquareMore size={22} />, 
      label: 'Messages',
      color: 'text-pink-500'
    },
  ];

  const bottomMenuItems = [
    { 
      path: '/settings', 
      icon: <Settings size={22} />, 
      label: 'Settings',
      color: 'text-gray-500'
    },
    { 
      path: '/help', 
      icon: <HelpCircle size={22} />, 
      label: 'Help Center',
      color: 'text-gray-500'
    },
    { 
      path: '/logout', 
      icon: <LogOut size={22} />, 
      label: 'Logout',
      color: 'text-red-500'
    },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-100 fixed left-0 top-0 shadow-sm">
      {/* Logo Section */}
      <div className="h-16 flex items-center px-6 border-b border-gray-100">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            QuickHireUp
          </span>
        </Link>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col justify-between h-[calc(100vh-4rem)]">
        <nav className="mt-6 px-3">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 mb-2 text-gray-700 rounded-lg transition-all duration-200 group hover:bg-gray-50
                ${location.pathname === item.path 
                  ? 'bg-gray-50 shadow-sm border-l-4 border-blue-500' 
                  : ''
                }`}
            >
              <span className={`${item.color} group-hover:scale-110 transition-transform duration-200`}>
                {item.icon}
              </span>
              <span className="ml-3 font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Bottom Menu Items */}
        <nav className="mb-6 px-3 border-t border-gray-100 pt-6">
          {bottomMenuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 mb-2 text-gray-700 rounded-lg transition-all duration-200 group hover:bg-gray-50
                ${location.pathname === item.path 
                  ? 'bg-gray-50 shadow-sm' 
                  : ''
                }`}
            >
              <span className={`${item.color} group-hover:scale-110 transition-transform duration-200`}>
                {item.icon}
              </span>
              <span className="ml-3 font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar; 