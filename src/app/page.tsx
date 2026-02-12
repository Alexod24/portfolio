import { getBlogPosts } from "@/data/blog";
import PageClient from "./page-client";

export default async function Page() {
  const posts = await getBlogPosts();

  const sortedPosts = posts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return <PageClient posts={sortedPosts} />;
}
