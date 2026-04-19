import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Eyebrow from "@/components/Eyebrow";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Resources | Custom Home Building Guides & Information",
  description: "Explore Benchmark's library of resources for building a custom home in Central Washington: cost guides, financing information, FAQs, and client testimonials.",
};

const R   = "#C41E2A";
const BK  = "#231F20";
const MID = "#6B6568";
const LG  = "#F5F4F4";

const resources = [
  {
    title: "Cost Guide",
    description: "Understand the factors that affect custom home building costs in Central Washington. No vague cost-per-square-foot numbers — real context for planning your investment.",
    href: "/cost-guide",
    eyebrow: "Most Popular",
  },
  {
    title: "Financing Guide",
    description: "Learn about construction loan types, budget planning frameworks, and how to navigate the financing process for a custom home build.",
    href: "/financing",
    eyebrow: "Financial Planning",
  },
  {
    title: "Frequently Asked Questions",
    description: "Answers to the most common questions we hear from prospective clients about timelines, costs, processes, and what to expect.",
    href: "/faq",
    eyebrow: "Common Questions",
  },
  {
    title: "Client Testimonials",
    description: "Read what homeowners across Central Washington say about their experience building with Benchmark. Real families, real projects, real results.",
    href: "/testimonials",
    eyebrow: "Client Stories",
  },
];

export default function Resources() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "10rem 2rem 5rem", borderBottom: `3px solid ${R}`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "8%", top: "55%", width: "100px", height: "100px", transform: "rotate(45deg)", border: "1px solid rgba(196,30,42,0.06)" }} />
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Resources", href: "/resources" }]} />
        <div style={{ maxWidth: "1320px", margin: "0 auto", paddingTop: "1rem" }}>
          <Eyebrow>Resources</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 300, color: BK, lineHeight: 1.05, maxWidth: "700px" }}>
            Knowledge that{" "}
            <em style={{ fontStyle: "italic", color: R }}>protects your investment.</em>
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.8, color: MID, maxWidth: "560px", marginTop: "1.5rem" }}>
            Building a custom home is one of the most significant investments you&apos;ll make. These resources help you approach it with clarity and confidence.
          </p>
        </div>
      </section>

      {/* Resource cards */}
      <section style={{ backgroundColor: LG, padding: "7rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }} className="two-col">
            {resources.map((resource, i) => (
              <ScrollReveal key={resource.title} delay={i * 80}>
                <Link href={resource.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div className="card-lift" style={{
                    backgroundColor: "#FFFFFF",
                    borderTop: `3px solid ${R}`,
                    padding: "2.5rem",
                    height: "100%",
                    transition: "transform 0.35s ease, box-shadow 0.35s ease",
                  }}>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: R, marginBottom: "1rem" }}>
                      {resource.eyebrow}
                    </div>
                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 400, color: BK, marginBottom: "1rem", lineHeight: 1.2 }}>
                      {resource.title}
                    </h2>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.75, color: MID, marginBottom: "1.5rem" }}>
                      {resource.description}
                    </p>
                    <span className="link-underline-dark" style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>
                      Read More →
                    </span>
                  </div>
                </Link>
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
              Have a specific question?
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: "2.5rem" }}>
              We&apos;re happy to answer anything about custom home building in Central Washington.
            </p>
            <Link href="/contact" className="btn-white" style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: R, padding: "1.1rem 2.5rem" }}>
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
