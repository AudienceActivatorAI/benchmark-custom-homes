export const siteConfig = {
  company: "Benchmark Custom Homes",
  companyLegal: "Benchmark Custom Homes LLC",
  tagline: "Central Washington's Premier Custom Home Builder",
  shortTagline: "Precision-Built Custom Homes",
  founded: 2002,

  hq: {
    city: "Ellensburg",
    state: "Washington",
    stateAbbr: "WA",
    county: "Kittitas County",
    region: "Central Washington",
  },

  phone: "(509) 555-0100",
  phoneHref: "tel:+15095550100",
  email: "hello@benchmarkhomes.com",
  emailHref: "mailto:hello@benchmarkhomes.com",

  serviceAreas: ["Ellensburg", "Cle Elum", "Kittitas County", "Yakima Valley"],
  serviceAreaString: "Ellensburg · Cle Elum · Kittitas County · Yakima Valley",

  url: "https://benchmarkcustomhomes.com",

  stats: {
    years: "23",
    yearsLabel: "Years in Central Washington",
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
