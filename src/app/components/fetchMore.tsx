"use client";

import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";
import { loadProjects } from "@/server/mock/projects";
import { HoverEffect, Project } from "@/app/components/card-hover-effect";
import Image from "next/image";

export default function LoadMore() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(2);
  const [ref, inView] = useInView();

  useEffect(() => {
    setIsLoading(true);
    if (inView) {
      loadProjects(page).then((data) => {
        setProjects([...projects, ...data]);
        setPage(page + 1);
      });
      setIsLoading(false);
    }
    console.log({ inView, page });
  }, [inView]);

  return (
    <>
      <div className="w-full h-[800px] -mt-20">
        <HoverEffect items={projects} />
        {JSON.stringify({ page, isLoading, inView })}
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
