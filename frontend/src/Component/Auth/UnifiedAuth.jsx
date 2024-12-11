import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';
import AuthCard from './components/AuthCard';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useToast } from '../../hooks/use-toast';

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
  const { toast } = useToast();

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
      case 'company':
        navigate('/company/onboarding');
        break;
      case 'jobseeker':
        navigate('/jobseeker/onboarding');
        break;
      case 'mentor':
        navigate('/mentor/onboarding');
        break;
      case 'student':
        navigate('/student/onboarding');
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
          toast({
            variant: "destructive",
            title: "Error",
            description: "Passwords don't match!",
            duration: 3000,
          });
          return;
        }
        if (!selectedRole) {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Please select a role.",
            duration: 3000,
          });
          return;
        }

        // Register
        await axios.post('http://localhost:8000/api/auth/signup', { ...formData, role: selectedRole });
        toast({
          title: "Success!",
          description: "Registration successful!",
          duration: 3000,
        });
        await login({ email: formData.email, password: formData.password });
        navigateToProfileCreation(selectedRole);
      } else {
        // Login
        const loginResponse = await login({ email: formData.email, password: formData.password });
        toast({
          title: "Success!",
          description: "Login successful!",
          duration: 3000,
        });
        const userRole = loginResponse?.user?.role;
        navigateAfterLogin(userRole);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      const errorMessage = error.response?.data?.message || error.message;
      toast({
        variant: "destructive",
        title: "Error!",
        description: errorMessage,
        duration: 3000,
      });
    }
  };

  return (
    <AuthCard title={type === 'login' ? 'Login' : 'Register'}>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Name - Visible only during registration */}
          {type === 'register' && (
            <label className="block mb-2">
              Name
              <input
                type="text"
                required
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border rounded mt-1"
              />
            </label>
          )}

          {/* Email - Visible in both login and registration */}
          <label className="block mb-2">
            Email
            <input
              type="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 border rounded mt-1"
            />
          </label>

          {/* Password - Visible in both login and registration */}
          <label className="block mb-2">
            Password
            <input
              type="password"
              required
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full p-2 border rounded mt-1"
            />
          </label>

          {/* Confirm Password - Visible only during registration */}
          {type === 'register' && (
            <label className="block mb-2">
              Confirm Password
              <input
                type="password"
                required
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full p-2 border rounded mt-1"
              />
            </label>
          )}

          {/* Role Selection - Visible only during registration */}
          {type === 'register' && (
            <label className="block mb-2">
              Role
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full p-2 border rounded mt-1"
                required
              >
                <option value="">Select Role</option>
                {roles.map(role => (
                  <option key={role.id} value={role.id}>
                    {role.label}
                  </option>
                ))}
              </select>
            </label>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              type === 'login' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            {type === 'login' ? 'Sign in' : 'Register'}
          </button>

          {/* Redirect Links */}
          {type === 'register' && (
            <p className="text-center text-sm text-gray-600">
              Already have an account? <Link to="/auth/login" className="text-blue-500 hover:text-blue-600">Log in</Link>
            </p>
          )}
          {type === 'login' && (
            <p className="text-center text-sm text-gray-600">
              Don't have an account? <Link to="/auth/register" className="text-blue-500 hover:text-blue-600">Register</Link>
            </p>
          )}
        </div>
      </form>
    </AuthCard>
  );
};

export default UnifiedAuth;

