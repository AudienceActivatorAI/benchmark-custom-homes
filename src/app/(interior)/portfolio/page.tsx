import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Eyebrow from "@/components/Eyebrow";
import Breadcrumb from "@/components/Breadcrumb";
import { portfolioZoomLayerStyle, projects } from "@/lib/portfolio-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Portfolio | Custom Homes in Central Washington",
  description: `Explore Benchmark's custom home projects across Ellensburg, Cle Elum, and Kittitas County. ${siteConfig.stats.years} of precision-built homes and a ${siteConfig.stats.clientSatisfaction} client referral rate.`,
};

const R   = "#C41E2A";
const BK  = "#231F20";
const MID = "#6B6568";
const LG  = "#F5F4F4";

export default function Portfolio() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "10rem 2rem 5rem", borderBottom: `3px solid ${R}`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "5%", top: "60%", width: "120px", height: "120px", transform: "rotate(45deg)", border: "1px solid rgba(196,30,42,0.08)" }} />
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Portfolio", href: "/portfolio" }]} />
        <div style={{ maxWidth: "1320px", margin: "0 auto", paddingTop: "1rem" }}>
          <Eyebrow>Our Work</Eyebrow>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap" as const, gap: "2rem" }}>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 300, color: BK, lineHeight: 1.05 }}>
              Selected Projects
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: MID, maxWidth: "360px", lineHeight: 1.7 }}>
              A quality-first portfolio across {siteConfig.hq.region}. Selected recent work.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ backgroundColor: LG, padding: "4rem 2rem 7rem" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3px" }} className="portfolio-grid">
            {projects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={(i % 3) * 80}>
                <div className="portfolio-card" style={{
                  backgroundColor: project.bg,
                  aspectRatio: i % 5 === 0 ? "1/1" : "3/4",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}>
                  <div style={portfolioZoomLayerStyle(project)} className="card-zoom-img" />
                  <div style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "1.25rem",
                    width: "8px",
                    height: "8px",
                    backgroundColor: R,
                    transform: "rotate(45deg)",
                    zIndex: 2,
                    transition: "transform 0.3s ease",
                  }} />
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "2.5rem 1.75rem 1.75rem",
                    background: "linear-gradient(transparent 0%, rgba(26,23,24,0.95) 100%)",
                    zIndex: 2,
                  }}>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#D94455", marginBottom: "0.4rem" }}>
                      {project.category} · {project.year}
                    </div>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 300, color: "#F5F4F4", lineHeight: 1.2 }}>{project.title}</div>
                    <div style={{ display: "flex", gap: "1.25rem", marginTop: "0.5rem" }}>
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "#6B6568" }}>{project.size}</span>
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "#6B6568" }}>{project.location}</span>
                    </div>
                    <p style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.5,
                      marginTop: "0.65rem",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical" as const,
                      overflow: "hidden",
                    }}>
                      {project.narrative}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — prominent */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" as const }}>
          <ScrollReveal>
            <Eyebrow>Client Stories</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 300, color: BK, lineHeight: 1.25, marginBottom: "1rem" }}>
              Testimonials coming soon
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.75, color: MID, marginBottom: "1.75rem" }}>
              We&apos;re collecting fresh client feedback; additional stories will appear here after spring break. In the meantime, you can read existing reviews on our testimonials page.
            </p>
            <Link href="/testimonials" className="link-underline-red" style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
              View testimonials →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats — quality over volume */}
      <section style={{ backgroundColor: BK, padding: "6rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <ScrollReveal variant="stagger">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px", maxWidth: "880px", margin: "0 auto" }} className="stats-grid">
              {[
                { value: siteConfig.stats.years,              label: siteConfig.stats.yearsLabel },
                { value: siteConfig.stats.clientSatisfaction, label: siteConfig.stats.clientSatisfactionLabel },
              ].map((stat) => (
                <div key={stat.label} style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderTop: `3px solid ${R}`,
                  padding: "2.5rem",
                  textAlign: "center" as const,
                  transition: "background-color 0.35s ease",
                }}>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "2.75rem", fontWeight: 300, color: "#D94455", lineHeight: 1, marginBottom: "0.5rem" }}>{stat.value}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: MID, letterSpacing: "0.08em" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
