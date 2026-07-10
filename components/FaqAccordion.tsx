"use client";

import { useState } from "react";
import type { ServiceFaq } from "@/data/services";

interface Props {
  faqs: ServiceFaq[];
}

/**
 * Single-open FAQ accordion. Each row has a 2px top border and an
 * uppercase Inter Tight question with a plus-icon that rotates 45°
 * (into an ×) when open. Only one row is open at a time — clicking
 * an open row closes it.
 */
export default function FaqAccordion({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div>
      {faqs.map((f, i) => {
        const open = openIndex === i;
        return (
          <button
            key={i}
            type="button"
            onClick={() => setOpenIndex(open ? null : i)}
            aria-expanded={open}
            className="w-full text-left border-t-2 border-border py-6 cursor-pointer block"
          >
            <div className="flex items-center justify-between gap-6">
              <span className="font-heading uppercase font-bold text-[19px] tracking-[-0.01em]">
                {f.question}
              </span>
              <span
                className="inline-block transition-transform duration-200 text-muted-faint"
                style={{ transform: open ? "rotate(45deg)" : "none" }}
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[22px] h-[22px]"
                >
                  <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
                </svg>
              </span>
            </div>
            {open && (
              <p className="text-base leading-[1.6] text-muted mt-4 max-w-[64ch]">
                {f.answer}
              </p>
            )}
          </button>
        );
      })}
    </div>
  );
}
