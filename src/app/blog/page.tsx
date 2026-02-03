import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Pensamientos sobre tecnología, innovación y crecimiento personal.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-bold text-3xl mb-4 tracking-tighter">
          Pensamientos sobre tecnología, innovación y crecimiento personal.
        </h1>
        <p className="text-muted-foreground mb-12 text-lg">
          Aquí comparto mis experiencias creando software, liderando proyectos, y
          explorando temas como IA, productividad y desarrollo personal. Todos los
          artículos están organizados en orden cronológico.
        </p>
      </BlurFade>
      <div className="flex flex-col gap-12">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 group">
                {/* Date Column */}
                <div className="md:col-span-1">
                  <p className="text-sm text-muted-foreground pt-1">
                    {new Date(post.metadata.publishedAt).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}
                  </p>
                </div>

                {/* Content Column */}
                <div className="md:col-span-3 flex flex-col space-y-3">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="text-xl font-bold tracking-tight mb-2 group-hover:underline">
                      {post.metadata.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {post.metadata.summary}
                    </p>
                    <span className="text-sm font-medium text-primary hover:underline inline-flex items-center">
                      Leer artículo &gt;
                    </span>
                  </Link>
                </div>
              </div>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
