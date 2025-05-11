import { getName } from "../app/(root)/api";
import React from "react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const UserCard = () => {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg">
      <ErrorBoundary fallback={"Something went wrong"}>
        <Suspense
          fallback={<div className="h-5 w-10 animate-pulse bg-zinc-200"></div>}
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {getName()}
          </h5>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
