"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu as MenuItems,
  MenuItem,
  ProductItem,
} from "@/app/components/menuItems";
import { cn } from "@/lib/utils";
import ContactForm from "@/app/components/form/contact";
import Link from "next/link";

export const Menu = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("mx-auto z-50", className)}>
      <MenuItems setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Skills">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Stack</HoveredLink>
            <HoveredLink href="/interface-design">Soft kills</HoveredLink>
            <HoveredLink href="/seo">Development Process</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <ContactForm />
        </MenuItem>
        <Link
          className="pt-6"
          href={"https://www.linkedin.com/in/erickpeixoto/"}
        >
          Resume
        </Link>
      </MenuItems>
    </div>
  );
};
