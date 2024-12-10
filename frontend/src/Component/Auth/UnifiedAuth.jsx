import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';
import AuthCard from './components/AuthCard';

const UnifiedAuth = ({ type }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'register') {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      // For registration, include all fields
      login({ ...formData, role: selectedRole });
    } else {
      // For login, only include email and password
      login({ email: formData.email, password: formData.password });
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