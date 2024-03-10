import ProjectDetails from "@/app/components/project-details";

export default async function PDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  return <ProjectDetails id={id} />;
}
