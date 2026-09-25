"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillBarProps {
  name: string;
  years: number;
  maxYears?: number;
}

export function SkillBar({ name, years, maxYears = 13 }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const percentage = Math.min((years / maxYears) * 100, 100);

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium dark:text-[--text-primary] text-gray-800">
          {name}
        </span>
        <span className="font-mono text-[10px] text-[--text-muted] uppercase tracking-wider">
          {years}+ yrs
        </span>
      </div>
      <div className="h-1 w-full rounded-full bg-[--surface-border] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-identity"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />
      </div>
    </div>
  );
}
