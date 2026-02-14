import { ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface Article {
  id: string;
  title: string;
  summary: string;
  href: string;
  thumbnailUrl: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  publishedAt: string;
  tags: { name: string }[];
}

interface Simple01VerticalProps {
  article: Article;
  className?: string;
}

export function Simple01Vertical({
  article,
  className,
}: Simple01VerticalProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <Link
        href={article.href}
        className="group relative block overflow-hidden rounded-2xl"
      >
        <img
          src={article.thumbnailUrl}
          alt={article.title}
          className="aspect-[16/9] w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-primary">
              {article.tags[0]?.name}
            </span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">
              {article.publishedAt}
            </span>
          </div>
          <div className="flex justify-between items-start gap-4">
            <Link href={article.href} className="block">
              <h3 className="text-xl font-semibold text-foreground transition hover:text-primary">
                {article.title}
              </h3>
            </Link>
            <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
          </div>
          <p className="line-clamp-2 text-base text-muted-foreground">
            {article.summary}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={article.author.avatarUrl}
              alt={article.author.name}
            />
            <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-foreground">
            {article.author.name}
          </span>
        </div>
      </div>
    </div>
  );
}
