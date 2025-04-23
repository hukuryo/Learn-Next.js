import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  const { userId } = await auth();

  if (!userId) {
    return <div>Sign in to view this page</div>;
  }

  const user = await currentUser();

  return <div>Welcome, {user ? user.firstName : "Guest"}!</div>;
}
