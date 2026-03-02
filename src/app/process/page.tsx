import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Eyebrow from "@/components/Eyebrow";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Our Process | How We Build Custom Homes",
  description: "Benchmark\u2019s five-phase custom home building process: Discovery, Design, Pre-Construction, Construction, and Completion. Structured, transparent, and designed to protect your investment.",
};

const R   = "#C41E2A";
const BK  = "#231F20";
const MID = "#6B6568";
const LG  = "#F5F4F4";

const phases = [
  { number: "01", title: "Discovery & Vision",    duration: "2\u20133 weeks",   description: "Every project begins with listening. We conduct a structured discovery process to understand how you live, what you value architecturally, and what success looks like to you.", details: ["In-depth lifestyle and program consultation", "Site assessment and feasibility review", "Budget range discussion and preliminary scoping", "Architect and design team introductions if needed"] },
  { number: "02", title: "Design & Specification", duration: "6\u201312 weeks", description: "We translate your vision into precise architectural plans with full material specifications \u2014 eliminating ambiguity before construction begins.", details: ["Architectural drawings and permit set preparation", "Full material and finish specification package", "Fixed-price or GMP proposal with detailed line items", "Interior design coordination"] },
  { number: "03", title: "Pre-Construction",       duration: "4\u20138 weeks",  description: "The work that prevents problems. Before a single shovel breaks ground, every supplier, subcontractor, and schedule is locked.", details: ["Subcontractor bidding and selection", "Material procurement and long-lead ordering", "Permit acquisition and utility coordination", "Master schedule and milestone planning"] },
  { number: "04", title: "Construction",           duration: "10\u201318 months", description: "Our project managers are on-site every day. You have direct access to your project portal with daily photo updates, budget tracking, and schedule visibility.", details: ["Dedicated project manager assigned to your build", "Weekly written client updates", "Real-time project portal access", "Monthly budget reviews and change order transparency"] },
  { number: "05", title: "Completion & Warranty",  duration: "2\u20133 weeks",  description: "A structured final walkthrough, a documented punch list resolved before keys are exchanged, and a two-year craftsmanship warranty.", details: ["Formal pre-completion inspection", "Full punch list documented and completed", "Systems orientation and home manual", "Two-year Benchmark craftsmanship warranty"] },
];

export default function Process() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "10rem 2rem 5rem", borderBottom: `3px solid ${R}`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "8%", top: "55%", width: "100px", height: "100px", transform: "rotate(45deg)", border: "1px solid rgba(196,30,42,0.06)" }} />
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Our Process", href: "/process" }]} />
        <div style={{ maxWidth: "1320px", margin: "0 auto", paddingTop: "1rem" }}>
          <Eyebrow>How We Build</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 300, color: BK, lineHeight: 1.05, maxWidth: "700px" }}>
            Process is the product.
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.8, color: MID, maxWidth: "560px", marginTop: "1.5rem" }}>
            The homes we deliver are only as good as the process that creates them. Ours is structured, transparent, and designed to protect your investment at every stage.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "6rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          {phases.map((phase, i) => (
            <ScrollReveal key={phase.number} delay={80}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr 1fr",
                gap: "3rem",
                paddingBottom: "4rem",
                marginBottom: "4rem",
                borderBottom: i < phases.length - 1 ? "1px solid #E5E3E3" : "none",
                alignItems: "start",
              }} className="phase-row">
                <div style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "3rem",
                  fontWeight: 300,
                  color: R,
                  lineHeight: 1,
                  opacity: 0.4,
                  transition: "opacity 0.35s ease",
                }}>{phase.number}</div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem", flexWrap: "wrap" as const }}>
                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 400, color: BK, lineHeight: 1 }}>{phase.title}</h2>
                    <span style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.65rem",
                      color: R,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase" as const,
                      border: "1px solid rgba(196,30,42,0.3)",
                      padding: "0.3rem 0.75rem",
                      whiteSpace: "nowrap" as const,
                    }}>{phase.duration}</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.8, color: MID }}>{phase.description}</p>
                </div>
                <div style={{
                  backgroundColor: LG,
                  padding: "1.75rem",
                  transition: "box-shadow 0.35s ease",
                }}>
                  {phase.details.map((d) => (
                    <div key={d} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                      <div style={{ width: "6px", height: "6px", backgroundColor: R, transform: "rotate(45deg)", flexShrink: 0, marginTop: "0.35rem" }} />
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.6, color: MID }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Guarantee strip */}
      <section style={{ backgroundColor: LG, padding: "5rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <ScrollReveal variant="stagger">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }} className="guarantee-grid">
              {[
                { value: "Fixed Price",    label: "We honor our bids. No surprise invoices after contracts are signed." },
                { value: "On Schedule",    label: "95% of Benchmark projects are completed within the contracted timeline." },
                { value: "2-Year Warranty",label: "Full craftsmanship warranty on every project. No fine print." },
              ].map((g) => (
                <div key={g.value} className="card-lift" style={{
                  backgroundColor: "#FFFFFF",
                  borderTop: `3px solid ${R}`,
                  padding: "2.5rem",
                }}>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 400, color: BK, marginBottom: "0.75rem" }}>{g.value}</div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: MID }}>{g.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: R, padding: "6rem 2rem", position: "relative", overflow: "hidden" }} className="section-padding">
        <div style={{ position: "absolute", right: "-40px", top: "50%", transform: "translateY(-50%) rotate(45deg)", width: "200px", height: "200px", backgroundColor: "rgba(0,0,0,0.08)" }} />
        <div style={{ position: "absolute", left: "-60px", bottom: "-60px", width: "150px", height: "150px", transform: "rotate(45deg)", border: "1px solid rgba(255,255,255,0.08)" }} />
        <ScrollReveal>
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" as const, position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#FFFFFF", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Ready to see this process in action?
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: "2.5rem" }}>
              Schedule a consultation and we&apos;ll walk you through exactly how a Benchmark project unfolds.
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
