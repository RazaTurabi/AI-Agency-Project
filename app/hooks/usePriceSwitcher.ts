// hooks/usePriceSwitcher.ts
'use client';

import { useState, useEffect } from 'react';

export function usePriceSwitcher() {
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    const monthlyPrices = document.querySelectorAll('.price-month');
    const yearlyPrices = document.querySelectorAll('.price-year');

    monthlyPrices.forEach((el, i) => {
      const monthly = el as HTMLElement;
      const yearly = yearlyPrices[i] as HTMLElement;

      if (isYearly) {
        monthly.style.display = 'none';
        yearly.style.display = 'block';
      } else {
        monthly.style.display = 'block';
        yearly.style.display = 'none';
      }
    });
  }, [isYearly]);

  return { isYearly, setIsYearly };
}