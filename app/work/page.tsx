import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
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
      <section className="bg-cream">
        <div className="container-tb pt-24 pb-14">
          <div className="font-heading uppercase font-bold text-[13px] tracking-[0.1em] text-muted-faint mb-7">
            Selected work
          </div>
          <h1 className="font-heading uppercase font-bold text-[64px] leading-[1.04] tracking-[-0.03em] max-w-[16ch]">
            A few projects I&apos;m proud of.
          </h1>
          <p className="text-[19px] font-semibold leading-[1.55] text-muted max-w-[52ch] mt-7">
            Websites, hosting, SEO and automation for UK businesses.
          </p>
        </div>
      </section>

      {/* Project grid */}
      <section className="container-tb pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.name}>
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
              <div className="flex justify-between items-baseline mt-4">
                <div className="font-heading uppercase font-bold text-[20px]">
                  {p.name}
                </div>
                <div className="text-[13px] text-muted-faint uppercase tracking-[0.06em]">
                  {p.services.join(" · ")}
                </div>
              </div>
              <p className="text-base text-muted-soft mt-1.5 max-w-[46ch]">
                {p.overview}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand headline="Your project could be next." ctaLabel="Start a project" />
    </>
  );
}
