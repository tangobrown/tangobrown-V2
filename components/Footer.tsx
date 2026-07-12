import Link from "next/link";

const siteLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

const serviceLinks = [
  { href: "/services/website-builds", label: "Website Builds" },
  { href: "/services/website-hosting", label: "Website Hosting" },
  { href: "/services/seo", label: "SEO" },
  { href: "/services/ai-automation", label: "AI & Automation" },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t-2 border-border-light bg-white">
      <div className="container-tb py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-14">
          {/* Contact block + signature */}
          <div>
            <div className="font-heading uppercase font-bold text-lg text-ink mb-4">
              Tim Brown
            </div>
            <div className="space-y-1.5 text-[15px] text-ink mb-6">
              <div>
                <a
                  href="mailto:tim@tangobrown.com"
                  className="no-underline hover:text-ink transition-colors"
                >
                  tim@tangobrown.com
                </a>
              </div>
              <div>
                <a
                  href="tel:+447594404388"
                  className="no-underline hover:text-ink transition-colors"
                >
                  07594 404 388
                </a>
              </div>
              <div className="text-ink">Exeter, Devon</div>
            </div>
          </div>

          {/* Site links */}
          <div>
            <div className="font-heading uppercase font-bold text-xs tracking-[0.1em] text-muted-faint mb-4">
              Site
            </div>
            <ul className="space-y-2.5 text-[15px]">
              {siteLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="no-underline text-ink hover:text-ink transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <div className="font-heading uppercase font-bold text-xs tracking-[0.1em] text-muted-faint mb-4">
              Services
            </div>
            <ul className="space-y-2.5 text-[15px]">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="no-underline text-ink hover:text-ink transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 pt-6 border-t-2 border-border-light text-sm text-ink">
          <div>© {currentYear} Tango Brown — Tim Brown</div>
          <div>Digital Growth Consultant</div>
        </div>
      </div>
    </footer>
  );
}
