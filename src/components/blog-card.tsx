import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex flex-col h-full overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg hover:-translate-y-1",
        className,
      )}
    >
      <div className="relative w-full aspect-video overflow-hidden bg-muted">
        {post.metadata.image ? (
          <Image
            src={post.metadata.image}
            alt={post.metadata.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-secondary/50 text-muted-foreground">
            <span className="text-4xl font-bold opacity-20">Blog</span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            {formatDate(post.metadata.publishedAt)}
          </div>
          <h2 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
            {post.metadata.title}
          </h2>
          <p className="font-sans text-sm text-muted-foreground line-clamp-3">
            {post.metadata.summary}
          </p>
        </div>
      </div>
    </Link>
  );
}
