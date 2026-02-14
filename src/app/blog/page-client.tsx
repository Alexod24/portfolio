"use client";

import { useResume } from "@/components/language-provider";
import { BlogPost } from "@/types/blog";
import { BlogHeaderFeaturedPost01 } from "@/components/marketing/blog/BlogHeaderFeaturedPost01";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

interface BlogPageClientProps {
  posts: BlogPost[];
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {
  // Sort posts by date
  const sortedPosts = posts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <div className="min-h-[100dvh] bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <Link href="/">
          <InteractiveHoverButton className="ml-0 gap-2 w-auto px-6 border bg-background hover:bg-accent text-foreground">
            <ArrowLeftIcon className="size-4" />
            Back to Home
          </InteractiveHoverButton>
        </Link>
      </div>
      <BlogHeaderFeaturedPost01 posts={sortedPosts} />
    </div>
  );
}
