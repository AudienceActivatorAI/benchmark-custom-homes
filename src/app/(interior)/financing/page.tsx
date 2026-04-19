import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Eyebrow from "@/components/Eyebrow";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Financing | Construction Loans & Budget Planning for Custom Homes",
  description: "Learn about construction loan types, budget planning frameworks, and how Benchmark Custom Homes helps you navigate financing your custom home build in Central Washington.",
};

const R   = "#C41E2A";
const BK  = "#231F20";
const MID = "#6B6568";
const LG  = "#F5F4F4";

const loanTypes = [
  { title: "Construction-to-Permanent Loan", description: "A single loan that converts from a construction loan to a traditional mortgage once the home is complete. One closing, one set of fees. This is the most common financing structure for custom builds.", features: ["Single closing reduces costs", "Rate lock available during construction", "Interest-only payments during build phase", "Converts to 15 or 30-year mortgage at completion"] },
  { title: "Stand-Alone Construction Loan", description: "A short-term loan covering only the construction period. You refinance into a permanent mortgage at completion. This offers flexibility to shop for the best permanent rate when the home is finished.", features: ["Flexibility to choose permanent lender later", "Interest-only during construction", "Requires two closings (higher total closing costs)", "Best when rates are expected to drop"] },
  { title: "Land + Construction Loan", description: "Covers both land purchase and construction in a single financing package. Ideal if you haven\u2019t yet acquired your building lot.", features: ["Finance land and construction together", "Reduces total closing costs", "Simplified single-lender relationship", "Available for raw and improved lots"] },
];

const budgetFramework = [
  { number: "01", title: "Land Acquisition", description: "Your lot cost, including any site improvements needed before construction can begin. Consider access, utilities, and terrain." },
  { number: "02", title: "Design & Engineering", description: "Architectural design, structural engineering, civil engineering, geotechnical reports, and interior design fees." },
  { number: "03", title: "Permitting & Fees", description: "Building permits, impact fees, utility connection fees, and any HOA or design review fees." },
  { number: "04", title: "Construction", description: "The core build cost, including all materials, labor, subcontractors, and project management. This is where a fixed-price contract provides certainty." },
  { number: "05", title: "Contingency", description: "A responsible budget includes 5\u201310% contingency for owner-requested changes. With a fixed-price contract from Benchmark, builder-side contingency is our responsibility, not yours." },
];

export default function Financing() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "10rem 2rem 5rem", borderBottom: `3px solid ${R}`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "8%", top: "55%", width: "120px", height: "120px", transform: "rotate(45deg)", border: "1px solid rgba(196,30,42,0.06)" }} />
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Resources", href: "/resources" }, { name: "Financing", href: "/financing" }]} />
        <div style={{ maxWidth: "1320px", margin: "0 auto", paddingTop: "1rem" }}>
          <Eyebrow>Financing</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300, color: BK, lineHeight: 1.1, maxWidth: "750px" }}>
            Understanding construction loans{" "}
            <em style={{ fontStyle: "italic", color: R }}>and budget planning.</em>
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.8, color: MID, maxWidth: "600px", marginTop: "1.5rem" }}>
            Building a custom home requires different financing than buying an existing one. Here&apos;s what you need to know.
          </p>
        </div>
      </section>

      {/* Loan types */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "7rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <ScrollReveal>
            <Eyebrow>Loan Types</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 300, color: BK, lineHeight: 1.15, marginBottom: "3rem" }}>
              Common financing structures for custom builds.
            </h2>
          </ScrollReveal>
          {loanTypes.map((loan, i) => (
            <ScrollReveal key={loan.title} delay={100}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4rem",
                paddingBottom: "4rem",
                marginBottom: "4rem",
                borderBottom: i < loanTypes.length - 1 ? "1px solid #E5E3E3" : "none",
                alignItems: "start",
              }} className="service-row">
                <div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 400, color: BK, marginBottom: "1rem" }}>{loan.title}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.8, color: MID }}>{loan.description}</p>
                </div>
                <div style={{ backgroundColor: LG, padding: "2rem", borderTop: `3px solid ${R}` }}>
                  {loan.features.map((f) => (
                    <div key={f} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                      <div style={{ width: "6px", height: "6px", backgroundColor: R, transform: "rotate(45deg)", flexShrink: 0, marginTop: "0.35rem" }} />
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.6, color: BK }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Budget framework */}
      <section style={{ backgroundColor: LG, padding: "7rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <ScrollReveal>
            <Eyebrow>Budget Planning</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 300, color: BK, lineHeight: 1.15, marginBottom: "3rem", maxWidth: "600px" }}>
              A framework for planning your total investment.
            </h2>
          </ScrollReveal>
          {budgetFramework.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 60}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "3rem 1fr",
                gap: "2rem",
                paddingBottom: "2rem",
                marginBottom: "2rem",
                borderBottom: i < budgetFramework.length - 1 ? "1px solid #E5E3E3" : "none",
              }}>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", color: R, paddingTop: "0.3rem" }}>{step.number}</div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 400, color: BK, marginBottom: "0.5rem" }}>{step.title}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.75, color: MID }}>{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* How Benchmark helps */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "6rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="two-col">
          <ScrollReveal variant="left">
            <Eyebrow>How Benchmark Helps</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 300, color: BK, lineHeight: 1.2, marginBottom: "1.5rem" }}>
              We work alongside your lender from day one.
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: MID, marginBottom: "1rem" }}>
              Construction lenders require detailed project documentation: specifications, draw schedules, builder qualifications, and insurance certificates. We prepare all of it.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: MID }}>
              Our fixed-price contracts simplify the loan process because lenders have certainty about the total construction cost. This reduces appraisal gaps and accelerates approvals.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0" }}>
              {[
                { title: "Full documentation package", body: "Specs, plans, and draw schedule prepared for your lender." },
                { title: "Draw schedule management",   body: "We coordinate inspections and disbursements on schedule." },
                { title: "Builder qualification package",body: "License, insurance, and project history ready for review." },
                { title: "Lender referrals",            body: "We can connect you with lenders experienced in construction financing." },
              ].map((item) => (
                <div key={item.title} style={{
                  display: "flex",
                  gap: "1.5rem",
                  padding: "1.5rem 0",
                  borderBottom: "1px solid #E5E3E3",
                  alignItems: "flex-start",
                }}>
                  <div style={{ width: "8px", height: "8px", backgroundColor: R, transform: "rotate(45deg)", flexShrink: 0, marginTop: "0.4rem" }} />
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

      {/* CTA */}
      <section style={{ backgroundColor: R, padding: "6rem 2rem", position: "relative", overflow: "hidden" }} className="section-padding">
        <div style={{ position: "absolute", right: "-40px", top: "50%", transform: "translateY(-50%) rotate(45deg)", width: "200px", height: "200px", backgroundColor: "rgba(0,0,0,0.08)" }} />
        <ScrollReveal>
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" as const, position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#FFFFFF", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Ready to discuss financing for your project?
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: "2.5rem" }}>
              We&apos;ll help you understand the full financial picture before any commitments are made.
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
