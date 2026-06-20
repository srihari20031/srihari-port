"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme(): readonly [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "light";
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const initial: Theme = prefersDark.matches ? "dark" : "light";
    setTheme(initial);
    root.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    setTheme(next);
  };

  return [theme, toggle] as const;
}
