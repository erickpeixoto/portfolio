import { VideoSteps } from "@/app/components/videosSteps";
import {
  BreadcrumbDynamic as BreadCrumb,
  BreadcrumbProps,
} from "@/app/components/breadcrumbDynamic";

const LookAtMePage = () => {
  const breadcrumb: BreadcrumbProps = {
    items: [
      {
        URI: "/",
        description: "Home",
      },
    ],
    active: "Behind the code",
  };

  return (
    <>
      <BreadCrumb {...breadcrumb} />
      <VideoSteps />
    </>
  );
};
export default LookAtMePage;
