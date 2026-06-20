"use client";

import { useRef, useEffect } from "react";

export function ProgressBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tick = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      el.style.width = `${scrolled}%`;
    };

    document.addEventListener("scroll", tick, { passive: true });
    return () => document.removeEventListener("scroll", tick);
  }, []);

  return <div id="progress" ref={ref} />;
}
