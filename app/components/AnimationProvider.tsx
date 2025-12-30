// // components/AnimationProvider.tsx
// 'use client';

// import { useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useRevealAnimation } from '../hooks/useRevealAnimation';
// import { useSmoothScroll } from '../hooks/useSmoothScroll';

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export function AnimationProvider({ children }: { children: React.ReactNode }) {
//   useRevealAnimation();
//   useSmoothScroll();

//   useEffect(() => {
//     // Refresh ScrollTrigger after mount
//     ScrollTrigger.refresh();
//   }, []);

//   return <>{children}</>;
// }

"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize reveal animations
    const elements = document.querySelectorAll("[data-ns-animate]");

    elements.forEach((elem) => {
      const duration = parseFloat(elem.getAttribute("data-duration") || "0.6");
      const delay = parseFloat(elem.getAttribute("data-delay") || "0");
      const offset = parseFloat(elem.getAttribute("data-offset") || "60");
      const direction = elem.getAttribute("data-direction") || "down";
      const start = elem.getAttribute("data-start") || "top 90%";

      const animationProps: gsap.TweenVars = {
        opacity: 0,
        filter: "blur(16px)",
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elem,
          start,
          scrub: false,
          once: true,
        },
      };

      // Set direction
      switch (direction) {
        case "left":
          animationProps.x = -offset;
          break;
        case "right":
          animationProps.x = offset;
          break;
        case "up":
          animationProps.y = -offset;
          break;
        case "down":
        default:
          animationProps.y = offset;
          break;
      }

      gsap.from(elem, animationProps);
    });

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}