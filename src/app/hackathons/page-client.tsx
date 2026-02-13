"use client";

import { useResume } from "@/components/language-provider";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

export default function HackathonsPageClient() {
  const { data } = useResume();

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-12 max-w-3xl mx-auto py-12 px-4 md:px-0 relative">
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
            text={data.sectionHeaders.hackathons?.title || "Hackathons"}
          />
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              {data.sectionHeaders.hackathons?.description}
            </p>
          </BlurFade>
        </div>
      </section>

      <div className="space-y-16">
        {data.hackathons.map((hackathon, index) => (
          <section key={hackathon.title} className="space-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * (4 + index)}>
              <div className="flex flex-col space-y-4">
                <div className="relative w-full overflow-hidden rounded-xl border bg-muted shadow-sm hover:shadow-lg transition-all">
                  {/* Display the image clearly, serving as certificate/proof */}
                  <Image
                    src={hackathon.image || ""}
                    alt={hackathon.title}
                    width={1200}
                    height={630}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{hackathon.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {hackathon.dates}
                    </span>
                  </div>

                  <span className="text-sm text-muted-foreground block">
                    {hackathon.location}
                  </span>

                  <div className="prose dark:prose-invert text-muted-foreground leading-relaxed text-justify">
                    <Markdown>{hackathon.description}</Markdown>
                  </div>
                </div>
              </div>
            </BlurFade>
          </section>
        ))}
      </div>
    </main>
  );
}
