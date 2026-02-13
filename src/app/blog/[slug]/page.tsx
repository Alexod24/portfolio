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
    <main className="flex flex-col min-h-[100dvh] max-w-4xl mx-auto py-12 px-4 md:px-0 relative">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />

      <Link href="/blog">
        <InteractiveHoverButton className="ml-0 gap-2 mb-8 w-auto px-6 border bg-background hover:bg-accent text-foreground">
          <ArrowLeftIcon className="size-4" />
          Back to Blog
        </InteractiveHoverButton>
      </Link>

      <section id="blog" className="space-y-8">
        <div className="space-y-4">
          <BlurFade delay={0.04}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              {post.metadata.title}
            </h1>
          </BlurFade>
          <BlurFade delay={0.08}>
            <div className="flex justify-between items-center text-sm max-w-[650px]">
              <Suspense fallback={<p className="h-5" />}>
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.metadata.publishedAt)}
                </p>
              </Suspense>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.12}>
          <article
            className="prose dark:prose-invert max-w-none text-lg leading-relaxed text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.source }}
          ></article>
        </BlurFade>
      </section>
    </main>
  );
}
