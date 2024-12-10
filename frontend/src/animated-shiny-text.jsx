import React from 'react';

export const AnimatedShinyText = ({ children, className }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="animate-shine absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        {children}
      </span>
    </div>
  );
}; 