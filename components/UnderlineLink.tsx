import Link from "next/link";
import ArrowUpRight from "./ArrowUpRight";

interface Props {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  showArrow?: boolean;
  className?: string;
}

/**
 * Text link with a persistent black 2px baseline underline that gets
 * "wiped" over in accent orange on hover (a 2-layer background-image
 * where only the accent layer's background-size animates).
 */
export default function UnderlineLink({
  href,
  children,
  external = false,
  showArrow = true,
  className = "",
}: Props) {
  const classes = [
    "inline-flex items-center gap-1.5 text-sm font-semibold text-ink pb-1 no-underline",
    // two stacked gradient underlines; accent grows 0% -> 100%, black stays 100%
    "[background-image:linear-gradient(#ff751f,#ff751f),linear-gradient(#131313,#131313)]",
    "bg-no-repeat [background-position:left_100%,left_100%]",
    "[background-size:0%_2px,100%_2px] hover:[background-size:100%_2px,100%_2px]",
    "transition-[background-size] duration-[180ms] ease-linear",
    className,
  ].join(" ");

  const content = (
    <>
      {children}
      {showArrow && <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
