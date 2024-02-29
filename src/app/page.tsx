import { NavBar } from "@/app/components/navBar";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-24 space-y-8 bg-bodyBg">
      <NavBar />
    </main>
  );
}
