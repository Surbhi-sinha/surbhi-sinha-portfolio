import React from "react";
import { PROJECTS } from "./data";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function ProjectsNew() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Heading */}
      <Reveal>
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent text-shimmer">
          Selected Projects
        </p>
        <div className="mt-5 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display font-black uppercase leading-[0.82] tracking-[-0.02em] text-[clamp(2.75rem,10vw,8.5rem)]">
            <span className="block text-accent text-shimmer">Projects</span>
            <span className="block text-white">Archive</span>
          </h2>
          <a
            href="https://github.com/Surbhi-sinha"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center border border-white px-7 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
          >
            Explore GitHub
          </a>
        </div>
      </Reveal>

      {/* Asymmetric masonry — each row pairs two cards with its own ratio */}
      <div className="mt-14 flex flex-col gap-6">
        {PROJECT_ROWS.map((cols, r) => {
          const left = PROJECTS[r * 2];
          const right = PROJECTS[r * 2 + 1];
          return (
            <div key={r} className={`grid grid-cols-1 gap-6 ${cols}`}>
              <Reveal className="h-full">
                <ProjectCard project={left} />
              </Reveal>
              {right && (
                <Reveal delay={80} className="h-full">
                  <ProjectCard project={right} />
                </Reveal>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* Column ratios per row — the literal arbitrary-value strings must appear
   verbatim so Tailwind generates them. */
const PROJECT_ROWS = [
  "lg:grid-cols-[1.9fr_1fr]",
  "lg:grid-cols-[1fr_2fr]",
  "lg:grid-cols-[1fr_1.2fr]",
  "lg:grid-cols-[1fr]",
];
