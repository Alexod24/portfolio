"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { useResume } from "@/components/language-provider";
import BlurFade from "@/components/magicui/blur-fade";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export const AboutSection = () => {
    const { data } = useResume();

    return (
        <section id="about" className="py-12 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Column: Text */}
                <div className="space-y-6">
                    <BlurFade delay={BLUR_FADE_DELAY} inView>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
                            {data.about.split('\n')[0]}
                        </h2>
                    </BlurFade>

                    <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
                        <div className="prose dark:prose-invert text-muted-foreground text-lg leading-relaxed">
                            <Markdown>
                                {data.summary}
                            </Markdown>
                        </div>
                    </BlurFade>

                    <BlurFade delay={BLUR_FADE_DELAY * 2.5} inView>
                        <div className="pt-2">
                            <Link href="/about-me">
                                <Button className="rounded-full px-8 py-6 text-base font-medium transition-all hover:scale-105">
                                    Ver más sobre mí
                                </Button>
                            </Link>
                        </div>
                    </BlurFade>
                </div>

                {/* Right Column: Image & Links */}
                <div className="flex flex-col items-center justify-center space-y-8">
                    <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
                        <div className="relative rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out">
                            <Avatar className="size-64 md:size-80 rounded-2xl border-4 border-muted shadow-2xl">
                                <AvatarImage src={data.avatarUrl} alt={data.name} className="object-cover" />
                                <AvatarFallback>{data.initials}</AvatarFallback>
                            </Avatar>
                        </div>
                    </BlurFade>


                </div>
            </div>
        </section>
    );
};
