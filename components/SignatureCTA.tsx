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
  // On the light variant the base color is #131313 with white text.
  // On the dark variant the base is white with #131313 text, and text
  // transitions to white as the orange fills in.
  const variantClasses =
    variant === "dark"
      ? "bg-white text-ink hover:text-white [background-image:linear-gradient(#ff751f,#ff751f)]"
      : "bg-ink text-white [background-image:linear-gradient(#ff751f,#ff751f)]";

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
