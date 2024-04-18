import {
  BreadcrumbDynamic as Breadcrumb,
  BreadcrumbProps,
} from "@/app/components/breadcrumbDynamic";
import { getPosts } from "@/lib/actions/notion";
import { PostList } from "@/app/components/blog/list";

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
  const posts = await getPosts();

  return (
    <>
      <Breadcrumb {...breadcrumbs} />
      <PostList posts={posts} />
    </>
  );
}
