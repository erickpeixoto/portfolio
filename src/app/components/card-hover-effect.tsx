"use client";

import { cn } from "@/lib/utils";
import { Project } from "@/server/mock/project.types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SiReact } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const stagger = 0.15;

export const HoverEffect = ({
  items,
  className,
}: {
  items: Project[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className,
      )}
    >
      {items.map((item, idx) => (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: idx * stagger,
            ease: "easeInOut",
            duration: 0.1,
          }}
          viewport={{ amount: 0 }}
          className="max-w-sm rounded relative w-full"
          key={idx}
        >
          <Link
            href={`/projects/${item.id}`}
            key={item?.id}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card project={item} />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export const Card = ({ project }: { project: Project }) => {
  return (
    <div
      className={
        "rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-2 p-3"
      }
    >
      <div className="relative z-50 h-[250px] flex justify-between flex-col">
        <Image
          src={project.image}
          alt={project.image}
          width={400}
          height={200}
        />
        <div className="pt-3 text-center text-lg">{project.title}</div>
      </div>
    </div>
  );
};
