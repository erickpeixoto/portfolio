"use client";

import { ScrollShadow } from "@nextui-org/react";
import { HoverEffect } from "@/app/components/card-hover-effect";
import LoadMore from "@/app/components/fetchMore";
import { Project } from "@/server/mock/projects/project.types";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ScrollShadow
      hideScrollBar
      className="w-full h-[800px] 
  dark:bg-black bg-white dark:shadow-none shadow-md rounded-lg p-5
   "
    >
      <HoverEffect items={projects ?? []} />
      <LoadMore />
    </ScrollShadow>
  );
}
