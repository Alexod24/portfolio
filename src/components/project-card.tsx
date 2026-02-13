import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  slug?: string;
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  slug,
  className,
}: Props) {
  const isExternal = !slug;
  const target = isExternal ? "_blank" : undefined;
  const destination = slug ? `/projects/${slug}` : href || "#";

  return (
    <div
      className={cn(
        "group flex flex-col h-full overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg hover:-translate-y-1",
        className,
      )}
    >
      <Link href={destination} className="block cursor-pointer" target={target}>
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto aspect-video w-full object-cover object-top"
          />
        )}
        {image && (
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
      </Link>
      <div className="flex flex-col flex-1 p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            {dates}
          </div>
          <h2 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
            <Link href={destination} target={target} className="block">
              {title}
            </Link>
          </h2>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert line-clamp-3">
            {description}
          </Markdown>
        </div>
        <div className="mt-auto flex flex-col gap-4">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <Badge
                  className="px-2 py-0.5 text-[10px] font-medium"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-2">
              {links?.map((link, idx) => (
                <Link href={link?.href} key={idx} target="_blank">
                  <Badge
                    key={idx}
                    className="flex gap-2 px-3 py-1 text-[10px] hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
