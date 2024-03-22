import {
  BreadcrumbProps,
  BreadcrumbDynamic,
} from "@/app/components/breadcrumbDynamic";

export default function PBlog() {
  const breadcrumbs: BreadcrumbProps = {
    items: [
      {
        URI: "/",
        description: "Home",
      },
    ],
    active: "Blog",
  };

  return (
    <>
      <BreadcrumbDynamic {...breadcrumbs} />
      <div className="container">
        <p>Coming soon! </p>
      </div>
    </>
  );
}
