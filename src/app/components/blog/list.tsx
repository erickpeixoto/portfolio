import { NotionCallResponse, Post } from "@/lib/types/notion";
import { PostItem } from "@/app/components/blog/post";

export function PostList(data: NotionCallResponse) {
  const { posts } = data;

  if (!posts || posts.length === 0)
    return (
      <div className="text-identity h-screen text-2xl font-bold text-center p-5 md:pt-20">
        <h2>No Posts Available</h2>
        <p className="mt-2 font-thin text-base text-white">
          I am constantly working to bring you new and interesting content.
          Check back soon!
        </p>
      </div>
    );
  return (
    <>
      {posts.map((post: Post, i) => (
        <PostItem post={post} key={i} />
      ))}
    </>
  );
}
