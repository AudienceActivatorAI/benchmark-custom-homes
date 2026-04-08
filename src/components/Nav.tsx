"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { label: "Process",    href: "/process" },
  { label: "Portfolio",  href: "/portfolio" },
  { label: "Services",   href: "/services" },
  { label: "Cost Guide", href: "/cost-guide" },
  { label: "About",      href: "/about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "#FFFFFF",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(229,227,227,0.8)" : "1px solid transparent",
          boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.05)" : "none",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? "70px" : "80px",
          transition: "height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <Image
              src="/benchmark-logo.png"
              alt="Benchmark Custom Homes"
              width={180}
              height={58}
              style={{
                objectFit: "contain",
                height: scrolled ? "40px" : "46px",
                width: "auto",
                transition: "height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-red"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                padding: "0.65rem 1.5rem",
                borderRadius: "1px",
              }}
            >
              Start a Project
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              width: "44px",
              height: "44px",
              position: "relative",
              zIndex: 102,
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "#231F20",
              transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.2s ease",
              transform: menuOpen ? "rotate(45deg) translate(1px, 1px)" : "none",
              transformOrigin: "center",
              position: "absolute",
              top: menuOpen ? "21px" : "14px",
            }} />
            <span style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "#231F20",
              transition: "opacity 0.2s ease",
              opacity: menuOpen ? 0 : 1,
              position: "absolute",
              top: "21px",
            }} />
            <span style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "#231F20",
              transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.2s ease",
              transform: menuOpen ? "rotate(-45deg) translate(1px, -1px)" : "none",
              transformOrigin: "center",
              position: "absolute",
              top: menuOpen ? "21px" : "28px",
            }} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div style={{ padding: "6rem 2.5rem 3rem" }}>
          {/* Main navigation */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: pathname === link.href ? 600 : 400,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase" as const,
                  color: pathname === link.href ? "#C41E2A" : "#231F20",
                  textDecoration: "none",
                  padding: "1.1rem 0",
                  borderBottom: "1px solid #F0F0EF",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  transition: "color 0.2s ease",
                }}
              >
                {pathname === link.href && (
                  <span style={{
                    width: "6px",
                    height: "6px",
                    backgroundColor: "#C41E2A",
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                  }} />
                )}
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Resources section */}
          <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid #E5E3E3" }}>
            <div style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              color: "#A8A4A5",
              marginBottom: "0.75rem",
            }}>
              Resources
            </div>
            {[
              { label: "Financing",    href: "/financing" },
              { label: "FAQ",          href: "/faq" },
              { label: "Testimonials", href: "/testimonials" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  color: pathname === link.href ? "#C41E2A" : "#6B6568",
                  textDecoration: "none",
                  padding: "0.6rem 0",
                  display: "block",
                  transition: "color 0.2s ease",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Service areas */}
          <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid #E5E3E3" }}>
            <div style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              color: "#A8A4A5",
              marginBottom: "0.75rem",
            }}>
              Service Areas
            </div>
            {[
              { label: "Ellensburg",      href: "/areas/ellensburg" },
              { label: "Cle Elum",        href: "/areas/cle-elum" },
              { label: "Kittitas County", href: "/areas/kittitas-county" },
              { label: "Yakima Valley",   href: "/areas/yakima-valley" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  color: pathname === link.href ? "#C41E2A" : "#6B6568",
                  textDecoration: "none",
                  padding: "0.6rem 0",
                  display: "block",
                  transition: "color 0.2s ease",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-red"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              padding: "1rem 2rem",
              textAlign: "center" as const,
              display: "block",
              marginTop: "2rem",
            }}
          >
            Start a Project
          </Link>

          <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #F0F0EF" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "#A8A4A5", lineHeight: 1.7 }}>
              Serving {siteConfig.serviceAreas.join(", ")}
            </p>
            <a
              href={siteConfig.emailHref}
              style={{
                display: "block",
                fontFamily: "var(--font-sans)",
                fontSize: "0.85rem",
                color: "#231F20",
                textDecoration: "none",
                marginTop: "1rem",
                fontWeight: 500,
              }}
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
