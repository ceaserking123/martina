"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type GalleryItem = { src: string; alt: string; label: string };

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Position-only reveal — see Practice.tsx for why opacity never starts at 0.
      gsap.from(".galleryTile", {
        y: 24,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 85%" },
      });
    },
    { scope: rootRef }
  );

  return (
    <div className="galleryGrid" ref={rootRef}>
      {items.map((item) => (
        <figure className="galleryTile" key={item.src}>
          <img src={item.src} alt={item.alt} loading="lazy" />
          <span className="galleryIndex">{item.label}</span>
        </figure>
      ))}
    </div>
  );
}
