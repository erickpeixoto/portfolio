"use client";

import { Post } from "@/lib/types/notion";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export function PostItem({ post }: { post: Post }) {
  const { title, createdAt, tags, slug } = post;
  const [isLoading, setIsLoading] = useState(false);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
  }).format(new Date(createdAt));

  return (
    <Link
      href={`/blog/${slug}`}
      onClick={() => setIsLoading(true)}
      className="block group"
    >
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="p-5 rounded-2xl border border-[--surface-border] dark:bg-[--surface-1] bg-white mb-3 transition-all duration-300 group-hover:border-identity/40 group-hover:shadow-[0_0_20px_rgba(126,116,241,0.1)]"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-bricolage font-semibold text-base dark:text-[--text-primary] text-gray-900 leading-snug flex-1">
            {title}
          </h3>
          <div className="flex-shrink-0">
            {isLoading ? (
              <div className="w-4 h-4 rounded-full border-2 border-identity border-t-transparent animate-spin mt-1" />
            ) : (
              <span className="font-mono text-[11px] text-[--text-muted] whitespace-nowrap">
                {formattedDate}
              </span>
            )}
          </div>
        </div>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[--identity-dim] text-identity border border-identity/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </Link>
  );
}
