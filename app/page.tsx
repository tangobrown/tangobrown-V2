import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import SignatureCTA from "@/components/SignatureCTA";
import HeroCardColumns from "@/components/HeroCardColumns";
import WorkCarousel from "@/components/WorkCarousel";
import CtaBand from "@/components/CtaBand";
import {
  WebsitesIcon,
  LeadGenerationIcon,
  AiIcon,
} from "@/components/ServiceIcons";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

const serviceIcons = {
  websites: WebsitesIcon,
  "lead-generation": LeadGenerationIcon,
  "ai-automation": AiIcon,
} as const;

function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.slug];
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white border-2 border-border-light p-8 md:p-10 shadow-md">
      {/* Image — mobile: top; desktop: right (via md:order-2) */}
      <div className="relative aspect-[4/3] bg-cream border-2 border-border-light md:order-2">
        {service.heroImage ? (
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-faint">
            <Icon size={64} />
          </div>
        )}
      </div>
      {/* Text — mobile: under image; desktop: left (via md:order-1) */}
      <div className="flex flex-col md:order-1">
        <div>
          <h3 className="font-heading uppercase font-bold text-[32px] md:text-[38px] leading-[1.05] tracking-[-0.02em] mb-4">
            {service.title}
          </h3>
          <p className="text-[17px] leading-[1.55] text-ink max-w-[42ch]">
            {service.short}
          </p>
        </div>
        <div className="mt-auto pt-8 flex justify-start">
          <SignatureCTA href={`/services/${service.slug}`}>
            Learn more
          </SignatureCTA>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="container-tb grid grid-cols-1 md:grid-cols-[1fr_720px] gap-12 items-center min-h-[680px]">
          <div>
            <div className="font-heading uppercase font-bold text-[13px] tracking-[0.1em] text-muted-faint mb-[22px]">
              Digital Growth Consultant
            </div>
            <h1 className="font-heading uppercase font-bold text-[60px] leading-[1.04] tracking-[-0.03em] max-w-[14ch]">
              Your growth is my mission.
            </h1>
            <p className="text-[19px] font-semibold leading-[1.55] text-ink max-w-[46ch] mt-[22px]">
              Technology moves fast. I keep your business ahead of it with
              stunning websites and smart AI automation to fuel growth online.
            </p>
            <div className="mt-7">
              <SignatureCTA href="/contact">Start a project</SignatureCTA>
            </div>
          </div>
          <div className="hidden md:block">
            <HeroCardColumns />
          </div>
        </div>
      </section>

      {/* About band (dark) */}
      <section className="bg-dark-bg text-white">
        <div className="container-tb grid grid-cols-1 md:grid-cols-[500px_1fr] gap-[72px] items-stretch min-h-[620px]">
          {/* Portrait */}
          <div className="relative w-full h-full min-h-[400px]">
            <Image
              src="/tim-portrait.jpg"
              alt="Tim Brown"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
            />
          </div>
          <div className="py-24 self-center">
            <div className="font-heading uppercase font-bold text-[13px] tracking-[0.1em] text-dark-label mb-[26px]">
              About me
            </div>
            <h2 className="font-heading uppercase font-bold text-[45px] leading-[1.08] tracking-[-0.025em]">
              Hi, I&apos;m Tim Brown.
            </h2>
            <p className="text-[18px] leading-[1.6] text-white mt-[26px] max-w-[50ch]">
              I&apos;m a freelance digital growth consultant based in Exeter,
              working with businesses across the UK. I help them build a
              presence online that looks the part and actually performs.
            </p>
            <p className="text-base leading-[1.65] text-white mt-[18px] max-w-[52ch]">
              I join up the pieces most businesses juggle separately — design,
              hosting, SEO and automation — under one roof, with one person
              accountable for the whole thing. No agency overheads, no jargon.
            </p>
            <div className="mt-[34px]">
              <SignatureCTA href="/about" variant="dark">
                More about me
              </SignatureCTA>
            </div>
          </div>
        </div>
      </section>

      {/* Statement + stacking service cards */}
      <section className="container-tb py-24">
        <p
          className="font-heading font-bold leading-[1.25] tracking-[-0.02em] max-w-[880px]"
          style={{ fontSize: "45px" }}
        >
          <span className="text-ink">Helping businesses</span>{" "}
          <span className="text-muted-extra">
            communicate clearly and grow online through design, performance
            and automation.
          </span>
        </p>
        <div className="relative mt-10">
          {services.map((s, i) => {
            // Each card sticks a few px lower than the last so the previous
            // card's top edge stays visible peeking out above the current one.
            const top = 100 + i * 16;
            return (
              <div
                key={s.slug}
                className="sticky pb-6"
                style={{ top: `${top}px` }}
              >
                <ServiceCard service={s} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Selected work carousel */}
      <section className="bg-cream border-t-2 border-border-light">
        <div className="container-tb py-24">
          <WorkCarousel projects={projects} />
        </div>
      </section>

      <CtaBand
        headline="Let's grow your business online."
        ctaLabel="Start a project"
      />
    </>
  );
}
