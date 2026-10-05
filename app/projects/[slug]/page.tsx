import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ArtworkDetail from "@/components/ArtworkDetail";
import { artworks } from "@/lib/data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return artworks.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const artwork = artworks.find((a) => a.slug === params.slug);
  if (!artwork) return { title: "Not found" };
  const description = `${artwork.title}, ${artwork.woodPanel.styleLabel} (${artwork.woodPanel.year}) by Martina Uremu Eghwrudjakpor. ${artwork.description[0]}`.slice(0, 160);
  const image = artwork.woodPanel.image;
  return {
    title: artwork.title,
    description,
    alternates: { canonical: `/projects/${artwork.slug}` },
    openGraph: { title: artwork.title, description, images: [{ url: image, alt: artwork.title }] },
    twitter: { card: "summary_large_image", title: artwork.title, description, images: [image] },
  };
}

export default function ArtworkPage({ params }: Props) {
  const artwork = artworks.find((a) => a.slug === params.slug);
  if (!artwork) notFound();

  const artworkJsonLd = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: artwork.title,
    url: `https://martina-phi.vercel.app/projects/${artwork.slug}`,
    image: `https://martina-phi.vercel.app${artwork.woodPanel.image}`,
    creator: { "@id": "https://martina-phi.vercel.app/#person" },
    dateCreated: artwork.woodPanel.year,
    artMedium: artwork.woodPanel.styleLabel,
    material: artwork.media,
    size: artwork.woodPanel.size,
    description: artwork.description[0],
    inLanguage: "en",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(artworkJsonLd) }} />
      <Nav />
      <main>
        <ArtworkDetail artwork={artwork} />
        <Footer />
      </main>
    </>
  );
}
