"use client";

import { useEffect } from "react";

export function useCountUp() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseFloat(el.dataset.target || "0");
          const suffix = el.dataset.suffix || "";
          const duration = 1200;
          const start = performance.now();

          function tick(now: number) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = `${Math.round(target * eased)}${suffix}`;
            if (p < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll(".count").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}
