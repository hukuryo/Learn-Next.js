import { getCurrentUser } from "@/src/lib/getCurrentUser";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

export default async function Page() {
  const { userId, user } = await getCurrentUser();

  if (!userId) {
    return <div>Sign in to view this page</div>;
  }

  return (
    <div className="p-4 max-w-[960px] m-auto">
      <h1 className="text-4xl py-8 font-medium">
        {"View Transition Next.js Examples"}
      </h1>
      <div>Welcome, {user ? user.firstName : "Guest"}!</div>

      <p>
        <span className="mr-2">
          {`Use React `}
          <b className="text-blue-400">{`Experimental `}</b>

          <ViewTransition name="experimental-label">
            <span className="inline-block font-bold text-gray-700">{`<ViewTransitions>`}</span>
          </ViewTransition>

          {` API in Next.js.`}
        </span>
      </p>

      <li className="py-2">
        <h2 className="text-xl underline">
          <Link href="/dashboard">{`Floating Elements Transition`}</Link>
        </h2>
      </li>
    </div>
  );
}
