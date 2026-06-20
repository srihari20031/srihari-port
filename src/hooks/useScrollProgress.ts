"use client";

import { useEffect, useRef } from "react";

export function useScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const updateProgress = () => {
      const scrollTop = document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      el.style.width = `${scrolled}%`;
    };

    document.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => document.removeEventListener("scroll", updateProgress);
  }, []);

  return ref;
}
