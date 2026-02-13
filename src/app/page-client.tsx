"use client";

import { HackathonCard } from "@/components/hackathon-card";
import { ChevronRight } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import Marquee from "@/components/magicui/marquee";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import WordPullUp from "@/components/magicui/word-pull-up";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";
import { motion } from "framer-motion";
import { IconCloudDemo } from "@/components/IconCloudDemo";
import { useResume } from "@/components/language-provider";
import { MapLines } from "@/components/decorative/map-lines";
import { AboutSection } from "@/components/about-section";
import { LatestPosts } from "@/components/latest-posts";
import { BlogPost } from "@/types/blog";

const BLUR_FADE_DELAY = 0.04;

export default function PageClient({ posts }: { posts: BlogPost[] }) {
  const { data } = useResume();

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-12 relative">
      <section
        id="hero"
        className="min-h-screen flex items-center justify-start py-12 pb-52 relative overflow-hidden"
      >
        {/* Lineas decorativas que quizas elimine */}
        <div className="absolute top-0 left-[-10%] h-full w-1/2 md:w-1/3 z-0 pointer-events-none opacity-60 text-foreground/20">
          <MapLines className="w-full h-full" />
        </div>

        <div className="w-full space-y-8 max-w-3xl relative z-10 px-4 md:px-0 mx-auto">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col w-full">
              <div className="flex justify-center w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 1, 0.5, 1],
                    delay: BLUR_FADE_DELAY,
                  }}
                >
                  {/* Logo en el centro del head pero estoy iterando para ver si queda bien */}
                  {/* <Image
                    src="/logos/logo-black.png"
                    alt="Logo"
                    width={200}
                    height={200}
                    className="mb-4 object-contain dark:invert"
                  /> */}
                </motion.div>
              </div>

              <div className="flex flex-col space-y-4">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight md:tracking-widest font-sans uppercase text-shadow-sm leading-none text-left"
                  yOffset={8}
                  text={data.description}
                  animateByCharacter={true}
                  characterDelay={0.08}
                />

                <div className="h-px w-24 bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-4"></div>

                <WordPullUp
                  className="max-w-[700px] text-base md:text-xl text-muted-foreground text-left font-light tracking-wide leading-relaxed"
                  words={data.summary}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About section moved to Hero */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h2 className="text-2xl font-bold tracking-tighter">
                {data.sectionHeaders.work}
              </h2>
              <Link href="/works">
                <Badge
                  variant="outline"
                  className="align-middle text-xs cursor-pointer hover:bg-secondary/50 transition-colors"
                >
                  Ver todas <ChevronRight className="ml-1 size-3" />
                </Badge>
              </Link>
            </div>
          </BlurFade>
          {data.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 2 + id * 0.05}
              inView
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h2 className="text-xl font-bold">
                {data.sectionHeaders.education}
              </h2>
              <Link href="/education">
                <Badge
                  variant="outline"
                  className="align-middle text-xs cursor-pointer hover:bg-secondary/50 transition-colors"
                >
                  Ver todas <ChevronRight className="ml-1 size-3" />
                </Badge>
              </Link>
            </div>
          </BlurFade>
          {data.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 2 + id * 0.05}
              inView
            >
              <ResumeCard
                key={education.school}
                href={
                  education.slug ? `/education/${education.slug}` : undefined
                }
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                description={education.description}
                ctaText={education.slug ? "Ver detalles" : undefined}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* SKILLS SECTION WITH MARQUEE */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h2 className="text-xl font-bold">
                {data.sectionHeaders.skills}
              </h2>
              <Link href="/skills">
                <Badge
                  variant="outline"
                  className="align-middle text-xs cursor-pointer hover:bg-secondary/50 transition-colors"
                >
                  Ver todas <ChevronRight className="ml-1 size-3" />
                </Badge>
              </Link>
            </div>
          </BlurFade>

          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-12 md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:20s]">
              {[
                { icon: Icons.react, name: "React" },
                { icon: Icons.nextjs, name: "Next.js" },
                { icon: Icons.typescript, name: "Typescript" },
                { icon: Icons.nodejs, name: "Node.js" },
                { icon: Icons.python, name: "Python" },
                { icon: Icons.javascript, name: "JavaScript" },
                { icon: Icons.postgresql, name: "Postgres" },
                { icon: Icons.docker, name: "Docker" },
                { icon: Icons.antigravity, name: "Antigravity" },
                { icon: Icons.java, name: "Java" },
                { icon: Icons.cpp, name: "C++" },
                { icon: Icons.tailwindcss, name: "Tailwind" },
                { icon: Icons.supabase, name: "Supabase" },
                { icon: Icons.mysql, name: "MySQL" },
                { icon: Icons.gdg, name: "GDG" },
                { icon: Icons.platzi, name: "Platzi" },
                { icon: Icons.figma, name: "Figma" },
                { icon: Icons.astro, name: "Astro" },
              ].map((skill, id) => (
                <div key={id} className="flex flex-col items-center gap-2 mx-8">
                  <skill.icon className="h-12 w-12" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  {data.sectionHeaders.projects.tag}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {data.sectionHeaders.projects.title}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {data.sectionHeaders.projects.description}
                </p>
              </div>
              <Link href="/projects">
                <Badge
                  variant="outline"
                  className="align-middle text-xs cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors py-2 px-4"
                >
                  Ver todos los proyectos{" "}
                  <ChevronRight className="ml-1 size-3" />
                </Badge>
              </Link>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 w-full">
            {data.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 2 + id * 0.05}
                inView
                className="h-full"
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                  slug={project.slug}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section id="blog">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <LatestPosts posts={posts} />
        </BlurFade>
      </section>

      {/* About Me Section - Inserted before Certifications */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                {data.sectionHeaders.about.tag}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {data.sectionHeaders.about.title}
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {data.sectionHeaders.about.description}
              </p>
            </div>
          </div>
        </BlurFade>
        <AboutSection />
      </section>

      <section id="certifications">
        {/* ... Certifications Content ... */}
        <div className="space-y-12 w-full py-12">
          {/* ... */}
          {/* Note: I am keeping the original structure here for certifications if it was there,
               but wait, I am replacing lines. I should check what I am replacing.
               The replacement target includes 'AboutSection' from previous step (line 163).
               Wait, the user wants 'About' BEFORE 'Certifications'.
               I will structure it carefully.
           */}
        </div>
      </section>

      {/* <section id="certifications">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Certificaciones
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Logros y Aprendizaje
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  El aprendizaje continuo es clave. Aquí algunas de las certificaciones y reconocimientos que he obtenido en mi camino.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {data.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 3 + id * 0.05}
                  inView
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}
      <section id="hackathons" className="flex flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                {data.sectionHeaders.hackathons.tag}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {data.sectionHeaders.hackathons.title}
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {data.sectionHeaders.hackathons.description}
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="mx-auto max-w-[800px] w-full">
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {data.hackathons.map((project, id) => (
              <BlurFade
                key={project.title + project.dates}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              >
                <HackathonCard
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  dates={project.dates}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </ul>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <div className="space-y-3">
              {/* <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contacto
              </div> */}
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {data.sectionHeaders.contact.title}
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {data.sectionHeaders.contact.description}
              </p>
              <div className="flex justify-center mt-4">
                <Link
                  href={data.contact.social.WhatsApp.url}
                  target="_blank"
                  className="no-underline"
                >
                  <InteractiveHoverButton
                    className="gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105"
                    onClick={() =>
                      window.open(data.contact.social.WhatsApp.url, "_blank")
                    }
                  >
                    <Icons.whatsapp className="size-6" />
                    {data.sectionHeaders.contact.whatsapp}
                  </InteractiveHoverButton>
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
