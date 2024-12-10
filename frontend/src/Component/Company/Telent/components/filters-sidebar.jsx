import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from 'lucide-react';

export function FiltersSidebar() {
  const filters = [
    {
      name: 'Location',
      description: 'Onsite location, relocation and remote preferences',
      current: 'Onsite • All'
    },
    {
      name: 'Skill',
      description: 'Programming languages, frameworks and tools',
      current: null
    },
    {
      name: 'Experience',
      description: 'Years of experience and work history',
      current: null
    },
    {
      name: 'Education',
      description: 'Degree type and education background',
      current: null
    }
  ];

  return (
    <div className="w-80 border-l p-4">
      <div className="mb-4">
        <Badge variant="secondary" className="mb-4">Software Engineer ×</Badge>
      </div>

      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-600">Sort by</span>
        <Button variant="ghost" className="text-sm">
          Best Match
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>

      <div className="space-y-4">
        {filters.map((filter) => (
          <div key={filter.name} className="border-b pb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium">{filter.name}</h3>
                <p className="text-xs text-gray-500">{filter.description}</p>
              </div>
              <Button variant="ghost" size="sm">Preview</Button>
            </div>
            {filter.current && (
              <p className="mt-1 text-sm text-gray-600">{filter.current}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Button variant="outline" className="w-full justify-between">
          Upgrade to access advanced Filters
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
        <Button variant="link" className="w-full mt-2 text-sm">Learn more</Button>
      </div>
    </div>
  );
}

