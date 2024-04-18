import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const tagColors = [
  "bg-identity opacity-60",
  "bg-[#A374F1] opacity-60",
  "bg-[#E774F1] opacity-60",
  "bg-[#74ADF1] opacity-60",
  "bg-[#F17C74] opacity-60",
  "bg-[#F17474] opacity-60",
];
export function handleTags(tags: string[]) {
  return tags.map((tag, index) => (
    <span
      key={tag}
      className={cn(
        "text-sm text-white px-2 py-1 rounded-md op hover:opacity-90",
        tagColors[index % tagColors.length],
      )}
    >
      {tag}
    </span>
  ));
}
export function constructMetadata({
  title,
  description,
  image,
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
      url: "https://erickpeixoto.tech",
      siteName: title,
      description,
      images: [
        {
          url: `https://erickpeixoto.tech/${image}`,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/posts/04-18-2024.jpeg"],
      creator: "@erickpeixoto",
    },
    icons,
    metadataBase: new URL("https://erickpeixoto.tech"),
    ...(noIndex && {
      robots: {
        index: true,
        follow: true,
      },
    }),
  };
}
