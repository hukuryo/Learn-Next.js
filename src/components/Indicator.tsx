"use client";

import { useLinkStatus } from "next/link";

export function Indicator() {
  const { pending } = useLinkStatus();
  return pending ? (
    <span className="fixed top-0 left-0 z-1 h-[3px] bg-blue-300 opacity-50 indicator" />
  ) : null;
}
