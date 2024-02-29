import { unstable_noStore as noStore } from "next/cache";

import { NavBar } from "@/app/components/navBar";
import { api } from "@/trpc/server";

export default async function Home() {
  noStore();
  const hi = await api.post.hello.query({
    text: "from tRPC Erick's Boilerplate",
  });

  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-24 space-y-8 bg-bodyBg">
      <NavBar />
    </main>
  );
}
