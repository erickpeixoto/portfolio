import { Post } from "@/lib/types/notion";
import { handleTags } from "@/lib/utils";
import Link from "next/link";
import { MdOutlineReadMore } from "react-icons/md";

export function PostItem({ post }: { post: Post }) {
  const { title, createdAt, tags, slug } = post;

  return (
    <Link href={`/blog/${slug}`}>
      <div className="p-5 cursor-pointer">
        <div
          className="w-full border-1 dark:border-[#191919] dark:bg-[#070707] p-3 flex flex-col gap-3 
        hover:border-identity/40 dark:hover:bg-[#0D0D0D] rounded-md shadow-lg transition-all duration-300 ease-in-out
        bg-white 
        "
        >
          <div className="flex justify-between">
            <div>{title}</div>
            <div className="text-right">
              {new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
                new Date(createdAt),
              )}
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
  );
}
