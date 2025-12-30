// app/page.tsx
// ============================================
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "./footer";
import "./globals.css";
import Header from "./header";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

import { FaCheckCircle } from "react-icons/fa";

import "leaflet/dist/leaflet.css";

import dynamic from "next/dynamic";



export default function FeatureSection() {
  const Map = dynamic(() => import("./Map"), { ssr: false });

  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <Header />
      <main>
        <section
          className="hero-section pt-[320px] md:pt-[200px] lg:pt-[200px] xl:pt-[260px] pb-16 md:pb-20 lg:pb-[120px] xl:pb-[150px] bg-[url('/images/ns-img-169.png')] bg-no-repeat bg-top relative z-0"
          id="scene"
        >
          {/* Hero Content */}
          <div className="main-container flex flex-col items-center space-y-[124px] relative z-10 mb-[100px] lg:mb-[150px] xl:mb-[220px]">
            
            {/* LEFT SHAPE */}
            {/* <div className="absolute -top-[160px] md:-top-[80px] w-[323px] lg:top-[50px] left-5 lg:left-[50px] 2xl:-left-[120px] md:rotate-8 -z-10">
              <figure className="w-[112px] top-0 absolute right-0 parallax-effect">
                <img src="/images/ns-img-172.svg" alt="shape" className="w-full h-full dark:hidden" />
                <img src="/images/ns-img-dark-116.svg" alt="shape" className="w-full h-full hidden dark:inline-block" />
              </figure>
            </div> */}
            <div
              className="absolute -top-[160px] md:-top-[80px] w-[323px] lg:top-[50px] left-5 lg:left-[50px] 2xl:-left-[120px] md:rotate-8 -z-10"
            >
              <figure
                data-ns-animate
                data-delay="0.9"
                data-duration="1.9"
                data-offset="100"
                data-spring
                className="w-[112px] top-0 absolute right-0 parallax-effect"
                data-parallax-value="0.8"
                data-parallax-y="0.8"
                data-parallax-x="0.8"
              >
                <img src="./images/ns-img-172.svg" alt="shape" className="w-full h-full dark:hidden" />
                <img
                  src="./images/ns-img-dark-116.svg"
                  alt="shape"
                  className="w-full h-full hidden dark:inline-block"
                />
              </figure>

              <div
                data-ns-animate
                data-delay="0.8"
                data-duration="2.9"
                data-offset="80"
                data-spring
                className="w-[256px] absolute top-[60px] lg:top-[160px] xl:top-[60px] left-0 md:left-6 lg:left-0 space-y-4"
              >
                <div
                  data-progress-item
                  data-progress-value="48"
                  className="bg-white dark:bg-black p-4 w-full space-y-4 rounded-xl"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-secondary leading-[150%] dark:text-accent">Credit limit</p>
                    <p className="text-lg flex items-center font-medium leading-[150%] text-secondary dark:text-accent">
                      $
                      <span
                        data-counter
                        data-number="80224"
                        data-speed="2000"
                        data-interval="200"
                        data-rooms="5"
                        data-height-space="2.5"
                      >
                        80,224
                      </span>
                    </p>
                  </div>

                  <div className="w-[80%] h-2 bg-secondary dark:bg-accent rounded-full relative z-30">
                    <div className="w-0 h-full bg-ns-green absolute left-[-1px] rounded-full" data-progress-bar />
                    <p
                      className="text-secondary dark:text-accent text-tagline-3 leading-[150%] absolute right-[-52px] -top-1.5"
                      data-progress-text
                    >
                      48%
                    </p>
                  </div>
                </div>

                <div className="w-full flex gap-4">
                  <div className="shrink-0 flex items-center flex-col bg-secondary dark:bg-background-9 w-[153px] h-24 gap-1 p-4 rounded-xl">
                    <span>
                      {/* SVG unchanged */}
                    </span>
                    <span className="text-white dark:text-white"> Transfer success! </span>
                  </div>

                  <div className="bg-background-1 dark:bg-secondary p-4 flex items-center justify-center rounded-xl">
                    <img
                      src="./images/ns-avatar-9.png"
                      alt="shape"
                      className="size-[56px] rounded-full bg-linear-[156deg,_#FFF_32.92%,_#C6F56F_91%]"
                    />
                  </div>
                </div>
              </div>
            </div>



            {/* RIGHT SHAPE */}
            {/* <div className="absolute -top-[200px] md:-top-[80px] w-[323px] lg:top-[50px] right-5 lg:right-[50px] 2xl:-right-[120px] -rotate-8 -z-12">
              <figure className="w-[132px] top-0 absolute left-0 parallax-effect hidden sm:block">
                <img src="/images/ns-img-66.svg" alt="shape" className="w-full h-full dark:hidden" />
                <img src="/images/ns-img-dark-43.svg" alt="shape" className="w-full h-full hidden dark:inline-block" />
              </figure>
            </div> */}
            <div
              className="absolute -top-[200px] md:-top-[80px] w-[323px] lg:top-[50px] right-5 lg:right-[50px] 2xl:-right-[120px] -rotate-8 -z-12"
            >
              <figure
                data-ns-animate
                data-delay="0.9"
                data-duration="1.9"
                data-offset="100"
                data-spring
                className="w-[132px] top-0 absolute left-0 parallax-effect hidden sm:block"
                data-parallax-value="-0.8"
                data-parallax-y="-0.8"
                data-parallax-x="-0.8"
              >
                <img src="./images/ns-img-66.svg" alt="shape" className="w-full h-full dark:hidden" />
                <img
                  src="./images/ns-img-dark-43.svg"
                  alt="shape"
                  className="w-full h-full hidden dark:inline-block"
                />
              </figure>

              <div
                data-ns-animate
                data-delay="0.9"
                data-duration="3.9"
                data-offset="50"
                data-spring
                className="w-[250px] lg:w-[270px] 2xl:w-[288px] absolute top-[60px] lg:top-[150px] xl:top-[60px] sm:right-5 xl:right-0 bg-white dark:bg-black rounded-2xl p-4 lg:p-6 hidden sm:block"
              >
                <div className="text-left">
                  <span className="text-tagline-2 font-normal text-secondary dark:text-accent">
                    Total balance
                  </span>

                  <h3 className="text-heading-5 flex items-center lg:text-heading-3 font-normal leading-[1.2] mt-2 mb-[30px]">
                    $
                    <span
                      data-counter
                      data-number="45324"
                      data-speed="2000"
                      data-interval="200"
                      data-rooms="5"
                      data-height-space="2"
                    >
                      45,324
                    </span>
                  </h3>
                </div>

                <div className="flex gap-1 lg:gap-3">
                  <div className="bg-secondary dark:bg-background-7 rounded-xl p-4 space-y-2 flex-1 text-left">
                    <p className="text-white">Income</p>
                    <p className="text-white">$48000</p>
                  </div>

                  <div className="bg-background-4 dark:bg-background-5 rounded-xl p-4 space-y-2 flex-1 text-left">
                    <p className="text-black">Expenses</p>
                    <p>$48000</p>
                  </div>
                </div>
              </div>
            </div>


            {/* TEXT CONTENT */}
            <div className="text-left md:text-center max-md:pt-[150px] max-lg:pt-[200px]">
              <h1 className="mb-4 hero-title">
                Automate smarter. <br className="hidden md:block" />
                Grow faster.
              </h1>

              <p className="max-w-[650px] mx-auto mb-6">
                Save time and elevate your business with intelligent workflow automation from NextSaaS.
              </p>

              <ul className="list-none mb-14 flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-9">
                <li className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-accent text-black text-lg md:text-xl flex-shrink-0" />
                  <span className="text-tagline-2 dark:text-accent/60">
                    Boost your business with AI.
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-accent text-black text-lg md:text-xl flex-shrink-0" />
                  <span className="text-tagline-2 dark:text-accent/60">
                    Trusted by leading industries worldwide.
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-accent text-black text-lg md:text-xl flex-shrink-0" />
                  <span className="text-tagline-2 dark:text-accent/60">
                    Start your AI journey today.
                  </span>
                </li>
              </ul>

              {/* BUTTON */}
              <div>
                <Link
                  href="/ai-agency-pricing"
                  className="btn btn-primary hover:btn-white dark:btn-accent btn-xl dark:hover:btn-primary w-[90%] md:w-auto mx-auto"
                >
                  <span>Get started</span>
                </Link>
              </div>

              {/* IMAGE */}
              <figure className="max-w-[408px] mx-auto mt-20 md:mt-[124px] rounded-[20px] overflow-hidden">
                <img
                  src="/images/ns-img-173.png"
                  alt="hero"
                  className="dark:hidden w-full h-full object-cover"
                />
                <img
                  src="/images/ns-img-dark-117.png"
                  alt="hero"
                  className="hidden dark:inline-block w-full h-full object-cover"
                />
              </figure>
            </div>
          </div>

          {/* BOTTOM SECTION */}
            <div className="main-container">
      <div className="relative z-0">
        {/* Background */}
        <div className="w-full h-full bg-white dark:bg-background-8 absolute -z-10 overflow-hidden rounded-[20px]">
          <div
            data-ns-animate
            data-delay="0.7"
            data-direction="right"
            data-offset="140"
            className="-z-10 absolute lg:-top-[155%] md:-top-[65%] -top-[75%] -right-[75%] lg:-right-[40%] md:-right-[70%] md:rotate-[60deg] rotate-[10deg] size-[1060px] select-none pointer-events-none"
          >
            <Image
              src="/images/ns-img-504.png"
              alt="gradient"
              width={1060}
              height={1060}
              priority
            />
          </div>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          
          {/* LEFT CONTENT */}
          <div className="py-16 max-lg:px-5 lg:pl-14">
            <div className="mb-9">
              <h2 data-ns-animate data-delay="0.2" className="mb-3">
                Innovate for Impact.
              </h2>

              <p data-ns-animate data-delay="0.3" className="max-w-[530px]">
                At NextSaaS, we leverage AI and strategic insight to enhance business performance.
                Partner with us to unlock your potential.
              </p>
            </div>

            <ul className="list-none space-y-2 mb-14">
              {[
                "8 years in creative direction, design & code",
                "Collaborated with over 50 brands in tech, fashion, and media",
                "Enthusiastic about typography, interaction, and minimalism",
              ].map((text, index) => (
                <li
                  key={index}
                  data-ns-animate
                  data-delay={0.4 + index * 0.1}
                  className="flex items-center gap-3"
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
                      className="fill-secondary dark:fill-accent/20"
                    />
                    <path
                      d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                      fill="white"
                    />
                  </svg>

                  <p className="text-secondary dark:text-accent">{text}</p>
                </li>
              ))}
            </ul>

            <div
              data-ns-animate
              data-delay="0.7"
              className="text-center sm:text-left"
            >
              <a
                href="/ai-agency-about"
                className="btn btn-secondary btn-md hover:btn-primary dark:btn-accent w-[85%] md:w-auto mx-auto"
              >
                <span>Discover more about us</span>
              </a>
            </div>
          </div>

          <div className="lg:pe-[42px]">
            <div
              data-ns-animate
              data-delay="0.5"
              data-direction="right"
              className="relative h-full max-lg:max-w-[525px] max-lg:mx-auto"
            >
              <figure className="absolute max-w-[152px] w-full -rotate-[30deg] -left-5 md:left-0 lg:left-2 top-[100px] md:top-[200px] lg:top-10">
                <Image
                  src="/images/ns-img-174.png"
                  alt="shape"
                  width={152}
                  height={152}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/ns-img-dark-118.png"
                  alt="shape"
                  width={152}
                  height={152}
                  className="w-full hidden dark:inline-block"
                />
              </figure>

              <figure className="lg:absolute lg:right-0 lg:bottom-0 max-w-[525px] max-lg:mx-auto">
                <Image
                  src="/images/ns-img-171.png"
                  alt="main visual"
                  width={525}
                  height={525}
                  className="w-full h-auto z-10"
                />
              </figure>
            </div>
          </div>

        </div>
      </div>
    </div>
            
        </section>

        
        <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px] bg-white dark:bg-black">
        <div className="main-container">
          <div className="text-center space-y-5 max-w-[750px] mx-auto mb-10 md:mb-[70px]">
            <span
              data-ns-animate=""
              data-delay="0.2"
              className="badge badge-green"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              Features
            </span>

            <div>
              <h2
                data-ns-animate=""
                data-delay="0.3"
                className="mb-3"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                Automation that fits your needs.
              </h2>

              <p
                data-ns-animate=""
                data-delay="0.4"
                className="text-secondary/60 dark:text-accent/60 max-w-[600px] mx-auto"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                Powerful tools to streamline operations and boost efficiency.
                Automate tasks with NextSaaS and focus on what matters.
              </p>
            </div>
          </div>

          {/* feature Items */}
          <div className="grid grid-cols-12 space-y-8 md:space-y-0 md:gap-8 mb-10 xl:mb-18">
            <div
              data-ns-animate=""
              data-delay="0.5"
              className="col-span-12 md:col-span-6 lg:col-span-8 p-8 rounded-[20px] bg-background-3 dark:bg-background-7 space-y-6"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">
                  Smart analytics with real-time insights.
                </h5>
                <p className="max-w-[450px]">
                  Stay in the loop and make better choices with awesome, built-in
                  analytics that give you real-time insights.
                </p>
              </div>

              <figure className="w-full">
                <img
                  src="./images/ns-img-175.png"
                  alt="feature image"
                  className="w-full object-cover rounded-2xl hidden dark:block"
                />
                <img
                  src="./images/ns-img-dark-119.png"
                  alt="feature image"
                  className="w-full object-cover rounded-2xl block dark:hidden"
                />
              </figure>
            </div>

            <div
              data-ns-animate=""
              data-delay="0.6"
              className="col-span-12 md:col-span-6 lg:col-span-4 p-8 rounded-[20px] bg-background-3 dark:bg-background-7 space-y-6"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">
                  Seamless system integrations.
                </h5>
                <p className="max-w-[220px]">
                  Want it even shorter? Here’s a super chill version!
                </p>
              </div>

              <figure className="w-full">
                <img
                  src="./images/ns-img-176.png"
                  alt="feature image"
                  className="w-full object-cover rounded-2xl block dark:hidden"
                />
                <img
                  src="./images/ns-img-dark-120.png"
                  alt="feature image"
                  className="w-full object-cover rounded-2xl hidden dark:block"
                />
              </figure>
            </div>

            <div
              data-ns-animate=""
              data-delay="0.7"
              className="col-span-12 md:col-span-6 lg:col-span-4 p-8 rounded-[20px] bg-background-3 dark:bg-background-7 space-y-6"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">
                  Clear dashboards for visibility.
                </h5>
                <p>
                  Track everything at a glance with clean, easy-to-use dashboards.
                </p>
              </div>

              <figure className="w-full">
                <img
                  src="./images/ns-img-177.png"
                  alt="feature image"
                  className="w-full object-cover rounded-2xl block dark:hidden"
                />
                <img
                  src="./images/ns-img-dark-121.png"
                  alt="feature image"
                  className="w-full object-cover rounded-2xl hidden dark:block"
                />
              </figure>
            </div>

            <div
              data-ns-animate=""
              data-delay="0.8"
              className="col-span-12 md:col-span-6 lg:col-span-8 p-8 rounded-[20px] bg-background-3 dark:bg-background-7 space-y-6"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="space-y-2 max-w-[285px]">
                <h5 className="max-sm:text-heading-6">
                  Durable, secure platforms.
                </h5>
                <p className="max-w-[311px]">
                  Grow with confidence on a platform that's secure, stable, and
                  built for the future.
                </p>
              </div>

              <figure className="w-full">
                <img
                  src="./images/ns-img-178.png"
                  alt="feature image"
                  className="w-full h-full object-cover rounded-2xl block dark:hidden"
                />
                <img
                  src="./images/ns-img-dark-122.png"
                  alt="feature image"
                  className="w-full h-full object-cover rounded-2xl hidden dark:block"
                />
              </figure>
            </div>
          </div>
        </div>
       </section>
        <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px] bg-[url('/images/ns-img-169.png')] bg-no-repeat bg-cover bg-top">
          <div className="main-container">
            <div className="text-center space-y-5 max-w-[750px] mx-auto mb-14">
              <span
                data-ns-animate=""
                data-delay="0.2"
                className="badge badge-green"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                Services
              </span>

              <div>
                <h2
                  data-ns-animate=""
                  data-delay="0.3"
                  className="mb-3"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  AI services that deliver real results.
                </h2>

                <p
                  data-ns-animate=""
                  data-delay="0.4"
                  className="max-w-[600px] mx-auto"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  From consulting to implementation, our solutions are built to
                  transform the way you work.
                </p>
              </div>
            </div>

            {/* feature Items */}
            <div className="grid grid-cols-12 space-y-8 md:space-y-0 md:gap-8 mb-10 lg:mb-18 max-w-[1010px] mx-auto">
              <div
                data-ns-animate=""
                data-delay="0.5"
                className="col-span-12 md:col-span-6 lg:col-span-7 p-8 rounded-[20px] bg-white dark:bg-background-6 space-y-6 sm:min-h-[288px]"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                <div className="w-full">
                  <span className="ns-shape-35 text-[52px] text-secondary dark:text-accent"></span>
                </div>

                <div className="space-y-2">
                  <h5 className="max-sm:text-heading-6">
                    Real-time data analytics and visualization.
                  </h5>
                  <p className="max-w-[430px]">
                    Speed up your journey with real-time data analytics to bring
                    your ideas to life and make informed decisions.
                  </p>
                </div>
              </div>

              <div
                data-ns-animate=""
                data-delay="0.4"
                className="col-span-12 md:col-span-6 lg:col-span-5 p-8 rounded-[20px] bg-white dark:bg-background-6 space-y-6 sm:min-h-[288px]"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                <div className="w-full">
                  <span className="ns-shape-35 text-[52px] text-secondary dark:text-accent"></span>
                </div>

                <div className="space-y-2">
                  <h5 className="max-sm:text-heading-6">AI-powered apps.</h5>
                  <p>
                    Use AI applications to boost workflow automation and improve
                    efficiency.
                  </p>
                </div>
              </div>

              <div
                data-ns-animate=""
                data-delay="0.5"
                className="col-span-12 md:col-span-6 lg:col-span-5 p-8 rounded-[20px] bg-white dark:bg-background-6 space-y-6 sm:min-h-[288px]"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                <div className="w-full">
                  <span className="ns-shape-41 text-[52px] text-secondary dark:text-accent"></span>
                </div>

                <div className="space-y-2">
                  <h5 className="max-sm:text-heading-6">
                    End-to-end AI consulting.
                  </h5>
                  <p className="max-w-[430px]">
                    Discover your business's potential with our AI consulting
                    services.
                  </p>
                </div>
              </div>

              <div
                data-ns-animate=""
                data-delay="0.6"
                className="col-span-12 md:col-span-6 lg:col-span-7 p-8 rounded-[20px] bg-white dark:bg-background-6 space-y-6 sm:min-h-[288px]"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                <div className="w-full">
                  <span className="ns-shape-19 text-[52px] text-secondary dark:text-accent"></span>
                </div>

                <div className="space-y-2">
                  <h5 className="max-sm:text-heading-6">
                    Machine learning model development.
                  </h5>
                  <p className="max-w-[430px]">
                    Quickly develop tools, platforms, and educational applications
                    for machine learning model creation.
                  </p>
                </div>
              </div>
            </div>

            <div
              data-ns-animate=""
              data-delay="0.7"
              className="flex items-center justify-center"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <a
                href="./ai-agency-contact.html"
                className="btn btn-secondary hover:btn-primary dark:btn-transparent dark:border-primary-50 btn-md w-[85%] md:w-auto mx-auto"
              >
                <span>Talk to an expert</span>
              </a>
            </div>
          </div>
        </section>

        {/* STACK CARDS SECTION */}
        <section className="main-container p-6">
          <div className="flex flex-col lg:flex-row items-start gap-y-24 gap-x-[140px]">
            <div className="w-full lg:flex-1 lg:sticky lg:top-28 lg:max-w-full max-w-[520px] lg:mx-0 mx-auto text-center lg:text-left">
              <span
                data-ns-animate
                data-delay="0.2"
                className="badge badge-green mb-5"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  transform: "translate(0px, 0px)",
                }}
              >
                Process
              </span>

              <h2
                data-ns-animate
                data-delay="0.3"
                className="mb-3 max-w-[529px]"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  transform: "translate(0px, 0px)",
                }}
              >
                Why thousands trust us for their apps.
              </h2>

              <p
                data-ns-animate
                data-delay="0.4"
                className="mb-7 lg:max-w-[620px]"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  transform: "translate(0px, 0px)",
                }}
              >
                We streamline automation for a strategic and sustainable AI transition.
              </p>

              <div
                data-ns-animate
                data-delay="0.5"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  transform: "translate(0px, 0px)",
                }}
              >
                <a
                  href="./ai-agency-process.html"
                  rel="noopener noreferrer"
                  className="btn btn-secondary hover:btn-primary dark:btn-transparent btn-md w-[85%] md:w-auto mx-auto"
                >
                  <span>Get started</span>
                </a>
              </div>
            </div>

            <div
              className="w-full lg:flex-1 stack-cards js-stack-cards lg:max-w-full md:max-w-[50%] sm:max-w-[60%] lg:mx-0 mx-auto max-w-full"
              style={{ paddingBottom: "72px" }}
            >
              {/* Card 1 */}
              <div
                className="stack-cards__item js-stack-cards__item lg:max-w-[483px] max-w-full max-sm:min-h-[433px]"
                style={{ transform: "translateY(0px)" }}
              >
                <div className="p-2.5 rounded-[20px] relative z-[10] overflow-hidden">
                  <figure className="absolute z-[-1] w-[600px] md:w-[900px] xl:w-[1050px] top-[-66%] md:top-[-99%] left-[-52%] md:left-[-103%] rotate-[-41deg] select-none pointer-events-none">
                    <img src="./images/ns-img-520.png" alt="gradient-border" className="w-full h-full object-cover" />
                  </figure>

                  <figure className="p-8 bg-white dark:bg-background-5 rounded-xl space-y-6">
                    <figcaption className="space-y-2">
                      <h5>Design tailored AI strategies.</h5>
                      <p className="max-w-[250px]">
                        Tailored AI strategies align solutions to drive smarter decisions.
                      </p>
                    </figcaption>

                    <figure className="max-w-[385px] w-full">
                      <img
                        src="./images/ns-img-179.png"
                        alt="case icon"
                        className="w-full md:max-h-[300px] md:min-h-[300px]"
                      />
                    </figure>
                  </figure>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="stack-cards__item js-stack-cards__item lg:max-w-[483px] max-w-full max-sm:min-h-[433px]"
                style={{ transform: "translateY(24px)" }}
              >
                <div className="p-2.5 rounded-[20px] relative z-[10] overflow-hidden">
                  <figure className="absolute z-[-1] w-[600px] md:w-[900px] xl:w-[1050px] top-[-76%] md:top-[-111%] left-[-62%] md:left-[-103%] rotate-[-41deg] select-none pointer-events-none">
                    <img src="./images/ns-img-521.png" alt="gradient-border" className="w-full h-full object-cover" />
                  </figure>

                  <figure className="p-8 bg-white dark:bg-background-5 rounded-xl space-y-6">
                    <figcaption className="space-y-2">
                      <h5>Monitor and optimize results.</h5>
                      <p className="max-w-[250px]">
                        Track performance and fine-tune your strategy.
                      </p>
                    </figcaption>

                    <div className="rounded-2xl overflow-hidden max-w-[400px] w-full">
                      <img
                        src="./images/ns-img-180.png"
                        alt="case icon"
                        className="w-full dark:hidden md:max-h-[300px] md:min-h-[300px]"
                      />
                      <img
                        src="./images/ns-img-dark-123.png"
                        alt="case icon"
                        className="w-full hidden dark:block md:max-h-[300px] md:min-h-[300px]"
                      />
                    </div>
                  </figure>
                </div>
              </div>

              {/* Card 3 */}
              <div
                className="stack-cards__item js-stack-cards__item lg:max-w-[483px] max-w-full max-sm:min-h-[433px]"
                style={{ transform: "translateY(48px)" }}
              >
                <div className="p-2.5 rounded-[20px] relative z-[10] overflow-hidden">
                  <figure className="absolute z-[-1] w-[600px] md:w-[900px] xl:w-[1050px] top-[-75%] md:top-[-111%] left-[-65%] md:left-[-103%] rotate-[-41deg] select-none pointer-events-none">
                    <img src="./images/ns-img-522.png" alt="gradient-border" className="w-full h-full object-cover" />
                  </figure>

                  <figure className="p-8 bg-white dark:bg-background-5 rounded-xl space-y-6">
                    <figcaption className="space-y-2">
                      <h5>Know your goals</h5>
                      <p className="max-w-[250px]">
                        When you know your goals, you own your path.
                      </p>
                    </figcaption>

                    <div className="rounded-2xl overflow-hidden max-w-[400px] w-full">
                      <img
                        src="./images/ns-img-181.png"
                        alt="case icon"
                        className="w-full dark:hidden md:max-h-[300px] md:min-h-[300px]"
                      />
                      <img
                        src="./images/ns-img-dark-124.png"
                        alt="case icon"
                        className="w-full hidden dark:block md:max-h-[300px] md:min-h-[300px]"
                      />
                    </div>
                  </figure>
                </div>
              </div>

              {/* Card 4 */}
              <div
                className="stack-cards__item js-stack-cards__item lg:max-w-[483px] max-w-full max-sm:min-h-[433px]"
                style={{ transform: "translateY(72px)" }}
              >
                <div className="p-2.5 rounded-[20px] relative z-[10] overflow-hidden">
                  <figure className="absolute z-[-1] w-[600px] md:w-[900px] xl:w-[1050px] top-[-66%] md:top-[-97%] left-[-30%] md:left-[-60%] lg:left-[-48%] rotate-[245deg] select-none pointer-events-none">
                    <img src="./images/ns-img-501.png" alt="gradient-border" className="w-full h-full object-cover" />
                  </figure>

                  <figure className="p-8 bg-white dark:bg-background-5 rounded-xl space-y-6">
                    <figcaption className="space-y-2">
                      <h5>Use smart automation.</h5>
                      <p className="max-w-[250px]">
                        Let automation handle the routine, so you can focus on strategy.
                      </p>
                    </figcaption>

                    <div className="rounded-2xl overflow-hidden max-w-[400px] w-full">
                      <a href="./ai-agency-process.html">
                        <img
                          src="./images/ns-img-182.png"
                          alt="case icon"
                          className="w-full dark:hidden rounded-xl md:max-h-[300px] md:min-h-[300px]"
                        />
                        <img
                          src="./images/ns-img-dark-125.png"
                          alt="case icon"
                          className="w-full hidden dark:block rounded-xl md:max-h-[300px] md:min-h-[300px]"
                        />
                      </a>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GRID LAYOUT SECTION */}
        <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[160px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[160px] bg-white dark:bg-black">
          <div className="main-container">
            <div className="text-center space-y-5 mb-10 md:mb-[70px]">
              <span
                data-ns-animate=""
                data-delay="0.2"
                className="badge badge-green"
                style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px)" }}
              >
                Projects
              </span>
              <div className="space-y-3">
                <h2
                  data-ns-animate=""
                  data-delay="0.3"
                  style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px)" }}
                >
                  Proven AI solutions in action.
                </h2>
                <p
                  data-ns-animate=""
                  data-delay="0.4"
                  className="max-w-[680px] mx-auto"
                  style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px)" }}
                >
                  Discover how NextSaaS is transforming businesses with tailored automation strategies.
                  Explore our portfolio to see the real-world impact we&apos;ve made for clients across various
                  industries.
                </p>
              </div>
            </div>

            <div className="mb-14">
              <div className="grid grid-cols-12 gap-y-14 lg:gap-x-14">
                <div
                  data-ns-animate=""
                  data-delay="0.5"
                  className="col-span-12"
                  style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px)" }}
                >
                  <figure className="space-y-6">
                    <div className="relative w-full h-[300px] lg:h-[576px] rounded-[20px] overflow-hidden group cursor-pointer">
                      <img
                        src="/images/ns-img-183.png"
                        alt="portfolio"
                        className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 ease-in-out" />
                      <a
                        href="/ai-agency-service-details"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-8px)] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1/2 transition-all duration-500 ease-out btn btn-md btn-secondary hover:btn-primary dark:btn-accent transform-gpu"
                      >
                        <span>View Projects</span>
                      </a>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 md:justify-between">
                      <h3 className="text-heading-6 sm:text-heading-5">
                        AI-powered patient care <br className="hidden xl:block" />
                        solutions in healthcare.
                      </h3>
                      <p className="max-w-[257px] text-left md:text-right">
                        Empowering healthcare providers with smart scalable solutions.
                      </p>
                    </div>
                  </figure>
                </div>

                <div
                  data-ns-animate=""
                  data-delay="0.6"
                  className="col-span-12 lg:col-span-6"
                  style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px)" }}
                >
                  <figure className="space-y-6">
                    <div className="relative w-full h-[300px] lg:h-[576px] rounded-[20px] overflow-hidden group cursor-pointer">
                      <img
                        src="/images/ns-img-184.png"
                        alt="portfolio"
                        className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 ease-in-out" />
                      <a
                        href="/ai-agency-service-details"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-8px)] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1/2 transition-all duration-500 ease-out btn btn-md btn-secondary hover:btn-primary dark:btn-accent transform-gpu"
                      >
                        <span>View Projects</span>
                      </a>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 md:justify-between">
                      <h3 className="text-heading-6 sm:text-heading-5">
                        Retail analytics for <br className="hidden xl:block" />
                        better insights
                      </h3>
                      <p className="max-w-[257px] text-left md:text-right">
                        Understand shopper behavior and drive data-led decisions.
                      </p>
                    </div>
                  </figure>
                </div>

                <div
                  data-ns-animate=""
                  data-delay="0.7"
                  className="col-span-12 lg:col-span-6"
                  style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px)" }}
                >
                  <figure className="space-y-6">
                    <div className="relative w-full h-[300px] lg:h-[576px] rounded-[20px] overflow-hidden group cursor-pointer">
                      <img
                        src="/images/ns-img-185.png"
                        alt="portfolio"
                        className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 ease-in-out" />
                      <a
                        href="/ai-agency-service-details"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-8px)] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1/2 transition-all duration-500 ease-out btn btn-md btn-secondary hover:btn-primary dark:btn-accent transform-gpu"
                      >
                        <span>View Projects</span>
                      </a>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 md:justify-between">
                      <h3 className="text-heading-6 sm:text-heading-5">
                        Risk management tools for <br className="hidden xl:block" />
                        finance sectors
                      </h3>
                      <p className="max-w-[257px] text-left md:text-right">
                        Identify assess and mitigate financial risk confidently.
                      </p>
                    </div>
                  </figure>
                </div>

                <div
                  data-ns-animate=""
                  data-delay="0.8"
                  className="col-span-12"
                  style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px)" }}
                >
                  <figure className="space-y-6">
                    <div className="relative w-full h-[300px] lg:h-[576px] rounded-[20px] overflow-hidden group cursor-pointer">
                      <img
                        src="/images/ns-img-186.jpg"
                        alt="portfolio"
                        className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 ease-in-out" />
                      <a
                        href="/ai-agency-service-details"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-8px)] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1/2 transition-all duration-500 ease-out btn btn-md btn-secondary hover:btn-primary dark:btn-accent transform-gpu"
                      >
                        <span>View Projects</span>
                      </a>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 md:justify-between">
                      <h3 className="text-heading-6 sm:text-heading-5">
                        Proven results <br className="hidden xl:block" />
                        measurable outcomes
                      </h3>
                      <p className="max-w-[257px] text-left md:text-right">
                        Evidence-based outcomes that speak clearly.
                      </p>
                    </div>
                  </figure>
                </div>
              </div>
            </div>

            <div
              data-ns-animate=""
              data-delay="0.9"
              className="text-center"
              style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px)" }}
            >
              <a
                href="/ai-agency-services"
                className="btn btn-secondary btn-md hover:btn-primary dark:btn-transparent mx-auto"
              >
                <span>View portfolio</span>
              </a>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px]">
          <div className="main-container">
            <div className="text-center space-y-3 mb-10 md:mb-[70px]">
              <h2 data-ns-animate data-delay="0.2">
                Success you can measure.
              </h2>
              <p
                data-ns-animate
                data-delay="0.3"
                className="max-w-[680px] mx-auto"
              >
                Our numbers speak for themselves—consistent performance, happy clients,
                and cutting-edge delivery.
              </p>
            </div>

            <div
              data-ns-animate
              data-delay="0.4"
              className="flex flex-col max-md:gap-y-10 max-lg:gap-x-4 md:flex-row justify-between bg-secondary dark:bg-background-8 rounded-[20px] px-3 lg:px-[60px] py-14"
            >
              <div className="space-y-2 text-center">
                <h3 className="text-white flex items-center justify-center">
                  500+
                </h3>
                <p className="text-white/60">satisfied clients globally.</p>
              </div>

              <div className="space-y-2 text-center">
                <h3 className="text-white flex items-center justify-center">
                  1M+
                </h3>
                <p className="text-white/60">data points processed daily.</p>
              </div>

              <div className="space-y-2 text-center">
                <h3 className="text-white flex items-center justify-center">
                  95%
                </h3>
                <p className="text-white/60">customer retention rate.</p>
              </div>

              <div className="space-y-2 text-center">
                <h3 className="text-white flex items-center justify-center">
                  10+
                </h3>
                <p className="text-white/60">years of AI expertise.</p>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEW SECTION */}
        <section className="relative pt-[100px] pb-[100px] bg-white dark:bg-black bg-[url('/images/ns-img-169.png')] bg-no-repeat bg-cover bg-top">
          <div className="main-container">
            <div className="flex flex-col items-center text-center mb-10 md:mb-[70px]">
              <h2 data-ns-animate data-delay="0.2" className="max-w-[750px] mx-auto mb-4">
                What our clients are saying.
              </h2>
              <p data-ns-animate data-delay="0.3" className="max-w-[872px] mx-auto">
                Trusted by businesses worldwide to drive efficiency accuracy and results. Hear from our
                clients how NextSaaS helped them streamline operations save time and drive results through
                smart automation.
              </p>
            </div>

            <div data-ns-animate data-delay="0.4" data-offset="80" className="relative">
              <Swiper
                modules={[Autoplay]}
                className="swiper reviews-swiper"
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <div className="bg-background-2 dark:bg-background-5 rounded-[20px] relative overflow-hidden p-8 flex flex-col gap-y-8 z-0 mx-2 sm:mx-0">
                    <figure className="inline-block size-14 rounded-full bg-linear-[156deg,_#FFF_32.92%,_#FFB9A2_91%] overflow-hidden relative">
                      <Image src="/images/ns-avatar-7.png" alt="avatar" width={56} height={56} className="max-w-full"/>
                    </figure>
                    <p className="text-secondary/60 dark:text-accent/60 review-text">
                      "I built a fully functional app for my business in a weekend without a developer."
                    </p>
                    <div>
                      <p className="text-secondary dark:text-accent font-medium text-lg leading-[1.5] review-name">
                        John Smith
                      </p>
                      <p className="text-secondary/60 dark:text-accent/60 text-tagline-2 review-title">
                        Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                  <div className="bg-background-2 dark:bg-background-5 rounded-[20px] relative p-8 flex flex-col gap-y-8 z-0 overflow-hidden mx-2 sm:mx-0">
                    <figure className="inline-block size-14 rounded-full bg-linear-[156deg,_#FFF_32.92%,_#83E7EE_91%] overflow-hidden relative">
                      <Image src="/images/ns-avatar-1.png" alt="avatar" width={56} height={56} className="max-w-full"/>
                    </figure>
                    <p className="text-secondary/60 dark:text-accent/60 review-text">
                      "App Builder saved us thousands in dev costs. It's like magic."
                    </p>
                    <div>
                      <p className="text-secondary dark:text-accent font-medium text-lg leading-[1.5] review-name">
                        John Smith
                      </p>
                      <p className="text-secondary/60 dark:text-accent/60 text-tagline-2 review-title">
                        Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                  <div className="bg-background-2 dark:bg-background-5 rounded-[20px] relative overflow-hidden p-8 flex flex-col gap-y-8 z-0 mx-2 sm:mx-0">
                    <figure className="inline-block size-14 rounded-full bg-linear-[156deg,_#FFF_32.92%,_#FFB9A2_91%] overflow-hidden relative">
                      <Image src="/images/ns-avatar-2.png" alt="avatar" width={56} height={56} className="max-w-full"/>
                    </figure>
                    <p className="text-secondary/60 dark:text-accent/60 review-text">
                      "Discover the ultimate solution designed specifically for agencies and freelancers."
                    </p>
                    <div>
                      <p className="text-secondary dark:text-accent font-medium text-lg leading-[1.5] review-name">
                        John Smith
                      </p>
                      <p className="text-secondary/60 dark:text-accent/60 text-tagline-2 review-title">
                        Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide>
                  <div className="bg-background-2 dark:bg-background-5 rounded-[20px] relative overflow-hidden p-8 flex flex-col gap-y-8 z-0 mx-2 sm:mx-0">
                    <figure className="inline-block size-14 rounded-full bg-linear-[156deg,_#FFF_32.92%,_#83E7EE_91%] overflow-hidden relative">
                      <Image src="/images/ns-avatar-3.png" alt="avatar" width={56} height={56} className="max-w-full"/>
                    </figure>
                    <p className="text-secondary/60 dark:text-accent/60 review-text">
                      "The platform exceeded our expectations. Highly recommended for any business."
                    </p>
                    <div>
                      <p className="text-secondary dark:text-accent font-medium text-lg leading-[1.5] review-name">
                        Sarah Johnson
                      </p>
                      <p className="text-secondary/60 dark:text-accent/60 text-tagline-2 review-title">
                        Tech Solutions
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Slide 5 */}
                <SwiperSlide>
                  <div className="bg-background-2 dark:bg-background-5 rounded-[20px] relative p-8 flex flex-col gap-y-8 z-0 overflow-hidden mx-2 sm:mx-0">
                    <figure className="inline-block size-14 rounded-full bg-linear-[156deg,_#FFF_32.92%,_#C6F56F_91%] overflow-hidden relative">
                      <Image src="/images/ns-avatar-4.png" alt="avatar" width={56} height={56} className="max-w-full"/>
                    </figure>
                    <p className="text-secondary/60 dark:text-accent/60 review-text">
                      "Incredible performance and user experience. Game changer!"
                    </p>
                    <div>
                      <p className="text-secondary dark:text-accent font-medium text-lg leading-[1.5] review-name">
                        Mike Davis
                      </p>
                      <p className="text-secondary/60 dark:text-accent/60 text-tagline-2 review-title">
                        Digital Agency
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Slide 6 */}
                <SwiperSlide>
                  <div className="bg-background-2 dark:bg-background-5 rounded-[20px] relative p-8 flex flex-col gap-y-8 z-0 overflow-hidden mx-2 sm:mx-0">
                    <figure className="inline-block size-14 rounded-full bg-linear-[156deg,_#FFF_32.92%,_#FFB9A2_91%] overflow-hidden relative">
                      <Image src="/images/ns-avatar-5.png" alt="avatar" width={56} height={56} className="max-w-full"/>
                    </figure>
                    <p className="text-secondary/60 dark:text-accent/60 review-text">
                      "Amazing support and fast response. Highly satisfied with results."
                    </p>
                    <div>
                      <p className="text-secondary dark:text-accent font-medium text-lg leading-[1.5] review-name">
                        Emily Brown
                      </p>
                      <p className="text-secondary/60 dark:text-accent/60 text-tagline-2 review-title">
                        Startup Hub
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Slide 7 */}
                <SwiperSlide>
                  <div className="bg-background-2 dark:bg-background-5 rounded-[20px] relative p-8 flex flex-col gap-y-8 z-0 overflow-hidden mx-2 sm:mx-0">
                    <figure className="inline-block size-14 rounded-full bg-linear-[156deg,_#FFF_32.92%,_#83E7EE_91%] overflow-hidden relative">
                      <Image src="/images/ns-avatar-6.png" alt="avatar" width={56} height={56} className="max-w-full"/>
                    </figure>
                    <p className="text-secondary/60 dark:text-accent/60 review-text">
                      "Workflow automation saved us hours every week. Incredible experience!"
                    </p>
                    <div>
                      <p className="text-secondary dark:text-accent font-medium text-lg leading-[1.5] review-name">
                        Alex Turner
                      </p>
                      <p className="text-secondary/60 dark:text-accent/60 text-tagline-2 review-title">
                        Tech Co
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div data-ns-animate data-delay="0.5" className="text-center mt-10">
              <a
                href="./ai-agency-testimonial.html"
                className="btn btn-secondary btn-md inline-block dark:btn-transparent dark:border-primary-50 hover:btn-primary w-[85%] md:w-auto mx-auto"
              >
                <span>Read more testimonials</span>
              </a>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <div className="relative pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px]">
        <div className="main-container flex flex-col gap-[70px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span data-ns-animate data-delay="0.2" className="badge badge-green mb-5">
            Pricing plans
          </span>
          <h2 data-ns-animate data-delay="0.3" className="mb-3">
            Plans that grow with you.
          </h2>
          <p data-ns-animate data-delay="0.4" className="mb-5 md:mb-7">
            Flexible transparent pricing for businesses of every size and stage.
            <br className="hidden lg:block" />
            Choose a plan that scales with you. Whether you’re a startup or an enterprise, NextSaaS
            offers pricing options that fit your goals and budget.
          </p>

          {/* Toggle */}
          <div data-ns-animate data-delay="0.5">
            <label className="relative inline-flex items-center cursor-pointer z-[10]">
              <span className="mr-2.5 text-base text-secondary dark:text-accent font-normal">Monthly</span>
              <input
                type="checkbox"
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
                className="sr-only peer"
                aria-label="Toggle between monthly and yearly pricing"
              />
              <span className="relative w-13 after:bg-accent h-[28px] bg-secondary dark:bg-background-9 rounded-[34px] peer-checked:after:translate-x-[75%] after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:start-[5px] peer-checked:after:start-[4px] after:rounded-full after:h-6 after:w-6 after:transition-all before:absolute before:content-[''] before:border before:w-[calc(100%-10px)] before:h-[calc(100%-10px)] before:rounded-[20px] before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:border-accent/10 dark:before:border-stroke-7"></span>
              <span className="ms-2.5 text-base text-secondary dark:text-accent font-normal">Yearly</span>
            </label>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-start px-4 md:px-8 lg:px-16">
        {/* Card 1 */}
        <div className="bg-white dark:bg-black flex flex-col h-full gap-6 p-8 xl:py-[60px] xl:px-14 rounded-[20px] max-w-[604px] w-full">
          <div className="space-y-8">
            <div className="">
              <h5 className="mb-2 font-normal text-heading-5">Clear flexible pricing</h5>
              <div className="border-b border-stroke-2 dark:border-stroke-6 pb-8">
                <div className="mb-8">
                  <h4 className="text-heading-6 sm:text-heading-4 font-normal">
                    {isYearly ? "$1600 /Year" : "$130 /Month"}
                  </h4>
                </div>
                <a
                  href={isYearly ? "/contact-yearly" : "/contact-monthly"}
                  className="btn btn-md hover:btn-primary dark:btn-white-dark btn-white w-full block text-center before:content-none first-letter:uppercase"
                >
                  Get started
                </a>
              </div>
            </div>

            <ul className="relative list-none space-y-4">
              <li className="flex items-center gap-2.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="10" className="fill-secondary/40 dark:fill-accent/40" />
                  <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" className="fill-white dark:fill-black"/>
                </svg>
                <span className="text-secondary dark:text-accent/60 font-normal text-tagline-1">Core features meeting</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="10" className="fill-secondary/40 dark:fill-accent/40" />
                  <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" className="fill-white dark:fill-black"/>
                </svg>
                <span className="text-secondary dark:text-accent/60 font-normal text-tagline-1">UI/UX wireframes for main flows</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="10" className="fill-secondary/40 dark:fill-accent/40" />
                  <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" className="fill-white dark:fill-black"/>
                </svg>
                <span className="text-secondary dark:text-accent/60 font-normal text-tagline-1">Emphasize core functions</span>
              </li>
            </ul>
          </div>
        </div>

      {/* Card 2 */}
      <div className="bg-white dark:bg-black flex flex-col h-full gap-6 p-8 xl:py-[60px] xl:px-14 rounded-[20px] max-w-[604px] w-full">
        {/* Copy content from Card 1 and modify headings/pricing if needed */}
        <div className="space-y-8">
          <div>
            <h5 className="mb-2 font-normal text-heading-5">Advanced analytics features</h5>
            <div className="border-b border-stroke-2 dark:border-stroke-6 pb-8">
              <div className="mb-8">
                <h4 className="text-heading-6 sm:text-heading-4 font-normal">
                  {isYearly ? "$2400 /Year" : "$200 /Month"}
                </h4>
              </div>
              <a
                href={isYearly ? "/contact-yearly" : "/contact-monthly"}
                className="btn btn-md hover:btn-primary dark:btn-white-dark btn-white w-full block text-center before:content-none first-letter:uppercase"
              >
                Get started
              </a>
            </div>
          </div>

          <ul className="relative list-none space-y-4">
            <li className="flex items-center gap-2.5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="10" className="fill-secondary/40 dark:fill-accent/40" />
                <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" className="fill-white dark:fill-black"/>
              </svg>
              <span className="text-secondary dark:text-accent/60 font-normal text-tagline-1">Data dashboards included</span>
            </li>
            <li className="flex items-center gap-2.5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="10" className="fill-secondary/40 dark:fill-accent/40" />
                <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" className="fill-white dark:fill-black"/>
              </svg>
              <span className="text-secondary dark:text-accent/60 font-normal text-tagline-1">Priority support for clients</span>
            </li>
            <li className="flex items-center gap-2.5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="10" className="fill-secondary/40 dark:fill-accent/40" />
                <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" className="fill-white dark:fill-black"/>
              </svg>
              <span className="text-secondary dark:text-accent/60 font-normal text-tagline-1">Advanced reporting tools</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white dark:bg-black flex flex-col h-full gap-6 p-8 xl:py-[60px] xl:px-14 rounded-[20px] max-w-[604px] w-full">
        {/* Copy content from Card 1 or Card 2 and modify headings/pricing if needed */}
        <div className="space-y-8">
          <div>
            <h5 className="mb-2 font-normal text-heading-5">Enterprise plan</h5>
            <div className="border-b border-stroke-2 dark:border-stroke-6 pb-8">
              <div className="mb-8">
                <h4 className="text-heading-6 sm:text-heading-4 font-normal">
                  {isYearly ? "$3600 /Year" : "$300 /Month"}
                </h4>
              </div>
              <a
                href={isYearly ? "/contact-yearly" : "/contact-monthly"}
                className="btn btn-md hover:btn-primary dark:btn-white-dark btn-white w-full block text-center before:content-none first-letter:uppercase"
              >
                Get started
              </a>
            </div>
          </div>

          <ul className="relative list-none space-y-4">
            <li className="flex items-center gap-2.5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="10" className="fill-secondary/40 dark:fill-accent/40" />
                <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" className="fill-white dark:fill-black"/>
              </svg>
              <span className="text-secondary dark:text-accent/60 font-normal text-tagline-1">All advanced analytics</span>
            </li>
            <li className="flex items-center gap-2.5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="10" className="fill-secondary/40 dark:fill-accent/40" />
                <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" className="fill-white dark:fill-black"/>
              </svg>
              <span className="text-secondary dark:text-accent/60 font-normal text-tagline-1">Dedicated account manager</span>
            </li>
            <li className="flex items-center gap-2.5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="10" className="fill-secondary/40 dark:fill-accent/40" />
                <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" className="fill-white dark:fill-black"/>
              </svg>
              <span className="text-secondary dark:text-accent/60 font-normal text-tagline-1">Custom integrations</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
      </div>
    </div>
     
        <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[76px] lg:pt-[76px] bg-secondary dark:bg-background-5">
        <div className="main-container">
          <div className="text-center max-w-[690px] mx-auto">
            <span
              data-ns-animate=""
              data-delay="0.2"
              className="badge badge-blur mb-5 text-ns-yellow"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              Get started
            </span>

            <h2
              data-ns-animate=""
              data-delay="0.3"
              className="mb-3 text-white"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              Let’s build a smarter tomorrow.
            </h2>

            <p
              data-ns-animate=""
              data-delay="0.4"
              className="mb-6 text-white/60"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              Start your aI journey with NextSaaS and transform the way you
              work—forever.
            </p>

            <div
              data-ns-animate=""
              data-delay="0.5"
              className="md:inline-block text-center"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <a
                href="./ai-agency-contact.html"
                className="btn btn-primary btn-md w-[85%] md:w-auto hover:btn-white dark:hover:btn-accent"
              >
                <span>Contact us now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
