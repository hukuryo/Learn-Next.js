import { getName } from "@/app/(root)/api";
import React from "react";
import { Suspense } from "react";

export const UserCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div>
        <Suspense
          fallback={<div className="h-5 w-10 animate-pulse bg-zinc-200"></div>}
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {getName()}
          </h5>
        </Suspense>
      </div>
      <div>{children}</div>
    </div>
  );
};
