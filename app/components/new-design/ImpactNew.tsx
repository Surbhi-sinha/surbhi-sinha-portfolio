import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  FlashIcon,
  ChartColumnIcon,
  SourceCodeIcon,
} from "@hugeicons/core-free-icons";
import { Reveal } from "./Reveal";
import { CodeWindow } from "./CodeWindow";

const STATS = [
  {
    icon: FlashIcon,
    value: "99.98%",
    label: "UPTIME",
    desc: "Reliable systems that never sleep.",
  },
  {
    icon: ChartColumnIcon,
    value: "10M+",
    label: "USERS IMPACTED",
    desc: "Solutions used by millions worldwide.",
  },
  {
    icon: SourceCodeIcon,
    value: "50+",
    label: "FEATURES DELIVERED",
    desc: "End-to-end products shipped to scale.",
  },
];

function MicrosoftMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <rect x="2" y="2" width="9" height="9" fill="currentColor" />
      <rect x="13" y="2" width="9" height="9" fill="currentColor" />
      <rect x="2" y="13" width="9" height="9" fill="currentColor" />
      <rect x="13" y="13" width="9" height="9" fill="currentColor" />
    </svg>
  );
}

export function ImpactNew() {
  return (
    <section className="relative w-full overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.5fr)] lg:gap-14">
        {/* ── LEFT ── */}
        <Reveal>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
            Proven Impact
          </p>

          <h2 className="mt-5 font-display font-black uppercase leading-[0.92] tracking-[-0.02em] text-[clamp(2.5rem,6vw,4.75rem)]">
            <span className="block text-white">Building</span>
            <span className="block text-white">Solutions</span>
            <span className="block text-accent">That Scale.</span>
          </h2>

          <p className="mt-7 max-w-md font-sans text-lg leading-relaxed text-zinc-400">
            High-performance applications engineered for reliability,
            scalability, and real business outcomes.
          </p>

          {/* Stat cards */}
          <div className="mt-9 grid grid-cols-1 gap-3 min-[460px]:grid-cols-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-line bg-white/[0.02] p-5"
              >
                <HugeiconsIcon
                  icon={stat.icon}
                  className="h-6 w-6 text-accent"
                  strokeWidth={1.6}
                />
                <p className="mt-6 font-sans text-3xl font-extrabold tracking-tight text-white">
                  {stat.value}
                </p>
                <p className="mt-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-accent">
                  {stat.label}
                </p>
                <p className="mt-2.5 font-sans text-[13px] leading-snug text-zinc-500">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Logos */}
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-zinc-500">
            <span className="flex items-center gap-2 font-sans text-sm font-semibold">
              <MicrosoftMark />
              Microsoft
            </span>
            <span className="h-4 w-px bg-line-strong" />
            <span className="font-sans text-sm font-semibold">GrapeCity</span>
            <span className="h-4 w-px bg-line-strong" />
            <span className="font-sans text-sm font-semibold">UXMAGIC.AI</span>
          </div>
        </Reveal>

        {/* ── RIGHT ── */}
        <Reveal delay={120}>
          <CodeWindow />
        </Reveal>
      </div>
    </section>
  );
}
