"use client";

import { useEffect } from "react";

export function useMagneticButtons() {
  useEffect(() => {
    const buttons = document.querySelectorAll(".magnetic") as NodeListOf<HTMLElement>;

    buttons.forEach((btn: HTMLElement) => {
      const onMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
      };

      const onLeave = () => {
        btn.style.transform = "translate(0, 0)";
      };

      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", onLeave);

      return () => {
        btn.removeEventListener("mousemove", onMove);
        btn.removeEventListener("mouseleave", onLeave);
      };
    });
  }, []);
}
