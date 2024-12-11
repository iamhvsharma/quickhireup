import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 lg:ml-64 transition-all duration-300 ease-in-out">
          {/* Dashboard Header Section */}
          <div className="mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-slate-700">Total Applications</h3>
                <p className="text-3xl font-bold text-indigo-600 mt-2">124</p>
                <p className="text-sm text-slate-500 mt-1">+12% from last month</p>
              </div>
              <div className="p-4 bg-white rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-slate-700">Interviews</h3>
                <p className="text-3xl font-bold text-emerald-600 mt-2">28</p>
                <p className="text-sm text-slate-500 mt-1">+5% from last month</p>
              </div>
              <div className="p-4 bg-white rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-slate-700">Profile Views</h3>
                <p className="text-3xl font-bold text-blue-600 mt-2">1.2k</p>
                <p className="text-sm text-slate-500 mt-1">+18% from last month</p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex space-x-0">
            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white rounded-l-2xl shadow-md border border-slate-100 p-6">
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <h2 className="text-xl font-semibold text-slate-800">Dashboard Overview</h2>
                </div>
                <Outlet />
              </div>
            </div>

            {/* Side Panel */}
            <div className="w-80">
              {/* Recent Activity */}
              <div className="bg-white shadow-md border-y border-r border-slate-100 p-6">
                <h3 className="text-lg font-semibold text-slate-700 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-sm text-slate-600">New application response</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="text-sm text-slate-600">Interview scheduled</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-br-2xl shadow-md p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg py-2 px-4 text-sm transition-colors">
                    Update Profile
                  </button>
                  <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg py-2 px-4 text-sm transition-colors">
                    View Applications
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

