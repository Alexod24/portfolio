"use client";

import { useResume } from "@/components/language-provider";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Carousel } from "@/components/ui/carousel";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function EducationPageClient() {
  const { data } = useResume();

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-12 max-w-4xl mx-auto py-12 px-4 md:px-0 relative">
      <Link href="/">
        <InteractiveHoverButton className="ml-0 gap-2 mb-8 w-auto px-6 border bg-background hover:bg-accent text-foreground">
          <ArrowLeftIcon className="size-4" />
          Back to Home
        </InteractiveHoverButton>
      </Link>

      <section
        id="hero"
        className="flex flex-col items-center text-center space-y-6"
      >
        <div className="space-y-2">
          <BlurFadeText
            delay={BLUR_FADE_DELAY * 2}
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
            text={data.sectionHeaders.education || "Education"}
          />
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              {data.sectionHeaders.about?.description ||
                "My academic journey and certifications that shape my professional career."}
            </p>
          </BlurFade>
        </div>
      </section>

      <div className="space-y-16">
        {data.education.map((edu, index) => {
          // Collect all images from courses for the carousel
          const bannerImage = edu.banner ? [edu.banner] : [];
          const courseImages = edu.courses
            ? edu.courses.map((c) => c.image).filter((img) => img && img !== "")
            : [];
          // Combine, putting banner first if exists
          const galleryImages = [...bannerImage, ...courseImages];
          // Deduplicate just in case
          const uniqueImages = Array.from(new Set(galleryImages));

          // Create tags from course titles
          const tags = edu.courses ? edu.courses.map((c) => c.title) : [];

          return (
            <BlurFade key={edu.school} delay={BLUR_FADE_DELAY * (4 + index)}>
              <section className="flex flex-col gap-8 border-b pb-12 last:border-b-0">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="size-16 md:size-20 border bg-muted-background dark:bg-foreground">
                      <AvatarImage
                        src={edu.logoUrl}
                        alt={edu.school}
                        className="object-contain p-1"
                      />
                      <AvatarFallback>{edu.school[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                        {edu.school}
                      </h2>
                      <span className="text-xl text-muted-foreground">
                        {edu.degree}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {edu.start} - {edu.end}
                      </span>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>

                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Media / Gallery Carousel */}
                {uniqueImages.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Certificates & Media</h3>
                    <div className="w-full rounded-xl overflow-hidden border bg-muted shadow-lg">
                      <Carousel
                        images={uniqueImages}
                        className="w-full aspect-video object-cover"
                      />
                    </div>
                  </div>
                )}
              </section>
            </BlurFade>
          );
        })}
      </div>
    </main>
  );
}
