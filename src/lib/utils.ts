import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Erick Peixoto - Senior Full Stack Developer Portfolio",
  description = "Explore the comprehensive portfolio of Erick Peixoto, a Senior Full Stack Developer specializing in React.js and Node.js. Discover innovative projects and technical solutions that highlight expertise in modern web development and leadership in technology.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@erickpeixoto",
    },
    icons,
    metadataBase: new URL("https://erick.peixoto.tech"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
