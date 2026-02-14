"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ArrowLeftIcon, CalendarIcon, LinkIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const EVENTS = [
  {
    titulo: "Ciberseguridad",
    fecha: "2026-02-05",
    tipo: "Conferencia",
    descripcion:
      "Análisis profundo de las tendencias actuales en protección de datos y defensa contra ciberataques.",
    link: "#",
  },
  {
    titulo: "Devfest HYO 2025",
    fecha: "2025-11-15",
    tipo: "Conferencia",
    descripcion:
      "El festival anual más grande de Google en la región, reuniendo a expertos en Cloud, Web e IA.",
    link: "#",
  },
  {
    titulo: "Nasa Space Apps Challenge Huancayo 🌎",
    fecha: "2025-10-04",
    tipo: "Registro Externo",
    descripcion:
      "Hackatón global para resolver retos mundiales utilizando los datos abiertos de la NASA.",
    link: "#",
  },
  {
    titulo: "AI & Mobile Fusion Meetup",
    fecha: "2025-09-17",
    tipo: "Conferencia",
    descripcion:
      "Sesión técnica enfocada en la integración de modelos de lenguaje en aplicaciones móviles nativas.",
    link: "#",
  },
  {
    titulo: "Hackathon 7H - Build with IA",
    fecha: "2025-07-19",
    tipo: "Hackatón",
    descripcion:
      "Desafío intensivo de programación para crear soluciones disruptivas impulsadas por Inteligencia Artificial.",
    link: "#",
  },
  {
    titulo: "Pensar Mejor con IA: Notebook LM",
    fecha: "2025-06-01",
    tipo: "Taller / Grupo de Estudio",
    descripcion:
      "Exploración de herramientas de IA para optimizar la gestión del conocimiento y el aprendizaje de alto nivel.",
    link: "#",
  },
  {
    titulo: "Startup Summit Huancayo",
    fecha: "2025-03-21",
    tipo: "Registro Externo",
    descripcion:
      "Punto de encuentro entre el ecosistema emprendedor y las últimas innovaciones tecnológicas de la región.",
    link: "#",
  },
  {
    titulo: "CIBERSEGURIDAD WEB PARA PYMES",
    fecha: "2025-01-31",
    tipo: "Conferencia",
    descripcion:
      "Estrategias y herramientas prácticas para asegurar la presencia digital de pequeños negocios locales.",
    link: "#",
  },
  {
    titulo: "Ciberseguridad Aplicada: Del Conocimiento a la Acción",
    fecha: "2024-12-08",
    tipo: "Taller / Grupo de Estudio",
    descripcion:
      "Segunda parte del taller intensivo sobre protocolos de seguridad y mitigación de riesgos web.",
    link: "#",
  },
  {
    titulo: "Ciberseguridad Aplicada: Del Conocimiento a la Acción",
    fecha: "2024-12-01",
    tipo: "Taller / Grupo de Estudio",
    descripcion:
      "Introducción práctica a las tácticas de defensa digital y análisis de vulnerabilidades.",
    link: "#",
  },
  {
    titulo: "Devfest HYO 2024",
    fecha: "2024-11-09",
    tipo: "Conferencia",
    descripcion:
      "Celebración tecnológica anual con charlas magistrales sobre el ecosistema de Google.",
    link: "#",
  },
  {
    titulo: "¡Domina la Revolución de la Inteligencia Artificial!",
    fecha: "2024-09-07",
    tipo: "Sesión con Ponente / Charla Técnica",
    descripcion:
      "Charla técnica sobre el impacto de los LLMs y el futuro del desarrollo de software.",
    link: "#",
  },
];

export default function GDGPage() {
  const BLUR_FADE_DELAY = 0.04;

  return (
    <main className="flex flex-col min-h-[100dvh] max-w-4xl mx-auto py-12 px-4 md:px-6 relative font-sans">
      <Link href="/community">
        <InteractiveHoverButton className="ml-0 gap-2 mb-8 w-auto px-6 border bg-background hover:bg-accent text-foreground">
          <ArrowLeftIcon className="size-4" />
          Back to Community
        </InteractiveHoverButton>
      </Link>

      <section className="flex flex-col items-start space-y-8 mb-12 w-full">
        <BlurFade delay={BLUR_FADE_DELAY} className="w-full">
          {/* Banner Image */}
          <div className="relative w-full aspect-[21/6] rounded-xl overflow-hidden border mb-8">
            <Image
              src="https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2,f_auto,g_center,h_1440,q_auto:good,w_2048/v1/gcs/platform-data-goog/chapter_photos/1700700061792.jpeg"
              alt="GDG Huancayo Banner"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col space-y-4 w-full">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border bg-white flex items-center justify-center shrink-0">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiLqJcLCJ1xNsvI7Uqv0cG3rLzEvk0AYN1tw&s"
                  alt="GDG Logo"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter">
                  GDG Huancayo
                </h1>
                <p className="text-muted-foreground text-lg">
                  Google Developer Group
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Somos una comunidad apasionada por la tecnología. Organizamos
              eventos, charlas y talleres para difundir el conocimiento sobre
              las tecnologías de Google y el desarrollo de software en general.
              Como miembro activo, he tenido la oportunidad de participar y
              organizar los siguientes eventos.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-4">
          <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
            <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm h-full">
              <h3 className="text-xl font-bold mb-3">Misión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Crear un espacio inclusivo y colaborativo donde desarrolladores,
                estudiantes y entusiastas de la tecnología puedan aprender,
                compartir conocimientos y crecer profesionalmente a través de
                experiencias prácticas y networking.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
            <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm h-full">
              <h3 className="text-xl font-bold mb-3">Visión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser la comunidad tecnológica referente en la región central del
                Perú, impulsando la innovación y formando líderes capaces de
                resolver problemas locales y globales mediante el uso de la
                tecnología.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <div className="flex flex-col gap-8 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h2 className="text-2xl font-bold border-b pb-2">
            Eventos y Actividades
          </h2>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EVENTS.map((event, id) => (
            <BlurFade
              key={event.titulo + id}
              delay={BLUR_FADE_DELAY * 3 + id * 0.05}
            >
              <div className="group flex flex-col h-full p-5 rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md hover:border-primary/50">
                <div className="flex justify-between items-start w-full mb-3">
                  <Badge variant="outline" className="text-xs font-normal">
                    {event.tipo}
                  </Badge>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                    <CalendarIcon className="size-3.5" />
                    <time>{event.fecha}</time>
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-lg font-bold tracking-tight group-hover:text-primary transition-colors line-clamp-2">
                    {event.titulo}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {event.descripcion}
                  </p>
                </div>

                {event.link &&
                  event.link !== "URL_AQUI" &&
                  event.link !== "#" && (
                    <div className="mt-4 pt-3 border-t">
                      <Link
                        href={event.link}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-xs font-medium hover:underline text-primary"
                      >
                        <LinkIcon className="size-3" />
                        Ver detalles
                      </Link>
                    </div>
                  )}
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </main>
  );
}
