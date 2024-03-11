import ProjectDetails from "@/app/components/project-details";
import dynamic from "next/dynamic";

const ModalDynamic = dynamic(() => import("@/app/components/ui/modal"), {
  ssr: false,
});

export default function DetailsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <ModalDynamic title="Project Details">
        <ProjectDetails id={id} />
      </ModalDynamic>
    </>
  );
}
