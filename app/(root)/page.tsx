import { Suspense } from "react";
import { UserCard } from "../../components/UserCard";
import { getCount } from "./api";

export default async function Page() {
  return (
    <>
      <UserCard>
        <Suspense fallback={<div>Loading...</div>}>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            投稿数：{getCount()}
          </p>
        </Suspense>
      </UserCard>
    </>
  );
}
