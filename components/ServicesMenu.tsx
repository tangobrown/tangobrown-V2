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
 * Opens on mouseenter on either the trigger or the panel; closes on
 * mouseleave with a ~160ms delay so the pointer can travel from the
 * trigger down to the panel without collapsing it. Caret rotates 180°
 * when open; the panel fades + slides 8px down from hidden to visible.
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
    closeTimer.current = setTimeout(() => setOpen(false), 160);
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
            : "text-muted-soft hover:text-ink",
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
          "w-[11px] h-[11px] transition-transform duration-200",
          open ? "rotate-180 text-ink" : "text-muted-soft",
        ].join(" ")}
      >
        <path d="M12 15L6 9H18L12 15Z" />
      </svg>

      {/* Mega-menu panel */}
      <div
        onMouseEnter={openNow}
        onMouseLeave={closeSoon}
        className={[
          "absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[980px] max-w-[calc(100vw-64px)] z-40",
          "transition-all duration-200",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none",
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
