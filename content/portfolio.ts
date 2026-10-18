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
  liveDemo?: string;
  illustration: string;
  imageAlt?: string;
  imageCaption?: string;
  summary: string;
  caseStudy: {
    problem: string;
    goal: string;
    solution: string;
    features: string[];
    development: string;
  };
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
    summary: "A GPS-enabled gravesite locator and cemetery management capstone, with mapping and spatial-data validation in progress.",
    caseStudy: {
      problem: "The capstone addresses locating gravesites and managing cemetery information through a web application.",
      goal: "Support gravesite location with GPS-enabled mapping and validated cemetery spatial data.",
      solution: "An application in development that brings cemetery mapping workflows and gravesite management together.",
      features: ["Gravesite location workflows", "Cemetery mapping", "Cemetery spatial-data validation", "Cemetery management"],
      development: "Current work includes GIS data preparation, mapping workflows, and development planning with the capstone team. Final functionality and deployed availability remain unverified.",
    },
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
    summary: "An IoT water filtration research dashboard for monitoring records, authentication, and role-based management.",
    caseStudy: {
      problem: "The water filtration research system needs interfaces for monitoring records and managing access.",
      goal: "Connect the dashboard interface to backend services while supporting authentication and role-based user management.",
      solution: "A web dashboard with API-backed pages and access-management interfaces. Integration and end-to-end verification are ongoing.",
      features: ["Monitoring record interfaces", "Authentication integration", "Backend API integration", "Role-based user management"],
      development: "Contributions cover frontend redesign, authentication, backend API integration, and user management. Live hardware and database verification remain separate tasks; changes are subject to end-to-end verification.",
    },
  },
  {
    slug: "tilematch",
    title: "TILEMATCH",
    subtitle: "Full-Stack Web Application",
    description:
      "An academic e-commerce platform for browsing tile products, managing shopping carts, placing simulated orders, tracking orders, and managing products, inventory, and sales through an administrator dashboard.",
    contribution:
      "Independently developed the full-stack website for our E-Commerce subject, using React, Vite, and Tailwind CSS for the frontend, Node.js and Express.js for the backend, and MySQL for the database. Deployment uses Vercel, Render, and Aiven.",
    status: "Academic project · Simulated orders",
    technologies: [
      "React", "Vite", "Tailwind CSS", "Node.js", "Express.js",
      "MySQL", "Vercel", "Render", "Aiven",
    ],
    repo: "https://github.com/BossTwenty1/TILEMATCH",
    liveDemo: "https://tilematch-omega.vercel.app/",
    illustration: "/images/projects/tilematch-homepage.png",
    imageAlt: "TILEMATCH storefront homepage with tile search, navigation, and a luxury tile collection hero",
    imageCaption: "TILEMATCH homepage screenshot",
    summary: "An academic tile-commerce platform with product browsing, shopping carts, simulated orders, and administrator tools.",
    caseStudy: {
      problem: "The E-Commerce subject project brings tile shopping and store administration into a full-stack academic website.",
      goal: "Support the shopping journey from product browsing through simulated ordering and tracking, alongside product, inventory, and sales management.",
      solution: "TILEMATCH combines a React storefront, a Node.js and Express.js backend, and a MySQL database. Orders are simulated for academic use.",
      features: ["Tile product browsing", "Shopping cart management", "Simulated order placement", "Order tracking", "Administrator product and inventory management", "Administrator sales management"],
      development: "Independently developed for the E-Commerce subject. The frontend uses React, Vite, and Tailwind CSS; the backend uses Node.js and Express.js with MySQL. Deployment uses Vercel, Render, and Aiven.",
    },
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
  issuedOn?: string;
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
    id: "hackerrank-sql-intermediate",
    kind: "certificate",
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    issuedOn: "2026-10-18",
    verify: "https://www.hackerrank.com/certificates/bb9e803e664b",
    image: {
      src: "https://drive.google.com/thumbnail?id=1cGMNpGk0H53ahMX6L0zwvWlFUahDbIvP&sz=w1600",
      alt: "SQL (Intermediate) certificate awarded to Nash Alota Mapula by HackerRank",
    },
  },
  {
    id: "hackerrank-frontend-react",
    kind: "certificate",
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    issuedOn: "2026-10-18",
    verify: "https://www.hackerrank.com/certificates/eccfd63a7413",
    image: {
      src: "https://drive.google.com/thumbnail?id=1Jxv1u9bP52YnC_fWV9X_m5rQ01YUTW6Z&sz=w1600",
      alt: "Frontend Developer (React) certificate awarded to Nash Alota Mapula by HackerRank",
    },
  },
  {
    id: "hackerrank-rest-api-intermediate",
    kind: "certificate",
    title: "Rest API (Intermediate)",
    issuer: "HackerRank",
    issuedOn: "2026-10-18",
    verify: "https://www.hackerrank.com/certificates/2070badd870b",
    image: {
      src: "https://drive.google.com/thumbnail?id=17IfHOMmDnVxZtIGPtzfzpA78n5UELPt6&sz=w1600",
      alt: "Rest API (Intermediate) certificate awarded to Nash Alota Mapula by HackerRank",
    },
  },
  {
    id: "hackerrank-software-engineer-intern",
    kind: "certificate",
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    issuedOn: "2026-10-18",
    verify: "https://www.hackerrank.com/certificates/0c82b42e60d5",
    image: {
      src: "https://drive.google.com/thumbnail?id=1lYNpbB2o1DoTzFEdwKWsPh_29uXs-8UK&sz=w1600",
      alt: "Software Engineer Intern certificate awarded to Nash Alota Mapula by HackerRank",
    },
  },
  {
    id: "hackerrank-javascript-intermediate",
    kind: "certificate",
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    issuedOn: "2026-10-18",
    verify: "https://www.hackerrank.com/certificates/34ddc4796b42",
    image: {
      src: "https://drive.google.com/thumbnail?id=1z4ZSdCJ06ScnOuU-srTOljXFnSBj8VuK&sz=w1600",
      alt: "JavaScript (Intermediate) certificate awarded to Nash Alota Mapula by HackerRank",
    },
  },
  {
    id: "hackerrank-problem-solving-intermediate",
    kind: "certificate",
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    issuedOn: "2026-10-18",
    verify: "https://www.hackerrank.com/certificates/4546c9b715d4",
    image: {
      src: "https://drive.google.com/thumbnail?id=1ODLXqztqu-zShwPLEjr1s7MjUjF6Ng96&sz=w1600",
      alt: "Problem Solving (Intermediate) certificate awarded to Nash Alota Mapula by HackerRank",
    },
  },
  {
    id: "oneroadmap-full-stack",
    kind: "certificate",
    title: "Full Stack Developer",
    issuer: "OneRoadmap",
    issuedOn: "2026-10-18",
    verify: "https://www.oneroadmap.io/skills/fs/certificate/CERT-DD33F18B",
    image: {
      src: "https://drive.google.com/thumbnail?id=1CktNKtiXp_hhHyyyMdFyGsqR1OC5oc3t&sz=w1600",
      alt: "Full Stack Developer certificate awarded to Nash Mapula by OneRoadmap",
    },
  },
  {
    id: "oneroadmap-tech-workplace",
    kind: "certificate",
    title: "Tech Workplace Competency",
    issuer: "OneRoadmap",
    issuedOn: "2026-10-18",
    verify: "https://www.oneroadmap.io/skills/tech-workplace-competency/certificate/CERT-26954433",
    image: {
      src: "https://drive.google.com/thumbnail?id=1q_unF0GL1fBEFODNAJ1DYhEXNDCg2_0z&sz=w1600",
      alt: "Tech Workplace Competency certificate awarded to Nash Mapula by OneRoadmap",
    },
  },
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

export const featuredCertificates = [
  "oneroadmap-full-stack",
  "heroes-innovation-handiong",
  "hackerrank-frontend-react",
].map((id) => publishedCertificates.find((item) => item.id === id))
  .filter((item): item is PublishedCertificate => item !== undefined);

export const certificateGroups = [
  "HackerRank", "OneRoadmap", "CodeCred", "Awards & Achievements",
].map((title) => ({
  title,
  items: publishedCertificates.filter((item) => item.kind === "award"
    ? title === "Awards & Achievements"
    : item.issuer === title),
})).filter((group) => group.items.length > 0);
