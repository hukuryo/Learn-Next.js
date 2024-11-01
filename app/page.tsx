"use cache";
import { unstable_cacheLife as cacheLife } from "next/cache";

export default async function Page() {
  cacheLife("hours");
  return <div>Page</div>;
}
