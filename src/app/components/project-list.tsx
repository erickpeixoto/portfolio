import { HoverEffect } from "@/app/components/card-hover-effect";
import { Project } from "@/server/mock/projects/project.types";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="w-full p-4">
      <HoverEffect items={projects ?? []} />
    </div>
  );
}
