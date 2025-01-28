import { getCount, getName } from "./api";
import { UserCard } from "./_user-card";
import { CustomSuspense } from "@/src/util/custom-suspense";

export default async function Page() {
  return (
    <>
      <UserCard>
        名前：
        <CustomSuspense height={15} width={100}>
          {getName()}
        </CustomSuspense>
      </UserCard>
      <UserCard>
        投稿数：
        <CustomSuspense height={15} width={100}>
          {getCount()}
        </CustomSuspense>
      </UserCard>
    </>
  );
}
