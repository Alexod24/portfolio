import { DATA_EN as DATA } from "@/data/resume";
import EducationPageClient from "./page-client";

export async function generateStaticParams() {
  return DATA.education.map((edu) => ({
    slug: edu.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const education = DATA.education.find((edu) => edu.slug === params.slug);

  if (!education) {
    return {
      title: "Education Not Found",
    };
  }

  return {
    title: `${education.school} | Education`,
    description: education.description,
  };
}

export default function EducationPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  return <EducationPageClient slug={params.slug} />;
}
