"use client";

import { DATA_EN as DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";

const BLUR_FADE_DELAY = 0.04;

export default function SkillsPage() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-12">
            <section>
                <BlurFade delay={BLUR_FADE_DELAY}>
                    <h1 className="font-medium text-2xl mb-8 tracking-tighter">Skills</h1>
                </BlurFade>
                <div className="flex flex-col gap-10">
                    {DATA.skillsCategories.map((category, idx) => (
                        <BlurFade key={category.title} delay={BLUR_FADE_DELAY * (idx + 2)}>
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-bold border-b pb-2">{category.title}</h2>
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill) => (
                                        <Badge
                                            key={skill.name}
                                            className="flex items-center gap-2 px-3 py-2 text-sm rounded-md"
                                            variant="secondary"
                                        >
                                            <skill.icon className="h-5 w-5" />
                                            {skill.name}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </section>
        </main>
    );
}
