import { createContext, useContext, useState } from 'react';

const StudentProfileContext = createContext();

export function useStudentProfile() {
  const context = useContext(StudentProfileContext);
  if (!context) {
    throw new Error('useStudentProfile must be used within a StudentProfileProvider');
  }
  return context;
}

export function StudentProfileProvider({ children }) {
  const [studentData, setStudentData] = useState({
    basicDetails: {
      name: '',
      email: '',
      phone: '',
      location: '',
      gender: '',
      pronouns: '',
      institution: '',
      degree: '',
      fieldOfStudy: '',
      startYear: '',
      graduationYear: '',
      cgpaOrPercentage: '',
      courses: [],
      bio: ''
    },
    careerObjectives: {
      careerGoals: '',
      internshipPreferences: [],
      skills: []
    },
    projects: [],
    internships: [],
    certifications: [],
    preferences: {
      preferredTechnologies: [],
      unwillingTechnologies: [],
      openToRemote: false,
      motivators: [],
      workEnvironmentPreferences: {
        clearResponsibilities: false,
        versatileAssignments: false
      }
    }
  });

  const updateStudentData = (section, data) => {
    setStudentData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...data
      }
    }));
  };

  return (
    <StudentProfileContext.Provider value={{ studentData, updateStudentData }}>
      {children}
    </StudentProfileContext.Provider>
  );
} 