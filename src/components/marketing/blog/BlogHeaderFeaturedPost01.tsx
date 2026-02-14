"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PaginationPageDefault } from "@/components/application/pagination/pagination";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Select } from "@/components/base/select/select";
import {
  type Article,
  Simple01Vertical,
} from "@/components/marketing/blog/base-components/blog-cards";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cn } from "@/lib/utils";

// Mock Data
const articles: Article[] = [
  {
    id: "1",
    title: "UX review presentations",
    summary:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    href: "#",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    author: {
      name: "Olivia Rhye",
      avatarUrl: "https://i.pravatar.cc/150?u=olivia",
    },
    publishedAt: "20 Jan 2024",
    tags: [{ name: "Design" }],
  },
  {
    id: "2",
    title: "Migrating to Linear 101",
    summary:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    href: "#",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    author: {
      name: "Phoenix Baker",
      avatarUrl: "https://i.pravatar.cc/150?u=phoenix",
    },
    publishedAt: "19 Jan 2024",
    tags: [{ name: "Product" }],
  },
  {
    id: "3",
    title: "Building your API stack",
    summary:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    href: "#",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    author: {
      name: "Lana Steiner",
      avatarUrl: "https://i.pravatar.cc/150?u=lana",
    },
    publishedAt: "18 Jan 2024",
    tags: [{ name: "Software Engineering" }],
  },
  {
    id: "4",
    title: "Bill Walsh leadership lessons",
    summary:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    href: "#",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    author: {
      name: "Alec Whitten",
      avatarUrl: "https://i.pravatar.cc/150?u=alec",
    },
    publishedAt: "17 Jan 2024",
    tags: [{ name: "Leadership" }],
  },
  {
    id: "5",
    title: "PM mental models",
    summary:
      "Mental models are simple expressions of complex processes or relationships.",
    href: "#",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    author: {
      name: "Demi Wilkinson",
      avatarUrl: "https://i.pravatar.cc/150?u=demi",
    },
    publishedAt: "16 Jan 2024",
    tags: [{ name: "Management" }],
  },
  {
    id: "6",
    title: "What is wireframing?",
    summary:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    href: "#",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    author: {
      name: "Candice Wu",
      avatarUrl: "https://i.pravatar.cc/150?u=candice",
    },
    publishedAt: "15 Jan 2024",
    tags: [{ name: "Design" }],
  },
];

const tabs = [
  { id: "view-all", label: "View all" },
  { id: "design", label: "Design" },
  { id: "product", label: "Product" },
  { id: "software-engineering", label: "Software Engineering" },
  { id: "customer-success", label: "Customer Success" },
];

const sortByOptions = [
  { id: "most-recent", label: "Most recent" },
  { id: "oldest", label: "Oldest" },
];

const featuredArticle: Article = {
  id: "featured",
  title: 'Improve your design skills: Develop an "eye" for design',
  summary:
    'Tools and trends change, but good design is timeless. Learn how to quickly develop an "eye" for design.',
  href: "#",
  thumbnailUrl:
    "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  author: {
    name: "Amélie Laurent",
    avatarUrl: "https://i.pravatar.cc/150?u=amelie",
  },
  publishedAt: "12 April 2024",
  tags: [{ name: "Design" }, { name: "Research" }, { name: "Presentation" }],
};

export const BlogHeaderFeaturedPost01 = () => {
  // Breakpoint hook might return undefined on initial render or SSR, handled by optional chaining or default if needed
  // Assuming useBreakpoint('lg') returns true if width >= 1024px
  const isDesktop = useBreakpoint("lg");
  const [sortBy, setSortBy] = useState(sortByOptions[0].id);

  return (
    <div className="bg-background">
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex w-full max-w-3xl flex-col">
            <span className="text-sm font-semibold text-primary md:text-base">
              Our blog
            </span>
            <h2 className="mt-3 text-4xl font-semibold text-foreground md:text-5xl">
              Resources and insights
            </h2>
            <p className="mt-4 text-lg text-muted-foreground md:mt-6 md:text-xl">
              The latest industry news, interviews, technologies, and resources.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pb-16 md:gap-16 md:px-8 md:pb-24">
        <a
          href={featuredArticle.href}
          className="relative hidden w-full overflow-hidden rounded-2xl outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-primary md:block md:h-[36rem] lg:h-[45rem]"
        >
          <img
            src={featuredArticle.thumbnailUrl}
            alt={featuredArticle.title}
            className="absolute inset-0 size-full object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent pt-24">
            <div className="flex w-full flex-col gap-6 p-8">
              <div className="flex flex-col gap-2">
                <div className="flex gap-4">
                  <p className="flex-1 text-2xl font-semibold text-white">
                    {featuredArticle.title}
                  </p>
                  <ArrowUpRight className="size-6 shrink-0 text-white" />
                </div>
                <p className="line-clamp-2 text-base text-white/90">
                  {featuredArticle.summary}
                </p>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-1 gap-8">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold text-white">
                      Written by
                    </p>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={featuredArticle.author.avatarUrl}
                          alt={featuredArticle.author.name}
                        />
                        <AvatarFallback className="text-black">
                          {featuredArticle.author.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <p className="text-sm font-semibold text-white">
                        {featuredArticle.author.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold text-white">
                      Published on
                    </p>
                    <div className="flex h-10 items-center">
                      <p className="text-base font-semibold text-white">
                        {featuredArticle.publishedAt}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold text-white">File under</p>
                  <ul className="flex h-10 items-center gap-2">
                    {featuredArticle.tags.map((tag) => (
                      <li
                        key={tag.name}
                        className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-medium text-white ring-1 ring-white/50 backdrop-blur-md"
                      >
                        {tag.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </a>

        <div className="md:hidden">
          <Simple01Vertical article={featuredArticle} />
        </div>

        <div className="flex flex-col items-end gap-8 md:flex-row">
          <Tabs className="w-full">
            <TabList
              type="underline"
              size="md"
              items={tabs}
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

        <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
          {articles.map((article, index) => (
            <li key={index} className={cn(!isDesktop && "nth-[n+7]:hidden")}>
              <Simple01Vertical article={article} />
            </li>
          ))}
        </ul>

        <PaginationPageDefault rounded />
      </main>
    </div>
  );
};
