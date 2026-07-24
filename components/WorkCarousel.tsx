"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Project } from "@/data/projects";
import UnderlineLink from "./UnderlineLink";

interface Props {
  projects: Project[];
  perView?: number; // how many cards visible at a time (default 2)
}

/**
 * Horizontal carousel of project cards. `perView` cards are visible
 * per viewport. Prev / next arrow buttons slide the track by that
 * many cards' worth via margin-left steps in %.
 *
 * Wrap-around: the list is duplicated so we can advance past the
 * last card and, after the transition settles, snap back to the
 * equivalent position in the first copy without the user noticing.
 * Same trick for going below index 0 in the other direction.
 */
export default function WorkCarousel({ projects, perView = 2 }: Props) {
  const n = projects.length;
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const wrapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const loop = [...projects, ...projects];
  const cardWidthPct = 100 / loop.length; // width of one card as % of track
  const stepPct = 100 / perView; // how far one nav-click travels (as % of viewport)

  // Track uses width = (loop.length / perView) * 100% of the viewport,
  // then margin-left steps by stepPct per index. Combined this
  // produces "advance by one card per click, `perView` cards visible".
  const trackWidthPct = (loop.length / perView) * 100;

  const clearTimer = () => {
    if (wrapTimer.current) {
      clearTimeout(wrapTimer.current);
      wrapTimer.current = null;
    }
  };

  const next = () => {
    clearTimer();
    setAnimate(true);
    setIndex((cur) => {
      const nxt = cur + 1;
      // After the transition settles, if we've walked past the first
      // copy, snap back to the equivalent index in the loop's start.
      wrapTimer.current = setTimeout(() => {
        setIndex((i) => (i >= n ? i - n : i));
        setAnimate(false);
        // re-enable animation on the next frame so the snap is instant
        requestAnimationFrame(() =>
          requestAnimationFrame(() => setAnimate(true))
        );
      }, 600);
      return nxt;
    });
  };

  const prev = () => {
    clearTimer();
    setIndex((cur) => {
      if (cur <= 0) {
        // instant-jump to the equivalent index in the duplicate copy,
        // then animate a step backward from there
        setAnimate(false);
        // schedule the animated step for the next frame
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            setAnimate(true);
            setIndex(n - 1);
          })
        );
        return n;
      }
      setAnimate(true);
      return cur - 1;
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-12 flex-wrap gap-3">
        <h2 className="font-heading uppercase font-bold text-[45px] tracking-[-0.02em]">
          Selected work
        </h2>
        <div className="flex items-center gap-6">
          <UnderlineLink href="/work">View all</UnderlineLink>
          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous project"
              className="w-12 h-12 border-2 border-border-strong rounded-full flex items-center justify-center text-ink transition-colors hover:border-ink"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next project"
              className="w-12 h-12 border-2 border-border-strong rounded-full flex items-center justify-center text-ink transition-colors hover:border-ink"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden w-full">
        <div
          className="flex"
          style={{
            width: `${trackWidthPct}%`,
            marginLeft: `-${index * stepPct}%`,
            transition: animate
              ? "margin-left .55s cubic-bezier(.4,0,.2,1)"
              : "none",
          }}
        >
          {loop.map((project, i) => (
            <div
              key={`${project.name}-${i}`}
              className="box-border pr-12"
              style={{ width: `${cardWidthPct}%`, flex: "0 0 auto" }}
            >
              <div className="aspect-[1000/606] w-full overflow-hidden bg-placeholder-bg relative">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 90vw, 45vw"
                    className="object-cover object-top"
                  />
                )}
              </div>
              <div className="flex items-baseline justify-between gap-4 mt-4">
                <div className="font-heading uppercase font-bold text-[20px]">
                  {project.name}
                </div>
                <div className="text-[13px] text-muted-faint uppercase tracking-[0.06em] whitespace-nowrap">
                  {project.services.join(" · ")}
                </div>
              </div>
              <p className="text-base leading-[1.6] text-ink mt-2 max-w-[46ch]">
                {project.overview}
              </p>
              {project.url && (
                <div className="mt-[18px]">
                  <UnderlineLink href={project.url} external>
                    Visit website
                  </UnderlineLink>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
