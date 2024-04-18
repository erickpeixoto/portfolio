import { Post } from "@/lib/types/notion";
import { handleTags } from "@/lib/utils";
import Link from "next/link";
import { MdOutlineReadMore } from "react-icons/md";

export function PostList({ posts }: { posts: Post[] }) {
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
      {posts.map(({ tags, createdAt, title, slug }: Post, i) => (
        <Link href={`/blog/${slug}`} key={i}>
          <div className="p-5">
            <div
              className="w-full border-1 border-[#191919] bg-[#070707] p-3 flex flex-col gap-3 
            hover:border-identity/40 hover:bg-[#0D0D0D] rounded-md shadow-lg transition-all duration-300 ease-in-out
            "
            >
              <div className="flex justify-between">
                <div>{title}</div>
                <div className="text-right">
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                  }).format(new Date(createdAt))}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">{handleTags(tags)}</div>
                <div className="text-right">
                  <MdOutlineReadMore className="text-identity text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
