import { Post } from "@/lib/types/notion";
import { handleTags } from "@/lib/utils";

interface PostProps {
  post: Post;
}

export function PostDetails({ post }: PostProps) {
  return (
    <div className="mx-auto max-w-4xl p-6 min-h-screen">
      <h1 className="text-4xl py-6">{post.title}</h1>

      <div className="text-sm text-slate-400">
        {new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
          new Date(post.createdAt),
        )}
      </div>
      <hr className="my-6" />
      <div className="flex space-x-2">{handleTags(post.tags)}</div>

      <div
        className="text-xl mt-4 max-w-3xl leading-10 prose prose-p:text-white prose-headings:text-white"
        dangerouslySetInnerHTML={{ __html: post.html! }}
      ></div>
    </div>
  );
}
