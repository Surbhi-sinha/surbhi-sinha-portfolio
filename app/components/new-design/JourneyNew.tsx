import React from "react";
import { JOURNEY } from "./data";
import { Reveal } from "./Reveal";

export function JourneyNew() {
  return (
    <section
      id="journey"
      className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Heading */}
      <Reveal>
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent text-shimmer">
          experience.timeline()
        </p>
        <h2 className="mt-5 font-display font-black uppercase leading-[0.84] tracking-[-0.02em] text-[clamp(2.75rem,11vw,9.5rem)]">
          <span className="block text-white">Experience &</span>
          <span className="block text-accent text-shimmer">Education</span>
        </h2>
      </Reveal>

      {/* Timeline */}
      <div className="mt-16 lg:mt-24">
        {JOURNEY.map((item, i) => (
          <Reveal
            key={item.role}
            delay={i * 50}
            className="grid grid-cols-1 gap-6 border-t border-line py-12 lg:grid-cols-[14rem_1fr_auto] lg:gap-10 lg:py-16 last:border-b"
          >
            {/* period / location */}
            <div className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.08em]">
              <p className="text-zinc-500">{item.period}</p>
              <p className="mt-1 text-accent text-shimmer">{item.location}</p>
            </div>

            {/* role / company / detail */}
            <div>
              <div className="flex flex-wrap items-center gap-4">
                <h3 className="font-sans text-[clamp(1.5rem,3vw,2.25rem)] font-normal uppercase leading-tight tracking-[-0.01em] text-white">
                  {item.role}
                </h3>
                {item.current && (
                  <span className="border border-line-strong px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white lg:hidden">
                    Current
                  </span>
                )}
              </div>
              <p className="mt-5 font-sans text-lg text-accent text-shimmer">{item.company}</p>
              <p className="mt-1 font-sans text-sm text-zinc-500">{item.detail}</p>
              <ul className="mt-4">
                {item.point.map((point) => {
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
            </div>



            {/* current badge (desktop) */}
            <div className="hidden lg:block">
              {item.current && (
                <span className="border border-line-strong px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                  Current
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
