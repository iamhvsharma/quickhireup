import React, { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, Clock, Bookmark } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

const jobData = [
  {
    id: 1,
    company: 'Mercedes',
    logo: '/placeholder.svg',
    title: 'Java Developer',
    description: 'Build cutting-edge web applications from start to finish, utilizing your expertise in both front-end and back-end technologies.',
    type: 'Full Time',
    level: 'Mid Level',
    bgColor: 'bg-blue-50'
  },
  {
    id: 2,
    company: 'Google',
    logo: '/placeholder.svg',
    title: 'Java Developer',
    description: 'Build cutting-edge web applications from start to finish, utilizing your expertise in both front-end and back-end technologies.',
    type: 'Full Time',
    level: 'Mid Level',
    bgColor: 'bg-green-50'
  },
  {
    id: 3,
    company: 'Tesla',
    logo: '/placeholder.svg',
    title: 'Java Developer',
    description: 'Build cutting-edge web applications from start to finish, utilizing your expertise in both front-end and back-end technologies.',
    type: 'Full Time',
    level: 'Mid Level',
    bgColor: 'bg-pink-50'
  },
  {
    id: 4,
    company: 'BMW',
    logo: '/placeholder.svg',
    title: 'Java Developer',
    description: 'Build cutting-edge web applications from start to finish, utilizing your expertise in both front-end and back-end technologies.',
    type: 'Full Time',
    level: 'Mid Level',
    bgColor: 'bg-purple-50'
  },
  {
    id: 5,
    company: 'IBM',
    logo: '/placeholder.svg',
    title: 'Java Developer',
    description: 'Build cutting-edge web applications from start to finish, utilizing your expertise in both front-end and back-end technologies.',
    type: 'Full Time',
    level: 'Mid Level',
    bgColor: 'bg-gray-50'
  },
  {
    id: 6,
    company: 'Apple',
    logo: '/placeholder.svg',
    title: 'Java Developer',
    description: 'Build cutting-edge web applications from start to finish, utilizing your expertise in both front-end and back-end technologies.',
    type: 'Full Time',
    level: 'Mid Level',
    bgColor: 'bg-orange-50'
  }
];

export default function JobDiscovery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('2+ Years Experience');
  const [salaryRange, setSalaryRange] = useState([2400, 8000]);
  const [filteredJobs, setFilteredJobs] = useState(jobData);
  const [filters, setFilters] = useState({
    jobType: {
      'Full-Time': true,
      'Part-Time': false,
      'Remote': false,
      'Internship': false,
      'Contract': false
    },
    workType: {
      'On-Site': false,
      'Remote': true,
      'Hybrid': true
    }
  });

  // Filter jobs based on search term and filters
  useEffect(() => {
    let results = jobData.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesJobType = filters.jobType[job.type] || false;
      return matchesSearch && matchesJobType;
    });
    setFilteredJobs(results);
  }, [searchTerm, filters]);

  const clearFilters = () => {
    setSearchTerm('');
    setLocation('');
    setExperience('2+ Years Experience');
    setSalaryRange([2400, 8000]);
    setFilters({
      jobType: {
        'Full-Time': false,
        'Part-Time': false,
        'Remote': false,
        'Internship': false,
        'Contract': false
      },
      workType: {
        'On-Site': false,
        'Remote': false,
        'Hybrid': false
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="bg-gray-50 p-4 rounded-lg mb-8">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Java Developer"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Felosa Drive, Los Angeles"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex-1 min-w-[200px]">
            <div className="px-3">
              <p className="text-sm text-gray-600 mb-2">Salary Range (Month)</p>
              <Slider
                value={salaryRange}
                onValueChange={setSalaryRange}
                min={0}
                max={10000}
                step={100}
              />
              <div className="flex justify-between mt-1 text-sm text-gray-600">
                <span>${salaryRange[0]}</span>
                <span>${salaryRange[1]}</span>
              </div>
            </div>
          </div>
          <Button className="bg-black text-white min-w-[100px]">
            Search
          </Button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Filters</h2>
            <Button variant="link" onClick={clearFilters}>Clear All</Button>
          </div>

          <div className="space-y-6">
            {/* Job Type */}
            <div>
              <h3 className="font-semibold mb-2">Job Type</h3>
              <div className="space-y-2">
                {Object.entries(filters.jobType).map(([type, checked]) => (
                  <div key={type} className="flex items-center">
                    <Checkbox
                      id={`job-${type}`}
                      checked={checked}
                      onCheckedChange={(checked) =>
                        setFilters(prev => ({
                          ...prev,
                          jobType: { ...prev.jobType, [type]: checked }
                        }))
                      }
                    />
                    <label htmlFor={`job-${type}`} className="ml-2 text-sm">
                      {type} ({type === 'Full-Time' ? '510' : type === 'Part-Time' ? '324' : '234'})
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Type */}
            <div>
              <h3 className="font-semibold mb-2">Work Type</h3>
              <div className="space-y-2">
                {Object.entries(filters.workType).map(([type, checked]) => (
                  <div key={type} className="flex items-center">
                    <Checkbox
                      id={`work-${type}`}
                      checked={checked}
                      onCheckedChange={(checked) =>
                        setFilters(prev => ({
                          ...prev,
                          workType: { ...prev.workType, [type]: checked }
                        }))
                      }
                    />
                    <label htmlFor={`work-${type}`} className="ml-2 text-sm">{type}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Employment Type */}
            <div>
              <h3 className="font-semibold mb-2">Employment Type</h3>
              <Button variant="ghost" className="w-full justify-start">
                <Clock className="mr-2 h-4 w-4" />
                <span>View Options</span>
              </Button>
            </div>

            {/* Job Functions */}
            <div>
              <h3 className="font-semibold mb-2">Job Functions</h3>
              <Button variant="ghost" className="w-full justify-start">
                <Briefcase className="mr-2 h-4 w-4" />
                <span>View Options</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">
              Java Developer <span className="text-gray-500">Search Result ({filteredJobs.length})</span>
            </h2>
            <select className="border rounded-md px-3 py-1">
              <option>Popular</option>
              <option>Recent</option>
              <option>Most Relevant</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredJobs.map((job) => (
              <Card key={job.id} className={`${job.bgColor} p-6 relative`}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2"
                >
                  <Bookmark className="h-4 w-4" />
                </Button>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.company}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">{job.description}</p>

                <div className="flex gap-2 mb-4">
                  <span className="bg-white px-3 py-1 rounded-full text-sm">
                    {job.type}
                  </span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm">
                    {job.level}
                  </span>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">Details</Button>
                  <Button className="flex-1 bg-black">Apply Now</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

