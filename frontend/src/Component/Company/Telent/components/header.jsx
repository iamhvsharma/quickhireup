import React from 'react';
import { Search, Settings, Building2, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="border-b bg-black text-white">
      <div className="flex h-16 items-center px-4 gap-4">
        <div className="flex items-center gap-6">
          <a href="#" className="text-2xl font-bold">W:</a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm hover:text-gray-300">Dashboard</a>
            <a href="#" className="text-sm hover:text-gray-300">Jobs</a>
            <a href="#" className="text-sm hover:text-gray-300">Applicants</a>
            <a href="#" className="text-sm hover:text-gray-300">Find Talent</a>
            <a href="#" className="text-sm hover:text-gray-300">Messages</a>
            <a href="#" className="text-sm hover:text-gray-300">ATS</a>
          </nav>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="search"
              placeholder="Search..."
              className="w-64 rounded-md border border-gray-800 bg-gray-950 px-8 py-2 text-sm"
            />
          </div>
          
          <Button variant="outline" className="hidden md:flex border-gray-800 text-white">
            Discover Recruit Pro
          </Button>
          
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <Building2 className="h-5 w-5" />
          </Button>
          
          <div className="relative">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-600" />
          </div>

          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>HS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}

