import {
  BreadcrumbDynamic as Breadcrumb,
  BreadcrumbProps,
} from "@/app/components/breadcrumbDynamic";
import { getPosts } from "@/lib/actions/notion";
import { PostList } from "@/app/components/blog/list";
import { LoadMore } from "@/app/components/blog/loadMore";
import { ScrollShadow } from "@nextui-org/react";

const breadcrumbs: BreadcrumbProps = {
  items: [
    {
      URI: "/",
      description: "Home",
    },
  ],
  active: "Blog",
};

export default async function PBlog() {
  const data = await getPosts();
  return (
    <>
      <Breadcrumb {...breadcrumbs} />
      <ScrollShadow
        hideScrollBar
        className="w-full h-[600px] dark:bg-black bg-white dark:shadow-none shadow-md rounded-lg p-5"
      >
        <PostList {...data} />
        {data.has_more && <LoadMore {...data} />}
      </ScrollShadow>
    </>
  );
}
