// components/PriceSwitcher.tsx
'use client';

import { usePriceSwitcher } from '../hooks/usePriceSwitcher';

export function PriceSwitcher() {
  const { isYearly, setIsYearly } = usePriceSwitcher();

  return (
    <div className="flex items-center gap-4">
      <span className={`transition-all ${!isYearly ? 'font-semibold text-secondary dark:text-accent' : 'text-secondary/60 dark:text-accent/60'}`}>
        Monthly
      </span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isYearly}
          onChange={(e) => setIsYearly(e.target.checked)}
          className="sr-only peer"
          id="priceCheck"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 dark:peer-focus:ring-primary/50 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
      </label>
      <span className={`transition-all ${isYearly ? 'font-semibold text-secondary dark:text-accent' : 'text-secondary/60 dark:text-accent/60'}`}>
        Yearly
      </span>
    </div>
  );
}