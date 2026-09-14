"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PlateIcon from "./PlateIcon";
import { workStrip } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function WorkStrip() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Position-only reveal — see Practice.tsx for why opacity never starts at 0.
      gsap.from(".hv2Tile", {
        y: 16,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 85%" },
      });
    },
    { scope: rootRef }
  );

  return (
    <div className="hv2Strip" ref={rootRef}>
      <div className="hv2StripInner">
        {workStrip.map((item) => (
          <Link key={item.label} className="hv2Tile" href={item.href}>
            <div className="htSwatch">
              <PlateIcon />
            </div>
            <p className="htLabel">{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
