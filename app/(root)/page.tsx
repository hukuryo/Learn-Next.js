import { revalidateTag } from "next/cache";
import { getName } from "./api";

export default async function Page() {
  const name = await getName();
  async function revalidate() {
    "use server";
    revalidateTag("name");
  }

  return (
    <>
      <div>{name}</div>
      <form action={revalidate}>
        <button type="submit" className="outline">
          revalidate
        </button>
      </form>
    </>
  );
}
