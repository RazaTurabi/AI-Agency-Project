// hooks/useAccordion.ts
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useAccordion() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const accordionItems = document.querySelectorAll('.accordion-item');
    let activeItem: HTMLElement | null = null;

    const openAccordion = (item: HTMLElement) => {
      const content = item.querySelector('.accordion-content') as HTMLElement;
      if (!content) return;

      content.classList.remove('hidden');
      const contentHeight = content.scrollHeight;
      content.style.height = '0px';

      gsap.to(content, { height: contentHeight, opacity: 1, duration: 0.3 });

      const plusSpans = item.querySelectorAll('.accordion-plus-icon span');
      const arrow = item.querySelector('.accordion-arrow svg');
      
      if (plusSpans.length > 1) gsap.to(plusSpans[1], { rotation: 90, duration: 0.3 });
      if (arrow) gsap.to(arrow, { rotation: -180, duration: 0.3 });
    };

    const closeAccordion = (item: HTMLElement) => {
      const content = item.querySelector('.accordion-content') as HTMLElement;
      if (!content) return;

      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        onComplete: () => content.classList.add('hidden'),
      });

      const plusSpans = item.querySelectorAll('.accordion-plus-icon span');
      const arrow = item.querySelector('.accordion-arrow svg');
      
      if (plusSpans.length > 1) gsap.to(plusSpans[1], { rotation: 0, duration: 0.5 });
      if (arrow) gsap.to(arrow, { rotation: 0, duration: 0.5 });
    };

    accordionItems.forEach((item, index) => {
      const action = item.querySelector('.accordion-action');

      // Set initial state
      if (item.classList.contains('active-accordion')) {
        const content = item.querySelector('.accordion-content') as HTMLElement;
        content.classList.remove('hidden');
        content.style.height = 'auto';
        activeItem = item as HTMLElement;
      }

      // Click handler
      action?.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (activeItem && activeItem !== item) {
          closeAccordion(activeItem);
        }

        if (activeItem === item) {
          closeAccordion(item as HTMLElement);
          activeItem = null;
        } else {
          openAccordion(item as HTMLElement);
          activeItem = item as HTMLElement;
        }
      });

      // Scroll animation
      gsap.fromTo(
        item,
        { opacity: 0, y: 50, filter: 'blur(20px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.5,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
}

