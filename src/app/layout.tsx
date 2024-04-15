import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";
import "@mantine/core/styles.css";

import { ColorSchemeScript } from "@mantine/core";
import { Providers } from "@/app/providers";
import { NavBar } from "@/app/components/navBar";
import { cn, constructMetadata } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jaka",
});
const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <ColorSchemeScript />
      <body className={cn(inter.className, plusJakartaSans.variable)}>
        <main className="m-[80px] md:m-[40px] min-h-screen flex items-center justify-between space-y-8 bg-white dark:bg-black xl:block max-w-screen-2xl mx-auto md:border dark:border-identity overflow-x-hidden">
          <Providers>
            <NavBar />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
export { metadata };
