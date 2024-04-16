import { HoverEffect } from "@/app/components/card-hover-effect";
import { ScrollShadow } from "@nextui-org/react";
import { loadProjects } from "@/server/mock/projects/items-projects";
import LoadMore from "@/app/components/fetchMore";
import { Timeline } from "@/app/components/timeline";
import {
  BreadcrumbDynamic,
  BreadcrumbProps,
} from "@/app/components/breadcrumbDynamic";

const breadcrumbs: BreadcrumbProps = {
  items: [
    {
      URI: "/",
      description: "Home",
    },
  ],
  active: "Projects & Milestones",
};

export default async function Projects() {
  const projects = await loadProjects(1, 4);

  return (
    <>
      <BreadcrumbDynamic {...breadcrumbs} />
      <div className="md:flex pt-10">
        <div className="md:w-1/3 flex flex-col justify-between p-3">
          <Timeline />
        </div>
        <div className="h-40 w-full">
          <ScrollShadow
            hideScrollBar
            className="w-full h-[800px] 
          dark:bg-black bg-white dark:shadow-none shadow-md rounded-lg p-5
           "
          >
            <HoverEffect items={projects ?? []} />
            <LoadMore />
          </ScrollShadow>
        </div>
      </div>
    </>
  );
}
