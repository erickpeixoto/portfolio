import { Skills } from "@/app/components/skills";
import {
  BreadcrumbDynamic as Breadcrumb,
  BreadcrumbProps,
} from "@/app/components/breadcrumbDynamic";

const breadcrumbs: BreadcrumbProps = {
  items: [
    {
      URI: "/",
      description: "Home",
    },
  ],
  active: "Innovation & Skills",
};

export default function PSkills() {
  return (
    <>
      <Breadcrumb {...breadcrumbs} />
      <Skills />;
    </>
  );
}
