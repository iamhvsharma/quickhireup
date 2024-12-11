import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const PostJobForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    organizationName: '',
    jobType: 'NGO',
    workType: 'Work from home',
    startDate: '',
    duration: '',
    stipend: '',
    applyBy: '',
    description: '',
    responsibilities: [''],
    skills: '',
    eligibility: [''],
    perks: [''],
    openings: '',
    aboutOrganization: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (e, index, field) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = e.target.value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  const handleAddField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ''] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/jobs/create', formData);
      
      if (response.data.success) {
        toast.success('Job posted successfully!');
        // Reset form or redirect
        setFormData({
          jobTitle: '',
          organizationName: '',
          jobType: 'NGO',
          workType: 'Work from home',
          startDate: '',
          duration: '',
          stipend: '',
          applyBy: '',
          description: '',
          responsibilities: [''],
          skills: '',
          eligibility: [''],
          perks: [''],
          openings: '',
          aboutOrganization: '',
        });
      }
    } catch (error) {
      console.error('Error posting job:', error);
      toast.error(error.response?.data?.message || 'Failed to post job');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Post a Job</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Job Title */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="e.g., Tele Fundraising"
            required
          />
        </div>

        {/* Organization Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Organization Name</label>
          <input
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="e.g., She Can Foundation"
            required
          />
        </div>

        {/* Job Type */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Job Type</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="NGO">NGO</option>
            <option value="Corporate">Corporate</option>
            <option value="Startup">Startup</option>
          </select>
        </div>

        {/* Work Type */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Work Type</label>
          <select
            name="workType"
            value={formData.workType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="Work from home">Work from home</option>
            <option value="On-site">On-site</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        {/* Start Date */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Duration (in months)</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="e.g., 1"
            required
          />
        </div>

        {/* Stipend */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Stipend</label>
          <input
            type="text"
            name="stipend"
            value={formData.stipend}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="e.g., 20% of Total Amount Raised"
            required
          />
        </div>

        {/* Apply By */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Apply By</label>
          <input
            type="date"
            name="applyBy"
            value={formData.applyBy}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            rows="5"
            placeholder="Write a detailed description about the job..."
            required
          ></textarea>
        </div>

        {/* Responsibilities */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Responsibilities</label>
          {formData.responsibilities.map((responsibility, index) => (
            <div key={index} className="flex space-x-3 mb-2">
              <input
                type="text"
                value={responsibility}
                onChange={(e) => handleArrayChange(e, index, 'responsibilities')}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder={`Responsibility ${index + 1}`}
              />
              {index === formData.responsibilities.length - 1 && (
                <button
                  type="button"
                  onClick={() => handleAddField('responsibilities')}
                  className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  +
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit Job Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJobForm;
