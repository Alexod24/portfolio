"use client";

import { useResume } from "@/components/language-provider";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Badge } from "@/components/ui/badge";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ArrowLeftIcon, CalendarIcon, LinkIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";
import { Icons } from "@/components/icons";
import Marquee from "@/components/magicui/marquee";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
    const { data } = useResume();

    if (!data?.projects) {
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
                        text={data.sectionHeaders.projects.tag || "Projects"}
                    />
                    <BlurFade delay={BLUR_FADE_DELAY * 2}>
                        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                            {data.sectionHeaders.projects.description}
                        </p>
                    </BlurFade>
                </div>
            </section>

            <div className="space-y-24">
                {data.projects.map((project, idx) => (
                    <section key={project.title} className="space-y-8 relative border-b pb-12 last:border-b-0">
                        <BlurFade delay={BLUR_FADE_DELAY * 3 + idx * 0.05} inView className="w-full">
                            {/* Project Header */}
                            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tight">{project.title}</h2>
                                    <div className="flex items-center gap-4 text-muted-foreground text-sm">
                                        <Badge variant="outline" className="flex items-center gap-1">
                                            <CalendarIcon className="size-3" /> {project.dates}
                                        </Badge>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.links?.map((link, i) => (
                                        <Link key={i} href={link.href} target="_blank">
                                            <Badge variant="secondary" className="flex gap-2 px-3 py-1 text-sm cursor-pointer hover:bg-primary/10 transition-colors">
                                                {/* @ts-ignore */}
                                                {link.icon}
                                                {link.type}
                                            </Badge>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Main Media (Video or Image) */}
                            <div className="mb-8 w-full overflow-hidden rounded-xl border bg-muted/50 shadow-sm">
                                {project.video ? (
                                    <video
                                        src={project.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-auto max-h-[500px] object-cover"
                                    />
                                ) : project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={1200}
                                        height={630}
                                        className="w-full h-auto max-h-[500px] object-cover"
                                        unoptimized={project.image.startsWith("http")}
                                    />
                                ) : null}
                            </div>

                            {/* Gallery Marquee if available */}
                            {project.gallery && project.gallery.length > 0 && (
                                <div className="mb-8 relative w-full overflow-hidden">
                                    <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                                    <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
                                    <Marquee pauseOnHover className="[--duration:30s]">
                                        {project.gallery.map((img, i) => (
                                            <div key={i} className="relative w-64 h-40 mx-2 rounded-lg overflow-hidden border bg-background shadow-sm">
                                                <Image
                                                    src={img}
                                                    alt={`${project.title} gallery ${i}`}
                                                    fill
                                                    className="object-cover"
                                                    unoptimized={img.startsWith("http")}
                                                />
                                            </div>
                                        ))}
                                    </Marquee>
                                </div>
                            )}

                            {/* Description & Tech Stack */}
                            <div className="grid grid-cols-1 gap-6">
                                <div className="prose dark:prose-invert text-muted-foreground leading-relaxed text-lg max-w-none text-justify">
                                    {/* Using markdown for rich text if description contains it */}
                                    <Markdown>{project.description}</Markdown>
                                </div>

                                <div className="space-y-3 pt-4 border-t border-border/50">
                                    <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Technologies</span>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="px-3 py-1 font-medium">
                                                {tech}
                                            </Badge>
                                        ))}
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
