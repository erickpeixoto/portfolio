"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { loadProjects } from "@/server/mock/projects/items-projects";
import { HoverEffect } from "@/app/components/card-hover-effect";
import Image from "next/image";
import { Project } from "@/server/mock/projects/project.types";

export function LoadMore() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(2);
  const [ref, inView] = useInView();

  useEffect(() => {
    setIsLoading(true);
    if (inView) {
      loadProjects(page, 4).then((data) => {
        setProjects([...projects, ...data]);
        setPage(page + 1);
      });
      setIsLoading(false);
    }
  }, [inView, projects, page]);

  return (
    <>
      <div className="w-full h-[800px] -mt-20">
        <HoverEffect items={projects} />
        <div ref={ref}>
          {inView && isLoading && (
            <Image
              src="./spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          )}
        </div>
      </div>
    </>
  );
}
