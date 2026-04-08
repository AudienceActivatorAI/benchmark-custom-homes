"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/lib/site-config";

const R   = "#C41E2A";
const BK  = "#231F20";
const MID = "#6B6568";
const LG  = "#F5F4F4";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", budget: "", timeline: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "10rem 2rem 5rem", borderBottom: `3px solid ${R}`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "8%", top: "55%", width: "100px", height: "100px", transform: "rotate(45deg)", border: "1px solid rgba(196,30,42,0.06)" }} />
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{ width: "2rem", height: "2px", backgroundColor: R, display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: R }}>Start a Project</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 300, color: BK, lineHeight: 1.05, maxWidth: "700px" }}>
            Let&apos;s talk about<br />
            <em style={{ fontStyle: "italic", color: R }}>what you&apos;re building.</em>
          </h1>
        </div>
      </section>

      {/* Form section */}
      <section style={{ backgroundColor: LG, padding: "7rem 2rem" }} className="section-padding">
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "6rem" }} className="contact-grid">
          {/* Left column */}
          <ScrollReveal variant="left">
            <div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: MID, marginBottom: "3rem" }}>
                We accept a limited number of new projects each year. If your project aligns with what we build, we&apos;ll respond within one business day to schedule an introductory call.
              </p>
              {[
                { label: "Location", content: `${siteConfig.hq.city}, ${siteConfig.hq.state}\nServing ${siteConfig.hq.region}`, href: "" },
                { label: "Email",    content: siteConfig.email,  href: siteConfig.emailHref },
              ].map((item) => (
                <div key={item.label} style={{ marginBottom: "2rem" }}>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: R, marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ width: "8px", height: "1px", backgroundColor: R }} />
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: MID, textDecoration: "none", transition: "color 0.2s ease" }}>{item.content}</a>
                  ) : (
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: MID, lineHeight: 1.7, whiteSpace: "pre-line" as const }}>{item.content}</p>
                  )}
                </div>
              ))}
              <div style={{ marginTop: "2.5rem", padding: "2rem", backgroundColor: "#FFFFFF", borderLeft: `3px solid ${R}`, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 300, fontStyle: "italic", color: BK, lineHeight: 1.5 }}>
                  &ldquo;Every project begins with a conversation — not a quote.&rdquo;
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "#A8A4A5", marginTop: "0.75rem" }}>— Warren Taylor, Owner</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right column - Form */}
          <ScrollReveal delay={150}>
            <div style={{ backgroundColor: "#FFFFFF", padding: "3rem", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
              {submitted ? (
                <div style={{ textAlign: "center" as const, padding: "4rem 2rem" }}>
                  <div className="diamond-pulse" style={{ width: "20px", height: "20px", backgroundColor: R, margin: "0 auto 2rem" }} />
                  <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 300, color: BK, marginBottom: "1rem" }}>Thank you.</h2>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.8, color: MID, marginBottom: "2.5rem" }}>
                    We&apos;ve received your inquiry and will be in touch within one business day.
                  </p>
                  <Link href="/" className="link-underline-dark" style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
                    Return Home →
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem 2.5rem", marginBottom: "2rem" }} className="form-grid">
                    <div>
                      <label style={{
                        fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em",
                        textTransform: "uppercase" as const, color: "#A8A4A5", display: "block", marginBottom: "0.35rem",
                      }}>Full Name *</label>
                      <input
                        required
                        className="form-input"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="James Hamilton"
                      />
                    </div>
                    <div>
                      <label style={{
                        fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em",
                        textTransform: "uppercase" as const, color: "#A8A4A5", display: "block", marginBottom: "0.35rem",
                      }}>Email Address *</label>
                      <input
                        required
                        type="email"
                        className="form-input"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="james@company.com"
                      />
                    </div>
                    <div>
                      <label style={{
                        fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em",
                        textTransform: "uppercase" as const, color: "#A8A4A5", display: "block", marginBottom: "0.35rem",
                      }}>Phone Number</label>
                      <input
                        className="form-input"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(509) 000-0000"
                      />
                    </div>
                    <div>
                      <label style={{
                        fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em",
                        textTransform: "uppercase" as const, color: "#A8A4A5", display: "block", marginBottom: "0.35rem",
                      }}>Project Type *</label>
                      <select
                        required
                        className="form-input"
                        style={{ cursor: "pointer" }}
                        value={form.projectType}
                        onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      >
                        <option value="">Select a type</option>
                        <option value="custom-build">Custom Home Build</option>
                        <option value="teardown-rebuild">Teardown & Rebuild</option>
                        <option value="luxury-remodel">Luxury Remodel</option>
                        <option value="not-sure">Not Sure Yet</option>
                      </select>
                    </div>
                    <div>
                      <label style={{
                        fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em",
                        textTransform: "uppercase" as const, color: "#A8A4A5", display: "block", marginBottom: "0.35rem",
                      }}>Desired Location</label>
                      <select
                        className="form-input"
                        style={{ cursor: "pointer" }}
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      >
                        <option value="">Select an area</option>
                        <option value="ellensburg">Ellensburg</option>
                        <option value="cle-elum">Cle Elum</option>
                        <option value="kittitas-county">Kittitas County</option>
                        <option value="yakima-valley">Yakima Valley</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={{
                        fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em",
                        textTransform: "uppercase" as const, color: "#A8A4A5", display: "block", marginBottom: "0.35rem",
                      }}>Desired Start Timeline</label>
                      <select
                        className="form-input"
                        style={{ cursor: "pointer" }}
                        value={form.timeline}
                        onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                      >
                        <option value="">Select a timeline</option>
                        <option value="asap">As soon as possible</option>
                        <option value="6-months">Within 6 months</option>
                        <option value="6-12-months">6–12 months</option>
                        <option value="12-months-plus">12+ months</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: "2.5rem" }}>
                    <label style={{
                      fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em",
                      textTransform: "uppercase" as const, color: "#A8A4A5", display: "block", marginBottom: "0.35rem",
                    }}>Tell us about your project</label>
                    <textarea
                      rows={5}
                      className="form-input"
                      style={{ resize: "vertical" as const, paddingTop: "1rem" }}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Lot details, square footage goals, architectural preferences, timeline considerations..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-red"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase" as const,
                      padding: "1.1rem 2.5rem",
                      border: "none",
                      display: "inline-block",
                    }}
                  >
                    Submit Inquiry
                  </button>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "#A8A4A5", marginTop: "1rem", letterSpacing: "0.02em" }}>
                    Confidential · Response within one business day
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
