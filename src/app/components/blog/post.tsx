"use client";

import { Post } from "@/lib/types/notion";
import { handleTags } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineReadMore } from "react-icons/md";

export function PostItem({ post }: { post: Post }) {
  const { title, createdAt, tags, slug } = post;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Link
      href={`/blog/${slug}`}
      onClick={() => {
        setIsLoading(true);
      }}
    >
      <div className="p-5 cursor-pointer">
        <div
          className="w-full border-1 dark:border-[#191919] dark:bg-[#070707] p-3 flex flex-col gap-3 
        hover:border-identity/40 dark:hover:bg-[#0D0D0D] rounded-md shadow-lg transition-all duration-300 ease-in-out
        bg-white 
        "
        >
          <div className="flex justify-between">
            <div className="truncate md:text-ellipsis md:overflow-hidden">
              {title}
            </div>
            <div className="text-right max-h-2">
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-identity relative top-4" />
                </motion.div>
              )}
              {!isLoading && (
                <>
                  <div className="hidden md:block">
                    {new Intl.DateTimeFormat("en-US", {
                      dateStyle: "medium",
                    }).format(new Date(createdAt))}
                  </div>
                  <div className="md:hidden">
                    {new Intl.DateTimeFormat("en-US", {
                      dateStyle: "short",
                    }).format(new Date(createdAt))}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">{handleTags(tags)}</div>
            <div className="text-right">
              {!isLoading && (
                <MdOutlineReadMore className="text-identity text-2xl" />
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
