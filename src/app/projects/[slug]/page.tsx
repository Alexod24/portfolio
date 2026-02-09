"use client";

import { useResume } from "@/components/language-provider";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

interface Props {
    params: {
        slug: string;
    };
}

export default function ProjectPage({ params }: Props) {
    const { data } = useResume();
    const project = data.projects.find((p: any) => p.slug === params.slug);

    if (!project) {
        return notFound();
    }

    // Combine video and gallery images for the carousel if available
    // If video exists, maybe we want to show it separately or as first item?
    // For now, let's just use the gallery images.
    const images = project.gallery || [];
    if (project.image && !images.includes(project.image)) {
        images.unshift(project.image);
    }

    return (
        <main className="flex flex-col min-h-[100dvh] space-y-12 max-w-4xl mx-auto py-12 px-4 md:px-0 relative">
            <Link href="/#projects">
                <Button variant="ghost" className="-ml-4 gap-2 mb-8">
                    <ArrowLeftIcon className="size-4" />
                    Back to Projects
                </Button>
            </Link>

            <section className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <div className="flex items-center gap-4">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">{project.title}</h1>
                            {project.active && (
                                <Badge variant="secondary" className="text-sm">Active</Badge>
                            )}
                        </div>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 2}>
                        <p className="text-xl text-muted-foreground">{project.description}</p>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 3}>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies?.map((tech: string) => (
                                <Badge key={tech} variant="outline">{tech}</Badge>
                            ))}
                        </div>
                    </BlurFade>
                </div>

                {/* Links */}
                {project.links && project.links.length > 0 && (
                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                        <div className="flex gap-4">
                            {project.links.map((link: any, idx: number) => (
                                <Link key={idx} href={link.href} target="_blank">
                                    <Button className="gap-2">
                                        {link.type === "Source" || link.type === "GitHub" ? <GithubIcon className="size-4" /> : <ExternalLinkIcon className="size-4" />}
                                        {link.type}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </BlurFade>
                )}

                {/* Media / Gallery */}
                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                    {/* If video exists, show it prominently */}
                    {project.video && (
                        <div className="w-full aspect-video rounded-xl overflow-hidden border bg-muted mb-8 shadow-2xl">
                            <video
                                src={project.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* If gallery has images (more than just the main one if we added it), show carousel */}
                    {images.length > 0 && (
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold">Gallery</h3>
                            <Carousel images={images} className="w-full aspect-video shadow-2xl border" />
                        </div>
                    )}
                </BlurFade>

                {/* Detailed Description? */}
                {/* We can reuse description or if there was a detailed content field */}
            </section>
        </main>
    );
}
