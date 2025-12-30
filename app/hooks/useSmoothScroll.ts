
// hooks/useSmoothScroll.ts
'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useSmoothScroll(options = {}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      window.innerWidth <= 768 ||
      'ontouchstart' in window;

    if (isMobile) return;

    lenisRef.current = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      ...options,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  const scrollTo = (target: string | HTMLElement, offset = -100) => {
    lenisRef.current?.scrollTo(target, {
      offset,
      duration: 1.7,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });
  };

  return { lenis: lenisRef.current, scrollTo };
}