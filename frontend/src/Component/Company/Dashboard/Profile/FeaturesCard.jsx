import React from 'react';

const FeatureCard = ({ icon, title, description, buttonText, buttonAction }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'telescope':
        return '🔭';
      case 'megaphone':
        return '📢';
      case 'users':
        return '👥';
      default:
        return '📌';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="text-3xl mb-4">{getIcon(icon)}</div>
      <h3 className="text-lg font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">{description}</p>
      <button
        onClick={buttonAction}
        className="w-full py-2.5 px-4 border border-gray-300 rounded-md text-center 
                 text-gray-700 hover:bg-gray-50 hover:border-gray-400 
                 transition-all duration-200 focus:outline-none focus:ring-2 
                 focus:ring-offset-2 focus:ring-blue-500"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default FeatureCard;