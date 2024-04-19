"use server";

import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { cache } from "react";
import {
  NotionCallResponse,
  NotionDatabaseResponse,
  Post,
} from "@/lib/types/notion";

const DATABASE_ID: string = process.env.NOTION_BLOG_DB_ID!;
const PAGE_SIZE: number = 3;
export async function getNotionClient(): Promise<Client> {
  return new Client({ auth: process.env.NOTION_API_KEY });
}

export async function getPosts(
  startCursor?: string,
): Promise<NotionCallResponse> {
  try {
    const notion = await getNotionClient();
    const response = await notion.databases.query({
      filter: {
        property: "status",
        status: {
          equals: "published",
        },
      },
      start_cursor: startCursor,
      page_size: PAGE_SIZE,
      database_id: DATABASE_ID,
    });
    if (!response.results) {
      return { posts: [], next_cursor: null, has_more: false };
    }
    const typedResponse = response as unknown as NotionDatabaseResponse;

    const posts: Post[] = typedResponse.results.map((post) => {
      const title =
        post.properties.title && post.properties.title.title.length > 0
          ? post.properties.title.title[0].plain_text
          : "Default Title";

      const description =
        post.properties.description?.rich_text[0]?.plain_text ||
        "Default Description";

      const slug =
        post.properties.slug && post.properties.slug.rich_text.length > 0
          ? post.properties.slug.rich_text[0].plain_text
          : "default-slug";

      const tags =
        post.properties.tags && post.properties.tags.multi_select.length > 0
          ? post.properties.tags.multi_select.map((tag) => tag.name)
          : [];

      const createdAt =
        post.properties.createdAt && post.properties.createdAt.date
          ? new Date(post.properties.createdAt.date.start).toISOString()
          : "Unknown Date";

      return {
        id: post.id,
        title,
        description,
        slug,
        tags,
        createdAt,
      };
    });

    return {
      posts,
      next_cursor: typedResponse.next_cursor,
      has_more: typedResponse.has_more,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts from Notion.");
  }
}

export async function getPost(slug: string) {
  try {
    const notion = await getNotionClient();
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: "slug",
        rich_text: {
          equals: slug,
        },
      },
    });

    const typedResponse = response as unknown as NotionDatabaseResponse;
    if (typedResponse.results.length === 0) {
      throw new Error(`Post with slug "${slug}" not found.`);
    }

    const post = typedResponse.results[0];

    if (!post.properties) {
      throw new Error("The requested post does not have properties.");
    }

    const n2m = new NotionToMarkdown({ notionClient: notion });
    const mdblocks = await n2m.pageToMarkdown(post.id);
    const mdString = n2m.toMarkdownString(mdblocks);

    const createdAt =
      post.properties.createdAt && post.properties.createdAt.date
        ? new Date(post.properties.createdAt.date.start).toISOString()
        : "Unknown Date";

    return {
      id: post.id,
      title: post.properties.title.title[0]?.plain_text || "Default Title",
      description: post.properties.description?.rich_text[0]?.plain_text || "",
      content: mdString,
      createdAt: createdAt,
      tags: post.properties.tags.multi_select.map((tag) => tag.name),
      image: post.properties.image?.rich_text[0]?.plain_text || "",
    };
  } catch (error) {
    console.error("Error fetching post details:", error);
    return { error: "Failed to fetch post details from Notion." };
  }
}

export const getPageContent = cache(async (pageId: string) => {
  const notion = await getNotionClient();
  return notion.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results);
});
