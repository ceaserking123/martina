import type { MetadataRoute } from "next";
import { artworks } from "@/lib/data";

const siteUrl = "https://martina-phi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/research"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const artworkPages = artworks.map((a) => ({
    url: `${siteUrl}/projects/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...artworkPages];
}
