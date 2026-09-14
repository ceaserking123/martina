"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PlateIcon from "./PlateIcon";
import { projects } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

function ProjectTile({ project }: { project: (typeof projects)[number] }) {
  const cover = project.images[0];
  return (
    <div className={`projTile${project.featured ? " featured" : ""}`}>
      <div className="ptImage">
        {cover ? (
          <Image src={cover} alt={project.title} fill sizes="(max-width: 780px) 100vw, 50vw" />
        ) : (
          <>
            <PlateIcon />
            <span className="ptPending">Image pending</span>
          </>
        )}
      </div>
      <p className="ptTitle">{project.title}</p>
      <p className="ptMeta">{project.meta}</p>
    </div>
  );
}

export default function ProjectsGrid() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Position-only reveal — see Practice.tsx for why opacity never starts at 0.
      gsap.from(".projTile", {
        y: 24,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
      });
    },
    { scope: rootRef }
  );

  return (
    <div className="projectsGrid" ref={rootRef}>
      {projects.map((p) => (
        <ProjectTile key={p.slug} project={p} />
      ))}
    </div>
  );
}
