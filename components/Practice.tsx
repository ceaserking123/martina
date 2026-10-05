"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { recognition } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Practice() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Only animate position, never opacity — content stays legible even if
      // ScrollTrigger never fires (JS disabled, slow connection, printed/shared screenshot).
      gsap.from(".factCard, .specRow", {
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
    <div className="practiceGrid" ref={rootRef}>
      <div className="factCard">
        <p className="fLabel">Research interests</p>
        <p>
          Contemporary printmaking, visual communication, creative industry, art education, cultural and
          historic heritage, community development through the arts, sustainable art practices.
        </p>
      </div>
      <div className="specList">
        <p className="fLabel">Recognition</p>
        {recognition.map((r) => (
          <div className="specRow" key={r.title}>
            <span className="specDate">{r.date}</span>
            <div>
              <p className="specTitle">{r.title}</p>
              <p className="specOrg">{r.org}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
