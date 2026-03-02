import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Eyebrow from "@/components/Eyebrow";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { faqItems, faqCategories, getFAQsByCategory } from "@/lib/faq-data";
import { generateFAQPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions About Custom Home Building",
  description: "Answers to common questions about building a custom home in Central Washington: costs, timelines, financing, process, and what to expect when building with Benchmark.",
};

const R   = "#C41E2A";
const BK  = "#231F20";
const MID = "#6B6568";
const LG  = "#F5F4F4";

export default function FAQ() {
  return (
    <>
      <JsonLd data={generateFAQPageSchema(faqItems)} />

      {/* Header */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "10rem 2rem 5rem", borderBottom: `3px solid ${R}`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "8%", top: "55%", width: "100px", height: "100px", transform: "rotate(45deg)", border: "1px solid rgba(196,30,42,0.06)" }} />
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Resources", href: "/resources" }, { name: "FAQ", href: "/faq" }]} />
        <div style={{ maxWidth: "1320px", margin: "0 auto", paddingTop: "1rem" }}>
          <Eyebrow>Frequently Asked Questions</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 300, color: BK, lineHeight: 1.05, maxWidth: "700px" }}>
            Questions we hear{" "}
            <em style={{ fontStyle: "italic", color: R }}>most often.</em>
          </h1>
        </div>
      </section>

      {/* FAQ sections by category */}
      <section style={{ backgroundColor: LG, padding: "7rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {faqCategories.map((cat, i) => {
            const items = getFAQsByCategory(cat.key);
            return (
              <ScrollReveal key={cat.key} delay={i * 60}>
                <div style={{ marginBottom: i < faqCategories.length - 1 ? "4rem" : "0" }}>
                  <Eyebrow>{cat.label}</Eyebrow>
                  <FAQAccordion items={items} />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: R, padding: "6rem 2rem", position: "relative", overflow: "hidden" }} className="section-padding">
        <div style={{ position: "absolute", right: "-40px", top: "50%", transform: "translateY(-50%) rotate(45deg)", width: "200px", height: "200px", backgroundColor: "rgba(0,0,0,0.08)" }} />
        <ScrollReveal>
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" as const, position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#FFFFFF", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Have a question we didn&apos;t answer?
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: "2.5rem" }}>
              We&apos;re happy to answer anything about building a custom home in Central Washington.
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
