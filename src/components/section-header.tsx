import React from "react";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/magicui/blur-fade";

interface SectionHeaderProps {
  title: string;
  description?: string;
  tag?: string;
  action?: React.ReactNode;
  className?: string;
  delay?: number;
}

export function SectionHeader({
  title,
  description,
  tag,
  action,
  className,
  delay = 0,
}: SectionHeaderProps) {
  return (
    <BlurFade delay={delay} inView>
      <div
        className={cn(
          "flex flex-col gap-y-2 md:flex-row md:items-end md:justify-between mb-6",
          className,
        )}
      >
        <div className="flex flex-col space-y-2">
          {tag && (
            <div className="inline-block self-start rounded-lg bg-foreground text-background px-3 py-1 text-sm font-medium">
              {tag}
            </div>
          )}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px]">
              {description}
            </p>
          )}
        </div>
        {action && <div className="mt-4 md:mt-0">{action}</div>}
      </div>
    </BlurFade>
  );
}
