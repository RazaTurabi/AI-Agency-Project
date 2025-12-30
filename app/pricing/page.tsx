"use client";



import { useState , useEffect } from "react";

import Header from "../header";
import Footer from "../footer";


import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import FAQSection from "./faq";

const PricingPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [email, setEmail] = useState('');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const pricingPlans = [
    {
      name: 'Essential',
      price: 'Free',
      description: 'Free plan for all users',
      pages: 'Up to 5',
      features: [true, true, false, false, true, true, false, false, true, true, false, true, false, false, true, false],
      buttonClass: 'bg-white hover:bg-blue-600 hover:text-white text-gray-900',
      bgClass: 'bg-gray-50'
    },
    {
      name: 'Advanced',
      price: '$99',
      description: 'Plans for advanced users',
      pages: 'Up to 10',
      features: [true, true, true, false, true, false, false, false, true, false, true, false, false, true, false],
      buttonClass: 'bg-blue-600 hover:bg-white hover:text-gray-900 text-white',
      bgClass: 'bg-gray-900',
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Enterprise',
      description: 'Contact us for enterprise users',
      pages: 'Unlimited',
      features: [true, true, true, true, false, false, false, true, false, true, true, true, false, true, true, true],
      buttonClass: 'bg-white hover:bg-blue-600 hover:text-white text-gray-900',
      bgClass: 'bg-gray-50'
    }
  ];

  const featureLabels = [
    'Pages included',
    'Customized branding services',
    'Custom design',
    'Comprehensive branding solutions',
    'SEO optimization',
    'Branding support',
    'Tailored branding assistance',
    'Expert branding guidance',
    'Strategic branding support',
    'Professional branding help',
    'Innovative branding strategies',
    'Effective branding solutions',
    'Holistic branding support',
    'Dynamic branding options',
    'Insightful branding advice',
    'Value-driven branding support'
  ];

  const faqItems = [
    {
      question: 'What is the primary role of a business agency?',
      answer: 'When collaborating with a business agency, you can generally expect an extensive array of services designed to not only support your current operations but also to foster growth and innovation within your business. These services often include strategic planning, marketing solutions, financial consulting, and operational improvements.'
    },
    {
      question: 'What kinds of services should I anticipate?',
      answer: 'When working with a business agency, you can typically anticipate a wide range of services tailored to support and grow your business.'
    },
    {
      question: 'How often should I consider updating my website?',
      answer: 'When collaborating with a business agency, you can generally expect an extensive array of services designed to not only support your current operations but also to foster growth and innovation within your business.'
    },
    {
      question: 'How often is it recommended to refresh my website?',
      answer: 'When collaborating with a business agency, you can generally expect an extensive array of services designed to support your current operations and foster growth.'
    }
  ];

  const handleSubmit = () => {
    if (email) {
      console.log('Email submitted:', email);
      setEmail('');
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade + Blur animation
    gsap.fromTo(
      "[data-ns-animate]",
      { opacity: 0, filter: "blur(10px)", y: 50 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-ns-animate]",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <>
    <Header/>
    <main>
        <section
  data-ns-animate
  data-delay="0.1"
  className="pb-20 md:pb-[100px] lg:pb-[150px] xl:pb-[200px] xl:pt-[180px] md:pt-42 sm:pt-36 pt-32"
>
  <div
    className="max-w-[1440px] w-full mx-auto rounded-2xl space-y-[70px] bg-background-1 dark:bg-black py-[100px] px-5 md:px-6 lg:px-10 xl:px-16"
  >
    
    <div className="max-w-2xl mx-auto text-center space-y-3">
      <span data-ns-animate data-delay="0.2" className="badge badge-cyan-v2">Our pricing</span>
      <h2 data-ns-animate data-delay="0.3">Select the pricing plan that best suits your needs.</h2>
    </div>
    <div className="grid grid-cols-12 gap-y-8">
{/* coloumn 1 */}

    <div
      data-ns-animate=""
      data-delay="0.4"
      className="
        col-span-12 md:col-span-6 xl:col-span-3
        opacity-100 filter blur-0 transform
        translate-x-0 translate-y-0 scale-100 rotate-0
      "
    >
      <div>
        <div className="h-[201px] w-[290px] hidden md:block"></div>

        <div className="space-y-[10px]">
          <h3 className="text-heading-6">What’s included</h3>

          <ul>
            <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
              <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                Pages included
              </p>
            </li>

            <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
              <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                Customized branding services
              </p>
            </li>

            <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
              <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                Custom design
              </p>
            </li>

            <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
              <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                Comprehensive branding solutions
              </p>
            </li>

            <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
              <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                SEO optimization
              </p>
            </li>

            <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
              <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                Branding support
              </p>
            </li>

            <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
              <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                Tailored branding assistance
              </p>
            </li>

            <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
              <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                Expert branding guidance
              </p>
            </li>

            <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
              <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                Strategic branding support
              </p>
            </li>

            <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
              <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                Professional branding help
              </p>
            </li>

            <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
              <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                Innovative branding strategies
              </p>
            </li>

            <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
              <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                Effective branding solutions
              </p>
            </li>

            <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
              <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                Holistic branding support
              </p>
            </li>

            <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
              <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                Dynamic branding options
              </p>
            </li>

            <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
              <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                Insightful branding advice
              </p>
            </li>

            <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
              <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                Value-driven branding support
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
{/* coloumn 2 */}
<div 
  data-ns-animate=""
  data-delay="0.5"
  className="col-span-12 md:col-span-6 xl:col-span-3 
         opacity-100 filter blur-0 transform 
         translate-x-0 translate-y-0 scale-100 rotate-0"
>
  <div>
    <div className="px-4">
      <div className="rounded-[20px] py-8 px-6 bg-background-3 dark:bg-background-8 space-y-8">
        <div>
          <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-medium mb-3">
            Essential
          </p>
          <h3 className="text-heading-5 font-normal text-secondary dark:text-accent/60">Free</h3>
          <p className="text-secondary/60 dark:text-accent/60">Free plan for all users</p>
        </div>

        <a 
          href="./ai-agency-contact.html" 
          className="btn btn-white hover:btn-primary dark:btn-white-dark btn-md w-full before:content-none first-letter:uppercase"
        >
          Get started
        </a>
      </div>
    </div>

    <div className="rounded-[20px] flex flex-col space-y-8">
      <ul>
            {/* FIRST STATIC TITLE ROW */}
            <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
              <p className="font-medium text-secondary/60 dark:text-accent/60">
                Unlimited
              </p>
            </li>

            {/* REPEATING ICON ROWS */}
            {[
              "secondary",
              "secondary",
              "secondary",
              "secondary",
              "secondary/20",
              "secondary",
              "secondary",
              "secondary",
              "secondary/20",
              "secondary",
              "secondary",
              "secondary",
              "secondary",
              "secondary/20",
              "secondary",
              "secondary",
            ].map((fill, index) => (
              <li
                key={index}
                className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="18"
                    height="18"
                    rx="9"
                    className={`fill-${fill} dark:fill-accent`}
                  ></rect>

                  <path
                    d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                    className="fill-white dark:fill-black"
                  ></path>
                </svg>
              </li>
            ))}
          </ul>

      <div className="btn btn-primary hover:btn-white-dark dark:hover:btn-accent btn-md w-fit mx-auto">
        <a href="./ai-agency-contact.html">
          <span>Get started </span>
        </a>
      </div>
    </div>
  </div>
</div>


<div
      data-ns-animate=""
      data-delay="0.6"
      className="col-span-12 md:col-span-6 xl:col-span-3 opacity-100 blur-0 translate-y-0 rotate-0 scale-100"
    >
      <div>
        {/* TOP CARD */}
        <div className="px-4 relative z-10">
          <div className="rounded-[20px] relative py-8 px-6 bg-secondary overflow-hidden">

            {/* Background Image */}
            <div className="absolute z-20 h-full w-full -top-28 -right-20">
              <img
                src="/images/ns-img-496.png"
                alt="pricing bg"
                width={300}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="relative z-30 space-y-8">
              <div>
                <p className="text-tagline-1 text-accent/60 font-medium mb-3">
                  Advanced
                </p>
                <h3 className="text-heading-5 font-normal text-accent">
                  $99
                </h3>
                <p className="text-accent/60">Plans for advanced users</p>
              </div>

              <a
                href="/ai-agency-contact"
                className="btn btn-primary hover:btn-white dark:hover:btn-accent btn-md w-full before:content-none first-letter:uppercase"
              >
                Get started
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM LIST */}
        <div className="rounded-[20px] flex flex-col space-y-8">
          <ul>
            {/* FIRST ITEM */}
            <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
              <p className="font-medium text-secondary/60 dark:text-accent/60">
                Up to 10
              </p>
            </li>

            {/* REUSABLE CHECK ICON */}
            {Array.from({ length: 16 }).map((_, index) => {
              const dim = index % 3 === 1; // lighten version
              return (
                <li
                  key={index}
                  className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <rect
                      width="18"
                      height="18"
                      rx="9"
                      className={
                        dim
                          ? "fill-secondary/20 dark:fill-accent/20"
                          : "fill-secondary dark:fill-accent"
                      }
                    ></rect>

                    <path
                      d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                      className="fill-white dark:fill-black"
                    ></path>
                  </svg>
                </li>
              );
            })}
          </ul>

          {/* BUTTON */}
          <div className="btn btn-primary hover:btn-white-dark dark:hover:btn-accent text-center btn-md w-fit mx-auto">
            <a href="/ai-agency-contact">
              <span>Get started</span>
            </a>
          </div>
        </div>
      </div>
    </div>
<div
      data-ns-animate=""
      data-delay="0.7"
      className="col-span-12 md:col-span-6 xl:col-span-3 opacity-100 blur-0 translate-y-0 transform-none rotate-0 scale-100"
    >
      <div>
        <div className="px-4">
          <div className="rounded-[20px] py-8 px-6 bg-background-3 dark:bg-background-8 space-y-8">
            <div>
              <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-medium mb-3">
                Enterprise
              </p>
              <h3 className="text-heading-5 font-normal text-secondary dark:text-accent/60">
                Enterprise
              </h3>
              <p className="text-secondary/60 dark:text-accent/60">
                Contact us for enterprise users
              </p>
            </div>

            <a
              href="./ai-agency-contact.html"
              className="btn dark:btn-white-dark hover:btn-primary btn-white btn-md w-full before:content-none first-letter:uppercase"
            >
              Get started
            </a>
          </div>
        </div>

        <div className="rounded-[20px] flex flex-col space-y-8">
          <ul>
            {/* FIRST STATIC TITLE ROW */}
            <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
              <p className="font-medium text-secondary/60 dark:text-accent/60">
                Unlimited
              </p>
            </li>

            {/* REPEATING ICON ROWS */}
            {[
              "secondary",
              "secondary",
              "secondary",
              "secondary",
              "secondary/20",
              "secondary",
              "secondary",
              "secondary",
              "secondary/20",
              "secondary",
              "secondary",
              "secondary",
              "secondary",
              "secondary/20",
              "secondary",
              "secondary",
            ].map((fill, index) => (
              <li
                key={index}
                className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="18"
                    height="18"
                    rx="9"
                    className={`fill-${fill} dark:fill-accent`}
                  ></rect>

                  <path
                    d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                    className="fill-white dark:fill-black"
                  ></path>
                </svg>
              </li>
            ))}
          </ul>

          <div className="btn btn-primary hover:btn-white-dark dark:hover:btn-accent btn-md w-fit mx-auto">
            <a href="./ai-agency-contact.html">
              <span>Get started</span>
            </a>
          </div>
        </div>
      </div>
    </div>
</div>
</div>
</section>
   <section>
      <div
        data-ns-animate=""
        className="
          main-container text-center rounded-4xl py-[100px] 
          bg-background-3 dark:bg-background-5 
          overflow-hidden relative
        "
      >
        {/* Background Shape */}
        <div className="absolute -top-[164%] -left-[35%] rotate-[21deg] w-full h-full -z-10 pointer-events-none select-none">
          <img
            src="/images/ns-img-498.png"
            alt="Decorative background"
            width={1200}
            height={1200}
            className="scale-[60%]"
          />
        </div>

        {/* Testimonial Section */}
        <article className="text-center space-y-4 pb-10">
          {/* Avatars */}
          <div className="flex justify-center -space-x-2.5 cursor-pointer">
            <img
              src="/images/ns-avatar-1.png"
              alt="Customer avatar 1"
              width={38}
              height={38}
              className="inline-block size-[38px] rounded-full ring-2 ring-accent dark:ring-black bg-ns-yellow"
            />
            <img
              src="/images/ns-avatar-2.png"
              alt="Customer avatar 2"
              width={38}
              height={38}
              className="inline-block size-[38px] rounded-full ring-2 ring-accent dark:ring-black bg-ns-red"
            />
            <img
              src="/images/ns-avatar-3.png"
              alt="Customer avatar 3"
              width={38}
              height={38}
              className="inline-block size-[38px] rounded-full ring-2 ring-accent dark:ring-black bg-ns-green"
            />
            <div className="inline-flex items-center justify-center size-[38px] bg-ns-cyan rounded-full ring-2 ring-accent dark:ring-black text-secondary/80 dark:text-accent/80 text-tagline-3 font-medium">
              99+
            </div>
          </div>

          {/* Metrics */}
          <div>
            <p className="text-tagline-2 text-secondary dark:text-accent font-medium">
              Trusted by 20k+
            </p>
            <p className="text-tagline-3">Customers Across the Globe</p>
          </div>
        </article>

        {/* Logos Marquee */}
        <div className="max-w-[1130px] mx-auto relative">
          <div className="absolute left-0 top-5 h-full w-[7%] bg-gradient-to-r from-background-3 to-transparent dark:from-background-5 z-40"></div>
          <div className="absolute right-0 top-5 h-full w-[7%] bg-gradient-to-l from-background-3 to-transparent dark:from-background-5 z-40"></div>

          {/* Marquee Container */}
          <div
            className="logos-marquee-container horizontal-marquee smooth"
            data-animate="true"
            style={{ ["--_speed" as any]: "50000ms", ["--_direction" as any]: "forwards" }}
          >
            {/* DUPLICATED CONTENT FOR LOOP EFFECT */}
            {[1, 2, 3].map((loop) => (
              <div className="horizontal-marquee-inner" key={loop}>
                {/* Full logo row */}
                <div className="flex items-center justify-center border-t border-secondary/10 dark:border-accent/10 pt-10 gap-8">
                  {[
                    "client-logo-6",
                    "client-logo-7",
                    "client-logo-8",
                    "client-logo-9",
                    "client-logo-10",
                  ].map((logo, i) => (
                    <figure key={i} className="min-w-[140px] md:min-w-[201px] ml-8">
                      <img
                        src={`/images/icons/${logo}.svg`}
                        alt={`Logo ${i + 1}`}
                        width={120}
                        height={40}
                        className="inline-block dark:hidden"
                      />
                      <img
                        src={`/images/icons/${logo}-dark.svg`}
                        alt={`Logo ${i + 1}`}
                        width={120}
                        height={40}
                        className="hidden dark:block"
                      />
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <FAQSection/>
        <section
      aria-label="Use Case Overview"
      className="py-[50px] md:py-20 lg:py-28 dark:bg-background-7 bg-accent"
    >
      <div className="main-container">
        <div className="flex items-center flex-col lg:flex-row justify-between">
          {/* Text */}
          <div className="xl:max-w-[650px] lg:max-w-[476px] max-[400px]:max-w-[300px] w-full space-y-5 text-center lg:text-left">
            <span
              data-ns-animate
              data-delay="0.3"
              className="badge badge-green badge-cyan"
            >
              Get started
            </span>
            <div className="space-y-3">
              <h2
                data-ns-animate
                data-delay="0.4"
                className="text-secondary dark:text-accent text-heading-5 sm:text-heading-4 lg:text-heading-2"
              >
                Build a complete website using the assistance{" "}
                <span className="text-primary-500 hidden">{/* dynamic span */}</span>
              </h2>
              <p data-ns-animate data-delay="0.5">
                Start your free trial today and see your ideas come to life easily
                and creatively.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:basis-[466px] space-y-6 md:ml-0 xl:ml-[100px] pt-[40px] lg:pt-[67px] w-full sm:w-[80%] md:w-[60%]">
            <form
              data-ns-animate
              data-delay="0.6"
              action="#"
              method="post"
              className="flex items-center flex-col gap-5 sm:flex-row justify-start lg:gap-3"
            >
              <input
                type="email"
                name="email"
                id="userEmail-cta-v1"
                placeholder="Enter your email"
                required
                className="px-[18px] shadow-1 h-12 py-3 placeholder:text-secondary/50 rounded-full border border-stroke-1 lg:max-w-[340px] md:w-[71%] w-full max-[376px]:w-full dark:border-stroke-7 dark:placeholder:text-accent/60 focus:outline-none focus:border-primary-600 dark:focus:border-primary-400 dark:text-accent placeholder:font-normal font-normal"
              />
              <button
                type="submit"
                className="btn btn-md btn-primary h-12 w-full sm:w-[28%] lg:w-auto btn-primary hover:btn-secondary dark:hover:btn-accent"
              >
                <span>Get started</span>
              </button>
            </form>

            <ul className="flex flex-row items-center justify-center gap-x-4 sm:gap-x-6 sm:gap-y-0 gap-y-5 lg:justify-start">
              <li
                data-ns-animate
                data-delay="0.7"
                className="flex items-center justify-center gap-2"
              >
                <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    aria-hidden="true"
                    className="fill-white dark:fill-secondary"
                  >
                    <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" />
                  </svg>
                </span>
                <p className="text-tagline-3 sm:text-tagline-2">No credit card required</p>
              </li>
              <li
                data-ns-animate
                data-delay="0.8"
                className="flex items-center justify-center gap-2"
              >
                <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    aria-hidden="true"
                    className="fill-white dark:fill-secondary"
                  >
                    <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" />
                  </svg>
                </span>
                <p className="text-tagline-3 sm:text-tagline-2">14-Day free trial</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    </main>
    <Footer/>
    </>
  );
};

export default PricingPage;