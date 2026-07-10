import Image from "next/image";
import { heroUpCards, heroDownCards, type HeroCard } from "@/data/projects";

/**
 * Two parallel columns of small project cards that scroll in opposite
 * directions (left column up, right column down) on infinite loop.
 *
 * The animation is pure CSS (Tailwind keyframes tbUp / tbDown, both
 * 34s linear infinite). Each column duplicates its list so translateY
 * -50% lands on an identical position for a seamless loop.
 *
 * A top-and-bottom mask fades the columns into the background so the
 * loop seam and the abrupt scroll cutoff aren't visible.
 */
export default function HeroCardColumns() {
  return (
    <div className="relative h-[680px] grid grid-cols-2 gap-5 overflow-hidden mask-fade-y">
      <div className="flex flex-col gap-5 animate-tb-up will-change-transform">
        {[...heroUpCards, ...heroUpCards].map((card, i) => (
          <MiniCard key={`up-${i}`} card={card} />
        ))}
      </div>
      <div className="flex flex-col gap-5 animate-tb-down will-change-transform">
        {[...heroDownCards, ...heroDownCards].map((card, i) => (
          <MiniCard key={`down-${i}`} card={card} />
        ))}
      </div>
    </div>
  );
}

function MiniCard({ card }: { card: HeroCard }) {
  return (
    <div
      className="bg-white border-2 border-border p-3.5"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,.04)" }}
    >
      <div className="aspect-[1000/606] bg-placeholder-bg overflow-hidden mb-3 relative">
        {card.image && (
          <Image
            src={card.image}
            alt={card.name}
            fill
            sizes="(max-width: 768px) 40vw, 360px"
            className="object-cover object-top"
          />
        )}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-semibold text-ink">{card.name}</span>
        <span className="text-[11px] uppercase tracking-[0.06em] text-muted-faint">
          {card.tag}
        </span>
      </div>
    </div>
  );
}
