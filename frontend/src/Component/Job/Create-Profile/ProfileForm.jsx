import React, { useState } from 'react';
import axios from 'axios';
import api from '../../../config/axios.js';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProfileForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    title: '',
    bio: '',
    email: '',
    isEmailVerified: false,
    verificationCode: '',
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
    resume: null,
    createdAt: new Date(),
    updatedAt: new Date()
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
        // Store the profile data in localStorage for persistence
        localStorage.setItem('jobSeekerProfile', JSON.stringify(response.data.data));
        // Navigate to the specified redirect path or default to dashboard
        navigate(response.data.redirectTo || '/dashboard');
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

  const handleSendVerification = async () => {
    try {
      const response = await api.post('/api/jobseeker/send-verification', {
        email: formData.email
      });
      
      if (response.data.success) {
        toast.success('Verification code sent to your email!');
      } else {
        toast.error(response.data.message || 'Error sending verification code');
      }
    } catch (error) {
      console.error('Error sending verification:', error);
      toast.error(error.response?.data?.message || 'Error sending verification code');
    }
  };

  const handleVerifyCode = async () => {
    try {
      const response = await api.post('/api/jobseeker/verify-otp', {
        email: formData.email,
        otp: formData.verificationCode
      });
      
      if (response.data.success) {
        setFormData(prev => ({
          ...prev,
          isEmailVerified: true
        }));
        toast.success('Email verified successfully!');
      } else {
        toast.error(response.data.message || 'Invalid verification code');
      }
    } catch (error) {
      console.error('Error verifying code:', error);
      toast.error(error.response?.data?.message || 'Error verifying code');
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Content wrapper */}
      <div className="relative">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-indigo-50 via-white to-blue-50 shadow-md relative">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                Complete Your Profile
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl">
                Let's create your professional profile to help you find the perfect job. Fill in the details below to get started.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Rest of the form content remains the same */}
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Basic Information Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all hover:shadow-xl"
            >
              <div className="px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-white">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Basic Information
                </h3>
                <p className="mt-1 text-sm text-gray-600">Start with your personal details</p>
              </div>
              <div className="px-8 py-8 space-y-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-150 ease-in-out hover:border-gray-300 text-gray-900 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-150 ease-in-out hover:border-gray-300 text-gray-900 text-sm"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Professional Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-150 ease-in-out hover:border-gray-300 text-gray-900 text-sm"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Bio</label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-150 ease-in-out hover:border-gray-300 text-gray-900 text-sm"
                      rows="4"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-150 ease-in-out hover:border-gray-300 text-gray-900 text-sm"
                      required
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Email Verification Card - Enhanced styling */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all hover:shadow-xl"
            >
              <div className="px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-green-50 to-white">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Email Verification
                </h3>
                <p className="mt-1 text-sm text-gray-600">Verify your email address</p>
              </div>
              <div className="px-8 py-6 space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.isEmailVerified}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        disabled
                      />
                      <label className="ml-2 block text-sm text-gray-900">
                        Email Verified
                      </label>
                    </div>
                    <button
                      type="button"
                      onClick={handleSendVerification}
                      disabled={!formData.email}
                      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white 
                        ${!formData.email ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                    >
                      Send Verification Email
                    </button>
                  </div>
                  {!formData.isEmailVerified && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Verification Code
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="verificationCode"
                          value={formData.verificationCode}
                          onChange={handleInputChange}
                          className="flex-1 min-w-0 block w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-150 ease-in-out hover:border-gray-300 text-gray-900 text-sm"
                          placeholder="Enter verification code"
                        />
                        <button
                          type="button"
                          onClick={handleVerifyCode}
                          disabled={!formData.verificationCode}
                          className={`ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white 
                            ${!formData.verificationCode ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} 
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                        >
                          Verify
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Job Preferences Card - Enhanced styling */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all hover:shadow-xl"
            >
              <div className="px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Job Preferences
                </h3>
                <p className="mt-1 text-sm text-gray-600">Tell us about your ideal job</p>
              </div>
              <div className="px-8 py-8 space-y-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Job Type</label>
                    <select
                      name="jobPreferences.jobType"
                      value={formData.jobPreferences.jobType}
                      onChange={handleInputChange}
                      className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-150 ease-in-out hover:border-gray-300 text-gray-900 text-sm"
                    >
                      <option value="full-time">Full Time</option>
                      <option value="part-time">Part Time</option>
                      <option value="contract">Contract</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                      type="text"
                      name="jobPreferences.location"
                      value={formData.jobPreferences.location}
                      onChange={handleInputChange}
                      className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-150 ease-in-out hover:border-gray-300 text-gray-900 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Expected Salary</label>
                    <input
                      type="number"
                      name="jobPreferences.salary"
                      value={formData.jobPreferences.salary}
                      onChange={handleInputChange}
                      className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-150 ease-in-out hover:border-gray-300 text-gray-900 text-sm"
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
                      className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 transition duration-150 ease-in-out"
                    />
                    <label className="text-sm font-medium text-gray-700">Open to Remote Work</label>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cultural Preferences Card - Enhanced styling */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all hover:shadow-xl"
            >
              <div className="px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-white">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Cultural Preferences
                </h3>
                <p className="mt-1 text-sm text-gray-600">Tell us about your cultural preferences</p>
              </div>
              <div className="px-8 py-8 space-y-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Work Style</label>
                    <select
                      name="culturalPreferences.workStyle"
                      value={formData.culturalPreferences.workStyle}
                      onChange={handleInputChange}
                      className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-150 ease-in-out hover:border-gray-300 text-gray-900 text-sm"
                    >
                      <option value="collaborative">Collaborative</option>
                      <option value="independent">Independent</option>
                      <option value="mixed">Mixed</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Team Size</label>
                    <select
                      name="culturalPreferences.teamSize"
                      value={formData.culturalPreferences.teamSize}
                      onChange={handleInputChange}
                      className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-150 ease-in-out hover:border-gray-300 text-gray-900 text-sm"
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Company Size</label>
                    <input
                      type="text"
                      name="culturalPreferences.companySize"
                      value={formData.culturalPreferences.companySize}
                      onChange={handleInputChange}
                      className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-150 ease-in-out hover:border-gray-300 text-gray-900 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Industry</label>
                    <input
                      type="text"
                      name="culturalPreferences.industry"
                      value={formData.culturalPreferences.industry}
                      onChange={handleInputChange}
                      className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-150 ease-in-out hover:border-gray-300 text-gray-900 text-sm"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Resume Upload Card - Enhanced styling */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all hover:shadow-xl"
            >
              <div className="px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-white">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume Upload
                </h3>
                <p className="mt-1 text-sm text-gray-600">Upload your latest resume</p>
              </div>
              <div className="px-8 py-8">
                <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-indigo-500 transition-colors duration-200">
                  <div className="space-y-2 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600 justify-center">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          type="file"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                    
                    {/* Display uploaded file name */}
                    {formData.resume && (
                      <div className="mt-4 p-2 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="text-sm text-gray-600 truncate max-w-xs">
                              {formData.resume.name}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, resume: null }))}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Submit Button - Fixed positioning for mobile */}
            <div className="rounded-xl border-t border-gray-200 shadow-lg sm:static sm:p-0 sm:border-0 sm:shadow-none z-50">
              <div className="max-w-5xl mx-auto">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full sm:w-auto inline-flex justify-center items-center rounded-xl border border-transparent 
                    bg-gradient-to-r from-indigo-600 to-indigo-700 
                    py-3 sm:py-4 px-6 sm:px-8 
                    text-base font-medium text-white 
                    shadow-lg hover:from-indigo-700 hover:to-indigo-800 
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                    transition-all transform hover:scale-105
                    ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg 
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24"
                      >
                        <circle 
                          className="opacity-25" 
                          cx="12" 
                          cy="12" 
                          r="10" 
                          stroke="currentColor" 
                          strokeWidth="4"
                        />
                        <path 
                          className="opacity-75" 
                          fill="currentColor" 
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Creating Profile...</span>
                    </div>
                  ) : (
                    'Create Profile'
                  )}
                </button>
              </div>
            </div>

            {/* Spacer for fixed button on mobile */}
            <div className="h-24 sm:h-0" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;