import React from "react";
import { CAPABILITIES } from "./data";
import { Reveal } from "./Reveal";

export function CapabilitiesNew() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* Heading */}
      <Reveal>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display font-black uppercase leading-[0.82] tracking-[-0.02em] text-[clamp(2.75rem,9vw,7.5rem)] text-white">
            Capabilities<span className="text-white">.</span>
          </h2>
          <span className="mb-2 hidden font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-accent text-shimmer sm:block">
            MODULES_01-03
          </span>
        </div>
      </Reveal>
      <div className="mt-6 h-px w-full bg-white" />

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 border border-line lg:grid-cols-3">
        {CAPABILITIES.map((cap, i) => (
          <Reveal
            key={cap.index}
            delay={i * 80}
            as="article"
            className={`flex flex-col p-8 sm:p-10 ${
              i > 0 ? "border-t border-line lg:border-t-0 lg:border-l" : ""
            }`}
          >
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-accent text-shimmer">
              {cap.index}
            </p>

            <h3 className="mt-12 font-display text-2xl font-extrabold uppercase leading-[1.05] tracking-[-0.01em] text-white sm:text-3xl">
              {cap.title}
            </h3>

            <p className="mt-6 max-w-xs font-mono text-[12px] uppercase leading-[1.7] tracking-[0.03em] text-zinc-400">
              {cap.description}
            </p>

            <div className="mt-auto flex flex-wrap gap-2 pt-12">
              {cap.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-line-strong px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
