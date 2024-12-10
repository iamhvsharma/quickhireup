import { Home, User, Briefcase, CheckSquare, MessageSquare, Compass } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils"

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: User, label: 'Profile', path: '/profile', hasNotification: true },
  { icon: Briefcase, label: 'Jobs', path: '/jobs' },
  { icon: CheckSquare, label: 'Applied', path: '/applied' },
  { icon: MessageSquare, label: 'Messages', path: '/messages' },
  { icon: Compass, label: 'Discover', path: '/discover' }
];

export function SideNav() {
  const location = useLocation();

  return (
    <nav className="fixed left-0 top-0 h-full w-20 bg-white border-r border-gray-200 flex flex-col items-center py-4">
      {navItems.map(({ icon: Icon, label, path, hasNotification }) => {
        const isActive = location.pathname === path;
        
        return (
          <Link
            key={path}
            to={path}
            className={cn(
              "relative w-full p-3 flex flex-col items-center gap-1 text-sm text-gray-600 hover:text-gray-900 group",
              isActive && "text-blue-600 bg-blue-50"
            )}
          >
            <div className="relative">
              <Icon className="h-6 w-6" />
              {hasNotification && (
                <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full" />
              )}
            </div>
            <span className="text-xs">{label}</span>
            {isActive && (
              <div className="absolute inset-0 bg-blue-50 -z-10" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}