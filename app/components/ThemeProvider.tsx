"use client";

import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check for forced theme
    const forcedTheme = document.documentElement.dataset.forceTheme;
    
    if (forcedTheme) {
      document.documentElement.classList.add(forcedTheme);
      return;
    }

    // Check localStorage or system preference
    const stored = localStorage.getItem("color-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored || (prefersDark ? "dark" : "light");

    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, []);

  return <>{children}</>;
}
