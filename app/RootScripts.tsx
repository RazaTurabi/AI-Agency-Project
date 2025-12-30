// app/RootScripts.tsx
"use client";
import Script from "next/script";

export default function RootScripts() {
  return (
    <>
      <Script src="/vendor/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/vendor/scroll-trigger.min.js" strategy="beforeInteractive" />
      <Script src="/vendor/split-text.min.js" strategy="afterInteractive" />
      <Script src="/vendor/lenis.min.js" strategy="afterInteractive" />
      <Script src="/vendor/springer.min.js" strategy="afterInteractive" />
      <Script src="/vendor/number-counter.js" strategy="afterInteractive" />
      <Script src="/vendor/stack-card.min.js" strategy="afterInteractive" />
      <Script id="gsap-register" strategy="afterInteractive">
        {`
          if (window.gsap && window.ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);
          }
        `}
      </Script>
      <Script src="/assets/main.js" strategy="afterInteractive" />
    </>
  );
}
