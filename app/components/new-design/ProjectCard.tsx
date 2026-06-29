import React from "react";
import type { Project } from "./data";
import { ArrowUpRightIcon, ArrowRightIcon } from "./icons";

function Media({
  src,
  alt,
  className = "",
  fit = "cover",
}: {
  src: string;
  alt: string;
  className?: string;
  fit?: "cover" | "contain";
}) {
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`h-full w-full ${fitClass} grayscale transition-[filter,transform] duration-500 group-hover:grayscale-0 group-hover:scale-[1.03] ${className}`}
    />
  );
}

function Cta({ project }: { project: Project }) {
  const { cta, ctaStyle, theme } = project;
  if (ctaStyle === "none" || !cta) return null;

  const onLight = theme === "light";

  if (ctaStyle === "bar") {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noreferrer"
        className={`mt-10 flex items-center justify-between border-t ${onLight ? "border-zinc-300" : "border-line"
          } pt-6 font-mono text-sm font-bold uppercase tracking-[0.15em] ${onLight ? "text-black" : "text-white"
          } transition-colors hover:text-accent`}
      >
        {cta.label}
        <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </a>
    );
  }

  if (ctaStyle === "box") {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex w-fit items-center border border-line-strong px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-accent hover:bg-accent hover:text-white"
      >
        {cta.label}
      </a>
    );
  }

  // arrow / accent
  return (
    <a
      href={cta.href}
      target="_blank"
      rel="noreferrer"
      className={`mt-8 inline-flex w-fit items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-[0.15em] ${ctaStyle === "accent"
        ? "text-accent"
        : onLight
          ? "text-black"
          : "text-white"
        } transition-colors hover:text-accent`}
    >
      {cta.label}
      <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

function Header({ project }: { project: Project }) {
  const onLight = project.theme === "light";
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs text-zinc-500">{project.index}</span>
      <span className={`h-px w-8 ${onLight ? "bg-zinc-300" : "bg-line-strong"}`} />
      <span
        className={`font-mono text-[11px] font-bold uppercase tracking-[0.15em] ${onLight ? "text-zinc-700" : "text-zinc-400"
          }`}
      >
        {project.meta}
      </span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const onLight = project.theme === "light";
  const bodyText = onLight ? "text-black" : "text-white";
  const descText = onLight ? "text-zinc-600" : "text-zinc-400";
  const surface = onLight ? "bg-white" : "bg-zinc-950 border border-line";

  const Body = (
    <div className="flex flex-1 flex-col p-7 sm:p-9">
      <Header project={project} />
      <h3
        className={`mt-6 font-sans text-[clamp(1.5rem,3vw,2.25rem)] font-normal uppercase leading-[1.05] tracking-[-0.01em] ${bodyText}`}
      >
        {project.title}
      </h3>
      <p className={`mt-5 max-w-md font-sans text-[15px] leading-relaxed ${descText}`}>
        {project.description}
      </p>
      <ul className="mt-4">
        {project.points.map((point) => {
          return (
            <li key={point} className="flex items-center gap-4">
              <span className="h-1 w-1 shrink-0 bg-white" />
              <span className="text-[14px] font-sans tracking-[0.12em] text-zinc-400">
                {point}
              </span>
            </li>
          )
        })}
      </ul>
      <div className="mt-auto">
        <Cta project={project} />
      </div>
    </div>
  );

  // ── media-side: content left, image right (stacks on mobile) ──
  if (project.layout === "media-side") {
    return (
      <article className={`group flex h-full flex-col overflow-hidden ${surface} sm:flex-row`}>
        <div className="flex flex-1 flex-col p-7 sm:p-9">
          <Header project={project} />
          <h3
            className={`mt-6 font-sans text-[clamp(1.5rem,3vw,2.25rem)] font-normal uppercase leading-[1.05] tracking-[-0.01em] ${bodyText}`}
          >
            {project.title}
          </h3>
          <p className={`mt-5 max-w-xs font-sans text-[15px] leading-relaxed ${descText}`}>
            {project.description}
          </p>
          <ul className="mt-4">
            {project.points.map((point) => {
              return (
                <li key={point} className="flex items-center gap-4">
                  <span className="h-1 w-1 shrink-0 bg-white" />
                  <span className="text-[14px] font-sans tracking-[0.12em] text-zinc-400">
                    {point}
                  </span>
                </li>
              )
            })}
          </ul>
          <div className="mt-auto">
            <Cta project={project} />
          </div>
        </div>
        <div className="relative min-h-[14rem] w-full overflow-hidden p-6 sm:w-[52%] sm:p-8">
          <Media src={project.image} alt={project.title} fit="contain" />
        </div>
      </article>
    );
  }

  // ── media-bg: faint image behind body ──
  if (project.layout === "media-bg") {
    return (
      <article className={`group relative flex h-full min-h-[22rem] flex-col overflow-hidden ${surface}`}>
        <Media
          src={project.image}
          alt={project.title}
          className="absolute inset-0 opacity-[0.12] group-hover:opacity-20"
        />
        <div className="relative z-10 flex flex-1 flex-col">{Body}</div>
      </article>
    );
  }

  // ── text only (light card, no media) ──
  if (project.layout === "text") {
    return (
      <article className={`group flex h-full min-h-[22rem] flex-col ${surface}`}>
        {Body}
      </article>
    );
  }

  // ── media-top (default) ──
  return (
    <article className={`group flex h-full flex-col overflow-hidden ${surface}`}>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 p-6 sm:p-8">
        <Media src={project.image} alt={project.title} fit="contain" />
      </div>
      {Body}
    </article>
  );
}
