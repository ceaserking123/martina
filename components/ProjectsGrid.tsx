"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PlateIcon from "./PlateIcon";
import { projects } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

function WorkEntry({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const cover = project.images[0];
  const body = (
    <article className="workEntry">
      <div className="weMedia">
        {cover ? (
          <Image src={cover} alt={project.title} fill sizes="(max-width: 780px) 100vw, 1080px" />
        ) : (
          <>
            <PlateIcon />
            <span className="wePending">Image pending</span>
          </>
        )}
      </div>
      <div className="weInfo">
        <span className="weIndex">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3 className="weTitle">{project.title}</h3>
          <p className="weMeta">{project.meta}</p>
        </div>
      </div>
    </article>
  );

  return project.detailHref ? (
    <Link href={project.detailHref} className="workEntryLink">
      {body}
    </Link>
  ) : (
    body
  );
}

export default function ProjectsGrid() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Position-only reveal — see Practice.tsx for why opacity never starts at 0.
      gsap.utils.toArray<HTMLElement>(".workEntry").forEach((entry) => {
        gsap.from(entry, {
          y: 28,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: entry, start: "top 85%" },
        });
      });
    },
    { scope: rootRef }
  );

  return (
    <div className="workList" ref={rootRef}>
      {projects.map((p, i) => (
        <WorkEntry key={p.slug} project={p} index={i} />
      ))}
    </div>
  );
}
