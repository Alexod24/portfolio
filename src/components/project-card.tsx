import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <Card
      className={
        "group flex flex-col overflow-hidden border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full"
      }
    >
      <Link
        href={destination}
        className={cn("block cursor-pointer", className)}
        target={target}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
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
      <CardHeader className="px-5 py-4">
        <div className="space-y-2">
          <time className="font-sans text-xs text-muted-foreground">{dates}</time>
          <CardTitle className="mt-1 text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
            <Link href={destination} target={target} className="block">
              {title}
            </Link>
          </CardTitle>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert line-clamp-3">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-5 pb-4">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
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
      </CardContent>
      <CardFooter className="px-5 pb-5 pt-0">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-2">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-3 py-1 text-[10px] hover:bg-primary hover:text-primary-foreground transition-colors">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
