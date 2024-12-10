import React from 'react';
import CareerPref from './CareerPref';
import Education from './Education';
import KeySkill from './KeySkill';
import LanguagesForm from './LanguagesForm';

const FormContent = ({ section }) => {
  const renderForm = () => {
    switch (section) {
      case 'careerPreferences':
        return <CareerPref />;
      case 'education':
        return <Education />;
      case 'keySkills':
        return <KeySkill />;
      case 'languages':
        return <LanguagesForm />;
      // Add cases for other sections
      default:
        return <div>Select a section to view or edit</div>;
    }
  };

  return (
    <div className="w-3/4 p-4 bg-white rounded-lg shadow-sm max-w-6xl">
      {renderForm()}
    </div>
  );
};

export default FormContent;