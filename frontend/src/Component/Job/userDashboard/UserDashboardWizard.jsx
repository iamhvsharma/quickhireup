import React, { useState } from "react";
import Sidebar from "./Sidebar";
import UserProfileCard from "../UserProfileCard";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import CareerPref from './CareerPref';
import Education from './Education';
import KeySkill from './KeySkill';
import LanguagesForm from './LanguagesForm';
// Import other section components as needed

const UserDashboardWizard = () => {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    "careerPreferences",
    "education",
    "keySkills",
    "languages",
    "internships",
    "projects",
    "profileSummary",
    "accomplishments",
    "competitiveExams",
    "employment",
    "academicAchievements",
    "resume",
  ];

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const renderSectionContent = (section) => {
    switch (section) {
      case "careerPreferences":
        return <CareerPref />;
      case "education":
        return <Education />;
      case "keySkills":
        return <KeySkill />;
      case "languages":
        return <LanguagesForm />;
      // Add cases for other sections
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen max-w-7xl gap-y-9 mx-auto flex-col bg-slate-50 p-4">
      <UserProfileCard />
      <div className="flex gap-6">
        <Sidebar sections={sections} onSelect={toggleSection} />
        <div className="flex-1">
          {sections.map((section) => (
            <div key={section} className="mb-4">
              <h3
                className="cursor-pointer text-lg font-semibold flex justify-between items-center p-2 bg-gray-100 rounded-lg transition-colors duration-300 ease-in-out"
                onClick={() => toggleSection(section)}
              >
                {section.replace(/([A-Z])/g, ' $1').trim()}
                <span
                  className={`transform transition-transform duration-300 ease-in-out ${
                    openSection === section ? 'rotate-180' : ''
                  }`}
                >
                  {openSection === section ? (
                    <FaChevronDown className="text-blue-600" />
                  ) : (
                    <FaChevronRight className="text-blue-600" />
                  )}
                </span>
              </h3>
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                  openSection === section ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                {openSection === section && (
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    {renderSectionContent(section)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboardWizard;