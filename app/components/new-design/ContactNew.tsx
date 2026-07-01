"use client";

import React, { useState } from "react";
import { SOCIALS, CONTACT_EMAIL } from "./data";
import { Reveal } from "./Reveal";
import { TerminalIcon } from "./icons";

const FIELDS = [
  {
    name: "name",
    label: "YOUR_NAME",
    placeholder: "NAME OR ORGANIZATION",
    type: "text",
  },
  {
    name: "email",
    label: "YOUR_EMAIL",
    placeholder: "EMAIL ADDRESS",
    type: "email",
  },
] as const;

export function ContactNew() {
  const [form, setForm] = useState({ name: "", email: "", brief: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio inquiry - ${form.name || "New message"}`
    );
    const body = encodeURIComponent(
      `Name / Organization: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.brief}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <Reveal>
        <div className="grid grid-cols-1 border border-line lg:grid-cols-2">
          {/* Left — identity + terminal */}
          <div className="flex flex-col p-8 sm:p-10 lg:p-12">
            <h2 className="font-display font-black uppercase leading-[0.86] tracking-[-0.02em] text-[clamp(3rem,8vw,6rem)]">
              <span className="block text-white">Let&rsquo;s</span>
              <span className="block text-white">Build</span>
              <span className="block italic text-accent text-shimmer pr-[0.12em]">Together</span>
            </h2>

            <div className="mt-12">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent text-shimmer">
                EMAIL_ME
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-3 block break-all font-sans text-xl font-bold text-white transition-colors hover:text-accent sm:text-2xl"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            {/* Terminal */}
            <div className="mt-8 border border-line p-5 font-mono text-[12px] leading-relaxed">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              </div>
              <p className="mt-5 text-[#27c93f]">
                surbhi@portfolio:~$ ./connect
              </p>
              <p className="mt-1 text-zinc-400">
                Full-stack, AI, and product engineering
              </p>
              <p className="mt-1 text-accent">
                Open to thoughtful conversations
                <span className="ml-0.5 inline-block w-2 animate-[caret_1s_steps(1)_infinite]">
                  _
                </span>
              </p>
            </div>

            {/* Socials */}
            <div className="mt-8 flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-line-strong px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-300 transition-colors hover:border-accent hover:text-accent"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col border-t border-line p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12"
          >
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent text-shimmer">
              SEND_A_MESSAGE
            </p>
            <h3 className="mt-3 font-sans text-2xl font-extrabold uppercase tracking-[0.04em] text-white sm:text-3xl">
              Start A Conversation
            </h3>

            <div className="mt-10 space-y-10">
              {FIELDS.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-accent text-shimmer"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required
                    value={form[field.name as "name" | "email"]}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, [field.name]: e.target.value }))
                    }
                    placeholder={field.placeholder}
                    className="mt-3 w-full border-b border-line-strong bg-transparent pb-3 font-mono text-base uppercase tracking-[0.05em] text-white placeholder:text-zinc-600 focus:border-accent focus:outline-none"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="brief"
                  className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-accent text-shimmer"
                >
                  YOUR_MESSAGE
                </label>
                <textarea
                  id="brief"
                  name="brief"
                  rows={3}
                  value={form.brief}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, brief: e.target.value }))
                  }
                  placeholder="TELL ME WHAT YOU WOULD LIKE TO DISCUSS"
                  className="mt-3 w-full resize-none border-b border-line-strong bg-transparent pb-3 font-mono text-base uppercase tracking-[0.05em] text-white placeholder:text-zinc-600 focus:border-accent focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="group mt-12 inline-flex items-center justify-center gap-3 border border-white py-5 font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-accent hover:border-accent"
            >
              Open Email Draft
              <TerminalIcon className="h-5 w-5" />
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
