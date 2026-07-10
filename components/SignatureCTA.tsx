import Link from "next/link";
import ArrowUpRight from "./ArrowUpRight";

type Size = "sm" | "md";
type Variant = "light" | "dark";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: Variant; // "light" = black button on light bg (default) / "dark" = white button on dark bg
  size?: Size; // "md" = default (15px, 15/30 padding), "sm" = nav (14px, 11/22 padding)
  className?: string;
}

/**
 * Reusable primary CTA — Inter Tight italic, radius 0, arrow-up-right glyph.
 *
 * Hover: a linear-gradient(accent,accent) is layered over the base color
 * with background-size animating from 0% -> 100% over .18s (a left-to-right
 * wipe). On the dark variant, text also flips to white on hover so it
 * stays readable once the orange fills the button.
 */
export default function SignatureCTA({
  href,
  children,
  variant = "light",
  size = "md",
  className = "",
}: Props) {
  const sizeClasses =
    size === "sm"
      ? "text-[14px] px-[22px] py-[11px] gap-2"
      : "text-[15px] px-[30px] py-[15px] gap-2";

  const iconSize = size === "sm" ? "w-[14px] h-[14px]" : "w-4 h-4";

  // Wipe implementation: background-image is a solid accent gradient,
  // background-position stays at "left center", background-size grows 0% -> 100%.
  // Base + hover text colour picks whichever reads best against the
  // colour that dominates the button:
  // - light variant: dark button base (white text on ink); on hover the
  //   orange fills in and the text flips to ink so it stays legible.
  // - dark variant: white button base (ink text on white); on hover the
  //   orange fills in and the text flips to white so it stays legible.
  const variantClasses =
    variant === "dark"
      ? "bg-white text-ink hover:text-white [background-image:linear-gradient(#ff751f,#ff751f)]"
      : "bg-ink text-white hover:text-ink [background-image:linear-gradient(#ff751f,#ff751f)]";

  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center whitespace-nowrap",
        "font-heading italic font-bold uppercase",
        "bg-no-repeat bg-left [background-size:0%_100%] hover:[background-size:100%_100%]",
        "transition-[background-size,color] duration-[180ms] ease-linear",
        sizeClasses,
        variantClasses,
        className,
      ].join(" ")}
    >
      {children}
      <ArrowUpRight className={`shrink-0 ${iconSize}`} />
    </Link>
  );
}
