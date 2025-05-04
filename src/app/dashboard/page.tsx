import { unstable_ViewTransition as ViewTransition } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <ViewTransition>
        <div className="container mx-auto px-4 py-8 mt-8 max-w-[1200px]">
          <ViewTransition name="experimental-label">
            <b className="text-gray-800 inline-block">{`Dashboard`}</b>
          </ViewTransition>
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-blue-gray-500 hover:underline">
              ← Back
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-8">The latest Next.js news</h1>
        </div>
      </ViewTransition>
    </>
  );
}
