import SignatureCTA from "./SignatureCTA";

interface Props {
  headline: string;
  ctaLabel?: string;
  ctaHref?: string;
}

/**
 * Full-width dark CTA band that sits at the bottom of most pages.
 * Big Inter Tight uppercase headline on the left, dark-variant
 * signature CTA on the right, space-between.
 */
export default function CtaBand({
  headline,
  ctaLabel = "Get in touch",
  ctaHref = "/contact",
}: Props) {
  return (
    <section className="bg-dark-bg text-white">
      <div className="container-tb py-24 flex flex-wrap items-end justify-between gap-10">
        <div className="font-heading uppercase font-bold text-[54px] tracking-[-0.03em] leading-[1.05] max-w-[16ch]">
          {headline}
        </div>
        <SignatureCTA href={ctaHref} variant="dark">
          {ctaLabel}
        </SignatureCTA>
      </div>
    </section>
  );
}
