import * as React from "react";
import { motion, SVGMotionProps } from "framer-motion";

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: { toggle: () => void }) => {
  return (
    <button
      onClick={toggle}
      className="outline-none border-none select-none cursor-pointer absolute top-4 left-4 w-12 h-12 rounded-full bg-transparent"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path d={"M 2 2.5 L 20 2.5"} transition={{ duration: 0.2 }} />
        <Path d={"M 2 9.423 L 20 9.423"} transition={{ duration: 0.2 }} />
        <Path d={"M 2 16.346 L 20 16.346"} transition={{ duration: 0.2 }} />
      </svg>
    </button>
  );
};
