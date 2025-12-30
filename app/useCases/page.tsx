"use client";
import React from "react";
import Header from "../header";
import Footer from "../footer";
import Image from "next/image";
import GetStarted from "./GetStarted"
const page = () => {
  return (
    <>
      <Header />
      <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] xl:pt-[180px] md:pt-42 sm:pt-36 pt-32">
        <div className="main-container">
          {/* Heading */}
          <div className="space-y-3 mb-14 md:mb-[70px] max-w-[660px] mx-auto text-center">
            <h2 data-ns-animate data-delay="0.1">
              Built for your business. Adapted to your workflow.
            </h2>

            <p data-ns-animate data-delay="0.2">
              NextSaaS is designed to serve a wide range of teams and
              industries. Whether you’re managing data, scaling operations,
              optimizing finances, or streamlining customer experiences—NextSaaS
              is the platform that grows with you.
            </p>
          </div>

          {/* Image */}
          <figure
            data-ns-animate
            data-delay="0.3"
            className="w-full rounded-[20px] overflow-hidden"
          >
            <Image
              src="/images/ns-img-353.png"
              alt="feature-intro"
              width={1200}
              height={600}
              className="w-full h-auto object-cover object-center"
              priority
            />
          </figure>
        </div>
      </section>

      <section className="pt-[20px] md:pt-[50px] lg:pt-[70px] pb-[100px] md:pb-[150px] lg:pb-[200px]">
        <div className="main-container">
          <div className="space-y-[70px]">
            {/* finance and operation */}
            <div className="space-y-3">
              <h3
                data-ns-animate=""
                data-delay="0.1"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                Finance and operation
              </h3>
              <p
                data-ns-animate=""
                data-delay="0.2"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                NextSaaS is designed to serve a wide range of teams and
                industries. Whether you're managing data, scaling operations,
                optimizing finances, or streamlining customer
                experiences—NextSaaS is the platform that grows with you.
              </p>
            </div>

            {/* operation cards */}
            <div className="grid grid-cols-12 items-center justify-center gap-8">
              {/* card one */}
              <div
                data-ns-animate=""
                data-delay="0.3"
                className="xl:w-[300px] w-full rounded-[20px] p-2 bg-white dark:bg-background-7 col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 relative overflow-hidden"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                {/* border img */}
                <figure className="absolute rotate-[82deg] size-[800px] overflow-hidden top-[-95%] left-[-85%] select-none pointer-events-none">
                  <img
                    src="./images/ns-img-523.png"
                    alt="border-img"
                    className="size-full"
                  />
                </figure>

                {/* card content */}
                <div className="p-8 space-y-6 relative z-10 bg-background-1 dark:bg-background-6 rounded-xl">
                  <div className="inline-block">
                    <span className="ns-shape-19 text-[52px] text-secondary dark:text-accent"></span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-heading-5">
                      Real-time expense tracking
                    </h4>
                    <p>Launch your MVP quickly and validate your idea</p>
                  </div>
                </div>
              </div>

              {/* card two */}
              <div
                data-ns-animate=""
                data-delay="0.4"
                className="xl:w-[300px] w-full rounded-[20px] p-2 bg-white dark:bg-background-7 col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 relative overflow-hidden"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                {/* border img */}
                <figure className="absolute rotate-[82deg] size-[800px] overflow-hidden top-[-95%] left-[-85%] select-none pointer-events-none">
                  <img
                    src="./images/ns-img-523.png"
                    alt="border-img"
                    className="size-full"
                  />
                </figure>

                {/* card content */}
                <div className="p-8 space-y-6 relative z-10 bg-background-1 dark:bg-background-6 rounded-xl">
                  <div className="inline-block">
                    <span className="ns-shape-35 text-[52px] text-secondary dark:text-accent"></span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-heading-5">
                      Forecasting &amp; scenario planning
                    </h4>
                    <p>Automate workflows and streamline operations</p>
                  </div>
                </div>
              </div>

              {/* card three */}
              <div
                data-ns-animate=""
                data-delay="0.5"
                className="xl:w-[300px] w-full rounded-[20px] p-2 bg-white dark:bg-background-7 col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 relative overflow-hidden"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                {/* border img */}
                <figure className="absolute rotate-[82deg] size-[800px] overflow-hidden top-[-95%] left-[-85%] select-none pointer-events-none">
                  <img
                    src="./images/ns-img-523.png"
                    alt="border-img"
                    className="size-full"
                  />
                </figure>

                {/* card content */}
                <div className="p-8 space-y-6 relative z-10 bg-background-1 dark:bg-background-6 rounded-xl">
                  <div className="inline-block">
                    <span className="ns-shape-4 text-[52px] text-secondary dark:text-accent"></span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-heading-5">
                      Centralized financial dashboards
                    </h4>
                    <p>Deliver custom apps to your clients with ease</p>
                  </div>
                </div>
              </div>

              {/* card four */}
              <div
                data-ns-animate=""
                data-delay="0.6"
                className="xl:w-[300px] w-full rounded-[20px] p-2 bg-white dark:bg-background-7 col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 relative overflow-hidden"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                {/* border img */}
                <figure className="absolute rotate-[82deg] size-[800px] overflow-hidden top-[-95%] left-[-85%] select-none pointer-events-none">
                  <img
                    src="./images/ns-img-523.png"
                    alt="border-img"
                    className="size-full"
                  />
                </figure>

                {/* card content */}
                <div className="p-8 space-y-6 relative z-10 bg-background-1 dark:bg-background-6 rounded-xl">
                  <div className="inline-block">
                    <span className="ns-shape-32 text-[52px] text-secondary dark:text-accent"></span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-heading-5">
                      Centralized financial dashboards
                    </h4>
                    <p>Deliver custom apps to your clients with ease</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product & development teams */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h3
                  data-ns-animate=""
                  data-delay="0.1"
                  className="text-heading-4"
                  id="product-teams"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  Product &amp; development teams
                </h3>
                <p
                  data-ns-animate=""
                  data-delay="0.2"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <span className="text-secondary dark:text-accent">
                    Collaborate better. Launch faster. Iterate smarter.
                  </span>
                  <br />
                  From roadmap planning to feature tracking, product teams use
                  NextSaaS to keep everyone aligned and deliver with confidence.
                </p>
              </div>

              {/* key benefits */}
              <div className="space-y-2">
                <h4
                  data-ns-animate=""
                  data-delay="0.3"
                  className="text-tagline-1 text-secondary dark:text-accent"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  Key Benefits
                </h4>
                <ul>
                  <li
                    data-ns-animate=""
                    data-delay="0.4"
                    className="flex items-center gap-2"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    <span
                      className="inline-block size-1.5 rounded-full bg-secondary dark:bg-accent"
                      aria-hidden="true"
                    ></span>
                    <p>Visual product roadmaps</p>
                  </li>
                  <li
                    data-ns-animate=""
                    data-delay="0.5"
                    className="flex items-center gap-2"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    <span
                      className="inline-block size-1.5 rounded-full bg-secondary dark:bg-accent"
                      aria-hidden="true"
                    ></span>
                    <p>Feature release tracking</p>
                  </li>

                  <li
                    data-ns-animate=""
                    data-delay="0.6"
                    className="flex items-center gap-2"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    <span
                      className="inline-block size-1.5 rounded-full bg-secondary dark:bg-accent"
                      aria-hidden="true"
                    ></span>
                    <p>Integration with issue management tools</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Marketing teams */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h3
                  data-ns-animate=""
                  data-delay="0.1"
                  className="text-heading-4"
                  id="marketing-teams"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  Marketing teams
                </h3>
                <p
                  data-ns-animate=""
                  data-delay="0.2"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <span className="text-secondary dark:text-accent">
                    Plan campaigns. Analyze results. Drive ROI.
                  </span>
                  <br />
                  NextSaaS helps marketers connect strategy to results, with
                  built-in analytics and collaborative tools that simplify
                  workflows.
                </p>
              </div>

              {/* key benefits */}
              <div className="space-y-2">
                <h4
                  data-ns-animate=""
                  data-delay="0.3"
                  className="text-tagline-1 text-secondary dark:text-accent"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  Key Benefits
                </h4>
                <ul>
                  <li
                    data-ns-animate=""
                    data-delay="0.4"
                    className="flex items-center gap-2"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    <span
                      className="inline-block size-1.5 rounded-full bg-secondary dark:bg-accent"
                      aria-hidden="true"
                    ></span>
                    <p>Campaign tracking dashboards</p>
                  </li>
                  <li
                    data-ns-animate=""
                    data-delay="0.5"
                    className="flex items-center gap-2"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    <span
                      className="inline-block size-1.5 rounded-full bg-secondary dark:bg-accent"
                      aria-hidden="true"
                    ></span>
                    <p>Lead funnel visibility</p>
                  </li>

                  <li
                    data-ns-animate=""
                    data-delay="0.6"
                    className="flex items-center gap-2"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    <span
                      className="inline-block size-1.5 rounded-full bg-secondary dark:bg-accent"
                      aria-hidden="true"
                    ></span>
                    <p>Cross-channel performance analytics</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Customer support & success */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h3
                  data-ns-animate=""
                  data-delay="0.1"
                  className="text-heading-4"
                  id="customer-support"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  Customer support &amp; success
                </h3>
                <p
                  data-ns-animate=""
                  data-delay="0.2"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <span className="text-secondary dark:text-accent">
                    Deliver great experiences at every stage.
                  </span>
                  <br />
                  Manage onboarding, support interactions, and customer health
                  in one place.
                </p>
              </div>

              {/* key benefits */}
              <div className="space-y-2">
                <h4
                  data-ns-animate=""
                  data-delay="0.3"
                  className="text-tagline-1 text-secondary dark:text-accent"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  Key Benefits
                </h4>
                <ul>
                  <li
                    data-ns-animate=""
                    data-delay="0.4"
                    className="flex items-center gap-2"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    <span
                      className="inline-block size-1.5 rounded-full bg-secondary dark:bg-accent"
                      aria-hidden="true"
                    ></span>
                    <p>Customer lifecycle tracking</p>
                  </li>
                  <li
                    data-ns-animate=""
                    data-delay="0.5"
                    className="flex items-center gap-2"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    <span
                      className="inline-block size-1.5 rounded-full bg-secondary dark:bg-accent"
                      aria-hidden="true"
                    ></span>
                    <p>Shared account notes</p>
                  </li>

                  <li
                    data-ns-animate=""
                    data-delay="0.6"
                    className="flex items-center gap-2"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    <span
                      className="inline-block size-1.5 rounded-full bg-secondary dark:bg-accent"
                      aria-hidden="true"
                    ></span>
                    <p>Retention and churn alerts</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Founders & executives */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h3
                  data-ns-animate=""
                  data-delay="0.1"
                  className="text-heading-4"
                  id="founders"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  Founders &amp; executives
                </h3>
                <p
                  data-ns-animate=""
                  data-delay="0.2"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <span className="text-secondary dark:text-accent">
                    Make data-driven decisions without the noise.
                  </span>
                  <br />
                  NextSaaS gives leadership teams the visibility they need
                  across every department—all in one unified view.
                </p>
              </div>

              {/* key benefits */}
              <div className="space-y-2">
                <h4
                  data-ns-animate=""
                  data-delay="0.3"
                  className="text-tagline-1 text-secondary dark:text-accent"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  Key Benefits
                </h4>
                <ul>
                  <li
                    data-ns-animate=""
                    data-delay="0.4"
                    className="flex items-center gap-2"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    <span
                      className="inline-block size-1.5 rounded-full bg-secondary dark:bg-accent"
                      aria-hidden="true"
                    ></span>
                    <p>Executive reporting dashboards</p>
                  </li>
                  <li
                    data-ns-animate=""
                    data-delay="0.5"
                    className="flex items-center gap-2"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    <span
                      className="inline-block size-1.5 rounded-full bg-secondary dark:bg-accent"
                      aria-hidden="true"
                    ></span>
                    <p>Company-wide metrics overview</p>
                  </li>

                  <li
                    data-ns-animate=""
                    data-delay="0.6"
                    className="flex items-center gap-2"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    <span
                      className="inline-block size-1.5 rounded-full bg-secondary dark:bg-accent"
                      aria-hidden="true"
                    ></span>
                    <p>Custom views for stakeholders</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Freelancers & small teams */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h3
                  data-ns-animate=""
                  data-delay="0.1"
                  className="text-heading-4"
                  id="freelancers"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  Freelancers &amp; small teams
                </h3>
                <p
                  data-ns-animate=""
                  data-delay="0.2"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <span className="text-secondary dark:text-accent">
                    Stay organized. Scale without stress.
                  </span>
                  <br />
                  Even small teams can get big results. Use NextSaaS to manage
                  your pipeline, track progress, and automate repetitive tasks.
                </p>
              </div>

              {/* key benefits */}
              <div className="space-y-2">
                <h4
                  data-ns-animate=""
                  data-delay="0.3"
                  className="text-tagline-1 text-secondary dark:text-accent"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  Key Benefits
                </h4>
                <ul>
                  <li
                    data-ns-animate=""
                    data-delay="0.4"
                    className="flex items-center gap-2"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    <span
                      className="inline-block size-1.5 rounded-full bg-secondary dark:bg-accent"
                      aria-hidden="true"
                    ></span>
                    <p>Task and client tracking</p>
                  </li>
                  <li
                    data-ns-animate=""
                    data-delay="0.5"
                    className="flex items-center gap-2"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    <span
                      className="inline-block size-1.5 rounded-full bg-secondary dark:bg-accent"
                      aria-hidden="true"
                    ></span>
                    <p>Custom workflows</p>
                  </li>

                  <li
                    data-ns-animate=""
                    data-delay="0.6"
                    className="flex items-center gap-2"
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    <span
                      className="inline-block size-1.5 rounded-full bg-secondary dark:bg-accent"
                      aria-hidden="true"
                    ></span>
                    <p>Easy setup, no technical skills needed</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* How to manage or delete your data */}
            <div className="space-y-6">
              <h3
                data-ns-animate=""
                data-delay="0.1"
                className="text-heading-4"
                id="data-management"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                How to manage or delete your data
              </h3>
              <ul className="space-y-3">
                <li
                  data-ns-animate=""
                  data-delay="0.4"
                  className="flex items-center gap-2"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <span
                    className="inline-block size-1.5 rounded-full bg-secondary dark:bg-accent"
                    aria-hidden="true"
                  ></span>
                  <p>
                    You can update your profile details anytime from your
                    account dashboard.
                  </p>
                </li>
                <li
                  data-ns-animate=""
                  data-delay="0.5"
                  className="flex items-center gap-2"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <span
                    className="inline-block size-1.5 rounded-full bg-secondary dark:bg-accent"
                    aria-hidden="true"
                  ></span>
                  <p>
                    To request a complete data deletion or data export, simply
                    send an email to:{" "}
                    <span className="text-secondary">support@nextsaas.com</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

<GetStarted/>


      <Footer />
      
    </>
  );
};

export default page;
