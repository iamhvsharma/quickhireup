import React from 'react';

const Sidebar = ({ sections, onSelect }) => {
  return (
    <div className="w-1/4 p-4 bg-white rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Quick links</h3>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li
            key={section}
            className="cursor-pointer text-blue-600 hover:underline transition duration-300 ease-in-out"
            onClick={() => onSelect(section)}
          >
            {section.replace(/([A-Z])/g, ' $1').trim()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;