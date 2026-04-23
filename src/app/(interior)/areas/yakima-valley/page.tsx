import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Eyebrow from "@/components/Eyebrow";
import Breadcrumb from "@/components/Breadcrumb";
import { areasData } from "@/lib/areas-data";
import { getProjectsByArea, portfolioZoomLayerStyle } from "@/lib/portfolio-data";

const area = areasData["yakima-valley"];
const relatedProjects = getProjectsByArea("yakima-valley");

export const metadata: Metadata = {
  title: area.metaTitle,
  description: area.metaDescription,
};

const R = "#C41E2A";
const BK = "#231F20";
const MID = "#6B6568";
const LG = "#F5F4F4";

export default function YakimaValley() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "10rem 2rem 5rem", borderBottom: `3px solid ${R}`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "8%", top: "55%", width: "120px", height: "120px", transform: "rotate(45deg)", border: "1px solid rgba(196,30,42,0.06)" }} />
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: area.name, href: `/areas/${area.slug}` }]} />
        <div style={{ maxWidth: "1320px", margin: "0 auto", paddingTop: "1rem" }}>
          <Eyebrow>{area.heroSubtitle}</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 300, color: BK, lineHeight: 1.05, maxWidth: "700px" }}>
            {area.heroTitle.split(" ").slice(0, 2).join(" ")}{" "}
            <em style={{ fontStyle: "italic", color: R }}>{area.heroTitle.split(" ").slice(2).join(" ")}</em>
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section style={{ backgroundColor: LG, padding: "7rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <ScrollReveal>
            {area.intro.map((p, i) => (
              <p key={i} style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: MID, marginBottom: i < area.intro.length - 1 ? "1.25rem" : "0" }}>
                {p}
              </p>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Building context + Zoning */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "7rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }} className="two-col">
          <ScrollReveal variant="left">
            <Eyebrow>Building Context</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 300, color: BK, lineHeight: 1.2, marginBottom: "1.5rem" }}>
              What to know about building in {area.name}.
            </h2>
            {area.buildingContext.map((item) => (
              <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.85rem" }}>
                <div style={{ width: "6px", height: "6px", backgroundColor: R, transform: "rotate(45deg)", flexShrink: 0, marginTop: "0.35rem" }} />
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.6, color: MID }}>{item}</span>
              </div>
            ))}
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <Eyebrow>Zoning & Permitting</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 300, color: BK, lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Local regulations we navigate for you.
            </h2>
            {area.zoningInsights.map((item) => (
              <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.85rem" }}>
                <div style={{ width: "6px", height: "6px", backgroundColor: R, transform: "rotate(45deg)", flexShrink: 0, marginTop: "0.35rem" }} />
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.6, color: MID }}>{item}</span>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section style={{ backgroundColor: LG, padding: "6rem 2rem" }} className="section-padding">
          <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
            <ScrollReveal>
              <Eyebrow>Our Work in {area.name}</Eyebrow>
            </ScrollReveal>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(relatedProjects.length, 3)}, 1fr)`, gap: "3px" }} className="portfolio-grid">
              {relatedProjects.map((project, i) => (
                <ScrollReveal key={project.slug} delay={i * 80}>
                  <Link href={`/portfolio/${project.slug}`} style={{ textDecoration: "none", display: "block", color: "inherit" }}>
                  <div className="portfolio-card" style={{
                    backgroundColor: project.bg,
                    aspectRatio: "4/3",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}>
                    <div style={portfolioZoomLayerStyle(project)} className="card-zoom-img" />
                    <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem", width: "8px", height: "8px", backgroundColor: R, transform: "rotate(45deg)", zIndex: 2 }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2.5rem 1.75rem 1.75rem", background: "linear-gradient(transparent 0%, rgba(26,23,24,0.95) 100%)", zIndex: 2 }}>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#D94455", marginBottom: "0.4rem" }}>
                        {project.category}
                      </div>
                      <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 300, color: "#F5F4F4", lineHeight: 1.2 }}>{project.title}</div>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "#6B6568", marginTop: "0.4rem" }}>{project.size}</div>
                    </div>
                  </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why build here */}
      <section style={{ backgroundColor: BK, padding: "7rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="two-col">
          <ScrollReveal variant="left">
            <Eyebrow>Why Build Here</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 300, color: "#F5F4F4", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Why families choose {area.name}.
            </h2>
            {area.whyBuildHere.map((item) => (
              <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.85rem" }}>
                <div style={{ width: "6px", height: "6px", backgroundColor: R, transform: "rotate(45deg)", flexShrink: 0, marginTop: "0.35rem" }} />
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.6, color: MID }}>{item}</span>
              </div>
            ))}
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", padding: "2.5rem" }}>
              <div style={{ width: "1.5rem", height: "2px", backgroundColor: R, marginBottom: "1.5rem" }} />
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 300, fontStyle: "italic", color: "#F5F4F4", lineHeight: 1.5 }}>
                {area.lifestyle}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: R, padding: "6rem 2rem", position: "relative", overflow: "hidden" }} className="section-padding">
        <div style={{ position: "absolute", right: "-40px", top: "50%", transform: "translateY(-50%) rotate(45deg)", width: "200px", height: "200px", backgroundColor: "rgba(0,0,0,0.08)" }} />
        <ScrollReveal>
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" as const, position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#FFFFFF", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Considering building in {area.name}?
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: "2.5rem" }}>
              We know this area inside and out. Let&apos;s talk about your project.
            </p>
            <Link href="/contact" className="btn-white" style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: R, padding: "1.1rem 2.5rem" }}>
              Schedule a Consultation
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
