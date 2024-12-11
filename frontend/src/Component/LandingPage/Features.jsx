import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Gif from "../img/sumbul_faq.gif";

// Renamed animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5,
    },
  },
};

const FeaturesSection = () => {
  const [selectedTab, setSelectedTab] = useState("Upload Files");
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const tabs = [
    "Upload Files",
    "Email Notifications",
    "Field Validations",
    "Auto Responses",
  ];

  const Tab = ({ children, isSelected, onClick }) => {
    const ref = React.useRef(null);

    const handleClick = () => {
      if (!ref?.current) return;
      const { width } = ref.current.getBoundingClientRect();
      setPosition({
        left: ref.current.offsetLeft,
        width,
        opacity: 1,
      });
      onClick();
    };

    return (
      <li
        ref={ref}
        onClick={handleClick}
        className={`relative z-10 flex items-center cursor-pointer px-4 py-2 text-sm font-medium uppercase ${
          isSelected ? "text-[#b3b8d0]" : "text-white"
        }`}
      >
        {children}
      </li>
    );
  };

  const Cursor = ({ position }) => {
    return (
      <motion.li
        animate={{
          ...position,
        }}
        className="absolute z-0 h-full rounded-full bg-blue-600"
        style={{ top: 0 }}
      />
    );
  };

  const EmailNotifications = () => {
    return (
      <motion.div
        className="flex flex-col items-start pl-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="border bg-green-600/90 border-gray-300 rounded-full p-4 mb-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
            />
          </svg>
        </motion.div>
        <motion.div variants={itemVariants} className="ml-2">
          <motion.div
            variants={itemVariants}
            className="uppercase text-lg mb-3 text-green-600 font-semibold"
          >
            email notifications
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="uppercase leading-[48px] font-bold text-white text-4xl"
          >
         
           AI Career Counselling Chatbot
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mt-3 text-lg font-medium"
          >
            AI Career Counselling Chatbot with detailed guidance and reports.

          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  const AutoResponse = () => {
    return (
      <motion.div
        className="flex flex-col items-start pl-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="border bg-blue-600/90 border-gray-300 rounded-full p-4 mb-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
        </motion.div>
        <motion.div variants={itemVariants} className="ml-2">
          <motion.div
            variants={itemVariants}
            className="uppercase text-lg mb-3 text-blue-600 font-semibold"
          >
            Auto Responses
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="uppercase leading-[48px] font-bold text-white text-4xl"
          >
           
            AI Suite
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mt-3 text-lg font-medium"
          >
          Dedication section of  Ai tools to help job seekers and recruiters. 
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  const FieldValidations = () => {
    return (
      <motion.div
        className="flex flex-col items-start pl-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="border bg-red-600/90 border-gray-300 rounded-full p-4 mb-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>
        </motion.div>
        <motion.div variants={itemVariants} className="ml-2">
          <motion.div
            variants={itemVariants}
            className="uppercase text-lg mb-3 text-red-600 font-semibold"
          >
            field validations
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="uppercase leading-[48px] font-bold text-white text-4xl"
          >
       
            Detailed Profile Building:
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mt-3 text-lg font-medium"
          >
           Showcase certificates, projects, skills, and achievements.
   
           Privacy controls for public or private profiles.
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  const UploadFiles = () => {
    return (
      <motion.div
        className="flex flex-wrap lg:flex-nowrap gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <motion.div
            variants={itemVariants}
            className="mb-4 flex items-center gap-2"
          >
            <span className="text-blue-600 text-3xl">📤</span>
            <p className="text-lg font-bold uppercase">Upload Files</p>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-4"
          >
           AI Matchmaking
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 mb-4">
          Students will get recommendations of companies on the basis of there resume provided by them .

          </motion.p>
          <motion.button
            variants={itemVariants}
            className="text-sm text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            See Documentation →
          </motion.button>
        </motion.div>
        <motion.div variants={itemVariants} className="flex-grow">
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-6 shadow-md"
          >
            <motion.h3
              variants={itemVariants}
              className="text-gray-800 font-semibold mb-2"
            >
              Contact Form
              <span className="text-sm text-gray-400 ml-2">43 Media</span>
            </motion.h3>
            <motion.form variants={itemVariants} className="space-y-4">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@business.com"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us more"
                  rows={3}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="file"
                  className="block text-sm font-medium text-gray-500"
                >
                  Upload Media
                </label>
                <input
                  type="file"
                  id="file"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </motion.div>
              <motion.button
                variants={itemVariants}
                type="submit"
                className="text-sm text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Submit
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center p-6 rounded-xl">
      <div className="max-w-5xl w-full bg-[#0c0f15] text-white rounded-3xl p-8 shadow-lg">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div>
            <p className="text-yellow-400 text-sm font-bold uppercase text-left">
              Savior, Yeah Time-Savior
            </p>
            <h1 className="text-4xl font-bold leading-tight mt-2 text-left">
              Features that
            </h1>
            <h1 className="text-4xl font-bold leading-tight mt-2 text-left">
              you<span className="text-yellow-700">💡</span> need.
            </h1>
            <p className="text-gray-400 mt-4">
              Use features that normally take days to code, in minutes.
            </p>
            <p className="text-gray-400 mt-4 text-left">
              Integration with your CRM in 2 minutes. Set auto-responses
            </p>
            <p className="text-gray-400 mt-4 text-left">
              minutes. Field validations in 2 minutes. You get the idea.
            </p>
          </div>
          <div className="w-64 h-w-64">
            <img src={Gif} alt="avatar" className="rounded-full" />
          </div>
        </div>

        {/* Tabs Section */}
        <ul
          className="relative flex w-fit rounded-full border-2 border-gray-700 bg-gray-800 p-1 mb-8"
          onMouseLeave={() => {
            setPosition((pv) => ({
              ...pv,
              opacity: 0,
            }));
          }}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab}
              setPosition={setPosition}
              isSelected={selectedTab === tab}
              onClick={() => setSelectedTab(tab)}
            >
              {tab === "Upload Files" && (
                <span className="mr-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                    />
                  </svg>
                </span>
              )}
              {tab === "Email Notifications" && (
                <span className="mr-2 flex items-center">
                  <span className="mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                      />
                    </svg>
                  </span>
                </span>
              )}
              {tab === "Field Validations" && (
                <span className="mr-2 flex items-center">
                  <span className="mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                      />
                    </svg>
                  </span>
                </span>
              )}
              {tab === "Auto Responses" && (
                <span className="mr-2 flex items-center">
                  <span className="mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                      />
                    </svg>
                  </span>
                </span>
              )}
              <span>{tab}</span>
            </Tab>
          ))}
          <Cursor position={position} />
        </ul>

        {/* Upload Files Section */}
        {selectedTab === "Upload Files" && <UploadFiles />}
        {selectedTab === "Email Notifications" && <EmailNotifications />}
        {selectedTab === "Field Validations" && <FieldValidations />}
        {selectedTab === "Auto Responses" && <AutoResponse />}
      </div>
    </div>
  );
};

export default FeaturesSection;
