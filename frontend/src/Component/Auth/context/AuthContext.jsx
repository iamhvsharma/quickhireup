import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (formData) => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', formData);
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      setUser(user);
      console.log('Login successful:', user);
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      alert(`Login failed: ${error.response?.data?.message || error.message}`);
      throw error;
    }
  };

  const value = {
    user,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};