"use client";

import { useEffect, useRef, useState } from "react";

type GuideStep = { id: string; label: string };

export default function ScrollGuide({ steps }: { steps: GuideStep[] }) {
  const barRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${ratio})`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const step of steps) {
      const el = document.getElementById(step.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [steps]);

  return (
    <>
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-16 z-40 h-1">
        <div
          ref={barRef}
          className="h-full origin-left bg-royal-signal will-change-transform"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <nav
        aria-label="Étapes de la page"
        className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
      >
        <ol className="flex flex-col items-end gap-1">
          {steps.map((step, i) => {
            const isActive = step.id === active;
            return (
              <li key={step.id}>
                <a
                  href={`#${step.id}`}
                  aria-current={isActive ? "step" : undefined}
                  className="group flex items-center gap-3 py-1.5 pl-3"
                >
                  <span
                    className={`rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold shadow-card transition-opacity ${
                      isActive
                        ? "text-royal-signal opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 2xl:opacity-100"
                        : "text-slate-caption opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                    }`}
                  >
                    {i + 1}. {step.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`block rounded-full transition-all ${
                      isActive ? "h-3 w-3 bg-royal-signal" : "h-2 w-2 bg-ash-helper/50 group-hover:bg-ash-helper"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
