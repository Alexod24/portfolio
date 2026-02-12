import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
    post: BlogPost;
    className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className={`group flex flex-col h-full overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 ${className}`}
        >
            {/* Image Section */}
            <div className="relative w-full aspect-video overflow-hidden bg-muted">
                {post.metadata.image ? (
                    <Image
                        src={post.metadata.image}
                        alt={post.metadata.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-secondary">
                        <span className="text-4xl">📝</span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 p-6 space-y-4">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                            📅{" "}
                            {new Date(post.metadata.publishedAt).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {post.metadata.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-3 text-sm">
                        {post.metadata.summary}
                    </p>
                </div>

                <div className="mt-auto pt-4 flex items-center text-primary text-sm font-medium">
                    Read more <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
            </div>
        </Link>
    );
}
