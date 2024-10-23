"use client";

import { useSearchParams } from "next/navigation";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  return (
    <div>
      <h1>Search Page</h1>
      <p>Query: {query}</p>
    </div>
  );
};

export default SearchPage;
