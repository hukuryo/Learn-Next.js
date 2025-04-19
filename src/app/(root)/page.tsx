// import { getUserList, getName } from "./api";
// import { UserCard } from "./_user-card";
// import { CustomSuspense } from "@/src/util/custom-suspense";
// import Link from "next/link";
// import { z } from "zod";

// const UserSchema = z.object({
//   id: z.number(),
//   name: z.string(),
// });

// async function UserList() {
//   const users = await getUserList();
//   const parsedUsers = z.array(UserSchema).parse(users);
//   return (
//     <ul className="list-inside list-disc border p-4">
//       {parsedUsers.map((user) => (
//         <li key={user.id}>
//           <Link href={`/users/${user.id}`}>{user.name}</Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default function Page() {
//   return (
//     <>
//       <UserCard>
//         名前：
//         <CustomSuspense height={15} width={100}>
//           {getName()}
//         </CustomSuspense>
//       </UserCard>
//       <UserCard>
//         <CustomSuspense height={350} width="100%">
//           <UserList />
//         </CustomSuspense>
//       </UserCard>
//     </>
//   );
// }

import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function Page() {
  return (
    <div className="p-4 max-w-[960px] m-auto">
      <p>
        <span className="mr-2">
          <b className="text-blue-400">{`Experimental `}</b>

          <ViewTransition name="experimental-label">
            <span className="inline-block font-bold text-gray-700">{`Go to Dashboard`}</span>
          </ViewTransition>
        </span>
      </p>

      <h2 className="text-xl underline">
        <Link href="/dashboard">{`Floating Elements Transition`}</Link>
      </h2>
    </div>
  );
}
