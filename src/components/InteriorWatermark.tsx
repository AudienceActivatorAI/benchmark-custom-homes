"use client";

import { usePathname } from "next/navigation";
import { interiorPageBackgrounds } from "@/lib/site-config";

/**
 * Fixed, low-contrast background layer for interior pages.
 * Optional per-route photo URLs in site-config; heavy white overlay keeps type readable.
 */
export default function InteriorWatermark() {
  const pathname = usePathname();
  const raw = interiorPageBackgrounds[pathname];
  const imageUrl = raw?.trim() ? raw.trim() : undefined;

  return (
    <div
      aria-hidden
      className="interior-watermark"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: imageUrl
          ? `linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(245,244,244,0.96) 45%, rgba(255,255,255,0.97) 100%), url(${imageUrl})`
          : `linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(250,249,249,0.99) 50%, rgba(255,255,255,0.98) 100%), repeating-linear-gradient(-14deg, transparent, transparent 48px, rgba(196,30,42,0.018) 48px, rgba(196,30,42,0.018) 49px)`,
        backgroundSize: imageUrl ? "cover, cover" : "auto, auto",
        backgroundPosition: imageUrl ? "center, center" : "0 0, 0 0",
        backgroundAttachment: imageUrl ? "fixed, fixed" : "scroll, scroll",
      }}
    />
  );
}
