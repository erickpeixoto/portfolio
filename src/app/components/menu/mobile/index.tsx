"use client";

import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "@/app/components/menu/mobile/use-dimensions";
import { MenuToggle } from "@/app/components/menu/mobile/menu-toogle";
import { Navigation } from "@/app/components/menu/mobile/navigation";
import { Logo } from "@/app/components/logo";
import { Schedule } from "@/app/components/buttonSchedule";

export const MenuMobile = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="w-full overflow-hidden md:hidden flex justify-between pl-4 md:pl-0"
    >
      <Navigation isOpen={isOpen} toogle={toggleOpen} />
      <Logo />

      <Schedule />
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
};
