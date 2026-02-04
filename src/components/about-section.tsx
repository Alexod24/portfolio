"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { DATA_ES } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export const AboutSection = () => {
    return (
        <section id="about" className="py-12 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Column: Text */}
                <div className="space-y-6">
                    <BlurFade delay={BLUR_FADE_DELAY} inView>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
                            {DATA_ES.about.split('\n')[0]}
                        </h2>
                    </BlurFade>

                    <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
                        <div className="prose dark:prose-invert text-muted-foreground text-lg leading-relaxed">
                            <Markdown>
                                {DATA_ES.about.split('\n').slice(1).join('\n')}
                            </Markdown>
                        </div>
                    </BlurFade>
                </div>

                {/* Right Column: Image & Links */}
                <div className="flex flex-col items-center justify-center space-y-8">
                    <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
                        <div className="relative rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out">
                            <Avatar className="size-64 md:size-80 rounded-2xl border-4 border-muted shadow-2xl">
                                <AvatarImage src={DATA_ES.avatarUrl} alt={DATA_ES.name} className="object-cover" />
                                <AvatarFallback>{DATA_ES.initials}</AvatarFallback>
                            </Avatar>
                        </div>
                    </BlurFade>

                    <BlurFade delay={BLUR_FADE_DELAY * 4} inView>
                        <div className="flex flex-col gap-4 w-full max-w-xs">
                            {Object.entries(DATA_ES.contact.social).map(([name, social]) => (
                                <Link
                                    key={name}
                                    href={social.url}
                                    target="_blank"
                                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                                >
                                    <social.icon className="size-5 group-hover:scale-110 transition-transform" />
                                    <span className="font-medium text-sm">
                                        {name === "X" || name === "Kick" ? "Sígueme en " : name === "GitHub" ? "Mira mis proyectos en " : "Conéctate en "}
                                        {name}
                                    </span>
                                </Link>
                            ))}
                            <Link
                                href={`mailto:${DATA_ES.contact.email}`}
                                target="_blank"
                                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group pt-4 border-t border-dashed"
                            >
                                <Icons.email className="size-5 group-hover:scale-110 transition-transform" />
                                <span className="font-medium text-sm">{DATA_ES.contact.email}</span>
                            </Link>
                        </div>
                    </BlurFade>
                </div>
            </div>
        </section>
    );
};
