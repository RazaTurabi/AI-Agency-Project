"use client";

import React from 'react'
import Footer from '../footer'
import Header from '../header'
import Image from "next/image";
import Link from "next/link";
import "./style.css"

const reviews = [
  {
    name: "Sarah Johnson",
    role: "CEO, Nuvio",
    avatar: "/images/ns-avatar-1.png",
  },
  {
    name: "Michael Chen",
    role: "CEO, Nuvio",
    avatar: "/images/ns-avatar-3.png",
  },
  {
    name: "Emily Rodriguez",
    role: "CEO, Nuvio",
    avatar: "/images/ns-avatar-4.png",
  },
  {
    name: "David Kim",
    role: "CEO, Nuvio",
    avatar: "/images/ns-avatar-5.png",
  },
  {
    name: "Rachel Thompson",
    role: "CEO, Nuvio",
    avatar: "/images/ns-avatar-6.png",
  },
];

const page = () => {
  return (
    <>
    <Header/>
    <section className="pb-[100px] overflow-hidden xl:pt-[180px] md:pt-42 sm:pt-36 pt-32">
      <div className="main-container">
        {/* Heading */}
        <div className="text-center space-y-3 mb-14">
          <h2
            data-ns-animate
            data-delay="0.3"
            className="max-w-[742px] mx-auto"
          >
            Everything you need to succeed. All in one platform.
          </h2>

          <p
            data-ns-animate
            data-delay="0.4"
            className="max-w-[482px] mx-auto"
          >
            NextSaaS gives you powerful, easy-to-use tools to help you grow,
            optimize, and scale your business—without the overwhelm.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 max-md:gap-y-8 md:gap-8">
          {[
            {
              img: "/images/ns-img-67.png",
              title: "Tailored billing solutions",
              alt: "Trusted by 20k+",
              delay: "0.5",
            },
            {
              img: "/images/ns-img-68.png",
              title: "Inventory oversight",
              alt: "Inventory oversight",
              delay: "0.6",
            },
            {
              img: "/images/ns-img-69.png",
              title: "Smartphone application",
              alt: "Smartphone application",
              delay: "0.7",
            },
            {
              img: "/images/ns-img-70.png",
              title: "Structured expenses",
              alt: "Structured expenses",
              delay: "0.8",
            },
            {
              img: "/images/ns-img-71.png",
              title: "Sort receipts",
              alt: "Sort receipts",
              delay: "0.9",
            },
            {
              img: "/images/ns-img-72.png",
              title: "Analytics and reports",
              alt: "Analytics and reports",
              delay: "1",
            },
          ].map((item, index) => (
            <div
              key={index}
              data-ns-animate
              data-delay={item.delay}
              className="col-span-12 md:col-span-6 lg:col-span-4 bg-background-2 dark:bg-background-5 space-y-6 p-6 rounded-[20px]"
            >
              <figure className="max-w-[360px] w-full">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={360}
                  height={240}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </figure>

              <div className="space-y-1">
                <h3 className="text-heading-5">{item.title}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Quis sed duis duis
                  purus quisque.
                </p>
              </div>
            </div>
          ))}
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

{/* Innovationsection */}



    <section className="pt-[100px]">
      <div
        className="main-container"
        data-ns-animate
        data-delay="0.2"
      >
        <div className="relative z-10">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10 rounded-[20px] overflow-hidden">
            <Image
              src="/images/ns-img-14.png"
              alt="about bg"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="py-14 lg:px-11 px-6 grid max-lg:grid-cols-1 grid-cols-2 max-sm:gap-10 gap-5">
            {/* Left Content */}
            <div className="max-w-[500px]">
              <h2 className="text-accent mb-8 sm:text-heading-5 text-heading-6">
                We appreciate our valued clients and strive to provide them with
                the best service possible.
              </h2>

              <Link
                href="/ai-agency-services"
                className="section-button btn-accent dark:btn-dark hover:btn-primary border-0 btn-md btn inline-flex"
              >
                <span>Get started</span>
              </Link>
            </div>

            {/* List */}
            <div>
              <ul className="space-y-4">
                {[
                  "Innovative startups and ambitious scale-ups are redefining",
                  "Enterprise teams are the backbone of large organizations",
                  "Agencies and consultants play a crucial role in helping businesses",
                  "Finance, marketing, and product teams collaborate to create",
                ].map((text, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg
                      className="size-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 10.0002C0 4.47729 4.47717 0 10 0C15.5229 0 20.0001 4.47729 20.0001 10.0002C20.0001 15.523 15.5229 20.0003 10 20.0003C4.47717 20.0003 0 15.523 0 10.0002Z"
                        fill="#FCFCFC"
                        fillOpacity="0.17"
                      />
                      <path
                        d="M14.125 7.375L8.875 12.6248L6.25 10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-accent"
                      />
                    </svg>

                    <span className="text-accent">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

  {/* feature v2 */}

 
    <section className="pt-[200px] pb-28">
      <div className="main-container flex flex-col-reverse lg:flex-row items-center gap-y-12 gap-x-24 overflow-hidden">
        
        {/* LEFT */}
        <div className="md:flex-1 relative flex justify-start w-full lg:w-auto">
          <Image
            data-ns-animate
            data-delay="0.2"
            src="/images/ns-img-73.png"
            alt="Finance Hero"
            width={450}
            height={520}
            className="w-full max-w-[450px] h-auto"
          />

          {/* Counter Box */}
          <div
            data-ns-animate
            data-delay="0.3"
            data-direction="right"
            data-offset="90"
            className="absolute top-[49%] right-[15%] bg-ns-yellow p-4 rounded-2xl text-heading-4 max-w-[219px] max-h-[70px] flex items-center justify-center"
          >
            $245,450
          </div>

          {/* Floating Card */}
          <figure
            data-ns-animate
            data-delay="0.5"
            data-direction="right"
            data-offset="100"
            className="rounded-xl max-w-[186px] w-full overflow-hidden shadow-10 absolute bottom-[15%] right-[17%]"
          >
            <Image
              src="/images/ns-img-356.png"
              alt="Finance Card"
              width={186}
              height={140}
              className="w-full h-full object-cover"
            />
          </figure>
        </div>

        {/* RIGHT */}
        <div className="md:flex-1 flex flex-col lg:items-start lg:text-left">
          <h2 data-ns-animate data-delay="0.2" className="mb-3">
            Designed to deliver Tangible outcomes
          </h2>

          <p data-ns-animate data-delay="0.3" className="mb-6">
            Take control of your finances with us and experience the confidence
            that comes with smart money management. Whether you're looking to
            budget better
          </p>

          <ul className="mb-10 md:mb-14 space-y-2 md:space-y-3.5">
            {[
              "Clarity Over Clutter",
              "People Before Features",
              "Security as a Standard",
            ].map((item, index) => (
              <li
                key={index}
                data-ns-animate
                data-delay={0.4 + index * 0.1}
                className="text-tagline-1 font-medium flex items-center gap-3 dark:text-accent"
              >
                <span className="bg-secondary dark:bg-accent/10 rounded-full size-[18px] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    fill="none"
                  >
                    <path
                      d="M4.31661 7.00605L9.74905 1.67144C10.0836 1.3459 10.0836 0.819702 9.74905 0.494158C9.41446 0.168614 8.87363 0.168614 8.53904 0.494158L3.7116 5.24012L1.46096 3.03807C1.12636 2.71253 0.585538 2.71253 0.250945 3.03807C-0.0836483 3.36362 -0.0836483 3.88982 0.250945 4.21536L3.1066 7.00605C3.27347 7.16841 3.49253 7.25 3.7116 7.25C3.93067 7.25 4.14974 7.16841 4.31661 7.00605Z"
                      fill="white"
                    />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div data-ns-animate data-delay="0.7">
            <a
              href="/ai-agency-team"
              className="btn btn-secondary hover:btn-white dark:btn-white-dark btn-xl block md:inline-block w-full md:w-auto mx-auto"
            >
              <span>Get started</span>
            </a>
          </div>
        </div>
      </div>
    </section>

{/* reviews */}



    <section className="pt-[100px] pb-[200px] space-y-[70px] bg-background-2 overflow-hidden">
      {/* Header */}
      <div className="main-container">
        <div className="space-y-5 max-w-[804px] mx-auto text-center mb-10 md:mb-8 lg:mb-14">
          <span
            data-ns-animate
            data-delay="0.1"
            className="badge badge-cyan"
          >
            Reviews
          </span>

          <div className="space-y-3">
            <h2 data-ns-animate data-delay="0.2">
              Hear from our customers about their experiences with us
            </h2>
            <p data-ns-animate data-delay="0.3">
              Hear from our customers about their experiences with us and discover the impact we’ve made
          through their own words. From seamless onboarding to exceptional support and tangible
          result
            </p>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div>
        <div
          data-ns-animate
          data-delay="0.4"
          className="cards-marquee-container horizontal-marquee smooth card"
          data-animate="true"
          
        >
          <div className="horizontal-marquee-inner">
            {[...Array(3)].map((_, loopIndex) => (
              <div
                key={loopIndex}
                className="flex items-center gap-8"
                aria-hidden={loopIndex > 0}
              >
                {reviews.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-background-1/90 hover:bg-white dark:bg-background-5 dark:hover:bg-background-8 hover:shadow-1 transition-colors duration-300 ease-linear rounded-[20px] p-8 min-w-[358px] max-w-[358px] shrink-0 w-full ${
                      index === 0 ? "ml-8" : ""
                    }`}
                  >
                    <p className="text-wrap">
                      Amazing customer support and powerful features — Nuvio
                      has transformed the way we manage our workflows!
                    </p>

                    <div className="my-8 h-px w-full bg-stroke-4 dark:bg-stroke-8" />

                    <div className="flex items-center gap-3">
                      <figure className="size-12 rounded-full overflow-hidden">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </figure>

                      <div>
                        <h3 className="text-tagline-1 font-medium text-secondary dark:text-accent">
                          {item.name}
                        </h3>
                        <p className="text-tagline-2 text-secondary/60 dark:text-accent/60">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

{/* ctav1 */}

<section
  className="py-[50px] md:py-20 lg:py-28 dark:bg-background-6 bg-white"
  aria-label="Use Case Overview"
>
  <div className="main-container">
    <div className="flex items-center flex-col lg:flex-row justify-between">
      
      {/* LEFT CONTENT */}
      <div className="xl:max-w-[650px] lg:max-w-[476px] max-[400px]:max-w-[300px] w-full space-y-5 text-center lg:text-left">
        
        {/* Badge */}
        <span
          data-ns-animate
          data-delay="0.3"
          className="badge badge-green hidden"
        >
          Badge Text
        </span>

        <div className="space-y-3">
          <h2
            data-ns-animate
            data-delay="0.4"
            className="text-secondary dark:text-accent text-heading-5 sm:text-heading-4 lg:text-heading-2"
          >
            Build a complete website using the{" "}
            <span className="text-primary-500">
              assistance
            </span>
          </h2>

          <p data-ns-animate data-delay="0.5">
            Start your free trial today and see your ideas come to life easily
            and creatively.
          </p>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="lg:basis-[466px] space-y-6 md:ml-0 xl:ml-[100px] pt-[40px] lg:pt-[67px] w-full sm:w-[80%] md:w-[60%]">
        
        {/* FORM */}
        <form
          data-ns-animate
          data-delay="0.6"
          className="flex items-center flex-col gap-5 sm:flex-row justify-start lg:gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="px-[18px] shadow-1 h-12 py-3 placeholder:text-secondary/50 rounded-full border border-stroke-1 lg:max-w-[340px] md:w-[71%] w-full dark:border-stroke-7 dark:placeholder:text-accent/60 focus:outline-none focus:border-primary-600 dark:focus:border-primary-400 dark:text-accent"
          />

          <button
            type="submit"
            className="btn btn-md btn-primary h-12 w-full sm:w-[28%] lg:w-auto hover:btn-secondary dark:hover:btn-accent"
          >
            Get started
          </button>
        </form>

        {/* FEATURES */}
        <ul className="flex flex-row items-center justify-center gap-x-4 sm:gap-x-6 gap-y-5 lg:justify-start">
          {[
            "No credit card required",
            "14-Day free trial",
          ].map((text, i) => (
            <li
              key={i}
              data-ns-animate
              data-delay={0.7 + i * 0.1}
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
                  <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605Z" />
                </svg>
              </span>
              <p className="text-tagline-3 sm:text-tagline-2">{text}</p>
            </li>
          ))}
        </ul>

      </div>
    </div>
  </div>
</section>
    <Footer/>
    </>
  )
}

export default page