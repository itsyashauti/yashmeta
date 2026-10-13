export type WorkProject = {
  id: number;
  slug: string;
  name: string;
  category: string;
  year: string;
  image: string;
  alt: string;
  tags: string[];
  summary: string;
  about: string;
  challenge: string;
  solution: string;
  accent: string;
  imageFit?: "cover" | "contain";
  posterAspectRatio?: number;
  galleryAspectRatio?: number;
  galleryAspectRatios?: number[];
  gallery?: string[];
};

export const projects: WorkProject[] = [
  {
    id: 1,
    slug: "satyafilm",
    name: "SatyaFilm",
    category: "Film Production · Promotional artwork",
    year: "2026",
    image: "/satyabanner.webp",
    alt: "SatyaFilm presentation banner",
    tags: ["CREATIVE SHOWCASE", "Promotional artwork", "WEB DEVELOPMENT"],
    summary: "A modern and cinematic website designed for Satya Film Production to showcase its films, creative work, productions, and brand identity. The website combines a visually engaging interface with a smooth user experience to create a strong digital presence for the production house.",
    about: "The main banner and seven supporting images showcase SatyaFilm’s visual identity across the full project gallery.",
    challenge: "Create a bold, recognizable visual direction for the SatyaFilm project.",
    solution: "A striking central poster anchors a coordinated set of supporting visuals.",
    accent: "#d7e45e",
    gallery: [
      "/satya2.webp",
      "/satya3.webp",
      "/satya4.webp",
      "/satya5.webp",
      "/satya6.webp",
      "/satya7.webp",
      "/satya8.webp",
    ],
  },
  {
    id: 2,
    slug: "vise",
    name: "PHOTOGRAPHY STUDIO",
    category: "Agency · Company presentation",
    year: "2026",
    image: "/photobanner.webp",
    alt: "Wedding photography banner by Hemant Sharma Photography",
    tags: ["CREATIVE PORTFOLIO", "PHOTOGRAPHY WEBSITE"],
    summary: "A modern portfolio website designed to showcase photography, creative work, and studio services.",
    about: "A concise introduction to Vise brings the company’s proposition and point of view together in one consistent presentation experience.",
    challenge: "Make the company story easy to grasp while keeping the presentation distinctive from the first slide onward.",
    solution: "A clean narrative flow and focused visual language give the central message a stronger presence.",
    accent: "#2538bc",
    imageFit: "cover",
    posterAspectRatio: 1600 / 803,
    galleryAspectRatio: 2,
    gallery: Array.from({ length: 10 }, (_, index) => `/photo${index + 1}.webp`),
  },
  {
    id: 3,
    slug: "trawa",
    name: "POS SYSTEM",
    category: "Brand identity · Design research · Investor deck",
    year: "2026",
    image: "/uibanner.webp",
    alt: "Trawa user interface project banner",
    tags: ["UI/UX", "Design research", "Investor deck"],
    summary: "A user-friendly POS application designed to simplify sales, billing, inventory, and business management.",
    about: "Trawa’s identity and presentation materials make its energy-focused story feel approachable and consistent across the deck.",
    challenge: "Explain a complex proposition in a way that feels accessible to investors and other stakeholders.",
    solution: "A clear hierarchy, purposeful research, and a distinctive brand system connect the story from slide to slide.",
    accent: "#e8a676",
    imageFit: "cover",
    posterAspectRatio: 1076 / 867,
    galleryAspectRatio: 1.3,
    gallery: Array.from({ length: 5 }, (_, index) => `/ui${index + 1}.webp`),
  },
  {
    id: 4,
    slug: "premium-blend",
    name: "KRUSHNA TRANSPORT",
    category: "Brand template",
    year: "2026",
    image: "/krushnabanner.webp",
    alt: "Krushna project banner",
    tags: ["TRANSPORT SERVICES", "WEB DEVELOPMENT", "BRAND TEMPLATE"],
    summary: "A professional transport website designed to showcase services, vehicles, and nationwide transportation solutions.",
    about: "The Premium Blend template gives the brand a repeatable presentation style with a warm, confident voice.",
    challenge: "Create a template that feels recognisable while leaving enough room for different stories and content.",
    solution: "A simple layout system and considered typography make the template easy to adapt without losing its character.",
    accent: "#f06a38",
    imageFit: "cover",
    posterAspectRatio: 1600 / 759,
    galleryAspectRatio: 2.2,
    gallery: Array.from({ length: 6 }, (_, index) => `/krushna${index + 1}.webp`),
  },
  {
    id: 5,
    slug: "planetly",
    name: "VK BAGS",
    category: "Brand template · Big news deck · Investor deck",
    year: "2026",
    image: "/bagbanner.webp",
    alt: "Planetly project banner",
    tags: ["E-COMMERCE", "UI/UX DESIGN", "Branded template", "Sales deck"],
    summary: "A full-stack e-commerce website built for a bag manufacturing company, featuring product showcases, online shopping, and business-focused functionality.",
    about: "Planetly’s materials bring recurring brand communications and investor storytelling into a unified presentation system.",
    challenge: "Support several types of communication while keeping the brand and its core message consistent.",
    solution: "A flexible set of layouts creates a reliable foundation for investor, sales, and company-wide stories.",
    accent: "#d5e67b",
    imageFit: "cover",
    posterAspectRatio: 1600 / 912,
    galleryAspectRatios: [1600 / 905, 1600 / 757, 1600 / 763, 1600 / 747, 1600 / 752, 1600 / 764],
    gallery: Array.from({ length: 6 }, (_, index) => `/bag${index + 1}.webp`),
  },
  {
    id: 6,
    slug: "black-box",
    name: "BLACK BOX",
    category: "Investor deck · Redesign · Review",
    year: "2026",
    image: "/pbbanner.png",
    alt: "Black Box project banner",
    tags: ["Investor deck", "Redesign", "Review"],
    summary: "A clear, data-led dashboard presentation that brings key business metrics and reporting visuals into focus.",
    about: "The Black Box project presents its dashboard and reporting visuals in a clear, consistent format.",
    challenge: "Bring key metrics into focus and make the information easier to scan.",
    solution: "A concise visual hierarchy and supporting dashboard assets help viewers move from data to decisions.",
    accent: "#252525",
    posterAspectRatio: 1672 / 941,
    galleryAspectRatios: [912 / 727, 1756 / 722],
    gallery: ["/pb2.png", "/pb3.png"],
  },
  {
    id: 7,
    slug: "data-dashboard",
    name: "DATA DASHBOARD",
    category: "Data visualization · Dashboard",
    year: "2026",
    image: "/databanner.webp",
    alt: "Data Dashboard project banner",
    tags: ["DATA VISUALIZATION", "DASHBOARD DESIGN"],
    summary: "A data dashboard project that organizes important indicators and supporting visuals into a clear reporting experience.",
    about: "The dashboard gallery brings key metrics, data views, and a project walkthrough together in one place.",
    challenge: "Make complex information easier to scan and understand.",
    solution: "A focused layout and clear visual hierarchy help teams find useful insights in the data.",
    accent: "#d7e45e",
    imageFit: "cover",
    posterAspectRatio: 1905 / 885,
    galleryAspectRatios: [1910 / 882, 16 / 9, 1912 / 883, 1917 / 887, 1907 / 872, 1915 / 875],
    gallery: [
      "/data1.webp",
      "/datavid.mp4",
      "/data2.webp",
      "/data3.webp",
      "/data4.webp",
      "/data5.webp",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
