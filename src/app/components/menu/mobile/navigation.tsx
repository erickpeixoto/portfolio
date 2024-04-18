import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem, menus } from "@/app/components/menu/mobile/menu-items";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/app/components/themeToggle";
import { MenuToggle } from "@/app/components/menu/mobile/menu-toogle";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({
  isOpen,
  toogle,
}: {
  isOpen: boolean;
  toogle: () => void;
}) => (
  <motion.ul
    variants={variants}
    className={cn(
      "flex flex-col w-full justify-center items-center p-8 pl-16 bg-white z-40 dark:bg-primary text-black dark:text-white absolute left-0 top-7 ",
      isOpen ? "block" : "hidden",
    )}
    initial={false}
    animate={isOpen ? "open" : "closed"}
    layout
  >
    {menus.map((_, i) => (
      <MenuItem index={i} key={i} toogle={toogle} />
    ))}
    <div className="absolute right-0 top-9 flex flex-col items-center">
      <MenuToggle toggle={toogle} isOpen={isOpen} />
      <div className="mr-6">
        <ThemeToggle />
      </div>
    </div>
  </motion.ul>
);
