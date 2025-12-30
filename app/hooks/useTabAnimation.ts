// hooks/useTabAnimation.ts
'use client';

import { useState, useEffect } from 'react';
import gsap from 'gsap';

export function useTabAnimation(defaultTab = 0) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const switchTab = (index: number) => {
    setActiveTab(index);

    const tabContent = document.querySelectorAll('.tab-content');
    tabContent.forEach((content, i) => {
      const elem = content as HTMLElement;
      if (i === index) {
        const displayType = elem.getAttribute('data-display') || 'flex';
        elem.style.display = displayType;
        elem.setAttribute('aria-hidden', 'false');
        
        gsap.fromTo(
          elem,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.3, delay: 0.05, ease: 'power2.out' }
        );
      } else {
        elem.style.display = 'none';
        elem.setAttribute('aria-hidden', 'true');
      }
    });
  };

  useEffect(() => {
    switchTab(activeTab);
  }, []);

  return { activeTab, switchTab };
}
