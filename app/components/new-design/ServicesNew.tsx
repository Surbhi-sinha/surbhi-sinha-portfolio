import React from "react";
import { SERVICES } from "./data";
import { Reveal } from "./Reveal";
import { LayersIcon, CpuIcon, CloudIcon } from "./icons";

const ICONS = {
  layers: LayersIcon,
  cpu: CpuIcon,
  cloud: CloudIcon,
} as const;

export function ServicesNew() {
  return (
    <section
      id="services"
      className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <Reveal>
        <h2 className="font-display font-black uppercase leading-[0.86] tracking-[-0.02em] text-[clamp(2.75rem,11vw,9.5rem)]">
          <span className="block text-white hover:text-zinc-400 transition-all">What I</span>
          <span className="block text-accent text-shimmer">Build</span>
        </h2>
      </Reveal>

      {/* Service list — sits in the right column on desktop */}
      <div className="mt-16 grid grid-cols-1 lg:mt-28 lg:grid-cols-2">
        <div className="hidden lg:block" aria-hidden="true" />
        <div className="flex flex-col">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal
                key={service.index}
                delay={i * 60}
                className="border-t border-line py-12 last:border-b"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-accent text-shimmer">
                    {service.index} / {service.tag}
                  </span>
                  <Icon className="h-4 w-4 text-accent" />
                </div>

                <h3 className="mt-8 max-w-md font-sans text-[clamp(1.75rem,4.2vw,2.75rem)] font-normal uppercase leading-[1.05] tracking-[-0.01em] text-white">
                  {service.title}
                </h3>

                <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-zinc-400">
                  {service.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-4">
                      <span className="h-2 w-2 shrink-0 bg-white" />
                      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
