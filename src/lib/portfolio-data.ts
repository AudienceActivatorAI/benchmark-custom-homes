export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  location: string;
  area: string;
  size: string;
  year: string;
  bg: string;
  narrative: string;
  challenge: string;
  solution: string;
  buildingContext: string;
}

export const projects: PortfolioProject[] = [
  {
    slug: "ellensburg-ranch-estate",
    title: "Ellensburg Ranch Estate",
    category: "Custom Build",
    location: "Ellensburg, WA",
    area: "ellensburg",
    size: "4,200 sq ft",
    year: "2024",
    bg: "#1A1718",
    narrative:
      "A sprawling single-story ranch home designed for a family who wanted unobstructed views of the Stuart Range from every living space. Open-plan living meets agrarian character.",
    challenge:
      "Integrating a 4,200 sq ft floor plan into a sloping 5-acre parcel while maintaining passive solar orientation and wind protection.",
    solution:
      "Step-down foundation design that follows the natural grade, with floor-to-ceiling glazing on the west-facing elevation and a sheltered courtyard entry.",
    buildingContext:
      "Rural Kittitas County lot with well and septic requirements, 45 mph wind exposure design constraints.",
  },
  {
    slug: "cle-elum-mountain-retreat",
    title: "Cle Elum Mountain Retreat",
    category: "Custom Build",
    location: "Cle Elum, WA",
    area: "cle-elum",
    size: "5,800 sq ft",
    year: "2024",
    bg: "#252122",
    narrative:
      "A four-season mountain retreat at Suncadia that blends contemporary alpine architecture with the rugged beauty of the Cascade foothills. Designed for multi-generational gatherings.",
    challenge:
      "Navigating Suncadia design review requirements while achieving a distinctive modern aesthetic on a heavily treed, north-facing slope.",
    solution:
      "Tiered floor plan with cantilevered living spaces that preserve mature pines, combined with standing-seam metal roofing and reclaimed timber accents approved by the HOA.",
    buildingContext:
      "Suncadia resort community with strict architectural covenants, heavy snow load engineering (80 psf), and seasonal construction constraints.",
  },
  {
    slug: "kittitas-valley-modern",
    title: "Kittitas Valley Modern",
    category: "Custom Build",
    location: "Kittitas, WA",
    area: "kittitas-county",
    size: "3,600 sq ft",
    year: "2023",
    bg: "#1E1B1C",
    narrative:
      "A clean-lined modern farmhouse set on 20 acres of working ranchland. The design bridges agricultural heritage with contemporary living — steel, glass, and concrete meet barn-board siding.",
    challenge:
      "Building on an active agricultural parcel while meeting residential energy codes and managing extreme temperature swings from -10°F winters to 100°F summers.",
    solution:
      "High-performance building envelope with ICF foundation, triple-pane windows, and a ground-source heat pump system that reduced annual energy costs by 60%.",
    buildingContext:
      "Agricultural-zoned parcel requiring conditional use permit, private well, engineered septic system, and 200-amp service from rural utility cooperative.",
  },
  {
    slug: "ellensburg-craftsman",
    title: "Ellensburg Heritage Craftsman",
    category: "Custom Build",
    location: "Ellensburg, WA",
    area: "ellensburg",
    size: "3,200 sq ft",
    year: "2023",
    bg: "#211E1F",
    narrative:
      "A new-construction Craftsman that honors the architectural character of Ellensburg's historic downtown while delivering modern performance and livability.",
    challenge:
      "Respecting the scale and material palette of the surrounding historic district while incorporating a modern open floor plan, home office, and three-car garage.",
    solution:
      "Authentic Craftsman detailing — tapered columns, exposed rafter tails, and cedar shingle accents — over a structurally modern frame with spray-foam insulation and smart home infrastructure.",
    buildingContext:
      "In-town lot near historic district with city sewer/water, specific setback requirements, and neighborhood design sensitivity.",
  },
  {
    slug: "cle-elum-lakeside",
    title: "Cle Elum Lakeside Home",
    category: "Custom Build",
    location: "Cle Elum, WA",
    area: "cle-elum",
    size: "4,600 sq ft",
    year: "2023",
    bg: "#1C1A1B",
    narrative:
      "A lakefront home designed to maximize water views from every room. Floor-to-ceiling glass, natural stone, and warm timber create a Northwest lodge aesthetic refined for year-round living.",
    challenge:
      "Shoreline management regulations required building above the ordinary high water mark while still achieving lake-level outdoor living spaces.",
    solution:
      "Elevated main floor with walk-out lower level, engineered retaining walls, and a terraced landscape plan that meets all DNR shoreline buffer requirements.",
    buildingContext:
      "Shoreline-regulated lot with DNR setback requirements, seasonal high water table, and heavy recreational boat traffic considerations.",
  },
  {
    slug: "yakima-valley-vineyard",
    title: "Yakima Valley Vineyard Estate",
    category: "Custom Build",
    location: "Yakima Valley, WA",
    area: "yakima-valley",
    size: "5,400 sq ft",
    year: "2022",
    bg: "#242122",
    narrative:
      "A Mediterranean-inspired estate nestled among 15 acres of vineyard, with indoor-outdoor living designed for wine country entertaining. Stone arches, courtyard fountain, and a full wine cellar.",
    challenge:
      "Achieving authentic Mediterranean mass and materiality in a region with seismic requirements and extreme temperature differentials.",
    solution:
      "Steel-reinforced CMU structure with real stucco finish, in-floor radiant heating throughout, and a climate-controlled wine cellar excavated into the hillside.",
    buildingContext:
      "Yakima County agricultural zone with irrigation water rights, seismic zone 2B requirements, and fire-wise construction standards.",
  },
  {
    slug: "kittitas-county-contemporary",
    title: "Kittitas Ridgeline Contemporary",
    category: "Custom Build",
    location: "Kittitas County, WA",
    area: "kittitas-county",
    size: "4,800 sq ft",
    year: "2022",
    bg: "#1A1C1A",
    narrative:
      "A dramatic hilltop contemporary with 360-degree views of the Kittitas Valley, Stuart Range, and Manastash Ridge. Cantilevered steel and glass define a home that appears to float above the landscape.",
    challenge:
      "Extreme wind exposure at the ridgeline elevation required structural engineering far beyond standard residential design parameters.",
    solution:
      "Steel moment-frame structure rated for 110 mph wind loads, combined with impact-rated glazing and an aerodynamic roofline that reduces uplift forces.",
    buildingContext:
      "Hilltop parcel with no road access requiring private road construction, power line extension, and deep well drilling to 400+ feet.",
  },
  {
    slug: "ellensburg-teardown-rebuild",
    title: "Ellensburg Teardown & Rebuild",
    category: "Teardown · Rebuild",
    location: "Ellensburg, WA",
    area: "ellensburg",
    size: "3,800 sq ft",
    year: "2022",
    bg: "#201E1C",
    narrative:
      "A 1960s split-level on a prime half-acre lot was demolished and replaced with a single-story modern home designed for aging in place. Zero-step entry, wide corridors, and universal design throughout.",
    challenge:
      "The original home's foundation had to be completely removed, and the lot's mature landscaping needed preservation during demolition.",
    solution:
      "Surgical demolition with tree protection fencing, a new engineered foundation with heated slab, and careful reconnection to existing city utilities.",
    buildingContext:
      "Established Ellensburg neighborhood with city services, existing utility connections, and mature tree preservation requirements.",
  },
];

/** Get featured projects for the homepage (first 4) */
export function getFeaturedProjects() {
  return projects.slice(0, 4);
}

/** Get projects by area slug */
export function getProjectsByArea(areaSlug: string) {
  return projects.filter((p) => p.area === areaSlug);
}
