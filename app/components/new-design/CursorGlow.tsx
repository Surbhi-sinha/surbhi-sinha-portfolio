"use client";

import React, { useEffect, useRef } from "react";

/**
 * A soft, shadowy circle that follows the pointer. Renders nothing on
 * touch devices or when the user prefers reduced motion. Uses rAF +
 * direct transform writes (no React state) so it stays smooth and never
 * triggers re-renders.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip on touch / coarse pointers and for reduced-motion users.
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduced) return;

    // Target = latest pointer position; pos = eased follower position.
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let posX = targetX;
    let posY = targetY;
    let raf = 0;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) {
        visible = true;
        el.style.opacity = "1";
      }
    };
    const onLeave = () => {
      visible = false;
      el.style.opacity = "0";
    };

    const tick = () => {
      // Ease toward the target for a trailing feel.
      posX += (targetX - posX) * 0.15;
      posY += (targetY - posY) * 0.15;
      el.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-72 w-72 rounded-full opacity-0 transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 22%, transparent) 0%, color-mix(in srgb, var(--color-accent) 8%, transparent) 40%, transparent 70%)",
        filter: "blur(8px)",
        mixBlendMode: "screen",
      }}
    />
  );
}
