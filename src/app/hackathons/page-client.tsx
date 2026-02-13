"use client";

import { useResume } from "@/components/language-provider";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card"; // Reuse ProjectCard
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function HackathonsPageClient() {
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
        className="flex flex-col items-center text-center space-y-6 mb-12"
      >
        <div className="space-y-2">
          <BlurFadeText
            delay={BLUR_FADE_DELAY * 2}
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
            text={data.sectionHeaders.hackathons?.title || "Hackathons"}
          />
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              {data.sectionHeaders.hackathons?.description}
            </p>
          </BlurFade>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {data.hackathons.map((hackathon, id) => (
          <BlurFade
            key={hackathon.title}
            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
          >
            <ProjectCard
              href={(hackathon.links as any)?.[0]?.href || "#"}
              key={hackathon.title}
              title={hackathon.title}
              description={hackathon.description}
              dates={hackathon.dates}
              tags={[hackathon.location]} // Using location as a tag
              image={hackathon.image}
              links={hackathon.links}
            />
          </BlurFade>
        ))}
      </div>
    </main>
  );
}
