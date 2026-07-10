import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Tango Brown",
  description:
    "Start a project with Tim Brown — freelance digital consultant in Exeter, Devon.",
};

export default function ContactPage() {
  return (
    <section className="container-tb pt-24 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div>
          <div className="font-heading uppercase font-bold text-[13px] tracking-[0.1em] text-muted-faint mb-7">
            Contact
          </div>
          <h1 className="font-heading uppercase font-bold text-[60px] leading-[1.04] tracking-[-0.03em]">
            Let&apos;s start something.
          </h1>
          <p className="text-[18px] leading-[1.6] text-muted mt-7 max-w-[42ch]">
            Tell me a little about your business and what you&apos;re hoping to
            achieve. I&apos;ll get back to you within one working day.
          </p>
          <div className="mt-12 flex flex-col gap-6">
            <div>
              <div className="text-[12px] font-bold tracking-[0.1em] uppercase text-muted-faint mb-1.5">
                Email
              </div>
              <a
                href="mailto:tim@tangobrown.com"
                className="text-[18px] text-ink no-underline hover:text-accent transition-colors"
              >
                tim@tangobrown.com
              </a>
            </div>
            <div>
              <div className="text-[12px] font-bold tracking-[0.1em] uppercase text-muted-faint mb-1.5">
                Phone
              </div>
              <a
                href="tel:+447594404388"
                className="text-[18px] text-ink no-underline hover:text-accent transition-colors"
              >
                07594 404 388
              </a>
            </div>
            <div>
              <div className="text-[12px] font-bold tracking-[0.1em] uppercase text-muted-faint mb-1.5">
                Based in
              </div>
              <div className="text-[18px] text-ink">
                Exeter, Devon — working UK-wide
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
