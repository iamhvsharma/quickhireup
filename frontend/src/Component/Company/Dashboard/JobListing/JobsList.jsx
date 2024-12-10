import React, { useState, useEffect } from 'react';
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { Plus, Search } from 'lucide-react';
import JobListingCard from './JobListingCard';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

export default function JobListings() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with dummy data
    const dummyJobs = [
      {
        id: 1,
        title: "Senior React Developer",
        location: "New York, NY",
        type: "Full-time",
        salary: "$120k - $150k",
        description: "We are looking for an experienced React developer...",
        isOpen: true,
        createdAt: "2024-03-20",
      },
      {
        id: 2,
        title: "Junior Frontend Developer",
        location: "Remote",
        type: "Part-time",
        salary: "$60k - $80k",
        description: "Great opportunity for a junior developer...",
        isOpen: false,
        createdAt: "2024-03-19",
      },
      {
        id: 3,
        title: "Full Stack Engineer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$130k - $160k",
        description: "Join our dynamic team...",
        isOpen: true,
        createdAt: "2024-03-18",
      },
    ];
    
    setJobs(dummyJobs);
    setLoading(false);
  }, []);

  const handleDelete = async (jobId) => {
    // Simulate API call
    setJobs(jobs.filter(job => job.id !== jobId));
    toast({
      title: "Success",
      description: "Job listing deleted successfully",
    });
  };

  const handleStatusChange = async (jobId, newStatus) => {
    setJobs(jobs.map(job => 
      job.id === jobId ? { ...job, isOpen: newStatus } : job
    ));
    toast({
      title: "Success",
      description: "Job listing status changed successfully",
    });
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || 
      (statusFilter === 'active' && job.isOpen) || 
      (statusFilter === 'closed' && !job.isOpen);
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Job Listings</h1>
        <Button 
          onClick={() => navigate('/jobs/post')} 
          className="bg-black hover:bg-gray-800"
        >
          <Plus className="h-4 w-4 mr-2" />
          Post New Job
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Jobs</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      ) : jobs.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No jobs posted yet</p>
          <Button 
            onClick={() => navigate('/company/jobs/post')}
            className="bg-black hover:bg-gray-800"
          >
            Post Your First Job
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredJobs.map(job => (
            <JobListingCard key={job.id} job={job} onDelete={handleDelete} onStatusChange={handleStatusChange} />
          ))}
        </div>
      )}
    </div>
  );
}
