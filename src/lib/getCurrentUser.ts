import { auth, currentUser } from "@clerk/nextjs/server";

export const getCurrentUser = async () => {
  const { userId } = await auth();

  const user = await currentUser();

  return {
    userId: userId,
    user: user,
  };
};
