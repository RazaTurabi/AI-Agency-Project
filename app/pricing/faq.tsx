"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What is the primary role of a business agency?",
    answer:
      "When collaborating with a business agency, you can generally expect an extensive array of services designed to not only support your current operations but also to foster growth and innovation.",
  },
  {
    question: "What kinds of services should I anticipate?",
    answer:
      "When working with a business agency, you can typically anticipate a wide range of services tailored to support and grow your business.",
  },
  {
    question: "How often should I consider updating my website?",
    answer:
      "Websites should be updated regularly to ensure performance, security, and relevance.",
  },
  {
    question: "How often is it recommended to refresh my website?",
    answer:
      "Regular website refresh cycles help maintain user engagement and modern standards.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0); // first item open by default

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "[data-ns-animate]",
      { opacity: 0, filter: "blur(12px)", y: 40 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "[data-ns-animate]",
          start: "top 85%",
        },
      }
    );
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index)); // close if open
  };

  return (
    <section
      aria-label="Frequently Asked Questions"
      className="py-[50px] md:py-[70px] lg:py-[85px] xl:pb-[100px] xl:pt-[200px]"
    >
      <div className="main-container">
        <div className="flex items-center flex-col gap-8 lg:gap-0 lg:flex-row justify-between">
          {/* FAQ TEXT */}
          <div className="space-y-14 text-center lg:text-left flex-1">
            {/* Heading */}
            <div className="space-y-5">
              <span data-ns-animate data-delay="0.2" className="badge badge-yellow-v2">
                FAQ
              </span>

              <h2
                data-ns-animate
                data-delay="0.3"
                id="faq-heading"
                className="lg:max-w-[439px] mx-auto lg:mx-0"
              >
                Common inquiries from clients
              </h2>
            </div>

            {/* Accordion */}
            <div
              data-ns-animate
              data-delay="0.4"
              className="accordion max-w-[576px] mx-auto lg:mx-0 w-full"
              role="region"
            >
              {faqData.map((item, index) => {
                const isOpen = index === activeIndex;
                return (
                  <div
                    key={index}
                    className={`accordion-item overflow-hidden ${
                      isOpen ? "active-accordion" : ""
                    }`}
                  >
                    <button
                      className="accordion-action flex items-center justify-between pt-6 pb-6 w-full"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="flex-1 xl:text-heading-6 text-tagline-1 text-secondary dark:text-accent text-left">
                        {item.question}
                      </span>

                      <span
                        className={`accordion-arrow ml-2.5 sm:ml-auto transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24">
                          <path
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="stroke-secondary dark:stroke-accent"
                          />
                        </svg>
                      </span>
                    </button>

                    <div
                      className={`accordion-content overflow-hidden transition-all duration-300 ${
                        isOpen ? "h-auto pt-6 pb-6" : "h-0"
                      }`}
                    >
                      <div className="border-t border-stroke-3 dark:border-stroke-7 pt-6 pb-6">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* IMAGE */}
          <figure
            data-ns-animate
            data-delay="0.3"
            className="w-full relative max-w-[684px] overflow-hidden flex-1"
          >
            <Image
              src="/images/ns-img-52.png"
              alt="Business agency services illustration"
              width={684}
              height={500}
              className="object-cover dark:hidden"
            />
            <Image
              src="/images/ns-img-dark-31.png"
              alt="Business agency services illustration"
              width={684}
              height={500}
              className="object-cover hidden dark:inline-block"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
