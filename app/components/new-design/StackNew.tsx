import React from "react";
import { STACK_GROUPS, STACK_PRINCIPLES } from "./data";
import { Reveal } from "./Reveal";
import { ZapIcon, ShieldIcon, CodeIcon } from "./icons";

const ICONS = {
  zap: ZapIcon,
  shield: ShieldIcon,
  code: CodeIcon,
} as const;

export function StackNew() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left — heading + principles */}
        <div>
          <Reveal>
            <h2 className="font-display font-black uppercase leading-[0.82] tracking-[-0.02em] text-[clamp(3rem,9vw,7rem)]">
              <span className="block text-accent text-shimmer">Stack</span>
              <span className="block text-white">Specs<span className="text-white">.</span></span>
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-8 max-w-xs font-mono text-[13px] uppercase leading-[1.7] tracking-[0.04em] text-zinc-500">
              Technologies I have used to build enterprise tools, AI products,
              and full-stack applications.
            </p>
          </Reveal>

          <div className="mt-12 space-y-8">
            {STACK_PRINCIPLES.map((p, i) => {
              const Icon = ICONS[p.icon];
              return (
                <Reveal key={p.title} delay={i * 60} className="flex gap-4">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-sans text-sm font-bold uppercase tracking-[0.08em] text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] uppercase leading-[1.6] tracking-[0.04em] text-zinc-500">
                      {p.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Right — 2x2 spec grid */}
        <Reveal delay={120} className="self-center">
          <div className="grid grid-cols-1 border border-line-strong sm:grid-cols-2">
            {STACK_GROUPS.map((group, i) => (
              <div
                key={group.title}
                className={`p-7 sm:p-8 ${
                  i % 2 === 1 ? "sm:border-l sm:border-line-strong" : ""
                } ${i >= 2 ? "border-t border-line-strong" : ""} ${
                  i >= 1 && i < 2 ? "border-t border-line-strong sm:border-t-0" : ""
                }`}
              >
                <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-accent text-shimmer">
                  {group.title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {group.items.map((item, j) => (
                    <li
                      key={item}
                      className="flex items-baseline justify-between gap-4"
                    >
                      <span className="font-mono text-xs text-accent text-shimmer">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span className="text-right font-mono text-[12px] text-zinc-200 sm:text-[13px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
