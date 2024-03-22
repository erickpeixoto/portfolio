"use client";
import React, { useState } from "react";
import { Menu as MenuItems, MenuItem } from "@/app/components/menuItems";
import { cn } from "@/lib/utils";
import ContactForm from "@/app/components/form/contact";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Menu = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const pathName = usePathname();

  return (
    <div className={cn("mx-auto z-50", className)}>
      <MenuItems setActive={setActive}>
        <Link
          className={cn(
            "pt-6 hover:text-identity transition",
            pathName === "/skills" &&
              "text-identity border-b-2 border-identity",
          )}
          href={"/skills"}
        >
          Skills
        </Link>

        <Link
          className={cn(
            "pt-6 hover:text-identity transition",
            pathName === "/projects" &&
              "text-identity border-b-2 border-identity",
          )}
          href={"/projects"}
        >
          Journey
        </Link>

        <Link
          className={cn(
            "pt-6 hover:text-identity transition",
            pathName === "/blog" && "text-identity border-b-2 border-identity",
          )}
          href={"/blog"}
        >
          Blog
        </Link>
        <Link
          className="pt-6 hover:text-identity transition"
          href={
            "https://utfs.io/f/55cd37bf-204d-4e6a-bdc2-cc43e450b1f4-e1qxd7.pdf"
          }
          target="_blank"
        >
          Resume
        </Link>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <ContactForm />
        </MenuItem>
      </MenuItems>
    </div>
  );
};
