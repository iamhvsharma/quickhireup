import React, { useState } from "react";
import { useAuth } from "./context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "../../hooks/use-toast";
import axios from "axios";
import  Background  from "@/components/ui/Background";

const UnifiedAuth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const { login } = useAuth();
  const { toast } = useToast();

  const roles = [
    { id: "jobseeker", label: "Job Seeker", color: "blue" },
    { id: "company", label: "Company", color: "green" },
    { id: "mentor", label: "Mentor", color: "purple" },
    { id: "student", label: "Student", color: "indigo" },
  ];

  const navigateToOnboarding = (userRole) => {
    switch (userRole) {
      case "company":
        navigate("/company/onboarding");
        break;
      case "jobseeker":
        navigate("/jobseeker/onboarding");
        break;
      case "mentor":
        navigate("/MentorProfile");
        break;
      case "student":
        navigate("/student/onboarding");
        break;
      default:
        navigate("/dashboard");
    }
  };

  const navigateToDashboard = (userRole) => {
    switch (userRole) {
      case "jobseeker":
        navigate("/JobDashboard/profile");
        break;
      case "company":
        navigate("/CompanyDashboard");
        break;
      case "mentor":
        navigate("/Mentor");
        break;
      case "student":
        navigate("/student/dashboard");
        break;
      default:
        navigate("/dashboard");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isLogin) {
        if (password !== confirmPassword) {
          toast({
            title: "Error",
            description: "Passwords don't match!",
            variant: "destructive",
          });
          return;
        }
        if (!selectedRole) {
          toast({
            title: "Error",
            description: "Please select a role.",
            variant: "destructive",
          });
          return;
        }

        // Register
        await axios.post("http://localhost:8000/api/auth/signup", {
          name,
          email,
          password,
          role: selectedRole,
        });

        toast({
          title: "Success",
          description: "Registration successful! Please login to continue.",
          variant: "success",
          className: "bg-white border-green-200",
        });
        
        // Clear form fields except email and switch to login view
        setName("");
        setPassword("");
        setConfirmPassword("");
        setSelectedRole("");
        setIsLogin(true);
        
      } else {
        // Login
        try {
          const loginResponse = await login({ email, password });
          const userRole = loginResponse?.user?.role;
          const isProfileComplete = loginResponse?.user?.isProfileComplete;
          
          toast({
            title: "Welcome back!",
            description: `Successfully logged in as ${loginResponse?.user?.name || email}`,
            variant: "success",
            className: "bg-white border-green-200",
          });
          
          // Add small delay to show toast before navigation
          setTimeout(() => {
            if (!isProfileComplete) {
              navigateToOnboarding(userRole);
            } else {
              navigateToDashboard(userRole);
            }
          }, 1000);
        } catch (error) {
          toast({
            title: "Error",
            description: error.message || "Invalid credentials",
            variant: "destructive",
          });
          return;
        }
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      const errorMessage = error.response?.data?.message || error.message;
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-y-auto">
      <div className="fixed top-0 left-0 z-[-2] h-full w-full bg-gradient-to-r from-red-200 to-yellow-200"></div>
      <div className="fixed top-0 right-0 z-[-2] h-full w-full bg-gradient-to-l from-blue-200 to-white"></div>
      <div className="fixed bottom-0 left-0 z-[-2] h-full w-full bg-gradient-to-t from-yellow-200 to-black"></div>
      <div className="fixed bottom-0 right-0 z-[-2] h-full w-full bg-gradient-to-b from-blue-200 to-white"></div>
      <div className="min-h-screen flex flex-col justify-start pt-4 sm:pt-12 px-4">
        <div className="w-full max-w-md mx-auto">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              QuickHireUp
            </h1>
            <p className="text-slate-600 mt-2">
              {isLogin ? "Welcome back!" : "Create your account"}
            </p>
          </div>

          {/* Auth Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
            <div className="flex gap-4 mb-8">
              <button
                className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isLogin
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  !isLogin
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
                onClick={() => setIsLogin(false)}
              >
                Register
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all text-sm"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all text-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all text-sm"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all text-sm"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              )}

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Role
                  </label>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all text-sm"
                    required
                  >
                    <option value="">Select Role</option>
                    {roles.map((role) => (
                      <option key={role.id} value={role.id}>
                        {role.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded text-indigo-600 focus:ring-indigo-600"
                    />
                    <span className="text-slate-600">Remember me</span>
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-indigo-600 hover:text-indigo-700"
                  >
                    Forgot Password?
                  </Link>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-indigo-200 transition-all duration-200"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>

            {/* Social Login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-slate-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all duration-200">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="h-5 w-5 mr-2"
                  />
                  <span className="text-sm font-medium text-slate-600">
                    Google
                  </span>
                </button>
                <button className="flex items-center justify-center px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all duration-200">
                  <img
                    src="https://www.svgrepo.com/show/448234/linkedin.svg"
                    alt="LinkedIn"
                    className="h-5 w-5 mr-2"
                  />
                  <span className="text-sm font-medium text-slate-600">
                    LinkedIn
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer Text */}
          <p className="text-center text-sm text-slate-600 mt-8">
            By continuing, you agree to our{" "}
            <Link to="/terms" className="text-indigo-600 hover:text-indigo-700">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="text-indigo-600 hover:text-indigo-700"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnifiedAuth;
