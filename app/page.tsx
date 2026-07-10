import Link from "next/link";
import SignatureCTA from "@/components/SignatureCTA";
import UnderlineLink from "@/components/UnderlineLink";
import HeroCardColumns from "@/components/HeroCardColumns";
import WorkCarousel from "@/components/WorkCarousel";
import CtaBand from "@/components/CtaBand";
import {
  WebsiteBuildsIcon,
  HostingIcon,
  SeoIcon,
  AiIcon,
} from "@/components/ServiceIcons";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

const serviceIcons = {
  "website-builds": WebsiteBuildsIcon,
  "website-hosting": HostingIcon,
  seo: SeoIcon,
  "ai-automation": AiIcon,
} as const;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-tb grid grid-cols-1 md:grid-cols-[1fr_720px] gap-12 items-center min-h-[680px]">
          <div>
            <div className="font-heading uppercase font-bold text-[13px] tracking-[0.1em] text-muted-faint mb-[22px]">
              Digital Growth Consultant
            </div>
            <h1 className="font-heading uppercase font-bold text-[60px] leading-[1.04] tracking-[-0.03em] max-w-[14ch]">
              Your growth is my mission.
            </h1>
            <p className="text-[19px] font-semibold leading-[1.55] text-muted max-w-[46ch] mt-[22px]">
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
          {/* Photo placeholder — client will supply real portrait */}
          <div className="w-full h-full min-h-[400px] bg-dark-card border-2 border-dark-border flex items-center justify-center text-dark-label text-sm">
            Portrait
          </div>
          <div className="py-24 self-center">
            <div className="font-heading uppercase font-bold text-[13px] tracking-[0.1em] text-dark-label mb-[26px]">
              About me
            </div>
            <h2 className="font-heading uppercase font-bold text-[45px] leading-[1.08] tracking-[-0.025em]">
              Hi, I&apos;m Tim Brown.
            </h2>
            <p className="text-[18px] leading-[1.6] text-dark-text mt-[26px] max-w-[50ch]">
              I&apos;m a freelance digital growth consultant based in Exeter,
              working with businesses across the UK. I help them build a
              presence online that looks the part and actually performs.
            </p>
            <p className="text-base leading-[1.65] text-dark-soft mt-[18px] max-w-[52ch]">
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

      {/* Statement */}
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
      </section>

      {/* Services preview */}
      <section className="container-tb pb-24">
        <div className="flex items-baseline justify-between mb-9">
          <h2 className="font-heading uppercase font-bold text-[45px] tracking-[-0.02em]">
            What I do
          </h2>
          <UnderlineLink href="/services/website-builds">All services</UnderlineLink>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => {
            const Icon = serviceIcons[s.slug];
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="border-2 border-border p-[26px] min-h-[300px] flex flex-col justify-between transition-colors hover:border-[#8f8d83] no-underline"
              >
                <div className="text-ink">
                  <Icon size={38} />
                </div>
                <div>
                  <div className="font-heading uppercase font-semibold text-[24px] mb-2.5">
                    {s.title}
                  </div>
                  <div className="text-base leading-[1.5] text-muted-soft">
                    {s.short}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Selected work carousel */}
      <section className="container-tb pb-24">
        <WorkCarousel projects={projects} />
      </section>

      <CtaBand
        headline="Let's grow your business online."
        ctaLabel="Start a project"
      />
    </>
  );
}
