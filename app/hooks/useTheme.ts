
// hooks/useTheme.ts
'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check for forced theme
    const forcedTheme = document.documentElement.dataset.forceTheme as
      | 'light'
      | 'dark'
      | undefined;

    if (forcedTheme) {
      setTheme(forcedTheme);
      return;
    }

    // Check localStorage or system preference
    const stored = localStorage.getItem('color-theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = stored || (prefersDark ? 'dark' : 'light');

    setTheme(initialTheme);
    document.documentElement.classList.add(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('color-theme', newTheme);

    // Animate icon transition
    const showIcon = document.getElementById(
      newTheme === 'dark' ? 'dark-theme-icon' : 'light-theme-icon'
    );
    const hideIcon = document.getElementById(
      newTheme === 'dark' ? 'light-theme-icon' : 'dark-theme-icon'
    );

    if (showIcon && hideIcon) {
      hideIcon.classList.add('hidden');
      showIcon.classList.remove('hidden');
      
      gsap.fromTo(
        showIcon,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: 'power2.out' }
      );
    }
  };

  return { theme, toggleTheme };
}
