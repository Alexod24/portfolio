"use client";

import { useResume } from "@/components/language-provider";
import BlurFade from "@/components/magicui/blur-fade";
import Marquee from "@/components/magicui/marquee";
import { Badge } from "@/components/ui/badge";

const BLUR_FADE_DELAY = 0.04;

export default function SkillsPage() {
    const { data } = useResume();

    // Combine all skills for the marquee
    const allSkills = data.skillsCategories.flatMap((category) => category.skills);

    return (
        <main className="flex flex-col min-h-[100dvh] space-y-12 py-12 px-4 md:px-8 max-w-5xl mx-auto">

            {/* Header and Marquee Section */}
            <section className="flex flex-col items-center justify-center space-y-4 text-center w-full">
                <BlurFade delay={BLUR_FADE_DELAY}>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        {data.sectionHeaders.skills || "Skills"}
                    </h1>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px] mb-8">
                        My technical arsenal and the tools I use to build digital products.
                    </p>
                </BlurFade>

                {/* Infinite Carousel */}
                <BlurFade delay={BLUR_FADE_DELAY * 3} className="w-full">
                    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-10 md:shadow-xl border">
                        <Marquee pauseOnHover className="[--duration:40s]">
                            {allSkills.map((skill, id) => (
                                <div key={id} className="flex flex-col items-center gap-2 mx-6">
                                    {skill.icon && <skill.icon className="h-12 w-12" />}
                                    <span className="text-sm font-medium">{skill.name}</span>
                                </div>
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background dark:from-background"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background dark:from-background"></div>
                    </div>
                </BlurFade>
            </section>

            <div className="flex flex-col gap-10">
                {data.skillsCategories.map((category, idx) => (
                    <BlurFade
                        key={category.title}
                        delay={BLUR_FADE_DELAY * (idx + 4)}
                    >
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-bold border-b pb-2">
                                {category.title}
                            </h2>
                            {/* Detailed Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group relative flex items-start gap-4 rounded-xl border bg-card p-5 shadow-sm transition-all hover:shadow-md hover:border-foreground/20 hover:-translate-y-1"
                                    >
                                        <div className="flex-shrink-0 relative flex h-12 w-12 items-center justify-center rounded-lg bg-muted/50 p-2 ring-1 ring-border group-hover:bg-background transition-colors">
                                            {skill.icon && (
                                                <skill.icon className="h-full w-full object-contain" />
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-base font-semibold group-hover:text-primary transition-colors">
                                                {skill.name}
                                            </span>
                                            {/* Render description if it exists in the data type, assuming we added it */}
                                            <p className="text-sm text-muted-foreground line-clamp-3">
                                                {(skill as any).description || "Proficient in using this technology for building scalable solutions."}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </BlurFade>
                ))}
            </div>
        </main>
    );
}
