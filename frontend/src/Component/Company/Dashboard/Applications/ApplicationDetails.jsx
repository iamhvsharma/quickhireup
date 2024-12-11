import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Sidebar from '../Sidebar';

const ApplicationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [application, setApplication] = useState(null);

  useEffect(() => {
    // In a real application, you would fetch the data from an API
    // For now, we'll simulate it with dummy data
    const dummyApplication = {
      id: parseInt(id),
      candidate: 'John Doe',
      position: 'Frontend Developer',
      status: 'Under Review',
      appliedDate: '2024-02-20',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      experience: '3 years',
      skills: ['React', 'JavaScript', 'HTML', 'CSS'],
      education: 'Bachelor in Computer Science',
      resume: 'https://example.com/resume.pdf',
      coverLetter: 'I am excited to apply for this position...',
      portfolio: 'https://github.com/johndoe'
    };
    setApplication(dummyApplication);
  }, [id]);

  if (!application) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 mb-6"
          >
            <FiArrowLeft className="mr-2" /> Back to Applications
          </button>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-6">
              <img
                src={application.avatar}
                alt={application.candidate}
                className="w-20 h-20 rounded-full mr-4"
              />
              <div>
                <h1 className="text-2xl font-semibold">{application.candidate}</h1>
                <p className="text-gray-600">{application.position}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                <div className="space-y-2">
                  <p><span className="font-medium">Email:</span> {application.email}</p>
                  <p><span className="font-medium">Phone:</span> {application.phone}</p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-4">Application Details</h2>
                <div className="space-y-2">
                  <p><span className="font-medium">Status:</span> {application.status}</p>
                  <p><span className="font-medium">Applied Date:</span> {application.appliedDate}</p>
                  <p><span className="font-medium">Experience:</span> {application.experience}</p>
                </div>
              </div>

              <div className="col-span-2">
                <h2 className="text-lg font-semibold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {application.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="col-span-2">
                <h2 className="text-lg font-semibold mb-4">Cover Letter</h2>
                <p className="text-gray-600">{application.coverLetter}</p>
              </div>

              <div className="col-span-2 flex gap-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Download Resume
                </button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                  View Portfolio
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                  Accept Application
                </button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
                  Reject Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails; 