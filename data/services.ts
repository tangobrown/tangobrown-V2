// Service data lifted verbatim from the design handoff's serviceData().
// URL slug ("website-builds") is the canonical key. `next` links each
// service to its successor for a "next service" pointer if we want one later.

import type { ServiceSlug } from "@/components/ServiceIcons";

export type IconName =
  | "pencil"
  | "bolt"
  | "target"
  | "refresh"
  | "gauge"
  | "shield"
  | "headset"
  | "search"
  | "pin"
  | "chart"
  | "clock"
  | "link"
  | "sparkle"
  | "check";

export interface ServiceExample {
  name: string;
  tag: string;
  description: string;
  image?: string; // path in /public
}

export interface ServiceDifferentiator {
  icon: IconName;
  title: string;
  description: string;
}

export interface ServiceTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: ServiceSlug;
  num: string; // "01" .. "04"
  title: string;
  short: string; // one-line for mega-menu / cards
  next: ServiceSlug;
  lead: string;
  quote: string;
  examples: ServiceExample[];
  differentiators: ServiceDifferentiator[];
  testimonials: ServiceTestimonial[];
  faqs: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: "website-builds",
    num: "01",
    title: "Website Builds",
    short:
      "Bespoke, fast sites built around your goals and made to convert.",
    next: "website-hosting",
    lead: "Bespoke websites designed around your goals and your customers — fast, accessible and built to turn visitors into enquiries. No templates, no bloat.",
    quote:
      "A website should do more than look good. It should earn its place by turning visitors into customers.",
    examples: [
      {
        image: "/devon-joinery.jpg",
        name: "Devon Joinery",
        tag: "Website Build",
        description:
          "A bespoke site for an Exeter joinery firm — built to showcase craftsmanship and drive estimate enquiries.",
      },
      {
        image: "/pim-pam.jpg",
        name: "PIM-PAM",
        tag: "Website & Branding",
        description:
          "Website and brand identity for the World Bank Group's public infrastructure investment platform.",
      },
      {
        name: "505 Economics",
        tag: "Website Build",
        description:
          "A clean, credible site for an economics consultancy, making complex research approachable.",
      },
    ],
    differentiators: [
      { icon: "pencil", title: "Bespoke, never templated", description: "Designed from scratch around your goals — no themes, no bloat." },
      { icon: "bolt", title: "Fast & lightweight", description: "Clean builds that load in a blink and score well on Core Web Vitals." },
      { icon: "target", title: "Made to convert", description: "Every layout is shaped around the action you want visitors to take." },
      { icon: "refresh", title: "Yours to manage", description: "Update content yourself with a simple CMS and a short handover." },
    ],
    testimonials: [
      { quote: "Tim took the time to understand our trade and built something that actually brings in work. Enquiries are up and it looks brilliant.", author: "Mark Reeves", role: "Devon Joinery" },
      { quote: "The whole process was painless. Tim turned a vague brief into a site that finally reflects how good our work is.", author: "Elena Fisk", role: "505 Economics" },
      { quote: "Fast, thoughtful and no jargon. Our new site loads instantly and the booking form has already paid for itself.", author: "Dan Whitmore", role: "Coastal Café" },
    ],
    faqs: [
      { question: "How long does a website take?", answer: "Most sites take 3–6 weeks from kick-off to launch, depending on size and how quickly content comes together." },
      { question: "Do you write the content too?", answer: "I can. I’ll help shape the structure and copy, or work with what you already have — whatever gets the best result." },
      { question: "Will I be able to edit it myself?", answer: "Yes. I build on a straightforward CMS and walk you through it so you can update text and images with confidence." },
      { question: "What does it cost?", answer: "Every project is quoted on a fixed scope so there are no surprises. Get in touch and I’ll put a clear proposal together." },
    ],
  },
  {
    slug: "website-hosting",
    num: "02",
    title: "Website Hosting",
    short:
      "Secure, reliable hosting with updates, backups and support handled.",
    next: "seo",
    lead: "Fully-managed hosting so your site stays fast, secure and online. Updates, backups and monitoring are handled for you — one less thing to think about.",
    quote:
      "Once your site is live, it should just work — quietly, reliably, without you ever having to think about it.",
    examples: [
      { name: "Zero-downtime migration", tag: "Migration", description: "Moved a slow, insecure site onto fast, managed servers with no downtime for the client." },
      { name: "Always-on monitoring", tag: "Uptime", description: "Proactive alerts and quick fixes keep client sites available around the clock." },
      { name: "Backups that saved the day", tag: "Recovery", description: "Daily backups meant a client’s site was restored in minutes, not days." },
    ],
    differentiators: [
      { icon: "gauge", title: "Always online", description: "Uptime monitoring and rapid fixes keep your site available." },
      { icon: "shield", title: "Secure by default", description: "SSL, firewalls and updates protect your site and your customers." },
      { icon: "refresh", title: "Backed up daily", description: "Automatic daily backups mean nothing is ever lost." },
      { icon: "headset", title: "One point of contact", description: "No call centres — you deal with me, and I know your site." },
    ],
    testimonials: [
      { quote: "Since Tim took over our hosting we’ve had zero downtime and I never worry about it. Any question, he’s straight back to me.", author: "Sarah Coles", role: "The Old Fashioned Cocktail Co." },
      { quote: "Migrating over was completely seamless — I didn’t notice a thing, and the site has been quicker ever since.", author: "Owen Pryce", role: "Pryce & Co." },
      { quote: "Knowing someone is watching the site around the clock is worth every penny. Total peace of mind.", author: "Rachel Dunn", role: "Dunn Interiors" },
    ],
    faqs: [
      { question: "Can you host my existing website?", answer: "Almost always, yes. I’ll review your current setup and handle the migration for you with no downtime." },
      { question: "What happens if something breaks?", answer: "I monitor sites proactively, so I often fix issues before you notice. If something does go wrong, I’m on it fast." },
      { question: "Are backups included?", answer: "Yes — daily backups are standard, and I can restore your site quickly if it’s ever needed." },
      { question: "Is there a long contract?", answer: "No lock-in. Hosting is a simple monthly plan you can leave whenever you like." },
    ],
  },
  {
    slug: "seo",
    num: "03",
    title: "SEO",
    short:
      "Get found by the right people with SEO that gains your site traction in search engines.",
    next: "ai-automation",
    lead: "Get found by the people already looking for you. Technical, on-page and content SEO that builds rankings and traffic that compound over time.",
    quote:
      "The best marketing is being there the moment someone searches for exactly what you offer.",
    examples: [
      { name: "Local search takeover", tag: "Local SEO", description: "Got a Devon trade business ranking in the top three for its key local searches." },
      { name: "Content that ranks", tag: "Content", description: "A focused blog strategy that grew organic traffic month on month." },
      { name: "Technical clean-up", tag: "Technical", description: "Fixed the issues holding a site back and watched rankings climb." },
    ],
    differentiators: [
      { icon: "search", title: "Get found", description: "Rank for the searches your customers are already making." },
      { icon: "pin", title: "Local visibility", description: "Show up in map results and ‘near me’ searches that drive footfall." },
      { icon: "chart", title: "Compounding returns", description: "Organic traffic that keeps growing without paying per click." },
      { icon: "gauge", title: "Clear reporting", description: "Plain-English reports so you always know what’s working." },
    ],
    testimonials: [
      { quote: "We went from nowhere to the front page for our main searches. The phone genuinely rings more because of it.", author: "James Whitfield", role: "Northside" },
      { quote: "We finally show up when people search locally. The enquiries coming through are exactly the customers we want.", author: "Meera Shah", role: "Shah Dental" },
      { quote: "Clear reporting, no smoke and mirrors. Tim explained what he was doing and the rankings followed.", author: "Greg Allen", role: "Allen Plumbing" },
    ],
    faqs: [
      { question: "How long until I see results?", answer: "SEO is a longer game — expect meaningful movement in 3–6 months, with results that keep compounding." },
      { question: "Do you guarantee rankings?", answer: "No honest SEO can guarantee a #1 spot, but I focus on the changes that reliably move the needle." },
      { question: "Is this just for local businesses?", answer: "Not at all. I do local SEO and broader national and content-led SEO depending on your goals." },
      { question: "Will you report on progress?", answer: "Yes. You’ll get regular, jargon-free reports showing rankings, traffic and what I’m working on next." },
    ],
  },
  {
    slug: "ai-automation",
    num: "04",
    title: "AI & Automation",
    short:
      "Practical AI tools and workflows that save you hours every week.",
    next: "website-builds",
    lead: "Put the repetitive work on autopilot. Practical AI tools and automated workflows that save hours, reduce errors and free you to focus on the business.",
    quote:
      "The goal isn’t clever technology for its own sake — it’s giving you back the hours you’re losing to repetitive work.",
    examples: [
      { name: "Enquiry auto-responder", tag: "AI Assistant", description: "An assistant that answers common questions and books calls automatically." },
      { name: "Joined-up tools", tag: "Integration", description: "Connected a client’s forms, CRM and inbox so data is only entered once." },
      { name: "Admin on autopilot", tag: "Automation", description: "Automated invoicing and follow-ups, saving hours every week." },
    ],
    differentiators: [
      { icon: "clock", title: "Save hours", description: "Automate the repetitive admin that eats into your week." },
      { icon: "check", title: "Fewer errors", description: "Let systems handle the copy-paste work people get wrong." },
      { icon: "link", title: "Connects your tools", description: "Integrations so the software you already use talks to itself." },
      { icon: "sparkle", title: "Practical, not hype", description: "Proven tools chosen to fit how you actually work." },
    ],
    testimonials: [
      { quote: "Tim automated the boring half of my admin. I’ve genuinely got an afternoon a week back — it paid for itself immediately.", author: "Priya Nair", role: "Apex Ltd" },
      { quote: "The assistant handles the questions I used to answer twenty times a day. It’s like having an extra pair of hands.", author: "Tom Beckett", role: "Beckett Lettings" },
      { quote: "Everything just talks to each other now. No more copying data between systems and hoping I got it right.", author: "Laura Kemp", role: "Kemp Studio" },
    ],
    faqs: [
      { question: "Do I need to be technical?", answer: "Not at all. I handle the setup and hand you something simple that just works, with training if you need it." },
      { question: "Which tools do you work with?", answer: "I work with the tools you already use where possible, and connect them with proven automation platforms." },
      { question: "Is my data safe?", answer: "Yes. I use reputable, secure platforms and only ever automate what you’re comfortable with." },
      { question: "Where do we start?", answer: "With a quick chat about where your time goes. I’ll spot the easy wins and suggest what to automate first." },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
