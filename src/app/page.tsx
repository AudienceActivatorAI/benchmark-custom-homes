import type { Metadata } from "next";
import Link from "next/link";
import VideoHero from "@/components/VideoHero";
import ScrollReveal from "@/components/ScrollReveal";
import Eyebrow from "@/components/Eyebrow";
import { getFeaturedProjects, portfolioZoomLayerStyle } from "@/lib/portfolio-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.company} | ${siteConfig.tagline}`,
  description: `${siteConfig.company} builds precision-crafted custom homes across ${siteConfig.hq.region}. Flexible contracts, field-led oversight, clear communication on budget and schedule, and a six-year structural plus one-year full coverage warranty.`,
};

const R    = "#C41E2A";
const BK   = "#231F20";
const MID  = "#6B6568";
const LG   = "#F5F4F4";

const featuredProjects = getFeaturedProjects();

const processSteps = [
  { number: "01", title: "Discovery & Vision",    body: "We begin with an in-depth consultation to understand how you live, what you value, and what your home must deliver. No assumptions. No templates." },
  { number: "02", title: "Design & Architecture", body: "Working alongside your architect or ours, we translate your vision into precise plans with detailed specifications and transparent cost modeling." },
  { number: "03", title: "Pre-Construction",      body: "Every subcontractor is vetted. Every material is sourced. Every schedule is locked before a single foundation pour begins." },
  { number: "04", title: "Build & Oversight",     body: "Our project managers lead from the field — daily oversight, steady communication, and budget, schedule, and photos kept available so you always know where things stand." },
  { number: "05", title: "Delivery & Warranty",   body: "A structured walkthrough, a documented punch list, and warranty coverage that includes six years structural and one year full coverage. Your home is delivered complete — not nearly complete." },
];

export default function Home() {
  return (
    <>
      <VideoHero />

      {/* ── INTRO ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: LG, padding: "7rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }} className="two-col">
          <ScrollReveal variant="left">
            <Eyebrow>Why Benchmark</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, lineHeight: 1.2, color: BK, marginBottom: "2rem" }}>
              Our clients aren&apos;t buying a house.<br />
              <em style={{ fontStyle: "italic", color: R }}>They&apos;re buying certainty.</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.8, color: MID, marginBottom: "2.5rem" }}>
              The professionals and families who build with Benchmark are used to complexity. What they want removed from their lives is uncertainty. We deliver on budget, on schedule, and to a standard that holds — across every build in {siteConfig.hq.region}.
            </p>
            <Link href="/about" className="link-underline-dark" style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
              About Benchmark →
            </Link>
          </ScrollReveal>

          {/* Feature list */}
          <ScrollReveal delay={200}>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0" }}>
              {[
                { title: "Flexible Contract Options", body: "We work with our clients and lenders during the contract phase to fit their needs." },
                { title: "Focused Project Oversight", body: "We focus on management from the field, keeping the project on track and up to our standards." },
                { title: "Communication", body: "Budget, schedule, and photos are always available." },
                { title: "Structural & Full Coverage Warranty", body: "Six-year structural and one-year full coverage warranty." },
              ].map((item) => (
                <div key={item.title} style={{
                  display: "flex",
                  gap: "1.5rem",
                  padding: "1.75rem 0",
                  borderBottom: "1px solid #E5E3E3",
                  alignItems: "flex-start",
                  transition: "background-color 0.25s ease",
                }}>
                  <div style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: R,
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                    marginTop: "0.4rem",
                    transition: "transform 0.3s ease",
                  }} />
                  <div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: BK, marginBottom: "0.2rem" }}>{item.title}</div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.825rem", color: MID, lineHeight: 1.6 }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PORTFOLIO ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "7rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap" as const, gap: "1.5rem" }}>
              <div>
                <Eyebrow>Recent Work</Eyebrow>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 300, color: BK, lineHeight: 1.15 }}>Selected Projects</h2>
              </div>
              <Link href="/portfolio" className="link-underline-dark" style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
                View All Projects →
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={100}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "3px" }} className="portfolio-grid">
              {featuredProjects.map((project) => (
                <Link key={project.slug} href="/portfolio" style={{ textDecoration: "none" }}>
                  <div className="portfolio-card" style={{ backgroundColor: project.bg, aspectRatio: "4/3", position: "relative", overflow: "hidden" }}>
                    <div style={portfolioZoomLayerStyle(project, 600)} className="card-zoom-img" />
                    <div style={{
                      position: "absolute",
                      top: "1.5rem",
                      right: "1.5rem",
                      width: "10px",
                      height: "10px",
                      backgroundColor: R,
                      transform: "rotate(45deg)",
                      transition: "transform 0.3s ease",
                      zIndex: 2,
                    }} />
                    <div style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "2.5rem 2rem 2rem",
                      background: "linear-gradient(transparent 0%, rgba(26,23,24,0.95) 100%)",
                      zIndex: 2,
                    }}>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#D94455", marginBottom: "0.5rem" }}>
                        {project.category} · {project.year}
                      </div>
                      <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 300, color: "#F5F4F4", lineHeight: 1.2 }}>{project.title}</div>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "#6B6568", marginTop: "0.35rem" }}>{project.size} · {project.location}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: LG, padding: "7rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "5rem", alignItems: "start" }} className="process-grid">
            <ScrollReveal variant="left">
              <div style={{ position: "sticky" as const, top: "6rem" }}>
                <Eyebrow>How We Build</Eyebrow>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 3vw, 2.75rem)", fontWeight: 300, color: BK, lineHeight: 1.15, marginBottom: "1.5rem" }}>
                  A process built on precision, not promises.
                </h2>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.8, color: MID, marginBottom: "2rem" }}>
                  Every Benchmark project follows a structured, proven process designed to eliminate the variables that derail most custom builds.
                </p>
                <Link href="/process" className="link-underline-red" style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
                  Our Full Process →
                </Link>
              </div>
            </ScrollReveal>
            <div>
              {processSteps.map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 80}>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "3rem 1fr",
                    gap: "2rem",
                    paddingBottom: "2.5rem",
                    marginBottom: "2.5rem",
                    borderBottom: i < processSteps.length - 1 ? "1px solid #E5E3E3" : "none",
                  }}>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", color: R, paddingTop: "0.3rem" }}>{step.number}</div>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 400, color: BK, marginBottom: "0.75rem" }}>{step.title}</h3>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.75, color: MID }}>{step.body}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "7rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <ScrollReveal>
            <Eyebrow>What We Build</Eyebrow>
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }} className="services-grid">
            {[
              { title: "Custom Home Builds", body: "Ground-up construction designed to your specifications, from conceptual design through final delivery across Central Washington.", href: "/services" },
              { title: "Teardown & Rebuild",  body: "Replace an outdated structure with a home built precisely for how you live today. Turnkey project management from demolition to delivery.", href: "/services" },
              { title: "Luxury Remodels",     body: "Whole-home transformations that preserve what works and elevate everything else. Structural, architectural, and finish work to an exacting standard.", href: "/services" },
            ].map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <div className="card-lift" style={{
                  backgroundColor: LG,
                  padding: "3rem 2.5rem",
                  borderTop: `3px solid ${R}`,
                  height: "100%",
                  transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s cubic-bezier(0.16,1,0.3,1)",
                }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 400, color: BK, marginBottom: "1rem", lineHeight: 1.2 }}>{service.title}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.75, color: MID, marginBottom: "2rem" }}>{service.body}</p>
                  <Link href={service.href} className="link-underline-dark" style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>
                    Learn More →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: BK, padding: "7rem 2rem" }} className="section-padding">
        <ScrollReveal>
          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" as const }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "2.5rem" }}>
              <div className="diamond-pulse" style={{ width: "16px", height: "16px", backgroundColor: R }} />
            </div>
            <blockquote style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.55,
              color: "#F5F4F4",
              marginBottom: "2.5rem",
            }}>
              &ldquo;We interviewed four builders. Benchmark was the only team that could explain exactly what would happen, when, and why. That level of clarity made our decision easy.&rdquo;
            </blockquote>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#6B6568" }}>
              Michael & Sarah T. — Ellensburg, 2024
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "0.35rem", marginTop: "1.5rem" }}>
              {[...Array(5)].map((_, i) => <span key={i} style={{ color: R, fontSize: "0.85rem" }}>★</span>)}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: R, padding: "8rem 2rem", position: "relative", overflow: "hidden" }} className="section-padding-lg">
        <div style={{ position: "absolute", right: "-60px", top: "50%", transform: "translateY(-50%) rotate(45deg)", width: "300px", height: "300px", backgroundColor: "rgba(0,0,0,0.08)", transition: "transform 2s ease" }} />
        <div style={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%) rotate(45deg)", width: "160px", height: "160px", border: "2px solid rgba(255,255,255,0.12)" }} />
        <div style={{ position: "absolute", left: "-80px", bottom: "-80px", width: "200px", height: "200px", transform: "rotate(45deg)", border: "1px solid rgba(255,255,255,0.06)" }} />

        <ScrollReveal>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" as const, position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 300, color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Ready to build the home you&apos;ve been{" "}
              <em style={{ fontStyle: "italic" }}>designing in your mind?</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", maxWidth: "560px", margin: "0 auto 3rem" }}>
              We accept a limited number of new projects each year to ensure every client receives the attention their investment deserves. Let&apos;s talk about yours.
            </p>
            <Link
              href="/contact"
              className="btn-white"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
                color: R,
                padding: "1.2rem 3rem",
              }}
            >
              Schedule a Consultation
            </Link>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", marginTop: "1.5rem", letterSpacing: "0.03em" }}>
              Confidential · No obligation · Response within one business day
            </p>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
