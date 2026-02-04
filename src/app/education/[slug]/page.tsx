"use client";

import { useResume } from "@/components/language-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

// Note: generateStaticParams cannot be exported from a client component in the same file if we want it to run at build time for SSG with "use client".
// However, since we are switching to client-side data for language, we might lose SSG for the specific language content if we rely on context.
// But for the purpose of this task (language switching), we need client-side context.
// Actually, Next.js allows generateStaticParams in a client component file? No, it must be server side.
// But wait, if we make the page "use client", we can't export generateStaticParams.
// A common pattern is to have a server component wrapper or just accept that this page renders on client.
// Or we can keep generateStaticParams but move the component logic to a child client component.
// For simplicity and immediate fix: I will remove generateStaticParams export locally or move it?
// Actually, if I just make it "use client", next build might fail if I keep generateStaticParams.
// Let's try to just make it "use client" and see. If build fails, I'll refactor.
// Wait, the user wants language switching. That requires client state.
// So the page MUST listen to the provider.

const BLUR_FADE_DELAY = 0.04;

export default function EducationPage({
    params,
}: {
    params: { slug: string };
}) {
    const { data, language } = useResume();
    // Find education in the CURRENT language data
    const education = data.education.find((edu) => edu.slug === params.slug);

    if (!education) {
        // We can't easily notFound() in client component during render without effects, but returning null/error is fine.
        return <div className="min-h-screen flex items-center justify-center">Education not found</div>;
    }

    return (
        <main className="flex flex-col min-h-screen">
            {/* Banner Section */}
            <div className="relative w-full h-[30vh] min-h-[250px] overflow-hidden">
                <Image
                    src={education.banner || "/placeholder.png"}
                    alt={education.school}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute top-6 left-4 md:top-10 md:left-12 z-10">
                    <Link href="/" className="bg-background/80 hover:bg-background/100 backdrop-blur-sm px-3 py-1.5 rounded-full text-foreground/80 hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
                        <ChevronLeft className="size-4" /> {language === "en" ? "Back" : "Volver"}
                    </Link>
                </div>
            </div>

            {/* Header Section */}
            <div className="max-w-3xl mx-auto w-full px-4 pt-20 pb-4">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <Avatar className="size-20 md:size-24 border-4 border-background shadow-lg -mt-16 md:-mt-20 z-20">
                        <AvatarImage src={education.logoUrl} alt={education.school} className="object-cover bg-background" />
                        <AvatarFallback>{education.school[0]}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                            {education.school}
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            {education.degree}
                        </p>
                    </div>
                </div>
            </div>


            {/* Content Section - Blog Like Timeline */}
            <section className="flex-1 w-full max-w-3xl mx-auto py-12 px-4">
                {education.courses && education.courses.length > 0 ? (
                    <div className="flex flex-col space-y-8">
                        {[...education.courses]
                            .sort((a: any, b: any) => b.date.localeCompare(a.date))
                            .map((course: any, id: number) => (
                                <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={course.title}>
                                    <Link href="#" className="flex flex-col gap-4 md:flex-row hover:bg-muted/50 p-4 rounded-xl transition-colors">
                                        {/* Left Side: Date (like blog) */}
                                        <div className="md:w-32 flex-shrink-0">
                                            <p className="text-sm text-muted-foreground tabular-nums whitespace-nowrap">
                                                {course.date}
                                            </p>
                                        </div>

                                        {/* Right Side: Content */}
                                        <div className="flex-1 space-y-2">
                                            <h2 className="text-xl font-semibold tracking-tight">{course.title}</h2>
                                            <p className="text-muted-foreground">{course.description}</p>
                                            <div className="flex items-center gap-2 text-sm font-medium text-primary pt-2">
                                                {language === "en" ? "Read Article" : "Leer Artículo"} <span className="text-xs">›</span>
                                            </div>
                                        </div>

                                        {/* Image (Optional, matching user hint "imagen al costado") */}
                                        {course.image && (
                                            <div className="hidden md:block w-32 md:w-40 flex-shrink-0">
                                                <div className="relative aspect-video rounded-md overflow-hidden bg-muted">
                                                    <Image
                                                        src={course.image}
                                                        alt={course.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </Link>
                                </BlurFade>
                            ))}
                    </div>
                ) : (
                    <p className="text-center text-muted-foreground mt-12">
                        {language === "en" ? "No publications available yet for this institution." : "No hay publicaciones disponibles aún para esta institución."}
                    </p>
                )}
            </section>
        </main>
    );
}
