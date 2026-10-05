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
  return { title: artwork ? `${artwork.title} · Martina Eghwrudjakpor` : "Not found" };
}

export default function ArtworkPage({ params }: Props) {
  const artwork = artworks.find((a) => a.slug === params.slug);
  if (!artwork) notFound();

  return (
    <>
      <Nav />
      <main>
        <ArtworkDetail artwork={artwork} />
        <Footer />
      </main>
    </>
  );
}
