import { TypewriterEffect } from "@/app/components/typingHero";
import Link from "next/link";

export const Logo = () => {
  const logoWords = [
    {
      text: "<",
    },
    {
      text: "E",
    },
    {
      text: "e ",
      className: "text-identity dark:text-identity",
    },
    {
      text: " />",
      className: "text-identity dark:text-identity",
    },
  ];

  return (
    <Link href={"/"}>
      <h1 className="font-jaka">
        <TypewriterEffect words={logoWords} />
      </h1>
    </Link>
  );
};
