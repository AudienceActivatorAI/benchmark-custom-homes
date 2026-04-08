import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#231F20", color: "#A8A4A5", padding: "5rem 2rem 3rem" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
            gap: "3rem",
            paddingBottom: "4rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{
                backgroundColor: "#FFFFFF",
                display: "inline-block",
                padding: "6px 12px",
                transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
              }}>
                <Image
                  src="/benchmark-logo.png"
                  alt="Benchmark Custom Homes"
                  width={160}
                  height={52}
                  style={{ objectFit: "contain", height: "38px", width: "auto", display: "block" }}
                />
              </div>
            </div>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              color: "#9B9698",
              maxWidth: "280px",
            }}>
              Precision-built custom homes for discerning clients across {siteConfig.hq.region}.
            </p>
            {/* Social placeholder */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.75rem" }}>
              {["Instagram", "Houzz", "LinkedIn"].map((social) => (
                <span
                  key={social}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase" as const,
                    color: "#3A3537",
                    padding: "0.4rem 0.75rem",
                    border: "1px solid rgba(255,255,255,0.06)",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                  className="link-ash"
                >
                  {social}
                </span>
              ))}
            </div>
          </div>

          {/* Company column */}
          <div>
            <div style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              color: "#C41E2A",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}>
              <span style={{ width: "12px", height: "1px", backgroundColor: "#C41E2A", display: "inline-block" }} />
              Company
            </div>
            {[
              { label: "Our Process",  href: "/process" },
              { label: "Portfolio",    href: "/portfolio" },
              { label: "Services",     href: "/services" },
              { label: "About",        href: "/about" },
              { label: "Contact",      href: "/contact" },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: "0.85rem" }}>
                <Link
                  href={item.href}
                  className="link-ash"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem" }}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Resources column */}
          <div>
            <div style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              color: "#C41E2A",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}>
              <span style={{ width: "12px", height: "1px", backgroundColor: "#C41E2A", display: "inline-block" }} />
              Resources
            </div>
            {[
              { label: "Cost Guide",    href: "/cost-guide" },
              { label: "Financing",     href: "/financing" },
              { label: "FAQ",           href: "/faq" },
              { label: "Testimonials",  href: "/testimonials" },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: "0.85rem" }}>
                <Link
                  href={item.href}
                  className="link-ash"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem" }}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Service Areas column */}
          <div>
            <div style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              color: "#C41E2A",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}>
              <span style={{ width: "12px", height: "1px", backgroundColor: "#C41E2A", display: "inline-block" }} />
              Service Areas
            </div>
            {[
              { label: "Ellensburg",      href: "/areas/ellensburg" },
              { label: "Cle Elum",        href: "/areas/cle-elum" },
              { label: "Kittitas County", href: "/areas/kittitas-county" },
              { label: "Yakima Valley",   href: "/areas/yakima-valley" },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: "0.85rem" }}>
                <Link
                  href={item.href}
                  className="link-ash"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem" }}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact column */}
          <div>
            <div style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              color: "#C41E2A",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}>
              <span style={{ width: "12px", height: "1px", backgroundColor: "#C41E2A", display: "inline-block" }} />
              Contact
            </div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "#9B9698", lineHeight: 1.8 }}>
              <p>{siteConfig.hq.city}, {siteConfig.hq.state}</p>
              <p style={{ marginTop: "0.75rem" }}>
                <a href={siteConfig.emailHref} className="link-ash" style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem" }}>
                  {siteConfig.email}
                </a>
              </p>
              <div style={{ marginTop: "1.75rem" }}>
                <Link
                  href="/contact"
                  className="link-underline-red"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase" as const,
                  }}
                >
                  Schedule a Consultation →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "2rem",
          flexWrap: "wrap" as const,
          gap: "1rem",
        }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.5 }}>
            © {new Date().getFullYear()} {siteConfig.companyLegal}. All rights reserved.
          </p>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.875rem",
            color: "rgba(255,255,255,0.62)",
            letterSpacing: "0.03em",
            lineHeight: 1.5,
          }}>
            Serving {siteConfig.serviceAreaString}
          </p>
        </div>
      </div>
    </footer>
  );
}
