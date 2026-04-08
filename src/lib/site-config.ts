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
    years: "30",
    yearsLabel: "Years as a Licensed GC",
    projectValue: "$2.1B",
    projectValueLabel: "In Completed Projects",
    homesDelivered: "140+",
    homesDeliveredLabel: "Custom Homes Delivered",
    clientSatisfaction: "98%",
    clientSatisfactionLabel: "Client Referral Rate",
  },

  social: {
    instagram: "#",
    houzz: "#",
    linkedin: "#",
  },
} as const;
