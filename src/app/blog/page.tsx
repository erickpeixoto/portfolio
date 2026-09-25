import { unstable_noStore as noStore } from "next/cache";
import {
  BreadcrumbDynamic as Breadcrumb,
  BreadcrumbProps,
} from "@/app/components/breadcrumbDynamic";
import { getPosts } from "@/lib/actions/notion";
import { PostList } from "@/app/components/blog/list";
import { LoadMore } from "@/app/components/blog/loadMore";

const breadcrumbs: BreadcrumbProps = {
  items: [{ URI: "/", description: "Home" }],
  active: "Blog",
};

export default async function PBlog() {
  noStore();
  const data = await getPosts().catch(() => null);
  return (
    <div className="min-h-screen px-4 md:px-8 pb-20">
      <Breadcrumb {...breadcrumbs} />
      <div className="max-w-3xl mx-auto mt-6">
        {data ? (
          <>
            <PostList {...data} />
            {data.has_more && <LoadMore {...data} />}
          </>
        ) : (
          <p className="py-16 text-center text-[--text-secondary]">
            The posts could not be loaded right now. Please try again in a
            moment.
          </p>
        )}
      </div>
    </div>
  );
}
