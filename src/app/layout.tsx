import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
} from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.company} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.company}`,
  },
  description: `${siteConfig.company} builds precision-crafted custom homes for discerning clients across ${siteConfig.serviceAreas.join(", ")}, and ${siteConfig.hq.region}.`,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.company,
    title: `${siteConfig.company} | ${siteConfig.tagline}`,
    description: `Precision-built custom homes across ${siteConfig.hq.region}. Customized contract and budget analysis, field-led daily oversight, and six-year structural plus one-year craftsmanship warranty coverage.`,
    images: [
      {
        url: `${siteConfig.url}/benchmark-logo.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.company,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.company} | ${siteConfig.tagline}`,
    description: `Precision-built custom homes across ${siteConfig.hq.region}.`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateLocalBusinessSchema()} />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
