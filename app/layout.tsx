import type { Metadata, Viewport } from "next";
import { Inter_Tight, Manrope } from "next/font/google";
import "./globals.css";

const heading = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tango Brown — Digital Growth Consultant",
  description:
    "Freelance digital growth consultant based in Exeter, Devon. Bespoke websites, hosting, SEO and AI automation for UK businesses.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
