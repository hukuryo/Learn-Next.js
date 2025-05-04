import Link from "next/link";

export default function Page() {
  return (
    <div className="p-4 max-w-[960px] m-auto">
      <h1 className="text-4xl py-8 font-medium">{"User Directory"}</h1>

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
