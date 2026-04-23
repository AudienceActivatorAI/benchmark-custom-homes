import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Eyebrow from "@/components/Eyebrow";
import Breadcrumb from "@/components/Breadcrumb";
import {
  getGalleryImages,
  getProjectBySlug,
  projects,
} from "@/lib/portfolio-data";
import { siteConfig } from "@/lib/site-config";

const R = "#C41E2A";
const BK = "#231F20";
const MID = "#6B6568";
const LG = "#F5F4F4";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} | Portfolio`,
    description: `${project.narrative.slice(0, 155)}…`,
    openGraph: {
      title: `${project.title} | ${siteConfig.company}`,
      description: project.narrative,
      images: project.coverImage ? [{ url: project.coverImage }] : undefined,
    },
  };
}

export default async function PortfolioProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const images = getGalleryImages(project);

  return (
    <>
      <section
        style={{
          backgroundColor: "#FFFFFF",
          padding: "10rem 2rem 3rem",
          borderBottom: `3px solid ${R}`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Portfolio", href: "/portfolio" },
            { name: project.title, href: `/portfolio/${project.slug}` },
          ]}
        />
        <div style={{ maxWidth: "1320px", margin: "0 auto", paddingTop: "1rem" }}>
          <Eyebrow>{project.category}</Eyebrow>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: BK,
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            {project.title}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9rem",
              color: MID,
              marginTop: "1rem",
              maxWidth: "560px",
            }}
          >
            {project.size} · {project.location}
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: LG, padding: "4rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <ScrollReveal variant="left">
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
                fontWeight: 400,
                color: BK,
                marginBottom: "1rem",
              }}
            >
              Overview
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                lineHeight: 1.85,
                color: MID,
                marginBottom: "1.25rem",
              }}
            >
              {project.narrative}
            </p>
            <div style={{ marginTop: "2rem" }}>
              {[
                { k: "Challenge", v: project.challenge },
                { k: "Approach", v: project.solution },
                { k: "Site & context", v: project.buildingContext },
              ].map((block) => (
                <div key={block.k} style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: R,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {block.k}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.88rem",
                      lineHeight: 1.75,
                      color: MID,
                      margin: 0,
                    }}
                  >
                    {block.v}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ backgroundColor: "#FFFFFF", padding: "4rem 2rem 7rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <ScrollReveal>
            <Eyebrow>Project gallery</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                fontWeight: 300,
                color: BK,
                marginBottom: "2.5rem",
              }}
            >
              Photography
            </h2>
          </ScrollReveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "4px",
            }}
            className="project-gallery-grid"
          >
            {images.map((src, i) => (
              <div
                key={`${src}-${i}`}
                style={{
                  position: "relative",
                  backgroundColor: "#E8E6E6",
                  gridColumn: i === 0 ? "1 / -1" : "auto",
                  aspectRatio: i === 0 ? "21 / 9" : "4 / 3",
                }}
              >
                <Image
                  src={src}
                  alt={`${project.title} — photo ${i + 1} of ${images.length}`}
                  fill
                  className="object-cover"
                  sizes={i === 0 ? "(max-width: 768px) 100vw, 1320px" : "(max-width: 768px) 100vw, 50vw"}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
          <div style={{ marginTop: "3rem", textAlign: "center" as const }}>
            <Link
              href="/portfolio"
              className="link-underline-dark"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              ← Back to all projects
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .project-gallery-grid { grid-template-columns: 1fr !important; }
          .project-gallery-grid > div:first-child { grid-column: 1 / -1 !important; aspect-ratio: 4 / 3 !important; }
        }
      `}</style>
    </>
  );
}
