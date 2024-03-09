import Modal from "@/app/components/ui/modal";
import { projects } from "@/server/mock/projects";

export default function ProjectDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const project = projects.find((project) => project.id === id);
  return (
    <>
      <Modal title="Project Details">Hello {JSON.stringify({ project })}</Modal>
    </>
  );
}
