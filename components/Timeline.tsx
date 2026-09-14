"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timeline } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Position-only reveal — see Practice.tsx for why opacity never starts at 0.
      gsap.from(".tItem", {
        x: -14,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
      });
    },
    { scope: rootRef }
  );

  return (
    <div className="timeline" ref={rootRef}>
      {timeline.map((item) => (
        <div className="tItem" key={item.title}>
          <span className="tDate">{item.date}</span>
          <p className="tTitle">{item.title}</p>
          {item.desc && <p className="tDesc">{item.desc}</p>}
        </div>
      ))}
    </div>
  );
}
