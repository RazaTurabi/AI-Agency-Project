
// hooks/useCountUp.ts
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useCountUp() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const elements = document.querySelectorAll('[data-counter]');

    elements.forEach((elem) => {
      const target = parseInt(elem.getAttribute('data-number') || '0', 10);
      const duration = parseFloat(elem.getAttribute('data-speed') || '2.5') / 1000;

      const counter = { val: 0 };

      gsap.to(counter, {
        val: target,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: elem,
          start: 'top 90%',
          once: true,
        },
        onUpdate: () => {
          elem.textContent = `${Math.floor(counter.val)}`;
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
}
