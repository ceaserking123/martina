"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PlateIcon from "./PlateIcon";
import { contact, heroImage } from "@/lib/data";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hv2Topline", { opacity: 0, y: -12, duration: 0.5 })
        .from(".heroBleed", { opacity: 0, scale: 0.98, duration: 0.6 }, "-=0.2")
        .from(".heroHeadline", { opacity: 0, y: 18, duration: 0.6 }, "-=0.35")
        .from(".heroCaption span", { opacity: 0, y: 8, stagger: 0.06, duration: 0.4 }, "-=0.3")
        .from(".hv2Footline", { opacity: 0, duration: 0.4 }, "-=0.2");
    },
    { scope: rootRef }
  );

  return (
    <div className="hv2Shell" ref={rootRef}>
      <div className="hv2Topline">
        <span className="hv2Mark">Eghwrudjakpor</span>
        <span className="hv2Kicker">Portfolio</span>
      </div>

      <div className="heroBleed">
        {heroImage ? (
          <Image src={heroImage} alt="Martina Eghwrudjakpor" fill sizes="100vw" priority />
        ) : (
          <>
            <span className="hv2Vtext">
              PRINTMAKER &middot; EDUCATOR &middot; RESEARCHER &middot; PRINTMAKER &middot; EDUCATOR &middot; RESEARCHER
            </span>
            <div className="hv2MarkIcon">
              <PlateIcon className="plate" />
            </div>
            <span className="hv2Pending">Photograph pending</span>
          </>
        )}
        <h1 className="heroHeadline">Printmaker, educator and researcher.</h1>
      </div>

      <div className="heroCaption">
        <span>
          <span className="hcLabel">Location</span>Warri &mdash; Nigeria
        </span>
        <span>
          <span className="hcLabel">Email</span>
          {contact.email}
        </span>
        <span>
          <span className="hcLabel">Phone</span>
          {contact.phone}
        </span>
        <span>
          <span className="hcLabel">Studio</span>
          {contact.studio}
        </span>
      </div>

      
    </div>
  );
}
