import React from 'react';

const HeroSkeleton = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-background-light dark:bg-background-dark animate-pulse">
      <div className="text-center">
        <div className="w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-8"></div>
        <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-64 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-48 mx-auto mb-8"></div>
        <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-32 mx-auto"></div>
      </div>
    </div>
  );
};

export default HeroSkeleton;