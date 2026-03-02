import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Eyebrow from "@/components/Eyebrow";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Benchmark Custom Homes | Central Washington Home Builder",
  description: `Learn about ${siteConfig.company} — ${siteConfig.stats.years} years of building precision-crafted custom homes across ${siteConfig.hq.region}.`,
};

const R   = "#C41E2A";
const BK  = "#1A1718";
const MID = "#6B6568";
const LT  = "#F0F0EF";

const values = [
  { title: "Precision",       body: "We don\u2019t do approximate. Every specification, every timeline, every cost is documented and held to." },
  { title: "Accountability",  body: "One point of contact. Full ownership. If something isn\u2019t right, we make it right \u2014 no passing responsibility." },
  { title: "Transparency",    body: "You have real-time access to your project portal, budget tracking, and schedule from day one." },
  { title: "Craft",           body: `We source materials and tradespeople that the top 1% of ${siteConfig.hq.region} builders rely on. Finish quality you\u2019ll notice for decades.` },
];

const team = [
  { name: "David Harrington", title: "Founder & Principal Builder",  years: "23 years" },
  { name: "Claire Nakamura",  title: "Director of Design",           years: "14 years" },
  { name: "James Wolff",      title: "Senior Project Manager",       years: "17 years" },
  { name: "Rachel Chen",      title: "Client Experience Lead",       years: "9 years" },
];

export default function About() {
  return (
    <>
      {/* Hero Header */}
      <section style={{ backgroundColor: BK, padding: "12rem 2rem 6rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "10%", top: "50%", transform: "translateY(-50%) rotate(45deg)", width: "200px", height: "200px", border: "1px solid rgba(255,255,255,0.03)" }} />
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
        <div style={{ maxWidth: "1320px", margin: "0 auto", position: "relative", zIndex: 1, paddingTop: "1rem" }}>
          <Eyebrow>About Benchmark</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 300, color: LT, lineHeight: 1.05, maxWidth: "700px" }}>
            Built on reputation.<br />
            <em style={{ fontStyle: "italic", color: "#D94455" }}>Sustained by craft.</em>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "7rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }} className="two-col">
          <ScrollReveal variant="left">
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 300, color: "#231F20", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Twenty-three years. One standard.
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: MID, marginBottom: "1.25rem" }}>
              Benchmark was founded in 2002 by David Harrington after a decade of project management for the region&apos;s largest commercial contractors. His conviction was simple: the discipline, precision, and accountability that define exceptional commercial construction had no reason to stop at the residential door.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: MID, marginBottom: "1.25rem" }}>
              Over two decades, we&apos;ve built more than 140 custom homes across {siteConfig.hq.region} — from ranch estates in the Kittitas Valley to mountain retreats near Cle Elum. Each one a reflection of a family&apos;s vision, delivered without compromise. We&apos;ve earned a reputation that produces more referrals than any advertising campaign ever could.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: MID }}>
              We are selective by design. Taking fewer projects than we could means every client gets the full weight of our focus.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div style={{
              aspectRatio: "3/4",
              position: "relative",
              overflow: "hidden",
              backgroundColor: BK,
            }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #1A1718 0%, #2E2B2C 100%)" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1.25rem" }}>
                <div className="diamond-pulse" style={{ width: "40px", height: "40px", backgroundColor: R }} />
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: MID, letterSpacing: "0.2em", textTransform: "uppercase" as const }}>Est. 2002 · {siteConfig.hq.city}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: BK, padding: "7rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <ScrollReveal>
            <Eyebrow>What We Stand For</Eyebrow>
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px" }} className="values-grid">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <div style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  padding: "2.5rem 2rem",
                  height: "100%",
                  transition: "background-color 0.35s ease, border-color 0.35s ease",
                }}>
                  <div style={{ width: "2rem", height: "3px", backgroundColor: R, marginBottom: "1.5rem" }} />
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 400, color: LT, marginBottom: "1rem" }}>{v.title}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.75, color: MID }}>{v.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "7rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <ScrollReveal>
            <Eyebrow>The Team</Eyebrow>
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }} className="team-grid">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 80}>
                <div>
                  <div className="portfolio-card" style={{
                    aspectRatio: "3/4",
                    marginBottom: "1.25rem",
                    position: "relative",
                    overflow: "hidden",
                    backgroundColor: BK,
                  }}>
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #2E2B2C 0%, #1A1718 100%)" }} />
                    <div style={{ position: "absolute", bottom: "1rem", right: "1rem", width: "10px", height: "10px", backgroundColor: R, transform: "rotate(45deg)" }} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontWeight: 400, color: "#231F20", marginBottom: "0.25rem" }}>{member.name}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: R, marginBottom: "0.15rem", letterSpacing: "0.05em" }}>{member.title}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "#A8A4A5" }}>{member.years} experience</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: LT, padding: "6rem 2rem" }} className="section-padding">
        <ScrollReveal>
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" as const }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#231F20", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Let&apos;s talk about your project.
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, color: MID, marginBottom: "2.5rem" }}>
              An initial consultation costs you nothing. What you&apos;ll walk away with is a clear picture of what building with Benchmark looks like.
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
