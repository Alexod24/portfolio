"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocProps {
  className?: string;
}

export function TableOfContents({ className }: TocProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3"))
      .map((element) => ({
        id: element.id,
        text: element.textContent || "",
        level: Number(element.tagName.substring(1)),
      }))
      .filter((element) => element.id); // Only include headings with IDs
    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" },
    );

    elements.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className={cn("space-y-2", className)}>
      <p className="font-medium text-sm text-foreground/80 mb-4">
        On this page
      </p>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: (heading.level - 2) * 16 }}
          >
            <a
              href={`#${heading.id}`}
              className={cn(
                "block transition-colors hover:text-foreground/80 no-underline",
                activeId === heading.id
                  ? "text-foreground font-medium"
                  : "text-muted-foreground",
              )}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${heading.id}`)?.scrollIntoView({
                  behavior: "smooth",
                });
                setActiveId(heading.id);
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
