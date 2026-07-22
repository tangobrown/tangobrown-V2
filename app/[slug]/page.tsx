import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import SignatureCTA from "@/components/SignatureCTA";
import UnderlineLink from "@/components/UnderlineLink";
import LineIcon from "@/components/LineIcon";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBand from "@/components/CtaBand";
import { services, getService } from "@/data/services";

// This dynamic route now lives at the root: /websites, /lead-generation,
// /ai-automation. generateStaticParams pre-renders exactly those three
// slugs; any other path falls through to notFound() below. Static routes
// like /work, /about, /contact, /privacy take precedence over this
// dynamic route in Next's matcher, so they aren't affected.
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return {};
  return {
    title: `${svc.title} — Tango Brown`,
    description: svc.lead,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-cream border-b-2 border-border-light">
        <div className="container-tb grid grid-cols-1 md:grid-cols-[1fr_500px] gap-[72px] items-center pt-20">
          <div>
            <div className="font-heading uppercase font-bold text-[13px] tracking-[0.1em] text-muted-faint mb-[22px]">
              {svc.num} / 03 · Services
            </div>
            <h1 className="font-heading uppercase font-bold text-[60px] leading-[1.04] tracking-[-0.03em]">
              {svc.title}
            </h1>
            <p className="text-[19px] font-semibold leading-[1.55] text-ink max-w-[48ch] mt-6">
              {svc.lead}
            </p>
            <div className="mt-[30px]">
              <SignatureCTA href="/contact">Start a project</SignatureCTA>
            </div>
          </div>
          <div className="self-end relative h-[500px] w-full">
            {svc.heroImage ? (
              <Image
                src={svc.heroImage}
                alt={`${svc.title} — service`}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                priority
                className="object-cover"
              />
            ) : (
              <div className="h-full w-full bg-placeholder-soft border-2 border-border flex items-center justify-center text-muted-faint text-sm">
                Service image
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Centred quote */}
      <section className="container-tb py-[90px] text-center">
        <div className="font-heading uppercase font-bold text-[13px] tracking-[0.1em] text-muted-extra mb-[26px]">
          In short
        </div>
        <blockquote className="font-body font-bold text-[36px] leading-[1.3] tracking-[-0.02em] text-ink max-w-[60%] mx-auto">
          &ldquo;{svc.quote}&rdquo;
        </blockquote>
      </section>

      {/* Recent examples */}
      <section className="border-t-2 border-border-light">
        <div className="container-tb py-[88px]">
          <div className="flex items-baseline justify-between mb-10 flex-wrap gap-3">
            <h2 className="font-heading uppercase font-bold text-[32px] tracking-[-0.02em]">
              Recent examples
            </h2>
            <UnderlineLink href="/work">View all work</UnderlineLink>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {svc.examples.map((ex) => (
              <div key={ex.name}>
                <div className="aspect-[1000/606] w-full overflow-hidden bg-placeholder-soft">
                  {ex.image && (
                    // Regular img on a placeholder-only page keeps this
                    // server-rendered without needing next/image sizing.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={ex.image}
                      alt={ex.name}
                      className="w-full h-full object-cover object-top block"
                    />
                  )}
                </div>
                <div className="flex justify-between items-baseline gap-3 mt-4">
                  <div className="font-heading uppercase font-bold text-[20px]">
                    {ex.name}
                  </div>
                  <div className="text-[12px] text-muted-faint uppercase tracking-[0.06em] whitespace-nowrap">
                    {ex.tag}
                  </div>
                </div>
                <p className="text-[15px] leading-[1.55] text-ink mt-2">
                  {ex.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes it different */}
      <section className="bg-cream border-t-2 border-border-light">
        <div className="container-tb py-[88px]">
          <h2 className="font-heading uppercase font-bold text-[32px] tracking-[-0.02em] mb-10">
            What makes it different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {svc.differentiators.map((d) => (
              <div
                key={d.title}
                className="bg-white border-2 border-border p-7 min-h-[210px] flex flex-col"
              >
                <div className="w-[52px] h-[52px] bg-placeholder-soft flex items-center justify-center mb-[22px] text-ink">
                  <LineIcon name={d.icon} />
                </div>
                <div className="font-heading uppercase font-bold text-[19px] mb-2 tracking-[-0.01em]">
                  {d.title}
                </div>
                <div className="text-[15px] leading-[1.55] text-ink">
                  {d.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials marquee */}
      <TestimonialMarquee testimonials={svc.testimonials} />

      {/* FAQs */}
      <section className="max-w-[900px] mx-auto py-24 px-14">
        <h2 className="font-heading uppercase font-bold text-[32px] tracking-[-0.02em] mb-10">
          Frequently asked
        </h2>
        <FaqAccordion faqs={svc.faqs} />
      </section>

      <CtaBand
        headline={`Let's talk about your ${svc.title} project.`}
        ctaLabel="Get in touch"
      />
    </>
  );
}
