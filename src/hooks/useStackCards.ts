"use client";

import { useEffect } from "react";

export function useStackCards() {
  useEffect(() => {
    const stackCards = Array.from(document.querySelectorAll("[data-stack]")) as HTMLElement[];

    function updateStack() {
      stackCards.forEach((card, i) => {
        const next = stackCards[i + 1];
        if (!next) return;
        const cardRect = card.getBoundingClientRect();
        const nextRect = next.getBoundingClientRect();
        const stickyTop = 108;
        const coverage = Math.min(
          1,
          Math.max(0, (stickyTop + cardRect.height - nextRect.top) / cardRect.height)
        );
        const scale = 1 - coverage * 0.045;
        const opacity = 1 - coverage * 0.55;
        card.style.transform = `scale(${scale})`;
        card.style.opacity = `${opacity}`;
        card.style.filter = `brightness(${1 - coverage * 0.08})`;
      });
    }

    let ticking = false;
    document.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateStack();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    updateStack();

    return () => document.removeEventListener("scroll", updateStack as EventListener);
  }, []);
}
