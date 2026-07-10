import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About — Tango Brown",
  description:
    "Freelance digital growth consultant based in Exeter, Devon, working with businesses across the UK.",
};

const values = [
  {
    title: "One point of contact",
    description:
      "You deal with me, start to finish. Faster decisions, clearer communication.",
  },
  {
    title: "Built to last",
    description:
      "Fast, maintainable sites and systems that grow with your business.",
  },
  {
    title: "No jargon",
    description:
      "Plain English, honest advice, and a clear plan you'll actually understand.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-tb pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
          <div>
            <div className="font-heading uppercase font-bold text-[13px] tracking-[0.1em] text-muted-faint mb-7">
              About
            </div>
            <h1 className="font-heading uppercase font-bold text-[58px] leading-[1.05] tracking-[-0.03em]">
              Hi, I&apos;m Tim Brown.
            </h1>
            <p className="text-[19px] leading-[1.6] text-muted mt-7">
              I&apos;m a freelance digital consultant based in Exeter, working
              with businesses across the UK. I help them build a presence
              online that looks the part and actually performs.
            </p>
            <p className="text-[17px] leading-[1.65] text-muted mt-5">
              For me, that means joining up the pieces most businesses juggle
              separately — design, hosting, SEO and automation — under one
              roof, with one person who&apos;s accountable for the whole thing.
              No agency overheads, no account managers, no jargon. Just clear,
              honest work that moves the needle.
            </p>
            <p className="text-[17px] leading-[1.65] text-muted mt-5">
              Whether you&apos;re starting from scratch or improving what
              you&apos;ve already got, I&apos;ll help you make decisions that
              pay off long after the project ends.
            </p>
          </div>
          <div className="h-[520px] w-full bg-placeholder-soft border-2 border-border flex items-center justify-center text-muted-faint text-sm">
            Portrait
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-tb pt-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t-2 border-border-light pt-12">
          {values.map((v) => (
            <div key={v.title}>
              <div className="font-heading uppercase font-bold text-[22px] mb-2.5">
                {v.title}
              </div>
              <div className="text-[15px] leading-[1.55] text-muted-soft">
                {v.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand headline="Let's have a chat." ctaLabel="Get in touch" />
    </>
  );
}
