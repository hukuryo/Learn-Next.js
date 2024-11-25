import Link from "next/link";
import React, { Suspense } from "react";

export default async function Page() {
  return (
    <div>
      <Link href="/dashboard" prefetch>
        Dashboard
      </Link>
    </div>
  );
}
