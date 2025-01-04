import Link from "next/link";
import React, { Suspense } from "react";

export default async function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/" prefetch={false}>
        Home
      </Link>
    </div>
  );
}
