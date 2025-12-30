// hooks/useModal.ts
'use client';

import { useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';

export function useModal(modalId?: string) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
    
    const modal = modalId ? document.getElementById(modalId) : document.querySelector('.modal-content');
    if (modal) {
      gsap.fromTo(
        modal,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    }
  }, [modalId]);

  const close = useCallback(() => {
    const modal = modalId ? document.getElementById(modalId) : document.querySelector('.modal-content');
    
    if (modal) {
      gsap.to(modal, {
        opacity: 0,
        y: -50,
        duration: 0.2,
        onComplete: () => {
          setIsOpen(false);
          document.body.style.overflow = 'auto';
        },
      });
    } else {
      setIsOpen(false);
      document.body.style.overflow = 'auto';
    }
  }, [modalId]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) close();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, close]);

  return { isOpen, open, close };
}