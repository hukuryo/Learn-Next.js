import { CustomSuspense } from "@/util/CustomSuspense";
import { UserCard } from "../../components/UserCard";
import { getCount, getName } from "./api";

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
