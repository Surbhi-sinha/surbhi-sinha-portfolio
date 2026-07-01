import React from "react";
import { Reveal } from "./Reveal";
import { HERO_STATS } from "./data";
import {
  CpuIcon,
  CodeIcon,
  CloudIcon,
  BoxIcon,
  ArrowRightIcon,
} from "./icons";

const ICONS = {
  cpu: CpuIcon,
  code: CodeIcon,
  cloud: CloudIcon,
  box: BoxIcon,
} as const;

export function HeroNew() {
  return (
    <section
      id="home"
      className="relative isolate mx-auto max-w-[1440px] px-5 pt-28 pb-16 sm:px-8 sm:pt-32 lg:px-12 lg:pt-40 lg:pb-24"
    >
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Faint grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-line-strong) 1px, transparent 1px), linear-gradient(90deg, var(--color-line-strong) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 90% 80% at 50% 0%, #000 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 80% at 50% 0%, #000 40%, transparent 100%)",
          }}
        />
        {/* Accent glow */}
        <div
          className="absolute -top-32 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 18%, transparent) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Wordmark */}
      <Reveal
        as="h1"
        className="reveal-slow font-display font-black  uppercase leading-[0.86] tracking-[-0.03em] text-[clamp(2.75rem,12.5vw,12rem)]"
      >
        <span className=" text-accent text-shimmer italic inline pr-[0.12em] -mr-[0.12em]">SURBHI</span>{" "}
        <span className=" text-white inline">
          SINHA
          <span className="text-accent text-shimmer">.</span>
        </span>
      </Reveal>

      {/* Core competency + stats */}
      <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)]">
        {/* Core competency card */}
        <Reveal
          delay={150}
          className="reveal-slow flex flex-col border border-line p-7 sm:p-9"
        >
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-accent text-shimmer">
            PROFILE_SUMMARY
          </p>
          <p className="mt-6 max-w-sm font-mono text-[13px] uppercase leading-[1.9] tracking-[0.04em] text-zinc-300">
            Full-stack developer experienced in AI-powered products, enterprise
            JavaScript systems, real-time applications, and scalable web
            experiences across React, Node.js, NestJS, and cloud platforms.
          </p>
          <a
            href="#projects"
            className="group mt-8 inline-flex items-center justify-center gap-2 bg-white px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-black transition-colors hover:bg-accent hover:text-white"
          >
            VIEW SELECTED WORK
            <ArrowRightIcon className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1 group-hover:text-white" />
          </a>
        </Reveal>

        {/* Stats panel */}
        <Reveal
          delay={300}
          className="reveal-slow relative grid grid-cols-2 border border-line lg:grid-cols-4"
        >
          {HERO_STATS.map((stat, i) => {
            const Icon = ICONS[stat.icon];
            return (
              <div
                key={stat.label}
                className={`flex min-h-[14rem] flex-col p-6 sm:p-7 ${
                  i % 2 === 1 ? "border-l border-line" : ""
                } ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${
                  i % 4 !== 0 ? "lg:border-l lg:border-line" : ""
                }`}
              >
                <Icon className="h-5 w-5 text-accent" />
                <div className="mt-10">
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-accent text-shimmer">
                    {stat.label}
                  </p>
                  <div className="mt-3 space-y-1">
                    {stat.lines.map((line) => (
                      <p
                        key={line}
                        className="font-mono text-[13px] font-medium uppercase leading-snug text-white"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
