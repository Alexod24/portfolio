"use client";

import { useResume } from "@/components/language-provider";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

export default function EducationPage() {
    const { data } = useResume();

    if (!data?.education) {
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
                        text={data.sectionHeaders.education}
                    />
                    <BlurFade delay={BLUR_FADE_DELAY * 2}>
                        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                            My academic journey, certifications, and courses.
                        </p>
                    </BlurFade>
                </div>
            </section>

            <div className="space-y-12">
                {data.education.map((edu, idx) => (
                    <BlurFade key={edu.school} delay={BLUR_FADE_DELAY * 3 + idx * 0.05} inView>
                        <Card className="border-none shadow-none bg-transparent">
                            <CardHeader className="p-0 mb-6">
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                                    <Avatar className="size-16 border bg-muted-background dark:bg-foreground">
                                        <AvatarImage src={edu.logoUrl} alt={edu.school} className="object-contain p-1" />
                                        <AvatarFallback>{edu.school[0]}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="text-2xl font-bold">{edu.school}</CardTitle>
                                            <span className="text-sm text-muted-foreground whitespace-nowrap hidden md:block">{edu.start} - {edu.end}</span>
                                        </div>
                                        <div className="text-lg font-medium text-foreground">{edu.degree}</div>
                                        <span className="text-sm text-muted-foreground md:hidden">{edu.start} - {edu.end}</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0 space-y-6">
                                {/* Banner if available */}
                                {edu.banner && (
                                    <div className="relative w-full h-48 rounded-xl overflow-hidden border">
                                        <Image
                                            src={edu.banner}
                                            alt={`${edu.school} banner`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}

                                {/* Courses List */}
                                {edu.courses && edu.courses.length > 0 && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {edu.courses.map((course, i) => (
                                            <div key={i} className="flex gap-3 items-start p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                                                {course.image && (
                                                    <div className="relative size-12 min-w-12 rounded-md overflow-hidden border bg-background">
                                                        <Image
                                                            src={course.image}
                                                            alt={course.title}
                                                            fill
                                                            className="object-contain p-1"
                                                        />
                                                    </div>
                                                )}
                                                <div className="space-y-1">
                                                    <h4 className="text-sm font-semibold leading-tight">{course.title}</h4>
                                                    <p className="text-xs text-muted-foreground line-clamp-2">{course.description}</p>
                                                    <span className="text-[10px] text-muted-foreground block pt-1">{course.date}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                        {/* Separator unless last item */}
                        {idx < data.education.length - 1 && <div className="h-px w-full bg-border my-12" />}
                    </BlurFade>
                ))}
            </div>
        </main>
    );
}
