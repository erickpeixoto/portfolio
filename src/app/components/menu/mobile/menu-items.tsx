"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type MenuItemProps = {
  index: number;
};

const menuVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: { y: { stiffness: 1000 } },
  },
};

const borderColorClasses = [
  "border-pink-500",
  "border-purple-600",
  "border-indigo-500",
  "border-purple-800",
];

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/look-at-me", label: "Behind the code" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Journey" },
];

const colorGradient = [
  "from-pink-500 to-rose-500",
  "from-purple-500 to-violet-500",
  "from-indigo-500 to-blue-500",
  "from-green-500 to-teal-500",
];

export const MenuItem = React.memo(({ index }: MenuItemProps) => {
  const { href, label } = menuItems[index];

  const bgColor = cn(
    "rounded-full w-4 h-4 mr-2",
    `bg-gradient-to-br ${colorGradient[index]}`,
  );
  const pathname = usePathname();

  const borderClass = pathname === href ? borderColorClasses[index] : "";

  return (
    <motion.li
      variants={menuVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={cn("mb-4", borderClass)}
    >
      <Link href={href}>
        <div className="flex items-center p-2">
          <div className={bgColor} />
          <span>{label}</span>
        </div>
      </Link>
    </motion.li>
  );
});
MenuItem.displayName = "MenuItem";
