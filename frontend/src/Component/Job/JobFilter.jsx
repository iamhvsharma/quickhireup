import React, { useState } from "react";

const JobFilter = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    employment: ["Fulltime", "Senior level", "Remote"],
  });

  const jobs = [
    {
      title: "UX Researcher",
      company: "WebFlow",
      type: ["Fulltime", "Senior level", "Remote"],
      location: "California, CA",
      time: "1 hour ago",
    },
    {
      title: "Quality Assurance",
      company: "Notion",
      type: ["Fulltime", "Senior level", "Remote"],
      location: "Idaho, ID",
      time: "2 hours ago",
    },
    {
      title: "Senior Dev",
      company: "Zapier",
      type: ["Fulltime", "Senior level", "Remote"],
      location: "Oklahoma, OK",
      time: "7 hours ago",
    },
    {
      title: "Product Designer",
      company: "MailChimp",
      type: ["Fulltime", "Remote"],
      location: "Tennessee, TN",
      time: "1 day ago",
    },
    {
      title: "Sales",
      company: "Outreach",
      type: ["Fulltime", "Remote"],
      location: "New York, NY",
      time: "2 days ago",
    },
    {
      title: "Project Manager",
      company: "Squarespace",
      type: ["Fulltime", "Remote"],
      location: "Florida, FL",
      time: "3 days ago",
    },
  ];

  return (
    <div className=" container mx-auto bg-gray-100 text-gray-900 min-h-screen">
      {/* Header Section */}
      <header className="bg-gray-200 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-blue-600">Voo</div>
            <nav className="flex space-x-4 text-gray-600">
              <a href="#" className="hover:text-blue-600">
                Find Jobs
              </a>
              <a href="#" className="hover:text-blue-600">
                Employers
              </a>
              <a href="#" className="hover:text-blue-600">
                Upload Job
              </a>
              <a href="#" className="hover:text-blue-600">
                About Us
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-sm">Emma R. | Quality Assurance</span>
            <img
              src="https://via.placeholder.com/40"
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </header>

      {/* Search Section */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold mb-4">Find Your Dream Job Here</h1>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              placeholder="Job title or keyword"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Add country or city"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Filters and Job List */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Filters */}
        <aside className="col-span-1 md:col-span-3 bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-4">Filter</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Company, skill, tag
            </label>
            <input
              type="text"
              placeholder="e.g., React, Google"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-2">Speciality</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="text-blue-600" />
                <span>UI/UX Design</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="text-blue-600" />
                <span>Backend Development</span>
              </label>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-2">Employment</h3>
            <div className="space-y-2">
              {["Fulltime", "Senior level", "Remote", "Contract"].map(
                (type) => (
                  <label
                    key={type}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedFilters.employment.includes(type)}
                      onChange={() => {
                        setSelectedFilters((prev) => {
                          const employment = prev.employment.includes(type)
                            ? prev.employment.filter((t) => t !== type)
                            : [...prev.employment, type];
                          return { ...prev, employment };
                        });
                      }}
                    />
                    <span>{type}</span>
                  </label>
                )
              )}
            </div>
          </div>
        </aside>

        {/* Job Listings */}
        <main className="col-span-1 md:col-span-9 space-y-6">
          {jobs
            .filter((job) =>
              selectedFilters.employment.every((filter) =>
                job.type.includes(filter)
              )
            )
            .map((job, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white rounded-lg shadow"
              >
                <div>
                  <h3 className="text-lg font-bold">{job.title}</h3>
                  <p className="text-sm text-gray-600">{job.company}</p>
                  <div className="flex space-x-2 text-sm mt-2">
                    {job.type.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-sm text-gray-500">{job.location}</p>
                  <p className="text-sm text-gray-400">{job.time}</p>
                </div>
              </div>
            ))}
        </main>
      </div>
    </div>
  );
};

export default JobFilter;
