import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog",
  description:
    "Pensamientos sobre tecnología, innovación y crecimiento personal.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="max-w-3xl mx-auto w-full px-4 py-12">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-bold text-3xl mb-4 tracking-tighter">
          Pensamientos sobre tecnología, innovación y crecimiento personal.
        </h1>
        <p className="text-muted-foreground mb-12 text-lg">
          Aquí comparto mis experiencias creando software, liderando proyectos,
          y explorando temas como IA, productividad y desarrollo personal. Todos
          los artículos están organizados en orden cronológico.
        </p>
      </BlurFade>
      <div className="flex flex-col space-y-8">
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
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col gap-4 md:flex-row hover:bg-muted/50 p-4 rounded-xl transition-colors"
              >
                {/* Left Side: Date */}
                <div className="md:w-32 flex-shrink-0">
                  <p className="text-sm text-muted-foreground tabular-nums whitespace-nowrap">
                    {new Date(post.metadata.publishedAt).toLocaleDateString(
                      "es-ES",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      },
                    )}
                  </p>
                </div>

                {/* Right Side: Content */}
                <div className="flex-1 space-y-2">
                  <h2 className="text-xl font-semibold tracking-tight">
                    {post.metadata.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {post.metadata.summary}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary pt-2">
                    Leer artículo <span className="text-xs">›</span>
                  </div>
                </div>

                {/* Image (Optional) */}
                {post.metadata.image && (
                  <div className="hidden md:block w-32 md:w-40 flex-shrink-0">
                    <div className="relative aspect-video rounded-md overflow-hidden bg-muted">
                      <Image
                        src={post.metadata.image}
                        alt={post.metadata.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
