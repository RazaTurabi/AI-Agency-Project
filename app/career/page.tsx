"use client";

import React from 'react'
import Header from '../header'
import Footer from '../footer'

import Link from "next/link";
import Image from "next/image";

const features = [
    {
      title: "Smart expense tracking",
      description: "Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.",
      lightImg: "/images/ns-img-67.png",
      darkImg: "/images/ns-img-dark-44.png",
    },
    {
      title: "Real-time analytics",
      description: "Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.",
      lightImg: "/images/ns-img-68.png",
      darkImg: "/images/ns-img-dark-45.png",
    },
    {
      title: "Secure payment processing",
      description: "Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.",
      lightImg: "/images/ns-img-69.png",
      darkImg: "/images/ns-img-dark-46.png",
    },
    {
      title: "Automated budgeting tools",
      description: "Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.",
      lightImg: "/images/ns-img-70.png",
      darkImg: "/images/ns-img-dark-47.png",
    },
    {
      title: "Multi-currency support",
      description: "Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.",
      lightImg: "/images/ns-img-71.png",
      darkImg: "/images/ns-img-dark-48.png",
    },
    {
      title: "Investment portfolio tracking",
      description: "Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.",
      lightImg: "/images/ns-img-72.png",
      darkImg: "/images/ns-img-dark-49.png",
    },
  ];


    const positions = [
    {
      location: "New York",
      type: "Full-time",
      title: "Digital is making place in funds back-office",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.",
      link: "/ai-agency-career-details.html",
    },
    {
      location: "Germany",
      type: "Full-time",
      title: "Systems administrator",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.",
      link: "/ai-agency-career-details.html",
    },
    {
      location: "Australia",
      type: "Remote",
      title: "Technical project manager",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.",
      link: "/ai-agency-career-details.html",
    },
    {
      location: "Canada",
      type: "Remote",
      title: "Marketing lead",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.",
      link: "/ai-agency-career-details.html",
    },
    {
      location: "London",
      type: "Part-time",
      title: "Cybersecurity analyst",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.",
      link: "/ai-agency-career-details.html",
    },
    {
      location: "New York",
      type: "Full-time",
      title: "Information security specialist",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.",
      link: "/ai-agency-career-details.html",
    },
  ];


const page = () => {
  return (
    <>
    <Header/>

 <section className="pb-[100px] xl:pb-[100px] xl:pt-[180px] md:pt-42 sm:pt-36 pt-32">
      <div className="main-container">
        {/* Heading */}
        <div className="text-center space-y-3 mb-[70px]">
          <h2
            data-ns-animate=""
            data-delay="0.3"
            style={{
              opacity: 1,
              filter: "blur(0px)",
              transform: "translate(0px, 0px) rotate(0deg) scale(1)"
            }}
          >
            We're building the ruture of NextSaaS— <br className="hidden md:block" />
            come build It with us.
          </h2>
        </div>

        {/* Banner Image */}
        <figure
          className="mb-18"
          data-ns-animate=""
          data-delay="0.4"
          style={{
            opacity: 1,
            filter: "blur(0px)",
            transform: "translate(0px, 0px) rotate(0deg) scale(1)"
          }}
        >
          <img
            src="/images/ns-img-379.png"
            alt="banner-image"
            className="rounded-2xl"
          />
        </figure>

        {/* Content Paragraphs */}
        <div
          data-ns-animate=""
          data-delay="0.5"
          className="space-y-8 max-w-[840px] mx-auto"
          style={{
            opacity: 1,
            filter: "blur(0px)",
            transform: "translate(0px, 0px) rotate(0deg) scale(1)"
          }}
        >
          <h4>Become part of a passionate community fueled by common interests.</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu.
            Adipiscing viverra vulputate curabitur est.
          </p>

          <p>
            Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae
            suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo
            eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit.
          </p>

          <p>
            Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor
            in rhoncus magna augue adipiscing. Ullamcorper commodo eget pulvinar pretium. Condimentum
            rhoncus commodo amet nec auctor nibh vel mi blandit. Lorem ipsum dolor sit amet consectetur.
            Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.
          </p>

          <p>
            Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae
            suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo
            eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit.
          </p>

          <p>
            Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor
            in rhoncus magna augue adipiscing. Ullamcorper commodo eget pulvinar pretium. Condimentum
            rhoncus commodo amet nec auctor nibh vel mi blandit. Lorem ipsum dolor sit amet consectetur.
            Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.
          </p>

          <p>
            Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae
            suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo
            eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit.
          </p>

          <p>
            Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor
            in rhoncus magna augue adipiscing. Ullamcorper commodo eget pulvinar pretium. Condimentum
            rhoncus commodo amet nec auctor nibh vel mi blandit.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-white dark:bg-background-6 py-[100px] xl:py-[200px]">
      <div className="main-container">
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-[52px]">
          <span
            data-ns-animate=""
            data-delay="0.1"
            className="badge badge-green mb-5"
            style={{
              opacity: 1,
              filter: "blur(0px)",
              transform: "translate(0px, 0px) rotate(0deg) scale(1)",
            }}
          >
            More Features
          </span>
          <h2
            data-ns-animate=""
            data-delay="0.2"
            style={{
              opacity: 1,
              filter: "blur(0px)",
              transform: "translate(0px, 0px) rotate(0deg) scale(1)",
            }}
          >
            Managing your money has
            <br className="hidden md:block" />
            never been easier
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-ns-animate=""
              data-delay={0.3 + index * 0.1}
              className="bg-background-2 dark:bg-background-5 space-y-6 p-6 rounded-[20px]"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "translate(0px, 0px) rotate(0deg) scale(1)",
              }}
            >
              <figure>
                <img
                  src={feature.lightImg}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-2xl block dark:hidden"
                />
                <img
                  src={feature.darkImg}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-2xl hidden dark:block"
                />
              </figure>
              <div>
                <h3 className="text-heading-6 sm:text-heading-5 mb-1 sm:mb-3 font-normal">
                  {feature.title}
                </h3>
                <p className="mb-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-[100px] xl:py-[200px]">
      <div className="main-container">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <span
            data-ns-animate=""
            data-delay="0.1"
            className="badge badge-green mb-5"
            style={{
              opacity: 1,
              filter: "blur(0px)",
              transform: "translate(0px, 0px) rotate(0deg) scale(1)",
            }}
          >
            Open Positions
          </span>
          <h2
            data-ns-animate=""
            data-delay="0.2"
            style={{
              opacity: 1,
              filter: "blur(0px)",
              transform: "translate(0px, 0px) rotate(0deg) scale(1)",
            }}
          >
            Become part of the
            <br className="hidden md:block" />
            dream-team
          </h2>
        </div>

        {/* Positions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {positions.map((pos, index) => (
            <div
              key={index}
              data-ns-animate=""
              data-delay={0.3 + index * 0.1}
              style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "translate(0px, 0px) rotate(0deg) scale(1)",
              }}
            >
              <div className="bg-background-1 dark:bg-background-6 space-y-8 p-11 rounded-[20px] hover:scale-[100.5%] hover:shadow-md transition-all duration-[400ms]">
                <div className="flex items-center gap-2">
                  <span className="badge badge-gray-light">{pos.location}</span>
                  <span className="badge badge-gray-light">{pos.type}</span>
                </div>
                <div>
                  <h3 className="text-heading-5 mb-3 font-normal">{pos.title}</h3>
                  <p>{pos.description}</p>
                </div>
                <div>
                  <a
                    href={pos.link}
                    className="btn hover:btn-secondary dark:btn-transparent dark:hover:btn-accent btn-md btn-white"
                  >
                    <span>Read more</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section
      className="py-[50px] md:py-20 lg:py-28 dark:bg-background-6 bg-white"
      aria-label="Use Case Overview"
    >
      <div className="main-container">
        <div className="flex items-center flex-col lg:flex-row justify-between">
          {/* Left Text */}
          <div className="xl:max-w-[650px] lg:max-w-[476px] max-[400px]:max-w-[300px] w-full space-y-5 text-center lg:text-left">
            <span
              data-ns-animate=""
              data-delay="0.3"
              className="badge badge-green badge-green"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "translate(0px, 0px) rotate(0deg) scale(1)",
              }}
            >
              Get started
            </span>
            <div className="space-y-3">
              <h2
                data-ns-animate=""
                data-delay="0.4"
                className="text-secondary dark:text-accent text-heading-5 sm:text-heading-4 lg:text-heading-2"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                }}
              >
                Build a complete website using the assistance
                <span className="text-primary-500 hidden">{/* optional span text */}</span>
              </h2>
              <p
                data-ns-animate=""
                data-delay="0.5"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                }}
              >
                Start your free trial today and see your ideas come to life easily and creatively.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:basis-[466px] space-y-6 md:ml-0 xl:ml-[100px] pt-[40px] lg:pt-[67px] w-full sm:w-[80%] md:w-[60%]">
            <form
              data-ns-animate=""
              data-delay="0.6"
              action="#"
              method="post"
              className="flex items-center flex-col gap-5 sm:flex-row justify-start lg:gap-3"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "translate(0px, 0px) rotate(0deg) scale(1)",
              }}
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
                className="btn btn-md btn-primary h-12 w-full sm:w-[28%] lg:w-auto hover:btn-secondary dark:hover:btn-accent"
              >
                <span>Get started</span>
              </button>
            </form>

            {/* Feature List */}
            <ul className="flex flex-row items-center justify-center gap-x-4 sm:gap-x-6 sm:gap-y-0 gap-y-5 lg:justify-start">
              <li
                data-ns-animate=""
                data-delay="0.7"
                className="flex items-center justify-center gap-2"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                }}
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
                    <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"></path>
                  </svg>
                </span>
                <p className="text-tagline-3 sm:text-tagline-2">No credit card required</p>
              </li>
              <li
                data-ns-animate=""
                data-delay="0.8"
                className="flex items-center justify-center gap-2"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                }}
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
                    <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"></path>
                  </svg>
                </span>
                <p className="text-tagline-3 sm:text-tagline-2">14-Day free trial</p>
              </li>
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