import React from "react";
import { SOCIALS } from "./data";

const FOOTER_LINKS = ["LINKEDIN", "MEDIUM", "RESUME", "GITHUB"];

export function FooterNew() {
  const hrefFor = (label: string) =>
    SOCIALS.find((s) => s.label === label)?.href ?? "#";

  return (
    <footer className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <span className="font-display text-sm font-extrabold uppercase tracking-[0.18em] text-white">
            Surbhi Sinha
          </span>
          <span className="hidden h-4 w-px bg-line-strong sm:block" />
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">
            Full-stack developer building intelligent, useful products.
          </span>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {FOOTER_LINKS.map((label) => (
            <a
              key={label}
              href={hrefFor(label)}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
