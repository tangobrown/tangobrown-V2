import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

/**
 * Line-icon set matching the reference — each has a small SVG animation:
 * - Websites: dashed baseline "draws on" repeatedly (tbDraw)
 * - Lead Generation: magnifying glass wanders in a small orbit (tbSearch)
 * - AI & Automation: cog spins slowly (tbSpin), sparkle pulses (tbPulse)
 *
 * All animations respect prefers-reduced-motion via Tailwind's motion-safe:.
 */

function IconBase({
  size = 30,
  children,
  ...rest
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function WebsitesIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="7" width="32" height="26" rx="3" />
      <path d="M4 14 H36" />
      <circle cx="8.5" cy="10.5" r="0.7" fill="currentColor" stroke="none" />
      <path d="M10 26 H26" />
      <path
        d="M10 21 H26"
        strokeDasharray="16"
        className="motion-safe:animate-tb-draw"
      />
    </IconBase>
  );
}

export function LeadGenerationIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <g
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className="motion-safe:animate-tb-search"
      >
        <circle cx="17" cy="17" r="10" />
        <path d="M24.5 24.5 L33 33" />
      </g>
    </IconBase>
  );
}

export function AiIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <g
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className="motion-safe:animate-tb-spin"
      >
        <circle cx="20" cy="20" r="5.5" />
        <path d="M20 5 V9" />
        <path d="M20 31 V35" />
        <path d="M5 20 H9" />
        <path d="M31 20 H35" />
        <path d="M9.5 9.5 L12.3 12.3" />
        <path d="M27.7 27.7 L30.5 30.5" />
        <path d="M30.5 9.5 L27.7 12.3" />
        <path d="M12.3 27.7 L9.5 30.5" />
      </g>
      <path
        d="M32 6 l.9 2.1 2.1 .9 -2.1 .9 -.9 2.1 -.9 -2.1 -2.1 -.9 2.1 -.9 z"
        fill="currentColor"
        stroke="none"
        className="motion-safe:animate-tb-pulse"
      />
    </IconBase>
  );
}

export type ServiceSlug = "websites" | "lead-generation" | "ai-automation";

/** Convenience lookup so consumers can render an icon from a slug string. */
export function ServiceIcon({ slug, ...props }: IconProps & { slug: ServiceSlug }) {
  switch (slug) {
    case "websites":
      return <WebsitesIcon {...props} />;
    case "lead-generation":
      return <LeadGenerationIcon {...props} />;
    case "ai-automation":
      return <AiIcon {...props} />;
  }
}
