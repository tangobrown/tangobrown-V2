import type { ServiceTestimonial } from "@/data/services";

interface Props {
  testimonials: ServiceTestimonial[];
}

/**
 * Auto-scrolling horizontal marquee of testimonial cards on a dark
 * band. The list is duplicated so translateX -50% lands on an
 * identical position, giving a seamless loop. Pauses on hover.
 *
 * The animation itself is Tailwind's animate-tb-marquee (45s linear
 * infinite). The wrapper's `hover:[animation-play-state:paused]`
 * class stops it under the pointer.
 */
export default function TestimonialMarquee({ testimonials }: Props) {
  const loop = [...testimonials, ...testimonials];
  return (
    <section className="bg-dark-bg text-white py-24 overflow-hidden">
      <div className="container-tb pb-10">
        {/* Big background quote-mark glyph */}
        <svg
          viewBox="0 0 24 24"
          fill="#3a3a38"
          className="w-11 h-11"
          aria-hidden="true"
        >
          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
        </svg>
      </div>
      <div
        className="max-w-container mx-auto overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent)",
        }}
      >
        <div
          className="flex gap-7 w-max px-7 animate-tb-marquee hover:[animation-play-state:paused]"
          style={{ animationPlayState: "running" }}
        >
          {loop.map((t, i) => (
            <div
              key={i}
              className="basis-[440px] shrink-0 grow-0 bg-dark-card border-2 border-dark-border p-[34px] flex flex-col"
            >
              <blockquote className="font-body font-bold text-[21px] leading-[1.45] tracking-[-0.01em]">
                {t.quote}
              </blockquote>
              <div className="mt-6 text-[15px] font-semibold text-white">
                {t.author}
              </div>
              <div className="text-[13px] text-white mt-[3px]">
                {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
