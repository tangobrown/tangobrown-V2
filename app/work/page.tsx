import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import UnderlineLink from "@/components/UnderlineLink";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — Tango Brown",
  description:
    "Selected projects: bespoke websites, hosting, SEO and automation for UK businesses.",
};

export default function WorkPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream border-b-2 border-border-light">
        <div className="container-tb pt-24 pb-14">
          <div className="font-heading uppercase font-bold text-[13px] tracking-[0.1em] text-muted-faint mb-7">
            Selected work
          </div>
          <h1 className="font-heading uppercase font-bold text-[64px] leading-[1.04] tracking-[-0.03em] max-w-[16ch]">
            A few projects I&apos;m proud of.
          </h1>
          <p className="text-[19px] font-semibold leading-[1.55] text-ink max-w-[52ch] mt-7">
            Websites, hosting, SEO and automation for UK businesses.
          </p>
        </div>
      </section>

      {/* Project rows */}
      <section className="container-tb pb-24">
        <div className="divide-y-2 divide-border-light">
          {projects.map((p) => (
            <article
              key={p.name}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16 first:pt-0"
            >
              {/* Image left */}
              <div className="aspect-[1000/606] w-full overflow-hidden bg-white">
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover object-top block"
                  />
                ) : (
                  <div className="w-full h-full bg-placeholder-soft border-2 border-border flex items-center justify-center text-muted-faint text-sm">
                    Project image
                  </div>
                )}
              </div>
              {/* Text right */}
              <div>
                <div className="text-[13px] text-muted-faint uppercase tracking-[0.06em] mb-4">
                  {p.services.join(" · ")}
                </div>
                <h2 className="font-heading uppercase font-bold text-[36px] leading-[1.1] tracking-[-0.02em] mb-4">
                  {p.name}
                </h2>
                <p className="text-[17px] leading-[1.55] text-ink max-w-[52ch]">
                  {p.overview}
                </p>
                {p.url && (
                  <div className="mt-6">
                    <UnderlineLink href={p.url} external>
                      Visit website
                    </UnderlineLink>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand headline="Your project could be next." ctaLabel="Start a project" />
    </>
  );
}
