"use client";

import { useEffect } from "react";

export function useImpactBars() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fill = entry.target.querySelector(".impact-fill") as HTMLElement | null;
            if (fill) fill.style.width = `${fill.dataset.fill}%`;
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll("[data-stack]").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}
