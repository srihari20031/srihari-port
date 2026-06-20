"use client";

import { useEffect, useRef, useState } from "react";

export interface DragCardProps {
  className: string;
  style: React.CSSProperties;
  icon: React.ReactNode;
  value: string;
  label: string;
}

export function DragCard({ className, style, icon, value, label }: DragCardProps) {
  return (
    <div className={`drag-card ${className}`} style={style}>
      <div className="dc-icon">{icon}</div>
      <div className="dc-val">{value}</div>
      <div className="dc-label">{label}</div>
    </div>
  );
}

export interface DragBoardProps {
  cards: DragCardProps[];
}

export function DragBoard({ cards }: DragBoardProps) {
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;

    const nodeList = board.querySelectorAll(".drag-card");
    const cardsArr = Array.from(nodeList) as HTMLElement[];
    let z = 10;
    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;
    let active: HTMLElement | null = null;

    const getPoint = (e: MouseEvent | TouchEvent) => {
      const src = "touches" in e ? e.touches[0] : e;
      return { clientX: src.clientX, clientY: src.clientY };
    };

    const onStart = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      const card = target.closest(".drag-card") as HTMLElement | null;
      if (!card) return;
      dragging = true;
      active = card;
      card.classList.add("dragging");
      card.style.zIndex = String(++z);
      const { clientX, clientY } = getPoint(e);
      const rect = card.getBoundingClientRect();
      offsetX = clientX - rect.left;
      offsetY = clientY - rect.top;
      e.preventDefault();
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging || !active || !board) return;
      const { clientX, clientY } = getPoint(e);
      const boardRect = board.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - boardRect.left - offsetX, boardRect.width - active.offsetWidth));
      const y = Math.max(0, Math.min(clientY - boardRect.top - offsetY, boardRect.height - active.offsetHeight));
      active.style.left = `${x}px`;
      active.style.top = `${y}px`;
    };

    const onEnd = () => {
      if (active) active.classList.remove("dragging");
      dragging = false;
      active = null;
    };

    cardsArr.forEach((card) => {
      card.addEventListener("mousedown", onStart);
      card.addEventListener("touchstart", onStart, { passive: false });
    });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchend", onEnd);

    return () => {
      cardsArr.forEach((card) => {
        card.removeEventListener("mousedown", onStart);
        card.removeEventListener("touchstart", onStart);
      });
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchend", onEnd);
    };
  }, []);

  return (
    <div className="drag-board" id="dragBoard" ref={boardRef}>
      {cards.map((c, i) => (
        <DragCard key={i} {...c} />
      ))}
    </div>
  );
}
