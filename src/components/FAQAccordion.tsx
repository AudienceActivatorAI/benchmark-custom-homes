"use client";

import { useState } from "react";

const R = "#C41E2A";
const BK = "#231F20";
const MID = "#6B6568";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              borderBottom: "1px solid #E5E3E3",
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "2rem",
                padding: "1.5rem 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left" as const,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: isOpen ? R : BK,
                  lineHeight: 1.3,
                  transition: "color 0.25s ease",
                }}
              >
                {item.question}
              </span>
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  flexShrink: 0,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-hidden="true"
              >
                {/* Horizontal line */}
                <span
                  style={{
                    position: "absolute",
                    width: "12px",
                    height: "2px",
                    backgroundColor: isOpen ? R : "#A8A4A5",
                    transition: "background-color 0.25s ease",
                  }}
                />
                {/* Vertical line (rotates to form +/-) */}
                <span
                  style={{
                    position: "absolute",
                    width: "12px",
                    height: "2px",
                    backgroundColor: isOpen ? R : "#A8A4A5",
                    transform: isOpen ? "rotate(0deg)" : "rotate(90deg)",
                    transition:
                      "transform 0.3s cubic-bezier(0.16,1,0.3,1), background-color 0.25s ease",
                  }}
                />
              </span>
            </button>
            <div
              style={{
                maxHeight: isOpen ? "500px" : "0px",
                overflow: "hidden",
                transition:
                  "max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div style={{ paddingBottom: "1.5rem" }}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    color: MID,
                    maxWidth: "680px",
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
