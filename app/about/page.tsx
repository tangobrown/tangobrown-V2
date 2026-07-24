import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import LineIcon from "@/components/LineIcon";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import type { IconName } from "@/data/services";
import { services } from "@/data/services";

// Pool the three services' testimonials into one list for the About-page
// marquee so it has enough quotes to feel populated as the loop cycles.
const aboutTestimonials = services.flatMap((s) => s.testimonials);

export const metadata: Metadata = {
  title: "About — Tango Brown",
  description:
    "Freelance digital growth consultant based in Exeter, Devon, working with businesses across the UK.",
};

const values: Array<{ icon: IconName; title: string; description: string }> = [
  {
    icon: "headset",
    title: "One point of contact",
    description:
      "You deal with me, start to finish. Faster decisions, clearer communication.",
  },
  {
    icon: "shield",
    title: "Built to last",
    description:
      "Fast, maintainable sites and systems that grow with your business.",
  },
  {
    icon: "check",
    title: "No jargon",
    description:
      "Plain English, honest advice, and a clear plan you'll actually understand.",
  },
];

// Placeholder entries — replace with real history when ready. Newest first.
// Set `logo` to a /public path (e.g. '/logos/company.png') to show the
// company mark on the right; otherwise a subtle placeholder box renders.
type WorkEntry = {
  years: string;
  role: string;
  company: string;
  location?: string;
  description: string;
  logo?: string;
};

const workHistory: WorkEntry[] = [
  {
    years: "2020 — Present",
    role: "Digital Growth Consultant",
    company: "Tango Brown",
    location: "Exeter, Devon",
    description:
      "Freelance digital work with UK businesses — bespoke websites, lead generation and practical AI automation, joined up under one point of contact.",
  },
  {
    years: "2016 — 2020",
    role: "Senior Digital Designer",
    company: "Company Name",
    location: "City",
    description:
      "Led design and delivery on client web projects across sectors. Set up team workflows and mentored junior designers. Swap this line for the real detail.",
  },
  {
    years: "2012 — 2016",
    role: "Web Designer & Front-End Developer",
    company: "Company Name",
    location: "City",
    description:
      "Built responsive sites for small businesses and e-commerce clients. First hands-on with SEO, hosting migrations and CMS integrations.",
  },
  {
    years: "2008 — 2012",
    role: "Junior Designer",
    company: "Company Name",
    location: "City",
    description:
      "First role out of study — supported senior designers on print and digital work, learnt the craft end to end.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="container-tb pt-24 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
          <div>
            <div className="font-heading uppercase font-bold text-[13px] tracking-[0.1em] text-muted-faint mb-7">
              About
            </div>
            <h1 className="font-heading uppercase font-bold text-[58px] leading-[1.05] tracking-[-0.03em]">
              Hi, I&apos;m Tim Brown.
            </h1>
            <p className="text-[19px] font-semibold leading-[1.6] text-ink mt-7">
              Nice to meet you. I&apos;m a freelance digital growth consultant
              based in Exeter — helping small businesses across the UK look
              brilliant online, and actually get results from it.
            </p>
            <p className="text-[17px] leading-[1.65] text-ink mt-5">
              Most businesses juggle their digital work between different
              people — one for the website, another for SEO, someone else for
              automation. I do the lot. One person, one point of contact, one
              plan that all joins up. No agency overheads. No account
              managers. No waffle.
            </p>
            <p className="text-[17px] leading-[1.65] text-ink mt-5">
              Whether you&apos;re starting from scratch or fixing what
              isn&apos;t working, I&apos;ll help you make choices that keep
              paying off long after we&apos;re done.
            </p>
          </div>
          <div className="relative h-[520px] w-full">
            <Image
              src="/tim-about.jpg"
              alt="Tim Brown"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
            />
          </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-tb py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((v) => (
            <div key={v.title}>
              <div className="w-[52px] h-[52px] bg-cream flex items-center justify-center mb-5 text-ink">
                <LineIcon name={v.icon} size={26} />
              </div>
              <div className="font-heading uppercase font-bold text-[22px] mb-2.5">
                {v.title}
              </div>
              <div className="text-[15px] leading-[1.55] text-ink">
                {v.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials marquee (matches the service-page pattern) */}
      <TestimonialMarquee testimonials={aboutTestimonials} />

      {/* Work history */}
      <section className="bg-cream border-t-2 border-border-light">
        <div className="container-tb py-24">
          <div className="font-heading uppercase font-bold text-[13px] tracking-[0.1em] text-muted-faint mb-7">
            Work history
          </div>
          <h2 className="font-heading uppercase font-bold text-[45px] leading-[1.05] tracking-[-0.03em] mb-12">
            Where I&apos;ve been.
          </h2>
          <div className="divide-y-2 divide-border-light">
            {workHistory.map((entry) => (
              <article
                key={`${entry.years}-${entry.company}`}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr_140px] gap-x-10 gap-y-3 py-8 first:pt-0 items-start"
              >
                <div className="font-heading uppercase font-bold text-[14px] tracking-[0.06em] text-muted-faint pt-1">
                  {entry.years}
                </div>
                <div>
                  <div className="font-heading uppercase font-bold text-[24px] leading-[1.1] tracking-[-0.02em]">
                    {entry.role}
                  </div>
                  <div className="text-[15px] font-semibold text-ink mt-1 mb-3">
                    {entry.company}
                    {entry.location ? ` · ${entry.location}` : ""}
                  </div>
                  <p className="text-[15px] leading-[1.6] text-ink max-w-[64ch]">
                    {entry.description}
                  </p>
                </div>
                {/* Company logo — placeholder box until an image path is set on the entry */}
                <div className="flex justify-end items-start pt-1">
                  {entry.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={entry.logo}
                      alt={`${entry.company} logo`}
                      className="max-w-[120px] max-h-[80px] w-auto h-auto object-contain"
                    />
                  ) : (
                    <div className="w-[120px] h-[80px] border-2 border-border-light bg-white flex items-center justify-center text-muted-faint text-[11px] uppercase tracking-[0.1em]">
                      Logo
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand headline="Let's have a chat." ctaLabel="Get in touch" />
    </>
  );
}
