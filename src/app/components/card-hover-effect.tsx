"use client";

import { cn } from "@/lib/utils";
import { Project } from "@/server/mock/projects/project.types";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";

export const HoverEffect = ({
  items,
  className,
}: {
  items: Project[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10",
        className,
      )}
    >
      {items.map((item, index) => (
        <Link
          href={`/projects/${item.id}`}
          key={item?.id}
          className="relative group  block p-2 h-full w-full"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Card project={item} />
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ project }: { project: Project }) => {
  return (
    <div className="rounded-2xl h-full w-full overflow-hidden bg-white dark:bg-black dark:border-white/[0.2] dark:group-hover:border-slate-700 relative z-2 p-3 border-2 dark:border-slate-00">
      <div className="relative z-50 h-full flex justify-between flex-col place-items-center place-content-center">
        <div>
          <Image
            src={project.images?.[0]}
            alt={project.images?.[0]}
            width={500}
          />
        </div>
        <div className="pt-3 text-center text-lg">{project.title}</div>
      </div>
    </div>
  );
};
