import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";
import "@mantine/core/styles.css";

import { ColorSchemeScript } from "@mantine/core";
import { Providers } from "@/app/providers";
import { NavBar } from "@/app/components/navBar";
import { cn, constructMetadata } from "@/lib/utils";
import { CopyRight } from "@/app/components/copy-right";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jaka",
});
const metadata = constructMetadata({
  title: "Erick Peixoto",
  description:
    "Explore the comprehensive portfolio of Erick Peixoto, a Senior Full Stack Developer specializing in React.js and Node.js. Discover innovative projects and technical solutions that highlight expertise in modern web development and leadership in technology.",
  image: "thumbnail.png",
});

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
          "flex place-content-center pb-5",
        )}
      >
        <ColorSchemeScript />
        <main className="w-full h-full min-h-screen dark:bg-black bg-white md:m-[40px] lg:max-w-screen-2xl">
          <Providers>
            <NavBar />
            {children}
            <CopyRight />
          </Providers>
        </main>
      </body>
    </html>
  );
}
export { metadata };
