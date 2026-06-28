import { notFound } from "next/navigation";
import { projects, site } from "../../data/site";
import Reveal from "../../components/Reveal";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import CaseStudy from "../../components/CaseStudy";

const withCase = projects.filter((p) => p.caseStudy);

export function generateStaticParams() {
  return withCase.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = withCase.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case study · ${site.name}`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = withCase.find((p) => p.slug === slug);
  if (!project) notFound();

  // surface another case study at the foot, if there is one
  const others = withCase.filter((p) => p.id !== project.id);
  const next = others[0] || null;

  return (
    <>
      <Reveal />
      <Nav />
      <main>
        <CaseStudy project={project} next={next} />
      </main>
      <Footer />
    </>
  );
}
