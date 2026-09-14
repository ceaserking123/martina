"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Practice() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Only animate position, never opacity — content stays legible even if
      // ScrollTrigger never fires (JS disabled, slow connection, printed/shared screenshot).
      gsap.from(".factCard", {
        y: 16,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 85%" },
      });
    },
    { scope: rootRef }
  );

  return (
    <div className="grid2" ref={rootRef}>
      <div className="factCard">
        <p className="fLabel">Research interests</p>
        <p>
          Contemporary printmaking, visual communication, creative industry, art education, cultural &amp;
          historic heritage, community development through the arts, sustainable art practices.
        </p>
      </div>
      <div className="factCard">
        <p className="fLabel">Recognition</p>
        <p>
          Letter of Recommendation, Ovuomaroro Gallery (Dr. Bruce Onobrakpeya, MFR, NNOM), Dec 2022 &middot;
          Regional Fulbright Education USA Workshop &amp; College Fair Art Exhibition, Jan 2016 &middot;
          Teachers Registration Council of Nigeria, member since Apr 2005.
        </p>
      </div>
    </div>
  );
}
