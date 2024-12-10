import React from 'react';
import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-64 border-r p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Source</h2>
        <Button variant="link" className="text-blue-600">+ New Search</Button>
      </div>

      <div className="flex mb-4">
        <button className="flex-1 py-2 px-4 bg-white">Starred</button>
        <button className="flex-1 py-2 px-4 bg-gray-100">All Searches</button>
      </div>

      <div className="space-y-2">
        {['Full-Stack Engineer', 'Product Manager', 'Software Engineer', 'UI/UX Designer'].map((job) => (
          <div key={job} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <div>
              <div className="text-xs text-blue-600 mb-1">New</div>
              <div className="text-sm font-medium">{job}</div>
              <div className="text-xs text-gray-500">System Generated</div>
            </div>
            <Button variant="ghost" size="icon">
              <Star className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

