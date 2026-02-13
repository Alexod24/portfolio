import { getBlogPosts, getPost } from "@/data/blog";
import { DATA_EN as DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ArrowLeftIcon } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { TableOfContents } from "@/components/toc";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-[100dvh] max-w-6xl mx-auto py-12 px-4 md:px-6 relative font-sans">
      <Link href="/blog">
        <InteractiveHoverButton className="ml-0 gap-2 mb-8 w-auto px-6 border bg-background hover:bg-accent text-foreground">
          <ArrowLeftIcon className="size-4" />
          Back to Blog
        </InteractiveHoverButton>
      </Link>

      <section className="flex flex-col items-start space-y-8 mb-8">
        <BlurFade delay={0.04}>
          <div className="flex flex-col space-y-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter max-w-4xl">
              {post.metadata.title}
            </h1>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Suspense fallback={<p className="h-5" />}>
                <time dateTime={post.metadata.publishedAt} className="text-lg">
                  {formatDate(post.metadata.publishedAt)}
                </time>
              </Suspense>
            </div>
          </div>
        </BlurFade>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
        <BlurFade delay={0.12} className="min-w-0">
          <article
            className="prose dark:prose-invert max-w-none text-lg leading-relaxed text-muted-foreground prose-headings:scroll-mt-20 prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:underline prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.source }}
          ></article>
        </BlurFade>

        <div className="hidden lg:block relative">
          <div className="sticky top-24">
            <BlurFade delay={0.16}>
              <TableOfContents />
            </BlurFade>
          </div>
        </div>
      </div>
    </main>
  );
}
