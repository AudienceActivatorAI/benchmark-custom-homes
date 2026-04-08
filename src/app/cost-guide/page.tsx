import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Eyebrow from "@/components/Eyebrow";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Cost Guide | How Much Does It Cost to Build a Custom Home in Central Washington?",
  description: "Understand the factors that affect custom home building costs in Central Washington. Learn about site costs, material choices, and how Benchmark's fixed-price contracts protect your investment.",
};

const R   = "#C41E2A";
const BK  = "#231F20";
const MID = "#6B6568";
const LG  = "#F5F4F4";

const costFactors = [
  { title: "Lot & Site Conditions", items: ["Terrain grading and excavation", "Soil testing and geotechnical reports", "Access road construction (rural parcels)", "Retaining walls and drainage systems"] },
  { title: "Size & Complexity", items: ["Total square footage and floor count", "Architectural complexity (rooflines, cantilevers)", "Structural requirements (snow load, wind, seismic)", "Basement or walk-out lower level"] },
  { title: "Finishes & Materials", items: ["Cabinetry and countertop selections", "Flooring materials and installation", "Window and door packages", "Exterior cladding and roofing"] },
  { title: "Systems & Infrastructure", items: ["HVAC system type (forced air, radiant, geothermal)", "Electrical and smart home infrastructure", "Plumbing fixtures and water systems", "Energy efficiency and insulation package"] },
];

const centralWACosts = [
  { title: "Well & Water Systems", description: "Most rural Central Washington parcels require a private well. Drilling depths range from 100 to 400+ feet depending on location, with costs varying significantly by geology and depth." },
  { title: "Septic Systems", description: "Outside city limits, engineered septic systems are required. Soil percolation testing, system design, and installation are essential pre-construction steps that affect both timeline and budget." },
  { title: "Snow Load Engineering", description: "Mountain-adjacent builds near Cle Elum and Suncadia require structural engineering for heavy snow loads (60\u201380+ psf), which affects framing, roofing, and foundation design." },
  { title: "Rural Power & Utilities", description: "Some parcels require power line extensions, transformer installations, or upgraded service from rural utility cooperatives \u2014 costs that urban builders rarely encounter." },
  { title: "Seasonal Construction Windows", description: "Central Washington\u2019s climate creates distinct building seasons. Strategic scheduling around weather patterns prevents delays and protects quality." },
  { title: "County Permitting", description: "Kittitas County and Yakima County have distinct permitting processes, timelines, and requirements that differ from city jurisdictions. Experience with local officials matters." },
];

export default function CostGuide() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "10rem 2rem 5rem", borderBottom: `3px solid ${R}`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "8%", top: "55%", width: "120px", height: "120px", transform: "rotate(45deg)", border: "1px solid rgba(196,30,42,0.06)" }} />
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Resources", href: "/resources" }, { name: "Cost Guide", href: "/cost-guide" }]} />
        <div style={{ maxWidth: "1320px", margin: "0 auto", paddingTop: "1rem" }}>
          <Eyebrow>Cost Guide</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300, color: BK, lineHeight: 1.1, maxWidth: "800px" }}>
            What does it cost to build a custom home in{" "}
            <em style={{ fontStyle: "italic", color: R }}>{siteConfig.hq.region}?</em>
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.8, color: MID, maxWidth: "620px", marginTop: "1.5rem" }}>
            Every project is unique. Rather than publishing numbers that could mislead, we help you understand the factors that determine cost — so you can plan with confidence.
          </p>
        </div>
      </section>

      {/* Intro philosophy */}
      <section style={{ backgroundColor: LG, padding: "6rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="two-col">
          <ScrollReveal variant="left">
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 300, color: BK, lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Transparency starts before the first number.
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: MID, marginBottom: "1.25rem" }}>
              Most builders quote a cost-per-square-foot number. That number almost never reflects reality. It excludes site work, permits, design fees, and the dozens of decisions that actually determine what you&apos;ll spend.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: MID }}>
              At Benchmark, we walk you through a comprehensive scoping process during Discovery. By the time we present a proposal, every line item is accounted for — and protected by a fixed-price or guaranteed maximum price contract.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div style={{ backgroundColor: "#FFFFFF", borderLeft: `3px solid ${R}`, padding: "2.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 300, fontStyle: "italic", color: BK, lineHeight: 1.4, marginBottom: "1.5rem" }}>
                &ldquo;A fixed-price contract means you know what you&apos;ll pay before we break ground. That&apos;s not a promise — it&apos;s a contractual obligation.&rdquo;
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "#A8A4A5" }}>— Warren Taylor, Owner</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cost factors */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "7rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <ScrollReveal>
            <Eyebrow>Key Cost Factors</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 300, color: BK, lineHeight: 1.15, marginBottom: "3rem", maxWidth: "600px" }}>
              What actually determines the cost of your home.
            </h2>
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }} className="two-col">
            {costFactors.map((factor, i) => (
              <ScrollReveal key={factor.title} delay={i * 80}>
                <div style={{ backgroundColor: LG, borderTop: `3px solid ${R}`, padding: "2.5rem" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 400, color: BK, marginBottom: "1.25rem" }}>{factor.title}</h3>
                  {factor.items.map((item) => (
                    <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.65rem" }}>
                      <div style={{ width: "6px", height: "6px", backgroundColor: R, transform: "rotate(45deg)", flexShrink: 0, marginTop: "0.35rem" }} />
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.6, color: MID }}>{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Central WA specific */}
      <section style={{ backgroundColor: BK, padding: "7rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <ScrollReveal>
            <Eyebrow>Central Washington Considerations</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 300, color: "#F5F4F4", lineHeight: 1.15, marginBottom: "3rem", maxWidth: "650px" }}>
              Costs unique to building in {siteConfig.hq.region}.
            </h2>
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px" }} className="services-grid">
            {centralWACosts.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 60}>
                <div style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  padding: "2rem",
                  height: "100%",
                  transition: "background-color 0.35s ease",
                }}>
                  <div style={{ width: "1.5rem", height: "2px", backgroundColor: R, marginBottom: "1rem" }} />
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontWeight: 400, color: "#F5F4F4", marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.7, color: MID }}>{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How Benchmark protects */}
      <section style={{ backgroundColor: LG, padding: "6rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <ScrollReveal>
            <Eyebrow>How Benchmark Protects Your Investment</Eyebrow>
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }} className="diff-grid">
            {[
              { title: "Fixed-Price Contracts", body: "Once specifications are finalized, we commit to a fixed price. No allowances that become overages. No \u201cunforeseen conditions\u201d on work we should have anticipated." },
              { title: "Transparent Change Orders", body: "If you change something during construction, we document the cost impact before proceeding. No retroactive billing. No surprises on the final invoice." },
              { title: "Monthly Budget Reviews", body: "You receive monthly budget reports through your project portal showing exactly where your money has been allocated and what remains in each category." },
            ].map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 100}>
                <div className="card-lift" style={{ borderTop: `3px solid ${R}`, backgroundColor: "#FFFFFF", padding: "2rem", height: "100%" }}>
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
        <ScrollReveal>
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" as const, position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#FFFFFF", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Want a realistic cost conversation about your project?
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: "2.5rem" }}>
              A 30-minute consultation gives you a clear framework for understanding what your project will require.
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
