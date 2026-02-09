"use client";

import { useResume } from "@/components/language-provider";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function AboutMePage() {
    const { data } = useResume();

    return (
        <main className="flex flex-col min-h-[100dvh] space-y-12 max-w-3xl mx-auto py-12 px-4 md:px-0 relative">
            <Link href="/">
                <Button variant="ghost" className="-ml-4 gap-2 mb-8">
                    <ArrowLeftIcon className="size-4" />
                    Back to Home
                </Button>
            </Link>

            <section id="hero" className="flex flex-col items-center text-center space-y-6">
                <BlurFade delay={BLUR_FADE_DELAY}>
                    <Avatar className="size-32 md:size-48 border-4 border-muted shadow-xl">
                        <AvatarImage src={data.avatarUrl} alt={data.name} className="object-cover" />
                        <AvatarFallback>{data.initials}</AvatarFallback>
                    </Avatar>
                </BlurFade>

                <div className="space-y-2">
                    <BlurFadeText
                        delay={BLUR_FADE_DELAY * 2}
                        className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
                        text={data.sectionHeaders.about?.title || "About Me"}
                    />
                    <BlurFade delay={BLUR_FADE_DELAY * 3}>
                        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                            {data.description}
                        </p>
                    </BlurFade>
                </div>
            </section>

            <div className="space-y-16">
                {/* Core Description Split */}
                <section className="space-y-6">
                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                        <h3 className="text-2xl font-bold border-b pb-2 mb-4">The Developer</h3>
                        <div className="prose dark:prose-invert text-muted-foreground leading-relaxed text-lg text-justify">
                            <Markdown>{data.about.split('\n\n')[0]}</Markdown>
                            <div className="mt-4">
                                <Markdown>{data.about.split('\n\n')[1]}</Markdown>
                            </div>
                        </div>
                    </BlurFade>
                </section>

                {/* Philosophy Section */}
                <section className="space-y-6">
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <h3 className="text-2xl font-bold border-b pb-2 mb-4">Philosophy & Mindset</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="prose dark:prose-invert text-muted-foreground leading-relaxed">
                                <Markdown>{data.about.split('\n\n')[2]}</Markdown>
                            </div>
                            <div className="bg-muted/30 p-6 rounded-xl border flex items-center justify-center italic text-center text-muted-foreground">
                                "Professional growth begins with inner growth."
                            </div>
                        </div>
                    </BlurFade>
                </section>

                {/* Experience Context */}
                <section className="space-y-6">
                    <BlurFade delay={BLUR_FADE_DELAY * 6}>
                        <h3 className="text-2xl font-bold border-b pb-2 mb-4">Experience Context</h3>
                        <div className="prose dark:prose-invert text-muted-foreground leading-relaxed text-justify">
                            <Markdown>{data.about.split('\n\n')[3]}</Markdown>
                        </div>
                    </BlurFade>
                </section>

                {/* Skills Quick View */}
                <section className="space-y-6">
                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                        <h3 className="text-2xl font-bold border-b pb-2 mb-4">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {data.skills.map((skill: string) => (
                                <Badge key={skill} variant="secondary" className="text-base px-3 py-1">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </BlurFade>
                </section>
            </div>

        </main>
    );
}
