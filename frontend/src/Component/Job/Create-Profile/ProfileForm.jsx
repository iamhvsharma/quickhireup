import React, { useState } from 'react';
import axios from 'axios';
// Update this import path to match your directory structure
import api from '../../../config/axios.js';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
  const navigate = useNavigate();
  // Add loading state
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    title: '',
    bio: '',
    email: '',
    jobPreferences: {
      jobType: 'full-time',
      location: '',
      salary: '',
      remote: false
    },
    culturalPreferences: {
      workStyle: 'collaborative',
      teamSize: 'small',
      companySize: '',
      industry: ''
    },
    resume: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const formDataToSend = new FormData();
      
      // Append basic fields
      Object.keys(formData).forEach(key => {
        if (key !== 'resume' && key !== 'jobPreferences' && key !== 'culturalPreferences') {
          formDataToSend.append(key, formData[key]);
        }
      });

      // Append nested objects as JSON strings
      formDataToSend.append('jobPreferences', JSON.stringify(formData.jobPreferences));
      formDataToSend.append('culturalPreferences', JSON.stringify(formData.culturalPreferences));
      
      // Append resume file if exists
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }

      const response = await api.post('/api/jobseeker', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.success) {
        toast.success('Profile created successfully!');
        navigate('/dashboard');
      } else {
        toast.error(response.data.message || 'Something went wrong');
      }
      
    } catch (error) {
      console.error('Error creating profile:', error);
      toast.error(error.response?.data?.message || 'Error creating profile');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Create Job Seeker Profile</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">Professional Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows="4"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
        </div>

        {/* Job Preferences */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Job Preferences</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Job Type</label>
              <select
                name="jobPreferences.jobType"
                value={formData.jobPreferences.jobType}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                name="jobPreferences.location"
                value={formData.jobPreferences.location}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Expected Salary</label>
              <input
                type="number"
                name="jobPreferences.salary"
                value={formData.jobPreferences.salary}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="jobPreferences.remote"
                checked={formData.jobPreferences.remote}
                onChange={(e) => handleInputChange({
                  target: {
                    name: 'jobPreferences.remote',
                    value: e.target.checked
                  }
                })}
                className="mr-2"
              />
              <label className="text-sm font-medium">Open to Remote Work</label>
            </div>
          </div>
        </div>

        {/* Cultural Preferences */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Cultural Preferences</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Work Style</label>
              <select
                name="culturalPreferences.workStyle"
                value={formData.culturalPreferences.workStyle}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="collaborative">Collaborative</option>
                <option value="independent">Independent</option>
                <option value="mixed">Mixed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Team Size</label>
              <select
                name="culturalPreferences.teamSize"
                value={formData.culturalPreferences.teamSize}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Company Size</label>
              <input
                type="text"
                name="culturalPreferences.companySize"
                value={formData.culturalPreferences.companySize}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Industry</label>
              <input
                type="text"
                name="culturalPreferences.industry"
                value={formData.culturalPreferences.industry}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>

        {/* Resume Upload */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Resume Upload</h3>
          <div>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="w-full"
            />
            <p className="text-sm text-gray-500 mt-1">
              Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 
              ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Creating Profile...' : 'Create Profile'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;