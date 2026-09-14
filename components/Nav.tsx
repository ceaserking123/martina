"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navLinks, fullNavLinks } from "@/lib/data";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLSpanElement[]>([]);

  useGSAP(() => {
    const panel = panelRef.current;
    const inner = innerRef.current;
    const bars = barsRef.current;
    if (!panel || !inner) return;

    if (open) {
      gsap.set(panel, { display: "block" });
      gsap.fromTo(
        panel,
        { height: 0 },
        { height: "auto", duration: 0.45, ease: "power3.inOut" }
      );
      gsap.fromTo(
        inner.children,
        { y: -8, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, stagger: 0.04, delay: 0.1, ease: "power2.out" }
      );
      gsap.to(bars[0], { rotate: 45, y: 5.5, duration: 0.25, ease: "power2.inOut" });
      gsap.to(bars[1], { opacity: 0, duration: 0.15 });
      gsap.to(bars[2], { rotate: -45, y: -5.5, duration: 0.25, ease: "power2.inOut" });
    } else {
      gsap.to(panel, {
        height: 0,
        duration: 0.35,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(panel, { display: "none" });
        },
      });
      gsap.to(bars[0], { rotate: 0, y: 0, duration: 0.25, ease: "power2.inOut" });
      gsap.to(bars[1], { opacity: 1, duration: 0.2, delay: 0.1 });
      gsap.to(bars[2], { rotate: 0, y: 0, duration: 0.25, ease: "power2.inOut" });
    }
  }, [open]);

  function isActive(href: string) {
    const base = href.split("#")[0] || "/";
    return pathname === base && !href.includes("#");
  }

  return (
    <>
      <nav className="top">
        <div className="navWrap">
          <Link href="/" className="name">
            Martina Eghwrudjakpor<sup>&reg;</sup>
          </Link>
          <div className="links">
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href} className={isActive(l.href) ? "active" : ""}>
                {l.label}
              </Link>
            ))}
          </div>
          <button
            type="button"
            className="navMenuBtn"
            aria-expanded={open}
            aria-controls="navPanel"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="bars">
              {[0, 1, 2].map((i) => (
                <span key={i} ref={(el) => { if (el) barsRef.current[i] = el; }} />
              ))}
            </span>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>
      <div className="navPanel" id="navPanel" ref={panelRef} style={{ display: "none", height: 0 }}>
        <div className="navPanelInner" ref={innerRef}>
          {fullNavLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
