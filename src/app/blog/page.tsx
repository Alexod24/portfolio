import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { BlogCard } from "@/components/blog-card";

export const metadata = {
  title: "Blog",
  description: "Thoughts on technology, innovation, and personal growth.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="max-w-5xl mx-auto w-full px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Blog & Insights
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px]">
            Sharing my journey in software engineering, project leadership, and latest tech discoveries.
          </p>
        </BlurFade>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={post.slug}>
              <BlogCard post={post} />
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
