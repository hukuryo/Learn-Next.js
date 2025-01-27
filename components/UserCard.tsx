import React from "react";

export const UserCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="block max-w-sm p-6  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      {children}
    </div>
  );
};
