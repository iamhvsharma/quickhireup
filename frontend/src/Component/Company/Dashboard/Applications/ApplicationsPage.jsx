import React, { useState } from 'react';
import { FiSearch, FiFilter, FiDownload, FiRefreshCw } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar';
import { useNavigate } from 'react-router-dom';

const ApplicationsPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const [applications] = useState([
    {
      id: 1,
      candidate: 'John Doe',
      position: 'Frontend Developer',
      status: 'shortlisted',
      appliedDate: '2024-02-20',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      email: 'john.doe@example.com'
    },
    {
      id: 2,
      candidate: 'Jane Smith',
      position: 'Backend Developer',
      status: 'interview',
      appliedDate: '2024-02-19',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      email: 'jane.smith@example.com'
    },
    {
      id: 3,
      candidate: 'Mike Johnson',
      position: 'UI/UX Designer',
      status: 'rejected',
      appliedDate: '2024-02-18',
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 4,
      candidate: 'Sarah Williams',
      position: 'Frontend Developer',
      status: 'shortlisted',
      appliedDate: '2024-02-17',
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 5,
      candidate: 'Alex Brown',
      position: 'Full Stack Developer',
      status: 'interview',
      appliedDate: '2024-02-16',
      avatar: 'https://via.placeholder.com/40'
    },
    {
      id: 6,
      candidate: 'Emma Wilson',
      position: 'DevOps Engineer',
      status: 'shortlisted',
      appliedDate: '2024-02-15',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      email: 'emma.wilson@example.com',
      experience: '5 years',
      skills: ['Docker', 'Kubernetes', 'AWS']
    },
    {
      id: 7,
      candidate: 'David Chen',
      position: 'Mobile Developer',
      status: 'interview',
      appliedDate: '2024-02-14',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      email: 'david.chen@example.com',
      experience: '3 years',
      skills: ['React Native', 'iOS', 'Android']
    },
    {
      id: 8,
      candidate: 'Sophie Taylor',
      position: 'Data Scientist',
      status: 'rejected',
      appliedDate: '2024-02-13',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      email: 'sophie.taylor@example.com',
      experience: '4 years',
      skills: ['Python', 'R', 'Machine Learning']
    },
    {
      id: 9,
      candidate: 'James Anderson',
      position: 'Product Manager',
      status: 'shortlisted',
      appliedDate: '2024-02-12',
      avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
      email: 'james.anderson@example.com',
      experience: '6 years',
      skills: ['Agile', 'Scrum', 'Product Strategy']
    },
    {
      id: 10,
      candidate: 'Lisa Wang',
      position: 'Frontend Developer',
      status: 'interview',
      appliedDate: '2024-02-11',
      avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
      email: 'lisa.wang@example.com',
      experience: '2 years',
      skills: ['Vue.js', 'JavaScript', 'CSS']
    }
  ]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar />
      
      <div className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-8"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Applications
                </h1>
                <p className="text-gray-500 mt-1">Manage and track your candidates</p>
              </div>
              
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleRefresh}
                  className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                >
                  <FiRefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100"
                >
                  <FiDownload className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Enhanced Search and Filter Controls */}
            <div className="flex gap-4">
              <div className="relative flex-1">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, position, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>
              
              <motion.select
                whileHover={{ scale: 1.02 }}
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="Under Review">Under Review</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
              </motion.select>
            </div>
          </motion.div>

          {/* Enhanced Applications List */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <div className="grid grid-cols-5 gap-4 font-medium text-gray-600">
                <div>Candidate</div>
                <div>Position</div>
                <div>Status</div>
                <div>Applied Date</div>
                <div>Actions</div>
              </div>
            </div>

            {applications.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {applications.map((application, index) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    key={application.id}
                    className="px-6 py-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="grid grid-cols-5 gap-4 items-center">
                      <div className="flex items-center">
                        <img
                          src={application.avatar}
                          alt={application.candidate}
                          className="w-10 h-10 rounded-full mr-3 border-2 border-gray-200"
                        />
                        <div>
                          <span className="font-medium text-gray-900">{application.candidate}</span>
                          <p className="text-sm text-gray-500">{application.email}</p>
                        </div>
                      </div>
                      <div className="text-gray-700">{application.position}</div>
                      <div>
                        <StatusBadge status={application.status} />
                      </div>
                      <div className="text-gray-600">{application.appliedDate}</div>
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => navigate(`/company/applications/${application.id}`)}
                          className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          View Details
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-6 py-12 text-center"
              >
                <div className="text-gray-400 mb-2">
                  <FiFilter className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No applications found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Status Badge Component
const StatusBadge = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'Under Review':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'Accepted':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'Rejected':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm border ${getStatusStyles()}`}>
      {status}
    </span>
  );
};

export default ApplicationsPage;