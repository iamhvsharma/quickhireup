import React from 'react';
import { 
  Telescope, 
  Megaphone, 
  Users, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

const FeatureCard = ({ icon, title, description, buttonText, buttonAction, bgColor, iconColor }) => {
  // Icon mapping
  const getIcon = (iconName) => {
    const iconProps = { size: 24, className: `${iconColor}` };
    switch (iconName) {
      case 'telescope':
        return <Telescope {...iconProps} />;
      case 'megaphone':
        return <Megaphone {...iconProps} />;
      case 'users':
        return <Users {...iconProps} />;
      default:
        return <Sparkles {...iconProps} />;
    }
  };

  return (
    <div className={`${bgColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300 group relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16 opacity-10 rounded-full bg-current"></div>
      
      {/* Icon */}
      <div className="relative mb-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
          {getIcon(icon)}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Button */}
      <button
        onClick={buttonAction}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 group/button"
      >
        {buttonText}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
      </button>

      {/* Hover Effect Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </div>
  );
};

export default FeatureCard; 