import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Eyebrow from "@/components/Eyebrow";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { generateReviewSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Testimonials | What Our Clients Say About Benchmark",
  description: "Read what homeowners across Central Washington say about building with Benchmark Custom Homes. Real reviews from real clients in Ellensburg, Cle Elum, and Kittitas County.",
};

const R   = "#C41E2A";
const BK  = "#231F20";
const MID = "#6B6568";
const LG  = "#F5F4F4";

const testimonials = [
  { author: "Michael & Sarah T.", rating: 5, body: "We interviewed four builders. Benchmark was the only team that could explain exactly what would happen, when, and why. That level of clarity made our decision easy.", date: "2024-06-15", location: "Ellensburg, WA" },
  { author: "David & Jennifer R.", rating: 5, body: "Our mountain retreat at Cle Elum was a complex project with strict HOA requirements and challenging terrain. Benchmark navigated every obstacle with solutions, not excuses. The home exceeded what we imagined.", date: "2024-03-20", location: "Cle Elum, WA" },
  { author: "Robert & Lisa M.", rating: 5, body: "What impressed us most was the project portal. Every day we could see exactly what was happening, what was spent, and what was coming next. No other builder offered that transparency.", date: "2023-11-08", location: "Kittitas County, WA" },
  { author: "James & Amanda P.", rating: 5, body: "We were nervous about building on a rural parcel with well and septic requirements. Benchmark had done it dozens of times and handled every complication before it became our problem.", date: "2023-08-12", location: "Ellensburg, WA" },
  { author: "Thomas & Maria G.", rating: 5, body: "The fixed-price contract was what sold us. After hearing horror stories from friends whose builds went 30\u201340% over budget, knowing our final number upfront gave us real peace of mind.", date: "2023-05-22", location: "Yakima Valley, WA" },
  { author: "Steven & Karen L.", rating: 5, body: "From the first meeting to handing us the keys, David and his team treated our project like it was the only one on their schedule. The attention to detail in the finish work is extraordinary.", date: "2022-12-01", location: "Cle Elum, WA" },
];

export default function Testimonials() {
  return (
    <>
      <JsonLd data={generateReviewSchema(testimonials)} />

      {/* Header */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "10rem 2rem 5rem", borderBottom: `3px solid ${R}`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "8%", top: "55%", width: "120px", height: "120px", transform: "rotate(45deg)", border: "1px solid rgba(196,30,42,0.06)" }} />
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Testimonials", href: "/testimonials" }]} />
        <div style={{ maxWidth: "1320px", margin: "0 auto", paddingTop: "1rem" }}>
          <Eyebrow>Client Testimonials</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 300, color: BK, lineHeight: 1.05, maxWidth: "700px" }}>
            Built on trust.{" "}
            <em style={{ fontStyle: "italic", color: R }}>Proven by results.</em>
          </h1>
        </div>
      </section>

      {/* Testimonials grid */}
      <section style={{ backgroundColor: LG, padding: "7rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }} className="two-col">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.author} delay={i * 80}>
                <div style={{
                  backgroundColor: "#FFFFFF",
                  padding: "2.5rem",
                  borderTop: `3px solid ${R}`,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column" as const,
                  justifyContent: "space-between",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                }} className="card-lift">
                  <div>
                    <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1.5rem" }}>
                      {[...Array(t.rating)].map((_, j) => (
                        <span key={j} style={{ color: R, fontSize: "0.85rem" }}>★</span>
                      ))}
                    </div>
                    <blockquote style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.1rem",
                      fontWeight: 300,
                      fontStyle: "italic",
                      lineHeight: 1.6,
                      color: BK,
                      marginBottom: "1.5rem",
                    }}>
                      &ldquo;{t.body}&rdquo;
                    </blockquote>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E5E3E3", paddingTop: "1rem" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 600, color: BK }}>{t.author}</div>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "#A8A4A5" }}>{t.location}</div>
                    </div>
                    <div style={{ width: "8px", height: "8px", backgroundColor: R, transform: "rotate(45deg)" }} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: BK, padding: "6rem 2rem" }} className="section-padding">
        <ScrollReveal>
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" as const }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
              <div className="diamond-pulse" style={{ width: "16px", height: "16px", backgroundColor: R }} />
            </div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#F5F4F4", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Join 140+ families who&apos;ve built with Benchmark.
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, color: MID, marginBottom: "2.5rem" }}>
              Your project starts with a conversation. Let&apos;s talk about what you&apos;re building.
            </p>
            <Link href="/contact" className="btn-red" style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, padding: "1.1rem 2.5rem" }}>
              Schedule a Consultation
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
