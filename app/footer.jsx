
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="  footer bg-secondary dark:bg-background-8 relative z-0 border-t border-t-[#303032] dark:border-t-0 max-sm:z-[11] overflow-hidden">  <figure
  data-ns-animate
  data-delay="0.3"
  data-direction="up"
  data-offset="50"
  className="absolute size-[1635px] -top-[1320px] left-1/2 -translate-x-1/2 -z-1 select-none pointer-events-none"
>
  <Image
    src="/images/ns-img-532.png"
    alt="footer-four-gradient"
    fill
    className="size-full object-cover"
  />
</figure>
   

      <div className="container mx-auto px-8 py-4">
        <div data-ns-animate data-delay="0.1" className="col-span-12 xl:col-span-4">
            <div className="max-w-[306px]">
              <figure>
                <Image
                  src="/images/shared/light-logo.svg"
                  alt="NextSass Logo"
                  width={200}
                  height={60}
                  className="dark:invert"
                />
              </figure>

              <p className="text-secondary/60 dark:text-accent/60 font-normal text-tagline-1 mt-4 mb-7">
                Turpis tortor nunc sed amet et faucibus vitae morbi congue sed id mauris.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {[
                  { name: "Facebook", icon: "facebook" },
                  { name: "Instagram", icon: "instagram" },
                  { name: "Youtube", icon: "youtube" },
                  { name: "LinkedIn", icon: "linkedin" },
                  { name: "Dribbble", icon: "dribbble" },
                  { name: "Behance", icon: "behance" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Link 
                      href="#"
                      className="opacity-60 hover:opacity-100 transition-opacity duration-200"
                    >
                      <span className="sr-only">{item.name}</span>
                      <Image
                        src={`/images/icons/${item.icon}.svg`}
                        alt={item.name}
                        width={24}
                        height={24}
                        className="size-6"
                      />
                    </Link>

                    {/* divider except last */}
                    {idx !== 5 && <div className="h-6 w-px bg-stroke-1/20 dark:bg-stroke-6/20"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        <div className="grid grid-cols-12 xl:pt-[90px] gap-x-0 gap-y-16 pt-16 pb-12 justify-between">

          {/* Left Section */}
          

          {/* Right Section */}
          <div className="col-span-12 xl:col-span-8 grid grid-cols-12 gap-x-14 gap-y-8 ">

            {/* Company */}
            <div className="col-span-12 md:col-span-4 ">
              <div data-ns-animate data-delay="0.2" className="space-y-8">
                <p className="sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent">
                  Company
                </p>
                <ul className="space-y-5">
                  {[
                    ["About Us", "/about"],
                    ["Career", "/career"],
                    ["Why Choose Us", "/why-choose-us"],
                    ["Our Manifesto", "/our-manifesto"],
                    ["Contact Us", "/contact"],
                  ].map(([label, link]) => (
                    <li key={label}>
                      <Link href={link} className="footer-link text-secondary/60 dark:text-accent/60 hover:text-secondary dark:hover:text-accent transition-colors duration-200">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Support */}
            <div className="col-span-12 md:col-span-4">
              <div data-ns-animate data-delay="0.3" className="space-y-8">
                <p className="sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent">
                  Support
                </p>
                <ul className="space-y-5">
                  {[
                    ["FAQ", "/faq"],
                    ["Documentation", "/documentation"],
                    ["Tutorial", "/tutorial"],
                    ["Support", "/support"],
                  ].map(([label, link]) => (
                    <li key={label}>
                      <Link href={link} className="footer-link text-secondary/60 dark:text-accent/60 hover:text-secondary dark:hover:text-accent transition-colors duration-200">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Legal */}
            <div className="col-span-12 md:col-span-4">
              <div data-ns-animate data-delay="0.4" className="space-y-8">
                <p className="sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent">
                  Legal Policies
                </p>
                <ul className="space-y-5">
                  {[
                    ["Terms & Conditions", "/terms-conditions"],
                    ["Privacy Policy", "/privacy-policy"],
                    ["Refund Policy", "/refund-policy"],
                    ["GDPR Compliance", "/gdpr"],
                    ["Affiliate Policy", "/affiliate-policy"],
                  ].map(([label, link]) => (
                    <li key={label}>
                      <Link href={link} className="footer-link text-secondary/60 dark:text-accent/60 hover:text-secondary dark:hover:text-accent transition-colors duration-200">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-[26px] pb-[42px] text-center relative">
          <div className="footer-divider absolute top-0 left-0 right-0 w-full h-px bg-stroke-2 dark:bg-stroke-6"></div>

          <p
            data-ns-animate
            data-delay="0.7"
            data-offset="10"
            data-start="top 105%"
            className="text-tagline-1 font-normal text-secondary/60 dark:text-accent/60"
          >
            Copyright © Pixels71. NextSaaS – smart application for modern business
          </p>
        </div>
      </div>
    </footer>
  );
}