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
      <body
        className={cn(
          inter.className,
          plusJakartaSans.variable,
          "flex place-content-center",
        )}
      >
        <ColorSchemeScript />
        <main className="w-full h-auto min-h-screen dark:bg-black bg-white md:m-[40px] lg:max-w-screen-2xl">
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
