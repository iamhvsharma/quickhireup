import React from 'react';
import { Code, BookOpen, Users, Phone, ChevronRight } from 'lucide-react';

const AIMockInterview = () => {
  const nonCodingInterviews = [
    {
      title: "Behavioral Questions",
      duration: "30 min",
      icon: <Users className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Resume Dive Deep",
      duration: "30 min",
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Fundamental Tech Questions",
      duration: "30 min",
      icon: <Code className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Customized Interview",
      duration: "60 min",
      icon: <Users className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "HR Call",
      duration: "30 min",
      icon: <Phone className="w-6 h-6 text-blue-500" />,
    }
  ];

  const codingInterviews = [
    {
      title: "Binary Search",
      duration: "40 min",
      icon: <Code className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Backtracking",
      duration: "40 min",
      icon: <Code className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Linked List",
      duration: "40 min",
      icon: <Code className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Stack and Queue",
      duration: "40 min",
      icon: <Code className="w-6 h-6 text-red-500" />,
    }
  ];

  const InterviewCard = ({ title, duration, icon }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <span className="text-sm text-gray-500">{duration}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="p-2 bg-gray-50 rounded-lg">
            {icon}
          </div>
          <div className="space-y-2">
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Detail
            </button>
            <button className="block w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
              Go to practice
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Large Language Model Driven Mock Interview
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI has been fine-tuned with over 30,000 real interview questions. It's dedicated to learn the underlying logic behind each type of interviews and deliver the most realistic experiences.
          </p>
        </div>

        <div className="mb-8">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Software Engineer
          </button>
        </div>

        {/* Non-Coding Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6 bg-blue-50 p-4 rounded-lg">
            <Code className="w-6 h-6 text-blue-500" />
            <h2 className="text-xl font-semibold text-gray-900">Non-Coding Mock Interviews</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonCodingInterviews.map((interview, index) => (
              <InterviewCard key={index} {...interview} />
            ))}
          </div>
        </div>

        {/* Coding Section */}
        <div>
          <div className="flex items-center gap-2 mb-6 bg-red-50 p-4 rounded-lg">
            <Code className="w-6 h-6 text-red-500" />
            <h2 className="text-xl font-semibold text-gray-900">Coding Mock Interviews</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {codingInterviews.map((interview, index) => (
              <InterviewCard key={index} {...interview} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMockInterview;
