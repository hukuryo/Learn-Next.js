import { unstable_cacheTag } from "next/cache";

export async function getName() {
  "use cache";
  unstable_cacheTag("name");

  const res = await fetch(`http://localhost:3000/api/name`);
  const name = await res.json();
  return name as string;
}
