import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Tango Brown",
  description: "How Tango Brown handles your personal data.",
};

const sections = [
  {
    heading: "Who I am",
    body: (
      <>
        Tango Brown is the trading name of Tim Brown, a freelance digital
        consultant based in Exeter, Devon. If you have any questions about
        this policy or your data, email{" "}
        <a href="mailto:tim@tangobrown.com">tim@tangobrown.com</a>.
      </>
    ),
  },
  {
    heading: "What I collect",
    body: (
      <>
        When you use the contact form I collect your name, email address and
        the details you choose to share about your project. I only use this
        information to respond to your enquiry and discuss working together.
      </>
    ),
  },
  {
    heading: "How I use it",
    body: (
      <>
        Your details are never sold or shared with third parties for
        marketing. I keep enquiry records only for as long as needed to
        provide my services and meet legal obligations.
      </>
    ),
  },
  {
    heading: "Your rights",
    body: (
      <>
        You can ask to see, correct or delete any personal data I hold about
        you at any time. Just get in touch and I&apos;ll action it promptly,
        in line with UK GDPR.
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <section className="max-w-[820px] mx-auto py-24 px-14">
      <div className="font-heading uppercase font-bold text-[13px] tracking-[0.1em] text-muted-faint mb-[22px]">
        Legal
      </div>
      <h1 className="font-heading uppercase font-bold text-[52px] leading-[1.05] tracking-[-0.03em]">
        Privacy Policy
      </h1>
      <p className="text-base text-muted-faint mt-4">Last updated July 2026</p>

      <div className="mt-11 flex flex-col gap-9">
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 className="font-heading uppercase font-bold text-[22px] mb-3">
              {s.heading}
            </h2>
            <p className="text-[17px] leading-[1.65] text-muted">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
