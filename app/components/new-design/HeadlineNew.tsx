import React from "react";
import { Reveal } from "./Reveal";

export function HeadlineNew() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* Availability badge */}
      <Reveal className="border-b border-line pb-5">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent animate-[status-pulse_2s_ease-in-out_infinite]" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-white">
            Available for selective partnerships
          </span>
        </div>
      </Reveal>

      {/* Display headline */}
      <Reveal delay={80}>
        <h2 className="mt-10 font-display font-black uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(2.75rem,11.5vw,10.5rem)]">
          <span className="block text-white hover:text-zinc-400 transition-all">Engineering</span>
          <span className="block text-accent">Growth</span>
          <span className="block text-white hover:text-zinc-400 transition-all">Through</span>
          <span className="block text-accent">Scalable</span>
          <span className="block text-accent">
            Solutions<span className="text-accent">.</span>
          </span>
        </h2>
      </Reveal>

      {/* Intro + CTAs */}
      <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="max-w-md">
          <p className="font-sans text-base leading-relaxed text-zinc-400">
            I help startups and enterprises turn complex ideas into
            high-performance, production-ready digital products. Specializing in
            full-stack development, AI integration, and cloud architecture that
            scales.
          </p>
        </Reveal>

        <Reveal delay={120} className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-white px-7 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
          >
            Let&rsquo;s Connect
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center border border-line-strong px-7 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-300 transition-colors hover:border-accent hover:text-accent"
          >
            Explore Services
          </a>
        </Reveal>
      </div>
    </section>
  );
}
