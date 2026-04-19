export const siteConfig = {
  company: "Benchmark Custom Homes",
  companyLegal: "Benchmark Custom Homes LLC",
  tagline: "Setting the Quality Standard",
  shortTagline: "Precision-Built Custom Homes",
  founded: 2002,

  hq: {
    city: "Ellensburg",
    state: "Washington",
    stateAbbr: "WA",
    county: "Kittitas County",
    region: "Central Washington",
  },

  email: "info@benchmarkch.com",
  emailHref: "mailto:info@benchmarkch.com",

  serviceAreas: ["Ellensburg", "Cle Elum", "Kittitas County", "Yakima Valley"],
  serviceAreaString: "Ellensburg · Cle Elum · Kittitas County · Yakima Valley",

  url: "https://benchmarkcustomhomes.com",

  stats: {
    years: "30+",
    yearsLabel: "Years as a Licensed GC",
    projectValue: "$2.1B",
    projectValueLabel: "In Completed Projects",
    homesDelivered: "140+",
    homesDeliveredLabel: "Custom Homes Delivered",
    clientSatisfaction: "98%",
    clientSatisfactionLabel: "Client Referral Rate",
  },

  /** Last name only; displayed as "Marissa {lastName}". Leave empty until provided. */
  team: {
    marissaLastName: "Taylor",
  },

  social: {
    instagram: "#",
    houzz: "#",
    linkedin: "#",
  },
} as const;

export function getMarissaDisplayName(): string {
  const ln = siteConfig.team.marissaLastName.trim();
  return ln.length > 0 ? `Marissa ${ln}` : "Marissa";
}

/**
 * Optional fixed background images for interior routes (place files under /public/images/page-bg/).
 * Prefer WebP or JPG, roughly 1600–2400px wide, optimized for web. Keys are pathname strings (e.g. "/process").
 */
export const interiorPageBackgrounds: Record<string, string> = {
  // "/process": "/images/page-bg/process.jpg",
};
