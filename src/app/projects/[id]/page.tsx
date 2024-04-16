import ProjectDetails from "@/app/components/project-details";
import {
  BreadcrumbDynamic,
  BreadcrumbProps,
} from "@/app/components/breadcrumbDynamic";

export default async function PDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const breadcrumb: BreadcrumbProps = {
    items: [
      {
        URI: "/",
        description: "Home",
      },
      {
        URI: "/projects",
        description: "Projects & Milestones",
      },
    ],
    active: "Project Details",
  };

  return (
    <>
      <BreadcrumbDynamic {...breadcrumb} />
      <ProjectDetails id={id} />
    </>
  );
}
