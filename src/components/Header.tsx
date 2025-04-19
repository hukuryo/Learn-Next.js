"use client";

import Link from "next/link";
// import LoadingIndicator from "./LoadingIndicator";

export default function Header() {
  return (
    <header>
      <Link href="/dashboard">Dashboard</Link>
    </header>
  );
}
