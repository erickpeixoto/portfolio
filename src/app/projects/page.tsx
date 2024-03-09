import HeaderTitle from "@/app/components/headerTitle";
import { HoverEffect } from "@/app/components/card-hover-effect";
import { ScrollShadow } from "@nextui-org/react";
import { loadProjects } from "@/server/mock/projects";
import LoadMore from "@/app/components/fetchMore";
import { Timeline } from "@/app/components/timeline";

export default async function Projects() {
  const projects = await loadProjects(1, 6);

  return (
    <div className="flex p-5 pt-10">
      <div className="h-screen w-1/3 flex flex-col justify-between pb-[200px]">
        <HeaderTitle text="Projects" />
        {/* <Timeline /> */}
      </div>
      <div className="h-40 w-2/3">
        <ScrollShadow hideScrollBar className="w-full h-[800px]">
          <HoverEffect items={projects ?? []} />
          <LoadMore />
        </ScrollShadow>
      </div>
    </div>
  );
}
