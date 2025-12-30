
// hooks/useHeaderScroll.ts
'use client';

import { useEffect } from 'react';

export function useHeaderScroll(selector: string = '.header-one', threshold: number = 100) {
  useEffect(() => {
    const header = document.querySelector(selector) as HTMLElement;
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > threshold) {
        header.style.transition = 'all 0.5s ease-in-out';
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selector, threshold]);
}
