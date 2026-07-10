import type { IconName } from "@/data/services";

const ICONS: Record<IconName, string[]> = {
  pencil: ["M12 20h9", "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"],
  bolt: ["M11 2L4 13h6l-1 9 8-12h-6l1-8z"],
  target: [
    "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0-18 0",
    "M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0",
    "M12 12m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0",
  ],
  refresh: [
    "M4 12a8 8 0 0 1 13.7-5.7L20 8",
    "M20 3v5h-5",
    "M20 12a8 8 0 0 1-13.7 5.7L4 16",
    "M4 21v-5h5",
  ],
  gauge: ["M4 19a8 8 0 1 1 16 0", "M12 19l4-6"],
  shield: [
    "M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z",
    "M9 12l2 2 4-4",
  ],
  headset: [
    "M4 14v-2a8 8 0 0 1 16 0v2",
    "M4 14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z",
    "M20 14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z",
    "M20 20a4 4 0 0 1-4 4h-2",
  ],
  search: [
    "M11 11m-7 0a7 7 0 1 0 14 0a7 7 0 1 0-14 0",
    "M21 21l-4.3-4.3",
  ],
  pin: [
    "M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21z",
    "M12 9.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0",
  ],
  chart: ["M5 20V11", "M10 20V5", "M15 20v-6", "M20 20v-9"],
  clock: [
    "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0-18 0",
    "M12 7v5l3.5 2",
  ],
  link: [
    "M9 15l6-6",
    "M10.5 6.5l1.8-1.8a4 4 0 0 1 5.7 5.7l-1.8 1.8",
    "M13.5 17.5l-1.8 1.8a4 4 0 0 1-5.7-5.7l1.8-1.8",
  ],
  sparkle: ["M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17l-1.9-5.1L4.5 10l5.6-1.4L12 3z"],
  check: ["M20 6L9 17l-5-5"],
};

interface Props {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

/**
 * Stroked line icons used in the "What makes it different" cards on
 * each service page. All paths in the ICONS map are lifted verbatim
 * from the reference so they render exactly as designed.
 */
export default function LineIcon({
  name,
  size = 24,
  strokeWidth = 1.7,
  className,
}: Props) {
  const paths = ICONS[name] || [];
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
