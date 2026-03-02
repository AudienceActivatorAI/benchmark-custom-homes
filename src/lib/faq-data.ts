export interface FAQItem {
  question: string;
  answer: string;
  category: "cost" | "process" | "financing" | "location";
}

export const faqItems: FAQItem[] = [
  // ── Cost ────────────────────────────────────────────────────
  {
    category: "cost",
    question: "How much does it cost to build a custom home in Central Washington?",
    answer:
      "Custom home costs in Central Washington vary significantly based on size, complexity, site conditions, and finish level. Rather than quoting a generic price per square foot, we develop a detailed scope and specification package for every project so you know exactly what you're paying for before construction begins. Our Cost Guide page covers the key factors that influence your investment.",
  },
  {
    category: "cost",
    question: "What is included in a Benchmark fixed-price contract?",
    answer:
      "A Benchmark fixed-price contract includes all labor, materials, permitting, site preparation, and project management required to deliver your home as specified. We document every line item in advance. If we miss something in our scope, we absorb the cost — not you. The only additions to the contract price are changes you choose to make after signing.",
  },
  {
    category: "cost",
    question: "What are the hidden costs of building a custom home?",
    answer:
      "The most common 'hidden' costs include site preparation (grading, tree removal, access roads), utility connections (well drilling, septic engineering, power line extensions), permit and impact fees, and landscaping. In Central Washington, well depth and septic system complexity can vary dramatically by location. We identify and budget for these costs during pre-construction so there are no surprises.",
  },
  {
    category: "cost",
    question: "Do you offer a Guaranteed Maximum Price (GMP) option?",
    answer:
      "Yes. For clients who want flexibility to make selections during construction, we offer a GMP contract that caps your total investment while allowing for design refinements within the approved scope. This gives you the protection of a ceiling price with the adaptability of a cost-plus arrangement.",
  },

  // ── Process ─────────────────────────────────────────────────
  {
    category: "process",
    question: "How long does it take to build a custom home?",
    answer:
      "A typical Benchmark custom home takes 14 to 20 months from design completion to move-in, depending on size and complexity. The full timeline — including discovery, design, and pre-construction — typically spans 24 to 30 months from your first conversation with us. In Central Washington, seasonal weather can influence scheduling, particularly for site work and foundation pours during winter months.",
  },
  {
    category: "process",
    question: "Do I need to have an architect before contacting Benchmark?",
    answer:
      "No. Many of our clients come to us before they've engaged an architect. We work with a trusted network of architects who understand the Central Washington market, and we can facilitate introductions based on your design preferences and project scope. If you already have an architect, we're happy to collaborate with them.",
  },
  {
    category: "process",
    question: "What is the Benchmark project portal?",
    answer:
      "Every Benchmark client receives access to a real-time project portal that provides daily photo updates, budget tracking, schedule visibility, and direct communication with your project manager. You can see exactly where your project stands at any time, from any device.",
  },
  {
    category: "process",
    question: "How involved will I be during the building process?",
    answer:
      "As involved as you want to be. Some clients check the portal daily and visit the site weekly; others prefer to receive our weekly written updates and trust the process. Your dedicated project manager is your single point of contact throughout — available to answer questions, review progress, and walk you through decisions as they arise.",
  },
  {
    category: "process",
    question: "What does your two-year warranty cover?",
    answer:
      "Our two-year craftsmanship warranty covers all workmanship and materials installed by Benchmark and our subcontractors. This goes beyond the standard one-year builder warranty. We also provide a systems orientation at move-in so you understand how to maintain every component of your new home.",
  },

  // ── Financing ───────────────────────────────────────────────
  {
    category: "financing",
    question: "How do construction loans work for a custom home?",
    answer:
      "A construction loan provides short-term financing during the building process, then typically converts to a permanent mortgage upon completion. Draws are released at predetermined milestones as construction progresses. We work with several lenders experienced in Central Washington construction lending and can facilitate introductions.",
  },
  {
    category: "financing",
    question: "Can I use my land as equity toward the construction loan?",
    answer:
      "Yes, in most cases. If you own your lot free and clear, most lenders will count your land value as equity toward the construction loan, reducing or eliminating the cash down payment required. The specific terms depend on the lender and the appraised value of your property.",
  },
  {
    category: "financing",
    question: "What is an appraisal gap and how does it affect my build?",
    answer:
      "An appraisal gap occurs when the appraised value of the completed home comes in lower than the total project cost. This can happen in rural markets where comparable sales are limited. Benchmark helps mitigate this risk by providing detailed specifications and comparable project data to appraisers, and by working with lenders who understand the Central Washington custom home market.",
  },

  // ── Location ────────────────────────────────────────────────
  {
    category: "location",
    question: "What areas does Benchmark serve?",
    answer:
      "We build custom homes throughout Central Washington, with a primary focus on Ellensburg, Cle Elum, Kittitas County, and the Yakima Valley. We have deep experience with the specific building conditions, permitting requirements, and climate considerations of each area.",
  },
  {
    category: "location",
    question: "Can Benchmark build on rural or agricultural land?",
    answer:
      "Yes. A significant portion of our projects are on rural parcels that require well drilling, engineered septic systems, private road construction, and utility extensions. We have extensive experience navigating Kittitas County and Yakima County rural permitting, agricultural zone conditional use permits, and the infrastructure development required for rural building sites.",
  },
  {
    category: "location",
    question: "Do you build in Suncadia or other resort communities?",
    answer:
      "Yes. We have built multiple homes within Suncadia and other planned communities in the Cle Elum area. We are experienced with the architectural design review processes, HOA requirements, and the specific construction standards these communities require.",
  },
  {
    category: "location",
    question: "What are the biggest challenges of building in Central Washington?",
    answer:
      "The primary challenges include extreme temperature ranges (-10°F to 100°F+), high wind exposure in the Kittitas Valley, heavy snow loads at higher elevations, variable water table depth for wells, and limited availability of some specialty subcontractors. Benchmark's two decades of experience in this region means we've solved every one of these challenges many times over.",
  },
];

export function getFAQsByCategory(category: FAQItem["category"]) {
  return faqItems.filter((item) => item.category === category);
}

export const faqCategories = [
  { key: "cost" as const, label: "Cost & Pricing" },
  { key: "process" as const, label: "Building Process" },
  { key: "financing" as const, label: "Financing" },
  { key: "location" as const, label: "Locations & Land" },
];
