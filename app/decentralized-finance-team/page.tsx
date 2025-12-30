"use client"

import Image from "next/image";
import Header from "../header";
import Footer from "../footer";
import { useEffect, useState } from "react";

const decentralizedFinanceTeam = () => {

  type Team = {
    id: number;
    name: string;
    location: string;
    image: string;
    profileLink: string;
    facebook: string;
    dribbble: string;
    github: string;
    linkedin: string;
  };

  const Teams: Team[] = [
  {
    id: 1,
    name: "Darrell Steward",
    location: "Monaco",
    image: "/images/ns-avatar-2.png",
    profileLink: "./decentralized-finance-team-details.html",
    facebook: "https://www.facebook.com/staticmania/",
    dribbble: "https://dribbble.com/staticmania",
    github: "https://github.com/StaticMania",
    linkedin: "https://bd.linkedin.com/company/staticmania",
  },
  {
    id: 2,
    name: "Jane Cooper",
    location: "Singapore",
    image: "/images/ns-avatar-1.png",
    profileLink: "./team-details-jane.html",
    facebook: "https://www.facebook.com/staticmania/",
    dribbble: "https://dribbble.com/staticmania",
    github: "https://github.com/StaticMania",
    linkedin: "https://bd.linkedin.com/company/staticmania",
  },
  {
    id: 3,
    name: "Robert Fox",
    location: "Dubai",
    image: "/images/ns-avatar-3.png",
    profileLink: "./team-details-robert.html",
    facebook: "https://www.facebook.com/staticmania/",
    dribbble: "https://dribbble.com/staticmania",
    github: "https://github.com/StaticMania",
    linkedin: "https://bd.linkedin.com/company/staticmania",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    location: "London",
    image: "/images/ns-avatar-4.png",
    profileLink: "./team-details-leslie.html",
    facebook: "https://www.facebook.com/staticmania/",
    dribbble: "https://dribbble.com/staticmania",
    github: "https://github.com/StaticMania",
    linkedin: "https://bd.linkedin.com/company/staticmania",
  },
  {
    id: 5,
    name: "Cameron Williamson",
    location: "New York",
    image: "/images/ns-avatar-5.png",
    profileLink: "./team-details-cameron.html",
    facebook: "https://www.facebook.com/staticmania/",
    dribbble: "https://dribbble.com/staticmania",
    github: "https://github.com/StaticMania",
    linkedin: "https://bd.linkedin.com/company/staticmania",
  },
  {
    id: 6,
    name: "Kristin Watson",
    location: "Tokyo",
    image: "/images/ns-avatar-6.png",
    profileLink: "./team-details-kristin.html",
    facebook: "https://www.facebook.com/staticmania/",
    dribbble: "https://dribbble.com/staticmania",
    github: "https://github.com/StaticMania",
    linkedin: "https://bd.linkedin.com/company/staticmania",
  },
  {
    id: 7,
    name: "Wade Warren",
    location: "Sydney",
    image: "/images/ns-avatar-7.png",
    profileLink: "./team-details-wade.html",
    facebook: "https://www.facebook.com/staticmania/",
    dribbble: "https://dribbble.com/staticmania",
    github: "https://github.com/StaticMania",
    linkedin: "https://bd.linkedin.com/company/staticmania",
  },
  {
    id: 8,
    name: "Esther Howard",
    location: "Paris",
    image: "/images/ns-avatar-8.png",
    profileLink: "./team-details-esther.html",
    facebook: "https://www.facebook.com/staticmania/",
    dribbble: "https://dribbble.com/staticmania",
    github: "https://github.com/StaticMania",
    linkedin: "https://bd.linkedin.com/company/staticmania",
  },
  {
    id: 9,
    name: "Guy Hawkins",
    location: "Berlin",
    image: "/images/ns-avatar-9.png",
    profileLink: "./team-details-guy.html",
    facebook: "https://www.facebook.com/staticmania/",
    dribbble: "https://dribbble.com/staticmania",
    github: "https://github.com/StaticMania",
    linkedin: "https://bd.linkedin.com/company/staticmania",
  },
  {
    id: 10,
    name: "Brooklyn Simmons",
    location: "Toronto",
    image: "/images/ns-avatar-10.png",
    profileLink: "./team-details-brooklyn.html",
    facebook: "https://www.facebook.com/staticmania/",
    dribbble: "https://dribbble.com/staticmania",
    github: "https://github.com/StaticMania",
    linkedin: "https://bd.linkedin.com/company/staticmania",
  },
  {
    id: 11,
    name: "Brooklyn Simmons",
    location: "Toronto",
    image: "/images/ns-avatar-10.png",
    profileLink: "./team-details-brooklyn.html",
    facebook: "https://www.facebook.com/staticmania/",
    dribbble: "https://dribbble.com/staticmania",
    github: "https://github.com/StaticMania",
    linkedin: "https://bd.linkedin.com/company/staticmania",
  },
  {
    id: 12,
    name: "Brooklyn Simmons",
    location: "Toronto",
    image: "/images/ns-avatar-10.png",
    profileLink: "./team-details-brooklyn.html",
    facebook: "https://www.facebook.com/staticmania/",
    dribbble: "https://dribbble.com/staticmania",
    github: "https://github.com/StaticMania",
    linkedin: "https://bd.linkedin.com/company/staticmania",
  },
  {
    id: 13,
    name: "Brooklyn Simmons",
    location: "Toronto",
    image: "/images/ns-avatar-10.png",
    profileLink: "./team-details-brooklyn.html",
    facebook: "https://www.facebook.com/staticmania/",
    dribbble: "https://dribbble.com/staticmania",
    github: "https://github.com/StaticMania",
    linkedin: "https://bd.linkedin.com/company/staticmania",
  },
  {
    id: 14,
    name: "Brooklyn Simmons",
    location: "Toronto",
    image: "/images/ns-avatar-10.png",
    profileLink: "./team-details-brooklyn.html",
    facebook: "https://www.facebook.com/staticmania/",
    dribbble: "https://dribbble.com/staticmania",
    github: "https://github.com/StaticMania",
    linkedin: "https://bd.linkedin.com/company/staticmania",
  },
  {
    id: 15,
    name: "Brooklyn Simmons",
    location: "Toronto",
    image: "/images/ns-avatar-10.png",
    profileLink: "./team-details-brooklyn.html",
    facebook: "https://www.facebook.com/staticmania/",
    dribbble: "https://dribbble.com/staticmania",
    github: "https://github.com/StaticMania",
    linkedin: "https://bd.linkedin.com/company/staticmania",
  },
  {
    id: 16,
    name: "Brooklyn Simmons",
    location: "Toronto",
    image: "/images/ns-avatar-10.png",
    profileLink: "./team-details-brooklyn.html",
    facebook: "https://www.facebook.com/staticmania/",
    dribbble: "https://dribbble.com/staticmania",
    github: "https://github.com/StaticMania",
    linkedin: "https://bd.linkedin.com/company/staticmania",
  },
  ];

  const [count83, setCount83] = useState(0);
  const [count56, setCount56] = useState(0);

  useEffect(() => {
    animateValue(83, setCount83, 1000);
    animateValue(56, setCount56, 1000);
  }, []);

  const animateValue = (target: number, setter: (n: number) => void, duration: number) => {
    const start = 0;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * (target - start) + start);
      setter(value);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

    return (
        <div>
            <main>
              <Header />
                <section className="pb-[50px] md:pb-[70px] lg:pb-[85px] xl:pb-[100px] xl:pt-[180px] md:pt-42 sm:pt-36 pt-32">
                  <div
                    data-ns-animate=""
                    data-delay="0.1"
                    className="main-container bg-background-2 dark:bg-background-8 rounded-2xl py-[100px]"
                  >
                    <div>
                      {/* heading */}
                      <div className="max-w-[620px] md:w-full text-center mx-auto mb-[70px]">
                        <span data-ns-animate="" data-delay="0.2" className="badge badge-cyan mb-5">
                          Our team
                        </span>

                        <h2 data-ns-animate="" data-delay="0.3" id="team-section-heading" className="mb-3">
                          Our innovative, dynamic, and talented team
                        </h2>

                        <p data-ns-animate="" data-delay="0.4">
                          Our innovative, dynamic, and talented team is the driving force behind our success. Each
                          member brings a unique blend of expertise
                        </p>
                      </div>

                      {/* team members */}
                      <div className="flex items-center flex-wrap gap-y-18 gap-x-6 justify-center mb-14">

                        {Teams.map((team, index) => (
                          <div
                            key={team.id}
                            data-ns-animate=""
                            data-delay={(index + 1) * 0.1}
                            data-instant=""
                            className="w-[298px] h-[312px] space-y-[34px]"
                          >
                            <figure className="size-[156px] rounded-full bg-[#d5dbe3] flex items-center justify-center overflow-hidden mx-auto">
                              <img
                                src={team.image}
                                className="object-cover size-full"
                                alt={`${team.name} profile img`}
                                loading="lazy"
                              />
                            </figure>

                            <div className="space-y-[27px]">
                              <div className="text-center">
                                <h3 className="text-heading-5">
                                  <a href={team.profileLink}>{team.name}</a>
                                </h3>
                                <p className="text-tagline-2">{team.location}</p>
                              </div>

                              {/* social links */}
                              <div className="flex items-center justify-center gap-2.5">
                                <a
                                  href={team.facebook}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="size-10 p-2.5 rounded-full border border-secondary/10 dark:border-stroke-7 flex items-center justify-center hover:bg-secondary dark:hover:bg-accent group transition-all duration-500 ease-in-out hover:-translate-y-2"
                                  aria-label={`Follow ${team.name} on Facebook`}
                                >
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="20"
                                      height="20"
                                      className="group-hover:fill-white fill-secondary dark:fill-accent transition"
                                    >
                                      <path d="M13 3h4V0h-4a5 5 0 0 0-5 5v3H5v4h3v9h4v-9h3.2l.8-4H12V5a1 1 0 0 1 1-1z" />
                                    </svg>
                                  </span>
                                </a>

                                <a
                                  href={team.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="size-10 p-2.5 rounded-full border border-secondary/10 dark:border-stroke-7 flex items-center justify-center hover:bg-secondary dark:hover:bg-accent group transition-all duration-500 ease-in-out hover:-translate-y-2"
                                  aria-label={`Follow ${team.name} on GitHub`}
                                >
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      className="group-hover:fill-white fill-secondary dark:fill-accent transition"
                                    >
                                      <path d="M12 .5A12 12 0 0 0 0 12.6c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.8-4-1.6-4-1.6-.6-1.5-1.4-1.9-1.4-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 .9 2 .9 1.2 2 3.1 1.5 3.9 1.1.1-.9.5-1.5.9-1.8-2.6-.3-5.3-1.4-5.3-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 6 .5.4 1 1.3 1 2.7v4c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
                                    </svg>
                                  </span>
                                </a>

                                <a
                                  href={team.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="size-10 p-2.5 rounded-full border border-secondary/10 dark:border-stroke-7 flex items-center justify-center hover:bg-secondary dark:hover:bg-accent group transition-all duration-500 ease-in-out hover:-translate-y-2"
                                  aria-label={`Follow ${team.name} on LinkedIn`}
                                >
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      className="group-hover:fill-white fill-secondary dark:fill-accent transition"
                                    >
                                      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 8.98h4v12H3v-12Zm7.5 0h3.8v1.7h.1c.5-.9 1.9-1.8 3.9-1.8 4.2 0 5 2.5 5 5.8v6.3h-4v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.7h-4v-12Z" />
                                    </svg>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}

                      </div>
                    </div>
                  </div>
                </section>

                <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[200px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
                  <div className="main-container">
                    <div className="flex flex-col lg:flex-row xl:gap-[100px]">
                      <div className="text-center lg:text-left md:max-w-[650px] max-lg:mx-auto max-lg:mb-[70px] lg:max-w-[442px] space-y-5">
                        <span data-ns-animate="" data-delay="0.1" className="badge badge-cyan">
                          Number
                        </span>
                        <div className="space-y-3">
                          <h2 data-ns-animate="" data-delay="0.2">
                            Over a decade of experience in this.
                          </h2>
                          <p data-ns-animate="" data-delay="0.3">
                            This extensive experience not only reflects our commitment to excellence but also equips
                            us with the insight and skills necessary to meet.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 grow-1">
                        <div data-ns-animate="" data-delay="0.2" className="rounded-xl p-8 bg-background-2 dark:bg-background-8 flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <h5 className="max-w-[200px]">Relied upon by businesses</h5>
                            <div className="shrink-0">
                              <span className="ns-shape-47 text-[52px] text-secondary dark:text-accent"></span>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <h3 className="flex items-center gap-1">
                              {count83}%
                            </h3>
                            <p>Avg. Completed</p>
                          </div>
                        </div>

                        <div data-ns-animate="" data-delay="0.3" className="rounded-xl p-8 bg-background-2 dark:bg-background-8 flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <h5 className="max-w-[200px]">The team at NexSaaS bank</h5>
                            <div className="shrink-0">
                              <span className="ns-shape-57 text-[52px] text-secondary dark:text-accent"></span>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <h3 className="flex items-center gap-1">
                              {count56}%
                            </h3>
                            <p>Avg. Completed</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </section>

                <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] overflow-hidden">
                  <div className="main-container">
                    <div className="grid grid-cols-12 lp:gap-[100px] xl:gap-20 lg:gap-14 lg:gap-y-0 gap-y-14 items-center">
                      {/* Left Images */}
                      <div className="col-span-12 lp:col-span-7 lg:col-span-6">
                        <div className="relative max-w-[704px] lg:mx-0 mx-auto">
                          <figure
                            data-ns-animate=""
                            data-delay="0.3"
                            data-direction="right"
                            className="absolute xl:top-[38%] top-[40%] right-0 xl:-right-7 xl:max-w-[253px] sm:max-w-[200px] max-w-[150px] w-full z-10"
                          >
                            <img src="./images/ns-img-97.png" alt="features" className="w-full h-full inline-block dark:hidden" />
                            <img src="./images/ns-img-dark-70.png" alt="features" className="w-full h-full hidden dark:block" />
                          </figure>

                          <figure
                            data-ns-animate=""
                            data-delay="0.2"
                            className="w-full xl:max-w-[504px] sm:max-w-[400px] max-w-[300px] lg:mx-0 mx-auto"
                          >
                            <img src="./images/ns-img-81.png" alt="features" className="w-full h-full object-cover inline-block dark:hidden" />
                            <img src="./images/ns-img-dark-55.png" alt="features" className="w-full h-full object-cover hidden dark:block" />
                          </figure>

                          <figure
                            data-ns-animate=""
                            data-delay="0.5"
                            data-direction="right"
                            className="absolute rounded-xl overflow-hidden bottom-10 xl:bottom-1/12 right-0 xl:max-w-[395px] sm:max-w-[300px] max-w-[200px] w-full shadow-2"
                          >
                            <img src="./images/ns-img-96.png" alt="features" className="w-full h-full inline-block dark:hidden" />
                            <img src="./images/ns-img-dark-69.png" alt="features" className="w-full h-full hidden dark:block" />
                          </figure>
                        </div>
                      </div>

                      {/* Right Text Content */}
                      <div className="col-span-12 lp:col-span-5 lg:col-span-6">
                        <div className="space-y-8">
                          <div className="space-y-5">
                            <span data-ns-animate="" data-delay="0.1" className="badge badge-cyan">
                              Reasons to select us
                            </span>
                            <div className="space-y-3">
                              <h2 data-ns-animate="" data-delay="0.2" className="max-w-[521px]">
                                Easily manage your cash flow.
                              </h2>
                              <p data-ns-animate="" data-delay="0.3">
                                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text
                                nothing Before &amp; After magazine.
                              </p>
                            </div>
                          </div>

                          <div>
                            <ul className="space-y-2">
                              <li data-ns-animate="" data-delay="0.2" className="p-2 flex items-center gap-4">
                                <span className="ns-shape-8 text-[36px] text-secondary dark:text-accent"></span>
                                <span className="text-tagline-1 font-medium text-secondary dark:text-accent">
                                  A version for offline use is available.
                                </span>
                              </li>
                              <li data-ns-animate="" data-delay="0.3" className="p-2 flex items-center gap-4">
                                <span className="ns-shape-9 text-[36px] text-secondary dark:text-accent"></span>
                                <span className="text-tagline-1 font-medium text-secondary dark:text-accent">
                                  Designed to be both scalable and secure.
                                </span>
                              </li>
                              <li data-ns-animate="" data-delay="0.4" className="p-2 flex items-center gap-4">
                                <span className="ns-shape-12 text-[36px] text-secondary dark:text-accent"></span>
                                <span className="text-tagline-1 font-medium text-secondary dark:text-accent">
                                  Feature powered by artificial intelligence.
                                </span>
                              </li>
                              <li data-ns-animate="" data-delay="0.5" className="p-2 flex items-center gap-4">
                                <span className="ns-shape-21 text-[36px] text-secondary dark:text-accent"></span>
                                <span className="text-tagline-1 font-medium text-secondary dark:text-accent">
                                  It offers both scalability and robust security.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </section>

                <section className="bg-background-2 dark:bg-background-6 pt-[120px] lg:pb-[200px] pb-[100px]">
      <div className="main-container">
        <div>
          {/* Heading */}
          <div className="text-center space-y-3">
            <span
              data-ns-animate=""
              data-delay="0.1"
              className="badge badge-cyan mb-5 inline-block"
            >
              Get started
            </span>
            <h2
              data-ns-animate=""
              data-delay="0.2"
              id="newsletter-heading"
              className="max-w-[1042px] mx-auto"
            >
              NextSaaS – your ultimate email &amp; transactional messaging platform
            </h2>
            <p
              data-ns-animate=""
              data-delay="0.3"
              className="max-w-[600px] mx-auto"
            >
              Drive more engagement. improve deliverability. automate your emails.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-8 mt-[62px] max-sm:w-[80%] max-sm:mx-auto">
            <form
              data-ns-animate=""
              data-delay="0.4"
              action="#"
              method="post"
              className="flex items-center max-sm:flex-col justify-center gap-3"
            >
              <input
                type="email"
                name="email"
                id="userEmail"
                placeholder="Enter your email"
                required
                className="px-[18px] h-12 py-3 shadow-1 placeholder:text-secondary/50 rounded-full border border-stroke-1 dark:bg-background-6 dark:placeholder:text-white/40 text-secondary/60 dark:text-white/60 dark:bg-dark-200 dark:border-[#31332F] focus:border-primary-500 dark:focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 max-w-[440px] w-full placeholder:font-normal font-normal"
              />
              <button
                type="submit"
                className="btn btn-md btn-primary border-primary-400 h-12 hover:btn-secondary dark:hover:btn-accent max-sm:w-full"
              >
                <span>Get started</span>
              </button>
            </form>

            {/* Features List */}
            <ul className="flex flex-col md:flex-row items-center justify-center gap-y-5 md:gap-x-[42px]">
              <li
                data-ns-animate=""
                data-delay="0.2"
                className="flex items-center justify-center gap-2"
              >
                <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <path
                      d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                      className="fill-white dark:fill-secondary"
                    ></path>
                  </svg>
                </span>
                <p className="text-tagline-2">No credit card required</p>
              </li>

              <li
                data-ns-animate=""
                data-delay="0.3"
                className="flex items-center justify-center gap-2"
              >
                <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <path
                      d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                      className="fill-white dark:fill-secondary"
                    ></path>
                  </svg>
                </span>
                <p className="text-tagline-2">14-Day free trial</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

              <Footer />
            </main>
        </div>    
    );
}

export default decentralizedFinanceTeam;