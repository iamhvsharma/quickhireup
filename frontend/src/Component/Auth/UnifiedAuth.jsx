import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';
import AuthCard from './components/AuthCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UnifiedAuth = ({ type }) => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { login } = useAuth();

  const roles = [
    { id: 'jobseeker', label: 'Job Seeker', color: 'blue' },
    { id: 'company', label: 'Company', color: 'green' },
    { id: 'mentor', label: 'Mentor', color: 'purple' },
    { id: 'student', label: 'Student', color: 'indigo' }
  ];

  const navigateToProfileCreation = (role) => {
    switch (role) {
      case 'company':
        navigate('/CompanyProfile');
        break;
      case 'jobseeker':
        navigate('/forJob');
        break;
      case 'mentor':
        navigate('/');
        break;
      case 'student':
        navigate('/create-student-profile');
        break;
      default:
        navigate('/dashboard');
    }
  };

  const navigateAfterLogin = (userRole) => {
    switch (userRole) {
      case 'jobseeker':
        navigate('/ForJobs');
        break;
      case 'company':
        navigate('/Process');
        break;
      case 'mentor':
        navigate('/Mentor');
        break;
      case 'student':
        navigate('/student');
        break;
      default:
        navigate('/dashboard');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (type === 'register') {
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords don't match!");
          return;
        }
        if (!selectedRole) {
          alert("Please select a role.");
          return;
        }
  
        console.log("Sending request with data:", { ...formData, role: selectedRole });
  
        // Register
        await axios.post('http://localhost:8000/api/auth/signup', { ...formData, role: selectedRole });
        const loginResponse = await login({ email: formData.email, password: formData.password });
        navigateToProfileCreation(selectedRole);
      } else {
        // Login
        const loginResponse = await login({ email: formData.email, password: formData.password });
        // Assuming the login response includes the user's role
        const userRole = loginResponse?.user?.role;
        navigateAfterLogin(userRole);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      alert(`Error: ${error.response?.data?.message || error.message}`);
    }
  };
  

  return (
    <AuthCard title={type === 'login' ? 'Login' : 'Register'}>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          {/*  Name - Visible only during registration */}
          {type === 'register' && (
            <input
              type="text"
              required
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border rounded"
            />
          )}

          {/* Email - Visible in both login and registration */}
          <input
            type="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2 border rounded"
          />

          {/* Password - Visible in both login and registration */}
          <input
            type="password"
            required
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-2 border rounded"
          />

          {/* Confirm Password - Visible only during registration */}
          {type === 'register' && (
            <input
              type="password"
              required
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full p-2 border rounded"
            />
          )}

          {/* Role Selection - Visible only during registration */}
          {type === 'register' && (
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Role</option>
              {roles.map(role => (
                <option key={role.id} value={role.id}>
                  {role.label}
                </option>
              ))}
            </select>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              type === 'login' ? 'bg-blue-600 hover:bg-blue-700' : 
              `bg-${roles.find(r => r.id === selectedRole)?.color}-600 hover:bg-${roles.find(r => r.id === selectedRole)?.color}-700`
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${type === 'login' ? 'blue' : roles.find(r => r.id === selectedRole)?.color}-500`}
          >
            {type === 'login' ? 'Sign in' : 'Register'}
          </button>
        </div>
      </form>
    </AuthCard>
  );
};

export default UnifiedAuth;