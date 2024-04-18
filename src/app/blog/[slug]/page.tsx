import { getPageContent, getPost, notion } from "@/lib/actions/notion";
import { notFound } from "next/navigation";
import { NotionRenderer } from "@notion-render/client";

import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { PostDetails } from "@/app/components/blog/post";
import { Post } from "@/lib/types/notion";
import {
  BreadcrumbDynamic as Breadcrumb,
  BreadcrumbProps,
} from "@/app/components/breadcrumbDynamic";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next";

let metadata: Metadata;
const breadcrumbs: BreadcrumbProps = {
  items: [
    {
      URI: "/",
      description: "Home",
    },
    {
      URI: "/blog",
      description: "Blog",
    },
  ],
  active: "Post",
};

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  metadata = constructMetadata({
    title: post?.title,
    image: post?.image,
  });

  if (!post) {
    notFound();
    return null;
  }
  const content = await getPageContent(post.id!);
  const notionRenderer = new NotionRenderer({
    client: notion,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));
  const html = await notionRenderer.render(...(content as any));

  return (
    <>
      <Breadcrumb {...breadcrumbs} />
      <PostDetails
        post={
          {
            ...post,
            html,
          } as Post
        }
      />
    </>
  );
}

export { metadata };
