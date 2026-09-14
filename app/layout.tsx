import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Martina Eghwrudjakpor",
  description:
    "Portfolio of Dr. Martina Uruemuohwo Eghwrudjakpor — printmaker, educator and researcher working in sheet-metal intaglio.",
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
      <body>{children}</body>
    </html>
  );
}
