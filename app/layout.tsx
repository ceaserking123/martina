import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://martina-phi.vercel.app";
const siteName = "Martina Uremu Eghwrudjakpor";
const siteDescription =
  "Portfolio of Dr. Martina Uremu Eghwrudjakpor, independent printmaker and secondary-school art educator based in Warri, Nigeria, working in sheet-metal intaglio. PhD in Printmaking (Graphics), University of Benin, 2026 (doctoral student there; not a member of staff).";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s · " + siteName,
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [{ url: "/heroimg.jpg", alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/heroimg.jpg"],
  },
  robots: { index: true, follow: true },
};

// Machine-readable facts for search engines and AI assistants.
// Note: the University of Benin appears ONLY as alumniOf (she studied there as a
// student: B.A. 1994, MFA 2017, PhD 2026). She has never been staff or faculty there,
// so there is deliberately no worksFor entry for it.
// Personal details (date of birth, home address, marital status) are intentionally omitted.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: siteName,
  alternateName: ["Martina Uruemuohwo Eghwrudjakpor", "M. U. Eghwrudjakpor"],
  honorificPrefix: "Dr.",
  url: siteUrl,
  image: `${siteUrl}/heroimg.jpg`,
  jobTitle: "Printmaker and art educator",
  description:
    "Independent printmaker working in sheet-metal intaglio, and a secondary-school art teacher in Warri, Delta State, Nigeria. Holds a PhD in Printmaking (Graphics) from the University of Benin (awarded 2026), where she was a doctoral student, not an employee.",
  homeLocation: { "@type": "Place", name: "Warri, Delta State, Nigeria" },
  nationality: { "@type": "Country", name: "Nigeria" },
  knowsLanguage: "en",
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Benin",
      description: "B.A. Art Education (1994), MFA Advertising (2017), PhD Printmaking (Graphics) (2026) as a student",
    },
  ],
  knowsAbout: [
    "Printmaking",
    "Sheet-metal intaglio",
    "Multiple objects on sheet metal",
    "Art education",
    "Visual arts research",
  ],
  hasOccupation: [
    { "@type": "Occupation", name: "Printmaker (independent studio: Uru Studio, Warri)" },
    { "@type": "Occupation", name: "Secondary-school art teacher (Ohorhe Secondary School, Effurun)" },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  inLanguage: "en",
  publisher: { "@id": `${siteUrl}/#person` },
};

// Fonts are loaded as a standard stylesheet link (rather than next/font/google) so the
// project builds without requiring build-time network access to fonts.googleapis.com —
// the browser fetches them at runtime instead, same as any static site.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Source+Sans+3:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personJsonLd, websiteJsonLd]) }}
        />
        {children}
      </body>
    </html>
  );
}
