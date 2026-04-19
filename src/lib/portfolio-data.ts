import type { CSSProperties } from "react";

export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  location: string;
  area: string;
  size: string;
  year: string;
  bg: string;
  /** Hero image for grid cards; first image should be primary exterior when available */
  coverImage?: string;
  /** Full set of project photos (public paths) */
  gallery?: string[];
  narrative: string;
  challenge: string;
  solution: string;
  buildingContext: string;
}

export const projects: PortfolioProject[] = [
  {
    slug: "farmhouse-way",
    title: "Farmhouse Way",
    category: "Custom Build",
    location: "Kittitas County, WA",
    area: "kittitas-county",
    size: "4,000 sq ft",
    year: "2024",
    bg: "#1E1B1C",
    coverImage: "/images/portfolio/farmhouse-way/farmhouse-way-01.jpg",
    gallery: [
      "/images/portfolio/farmhouse-way/farmhouse-way-01.jpg",
      "/images/portfolio/farmhouse-way/farmhouse-way-02.jpg",
      "/images/portfolio/farmhouse-way/farmhouse-way-03.jpg",
      "/images/portfolio/farmhouse-way/farmhouse-way-04.jpg",
      "/images/portfolio/farmhouse-way/farmhouse-way-05.jpg",
      "/images/portfolio/farmhouse-way/farmhouse-way-06.jpg",
      "/images/portfolio/farmhouse-way/farmhouse-way-07.jpg",
      "/images/portfolio/farmhouse-way/farmhouse-way-08.jpg",
    ],
    narrative:
      "A modern farmhouse with board-and-batten siding, stone bases, and black-trimmed windows — open living spaces, vaulted beams, and refined millwork throughout.",
    challenge:
      "Balancing a dramatic roofline and large glass areas with Central Washington climate loads while keeping the exterior palette cohesive in sun and snow.",
    solution:
      "Careful detailing at porches and gables, high-performance glazing, and interior volumes that connect kitchen, dining, and living without sacrificing warmth.",
    buildingContext:
      "Rural Kittitas County setting with evergreen views; exterior and interior photography for portfolio (front elevation leads the set).",
  },
  {
    slug: "river-ridge",
    title: "River Ridge",
    category: "Custom Build",
    location: "Ellensburg, WA",
    area: "ellensburg",
    size: "3,800 sq ft",
    year: "2024",
    bg: "#211E1F",
    coverImage: "/images/portfolio/river-ridge/river-ridge-01.jpg",
    gallery: [
      "/images/portfolio/river-ridge/river-ridge-01.jpg",
      "/images/portfolio/river-ridge/river-ridge-02.jpg",
      "/images/portfolio/river-ridge/river-ridge-03.jpg",
      "/images/portfolio/river-ridge/river-ridge-04.jpg",
      "/images/portfolio/river-ridge/river-ridge-05.jpg",
      "/images/portfolio/river-ridge/river-ridge-06.jpg",
      "/images/portfolio/river-ridge/river-ridge-07.jpg",
      "/images/portfolio/river-ridge/river-ridge-08.jpg",
      "/images/portfolio/river-ridge/river-ridge-09.jpg",
      "/images/portfolio/river-ridge/river-ridge-10.jpg",
      "/images/portfolio/river-ridge/river-ridge-11.jpg",
      "/images/portfolio/river-ridge/river-ridge-12.jpg",
    ],
    narrative:
      "Stone-and-timber curb appeal with a dramatic front entry, then bright open living — black fireplace feature walls, marble kitchen, and layered mountain views.",
    challenge:
      "Delivering high-contrast modern finishes and tall glass while keeping the envelope efficient through freeze-thaw and snowy access periods.",
    solution:
      "Thoughtful massing at the entry walk, warm interior layers over efficient shell, and kitchen/living connections framed for both daily life and entertaining.",
    buildingContext:
      "Ellensburg-area build; photography leads with front elevation and entry, then full interior pass.",
  },
  {
    slug: "kokanee-loop",
    title: "Kokanee Loop",
    category: "Custom Build",
    location: "Cle Elum, WA",
    area: "cle-elum",
    size: "4,800 sq ft",
    year: "2025",
    bg: "#1C1A1B",
    coverImage: "/images/portfolio/kokanee-loop/kokanee-loop-01.jpg",
    gallery: [
      "/images/portfolio/kokanee-loop/kokanee-loop-01.jpg",
      "/images/portfolio/kokanee-loop/kokanee-loop-02.jpg",
      "/images/portfolio/kokanee-loop/kokanee-loop-03.jpg",
      "/images/portfolio/kokanee-loop/kokanee-loop-04.jpg",
      "/images/portfolio/kokanee-loop/kokanee-loop-05.jpg",
      "/images/portfolio/kokanee-loop/kokanee-loop-06.jpg",
      "/images/portfolio/kokanee-loop/kokanee-loop-07.jpg",
      "/images/portfolio/kokanee-loop/kokanee-loop-08.jpg",
      "/images/portfolio/kokanee-loop/kokanee-loop-09.jpg",
      "/images/portfolio/kokanee-loop/kokanee-loop-10.jpg",
      "/images/portfolio/kokanee-loop/kokanee-loop-11.jpg",
      "/images/portfolio/kokanee-loop/kokanee-loop-12.jpg",
      "/images/portfolio/kokanee-loop/kokanee-loop-13.jpg",
      "/images/portfolio/kokanee-loop/kokanee-loop-14.jpg",
      "/images/portfolio/kokanee-loop/kokanee-loop-15.jpg",
      "/images/portfolio/kokanee-loop/kokanee-loop-16.jpg",
      "/images/portfolio/kokanee-loop/kokanee-loop-17.jpg",
      "/images/portfolio/kokanee-loop/kokanee-loop-18.jpg",
      "/images/portfolio/kokanee-loop/kokanee-loop-19.jpg",
    ],
    narrative:
      "A contemporary mountain residence with wood-and-stone exterior, black-trimmed glass, and warm interior living spaces — designed for snowy seasons and big views.",
    challenge:
      "Delivering strong indoor-outdoor connection and heavy glazing while meeting alpine snow loads, energy performance, and a tight build window through winter weather.",
    solution:
      "Tiered massing with covered outdoor rooms, high-performance windows, and interior layouts that capture light and views from kitchen through great room and primary suite.",
    buildingContext:
      "Forest and mountain setting near Cle Elum; photography set leads with front elevation (twilight), second exterior angle, then full interior documentation.",
  },
  {
    slug: "southern-star",
    title: "Southern Star",
    category: "Custom Build",
    location: "Kittitas County, WA",
    area: "kittitas-county",
    size: "5,200 sq ft",
    year: "2024",
    bg: "#242122",
    coverImage: "/images/portfolio/southern-star/southern-star-01.jpg",
    gallery: [
      "/images/portfolio/southern-star/southern-star-01.jpg",
      "/images/portfolio/southern-star/southern-star-02.jpg",
      "/images/portfolio/southern-star/southern-star-03.jpg",
      "/images/portfolio/southern-star/southern-star-04.jpg",
      "/images/portfolio/southern-star/southern-star-05.jpg",
      "/images/portfolio/southern-star/southern-star-06.jpg",
      "/images/portfolio/southern-star/southern-star-07.jpg",
      "/images/portfolio/southern-star/southern-star-08.jpg",
      "/images/portfolio/southern-star/southern-star-09.jpg",
      "/images/portfolio/southern-star/southern-star-10.jpg",
      "/images/portfolio/southern-star/southern-star-11.jpg",
      "/images/portfolio/southern-star/southern-star-12.jpg",
      "/images/portfolio/southern-star/southern-star-13.jpg",
      "/images/portfolio/southern-star/southern-star-14.jpg",
    ],
    narrative:
      "A bold mountain contemporary with charcoal siding, stone bases, and a timber-framed entry — plus outdoor living, fire feature, and spa-level interior finishes.",
    challenge:
      "Coordinating deep rooflines, large glass, and mixed cladding while keeping thermal performance and weather tightness in a forested, high-elevation setting.",
    solution:
      "Layered exterior materials with disciplined window placement, covered outdoor rooms, and interior palettes that balance dark casework with warm wood and light stone.",
    buildingContext:
      "Wooded Central Washington setting; image set opens with full front elevation, then rear/outdoor living, followed by interior photography.",
  },
  {
    slug: "morgan-creek",
    title: "Morgan Creek",
    category: "Custom Build",
    location: "Kittitas County, WA",
    area: "kittitas-county",
    size: "4,200 sq ft",
    year: "2024",
    bg: "#1A1C1A",
    coverImage: "/images/portfolio/morgan-creek/morgan-creek-01.jpg",
    gallery: [
      "/images/portfolio/morgan-creek/morgan-creek-01.jpg",
      "/images/portfolio/morgan-creek/morgan-creek-02.jpg",
      "/images/portfolio/morgan-creek/morgan-creek-03.jpg",
      "/images/portfolio/morgan-creek/morgan-creek-04.jpg",
      "/images/portfolio/morgan-creek/morgan-creek-05.jpg",
      "/images/portfolio/morgan-creek/morgan-creek-06.jpg",
      "/images/portfolio/morgan-creek/morgan-creek-07.jpg",
      "/images/portfolio/morgan-creek/morgan-creek-08.jpg",
      "/images/portfolio/morgan-creek/morgan-creek-09.jpg",
    ],
    narrative:
      "Mountain farmhouse character with timber porch, stone bases, and a warm interior — great room stone fireplace, open kitchen, and views that pull the landscape inside.",
    challenge:
      "Connecting heavy timber entries and gabled rooflines with efficient envelope details and comfortable daylighting through long winter seasons.",
    solution:
      "Layered outdoor rooms at the front porch, generous glazing on the view side, and interior finishes that balance rustic structure with refined cabinetry and lighting.",
    buildingContext:
      "Snow-country build in Kittitas County; photo set opens with front entry, full front elevation second, then interior documentation.",
  },
];

/** Background layer for portfolio cards — real photo when `coverImage` is set */
export function portfolioZoomLayerStyle(
  project: PortfolioProject,
  transitionMs: number = 700
): CSSProperties {
  const base: CSSProperties = {
    position: "absolute",
    inset: 0,
    transition: `transform ${transitionMs}ms cubic-bezier(0.16,1,0.3,1)`,
  };
  if (project.coverImage) {
    return {
      ...base,
      backgroundImage: `url(${project.coverImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }
  return {
    ...base,
    background: `linear-gradient(135deg, ${project.bg} 0%, #2E2B2C 100%)`,
  };
}

/** Get featured projects for the homepage (first 4) */
export function getFeaturedProjects() {
  return projects.slice(0, 4);
}

/** Get projects by area slug */
export function getProjectsByArea(areaSlug: string) {
  return projects.filter((p) => p.area === areaSlug);
}

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return projects.find((p) => p.slug === slug);
}

/** All images for project detail (gallery, or cover only) */
export function getGalleryImages(project: PortfolioProject): string[] {
  if (project.gallery?.length) return project.gallery;
  if (project.coverImage) return [project.coverImage];
  return [];
}
