export interface Project {
  name: string;
  services: string[]; // e.g. ["Website Design", "SEO"]
  overview: string;
  url?: string;
  image?: string; // /public path
}

/**
 * Selected projects — used by the home hero card columns, home
 * work carousel, and the /work grid. Placeholders until real
 * images / URLs arrive.
 */
export const projects: Project[] = [
  {
    name: "Devon Joinery",
    services: ["Website Design"],
    overview:
      "A bespoke website for an Exeter joinery firm — built to showcase their craftsmanship and turn visitors into estimate enquiries.",
    url: "https://www.devonjoinery.co.uk",
    image: "/devon-joinery.jpg",
  },
  {
    name: "PIM-PAM",
    services: ["Website Design", "Branding"],
    overview:
      "Website and brand identity for the World Bank Group's public infrastructure investment and asset governance platform — a digital toolkit used by governments worldwide.",
    url: "https://pim-pam.net",
    image: "/pim-pam.jpg",
  },
  {
    name: "505 Economics",
    services: ["Website Design"],
    overview:
      "A clean, credible site for an economics consultancy — making complex research approachable for the clients who commission it.",
  },
  {
    name: "The Old Fashioned Cocktail Co.",
    services: ["SEO", "Website Hosting"],
    overview:
      "A drinks brand refresh backed by search and hosting — more visibility, faster pages and steadier sales all year round.",
  },
  {
    name: "Project name",
    services: ["AI & Automation"],
    overview: "A short line about the project and the result it delivered.",
  },
];

/** Extra mini-cards for the home hero auto-scroll columns. */
export interface HeroCard {
  name: string;
  tag: string;
  image?: string;
}

export const heroUpCards: HeroCard[] = [
  { name: "Devon Joinery", tag: "Web Design", image: "/devon-joinery.jpg" },
  { name: "Harbour Co.", tag: "Web Design" },
  { name: "Northside", tag: "SEO" },
  { name: "Bloom Studio", tag: "Hosting" },
  { name: "Apex Ltd", tag: "Automation" },
  { name: "Coastal Café", tag: "Web Design" },
];

export const heroDownCards: HeroCard[] = [
  { name: "PIM-PAM", tag: "Web + Branding", image: "/pim-pam.jpg" },
  { name: "Granite Build", tag: "Web Design" },
  { name: "Tide & Co.", tag: "SEO" },
  { name: "Meadow Health", tag: "AI Tools" },
  { name: "Forge Digital", tag: "Hosting" },
  { name: "Vale Interiors", tag: "Web Design" },
];
