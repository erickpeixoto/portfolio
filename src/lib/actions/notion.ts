"server only";

import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { cache } from "react";
import { NotionDatabaseResponse } from "@/lib/types/notion";

export const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DATABASE_ID = process.env.NOTION_BLOG_DB_ID!;

export async function getPosts() {
  try {
    const response = await notion.databases.query({
      filter: {
        property: "status",
        status: {
          equals: "published",
        },
      },
      database_id: DATABASE_ID,
    });
    if (!response.results) {
      return [];
    }
    const typedResponse = response as unknown as NotionDatabaseResponse;

    return typedResponse.results.map((post) => {
      const title =
        post.properties.title && post.properties.title.title.length > 0
          ? post.properties.title.title[0].plain_text
          : "Default Title";

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
        title: title,
        slug: slug,
        tags: tags,
        createdAt: createdAt,
      };
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts from Notion.");
  }
}

export async function getPost(slug: string) {
  try {
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

export const getPageContent = cache((pageId: string) => {
  return notion.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results);
});
