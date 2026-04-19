import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Eyebrow from "@/components/Eyebrow";
import Breadcrumb from "@/components/Breadcrumb";
import { getMarissaDisplayName, siteConfig } from "@/lib/site-config";

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
  { title: "Transparency",    body: "No client portal required — you stay informed with clear communication, budget and schedule visibility, and photo documentation when you need it." },
  { title: "Craft",           body: `We source materials and tradespeople that the top 1% of ${siteConfig.hq.region} builders rely on. Finish quality you\u2019ll notice for decades.` },
];

const team = [
  {
    name: "Warren Taylor",
    title: "Owner / General Contractor",
    years: "30 years",
    bio: "A lifetime Washington resident, Warren has been a licensed General Contractor for 30 years, starting on the Olympic Peninsula in 1996 and relocating to Central Washington several years ago. He seeks out challenging, diverse work — from custom homes and additions to full updates and renovations. Warren spends most of his time in the field monitoring quality and schedule so every phase meets the highest standard. Alongside deep hands-on experience, he brings strong project management: organizing trades day to day for the good of the project. He earned his Construction Management Certificate from the University of Washington in 2002.",
  },
  {
    name: "Abel Garcia",
    title: "Project Manager",
    years: "10 years",
    bio: "Abel has worked alongside Warren for the past 10 years. His eye for detail and his organizational skills keep projects moving. Strong relationships with subcontractors and suppliers give him firm control of each job. Abel handles daily scheduling, inspections, quality control, and site management. Suppliers and trades know him as a sharp problem solver and highly resourceful partner in the field.",
  },
  {
    name: getMarissaDisplayName(),
    title: "Business Manager & Purchasing Agent",
    years: "20+ years",
    bio: `${getMarissaDisplayName()} coordinates purchasing for every project under construction. She works with clients and interior designers to supply the information and materials field leadership needs so the build matches the client\u2019s specifications. On the business side, she oversees bookkeeping so reliable trades are paid on budget and on time. She has more than 20 years in the industry.`,
  },
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
              Thirty years. One standard.
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: MID, marginBottom: "1.25rem" }}>
              Benchmark is led by Warren Taylor, a lifelong Washington resident and licensed General Contractor with three decades in the field. He started on the Olympic Peninsula in 1996 before bringing the same hands-on approach to Central Washington — custom homes, additions, and full renovations. Warren earned his Construction Management Certificate from the University of Washington in 2002 and spends most of his time on site guarding quality, schedule, and coordination across every trade.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: MID, marginBottom: "1.25rem" }}>
              Across {siteConfig.hq.region}, from ranch estates in the Kittitas Valley to mountain retreats near Cle Elum, each home is a reflection of a family&apos;s vision, delivered without compromise. We&apos;ve earned a reputation that produces more referrals than any advertising campaign ever could.
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
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "3.5rem", marginTop: "2.5rem" }}>
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 80}>
                <div
                  className="team-bio-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(200px, 260px) 1fr",
                    gap: "2.5rem",
                    alignItems: "start",
                    paddingBottom: "3.5rem",
                    borderBottom: i < team.length - 1 ? "1px solid #E5E3E3" : "none",
                  }}
                >
                  <div
                    className="portfolio-card"
                    style={{
                      aspectRatio: "3/4",
                      maxWidth: "260px",
                      width: "100%",
                      position: "relative",
                      overflow: "hidden",
                      backgroundColor: BK,
                    }}
                  >
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #2E2B2C 0%, #1A1718 100%)" }} />
                    <div style={{ position: "absolute", bottom: "1rem", right: "1rem", width: "10px", height: "10px", backgroundColor: R, transform: "rotate(45deg)" }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)", fontWeight: 400, color: "#231F20", marginBottom: "0.35rem" }}>{member.name}</h3>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: R, marginBottom: "0.35rem", letterSpacing: "0.06em", textTransform: "uppercase" as const }}>{member.title}</p>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "#A8A4A5", marginBottom: "1.25rem" }}>{member.years} in the industry</p>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.85, color: MID, margin: 0 }}>{member.bio}</p>
                  </div>
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
