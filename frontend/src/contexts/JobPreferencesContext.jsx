import { createContext, useContext, useState } from 'react';

const JobPreferencesContext = createContext();

export function useJobPreferences() {
  const context = useContext(JobPreferencesContext);
  if (!context) {
    throw new Error('useJobPreferences must be used within a JobPreferencesProvider');
  }
  return context;
}

export function JobPreferencesProvider({ children }) {
  const [jobPreferences, setJobPreferences] = useState({
    roles: [],
    jobTypes: [],
    locations: [],
    salary: {
      amount: '',
      currency: 'usd'
    },
    workPreferences: {
      remoteOnly: false,
      hybridOnly: false,
      onSiteOnly: false
    },
    companySize: [],
    industryPreferences: [],
    skills: [],
    experience: {
      years: '',
      level: ''
    }
  });

  const updateJobPreferences = (section, data) => {
    setJobPreferences(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...data
      }
    }));
  };

  return (
    <JobPreferencesContext.Provider value={{ jobPreferences, updateJobPreferences }}>
      {children}
    </JobPreferencesContext.Provider>
  );
} 