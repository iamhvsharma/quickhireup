import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useJobPreferences } from "@/contexts/JobPreferencesContext";

// ProgressSteps Component
const ProgressSteps = ({ currentStep }) => {
  const steps = [
    { id: "base", label: "Basic Info" },
    { id: "preferences", label: "Preferences" },
    { id: "culture", label: "Culture" },
    { id: "resume", label: "Resume" },
    { id: "email-verification", label: "Verify Email" },
    { id: "done", label: "Complete" },
  ];

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                steps.findIndex((s) => s.id === currentStep) >= index
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-1 w-16 mx-2 ${
                  steps.findIndex((s) => s.id === currentStep) > index
                    ? "bg-blue-600"
                    : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// ProfileCreation Component
const ProfileCreation = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    bio: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">First Name</label>
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Last Name</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Professional Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Bio</label>
        <textarea
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows={4}
          required
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </form>
  );
};

// PreferencesForm Component
const PreferencesForm = ({ onNext, onBack }) => {
  const { jobPreferences, updateJobPreferences } = useJobPreferences();
  const [preferences, setPreferences] = useState({
    jobType: jobPreferences.jobType || "",
    location: jobPreferences.location || "",
    salary: jobPreferences.salary || "",
    remote: jobPreferences.remote || false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateJobPreferences(preferences);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Job Type</label>
        <select
          value={preferences.jobType}
          onChange={(e) => setPreferences({ ...preferences, jobType: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          <option value="">Select Job Type</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="contract">Contract</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          value={preferences.location}
          onChange={(e) => setPreferences({ ...preferences, location: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Expected Salary</label>
        <input
          type="number"
          value={preferences.salary}
          onChange={(e) => setPreferences({ ...preferences, salary: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={preferences.remote}
          onChange={(e) => setPreferences({ ...preferences, remote: e.target.checked })}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label className="ml-2 block text-sm text-gray-700">Open to remote work</label>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </form>
  );
};

// CultureTab Component
const CultureTab = ({ onNext, onBack }) => {
  const [values, setValues] = useState({
    workStyle: "",
    teamSize: "",
    companySize: "",
    industry: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Preferred Work Style</label>
        <select
          value={values.workStyle}
          onChange={(e) => setValues({ ...values, workStyle: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          <option value="">Select Work Style</option>
          <option value="collaborative">Collaborative</option>
          <option value="independent">Independent</option>
          <option value="mixed">Mixed</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Preferred Team Size</label>
        <select
          value={values.teamSize}
          onChange={(e) => setValues({ ...values, teamSize: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          <option value="">Select Team Size</option>
          <option value="small">Small (2-5)</option>
          <option value="medium">Medium (6-15)</option>
          <option value="large">Large (15+)</option>
        </select>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </form>
  );
};

// Resume Component
const Resume = ({ onNext, onBack }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle file upload logic here
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Upload Resume</label>
        <input
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          className="mt-1 block w-full"
          required
        />
        <p className="mt-2 text-sm text-gray-500">Accepted formats: PDF, DOC, DOCX</p>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </form>
  );
};

// EmailVerification Component
const EmailVerification = ({ onNext, onBack }) => {
  const [verificationCode, setVerificationCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle verification logic here
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Verification Code</label>
        <input
          type="text"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
        <p className="mt-2 text-sm text-gray-500">
          Enter the verification code sent to your email
        </p>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Verify
        </button>
      </div>
    </form>
  );
};

// Main BuildProfile Component
export default function BuildProfile() {
  const [currentStep, setCurrentStep] = useState("base");
  const { jobPreferences } = useJobPreferences();
  const navigate = useNavigate();

  const steps = ["base", "preferences", "culture", "resume", "email-verification", "done"];

  const handleNext = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <div className="max-w-2xl mx-auto">
        <ProgressSteps currentStep={currentStep} />

        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === "base" && (
                <ProfileCreation onNext={handleNext} onBack={handleBack} />
              )}
              {currentStep === "preferences" && (
                <PreferencesForm onNext={handleNext} onBack={handleBack} />
              )}
              {currentStep === "culture" && (
                <CultureTab onNext={handleNext} onBack={handleBack} />
              )}
              {currentStep === "resume" && (
                <Resume onNext={handleNext} onBack={handleBack} />
              )}
              {currentStep === "email-verification" && (
                <EmailVerification onNext={handleNext} onBack={handleBack} />
              )}
              {currentStep === "done" && (
                <div className="text-center py-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Profile Complete!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Your profile has been successfully created and is ready to be viewed by potential employers.
                  </p>
                  <button
                    onClick={() => navigate("/dashboard")}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Go to Dashboard
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
