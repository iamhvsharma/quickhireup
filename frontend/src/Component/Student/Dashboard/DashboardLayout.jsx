import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard,
  BookOpen,
  Briefcase,
  UserCircle,
  GraduationCap,
  Settings,
  Bell,
  Search,
  LogOut,
  HelpCircle
} from 'lucide-react';

const DashboardLayout = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: 'Overview',
      icon: <LayoutDashboard className="w-5 h-5" />,
      path: '/student/dashboard'
    },
    {
      title: 'Learning',
      icon: <BookOpen className="w-5 h-5" />,
      path: '/student/dashboard/learning'
    },
    {
      title: 'Internships',
      icon: <Briefcase className="w-5 h-5" />,
      path: '/student/dashboard/internships'
    },
    {
      title: 'Profile',
      icon: <UserCircle className="w-5 h-5" />,
      path: '/student/dashboard/profile'
    },
    {
      title: 'Courses',
      icon: <GraduationCap className="w-5 h-5" />,
      path: '/student/dashboard/courses'
    }
  ];

  const bottomMenuItems = [
    {
      title: 'Settings',
      icon: <Settings className="w-5 h-5" />,
      path: '/student/dashboard/settings'
    },
    {
      title: 'Help',
      icon: <HelpCircle className="w-5 h-5" />,
      path: '/student/dashboard/help'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-lg">Student Portal</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors
                  ${location.pathname === item.path 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                  }`}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Menu */}
        <div className="p-4 border-t border-gray-200">
          <div className="space-y-1">
            {bottomMenuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}
            <button 
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors w-full"
              onClick={() => {/* Handle logout */}}
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <UserCircle className="h-5 w-5" />
                </div>
                <span className="text-gray-700">John Doe</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 