import Link from "next/link";
import { BlogPost } from "@/types/blog";
import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

interface LatestPostsProps {
    posts: BlogPost[];
    title?: string;
    limit?: number;
    className?: string;
}

const BLUR_FADE_DELAY = 0.04;

export function LatestPosts({
    posts,
    title = "Últimos Artículos",
    limit = 4,
    className,
}: LatestPostsProps) {
    const displayPosts = posts.slice(0, limit);

    return (
        <section className={`w-full py-12 ${className}`}>
            <div className="flex min-h-0 flex-col gap-y-3 mb-8">
                <BlurFade delay={BLUR_FADE_DELAY} inView>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h2>
                        <Link href="/blog">
                            <Button variant="ghost" className="text-xs group">
                                Ver todos
                                <ChevronRight className="ml-1 size-3 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </BlurFade>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayPosts.map((post, id) => (
                    <BlurFade
                        key={post.slug}
                        delay={BLUR_FADE_DELAY * 2 + id * 0.05}
                        inView
                    >
                        <BlogCard post={post} />
                    </BlurFade>
                ))}
            </div>
        </section>
    );
}
