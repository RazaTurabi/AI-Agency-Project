// app/page.tsx
// ============================================
"use client";
import { useEffect } from "react";
import Image from "next/image";
import Footer from "../footer";
import "../globals.css";
import Header from "../header";
import Link from "next/link";

import "leaflet/dist/leaflet.css";

import dynamic from "next/dynamic";

export default function FeatureSection() {
  const Map = dynamic(() => import("../Map"), { ssr: false });

  return (
    <>
      <Header />
      <main>
        {/* feature section */}
        <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] overflow-hidden xl:pt-[180px] md:pt-42 sm:pt-36 pt-32">
          <div className="main-container space-y-14 md:space-y-[70px]">
            {/* Header */}
            <div className="space-y-3 text-center">
              <span
                data-ns-animate
                data-delay="0.2"
                className="badge badge-cyan mb-5 inline-block"
              >
                Passion meets purpose
              </span>

              <h2
                data-ns-animate
                data-delay="0.3"
                className="xl:text-heading-1 lg:text-heading-2 md:text-heading-3 text-heading-4 font-medium lg:max-w-[980px] mx-auto"
              >
                Engineered for advancement. Crafted for potential.
              </h2>

              <p
                data-ns-animate
                data-delay="0.4"
                className="lg:max-w-[904px] mx-auto text-secondary/60 dark:text-accent/60"
              >
                At NextSaaS, we create tools that simplify your work, scale with
                your growth, and bring clarity to complexity. From streamlining
                operations to unlocking insights, our platform is built to
                support your entire journey—from startup to enterprise.
              </p>
            </div>

            {/* Features Grid */}
            <div className="flex flex-col-reverse gap-y-7 gap-x-4 md:flex-row justify-around items-start md:items-center lg:items-end 2xl:justify-evenly">
              {/* Left Images */}
              <article
                aria-label="Feature supporting images"
                className="space-y-[25px] flex flex-row max-md:gap-2 max-md:justify-between md:flex-col items-center md:hidden lg:flex lg:flex-col"
              >
                <figure
                  data-ns-animate
                  data-delay="0.4"
                  data-duration="0.8"
                  data-direction="left"
                  className="max-w-[254px] rounded-2xl shadow-5 overflow-hidden max-h-[250px]"
                >
                  <Image
                    src="/images/ns-img-362.svg"
                    alt="Sales performance visualization"
                    className="size-full shadow-5 object-cover block dark:hidden"
                    width={254}
                    height={250}
                    priority
                  />
                  <Image
                    src="/images/ns-img-dark-209.svg"
                    alt="Sales performance visualization"
                    className="size-full shadow-5 object-cover hidden dark:block"
                    width={254}
                    height={250}
                    priority
                  />
                </figure>

                <figure
                  data-ns-animate
                  data-delay="0.5"
                  data-duration="0.8"
                  className="max-w-[143px] rounded-2xl shadow-2 overflow-hidden max-h-[110px]"
                >
                  <Image
                    src="/images/ns-img-363.png"
                    alt="Sales Asset"
                    className="size-full object-cover block dark:hidden"
                    width={143}
                    height={110}
                  />
                  <Image
                    src="/images/ns-img-364.png"
                    alt="Sales Asset"
                    className="size-full object-cover hidden dark:block"
                    width={143}
                    height={110}
                  />
                </figure>
              </article>

              {/* Center Main Image */}
              <figure
                data-ns-animate
                data-delay="0.5"
                data-direction="up"
                aria-label="Main feature visualization"
                className="max-w-[630px] max-h-[564px] w-full"
              >
                <Image
                  src="/images/ns-img-365.png"
                  alt="Main platform feature visualization"
                  className="size-full object-cover"
                  width={630}
                  height={564}
                  priority
                />
              </figure>

              {/* Right Column */}
              <article className="space-y-[37px] max-md:w-full">
                <figure
                  data-ns-animate
                  data-delay="0.5"
                  data-duration="0.8"
                  className="w-[120px] h-[120px]"
                >
                  <Image
                    src="/images/ns-img-66.svg"
                    alt="Achievement badge"
                    className="size-full object-cover block dark:hidden"
                    width={120}
                    height={120}
                  />
                </figure>

                {/* Investment card */}
                <div
                  data-ns-animate
                  data-delay="0.4"
                  data-direction="right"
                  className="flex items-start flex-col bg-secondary dark:bg-accent w-full md:w-[148px] h-auto md:h-[91px] gap-1 p-4 rounded-2xl"
                >
                  <h3 className="text-tagline-2 text-accent dark:text-secondary font-normal">
                    Investment target
                  </h3>
                  <h3 className="text-heading-5 flex items-center gap-0.5 text-ns-green dark:text-secondary font-normal">
                    76%
                  </h3>
                </div>

                {/* Balance Card */}
                <div
                  data-ns-animate
                  data-delay="0.6"
                  data-direction="right"
                  className="bg-white dark:bg-black rounded-2xl p-6 max-w-full md:max-w-[288px] min-w-full md:min-w-[288px] border border-stroke-2 dark:border-stroke-6"
                >
                  <div className="text-left">
                    <span className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">
                      Balance
                    </span>
                    <h3 className="text-[40px] flex items-center font-normal leading-[1.2] mt-2 mb-[30px] text-secondary dark:text-accent">
                      $45,324
                    </h3>
                  </div>

                  <div className="flex gap-3">
                    {/* Income */}
                    <div className="bg-background-4 dark:bg-background-9 rounded-xl p-4 space-y-2 flex-1 text-left">
                      <div className="flex items-center gap-2 text-tagline-2 text-secondary dark:text-accent">
                        <span className="bg-ns-red flex items-center justify-center rounded-full size-[18px] p-1">
                          <svg
                            width="8"
                            height="9"
                            viewBox="0 0 8 9"
                            fill="none"
                          >
                            <path
                              d="M7.8842 4.49692C7.81538 4.42054 7.72089 4.37564 7.62101 4.37185C7.51393 4.36976 7.41095 4.41514 7.33717 4.49692L4.39555 7.59633L4.39555 0.407818C4.39277 0.18381 4.2211 0.00292873 4.0085 0C3.79589 0.00292873 3.62422 0.18381 3.62144 0.407818L3.62144 7.59633L0.679823 4.49692C0.581182 4.39007 0.435935 4.34679 0.298794 4.38337C0.161654 4.41996 0.0534544 4.53085 0.0149541 4.67428C-0.0235462 4.81771 0.0135021 4.97189 0.112143 5.07873L3.72465 8.88503C3.87798 9.03832 4.11836 9.03832 4.27169 8.88503L7.8842 5.07873C7.95828 5.00206 8 4.89724 8 4.78783C8 4.67841 7.95828 4.57359 7.8842 4.49692Z"
                              fill="#1A1A1C"
                            />
                          </svg>
                        </span>
                        Income
                      </div>

                      <div className="text-lg font-medium text-secondary dark:text-accent">
                        $48,000
                      </div>
                    </div>

                    {/* Expenses */}
                    <div className="bg-background-4 dark:bg-background-9 rounded-xl p-4 space-y-2 flex-1 text-left">
                      <div className="text-tagline-2 text-secondary/60 dark:text-accent/60">
                        Expenses
                      </div>
                      <div className="text-lg font-medium text-secondary dark:text-accent">
                        $12,676
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>


        {/* mission section */}
        <section className="pb-20 pt-14 md:pb-28 md:pt-16 lg:pb-44 lg:pt-[88px] xl:pb-[200px] xl:pt-[100px]">
          <div className="main-container">
            <div className="grid grid-cols-12 gap-y-14 xl:gap-x-28 items-center">
              {/* LEFT SIDE */}
              <div className="col-span-12 lg:col-span-6 mx-4 xl:mx-0">
                <div className="space-y-3">
                  <span
                    data-ns-animate=""
                    data-delay="0.1"
                    className="badge badge-cyan mb-5"
                  >
                    Our Mission
                  </span>

                  <h2 data-ns-animate="" data-delay="0.2">
                    Empowering teams to collaborate and thrive with intelligent
                  </h2>

                  <p data-ns-animate="" data-delay="0.4">
                    In today’s fast-paced, digitally connected world, successful
                    teams rely on more than just talent—they thrive on
                    intelligent collaboration.
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="col-span-12 lg:col-span-6 relative mx-4 xl:mx-0">
                {/* Floating Card Image */}
                <figure
                  data-ns-animate=""
                  data-delay="0.5"
                  data-spring=""
                  data-duration="2.5"
                  className="absolute max-w-[360px] z-20 overflow-hidden left-1/2 -translate-x-1/2 top-[78%] rounded-[12px]"
                >
                  <Image
                    src="/images/ns-img-366.png"
                    alt="business growth card"
                    width={360}
                    height={360}
                    className="h-full w-full block dark:hidden"
                  />
                  <Image
                    src="/images/ns-img-dark-210.png"
                    alt="business growth card"
                    width={360}
                    height={360}
                    className="h-full w-full hidden dark:block"
                  />
                </figure>

                {/* Glass Card */}
                <div
                  data-ns-animate=""
                  data-delay="0.6"
                  className="p-[26px] backdrop-blur-[20px] bg-white/60 dark:bg-background-8 shadow-2 min-h-[380px] rounded-[20px] h-full overflow-hidden relative z-10 flex items-center justify-center"
                >
                  {/* Background Gradient */}
                  <figure
                    data-ns-animate=""
                    data-delay="0.7"
                    className="absolute select-none pointer-events-none bottom-[-54%] md:bottom-[-112%] lg:bottom-[-80%] xl:bottom-[-90%] right-[-33%] md:right-[-30%] xl:right-[-32%] max-w-[500px] md:max-w-[700px] w-full -z-10 rotate-180"
                  >
                    <Image
                      src="/images/ns-img-496.png"
                      alt="hero author bg"
                      width={700}
                      height={700}
                      className="size-full object-cover"
                    />
                  </figure>

                  {/* Content */}
                  <div className="text-center -mt-20">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="flex -space-x-3.5 group">
                        {/* AVATAR 1 */}
                        <figure className="inline-block size-11 rounded-full ring-3 ring-white bg-linear-[156deg,_#FFF_32.92%,_#A585FF_91%] overflow-hidden relative">
                          <Image
                            src="/images/ns-avatar-1.png"
                            alt="avatar"
                            width={40}
                            height={40}
                          />
                          <Image
                            src="/images/ns-author-avatar-bg.png"
                            alt="avatar"
                            width={40}
                            height={40}
                            className="absolute top-0 left-0 -z-10"
                          />
                        </figure>

                        {/* AVATAR 2 */}
                        <figure className="inline-block size-11 rounded-full ring-3 ring-white bg-linear-[156deg,_#FFF_32.92%,_#A585FF_91%] overflow-hidden relative">
                          <Image
                            src="/images/ns-avatar-2.png"
                            alt="avatar"
                            width={40}
                            height={40}
                          />
                          <Image
                            src="/images/ns-author-avatar-bg.png"
                            alt="avatar"
                            width={40}
                            height={40}
                            className="absolute top-0 left-0 -z-10"
                          />
                        </figure>

                        {/* AVATAR 3 */}
                        <figure className="inline-block size-11 rounded-full ring-3 ring-white bg-linear-[156deg,_#FFF_32.92%,_#A585FF_91%] overflow-hidden relative">
                          <Image
                            src="/images/ns-avatar-3.png"
                            alt="avatar"
                            width={40}
                            height={40}
                          />
                          <Image
                            src="/images/ns-author-avatar-bg.png"
                            alt="avatar"
                            width={40}
                            height={40}
                            className="absolute top-0 left-0 -z-10"
                          />
                        </figure>

                        {/* ICON CIRCLE */}
                        <div className="inline-flex overflow-hidden items-center justify-center size-12 rounded-full ring-3 ring-white text-secondary/80 bg-ns-yellow text-tagline-3 font-medium relative z-10">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 group-hover:-translate-y-12 group-hover:translate-x-8 transition-all duration-500"
                          >
                            <path
                              d="M6 18L18 6"
                              stroke="#1A1A1C"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.25 6H18V15.75"
                              stroke="#1A1A1C"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="absolute translate-y-6 -translate-x-12 transition-all duration-500 group-hover:-translate-x-[1px] group-hover:-translate-y-[2%]"
                          >
                            <path
                              d="M6 18L18 6"
                              stroke="#1A1A1C"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.25 6H18V15.75"
                              stroke="#1A1A1C"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <h6 className="mb-1 text-secondary dark:text-accent text-xl font-normal">
                      20k+ global investment
                    </h6>

                    <p className="text-secondary/60 dark:text-accent/60">
                      Get Global Investment policy in the year
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* vision section */}
        <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
          <div className="main-container space-y-16 md:space-y-[100px]">
            {/* Heading */}
            <div className="space-y-3 text-center">
              <span
                data-ns-animate=""
                data-delay="0.2"
                className="badge badge-cyan mb-5"
              >
                Our vision
              </span>

              <h2 data-ns-animate="" data-delay="0.3">
                Motivated by Intent, steered by insight
              </h2>

              <p
                data-ns-animate=""
                data-delay="0.4"
                className="max-w-[806px] mx-auto"
              >
                Every great journey begins with a clear purpose—and it’s that
                sense of intent that drives everything we do. But purpose alone
                isn’t enough. To truly make meaningful progress, we combine our
                motivation with sharp
              </p>
            </div>

            {/* Images Section */}
            <div className="grid grid-cols-12 xl:gap-x-24 gap-y-14">
              {/* Main Image */}
              <div className="col-span-12 xl:col-span-8">
                <figure
                  data-ns-animate=""
                  data-delay="0.5"
                  className="lg:max-w-[780px] lg:min-h-[424px] rounded-4xl overflow-hidden mx-auto"
                >
                  <Image
                    src="/images/ns-img-124.png"
                    alt="hero image"
                    className="w-full block dark:hidden"
                    width={780}
                    height={424}
                  />
                  <Image
                    src="/images/ns-img-dark-93.png"
                    alt="hero image"
                    className="w-full hidden dark:block"
                    width={780}
                    height={424}
                  />
                </figure>
              </div>

              {/* Small Side Images */}
              <div className="col-span-12 xl:col-span-4">
                <div className="relative w-full h-full max-lg:flex max-[400px]:flex-wrap gap-4 max-[400px]:justify-start max-lg:justify-between">
                  <figure
                    data-ns-animate=""
                    data-delay="0.6"
                    className="size-[140px] rounded-2xl lg:absolute lg:top-0 lg:left-11 overflow-hidden"
                  >
                    <Image
                      src="/images/ns-img-359.png"
                      alt="Vision Avatar"
                      width={140}
                      height={140}
                      className="w-full h-full object-cover"
                    />
                  </figure>

                  <figure
                    data-ns-animate=""
                    data-delay="0.7"
                    className="size-[140px] rounded-2xl lg:absolute lg:top-[41%] lg:right-[14%] overflow-hidden"
                  >
                    <Image
                      src="/images/ns-img-360.png"
                      alt="Vision Avatar"
                      width={140}
                      height={140}
                      className="w-full h-full object-cover"
                    />
                  </figure>

                  <figure
                    data-ns-animate=""
                    data-delay="0.8"
                    className="size-[140px] rounded-2xl lg:absolute lg:-bottom-22 xl:bottom-0 lg:left-96 xl:left-0 overflow-hidden"
                  >
                    <Image
                      src="/images/ns-img-361.png"
                      alt="Vision Avatar"
                      width={140}
                      height={140}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* innovation section */}

        <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
          <div className="main-container" data-ns-animate="" data-delay="0.2">
            <div className="relative z-10">
              {/* Background Image */}
              <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 rounded-[20px] overflow-hidden">
                <Image
                  src="/images/ns-img-14.png"
                  alt="about bg"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>

              {/* Content */}
              <div className="py-14 px-6 md:px-11 grid max-sm:grid-cols-1 grid-cols-2 max-sm:gap-10 gap-5">
                {/* Left Content */}
                <div className="max-w-[500px]">
                  <h2 className="text-accent text-heading-5 mb-8">
                    At our core, we believe in integrity, innovation, and
                    collaboration.
                  </h2>
                  <div>
                    <Link
                      href="/ai-agency-services"
                      className="btn btn-md btn-white hover:btn-primary dark:btn-transparent"
                    >
                      <span>Get started</span>
                    </Link>
                  </div>
                </div>

                {/* Right Content (List) */}
                <div>
                  <ul className="space-y-4">
                    {[
                      "Embracing clarity means prioritizing simplicity and focus",
                      "Innovation driven by customer insights leads to solutions",
                      "Implementing security measures as a foundational principle",
                      "Building transparency and trust is essential for fostering",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0"
                        >
                          <path
                            d="M0 10.0002C0 4.47729 4.47717 0 10 0C15.5229 0 20.0001 4.47729 20.0001 10.0002C20.0001 15.523 15.5229 20.0003 10 20.0003C4.47717 20.0003 0 15.523 0 10.0002Z"
                            fill="#FCFCFC"
                            fillOpacity="0.17"
                          />
                          <path
                            d="M14.125 7.375L8.875 12.6248L6.25 10"
                            stroke=""
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="stroke-accent"
                          />
                        </svg>
                        <span className="text-accent">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* team section */}

        <section className="xl:py-[160px] lg:py-[90px] md:py-20 py-16">
          <div className="main-container md:space-y-[70px] space-y-10">
            <div className="text-center space-y-5">
              <span
                data-ns-animate=""
                data-delay="0.1"
                className="badge badge-cyan opacity-100 filter blur-0 transform"
              >
                Our team
              </span>

              <div className="max-w-[620px] mx-auto space-y-3">
                <h2
                  data-ns-animate=""
                  data-delay="0.2"
                  className="opacity-100 filter blur-0 transform"
                >
                  Our innovative, dynamic and talented team
                </h2>
                <p
                  data-ns-animate=""
                  data-delay="0.3"
                  className="opacity-100 filter blur-0 transform"
                >
                  Our innovative, dynamic, and talented team is the driving
                  force behind our success. Each member brings a unique blend of
                  expertise
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 md:gap-8 sm:gap-5 gap-y-4">
              <div
                data-ns-animate=""
                data-delay="0.4"
                className="col-span-12 sm:col-span-6 lg:col-span-4 opacity-100 filter blur-0 transform"
              >
                <div className="relative z-10 group bg-white dark:bg-background-9 rounded-[20px] overflow-hidden p-3">
                  {/* Team Image */}
                  <figure className="lg:max-w-[408px] mx-auto overflow-hidden">
                    <Image
                      src="/images/ns-avatar-1.png"
                      alt="team member"
                      className="w-full h-full object-cover bg-background-1 rounded-2xl dark:bg-background-5"
                      width={408}
                      height={408}
                    />
                  </figure>

                  {/* Info Card */}
                  <div
                    className="max-w-[384px] w-[calc(100%-44px)] shadow-1 rounded-xl absolute z-20 bottom-7 sm:bottom-5 left-1/2 -translate-x-1/2 mx-auto p-6 bg-white dark:bg-background-9 space-y-3 cursor-pointer
          lg:opacity-0 lg:translate-y-[30%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:scale-[90%] lg:group-hover:scale-100 transition-all duration-[400ms] ease-team-ease-1"
                  >
                    {/* Name & Location */}
                    <div className="text-center">
                      <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">
                        <Link href="/ai-agency-team-details">John Smith</Link>
                      </h3>
                      <p className="text-tagline-2 font-normal text-secondary/40 dark:text-accent/40">
                        New York
                      </p>
                    </div>

                    {/* Social Links */}
                    <div
                      className="flex items-center justify-center gap-3
            lg:opacity-0 lg:group-hover:opacity-100 lg:scale-75 lg:group-hover:scale-100
            transition-all duration-[400ms] ease-team-ease-1"
                    >
                      {/* Facebook */}
                      <Link href="#" className="group/social-link">
                        <span className="sr-only">Facebook profile</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="16"
                            viewBox="0 0 7 16"
                            fill="none"
                          >
                            <path
                              d="M2.25 15C2.25 15.4142 2.58579 15.75 3 15.75C3.41421 15.75 3.75 15.4142 3.75 15H2.25ZM3.75 7C3.75 6.58579 3.41421 6.25 3 6.25C2.58579 6.25 2.25 6.58579 2.25 7H3.75ZM6 1.75C6.41421 1.75 6.75 1.41421 6.75 1C6.75 0.585786 6.41421 0.25 6 0.25V1.75ZM3 4H2.25H3ZM2.25 7C2.25 7.41421 2.58579 7.75 3 7.75C3.41421 7.75 3.75 7.41421 3.75 7H2.25ZM3 6.25C2.58579 6.25 2.25 6.58579 2.25 7C2.25 7.41421 2.58579 7.75 3 7.75V6.25ZM5 7.75C5.41421 7.75 5.75 7.41421 5.75 7C5.75 6.58579 5.41421 6.25 5 6.25V7.75ZM3 7.75C3.41421 7.75 3.75 7.41421 3.75 7C3.75 6.58579 3.41421 6.25 3 6.25V7.75ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM3 15H3.75V7H3H2.25V15H3ZM6 1V0.25C3.92893 0.25 2.25 1.92893 2.25 4H3H3.75C3.75 2.75736 4.75736 1.75 6 1.75V1ZM3 4H2.25V7H3H3.75V4H3ZM3 7V7.75H5V7V6.25H3V7ZM3 7V6.25H1V7V7.75H3V7Z"
                              className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1"
                            ></path>
                          </svg>
                        </span>
                      </Link>

                      {/* Divider */}
                      <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>

                      {/* Repeat similar <Link> + SVG blocks for Instagram, YouTube, Linkedin, Dribbble, Behance */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-ns-animate=""
                data-delay="0.4"
                className="col-span-12 sm:col-span-6 lg:col-span-4 opacity-100 filter blur-0 transform"
              >
                <div className="relative z-10 group bg-white dark:bg-background-9 rounded-[20px] overflow-hidden p-3">
                  {/* Team Image */}
                  <figure className="lg:max-w-[408px] mx-auto overflow-hidden">
                    <Image
                      src="/images/ns-avatar-1.png"
                      alt="team member"
                      className="w-full h-full object-cover bg-background-1 rounded-2xl dark:bg-background-5"
                      width={408}
                      height={408}
                    />
                  </figure>

                  {/* Info Card */}
                  <div
                    className="max-w-[384px] w-[calc(100%-44px)] shadow-1 rounded-xl absolute z-20 bottom-7 sm:bottom-5 left-1/2 -translate-x-1/2 mx-auto p-6 bg-white dark:bg-background-9 space-y-3 cursor-pointer
          lg:opacity-0 lg:translate-y-[30%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:scale-[90%] lg:group-hover:scale-100 transition-all duration-[400ms] ease-team-ease-1"
                  >
                    {/* Name & Location */}
                    <div className="text-center">
                      <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">
                        <Link href="/ai-agency-team-details">Michael Chen</Link>
                      </h3>
                      <p className="text-tagline-2 font-normal text-secondary/40 dark:text-accent/40">
                        New York
                      </p>
                    </div>

                    {/* Social Links */}
                    <div
                      className="flex items-center justify-center gap-3
            lg:opacity-0 lg:group-hover:opacity-100 lg:scale-75 lg:group-hover:scale-100
            transition-all duration-[400ms] ease-team-ease-1"
                    >
                      {/* Facebook */}
                      <Link href="#" className="group/social-link">
                        <span className="sr-only">Facebook profile</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="16"
                            viewBox="0 0 7 16"
                            fill="none"
                          >
                            <path
                              d="M2.25 15C2.25 15.4142 2.58579 15.75 3 15.75C3.41421 15.75 3.75 15.4142 3.75 15H2.25ZM3.75 7C3.75 6.58579 3.41421 6.25 3 6.25C2.58579 6.25 2.25 6.58579 2.25 7H3.75ZM6 1.75C6.41421 1.75 6.75 1.41421 6.75 1C6.75 0.585786 6.41421 0.25 6 0.25V1.75ZM3 4H2.25H3ZM2.25 7C2.25 7.41421 2.58579 7.75 3 7.75C3.41421 7.75 3.75 7.41421 3.75 7H2.25ZM3 6.25C2.58579 6.25 2.25 6.58579 2.25 7C2.25 7.41421 2.58579 7.75 3 7.75V6.25ZM5 7.75C5.41421 7.75 5.75 7.41421 5.75 7C5.75 6.58579 5.41421 6.25 5 6.25V7.75ZM3 7.75C3.41421 7.75 3.75 7.41421 3.75 7C3.75 6.58579 3.41421 6.25 3 6.25V7.75ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM3 15H3.75V7H3H2.25V15H3ZM6 1V0.25C3.92893 0.25 2.25 1.92893 2.25 4H3H3.75C3.75 2.75736 4.75736 1.75 6 1.75V1ZM3 4H2.25V7H3H3.75V4H3ZM3 7V7.75H5V7V6.25H3V7ZM3 7V6.25H1V7V7.75H3V7Z"
                              className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1"
                            ></path>
                          </svg>
                        </span>
                      </Link>

                      {/* Divider */}
                      <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>

                      {/* Repeat similar <Link> + SVG blocks for Instagram, YouTube, Linkedin, Dribbble, Behance */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-ns-animate=""
                data-delay="0.4"
                className="col-span-12 sm:col-span-6 lg:col-span-4 opacity-100 filter blur-0 transform"
              >
                <div className="relative z-10 group bg-white dark:bg-background-9 rounded-[20px] overflow-hidden p-3">
                  {/* Team Image */}
                  <figure className="lg:max-w-[408px] mx-auto overflow-hidden">
                    <Image
                      src="/images/ns-avatar-1.png"
                      alt="team member"
                      className="w-full h-full object-cover bg-background-1 rounded-2xl dark:bg-background-5"
                      width={408}
                      height={408}
                    />
                  </figure>

                  {/* Info Card */}
                  <div
                    className="max-w-[384px] w-[calc(100%-44px)] shadow-1 rounded-xl absolute z-20 bottom-7 sm:bottom-5 left-1/2 -translate-x-1/2 mx-auto p-6 bg-white dark:bg-background-9 space-y-3 cursor-pointer
          lg:opacity-0 lg:translate-y-[30%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:scale-[90%] lg:group-hover:scale-100 transition-all duration-[400ms] ease-team-ease-1"
                  >
                    {/* Name & Location */}
                    <div className="text-center">
                      <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">
                        <Link href="/ai-agency-team-details">
                          Robert Wilson
                        </Link>
                      </h3>
                      <p className="text-tagline-2 font-normal text-secondary/40 dark:text-accent/40">
                        New York
                      </p>
                    </div>

                    {/* Social Links */}
                    <div
                      className="flex items-center justify-center gap-3
            lg:opacity-0 lg:group-hover:opacity-100 lg:scale-75 lg:group-hover:scale-100
            transition-all duration-[400ms] ease-team-ease-1"
                    >
                      {/* Facebook */}
                      <Link href="#" className="group/social-link">
                        <span className="sr-only">Facebook profile</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="16"
                            viewBox="0 0 7 16"
                            fill="none"
                          >
                            <path
                              d="M2.25 15C2.25 15.4142 2.58579 15.75 3 15.75C3.41421 15.75 3.75 15.4142 3.75 15H2.25ZM3.75 7C3.75 6.58579 3.41421 6.25 3 6.25C2.58579 6.25 2.25 6.58579 2.25 7H3.75ZM6 1.75C6.41421 1.75 6.75 1.41421 6.75 1C6.75 0.585786 6.41421 0.25 6 0.25V1.75ZM3 4H2.25H3ZM2.25 7C2.25 7.41421 2.58579 7.75 3 7.75C3.41421 7.75 3.75 7.41421 3.75 7H2.25ZM3 6.25C2.58579 6.25 2.25 6.58579 2.25 7C2.25 7.41421 2.58579 7.75 3 7.75V6.25ZM5 7.75C5.41421 7.75 5.75 7.41421 5.75 7C5.75 6.58579 5.41421 6.25 5 6.25V7.75ZM3 7.75C3.41421 7.75 3.75 7.41421 3.75 7C3.75 6.58579 3.41421 6.25 3 6.25V7.75ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM3 15H3.75V7H3H2.25V15H3ZM6 1V0.25C3.92893 0.25 2.25 1.92893 2.25 4H3H3.75C3.75 2.75736 4.75736 1.75 6 1.75V1ZM3 4H2.25V7H3H3.75V4H3ZM3 7V7.75H5V7V6.25H3V7ZM3 7V6.25H1V7V7.75H3V7Z"
                              className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1"
                            ></path>
                          </svg>
                        </span>
                      </Link>

                      {/* Divider */}
                      <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>

                      {/* Repeat similar <Link> + SVG blocks for Instagram, YouTube, Linkedin, Dribbble, Behance */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-ns-animate=""
                data-delay="0.4"
                className="col-span-12 sm:col-span-6 lg:col-span-4 opacity-100 filter blur-0 transform"
              >
                <div className="relative z-10 group bg-white dark:bg-background-9 rounded-[20px] overflow-hidden p-3">
                  {/* Team Image */}
                  <figure className="lg:max-w-[408px] mx-auto overflow-hidden">
                    <Image
                      src="/images/ns-avatar-1.png"
                      alt="team member"
                      className="w-full h-full object-cover bg-background-1 rounded-2xl dark:bg-background-5"
                      width={408}
                      height={408}
                    />
                  </figure>

                  {/* Info Card */}
                  <div
                    className="max-w-[384px] w-[calc(100%-44px)] shadow-1 rounded-xl absolute z-20 bottom-7 sm:bottom-5 left-1/2 -translate-x-1/2 mx-auto p-6 bg-white dark:bg-background-9 space-y-3 cursor-pointer
          lg:opacity-0 lg:translate-y-[30%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:scale-[90%] lg:group-hover:scale-100 transition-all duration-[400ms] ease-team-ease-1"
                  >
                    {/* Name & Location */}
                    <div className="text-center">
                      <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">
                        <Link href="/ai-agency-team-details">David Kim</Link>
                      </h3>
                      <p className="text-tagline-2 font-normal text-secondary/40 dark:text-accent/40">
                        New York
                      </p>
                    </div>

                    {/* Social Links */}
                    <div
                      className="flex items-center justify-center gap-3
            lg:opacity-0 lg:group-hover:opacity-100 lg:scale-75 lg:group-hover:scale-100
            transition-all duration-[400ms] ease-team-ease-1"
                    >
                      {/* Facebook */}
                      <Link href="#" className="group/social-link">
                        <span className="sr-only">Facebook profile</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="16"
                            viewBox="0 0 7 16"
                            fill="none"
                          >
                            <path
                              d="M2.25 15C2.25 15.4142 2.58579 15.75 3 15.75C3.41421 15.75 3.75 15.4142 3.75 15H2.25ZM3.75 7C3.75 6.58579 3.41421 6.25 3 6.25C2.58579 6.25 2.25 6.58579 2.25 7H3.75ZM6 1.75C6.41421 1.75 6.75 1.41421 6.75 1C6.75 0.585786 6.41421 0.25 6 0.25V1.75ZM3 4H2.25H3ZM2.25 7C2.25 7.41421 2.58579 7.75 3 7.75C3.41421 7.75 3.75 7.41421 3.75 7H2.25ZM3 6.25C2.58579 6.25 2.25 6.58579 2.25 7C2.25 7.41421 2.58579 7.75 3 7.75V6.25ZM5 7.75C5.41421 7.75 5.75 7.41421 5.75 7C5.75 6.58579 5.41421 6.25 5 6.25V7.75ZM3 7.75C3.41421 7.75 3.75 7.41421 3.75 7C3.75 6.58579 3.41421 6.25 3 6.25V7.75ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM3 15H3.75V7H3H2.25V15H3ZM6 1V0.25C3.92893 0.25 2.25 1.92893 2.25 4H3H3.75C3.75 2.75736 4.75736 1.75 6 1.75V1ZM3 4H2.25V7H3H3.75V4H3ZM3 7V7.75H5V7V6.25H3V7ZM3 7V6.25H1V7V7.75H3V7Z"
                              className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1"
                            ></path>
                          </svg>
                        </span>
                      </Link>

                      {/* Divider */}
                      <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>

                      {/* Repeat similar <Link> + SVG blocks for Instagram, YouTube, Linkedin, Dribbble, Behance */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-ns-animate=""
                data-delay="0.4"
                className="col-span-12 sm:col-span-6 lg:col-span-4 opacity-100 filter blur-0 transform"
              >
                <div className="relative z-10 group bg-white dark:bg-background-9 rounded-[20px] overflow-hidden p-3">
                  {/* Team Image */}
                  <figure className="lg:max-w-[408px] mx-auto overflow-hidden">
                    <Image
                      src="/images/ns-avatar-1.png"
                      alt="team member"
                      className="w-full h-full object-cover bg-background-1 rounded-2xl dark:bg-background-5"
                      width={408}
                      height={408}
                    />
                  </figure>

                  {/* Info Card */}
                  <div
                    className="max-w-[384px] w-[calc(100%-44px)] shadow-1 rounded-xl absolute z-20 bottom-7 sm:bottom-5 left-1/2 -translate-x-1/2 mx-auto p-6 bg-white dark:bg-background-9 space-y-3 cursor-pointer
          lg:opacity-0 lg:translate-y-[30%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:scale-[90%] lg:group-hover:scale-100 transition-all duration-[400ms] ease-team-ease-1"
                  >
                    {/* Name & Location */}
                    <div className="text-center">
                      <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">
                        <Link href="/ai-agency-team-details">
                          Thomas Martinez
                        </Link>
                      </h3>
                      <p className="text-tagline-2 font-normal text-secondary/40 dark:text-accent/40">
                        New York
                      </p>
                    </div>

                    {/* Social Links */}
                    <div
                      className="flex items-center justify-center gap-3
            lg:opacity-0 lg:group-hover:opacity-100 lg:scale-75 lg:group-hover:scale-100
            transition-all duration-[400ms] ease-team-ease-1"
                    >
                      {/* Facebook */}
                      <Link href="#" className="group/social-link">
                        <span className="sr-only">Facebook profile</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="16"
                            viewBox="0 0 7 16"
                            fill="none"
                          >
                            <path
                              d="M2.25 15C2.25 15.4142 2.58579 15.75 3 15.75C3.41421 15.75 3.75 15.4142 3.75 15H2.25ZM3.75 7C3.75 6.58579 3.41421 6.25 3 6.25C2.58579 6.25 2.25 6.58579 2.25 7H3.75ZM6 1.75C6.41421 1.75 6.75 1.41421 6.75 1C6.75 0.585786 6.41421 0.25 6 0.25V1.75ZM3 4H2.25H3ZM2.25 7C2.25 7.41421 2.58579 7.75 3 7.75C3.41421 7.75 3.75 7.41421 3.75 7H2.25ZM3 6.25C2.58579 6.25 2.25 6.58579 2.25 7C2.25 7.41421 2.58579 7.75 3 7.75V6.25ZM5 7.75C5.41421 7.75 5.75 7.41421 5.75 7C5.75 6.58579 5.41421 6.25 5 6.25V7.75ZM3 7.75C3.41421 7.75 3.75 7.41421 3.75 7C3.75 6.58579 3.41421 6.25 3 6.25V7.75ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM3 15H3.75V7H3H2.25V15H3ZM6 1V0.25C3.92893 0.25 2.25 1.92893 2.25 4H3H3.75C3.75 2.75736 4.75736 1.75 6 1.75V1ZM3 4H2.25V7H3H3.75V4H3ZM3 7V7.75H5V7V6.25H3V7ZM3 7V6.25H1V7V7.75H3V7Z"
                              className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1"
                            ></path>
                          </svg>
                        </span>
                      </Link>

                      {/* Divider */}
                      <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>

                      {/* Repeat similar <Link> + SVG blocks for Instagram, YouTube, Linkedin, Dribbble, Behance */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-ns-animate=""
                data-delay="0.4"
                className="col-span-12 sm:col-span-6 lg:col-span-4 opacity-100 filter blur-0 transform"
              >
                <div className="relative z-10 group bg-white dark:bg-background-9 rounded-[20px] overflow-hidden p-3">
                  {/* Team Image */}
                  <figure className="lg:max-w-[408px] mx-auto overflow-hidden">
                    <Image
                      src="/images/ns-avatar-1.png"
                      alt="team member"
                      className="w-full h-full object-cover bg-background-1 rounded-2xl dark:bg-background-5"
                      width={408}
                      height={408}
                    />
                  </figure>

                  {/* Info Card */}
                  <div
                    className="max-w-[384px] w-[calc(100%-44px)] shadow-1 rounded-xl absolute z-20 bottom-7 sm:bottom-5 left-1/2 -translate-x-1/2 mx-auto p-6 bg-white dark:bg-background-9 space-y-3 cursor-pointer
          lg:opacity-0 lg:translate-y-[30%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:scale-[90%] lg:group-hover:scale-100 transition-all duration-[400ms] ease-team-ease-1"
                  >
                    {/* Name & Location */}
                    <div className="text-center">
                      <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">
                        <Link href="/ai-agency-team-details">
                          James Anderson
                        </Link>
                      </h3>
                      <p className="text-tagline-2 font-normal text-secondary/40 dark:text-accent/40">
                        New York
                      </p>
                    </div>

                    {/* Social Links */}
                    <div
                      className="flex items-center justify-center gap-3
            lg:opacity-0 lg:group-hover:opacity-100 lg:scale-75 lg:group-hover:scale-100
            transition-all duration-[400ms] ease-team-ease-1"
                    >
                      {/* Facebook */}
                      <Link href="#" className="group/social-link">
                        <span className="sr-only">Facebook profile</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="16"
                            viewBox="0 0 7 16"
                            fill="none"
                          >
                            <path
                              d="M2.25 15C2.25 15.4142 2.58579 15.75 3 15.75C3.41421 15.75 3.75 15.4142 3.75 15H2.25ZM3.75 7C3.75 6.58579 3.41421 6.25 3 6.25C2.58579 6.25 2.25 6.58579 2.25 7H3.75ZM6 1.75C6.41421 1.75 6.75 1.41421 6.75 1C6.75 0.585786 6.41421 0.25 6 0.25V1.75ZM3 4H2.25H3ZM2.25 7C2.25 7.41421 2.58579 7.75 3 7.75C3.41421 7.75 3.75 7.41421 3.75 7H2.25ZM3 6.25C2.58579 6.25 2.25 6.58579 2.25 7C2.25 7.41421 2.58579 7.75 3 7.75V6.25ZM5 7.75C5.41421 7.75 5.75 7.41421 5.75 7C5.75 6.58579 5.41421 6.25 5 6.25V7.75ZM3 7.75C3.41421 7.75 3.75 7.41421 3.75 7C3.75 6.58579 3.41421 6.25 3 6.25V7.75ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM3 15H3.75V7H3H2.25V15H3ZM6 1V0.25C3.92893 0.25 2.25 1.92893 2.25 4H3H3.75C3.75 2.75736 4.75736 1.75 6 1.75V1ZM3 4H2.25V7H3H3.75V4H3ZM3 7V7.75H5V7V6.25H3V7ZM3 7V6.25H1V7V7.75H3V7Z"
                              className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1"
                            ></path>
                          </svg>
                        </span>
                      </Link>

                      {/* Divider */}
                      <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>
                      {/* Facebook */}
                      <Link href="#" className="group/social-link">
                        <span className="sr-only">Instagram</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="16"
                            viewBox="0 0 7 16"
                            fill="none"
                          >
                            <path
                              d="M2.25 15C2.25 15.4142 2.58579 15.75 3 15.75C3.41421 15.75 3.75 15.4142 3.75 15H2.25ZM3.75 7C3.75 6.58579 3.41421 6.25 3 6.25C2.58579 6.25 2.25 6.58579 2.25 7H3.75ZM6 1.75C6.41421 1.75 6.75 1.41421 6.75 1C6.75 0.585786 6.41421 0.25 6 0.25V1.75ZM3 4H2.25H3ZM2.25 7C2.25 7.41421 2.58579 7.75 3 7.75C3.41421 7.75 3.75 7.41421 3.75 7H2.25ZM3 6.25C2.58579 6.25 2.25 6.58579 2.25 7C2.25 7.41421 2.58579 7.75 3 7.75V6.25ZM5 7.75C5.41421 7.75 5.75 7.41421 5.75 7C5.75 6.58579 5.41421 6.25 5 6.25V7.75ZM3 7.75C3.41421 7.75 3.75 7.41421 3.75 7C3.75 6.58579 3.41421 6.25 3 6.25V7.75ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM3 15H3.75V7H3H2.25V15H3ZM6 1V0.25C3.92893 0.25 2.25 1.92893 2.25 4H3H3.75C3.75 2.75736 4.75736 1.75 6 1.75V1ZM3 4H2.25V7H3H3.75V4H3ZM3 7V7.75H5V7V6.25H3V7ZM3 7V6.25H1V7V7.75H3V7Z"
                              className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1"
                            ></path>
                          </svg>
                        </span>
                      </Link>

                      {/* Divider */}
                      <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>
                      {/* Facebook */}
                      <Link href="#" className="group/social-link">
                        <span className="sr-only">YouTube</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="16"
                            viewBox="0 0 7 16"
                            fill="none"
                          >
                            <path
                              d="M2.25 15C2.25 15.4142 2.58579 15.75 3 15.75C3.41421 15.75 3.75 15.4142 3.75 15H2.25ZM3.75 7C3.75 6.58579 3.41421 6.25 3 6.25C2.58579 6.25 2.25 6.58579 2.25 7H3.75ZM6 1.75C6.41421 1.75 6.75 1.41421 6.75 1C6.75 0.585786 6.41421 0.25 6 0.25V1.75ZM3 4H2.25H3ZM2.25 7C2.25 7.41421 2.58579 7.75 3 7.75C3.41421 7.75 3.75 7.41421 3.75 7H2.25ZM3 6.25C2.58579 6.25 2.25 6.58579 2.25 7C2.25 7.41421 2.58579 7.75 3 7.75V6.25ZM5 7.75C5.41421 7.75 5.75 7.41421 5.75 7C5.75 6.58579 5.41421 6.25 5 6.25V7.75ZM3 7.75C3.41421 7.75 3.75 7.41421 3.75 7C3.75 6.58579 3.41421 6.25 3 6.25V7.75ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM3 15H3.75V7H3H2.25V15H3ZM6 1V0.25C3.92893 0.25 2.25 1.92893 2.25 4H3H3.75C3.75 2.75736 4.75736 1.75 6 1.75V1ZM3 4H2.25V7H3H3.75V4H3ZM3 7V7.75H5V7V6.25H3V7ZM3 7V6.25H1V7V7.75H3V7Z"
                              className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1"
                            ></path>
                          </svg>
                        </span>
                      </Link>

                      {/* Divider */}
                      <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>
                      {/* Facebook */}
                      <Link href="#" className="group/social-link">
                        <span className="sr-only">Linkedin</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="16"
                            viewBox="0 0 7 16"
                            fill="none"
                          >
                            <path
                              d="M2.25 15C2.25 15.4142 2.58579 15.75 3 15.75C3.41421 15.75 3.75 15.4142 3.75 15H2.25ZM3.75 7C3.75 6.58579 3.41421 6.25 3 6.25C2.58579 6.25 2.25 6.58579 2.25 7H3.75ZM6 1.75C6.41421 1.75 6.75 1.41421 6.75 1C6.75 0.585786 6.41421 0.25 6 0.25V1.75ZM3 4H2.25H3ZM2.25 7C2.25 7.41421 2.58579 7.75 3 7.75C3.41421 7.75 3.75 7.41421 3.75 7H2.25ZM3 6.25C2.58579 6.25 2.25 6.58579 2.25 7C2.25 7.41421 2.58579 7.75 3 7.75V6.25ZM5 7.75C5.41421 7.75 5.75 7.41421 5.75 7C5.75 6.58579 5.41421 6.25 5 6.25V7.75ZM3 7.75C3.41421 7.75 3.75 7.41421 3.75 7C3.75 6.58579 3.41421 6.25 3 6.25V7.75ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM3 15H3.75V7H3H2.25V15H3ZM6 1V0.25C3.92893 0.25 2.25 1.92893 2.25 4H3H3.75C3.75 2.75736 4.75736 1.75 6 1.75V1ZM3 4H2.25V7H3H3.75V4H3ZM3 7V7.75H5V7V6.25H3V7ZM3 7V6.25H1V7V7.75H3V7Z"
                              className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1"
                            ></path>
                          </svg>
                        </span>
                      </Link>

                      {/* Divider */}
                      <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>
                      {/* Facebook */}
                      <Link href="#" className="group/social-link">
                        <span className="sr-only">Dribbble</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="16"
                            viewBox="0 0 7 16"
                            fill="none"
                          >
                            <path
                              d="M2.25 15C2.25 15.4142 2.58579 15.75 3 15.75C3.41421 15.75 3.75 15.4142 3.75 15H2.25ZM3.75 7C3.75 6.58579 3.41421 6.25 3 6.25C2.58579 6.25 2.25 6.58579 2.25 7H3.75ZM6 1.75C6.41421 1.75 6.75 1.41421 6.75 1C6.75 0.585786 6.41421 0.25 6 0.25V1.75ZM3 4H2.25H3ZM2.25 7C2.25 7.41421 2.58579 7.75 3 7.75C3.41421 7.75 3.75 7.41421 3.75 7H2.25ZM3 6.25C2.58579 6.25 2.25 6.58579 2.25 7C2.25 7.41421 2.58579 7.75 3 7.75V6.25ZM5 7.75C5.41421 7.75 5.75 7.41421 5.75 7C5.75 6.58579 5.41421 6.25 5 6.25V7.75ZM3 7.75C3.41421 7.75 3.75 7.41421 3.75 7C3.75 6.58579 3.41421 6.25 3 6.25V7.75ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM3 15H3.75V7H3H2.25V15H3ZM6 1V0.25C3.92893 0.25 2.25 1.92893 2.25 4H3H3.75C3.75 2.75736 4.75736 1.75 6 1.75V1ZM3 4H2.25V7H3H3.75V4H3ZM3 7V7.75H5V7V6.25H3V7ZM3 7V6.25H1V7V7.75H3V7Z"
                              className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1"
                            ></path>
                          </svg>
                        </span>
                      </Link>

                      {/* Divider */}
                      <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>
                      {/* Facebook */}
                      <Link href="#" className="group/social-link">
                        <span className="sr-only">Behance</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="16"
                            viewBox="0 0 7 16"
                            fill="none"
                          >
                            <path
                              d="M2.25 15C2.25 15.4142 2.58579 15.75 3 15.75C3.41421 15.75 3.75 15.4142 3.75 15H2.25ZM3.75 7C3.75 6.58579 3.41421 6.25 3 6.25C2.58579 6.25 2.25 6.58579 2.25 7H3.75ZM6 1.75C6.41421 1.75 6.75 1.41421 6.75 1C6.75 0.585786 6.41421 0.25 6 0.25V1.75ZM3 4H2.25H3ZM2.25 7C2.25 7.41421 2.58579 7.75 3 7.75C3.41421 7.75 3.75 7.41421 3.75 7H2.25ZM3 6.25C2.58579 6.25 2.25 6.58579 2.25 7C2.25 7.41421 2.58579 7.75 3 7.75V6.25ZM5 7.75C5.41421 7.75 5.75 7.41421 5.75 7C5.75 6.58579 5.41421 6.25 5 6.25V7.75ZM3 7.75C3.41421 7.75 3.75 7.41421 3.75 7C3.75 6.58579 3.41421 6.25 3 6.25V7.75ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM3 15H3.75V7H3H2.25V15H3ZM6 1V0.25C3.92893 0.25 2.25 1.92893 2.25 4H3H3.75C3.75 2.75736 4.75736 1.75 6 1.75V1ZM3 4H2.25V7H3H3.75V4H3ZM3 7V7.75H5V7V6.25H3V7ZM3 7V6.25H1V7V7.75H3V7Z"
                              className="fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent transition-colors duration-300 ease-team-ease-1"
                            ></path>
                          </svg>
                        </span>
                      </Link>

                      {/* Divider */}
                      <div className="h-[22px] w-px bg-stroke-1 dark:bg-accent/10"></div>

                      {/* Repeat similar <Link> + SVG blocks for Instagram, YouTube, Linkedin, Dribbble, Behance */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* map area section */}
        <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
          <div className="main-container">
            <div
              data-ns-animate
              data-delay="0.1"
              className="rounded-[20px] bg-white dark:bg-background-6 p-2.5"
            >
              {/* Leaflet Map */}
              <Map />
            </div>
          </div>
        </section>

        {/* CTA section */}

        <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px]">
          <div
            data-ns-animate
            data-delay="0.1"
            className="2xl:max-w-[1440px] xl:max-w-[1240px] lg:max-w-[980px] md:max-w-[700px] sm:max-w-[600px] min-[475px]:max-w-[450px] min-[425px]:max-w-[350px] max-w-[320px] z-10 mx-auto lg:p-[100px] sm:p-20 min-[475px]:p-14 py-12 px-6 bg-secondary dark:bg-background-6 sm:rounded-[32px] rounded-[20px] relative overflow-hidden"
          >
            {/* Background image */}
            <div
              data-ns-animate
              data-delay="0.1"
              data-direction="left"
              data-offset="200"
              className="absolute -z-10 sm:-top-[35%] -top-[100%] -left-[7%] size-[850px] rotate-[275deg] pointer-events-none select-none"
            >
              <img
                src="./images/ns-img-499.png"
                alt="cta-bg"
                className="w-[50%] sm:w-full"
              />
            </div>

            {/* Heading */}
            <div className="text-center space-y-5 sm:mb-14 mb-10">
              <span
                data-ns-animate
                data-delay="0.1"
                className="badge badge-blur text-ns-yellow"
              >
                Get started
              </span>
              <div className="space-y-3">
                <h2
                  data-ns-animate
                  data-delay="0.2"
                  className="text-white font-normal"
                >
                  Get started with industry-leading cyber security
                </h2>
                <p data-ns-animate data-delay="0.3" className="text-accent/60">
                  No hidden fees. no steep learning curves. Just a platform
                  built for your growth.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <form
                data-ns-animate
                data-delay="0.4"
                className="md:max-w-[585px] max-w-[400px] mx-auto flex items-center md:flex-row flex-col md:gap-3 gap-y-5"
              >
                <fieldset className="md:max-w-[371px] w-full">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="h-12 rounded-full px-[18px] py-3 bg-accent/10 border border-accent/20 shadow-1 ring-[0.7px] ring-accent/20 focus:ring-1 focus:ring-primary-600 placeholder:text-accent/60 block w-full outline-none text-white placeholder:font-normal font-normal"
                  />
                </fieldset>
                <button className="h-12 btn btn-primary hover:btn-accent btn-md md:w-auto w-full border-0">
                  <span>Started free today</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
