"use client";

import { useResume } from "@/components/language-provider";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ArrowLeftIcon, CalendarIcon, LinkIcon, BuildingIcon, BriefcaseIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";
import Marquee from "@/components/magicui/marquee";

const BLUR_FADE_DELAY = 0.04;

export default function WorksPage() {
    const { data } = useResume();

    if (!data?.work) {
        return <div className="p-12 text-center">Loading...</div>;
    }

    return (
        <main className="flex flex-col min-h-[100dvh] space-y-12 max-w-4xl mx-auto py-12 px-4 md:px-0 relative">
            <Link href="/">
                <InteractiveHoverButton className="ml-0 gap-2 mb-8 w-auto px-6 border bg-background hover:bg-accent text-foreground">
                    <ArrowLeftIcon className="size-4" />
                    Back to Home
                </InteractiveHoverButton>
            </Link>

            <section id="header" className="flex flex-col items-center text-center space-y-6">
                <div className="space-y-2">
                    <BlurFadeText
                        delay={BLUR_FADE_DELAY}
                        className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
                        text={data.sectionHeaders.work || "Work Experience"}
                    />
                    <BlurFade delay={BLUR_FADE_DELAY * 2}>
                        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                            My professional journey and the companies where I've made an impact.
                        </p>
                    </BlurFade>
                </div>
            </section>

            <div className="space-y-32">
                {data.work.map((work, idx) => (
                    <section key={work.company} className="space-y-12 relative border-b pb-20 last:border-b-0">
                        <BlurFade delay={BLUR_FADE_DELAY * 3 + idx * 0.05} inView>
                            {/* Company Header */}
                            <div className="flex flex-col items-center text-center gap-4 mb-8">
                                <Avatar className="size-24 border bg-muted-background dark:bg-foreground shadow-sm">
                                    <AvatarImage src={work.logoUrl} alt={work.company} className="object-contain p-2" />
                                    <AvatarFallback>{work.company[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h2 className="text-4xl font-bold tracking-tight mb-2">{work.company}</h2>
                                    <div className="flex items-center justify-center gap-4 text-muted-foreground">
                                        <span className="flex items-center gap-1"><BuildingIcon className="size-4" /> {work.location}</span>
                                        {work.href && (
                                            <Link href={work.href} target="_blank" className="hover:text-primary transition-colors flex items-center gap-1">
                                                <LinkIcon className="size-4" /> Website
                                            </Link>
                                        )}
                                        {/* @ts-ignore */}
                                        {work.youtube && (
                                            <Link href={work.youtube} target="_blank" className="hover:text-red-500 transition-colors flex items-center gap-1">
                                                <Icons.youtube className="size-4" /> YouTube
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Company Profile & Services */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                <div className="md:col-span-2 space-y-4">
                                    <h3 className="text-xl font-semibold flex items-center gap-2">
                                        <BuildingIcon className="size-5" /> About the Company
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-lg">
                                        {work.companyProfile || "Company description unavailable."}
                                    </p>
                                </div>
                                <div className="space-y-4 bg-muted/30 p-6 rounded-xl border">
                                    <h3 className="text-xl font-semibold">Services</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {work.services?.map((service) => (
                                            <Badge key={service} variant="secondary" className="bg-background hover:bg-background border-none shadow-sm">
                                                {service}
                                            </Badge>
                                        )) || <span className="text-muted-foreground text-sm">Services not listed</span>}
                                    </div>
                                </div>
                            </div>

                            {/* Gallery Marquee */}
                            {work.gallery && work.gallery.length > 0 && (
                                <div className="mb-12 relative">
                                    <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                                    <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
                                    <Marquee pauseOnHover className="[--duration:20s]">
                                        {work.gallery.map((img, i) => (
                                            <div key={i} className="relative w-72 h-48 mx-2 rounded-xl overflow-hidden border shadow-sm">
                                                <Image
                                                    src={img}
                                                    alt={`${work.company} gallery ${i}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                    </Marquee>
                                </div>
                            )}

                            {/* My Contribution Section */}
                            <div className="space-y-6 bg-secondary/10 p-8 rounded-2xl border border-secondary/20">
                                <div className="flex flex-col sm:flex-row items-start justify-between gap-4 border-b border-border/50 pb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold flex items-center gap-2">
                                            <BriefcaseIcon className="size-6 text-primary" /> My Role: {work.title}
                                        </h3>
                                    </div>
                                    <Badge variant="outline" className="text-sm px-3 py-1 flex items-center gap-2">
                                        <CalendarIcon className="size-3" /> {work.start} - {work.end ?? "Present"}
                                    </Badge>
                                </div>

                                <div className="prose dark:prose-invert text-muted-foreground leading-relaxed text-lg max-w-none text-justify">
                                    <Markdown>{work.description}</Markdown>
                                </div>

                                {/* Tech Stack */}
                                {work.badges && work.badges.length > 0 && (
                                    <div className="pt-4 mt-4 border-t border-border/50">
                                        <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 block">Tech Stack</span>
                                        <div className="flex flex-wrap gap-2">
                                            {work.badges.map((badge) => (
                                                <Badge key={badge} variant="secondary" className="px-3 py-1 text-sm bg-background border shadow-sm">
                                                    {badge}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                        </BlurFade>
                    </section>
                ))}
            </div>
        </main>
    );
}
