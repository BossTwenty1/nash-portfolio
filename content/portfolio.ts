/**
 * Edit this file first. Keep public claims truthful and verified.
 * Null values intentionally hide contact information until provided.
 */
export const profile = {
  name: "Nash A. Mapula",
  heroName: "NASH MAPULA",
  portrait: "/nash-mapula-newportrait.png",
  role: "Full-Stack Developer",
  education: "Fourth-year BS Information Technology student",
  intro:
    "I'm a Full-Stack Developer focused on building modern, responsive, and functional web applications. I work across frontend interfaces, backend integrations, and database-driven features, turning ideas into practical software solutions.",
  location: "Daraga, Albay, Philippines",
  availability: "Available for Work",
  email: "nashmapula.dev@gmail.com",
  instagram: "https://www.instagram.com/ur.nashh_/?utm_source=qr",
  facebook: "https://www.facebook.com/nash.mapula/",
  linkedin: "https://www.linkedin.com/in/nash-mapula-a54034444/",
  github: "https://github.com/BossTwenty1",
  resume: null as string | null, // TODO: Add /resume.pdf when your resume is ready.
};

export const about = {
  paragraphs: [
    "Full-Stack Developer and fourth-year Information Technology student with hands-on experience in web development, frontend and backend technologies, database integration, and building practical software solutions.",
    "I develop responsive web applications, work with modern development tools, and explore different approaches to solving technical challenges. My experience includes building user interfaces, integrating application services, and collaborating on projects that address real-world needs.",
    "Adaptable, detail-oriented, and continuously learning, I aim to strengthen my expertise in software development, system architecture, and emerging technologies while creating efficient, reliable, and user-friendly digital solutions.",
  ],
  focus: [
    "Full-Stack Applications",
    "Technical Problem-Solving",
    "Authentication & Access Control",
  ],
};

// Only technologies and workflows already documented in this portfolio.
export const coreSkillGroups = [
  {
    title: "Development, data, and tools",
    items: [
      "React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS",
      "SQL", "Supabase", "Git", "GitHub", "VS Code",
    ],
  },
  {
    title: "Systems, security, and delivery",
    items: [
      "REST APIs", "Authentication", "Role-based access",
      "Backend integration", "GIS / Mapping", "GPS workflows",
    ],
  },
];

export type PortfolioProject = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  contribution: string;
  status: string;
  technologies: string[];
  repo: string | null;
  illustration: string;
};

export const projects: PortfolioProject[] = [
  {
    slug: "gravenav",
    title: "GraveNav",
    subtitle: "Capstone · Cemetery mapping",
    description:
      "A GPS-enabled web application being developed for gravesite location and cemetery management. The current capstone work includes mapping workflows and validating cemetery spatial data.",
    contribution:
      "Working with the team on application development and mapping workflows. Final functionality and deployed availability are not yet verified.",
    status: "In development",
    technologies: ["Web Development", "GIS / Mapping", "GPS"],
    repo: "https://github.com/BossTwenty1/Github-Final",
    illustration: "/gravenav-illustration.svg",
  },
  {
    slug: "safe",
    title: "S.A.F.E",
    subtitle: "Collaborative · IoT monitoring",
    description:
      "A web dashboard for an IoT-based water filtration research system, with interfaces for monitoring records and managing access.",
    contribution:
      "Implemented frontend redesign work, authentication integration, API-backed pages, and role-based user-management changes. Live hardware and database verification remain separate tasks.",
    status: "Integration in progress",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "Supabase",
    ],
    repo: "https://github.com/BossTwenty1/iot-water-filtration-system",
    illustration: "/safe-illustration.svg",
  },
];

export type Experience = {
  period: string;
  title: string;
  organization: string;
  description: string;
  skills: string[];
  kind?: "Hackathon prototype";
  team?: string;
  event?: string;
  recognition?: string;
  additionalParagraphs?: string[];
  galleryUrl?: string;
};

export const experience: Experience[] = [
  {
    period: "Ongoing",
    title: "Capstone Project Developer",
    organization: "GraveNav · Academic project",
    description:
      "Collaborating on a GPS-enabled gravesite location and cemetery management application, including GIS data preparation and development planning.",
    skills: ["Web Development", "Mapping", "Team Collaboration"],
  },
  {
    period: "Ongoing",
    title: "Frontend & Integration Contributor",
    organization: "S.A.F.E · Collaborative research project",
    description:
      "Contributed to dashboard UI, authentication, backend API integration, and user-management features. Changes are still subject to end-to-end verification.",
    skills: ["React", "TypeScript", "API Integration"],
  },
  {
    period: "August 2026",
    title: "Project Initiator & Sole Prototype Developer",
    organization: "LakbayAlbay · Hackathon prototype",
    kind: "Hackathon prototype",
    team: "Mind Goblins",
    event: "Heroes of Innovation Challenge 2026 — Ibalong Festival Hackathon",
    recognition: "3rd Place · Handiong Track",
    description:
      "Proposed and independently developed LakbayAlbay, a travel discovery and smart itinerary-planning prototype designed to help tourists explore Bicol's destinations, local businesses, and cultural experiences.",
    additionalParagraphs: [
      "Built a prototype showcasing destination discovery, a Trip Basket, and itinerary-planning interfaces to demonstrate a more organized and convenient travel experience.",
      "Our team, Mind Goblins, achieved 3rd Place in the Handiong Track.",
    ],
    skills: [],
    galleryUrl: "https://drive.google.com/drive/folders/19MBhf311F7pKBapNW2tcFzNZkl7z3049?usp=sharing",
  },
];

export const stack = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { category: "Backend & Data", items: ["SQL", "Supabase", "REST APIs"] },
  {
    category: "Workflow & Tools",
    items: ["Git", "GitHub", "VS Code", "Codex"],
  },
];

// Do not fabricate equipment, qualifications, or testimonials.
export type GearItem = {
  id: string;
  name: string;
  description: string;
  category: (typeof gearCategories)[number];
  image: string;
  imageAlt: string;
  link: string;
  linkStatus: "verified" | "unverified" | "manufacturer" | "related-model";
  referenceLabel?: string;
  referenceNote?: string;
};
export const gearCategories = [
  "Computing & Peripherals", "Workspace & Ergonomics",
  "Audio", "Mobile & Everyday Carry",
] as const;

export const gear: GearItem[] = [
  {
    id: "lenovo-legion-5", name: "Lenovo Legion 5 15AHP10",
    category: "Computing & Peripherals",
    description: "My primary laptop for coding and development.",
    image: "/images/gear/lenovo-legion-5.webp",
    imageAlt: "Black Lenovo Legion laptop, open on a white background",
    link: "https://pcx.com.ph/products/lenovo-legion-5-15ahp10-83m00051ph-geforce-rtx-5050-amd-ryzen-7-laptop-eclipse-black",
    linkStatus: "verified",
  },
  {
    id: "acer-ek251q", name: "Acer EK251Q P6bi Monitor",
    category: "Computing & Peripherals",
    description: "External monitor for multitasking and productivity.",
    image: "/images/gear/acer-ek251q.webp",
    imageAlt: "Acer monitor and stand on a white background",
    link: "https://pcx.com.ph/products/acer-24-5-ek251q-p6bi-144hz-ips-monitor",
    linkStatus: "verified",
  },
  {
    id: "akko-5075b-plus", name: "Akko Black&Silver 5075B Plus",
    category: "Computing & Peripherals",
    description: "Mechanical keyboard for coding and daily use.",
    image: "/images/gear/akko-5075b-plus.webp",
    imageAlt: "Black and silver Akko keyboard viewed from above",
    link: "https://en.akkogear.com/product/blacksilver-5075b-plus-mechanical-keyboard/",
    linkStatus: "verified",
  },
  {
    id: "vxe-dragonfly-r1", name: "VXE Dragonfly R1 Series Wireless Mouse",
    category: "Computing & Peripherals",
    description: "Lightweight wireless mouse for everyday use.",
    image: "/images/gear/vxe-dragonfly-r1.webp",
    imageAlt: "Black VXE Dragonfly R1 series mouse viewed from above",
    link: "https://www.atk.store/products/vxe-dragonfly-r1-series-wireless-mouse",
    linkStatus: "verified",
  },
  {
    id: "secure-650va-ups", name: "SECURE 650VA UPS",
    category: "Computing & Peripherals",
    description: "Backup power for my computer setup.",
    image: "/images/gear/secure-650va-ups.webp",
    imageAlt: "Black SECURE uninterruptible power supply on white",
    link: "https://pcx.com.ph/collections/uninterruptible-power-supply-ups/products/secure-650va-ups-black",
    linkStatus: "verified",
  },
  {
    id: "icon-computer-desk", name: "ICON Computer Desk Office Wooden Table",
    category: "Workspace & Ergonomics",
    description: "My dedicated workspace for development.",
    image: "/images/gear/icon-computer-desk.webp",
    imageAlt: "Wood-top computer desk with a black metal frame",
    link: "https://shop.tiktok.com/ph/pdp/1730245506760411915",
    linkStatus: "unverified",
  },
  {
    id: "xpanse-ls900", name: "Xpanse LS900 Gray Nylon Ergonomic Chair",
    category: "Workspace & Ergonomics",
    description: "Ergonomic seating for long work sessions.",
    image: "/images/gear/xpanse-ls900.webp",
    imageAlt: "Gray ergonomic office chair with headrest and armrests",
    link: "https://shop.tiktok.com/ph/pdp/1730979779794536741",
    linkStatus: "unverified",
  },
  {
    id: "alcatroz-mg300a", name: "Alcatroz Alpha MG-300a Gaming Headset",
    category: "Audio",
    description: "Headset for meetings and communication.",
    image: "/images/gear/alcatroz-mg300a.webp",
    imageAlt: "Black and blue over-ear headset with boom microphone",
    link: "https://www.asianic.com.ph/product/armaggeddon-alpha-mg300a-gaming-headset",
    linkStatus: "verified",
  },
  {
    id: "iphone-13", name: "Apple iPhone 13",
    category: "Mobile & Everyday Carry",
    description: "My everyday iOS smartphone.",
    image: "/images/gear/iphone-13-midnight-blue.webp",
    imageAlt: "Midnight blue iPhone shown from the front and back",
    link: "https://www.apple.com/ph/iphone/",
    linkStatus: "manufacturer", referenceLabel: "Manufacturer reference",
  },
  {
    id: "lenovo-tab-m10", name: "Lenovo Tab M10",
    category: "Mobile & Everyday Carry",
    description: "Tablet for reading and productivity.",
    image: "/images/gear/lenovo-tab-m10.webp",
    imageAlt: "Gray Lenovo tablet shown from the back",
    link: "https://www.lenovo.com/ph/en/p/tablets/lenovo-tab-m10-gen-3/len103l0009",
    linkStatus: "related-model", referenceLabel: "Related model reference",
    referenceNote: "This reference is for Gen 3; my tablet generation is not confirmed.",
  },
  {
    id: "redmi-note-14", name: "Xiaomi Redmi Note 14 5G",
    category: "Mobile & Everyday Carry",
    description: "Android smartphone for everyday use.",
    image: "/images/gear/redmi-note-14-dual-view.webp",
    imageAlt: "Dark Redmi smartphone shown from the front and back",
    link: "https://www.mi.com/ph/product/redmi-note-14-5g/",
    linkStatus: "verified",
  },
];

export type Recommendation = {
  quote: string;
  name: string;
  role: string;
  date?: string;
  link?: string;
};
export const recommendations: Recommendation[] = [];

export type Certificate = {
  id: string;
  kind: "certificate" | "award";
  title: string;
  issuer?: string;
  event?: string;
  team?: string;
  year?: string;
  verify?: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
};
export const certificates: Certificate[] = [
  {
    id: "codecred-html",
    kind: "certificate",
    title: "HTML Fundamentals",
    issuer: "CodeCred",
    verify: "https://www.codecred.dev/verify/f971a4f7-ef9f-4488-88e3-94811f1f8826",
    image: {
      src: "https://drive.google.com/thumbnail?id=1zeYyi56pX0yM2z9ifzI_aLUM9zju4haP&sz=w2400",
      alt: "HTML Fundamentals Certificate of Achievement awarded to Nash Mapula by CodeCred",
      width: 2339,
      height: 1653,
    },
  },
  {
    id: "heroes-innovation-handiong",
    kind: "award",
    title: "3rd Place — Handiong Track",
    event: "Heroes of Innovation Challenge 2026 — Ibalong Festival Hackathon",
    team: "Mind Goblins",
    verify: "https://drive.google.com/drive/folders/19MBhf311F7pKBapNW2tcFzNZkl7z3049?usp=sharing",
    image: {
      src: "https://drive.google.com/thumbnail?id=1wv5vs7io-pA-akhuzZroCZMLWXp6WFuB&sz=w2400",
      alt: "Certificate of Recognition for Mind Goblins at the Heroes of Innovation Challenge 2026 — Ibalong Festival Hackathon",
    },
  },
];

export type PublishedCertificate = Certificate & {
  image: NonNullable<Certificate["image"]>;
  verify: string;
};

export function isPublishedCertificate(item: Certificate): item is PublishedCertificate {
  return Boolean(item.image?.src && item.image.alt && item.verify?.trim());
}

export const publishedCertificates = certificates.filter(isPublishedCertificate);
