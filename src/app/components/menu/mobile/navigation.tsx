import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menu-items";
import { cn } from "@/lib/utils";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ isOpen }: { isOpen: boolean }) => (
  <motion.ul
    variants={variants}
    className={cn(
      "flex flex-col w-full justify-center items-center p-8 pl-16 bg-white dark:bg-primary text-black dark:text-white",
      isOpen ? "block" : "hidden",
    )}
    initial={false}
    animate={isOpen ? "open" : "closed"}
    layout
  >
    {itemIds.map((i) => (
      <MenuItem index={i} key={i} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3];
