"use client";

import { useEffect, useRef, useCallback } from "react";

export function useDragBoard() {
  const boardRef = useRef<HTMLDivElement>(null);

  const init = useCallback(() => {
    const board = boardRef.current;
    if (!board) return;
    const cards = Array.from(board.querySelectorAll(".drag-card")) as HTMLElement[];
    let z = 10;
    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;
    let active: HTMLElement | null = null;

    const start = (e: MouseEvent | TouchEvent) => {
      const card = (e.target as HTMLElement).closest(".drag-card") as HTMLElement | null;
      if (!card) return;
      dragging = true;
      active = card;
      card.classList.add("dragging");
      card.style.zIndex = String(++z);
      const point = "touches" in e ? e.touches[0] : e;
      const rect = card.getBoundingClientRect();
      offsetX = point.clientX - rect.left;
      offsetY = point.clientY - rect.top;
      e.preventDefault();
    };

    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging || !active) return;
      const point = "touches" in e ? e.touches[0] : e;
      const boardRect = board!.getBoundingClientRect();
      let x = point.clientX - boardRect.left - offsetX;
      let y = point.clientY - boardRect.top - offsetY;
      x = Math.max(0, Math.min(x, boardRect.width - active.offsetWidth));
      y = Math.max(0, Math.min(y, boardRect.height - active.offsetHeight));
      active.style.left = `${x}px`;
      active.style.top = `${y}px`;
    };

    const end = () => {
      if (active) active.classList.remove("dragging");
      dragging = false;
      active = null;
    };

    cards.forEach((card) => {
      card.addEventListener("mousedown", start as EventListener);
      card.addEventListener("touchstart", start as EventListener, { passive: false });
    });

    window.addEventListener("mousemove", move as EventListener);
    window.addEventListener("touchmove", move as EventListener, { passive: false });
    window.addEventListener("mouseup", end);
    window.addEventListener("touchend", end);

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousedown", start as EventListener);
        card.removeEventListener("touchstart", start as EventListener);
      });
      window.removeEventListener("mousemove", move as EventListener);
      window.removeEventListener("touchmove", move as EventListener);
      window.removeEventListener("mouseup", end);
      window.removeEventListener("touchend", end);
    };
  }, []);

  useEffect(() => {
    const cleanup = init();
    return cleanup;
  }, [init]);

  return boardRef;
}
