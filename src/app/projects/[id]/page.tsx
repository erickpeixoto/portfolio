import { projects } from "@/server/mock/projects";

export default function ProjectDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const project = projects.find((project) => project.id === id);
  return <>{JSON.stringify({ project })}</>;
}
