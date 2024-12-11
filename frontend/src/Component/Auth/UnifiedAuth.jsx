import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { useToast } from '../../hooks/use-toast';
import axios from 'axios';

const UnifiedAuth = ({ type = 'login' }) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();
  const [selectedRole, setSelectedRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const roles = [
    { id: 'jobseeker', label: 'Job Seeker', color: 'blue' },
    { id: 'company', label: 'Company', color: 'green' },
    { id: 'mentor', label: 'Mentor', color: 'purple' },
    { id: 'student', label: 'Student', color: 'indigo' }
  ];

  const navigateToProfileCreation = (role) => {
    const routes = {
      company: '/CompanyProfile',
      jobseeker: '/forJob',
      mentor: '/',
      student: '/create-student-profile',
    };
    navigate(routes[role] || '/dashboard');
  };

  const navigateAfterLogin = (userRole) => {
    const routes = {
      company: '/company/onboarding',
      jobseeker: '/jobseeker/onboarding',
      mentor: '/mentor/onboarding',
      student: '/student/onboarding',
    };
    navigate(routes[userRole] || '/dashboard');
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

        await axios.post('http://localhost:8000/api/auth/signup', { ...formData, role: selectedRole });
        toast({
          title: "Success!",
          description: "Registration successful!",
          duration: 3000,
        });
        await login({ email: formData.email, password: formData.password });
        navigateToProfileCreation(selectedRole);
      } else {
        const loginResponse = await login({ email: formData.email, password: formData.password });
        toast({
          title: "Success!",
          description: "Login successful!",
          duration: 3000,
        });
        navigateAfterLogin(loginResponse?.user?.role);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      toast({
        variant: "destructive",
        title: "Error!",
        description: error.response?.data?.message || error.message,
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-slate-800">QuickHireUp</h1>
          <p className="text-slate-600 mt-2">
            {type === 'login' ? 'Sign in to your account' : 'Create a new account'}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {type === 'register' && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  placeholder="Enter your password"
                />
              </div>

              {type === 'register' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                      placeholder="Confirm your password"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Select Role
                    </label>
                    <select
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                      required
                    >
                      <option value="">Select your role</option>
                      {roles.map(role => (
                        <option key={role.id} value={role.id}>
                          {role.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              {type === 'login' && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-blue-500 focus:ring-blue-500" />
                    <span className="text-slate-600">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-blue-500 hover:text-blue-600">
                    Forgot Password?
                  </Link>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
              >
                {type === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div className="mt-6">
              <p className="text-center text-sm text-slate-600">
                {type === 'login' ? (
                  <>
                    Don't have an account?{' '}
                    <Link to="/auth/register" className="text-blue-500 hover:text-blue-600">
                      Register
                    </Link>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <Link to="/auth/login" className="text-blue-500 hover:text-blue-600">
                      Sign in
                    </Link>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnifiedAuth;

