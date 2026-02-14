"use client";

import { useState, useMemo } from "react";
import { PaginationPageDefault } from "@/components/application/pagination/pagination";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Select } from "@/components/base/select/select";
import {
  type Article,
  Simple01Vertical,
} from "@/components/marketing/blog/base-components/blog-cards";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cn, formatDate } from "@/lib/utils";
import { BlogPost } from "@/types/blog";
import { useResume } from "@/components/language-provider";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

const sortByOptions = [
  { id: "most-recent", label: "Most recent" },
  { id: "oldest", label: "Oldest" },
];

interface BlogHeaderFeaturedPost01Props {
  posts: BlogPost[];
}

export const BlogHeaderFeaturedPost01 = ({
  posts: blogPosts,
}: BlogHeaderFeaturedPost01Props) => {
  // Breakpoint hook might return undefined on initial render or SSR, handled by optional chaining or default if needed
  // Assuming useBreakpoint('lg') returns true if width >= 1024px
  const isDesktop = useBreakpoint("lg");
  const [sortBy, setSortBy] = useState(sortByOptions[0].id);
  const [selectedCategory, setSelectedCategory] = useState("View all");
  const { data } = useResume();

  // Map BlogPost to Article
  const allArticles: Article[] = blogPosts.map((post) => ({
    id: post.slug,
    title: post.metadata.title,
    summary: post.metadata.summary,
    href: `/blog/${post.slug}`,
    thumbnailUrl: post.metadata.image || "/placeholder.jpg",
    author: {
      name: data.name || "Alex",
      avatarUrl: data.avatarUrl || "https://github.com/shadcn.png",
    },
    publishedAt: formatDate(post.metadata.publishedAt),
    tags: post.metadata.tags?.map((tag) => ({ name: tag })) || [],
  }));

  // Extract unique categories from tags
  const categories = useMemo(() => {
    const uniqueTags = new Set<string>();
    allArticles.forEach((article) => {
      article.tags.forEach((tag) => uniqueTags.add(tag.name));
    });
    const sortedTags = Array.from(uniqueTags).sort();
    return [
      { id: "View all", label: "View all" },
      ...sortedTags.map((tag) => ({ id: tag, label: tag })),
    ];
  }, [allArticles]);

  // Filter and sort articles
  const filteredArticles = useMemo(() => {
    let filtered = allArticles;

    if (selectedCategory !== "View all") {
      filtered = filtered.filter((article) =>
        article.tags.some((tag) => tag.name === selectedCategory),
      );
    }

    return filtered.sort((a, b) => {
      if (sortBy === "oldest") {
        return -1;
      }
      return 1;
    });
  }, [allArticles, selectedCategory, sortBy]);

  const finalArticles =
    sortBy === "oldest" ? [...filteredArticles].reverse() : filteredArticles;

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex w-full max-w-3xl flex-col">
              <span className="text-sm font-semibold text-primary md:text-base">
                Our blog
              </span>
              <h2 className="mt-3 text-4xl font-semibold text-foreground md:text-5xl">
                Resources and insights
              </h2>
              <p className="mt-4 text-lg text-muted-foreground md:mt-6 md:text-xl">
                The latest industry news, interviews, technologies, and
                resources.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pb-16 md:gap-16 md:px-8 md:pb-24">
        {/* Banner Section */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="w-full flex flex-col gap-6">
            <div className="relative w-full overflow-hidden rounded-2xl">
              <img
                src="/banners/banner-blog.png"
                alt="Blog Banner"
                className="w-full h-auto object-cover max-h-[400px] md:max-h-[500px]"
              />
            </div>
            <div className="flex flex-col gap-4 text-center md:text-left">
              <p className="text-xl md:text-2xl font-medium text-foreground">
                Bienvenido a mis blogs o articulos, pasala bien leyendo y
                divirtiendote de mis ideas locas
              </p>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="flex flex-col items-end gap-8 md:flex-row mt-8">
            <Tabs className="w-full">
              <TabList
                type="underline"
                size="md"
                items={categories}
                selectedKey={selectedCategory}
                onSelectionChange={setSelectedCategory}
                className="overflow-auto scrollbar-hide"
              />
            </Tabs>

            <div className="relative w-full md:max-w-44">
              <Select
                aria-label="Sort by"
                size="md"
                selectedKey={sortBy}
                onSelectionChange={(value) => setSortBy(value as string)}
                items={sortByOptions}
              >
                {(item: any) => (
                  <Select.Item id={item.id}>{item.label}</Select.Item>
                )}
              </Select>
            </div>
          </div>
        </BlurFade>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
          {finalArticles.map((article, index) => (
            <BlurFade
              key={article.title}
              delay={BLUR_FADE_DELAY * 4 + index * 0.05}
            >
              <li className={cn(!isDesktop && "nth-[n+7]:hidden")}>
                <Simple01Vertical article={article} />
              </li>
            </BlurFade>
          ))}
          {finalArticles.length === 0 && (
            <div className="col-span-full py-10 text-center text-muted-foreground">
              No posts found for this category.
            </div>
          )}
        </ul>

        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <PaginationPageDefault rounded />
        </BlurFade>
      </main>
    </div>
  );
};
