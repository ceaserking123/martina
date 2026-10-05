"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryImages } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
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
      {galleryImages.map((src, i) => (
        <figure className="galleryTile" key={src}>
          <img src={src} alt={`Studio photograph ${i + 1}`} loading="lazy" />
          <span className="galleryIndex">{String(i + 1).padStart(2, "0")}</span>
        </figure>
      ))}
    </div>
  );
}
