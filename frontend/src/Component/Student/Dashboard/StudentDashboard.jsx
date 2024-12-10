import React from 'react';
import { 
  BookOpen, 
  TrendingUp, 
  Briefcase, 
  Compass,
  Bell,
  Search,
  User,
  BarChart,
  BookMarked,
  GraduationCap,
  Target
} from 'lucide-react';

const StudentDashboard = () => {
  const learningProgress = [
    { 
      title: "Data Structures", 
      progress: 75,
      nextTopic: "Binary Trees",
      timeSpent: "12h 30m"
    },
    { 
      title: "System Design", 
      progress: 45,
      nextTopic: "Load Balancing",
      timeSpent: "8h 15m"
    }
  ];

  const recommendedJobs = [
    {
      role: "Frontend Developer",
      company: "TechCorp",
      location: "Remote",
      match: "95%"
    },
    {
      role: "Software Engineer",
      company: "InnovateTech",
      location: "New York",
      match: "88%"
    }
  ];

  const careerGuides = [
    {
      title: "Resume Building Workshop",
      date: "Tomorrow, 2:00 PM",
      type: "Workshop"
    },
    {
      title: "Interview Preparation Guide",
      date: "Available Now",
      type: "Resource"
    }
  ];

  const skillsToImprove = [
    {
      skill: "React.js",
      level: "Intermediate",
      recommendation: "Build 2 more projects"
    },
    {
      skill: "System Design",
      level: "Beginner",
      recommendation: "Complete fundamentals course"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Learning Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <button className="relative">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <User className="h-5 w-5" />
                </div>
                <span className="text-gray-700">John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Learning Progress */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-500" />
                Learning Progress
              </h2>
              <button className="text-blue-500 text-sm hover:text-blue-600">View All</button>
            </div>
            <div className="space-y-4">
              {learningProgress.map((course, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">{course.title}</h3>
                    <span className="text-sm text-gray-500">{course.timeSpent}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className="bg-blue-500 rounded-full h-2" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500">Next: {course.nextTopic}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills to Improve */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Target className="h-5 w-5 text-green-500" />
                Skills to Improve
              </h2>
              <button className="text-blue-500 text-sm hover:text-blue-600">View All</button>
            </div>
            <div className="space-y-4">
              {skillsToImprove.map((skill, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">{skill.skill}</h3>
                    <span className="text-sm px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{skill.recommendation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Jobs */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-purple-500" />
                Recommended Jobs
              </h2>
              <button className="text-blue-500 text-sm hover:text-blue-600">View All</button>
            </div>
            <div className="space-y-4">
              {recommendedJobs.map((job, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <div>
                      <h3 className="font-medium">{job.role}</h3>
                      <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
                    </div>
                    <span className="text-sm text-green-600 font-medium">{job.match} Match</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Guidance */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Compass className="h-5 w-5 text-orange-500" />
                Career Guidance
              </h2>
              <button className="text-blue-500 text-sm hover:text-blue-600">View All</button>
            </div>
            <div className="space-y-4">
              {careerGuides.map((guide, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <div>
                      <h3 className="font-medium">{guide.title}</h3>
                      <p className="text-sm text-gray-500">{guide.date}</p>
                    </div>
                    <span className="text-sm px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {guide.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard; 