"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { getPosts } from "@/lib/actions/notion";
import { NotionCallResponse, Post } from "@/lib/types/notion";
import { useState } from "react";
import { PostItem } from "@/app/components/blog/post";

export function LoadMore({
  next_cursor,
}: Pick<NotionCallResponse, "next_cursor">) {
  const [cursor, setCursor] = useState<string | null>(next_cursor);
  const [posts, setPosts] = useState<Post[]>([]);
  const [has_more, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const loadMore = async () => {
    setLoading(true);
    const data = await getPosts(cursor!);
    setCursor(data.next_cursor);
    if (!data.posts) return;
    setPosts((prev) => [...prev, ...data.posts]);
    setHasMore(data.has_more);
    setLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {posts.map((post: Post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
            }}
          >
            <PostItem post={post} />
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="flex place-content-center">
        <Button
          onClick={loadMore}
          disabled={!has_more || loading}
          className="mt-5 text-white bg-identity hover:bg-identity/90"
        >
          {loading ? "Loading..." : "Load More"}
        </Button>
      </div>
    </>
  );
}
