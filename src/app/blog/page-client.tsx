"use client";

import { useResume } from "@/components/language-provider";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"; // Keep if needed, though InteractiveHoverButton is preferred
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ArrowLeftIcon, CalendarIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/utils";

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
    <main className="flex flex-col min-h-[100dvh] space-y-12 max-w-4xl mx-auto py-12 px-4 md:px-0 relative">
      <Link href="/">
        <InteractiveHoverButton className="ml-0 gap-2 mb-8 w-auto px-6 border bg-background hover:bg-accent text-foreground">
          <ArrowLeftIcon className="size-4" />
          Back to Home
        </InteractiveHoverButton>
      </Link>

      {/* Hero Section - "About Me" Style */}
      <section
        id="hero"
        className="flex flex-col items-center text-center space-y-6 mb-12"
      >
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Avatar className="size-24 md:size-32 border-4 border-muted shadow-xl">
            <AvatarImage
              src={data.avatarUrl}
              alt={data.name}
              className="object-cover"
            />
            <AvatarFallback>{data.initials}</AvatarFallback>
          </Avatar>
        </BlurFade>

        <div className="space-y-2">
          <BlurFadeText
            delay={BLUR_FADE_DELAY * 2}
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
            text="Blog & Insights"
          />
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Thinking out loud about software, design, and continuous learning.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* "The Writer" Section - Infused from "About Me" */}
      <section className="space-y-6 mb-16">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <h3 className="text-2xl font-bold border-b pb-2 mb-4">The Writer</h3>
          <div className="prose dark:prose-invert text-muted-foreground leading-relaxed text-lg text-justify">
            <p>
              Welcome to my digital garden. Here I share my thoughts on software
              engineering, the challenges of leadership, and the continuous
              journey of learning new technologies. I believe that writing is
              the best way to clarify thinking, and I hope these posts spark
              some ideas for you as well.
            </p>
          </div>
        </BlurFade>
      </section>

      {/* Post List - "Projects" Style (Detailed Vertical List) */}
      <div className="space-y-16">
        {sortedPosts.map((post, idx) => (
          <BlurFade key={post.slug} delay={BLUR_FADE_DELAY * 5 + idx * 0.05}>
            <article className="flex flex-col md:flex-row gap-8 items-start group">
              {/* Image Section (Left on Desktop) */}
              <Link
                href={`/blog/${post.slug}`}
                className="w-full md:w-1/3 aspect-video md:aspect-square relative rounded-xl overflow-hidden border bg-muted shadow-sm transition-all hover:shadow-md hover:scale-[1.02]"
              >
                {post.metadata.image ? (
                  <Image
                    src={post.metadata.image}
                    alt={post.metadata.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-secondary text-4xl">
                    📝
                  </div>
                )}
              </Link>

              {/* Content Section (Right on Desktop) */}
              <div className="flex flex-col flex-1 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="size-3" />
                    {formatDate(post.metadata.publishedAt)}
                  </div>

                  <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tighter group-hover:text-primary transition-colors">
                      {post.metadata.title}
                    </h2>
                  </Link>

                  <p className="text-muted-foreground text-lg leading-relaxed line-clamp-3">
                    {post.metadata.summary}
                  </p>
                </div>

                <div className="pt-2">
                  <Link href={`/blog/${post.slug}`}>
                    <InteractiveHoverButton className="gap-2 w-auto">
                      Read Article
                      <ChevronRightIcon className="size-4" />
                    </InteractiveHoverButton>
                  </Link>
                </div>
              </div>
            </article>
            {/* Divider */}
            {idx < sortedPosts.length - 1 && (
              <div className="h-px w-full bg-border mt-16" />
            )}
          </BlurFade>
        ))}
      </div>
    </main>
  );
}
