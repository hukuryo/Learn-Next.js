"use client";

import Link from "next/link";
import { UserList } from "@/src/components/UserList";
import { SearchForm } from "@/src/components/SearchForm";
import { useState } from "react";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="p-4 max-w-[960px] m-auto">
      <h1 className="text-4xl py-8 font-medium">
        {"User Directory"}
      </h1>
      
      <SearchForm searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <UserList searchQuery={searchQuery} />

      <div className="mt-8">
        <li className="py-2">
          <h2 className="text-xl underline">
            <Link href="/dashboard">{`Go to Dashboard`}</Link>
          </h2>
        </li>
      </div>
    </div>
  );
}
