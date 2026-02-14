"use client";

import { useResume } from "@/components/language-provider";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeftIcon } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

interface EducationPageClientProps {
  slug: string;
}

export default function EducationPageClient({
  slug,
}: EducationPageClientProps) {
  const { data, language } = useResume();

  // Find education in the CURRENT language data
  const education = data.education.find((edu) => edu.slug === slug);

  if (!education) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center">
        <h1 className="text-2xl font-bold">Education not found</h1>
      </div>
    );
  }

  return (
    <main className="flex flex-col min-h-[100dvh] max-w-6xl mx-auto py-12 px-4 md:px-6 relative font-sans">
      <Link href="/">
        <InteractiveHoverButton className="ml-0 gap-2 mb-8 w-auto px-6 border bg-background hover:bg-accent text-foreground">
          <ArrowLeftIcon className="size-4" />
          {language === "es" ? "Volver al inicio" : "Back to Home"}
        </InteractiveHoverButton>
      </Link>

      <div className="flex flex-col items-start space-y-8 mb-8">
        <BlurFade delay={0.04} className="w-full">
          <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl mb-6 shadow-lg">
            <Image
              src={education.banner ?? "/placeholder.png"}
              alt={education.school}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative size-16 md:size-20 overflow-hidden rounded-full border-2 border-background shadow-md">
                <Image
                  src={education.logoUrl}
                  alt={education.school}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-black tracking-tighter">
                  {education.school}
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl font-medium">
                  {education.degree}
                </p>
              </div>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.08} className="w-full">
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {education.description}
          </p>
        </BlurFade>
      </div>

      <div className="grid gap-8">
        <BlurFade delay={0.12}>
          <h2 className="text-3xl font-bold tracking-tight">
            {language === "es"
              ? "Certificados y Cursos"
              : "Certificates & Courses"}
          </h2>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.courses && education.courses.length > 0 ? (
            education.courses.map((course, idx) => (
              <BlurFade key={idx} delay={0.14 + idx * 0.05} className="h-full">
                <Card className="h-full flex flex-col overflow-hidden border bg-card hover:shadow-xl transition-all duration-300 group">
                  <div className="relative aspect-video w-full overflow-hidden bg-muted">
                    {course.image ? (
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground bg-secondary/50">
                        <span className="text-sm">No Image</span>
                      </div>
                    )}
                  </div>
                  <CardHeader className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <CardTitle className="text-lg font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {course.title}
                      </CardTitle>
                    </div>
                    <Badge
                      variant="secondary"
                      className="w-fit font-mono text-xs"
                    >
                      {course.date}
                    </Badge>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <CardDescription className="line-clamp-3 text-sm">
                      {course.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </BlurFade>
            ))
          ) : (
            <p className="text-muted-foreground col-span-full">
              {language === "es"
                ? "No hay cursos disponibles."
                : "No courses available."}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
