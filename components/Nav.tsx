"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SignatureCTA from "./SignatureCTA";
import ServicesMenu from "./ServicesMenu";

export default function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className="sticky top-0 z-50 border-b-2 border-border-light backdrop-blur-[12px]"
      style={{ background: "rgba(255,255,255,.86)" }}
    >
      <div className="container-tb flex items-center justify-between py-5 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <span className="w-[34px] h-[34px] rounded-full bg-ink text-white font-bold text-sm inline-flex items-center justify-center">
            TB
          </span>
          <span className="text-base font-semibold tracking-[-0.01em] text-ink">
            Tango Brown
          </span>
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-[34px] text-[15px]" aria-label="Primary">
          <ServicesMenu pathname={pathname} />
          <Link
            href="/work"
            className={
              isActive("/work")
                ? "text-ink font-semibold border-b-[1.5px] border-ink pb-0.5"
                : "text-muted-soft hover:text-ink transition-colors"
            }
          >
            Work
          </Link>
          <Link
            href="/about"
            className={
              isActive("/about")
                ? "text-ink font-semibold border-b-[1.5px] border-ink pb-0.5"
                : "text-muted-soft hover:text-ink transition-colors"
            }
          >
            About
          </Link>
        </nav>

        {/* Right CTA */}
        <SignatureCTA href="/contact" size="sm">
          Get in touch
        </SignatureCTA>
      </div>
    </header>
  );
}
