"use client";

import { ChangeEvent } from "react";

type SearchFormProps = {
  searchQuery: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function SearchForm({ searchQuery, onSearchChange }: SearchFormProps) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search users by name..."
        value={searchQuery}
        onChange={onSearchChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>
  );
}
