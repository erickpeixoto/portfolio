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
    <div className="min-h-screen pb-16">
      <BreadcrumbDynamic {...breadcrumb} />
      <ProjectDetails id={id} />
    </div>
  );
}
