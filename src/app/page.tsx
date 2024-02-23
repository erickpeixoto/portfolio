import { unstable_noStore as noStore } from "next/cache";

import { Button } from "@/app/components/ui/button";
import { ThemeToggle } from "@/app/components/theme-toggle";
import { api } from "@/trpc/server";

export default async function Home() {
  noStore();
  const hi = await api.post.hello.query({
    text: "from tRPC Erick's Boilerplate",
  });

  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-24 space-y-8">
      <ThemeToggle />
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Erick&apos;s Boilerplate
        </h1>
        <p className="text-xl">
          A modern foundation for scalable web applications.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* TRPC */}
        <div className="p-4 shadow-lg rounded-lg">
          <h2 className="font-semibold">tRPC</h2>
          <p>
            End-to-end typesafe APIs made easy, enabling seamless data fetching.
          </p>
        </div>
        {/* Next.js v14 */}
        <div className="p-4 shadow-lg rounded-lg">
          <h2 className="font-semibold">Next.js v14</h2>
          <p>
            React framework for production, featuring hybrid static & server
            rendering.
          </p>
        </div>
        {/* Server Actions */}
        <div className="p-4 shadow-lg rounded-lg">
          <h2 className="font-semibold">Server Actions</h2>
          <p>
            Leverage server-side logic for powerful data manipulation and API
            interactions.
          </p>
        </div>
        {/* Zod */}
        <div className="p-4 shadow-lg rounded-lg">
          <h2 className="font-semibold">Zod</h2>
          <p>Type-safe data validation ensuring robust data handling.</p>
        </div>
        {/* Tailwind CSS */}
        <div className="p-4 shadow-lg rounded-lg">
          <h2 className="font-semibold">Tailwind CSS</h2>
          <p>A utility-first CSS framework for rapid UI development.</p>
        </div>
        {/* Drizzle ORM */}
        <div className="p-4 shadow-lg rounded-lg">
          <h2 className="font-semibold">Drizzle ORM</h2>
          <p>Manage your database with an elegant ORM layer.</p>
        </div>
        {/* Playwright */}
        <div className="p-4 shadow-lg rounded-lg">
          <h2 className="font-semibold">Playwright</h2>
          <p>Automated end-to-end testing for modern web apps.</p>
        </div>
        {/* Shadcn-UI */}
        <div className="p-4 shadow-lg rounded-lg">
          <h2 className="font-semibold">Shadcn-UI</h2>
          <p>
            Robust React UI component library for faster and easier web
            development.
          </p>
        </div>
        {/* Storybook */}
        <div className="p-4 shadow-lg rounded-lg">
          <h2 className="font-semibold">Storybook</h2>
          <p>Build bulletproof UI components in isolation with Storybook.</p>
        </div>
      </div>
      <Button>Discover More</Button>
      <footer className="text-center">
        <p className="text-sm">{hi.greeting}</p>
      </footer>
    </main>
  );
}
