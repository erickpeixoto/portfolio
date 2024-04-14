import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";
import "@mantine/core/styles.css";

import { ColorSchemeScript } from "@mantine/core";
import { Providers } from "@/app/providers";
import { NavBar } from "@/app/components/navBar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jaka",
});

export const metadata: Metadata = {
  title: "Erick Peixoto - Senior Full Stack Developer Portfolio",
  description:
    "Explore the comprehensive portfolio of Erick Peixoto, a Senior Full Stack Developer specializing in React.js and Node.js. Discover innovative projects and technical solutions that highlight expertise in modern web development and leadership in technology.",
};

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
        <main
          className="m-[80px] min-h-screen items-center justify-between space-y-8 bg-white dark:bg-black xl:block max-w-screen-2xl mx-auto md:border-1 dark:border-identity
        "
        >
          <Providers>
            <NavBar />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
