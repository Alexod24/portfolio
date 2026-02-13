import { getBlogPosts } from "@/data/blog";
import BlogPageClient from "./page-client";

export const metadata = {
  title: "Blog",
  description: "Thoughts on technology, innovation, and personal growth.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return <BlogPageClient posts={posts} />;
}
