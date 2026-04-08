import { siteConfig } from "./site-config";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company,
    url: siteConfig.url,
    logo: `${siteConfig.url}/benchmark-logo.png`,
    description: `${siteConfig.company} builds precision-crafted custom homes for discerning clients across ${siteConfig.hq.region}.`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.hq.city,
      addressRegion: siteConfig.hq.stateAbbr,
      addressCountry: "US",
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, Washington`,
    })),
    foundingDate: `${siteConfig.founded}`,
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.houzz,
      siteConfig.social.linkedin,
    ].filter((url) => url !== "#"),
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.company,
    url: siteConfig.url,
    image: `${siteConfig.url}/benchmark-logo.png`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.hq.city,
      addressRegion: siteConfig.hq.stateAbbr,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 46.9965,
      longitude: -120.5478,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, Washington`,
    })),
    priceRange: "$$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQPageSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateReviewSchema(
  reviews: {
    author: string;
    rating: number;
    body: string;
    date: string;
    location: string;
  }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.company,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue:
        reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length,
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.body,
      datePublished: review.date,
    })),
  };
}
