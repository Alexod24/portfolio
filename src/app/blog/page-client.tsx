"use client";

import { useResume } from "@/components/language-provider";
import BlurFade from "@/components/magicui/blur-fade";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/utils";
import { BlogCard } from "@/components/blog-card";

const BLUR_FADE_DELAY = 0.04;

interface BlogPageClientProps {
  posts: BlogPost[];
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {
  const { data } = useResume();

  // Sort posts by date
  const sortedPosts = posts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-12 max-w-4xl mx-auto py-12 px-4 md:px-0 relative font-sans">
      <Link href="/">
        <InteractiveHoverButton className="ml-0 gap-2 mb-8 w-auto px-6 border bg-background hover:bg-accent text-foreground">
          <ArrowLeftIcon className="size-4" />
          Back to Home
        </InteractiveHoverButton>
      </Link>

      <section className="flex flex-col items-start space-y-4 mb-8">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-2">
            Blog
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-muted-foreground text-xl">
            Thoughts on software development, design, and building products.
          </p>
        </BlurFade>
      </section>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[800px] mx-auto w-full">
        {sortedPosts.map((post, idx) => (
          <BlurFade key={post.slug} delay={BLUR_FADE_DELAY * 3 + idx * 0.05}>
            <BlogCard post={post} />
          </BlurFade>
        ))}
      </div>
    </main>
  );
}
