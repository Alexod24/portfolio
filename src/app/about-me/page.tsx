import { getBlogPosts } from "@/data/blog";
import AboutMePageClient from "./page-client";

export default async function AboutMePage() {
    const posts = await getBlogPosts();

    const sortedPosts = posts.sort((a, b) => {
        if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
        }
        return 1;
    });

    return <AboutMePageClient posts={sortedPosts} />;
}
