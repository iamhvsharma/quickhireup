import React from 'react';
import { Users, FileText, MousePointer, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const features = {
    jobSeekers: [
      {
        icon: <Users className="w-6 h-6" />,
        text: "Connect directly with founders at top startups - no third party recruiters allowed."
      },
      {
        icon: <FileText className="w-6 h-6" />,
        text: "Everything you need to know, all upfront. View salary, stock options, and more before applying."
      },
      {
        icon: <MousePointer className="w-6 h-6" />,
        text: "Say goodbye to cover letters - your profile is all you need. One click to apply and you're done."
      },
      {
        icon: <Star className="w-6 h-6" />,
        text: "Unique jobs at startups and tech companies you can't find anywhere else."
      }
    ],
    recruiters: [
      {
        icon: <Users className="w-6 h-6" />,
        text: "Tap into a community of 10M+ engaged, startup-ready candidates."
      },
      {
        icon: <FileText className="w-6 h-6" />,
        text: "Everything you need to kickstart your recruiting — set up job posts, company branding, and HR tools within 10 minutes, all for free."
      },
      {
        icon: <MousePointer className="w-6 h-6" />,
        text: "A free applicant tracking system, or free integration with any ATS you may already use."
      },
      {
        icon: <Star className="w-6 h-6" />,
        text: "Let us handle the heavy lifting with RecruiterCloud. Our new AI-Recruiter scans 500M+ candidates, filters it down based on your unique calibration, and schedules your favorites on your calendar in a matter of days."
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-[#FBFAFD]">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Job Seekers Section */}
        <div className="flex-1 flex flex-col">
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-600">Got talent?</h2>
            <h3 className="text-3xl font-bold mt-2 text-gray-900">Why job seekers love us</h3>
          </div>
          
          <div className="flex-grow space-y-6 mb-8">
            {features.jobSeekers.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="bg-blue-500 p-3 rounded-full text-white">
                  {feature.icon}
                </div>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-auto">
            <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
              Learn more
            </button>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Sign up
            </button>
          </div>
        </div>

        {/* Recruiters Section */}
        <div className="flex-1 flex flex-col bg-gray-50 p-8 rounded-xl border border-gray-100">
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-600">Need talent?</h2>
            <h3 className="text-3xl font-bold mt-2 text-gray-900">Why recruiters love us</h3>
          </div>
          
          <div className="flex-grow space-y-6 mb-8">
            {features.recruiters.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="bg-blue-500 p-3 rounded-full text-white">
                  {feature.icon}
                </div>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-auto">
            <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
              Learn more
            </button>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

