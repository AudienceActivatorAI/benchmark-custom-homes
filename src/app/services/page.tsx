import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Eyebrow from "@/components/Eyebrow";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services | Custom Home Building in Central Washington",
  description: `${siteConfig.company} offers custom home builds, teardown & rebuild, and luxury remodels across ${siteConfig.hq.region}. Fixed-price contracts and a two-year warranty.`,
};

const R   = "#C41E2A";
const BK  = "#231F20";
const MID = "#6B6568";
const LG  = "#F5F4F4";

const services = [
  {
    number: "01",
    title: "Custom Home Builds",
    description: "Ground-up construction designed from blank canvas to final finishes. We manage the full process — architecture, permitting, construction, and delivery — to an uncompromising standard across Central Washington.",
    includes: [
      "Full architectural coordination",
      "Interior design integration",
      "Premium material sourcing",
      "All permitting and inspections",
      "Well, septic & rural infrastructure coordination",
      "Fixed-price or GMP contract",
      "Two-year craftsmanship warranty",
    ],
  },
  {
    number: "02",
    title: "Teardown & Rebuild",
    description: "The existing structure is removed and replaced with a home designed entirely around how you live today. We handle demolition through delivery as a single, coordinated engagement — from Ellensburg neighborhoods to rural Kittitas County parcels.",
    includes: [
      "Demolition and site preparation",
      "Custom architectural design",
      "Full permit package",
      "Utility coordination & reconnection",
      "New construction on existing lot",
      "Landscape and site finishing",
      "Two-year craftsmanship warranty",
    ],
  },
  {
    number: "03",
    title: "Luxury Remodels",
    description: "Whole-home transformations for homeowners who want the quality of a new build applied to a home they love. Structural, architectural, and finish work to the same standard as our custom builds.",
    includes: [
      "Structural and systems upgrades",
      "Full kitchen and bath transformations",
      "Primary suite expansions",
      "Floor plan reconfiguration",
      "Window and door packages",
      "Energy efficiency improvements",
      "Full interior design coordination",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "10rem 2rem 5rem", borderBottom: `3px solid ${R}`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "8%", top: "55%", width: "140px", height: "140px", transform: "rotate(45deg)", border: "1px solid rgba(196,30,42,0.06)" }} />
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />
        <div style={{ maxWidth: "1320px", margin: "0 auto", paddingTop: "1rem" }}>
          <Eyebrow>What We Build</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 300, color: BK, lineHeight: 1.05, maxWidth: "700px" }}>
            Three ways to build.<br />
            <em style={{ fontStyle: "italic", color: R }}>One standard of delivery.</em>
          </h1>
        </div>
      </section>

      {/* Services */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "7rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          {services.map((service, i) => (
            <ScrollReveal key={service.number} delay={100}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "5rem",
                paddingBottom: "5rem",
                marginBottom: "5rem",
                borderBottom: i < services.length - 1 ? "1px solid #E5E3E3" : "none",
                alignItems: "start",
              }} className="service-row">
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "1.25rem" }}>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600, color: R, letterSpacing: "0.1em" }}>{service.number}</span>
                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 400, color: BK, lineHeight: 1 }}>{service.title}</h2>
                  </div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, color: MID }}>{service.description}</p>
                </div>
                <div style={{
                  backgroundColor: LG,
                  padding: "2.5rem",
                  borderTop: `3px solid ${R}`,
                  transition: "box-shadow 0.35s ease",
                }}>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: R, marginBottom: "1.5rem" }}>Scope Includes</div>
                  {service.includes.map((item) => (
                    <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.85rem" }}>
                      <div style={{ width: "6px", height: "6px", backgroundColor: R, transform: "rotate(45deg)", flexShrink: 0, marginTop: "0.35rem" }} />
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.6, color: BK }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Benchmark Difference */}
      <section style={{ backgroundColor: LG, padding: "6rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <ScrollReveal>
            <Eyebrow>The Benchmark Difference</Eyebrow>
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }} className="diff-grid">
            {[
              { title: "Fixed-Price Contracts",     body: "We commit to a number and honor it. You\u2019ll never receive a surprise invoice for work already completed." },
              { title: "Single Point of Contact",   body: "Your project manager is your only call. No bouncing between departments or subcontractors." },
              { title: "Real-Time Transparency",    body: "Your project portal gives you daily updates, photo logs, budget tracking, and schedule visibility \u2014 always on." },
            ].map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 100}>
                <div className="card-lift" style={{
                  borderTop: `3px solid ${R}`,
                  paddingTop: "2rem",
                  backgroundColor: "#FFFFFF",
                  padding: "2rem",
                  height: "100%",
                }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 400, color: BK, marginBottom: "0.75rem" }}>{d.title}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.75, color: MID }}>{d.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: R, padding: "6rem 2rem", position: "relative", overflow: "hidden" }} className="section-padding">
        <div style={{ position: "absolute", right: "-40px", top: "50%", transform: "translateY(-50%) rotate(45deg)", width: "200px", height: "200px", backgroundColor: "rgba(0,0,0,0.08)" }} />
        <div style={{ position: "absolute", left: "-60px", bottom: "-60px", width: "150px", height: "150px", transform: "rotate(45deg)", border: "1px solid rgba(255,255,255,0.08)" }} />
        <ScrollReveal>
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" as const, position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#FFFFFF", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Not sure which service fits your project?
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: "2.5rem" }}>
              A 30-minute conversation is usually enough to determine the right path.
            </p>
            <Link href="/contact" className="btn-white" style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              color: R,
              padding: "1.1rem 2.5rem",
            }}>
              Schedule a Consultation
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
