import { loadProjects } from "@/server/mock/projects/items-projects";
import { Timeline } from "@/app/components/timeline";
import {
  BreadcrumbDynamic,
  BreadcrumbProps,
} from "@/app/components/breadcrumbDynamic";
import { ProjectList } from "../components/project-list";

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
  const projects = await loadProjects(1, 2);

  return (
    <>
      <BreadcrumbDynamic {...breadcrumbs} />
      <div className="md:flex pt-10">
        <div className="md:w-1/3 flex flex-col justify-between p-3">
          <Timeline />
        </div>
        <div className="h-40 w-full">
          <ProjectList projects={projects} />
        </div>
      </div>
    </>
  );
}
