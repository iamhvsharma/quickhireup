import React, { useState } from 'react';

const MentorProfileForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    profilePicture: '',
    contactNumber: '',
    expertise: '',
    bio: '',
    experience: '',
    certifications: '',
    socialLinks: {
      linkedin: '',
      github: '',
      personalWebsite: '',
    },
    availability: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prevData => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Basic Information</h2>
            <div className="relative group">
              <input
                type="url"
                name="profilePicture"
                value={formData.profilePicture}
                onChange={handleChange}
                className="peer w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-all bg-transparent"
                placeholder=" "
                required
              />
              <label className="absolute left-4 top-3 text-gray-500 transition-all duration-300 
                              peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500
                              peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                Profile Picture URL
              </label>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="peer w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-all bg-transparent"
                  placeholder=" "
                  required
                />
                <label className="absolute left-4 top-3 text-gray-500 transition-all duration-300 
                                peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500
                                peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                  Contact Number
                </label>
              </div>

              <div className="relative group">
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="peer w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-all bg-transparent"
                  placeholder=" "
                  min="0"
                  required
                />
                <label className="absolute left-4 top-3 text-gray-500 transition-all duration-300 
                                peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500
                                peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                  Years of Experience
                </label>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Professional Details</h2>
            <div className="relative group">
              <input
                type="text"
                name="expertise"
                value={formData.expertise}
                onChange={handleChange}
                className="peer w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-all bg-transparent"
                placeholder=" "
                required
              />
              <label className="absolute left-4 top-3 text-gray-500 transition-all duration-300 
                              peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500
                              peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                Areas of Expertise
              </label>
            </div>

            <div className="relative group">
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
                className="peer w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-all bg-transparent resize-none"
                placeholder=" "
                required
              ></textarea>
              <label className="absolute left-4 top-3 text-gray-500 transition-all duration-300 
                              peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500
                              peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                Bio
              </label>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Social Presence</h2>
            {Object.entries(formData.socialLinks).map(([key, value]) => (
              <div key={key} className="relative group">
                <input
                  type="url"
                  name={`socialLinks.${key}`}
                  value={value}
                  onChange={handleChange}
                  className="peer w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-all bg-transparent"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-gray-500 transition-all duration-300 
                                peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500
                                peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                  {key.charAt(0).toUpperCase() + key.slice(1)} URL
                </label>
              </div>
            ))}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Final Details</h2>
            <div className="relative group">
              <textarea
                name="certifications"
                value={formData.certifications}
                onChange={handleChange}
                rows="3"
                className="peer w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-all bg-transparent resize-none"
                placeholder=" "
              ></textarea>
              <label className="absolute left-4 top-3 text-gray-500 transition-all duration-300 
                              peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500
                              peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                Certifications
              </label>
            </div>

            <div className="relative group">
              <textarea
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                rows="3"
                className="peer w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-all bg-transparent resize-none"
                placeholder=" "
                required
              ></textarea>
              <label className="absolute left-4 top-3 text-gray-500 transition-all duration-300 
                              peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500
                              peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                Availability
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
          {/* Background Numbers */}
          <div className="absolute inset-0 overflow-hidden">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="absolute text-gray-100 animate-spin-slow"
                style={{
                  fontSize: '200px',
                  fontWeight: 'bold',
                  opacity: '0.1',
                  top: `${Math.random() * 70}%`,
                  left: `${Math.random() * 70}%`,
                  transform: `rotate(${num * 45}deg)`,
                  zIndex: 0
                }}
              >
                {num}
              </div>
            ))}
          </div>

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-6 px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <h1 className="text-3xl font-bold text-white text-center relative z-10">Become a Mentor</h1>
            <p className="text-blue-100 text-center mt-2 relative z-10">Share your expertise and help others grow</p>
            
            {/* Progress Steps */}
            <div className="flex  justify-between items-center mt-8 relative ">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step <= currentStep ? 'bg-white text-blue-600' : 'bg-blue-400 text-white'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-full h-1 ${
                      step < currentStep ? 'bg-white' : 'bg-blue-400'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8 relative z-10">
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Previous
                </button>
              )}
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto px-8 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 transform hover:scale-105"
                >
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MentorProfileForm;

