"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function VideoHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{ position: "relative", height: "100vh", minHeight: "600px", maxHeight: "1100px", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>

      {/* ── Video background ───────────────────────────────────── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* ── Cinematic overlay ─────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.75) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── Subtle vignette ───────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.25) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── Red bottom accent ─────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #C41E2A 0%, #D94455 50%, #C41E2A 100%)",
          zIndex: 3,
        }}
      />

      {/* ── Content ──────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "1320px",
          width: "100%",
          margin: "0 auto",
          padding: "0 2rem 5rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Eyebrow */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1.5rem",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
          transitionDelay: "0.3s",
        }}>
          <span style={{ width: "2rem", height: "2px", backgroundColor: "#C41E2A", display: "inline-block" }} />
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C41E2A" }}>
            {siteConfig.tagline}
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "flex-end" }} className="hero-grid">
          {/* Headline + CTAs */}
          <div>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(3rem, 5.5vw, 5.25rem)",
                fontWeight: 300,
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                marginBottom: "2rem",
                textShadow: "0 2px 30px rgba(0,0,0,0.25)",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
                transitionDelay: "0.5s",
              }}
            >
              Homes built to the<br />
              <em style={{ fontStyle: "italic", color: "#E8505C" }}>highest standard.</em>
            </h1>
            <div style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap" as const,
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: "0.75s",
            }}>
              <Link
                href="/contact"
                className="btn-red"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase" as const,
                  padding: "1rem 2rem",
                }}
              >
                Start a Conversation
              </Link>
              <Link
                href="/portfolio"
                className="btn-outline-light"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase" as const,
                  padding: "1rem 2rem",
                }}
              >
                View Portfolio
              </Link>
            </div>
          </div>

          {/* Stats — semi-transparent on dark */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2px",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: "0.9s",
          }}>
            {[
              { value: siteConfig.stats.years,              label: siteConfig.stats.yearsLabel },
              { value: siteConfig.stats.clientSatisfaction, label: siteConfig.stats.clientSatisfactionLabel },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  backgroundColor: "rgba(0,0,0,0.4)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  borderTop: "2px solid #C41E2A",
                  padding: "1.75rem",
                  transition: "background-color 0.3s ease",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.25rem",
                  fontWeight: 300,
                  color: "#E8505C",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}>{stat.value}</div>
                <div style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.4,
                  letterSpacing: "0.02em",
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator (desktop only) ───────────────────── */}
      <div style={{
        position: "absolute",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        opacity: loaded ? 0.4 : 0,
        transition: "opacity 1s ease",
        transitionDelay: "1.5s",
      }}
        className="scroll-indicator"
      >
        <div style={{
          width: "1px",
          height: "32px",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            width: "1px",
            height: "100%",
            backgroundColor: "rgba(255,255,255,0.6)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }} />
        </div>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { transform: translateY(-100%); opacity: 0; }
          50% { transform: translateY(0); opacity: 1; }
        }
        @media (max-width: 768px) {
          .scroll-indicator { display: none !important; }
        }
      `}</style>
    </section>
  );
}
