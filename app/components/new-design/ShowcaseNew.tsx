import React from "react";
import { SHOWCASE_PILLARS } from "./data";

export function ShowcaseNew() {
  return (
    <section className="w-full px-5 py-10 sm:px-8 lg:px-12">
      <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden bg-zinc-950 lg:aspect-[16/8] lg:max-h-[820px]">
        {/* Backdrop */}
        <video
          src="https://media-www.sqspcdn.com/images/components/blueprint-ai/blueprint-ai.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Content — flows on mobile (defines height), centred on desktop */}
        <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16 lg:absolute lg:inset-0 lg:flex lg:items-center lg:px-14 lg:py-0">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
            <h2 className="font-display font-black uppercase leading-[0.88] tracking-[-0.02em] text-[clamp(2.5rem,8vw,6.5rem)]">
              <span className="block text-white">Ideas Into</span>
              <span className="block text-accent text-shimmer">Products<span className="text-accent text-shimmer">.</span></span>
            </h2>

            <div className="beam-border max-w-xs bg-black/30 p-5 backdrop-blur-sm lg:mt-2">
              <p className="font-sans text-lg font-bold leading-tight text-white sm:text-xl">
                From reusable interfaces to AI orchestration and real-time backends, I ship the full product journey.
              </p>
            </div>

            <div className="flex gap-6 lg:gap-8">
              {SHOWCASE_PILLARS.map((p) => (
                <div key={p.index} className="flex flex-col">
                  <span className="font-display text-2xl font-black text-white sm:text-3xl">
                    {p.index}
                  </span>
                  <span className="mt-2 max-w-[5.5rem] font-mono text-[9px] uppercase leading-[1.4] tracking-[0.12em] text-zinc-400 sm:text-[10px]">
                    {p.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
