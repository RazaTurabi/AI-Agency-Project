// hooks/useRevealAnimation.ts
'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useRevealAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-ns-animate]');

    elements.forEach((elem) => {
      const duration = parseFloat(elem.getAttribute('data-duration') || '0.6');
      const delay = parseFloat(elem.getAttribute('data-delay') || '0');
      const offset = parseFloat(elem.getAttribute('data-offset') || '60');
      const direction = elem.getAttribute('data-direction') || 'down';
      const start = elem.getAttribute('data-start') || 'top 90%';
      const instant = elem.hasAttribute('data-instant');

      const animationProps: gsap.TweenVars = {
        opacity: 0,
        filter: 'blur(16px)',
        duration,
        delay,
        ease: 'power2.out',
      };

      if (!instant) {
        animationProps.scrollTrigger = {
          trigger: elem,
          start,
          scrub: false,
        };
      }

      // Set direction
      switch (direction) {
        case 'left':
          animationProps.x = -offset;
          break;
        case 'right':
          animationProps.x = offset;
          break;
        case 'up':
          animationProps.y = -offset;
          break;
        case 'down':
        default:
          animationProps.y = offset;
          break;
      }

      gsap.from(elem, animationProps);
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
}