export interface AreaData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string[];
  buildingContext: string[];
  zoningInsights: string[];
  whyBuildHere: string[];
  lifestyle: string;
}

export const areasData: Record<string, AreaData> = {
  ellensburg: {
    slug: "ellensburg",
    name: "Ellensburg",
    metaTitle:
      "Custom Home Builder in Ellensburg, WA | Benchmark Custom Homes",
    metaDescription:
      "Build your custom home in Ellensburg, Washington. Benchmark Custom Homes specializes in precision-built homes in the heart of Kittitas County.",
    heroTitle: "Building in Ellensburg",
    heroSubtitle: "The heart of Kittitas County",
    intro: [
      "Ellensburg is the cultural and economic center of Kittitas County — a university town with historic character, four distinct seasons, and a growing community of professionals and families choosing to build their forever homes here.",
      "As Ellensburg's most experienced custom home builder, Benchmark understands the unique considerations of building in this market: from navigating city and county permitting to engineering for the region's distinctive climate — cold winters, hot summers, and the persistent Kittitas Valley wind.",
      "Whether you're building on an in-town lot near the historic district or on acreage outside city limits, we bring the same precision, accountability, and craft to every project.",
    ],
    buildingContext: [
      "City sewer and water available in town; well and septic required on rural parcels",
      "Wind exposure engineering — Kittitas Valley is known for sustained high winds",
      "Seismic zone considerations for structural design",
      "Energy code compliance with high-performance building envelope requirements",
      "Snow load design for 25–40 psf depending on elevation",
    ],
    zoningInsights: [
      "City of Ellensburg residential zones allow a range of lot sizes and setbacks",
      "County parcels may require conditional use permits for residential construction",
      "Historic district adjacency may influence design review requirements",
      "Agricultural-zoned parcels require careful planning for residential use",
    ],
    whyBuildHere: [
      "Central Washington University brings cultural events, dining, and a vibrant community",
      "Downtown Ellensburg offers historic charm with local shops and restaurants",
      "30 minutes to world-class skiing, hiking, and mountain recreation",
      "Significantly lower land costs compared to western Washington",
      "Small-town quality of life with access to I-90 for regional connectivity",
    ],
    lifestyle:
      "Ellensburg offers a rare combination: the cultural amenities of a university town, the open landscapes of the high desert, and proximity to the Cascade Range — all at a pace of life that lets you actually enjoy them.",
  },

  "cle-elum": {
    slug: "cle-elum",
    name: "Cle Elum",
    metaTitle:
      "Custom Home Builder in Cle Elum, WA | Benchmark Custom Homes",
    metaDescription:
      "Build your luxury mountain home in Cle Elum, Washington. Benchmark specializes in custom homes at Suncadia and throughout the upper Kittitas County area.",
    heroTitle: "Building in Cle Elum",
    heroSubtitle: "Mountain retreats and luxury living",
    intro: [
      "Cle Elum sits at the gateway to the Cascades — a mountain community that has become one of Central Washington's most desirable locations for luxury custom homes and four-season retreats.",
      "From Suncadia Resort to private parcels along the Cle Elum River, this area demands builders who understand mountain construction: heavy snow loads, steep terrain, and the architectural covenants that protect the community's character.",
      "Benchmark has built some of the area's most distinctive homes, navigating HOA design reviews, environmental regulations, and the logistical challenges of mountain building with the same precision we bring to every project.",
    ],
    buildingContext: [
      "Heavy snow load engineering — 60 to 100+ psf depending on elevation",
      "Steep terrain often requires engineered foundations and retaining systems",
      "Suncadia and other communities have architectural design review processes",
      "Seasonal construction windows — ground work limited from November through April",
      "Shoreline management regulations for properties near lakes and rivers",
    ],
    zoningInsights: [
      "Suncadia Resort has its own design review board with specific material and style requirements",
      "Kittitas County mountain parcels may have forest land classification considerations",
      "Shoreline Management Act applies within 200 feet of designated waterways",
      "Critical areas ordinances may affect buildable area on steep or sensitive lots",
    ],
    whyBuildHere: [
      "Direct access to world-class skiing at Snoqualmie Pass resorts",
      "Year-round outdoor recreation: hiking, mountain biking, fishing, golf",
      "Suncadia Resort amenities including spa, restaurants, and golf courses",
      "90 minutes from Seattle via I-90 — weekend retreat or permanent residence",
      "Mountain setting with genuine four-season beauty",
    ],
    lifestyle:
      "Cle Elum offers what the west side of the mountains cannot: space, quiet, and direct access to the wilderness — with the infrastructure and amenities to live comfortably year-round.",
  },

  "kittitas-county": {
    slug: "kittitas-county",
    name: "Kittitas County",
    metaTitle:
      "Custom Home Builder in Kittitas County, WA | Benchmark Custom Homes",
    metaDescription:
      "Benchmark Custom Homes builds precision-crafted custom homes throughout Kittitas County, from Ellensburg to Cle Elum and the surrounding rural communities.",
    heroTitle: "Building in Kittitas County",
    heroSubtitle: "From valley floor to mountain ridge",
    intro: [
      "Kittitas County spans from the Cascade crest to the Columbia Basin — a diverse landscape that offers everything from mountain retreats to expansive valley estates. It is the heart of our building territory.",
      "Building across this range of geography requires a builder who understands the specific conditions of each zone: the wind exposure of the valley floor, the snow loads of the upper county, the water rights of agricultural parcels, and the permitting requirements that vary by jurisdiction.",
      "With over two decades of building experience in Kittitas County, Benchmark has navigated every terrain type, zoning classification, and climate condition this region presents.",
    ],
    buildingContext: [
      "Climate varies significantly by elevation — from high desert valley to alpine mountain",
      "Rural parcels typically require private well and engineered septic systems",
      "Power availability varies — some parcels require line extensions or off-grid solutions",
      "Road access may need to be constructed on undeveloped parcels",
      "Fire-wise construction standards apply in many wildland-urban interface areas",
    ],
    zoningInsights: [
      "County zoning includes residential, rural residential, agricultural, and forest zones",
      "Minimum lot sizes vary from 12,500 sq ft in town to 20+ acres in agricultural zones",
      "Water availability studies may be required for new well permits",
      "Critical areas include wetlands, steep slopes, and fish-bearing streams",
    ],
    whyBuildHere: [
      "Vast open landscapes with mountain views in every direction",
      "Significantly more affordable land than western Washington",
      "Strong sense of community with deep agricultural and ranching heritage",
      "Proximity to outdoor recreation — skiing, hiking, fishing, hunting",
      "Growing economy anchored by CWU, agriculture, and tourism",
    ],
    lifestyle:
      "Kittitas County is where people come to build the home — and the life — they've always imagined. Wide open spaces, genuine community, and the kind of quiet that western Washington forgot it had.",
  },

  "yakima-valley": {
    slug: "yakima-valley",
    name: "Yakima Valley",
    metaTitle:
      "Custom Home Builder in Yakima Valley, WA | Benchmark Custom Homes",
    metaDescription:
      "Build your custom home in the Yakima Valley. Benchmark Custom Homes brings precision craftsmanship to wine country estates and luxury residences.",
    heroTitle: "Building in Yakima Valley",
    heroSubtitle: "Wine country estates and valley living",
    intro: [
      "The Yakima Valley is Washington's wine country — a sun-drenched agricultural landscape that has become an increasingly sought-after location for custom homes and estate properties.",
      "Building here means understanding irrigation water rights, agricultural zoning, and the specific demands of a climate that sees 300 days of sunshine and very little rainfall. It also means designing homes that embrace indoor-outdoor living and the valley's extraordinary natural beauty.",
      "Benchmark brings the same standard of construction to the Yakima Valley that has defined our work throughout Central Washington — precision-built homes designed for how you actually live.",
    ],
    buildingContext: [
      "Hot, dry summers require careful HVAC design and passive cooling strategies",
      "Irrigation water rights are a critical consideration for estate properties",
      "Seismic zone 2B requires enhanced structural engineering",
      "Expansive soils in some areas require specialized foundation design",
      "Fire-wise construction standards in rural and semi-rural areas",
    ],
    zoningInsights: [
      "Yakima County agricultural zones often allow residential construction with conditions",
      "Water rights may be tied to the parcel and affect property value significantly",
      "Vineyard and orchard properties have specific agricultural use requirements",
      "Planned developments and rural residential zones offer a range of lot sizes",
    ],
    whyBuildHere: [
      "Washington's premier wine country with 120+ wineries and tasting rooms",
      "300+ days of sunshine annually — ideal for indoor-outdoor living",
      "Expansive parcels available at a fraction of western Washington prices",
      "Growing culinary and cultural scene in Yakima and surrounding communities",
      "Mild winters with minimal snow at valley elevations",
    ],
    lifestyle:
      "The Yakima Valley offers a lifestyle built around sun, wine, and open space — a place where you can build an estate that would cost three times as much on the west side, and actually have time to enjoy it.",
  },
};

export function getAreaData(slug: string): AreaData | undefined {
  return areasData[slug];
}

export function getAllAreaSlugs(): string[] {
  return Object.keys(areasData);
}
