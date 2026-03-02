import Link from "next/link";
import JsonLd from "./JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";

const R = "#C41E2A";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = items.map((item) => ({
    name: item.name,
    url: item.href.startsWith("http")
      ? item.href
      : `https://benchmarkcustomhomes.com${item.href}`,
  }));

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(schemaItems)} />
      <nav
        aria-label="Breadcrumb"
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "1.25rem 2rem 0",
        }}
      >
        <ol
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontFamily: "var(--font-sans)",
            fontSize: "0.7rem",
            letterSpacing: "0.05em",
          }}
        >
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                {i > 0 && (
                  <span
                    style={{
                      color: "#A8A4A5",
                      fontSize: "0.6rem",
                      userSelect: "none",
                    }}
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
                {isLast ? (
                  <span
                    style={{ color: R, fontWeight: 500 }}
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    style={{
                      color: "#6B6568",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
