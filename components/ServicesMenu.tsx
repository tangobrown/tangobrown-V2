"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  WebsiteBuildsIcon,
  HostingIcon,
  SeoIcon,
  AiIcon,
} from "./ServiceIcons";

interface Item {
  href: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{ size?: number }>;
}

const items: Item[] = [
  {
    href: "/services/website-builds",
    title: "Website Builds",
    description:
      "Bespoke, fast sites built around your goals and made to convert.",
    Icon: WebsiteBuildsIcon,
  },
  {
    href: "/services/website-hosting",
    title: "Website Hosting",
    description:
      "Secure, reliable hosting with updates, backups and support handled.",
    Icon: HostingIcon,
  },
  {
    href: "/services/seo",
    title: "SEO",
    description:
      "Get found by the right people with SEO that gains your site traction in search engines.",
    Icon: SeoIcon,
  },
  {
    href: "/services/ai-automation",
    title: "AI & Automation",
    description:
      "Practical AI tools and workflows that save you hours every week.",
    Icon: AiIcon,
  },
];

/**
 * Services nav item + hover mega-menu.
 *
 * Hover machinery:
 * - A single outer div holds both the trigger and the panel, with
 *   mouseenter/mouseleave handlers on it. Because the panel is a
 *   descendant, moving the cursor from the trigger into the panel
 *   never fires mouseleave on the outer container.
 * - The panel wrapper has 20px padding-top which acts as an invisible
 *   "bridge" so the cursor never crosses empty space while travelling
 *   from the trigger down to the visible panel content.
 * - Close is delayed 300ms so a slow cursor movement never accidentally
 *   collapses the menu.
 *
 * Stacking: the parent <header> is z-50 with a translucent blurred
 * background. Any child z-index would compete inside the header's
 * stacking context, so the panel visually sits under the blurred bar
 * if it isn't lifted above the header's own layer. Fix: put the
 * panel wrapper at z-[60] and, more importantly, let the outer
 * container be `static` (not creating a stacking context) so the
 * panel's z-index actually takes effect against page content below.
 */
export default function ServicesMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const active = pathname === "/services" || pathname.startsWith("/services/");

  const openNow = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  };
  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 300);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <div
      className="relative flex items-center gap-1.5"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <Link
        href="/services"
        className={[
          "cursor-pointer transition-colors",
          active
            ? "text-ink font-semibold border-b-[1.5px] border-ink pb-0.5"
            : "text-ink font-medium hover:text-ink",
        ].join(" ")}
      >
        Services
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={[
          "w-[13px] h-[13px] transition-transform duration-200 text-ink",
          open ? "rotate-180" : "",
        ].join(" ")}
      >
        <path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z" />
      </svg>

      {/* Mega-menu panel */}
      <div
        className={[
          // 20px pt bridge so the cursor never leaves the outer div
          // while travelling from the trigger down to the visible panel.
          "absolute top-full left-1/2 -translate-x-1/2 pt-5 w-[980px] max-w-[calc(100vw-64px)] z-[60]",
          "transition-opacity duration-200",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div
          className="bg-white border-2 border-border-light p-[18px] grid grid-cols-4 gap-1.5"
          style={{ boxShadow: "0 20px 54px rgba(0,0,0,.12)" }}
        >
          {items.map(({ href, title, description, Icon }) => (
            <Link
              key={href}
              href={href}
              className="px-[18px] py-[22px] transition-colors hover:bg-placeholder-panel block"
            >
              <div className="h-[34px] flex items-center mb-[18px] text-ink">
                <Icon size={30} />
              </div>
              <div className="font-heading uppercase font-bold text-base mb-2 text-ink">
                {title}
              </div>
              <p className="text-[13.5px] leading-[1.5] text-muted-soft">
                {description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
