import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({
    name: '',
    location: '',
    role: '',
    experience: '',
    bio: '',
    website: '',
    linkedin: '',
    github: '',
    twitter: '',
    cultureFit: {
      description: '',
      motivation: '',
      careerTrack: '',
      workEnvironment: '',
      priorities: []
    }
  });

  const updateProfile = async (data) => {
    try {
      const response = await axios.post('/api/jobseeker', data, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      setProfile(response.data);
      return response.data;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  };

  return (
    <ProfileContext.Provider value={{ profile, setProfile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext); 