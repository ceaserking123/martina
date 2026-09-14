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
        .from(".hv2Loc span", { opacity: 0, y: 8, stagger: 0.08, duration: 0.4 }, "-=0.2")
        .from(".hv2Headline", { opacity: 0, y: 18, duration: 0.6 }, "-=0.15")
        .from(".hv2Contact div", { opacity: 0, y: 8, stagger: 0.06, duration: 0.4 }, "-=0.3")
        .from(".hv2Portrait", { opacity: 0, scale: 0.98, duration: 0.6 }, "-=0.5")
        .from(".hv2Footline", { opacity: 0, duration: 0.4 }, "-=0.2");
    },
    { scope: rootRef }
  );

  return (
    <div className="hv2Shell" ref={rootRef}>
      <div className="hv2Box">
        <div className="hv2Topline">
          <span className="hv2Mark">Eghwrudjakpor</span>
          <span className="hv2Kicker">Portfolio</span>
        </div>
        <div className="hv2Body">
          <div className="hv2Info">
            <div>
              <div className="hv2Loc">
                <span>Warri &mdash; Nigeria</span>
                <span>Visual Arts Studio</span>
              </div>
              <h1 className="hv2Headline">
                Printmaker, educator and researcher working on <em>sheet-metal intaglio</em>.
              </h1>
            </div>
            <div className="hv2Contact">
              <div>
                <span className="hcLabel">Email:</span> {contact.email}
              </div>
              <div>
                <span className="hcLabel">Phone:</span> {contact.phone}
              </div>
              <div>
                <span className="hcLabel">Studio:</span> {contact.studio}
              </div>
            </div>
          </div>
          <div className="hv2Portrait">
            {heroImage ? (
              <Image src={heroImage} alt="Martina Eghwrudjakpor" fill sizes="(max-width: 780px) 100vw, 50vw" />
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
          </div>
        </div>
        <div className="hv2Footline">
          <span className="hv2Dot" />
          <span className="hv2Cmyk">
            <span className="c" />
            <span className="m" />
            <span className="y" />
            <span className="k" />
          </span>
        </div>
      </div>
    </div>
  );
}
