import React from 'react';
import StatsCard from './StatsCard';
import FeatureCard from './FeaturesCard';
import ActivityFeed from './ActivityFeed';
import Sidebar from '../Sidebar';

const Dashboard = () => {
  const applicantStats = [
    { label: 'applicants', value: 0 },
    { label: 'matches', value: 0 },
    { label: 'messages', value: 0 },
  ];

  const sourcingStats = [
    { label: 'views', value: 13 },
    { label: 'pitches', value: 0 },
    { label: 'matches', value: 0 },
  ];

  const features = [
    {
      icon: "telescope",
      title: "Find top-quality talent for your startup",
      description: "Unique filters help cut through the noise by looking for the signals that truly matter to your team.",
      buttonText: "Source talent",
      buttonAction: () => console.log("Source talent clicked")
    },
    {
      icon: "megaphone",
      title: "Fast-track your workflow with pitch templates",
      description: "Set up, save and reuse your pitch templates to reduce work and increase candidate outreach.",
      buttonText: "Create templates",
      buttonAction: () => console.log("Create templates clicked")
    },
    {
      icon: "users",
      title: "Collaborate with your team more efficiently",
      description: "Bookmark candidates, leave notes, and share with your team to speed up your hiring process.",
      buttonText: "Invite team members",
      buttonAction: () => console.log("Invite team members clicked")
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <h1 className="text-2xl font-semibold">Hello, Harshvardhan!</h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Only my metrics</span>
              <div className="w-8 h-4 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <StatsCard title="Applicants" stats={applicantStats} days={14} />
            <StatsCard title="Sourcing" stats={sourcingStats} days={14} />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          {/* Activity Feed */}
          <ActivityFeed />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;