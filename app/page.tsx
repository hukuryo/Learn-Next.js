import Link from "next/link";
import { forbidden } from "next/navigation";
import React, { Suspense } from "react";

export default async function Page() {
  forbidden();
  return (
    <div>
      <Link href="/dashboard" prefetch>
        Dashboard
      </Link>
    </div>
  );
}
