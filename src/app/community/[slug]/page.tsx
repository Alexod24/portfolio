import { DATA_EN as DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ArrowLeftIcon } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

export function generateStaticParams() {
  return DATA.beyondTheCode.map((post) => ({ slug: post.slug }));
}

export default function CommunityPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = DATA.beyondTheCode.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-[100dvh] max-w-4xl mx-auto py-12 px-4 md:px-6 relative font-sans">
      <Link href="/">
        <InteractiveHoverButton className="ml-0 gap-2 mb-8 w-auto px-6 border bg-background hover:bg-accent text-foreground">
          <ArrowLeftIcon className="size-4" />
          Back to Home
        </InteractiveHoverButton>
      </Link>

      <section className="flex flex-col items-start space-y-8 mb-8 w-full">
        <BlurFade delay={0.04}>
          <div className="flex flex-col space-y-4 w-full">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter">
              {post.title}
            </h1>
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <time className="text-lg">{post.dates}</time>
              <span>•</span>
              <span className="text-lg">{post.location}</span>
            </div>
          </div>
        </BlurFade>

        {/* Banner Image */}
        <BlurFade delay={0.08} className="w-full">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </BlurFade>
      </section>

      <div className="grid grid-cols-1 gap-12 w-full">
        <BlurFade delay={0.12} className="min-w-0 w-full">
          <article className="prose dark:prose-invert max-w-none text-lg leading-relaxed text-muted-foreground prose-headings:scroll-mt-20 prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:underline prose-img:rounded-xl">
            <Markdown>{post.description}</Markdown>
            {/* Dynamic content could go here if we add a 'content' field to resume data later */}
            <div className="mt-8 p-6 bg-muted/50 rounded-xl border">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Sobre esta comunidad
              </h3>
              <p>
                Como miembro activo de <strong>{post.title}</strong>, participo
                en la organización de eventos, talleres y charlas tecnológicas.
                Nuestro objetivo es fomentar el crecimiento profesional y crear
                un espacio donde desarrolladores de todos los niveles puedan
                aprender y compartir conocimientos.
              </p>
              <div className="mt-6">
                <Link href={post.links[0]?.href || "#"} target="_blank">
                  <InteractiveHoverButton>
                    Unirse a la comunidad
                  </InteractiveHoverButton>
                </Link>
              </div>
            </div>
          </article>
        </BlurFade>
      </div>
    </main>
  );
}
