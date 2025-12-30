'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Header from '../header';
import '../globals.css';
import Footer from '../footer';

type BlogItem = {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  link: string;
};

const blogData: BlogItem[] = [
  { id: 1, category: 'Finance', title: 'Getting started guide', description: 'Step-by-step walkthrough to set up workspace.', image: '/images/ns-img-428.png', link: '/decentralized-finance-blog-details' },
  { id: 2, category: 'Crypto', title: 'Product tour', description: 'Visual overview of everything inside NextSaaS.', image: '/images/ns-img-459.png', link: '/decentralized-finance-blog-details' },
  { id: 3, category: 'Finance', title: 'Setting up dashboard', description: 'Customize experience and create system that works.', image: '/images/ns-img-460.png', link: '/decentralized-finance-blog-details' },
  { id: 4, category: 'Design', title: 'Getting started guide', description: 'Step-by-step walkthrough to set up workspace.', image: '/images/ns-img-461.png', link: '/decentralized-finance-blog-details' },
  { id: 5, category: 'AI Software', title: 'Product tour', description: 'Visual overview of everything inside NextSaaS.', image: '/images/ns-img-462.png', link: '/decentralized-finance-blog-details' },
  { id: 6, category: 'Investment', title: 'Setting up dashboard', description: 'Customize experience and create system that works.', image: '/images/ns-img-463.png', link: '/decentralized-finance-blog-details' },
];

const categories = ['All', 'Finance', 'Crypto', 'AI Software', 'Investment', 'Design'];

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0, color: '#7F3DFF' });
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const categoryColors: Record<string, string> = {
    All: '#7F3DFF',
    Finance: '#FF6B6B',
    Crypto: '#4ADE80',
    'AI Software': '#38BDF8',
    Investment: '#FACC15',
    Design: '#F472B6',
  };

  const filteredBlogs =
    activeCategory === 'All'
      ? blogData
      : blogData.filter((b) => b.category === activeCategory);

  const handleTabClick = (category: string, index: number) => {
    setActiveCategory(category);
    const btn = tabRefs.current[index];
    if (btn) {
      setUnderlineStyle({ left: btn.offsetLeft, width: btn.offsetWidth, color: categoryColors[category] });
    }
  };

  useEffect(() => {
    // Set initial underline position
    const index = categories.findIndex((c) => c === activeCategory);
    const btn = tabRefs.current[index];
    if (btn) {
      setUnderlineStyle({ left: btn.offsetLeft, width: btn.offsetWidth, color: categoryColors[activeCategory] });
    }

    // Update underline on window resize
    const handleResize = () => {
      const btn = tabRefs.current[index];
      if (btn) {
        setUnderlineStyle({ left: btn.offsetLeft, width: btn.offsetWidth, color: categoryColors[activeCategory] });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main>
      <Header />
    <div>
      {/* Hero Section */}
      <section className="xl:pt-[200px] pt-[170px] pb-[100px] md:pb-[200px]">
        <div className="main-container">
          <div className="flex flex-col lg:flex-row items-center lg:gap-[100px] gap-y-14">
            <div className="flex-1 space-y-14 max-w-[540px] mx-auto lg:mx-0 lg:max-w-full text-center lg:text-left">
              <div className="space-y-3">
                <h2
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
                  Built for your business. Adapted to your workflow.
                </h2>
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
                  NextSaaS is designed to serve a wide range of teams and industries. Whether you’re
                  managing data, scaling operations, optimizing finances, or streamlining customer
                  experiences—NextSaaS is the platform that grows with you.
                </p>
              </div>
              <div
                data-ns-animate=""
                data-delay="0.3"
                data-instant=""
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
                  href="./decentralized-finance-services.html"
                  className="section-button btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-accent"
                  onClick={(e) => e.preventDefault()} // prevent page jump
                >
                  <span>Explore the platform</span>
                </a>
              </div>
            </div>
            <div className="flex-1">
              <figure
                data-ns-animate=""
                data-delay="0.3"
                className="opacity-0 max-w-[596px] w-full rounded-[20px] overflow-hidden"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                <img
                  src="./images/ns-img-385.png"
                  className="w-full h-full object-cover"
                  alt="learn banner"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-background-2 dark:bg-background-6 py-14 md:py-[100px]">
        <div className="main-container">
          {/* Desktop Tabs */}
          <div className="hidden md:flex justify-center relative border-b border-stroke-2 dark:border-stroke-6">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                type="button" // important
                ref={(el: HTMLButtonElement | null) => {
                  tabRefs.current[idx] = el;
                }}
                onClick={(e) => {
                  e.preventDefault(); // prevent any default behavior
                  handleTabClick(cat, idx); // handle category change
                }}
                className={`py-3 px-5 cursor-pointer font-medium transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'text-secondary dark:text-accent'
                    : 'text-secondary/60 dark:text-accent/60'
                }`}
              >
                {cat}
              </button>
            ))}
            <span
              className="absolute bottom-0 h-1 transition-all duration-500 ease-in-out"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
                backgroundColor: underlineStyle.color,
              }}
            ></span>
          </div>


          {/* Mobile Tabs */}
          <div className="flex md:hidden flex-wrap justify-center gap-4 mt-6">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleTabClick(cat, idx)}
                className={`px-3 py-2 border rounded-full transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-purple-600 text-white scale-105'
                    : 'bg-background-7 dark:bg-background-5 text-secondary/60 dark:text-accent/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-12 gap-8 mt-12">
            {filteredBlogs.map((blog, idx) => (
              <div
                key={blog.id}
                className="col-span-12 sm:col-span-6 lg:col-span-4 opacity-0 animate-cardReveal"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <article className="bg-white dark:bg-background-5 rounded-[20px] overflow-hidden border border-stroke-4 dark:border-stroke-5">
                  <figure className="relative h-52 w-full">
                    <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                  </figure>
                  <div className="p-6 space-y-4">
                    <span className="badge badge-green">{blog.category}</span>
                    <h3 className="text-heading-5 text-secondary dark:text-accent">{blog.title}</h3>
                    <p className="text-secondary dark:text-accent line-clamp-2">{blog.description}</p>
                    <a
                      href={blog.link}
                      className="btn btn-white btn-md hover:btn-secondary dark:hover:btn-accent dark:btn-transparent"
                      onClick={(e) => e.preventDefault()}
                    >
                      Read more
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
          <a
            href="./decentralized-finance-services.html"
            className="section-button btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-accent"
            onClick={(e) => e.preventDefault()} // prevent page jump
          >
            <span>Explore the platform</span>
          </a>
        </div>
      </section>
      {/* Feature Section */}
      <section className="bg-background-2 dark:bg-background-5 md:pt-[100px] pt-[50px] md:pb-[200px] pb-[100px] dark:md:pb-[100px]">
        <div className="main-container">
          <div className="text-center space-y-5 mb-[35px] md:mb-[70px]">
            <span
              data-ns-animate=""
              data-delay="0.1"
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
              More features
            </span>
            <div className="space-y-3">
              <h2
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
                Featured guides
              </h2>
              <p
                data-ns-animate=""
                data-delay="0.3"
                className="max-w-[578px] mx-auto"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                Our platform is designed with a focus on performance, usability, and innovation,
                delivering a seamless experience tailored to modern needs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 md:gap-8 gap-y-10">
            <div
              data-ns-animate=""
              data-delay="0.4"
              className="col-span-12 md:col-span-6 lg:col-span-4"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="space-y-6 text-center">
                <div className="mx-auto">
                  <span className="ns-shape-9 text-[52px] text-secondary dark:text-accent"> </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-heading-5">How to automate repetitive</h3>
                  <p>Learn how to streamline your workflow with smart automation.</p>
                </div>
              </div>
            </div>
            <div
              data-ns-animate=""
              data-delay="0.5"
              className="col-span-12 md:col-span-6 lg:col-span-4"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="space-y-6 text-center">
                <div className="mx-auto">
                  <span className="ns-shape-3 text-[52px] text-secondary dark:text-accent"> </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-heading-5">Making sense of your data</h3>
                  <p>
                    Monitor your suppliers, manage purchase orders seamlessly, and keep an eye on your
                  </p>
                </div>
              </div>
            </div>
            <div
              data-ns-animate=""
              data-delay="0.6"
              className="col-span-12 md:col-span-6 lg:col-span-4"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="space-y-6 text-center">
                <div className="mx-auto">
                  <span className="ns-shape-12 text-[52px] text-secondary dark:text-accent"> </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-heading-5">Best practices for managing</h3>
                  <p>
                    Help your team stay aligned and productive using shared dashboards and custom roles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-[100px] pt-[100px] xl:pt-[200px] dark:pt-[100px] bg-background-3 dark:bg-background-5">
        <div className="main-container">
          <div className="text-center space-y-3 mb-[70px]">
            <h2
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
              Video tutorials
            </h2>
            <p
              data-ns-animate=""
              data-delay="0.2"
              className="max-w-[620px] mx-auto"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              Our innovative, dynamic, and talented team is the driving force behind our success. Each
              member brings a unique blend of expertise
            </p>
          </div>

          <div className="grid grid-cols-12 md:gap-8 gap-y-8">
            {/* Card 1 */}
            <div
              data-ns-animate=""
              data-delay="0.3"
              className="col-span-12 md:col-span-6 lg:col-span-4"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="relative rounded-[20px] overflow-hidden group h-full md:max-h-[408px]">
                <figure className="relative h-full w-full">
                  <img
                    src="./images/ns-img-386.png"
                    alt="Intro to NextSaaS"
                    style={{ objectFit: 'cover' }}
                  />
                </figure>
                <div className="text-center absolute w-[95%] left-0 right-0 mx-auto p-6 rounded-xl bottom-2.5 bg-secondary/10 backdrop-blur-[10px] md:translate-y-full md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-heading-5 text-accent">Intro to NextSaaS</h3>
                  <p className="flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                        stroke="#FCFCFC"
                        strokeOpacity={0.6}
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M10 5.625V10H14.375"
                        stroke="#FCFCFC"
                        strokeOpacity={0.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-accent/60 text-tagline-3">25 Hours</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              data-ns-animate=""
              data-delay="0.4"
              className="col-span-12 md:col-span-6 lg:col-span-4"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="relative rounded-[20px] overflow-hidden group h-full md:max-h-[408px]">
                <figure className="relative h-full w-full">
                  <Image
                    src="/images/ns-img-387.png"
                    alt="Intro to React"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </figure>
                <div className="text-center absolute w-[95%] left-0 right-0 mx-auto p-6 rounded-xl bottom-2.5 bg-secondary/10 backdrop-blur-[10px] md:translate-y-full md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-heading-5 text-accent">Intro to React</h3>
                  <p className="flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                        stroke="#FCFCFC"
                        strokeOpacity={0.6}
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M10 5.625V10H14.375"
                        stroke="#FCFCFC"
                        strokeOpacity={0.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-accent/60 text-tagline-3">25 Hours</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              data-ns-animate=""
              data-delay="0.5"
              className="col-span-12 md:col-span-6 lg:col-span-4"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="relative rounded-[20px] overflow-hidden group h-full md:max-h-[408px]">
                <figure className="relative h-full w-full">
                  <Image
                    src="/images/ns-img-388.png"
                    alt="Intro to JavaScript"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </figure>
                <div className="text-center absolute w-[95%] left-0 right-0 mx-auto p-6 rounded-xl bottom-2.5 bg-secondary/10 backdrop-blur-[10px] md:translate-y-full md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-heading-5 text-accent">Intro to JavaScript</h3>
                  <p className="flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                        stroke="#FCFCFC"
                        strokeOpacity={0.6}
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M10 5.625V10H14.375"
                        stroke="#FCFCFC"
                        strokeOpacity={0.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-accent/60 text-tagline-3">25 Hours</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
              
      <section className="md:py-[200px] dark:md:py-[100px] sm:py-[100px] py-[50px] bg-background-3 dark:bg-background-5">
        <div
          data-ns-animate=""
          data-delay="0.1"
          className="cards-marquee-container horizontal-marquee smooth"
          data-animate="true"
          style={{ ['--_speed' as any]: '140000ms', ['--_direction' as any]: 'forwards', ['--_gap' as any]: '0px' }}
        >
          <div className="horizontal-marquee-inner">
            <div className="flex items-center justify-center gap-8 mb-14">
              {/* Item 1 */}
              <div className="min-w-[360px] min-h-[270px] bg-background-2 hover:bg-secondary dark:bg-background-6 hover:dark:bg-background-8 rounded-[20px] relative p-8 flex flex-col gap-y-8 z-0 overflow-hidden justify-between group transition-all duration-700 ease-in-out ml-8">
                <figure className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 rotate-[-78deg] -right-[160%] -top-[210%] transition-all duration-1000 ease-in-out transform group-hover:scale-110 select-none pointer-events-none">
                  <img src="./images/ns-img-516.png" alt="review-bg" className="w-full h-full object-cover" />
                </figure>

                <div className="transition-all duration-700 ease-in-out transform group-hover:translate-y-[4px]">
                  <p className="group-hover:text-white text-secondary/60 dark:text-accent/60 text-lg mb-2 transition-colors duration-700 ease-in-out">
                    Total users
                  </p>
                  <h3 className="group-hover:text-ns-yellow text-secondary dark:text-accent transition-colors duration-700 ease-in-out">
                    2.18+
                  </h3>
                </div>

                <p className="group-hover:text-accent/60 text-secondary/60 dark:text-accent/60 transition-all duration-700 ease-in-out transform group-hover:translate-y-[-6px] group-hover:opacity-90">
                  Million active users
                </p>
              </div>

              {/* Item 2 */}
              <div className="min-w-[360px] min-h-[270px] bg-background-2 hover:bg-secondary dark:bg-background-6 hover:dark:bg-background-8 rounded-[20px] relative p-8 flex flex-col gap-y-8 z-0 overflow-hidden justify-between group transition-all duration-700 ease-in-out">
                <figure className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 rotate-[-78deg] -right-[160%] -top-[210%] transition-all duration-1000 ease-in-out transform group-hover:scale-110 select-none pointer-events-none">
                  <img src="./images/ns-img-516.png" alt="review-bg" className="w-full h-full object-cover" />
                </figure>

                <div className="transition-all duration-700 ease-in-out transform group-hover:translate-y-[4px]">
                  <p className="group-hover:text-white text-secondary/60 dark:text-accent/60 text-lg mb-2 transition-colors duration-700 ease-in-out">
                    System uptime
                  </p>
                  <h3 className="group-hover:text-ns-yellow text-secondary dark:text-accent transition-colors duration-700 ease-in-out">
                    89.7%
                  </h3>
                </div>

                <p className="group-hover:text-accent/60 text-secondary/60 dark:text-accent/60 transition-all duration-700 ease-in-out transform group-hover:translate-y-[-6px] group-hover:opacity-90">
                  Average system availability
                </p>
              </div>

              {/* Item 3 */}
              <div className="min-w-[360px] min-h-[270px] bg-background-2 hover:bg-secondary dark:bg-background-6 hover:dark:bg-background-8 rounded-[20px] relative p-8 flex flex-col gap-y-8 z-0 overflow-hidden justify-between group transition-all duration-700 ease-in-out">
                <figure className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 rotate-[-78deg] -right-[160%] -top-[210%] transition-all duration-1000 ease-in-out transform group-hover:scale-110 select-none pointer-events-none">
                  <img src="./images/ns-img-516.png" alt="review-bg" className="w-full h-full object-cover" />
                </figure>

                <div className="transition-all duration-700 ease-in-out transform group-hover:translate-y-[4px]">
                  <p className="group-hover:text-white text-secondary/60 dark:text-accent/60 text-lg mb-2 transition-colors duration-700 ease-in-out">
                    Global reach
                  </p>
                  <h3 className="group-hover:text-ns-yellow text-secondary dark:text-accent transition-colors duration-700 ease-in-out">
                    70+
                  </h3>
                </div>

                <p className="group-hover:text-accent/60 text-secondary/60 dark:text-accent/60 transition-all duration-700 ease-in-out transform group-hover:translate-y-[-6px] group-hover:opacity-90">
                  Countries served worldwide
                </p>
              </div>

              {/* Item 4 */}
              <div className="min-w-[360px] min-h-[270px] bg-background-2 hover:bg-secondary dark:bg-background-6 hover:dark:bg-background-8 rounded-[20px] relative p-8 flex flex-col gap-y-8 z-0 overflow-hidden justify-between group transition-all duration-700 ease-in-out">
                <figure className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 rotate-[-78deg] -right-[160%] -top-[210%] transition-all duration-1000 ease-in-out transform group-hover:scale-110 select-none pointer-events-none">
                  <img src="./images/ns-img-516.png" alt="review-bg" className="w-full h-full object-cover" />
                </figure>

                <div className="transition-all duration-700 ease-in-out transform group-hover:translate-y-[4px]">
                  <p className="group-hover:text-white text-secondary/60 dark:text-accent/60 text-lg mb-2 transition-colors duration-700 ease-in-out">
                    Response time
                  </p>
                  <h3 className="group-hover:text-ns-yellow text-secondary dark:text-accent transition-colors duration-700 ease-in-out">
                    3 minutes
                  </h3>
                </div>

                <p className="group-hover:text-accent/60 text-secondary/60 dark:text-accent/60 transition-all duration-700 ease-in-out transform group-hover:translate-y-[-6px] group-hover:opacity-90">
                  Average support response
                </p>
              </div>

              {/* Item 5 */}
              <div className="min-w-[360px] min-h-[270px] bg-background-2 hover:bg-secondary dark:bg-background-6 hover:dark:bg-background-8 rounded-[20px] relative p-8 flex flex-col gap-y-8 z-0 overflow-hidden justify-between group transition-all duration-700 ease-in-out">
                <figure className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 rotate-[-78deg] -right-[160%] -top-[210%] transition-all duration-1000 ease-in-out transform group-hover:scale-110 select-none pointer-events-none">
                  <img src="./images/ns-img-516.png" alt="review-bg" className="w-full h-full object-cover" />
                </figure>

                <div className="transition-all duration-700 ease-in-out transform group-hover:translate-y-[4px]">
                  <p className="group-hover:text-white text-secondary/60 dark:text-accent/60 text-lg mb-2 transition-colors duration-700 ease-in-out">
                    Enterprise clients
                  </p>
                  <h3 className="group-hover:text-ns-yellow text-secondary dark:text-accent transition-colors duration-700 ease-in-out">
                    150+
                  </h3>
                </div>

                <p className="group-hover:text-accent/60 text-secondary/60 dark:text-accent/60 transition-all duration-700 ease-in-out transform group-hover:translate-y-[-6px] group-hover:opacity-90">
                  Active enterprise customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:pt-[100px] md:pb-[200px] sm:pb-[100px] pb-[50px]">
        <div className="2xl:max-w-[1440px] xl:max-w-[1240px] lg:max-w-[980px] lg:mx-auto sm:mx-10 mx-5 rounded-4xl bg-white dark:bg-background-8 md:py-[70px] py-[35px] relative lg:min-h-[740px] overflow-hidden z-10">
          <figure
            data-ns-animate
            data-delay="0.6"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 size-[1000px] mx-auto -z-10 rotate-[336deg] select-none pointer-events-none"
          >
            <img src="./images/ns-img-508.png" className="size-full" alt="gradient" />
          </figure>

          <div className="text-center md:space-y-14 space-y-8">
            <div className="space-y-5">
              <span data-ns-animate data-delay="0.1" className="badge badge-green">
                Integration
              </span>

              <div className="space-y-3">
                <h2 data-ns-animate data-delay="0.2">
                  Templates &amp; tools
                </h2>

                <p
                  data-ns-animate
                  data-delay="0.3"
                  className="max-w-[490px] mx-auto md:px-0 px-5"
                >
                  Make setup simple with ready-to-use templates for various projects, ensuring you can hit
                  the ground running without any hassle. Whether you're launching a new website
                </p>
              </div>
            </div>

            <div data-ns-animate data-delay="0.4" className="text-center integration-button">
              <div data-ns-animate data-delay="0.4" className="text-center integration-button">
                <a
                  href="./decentralized-finance-integration.html"
                  className="btn btn-md btn-secondary dark:btn-transparent hover:btn-primary"
                >
                  <span>See It in Action</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:absolute lg:w-1/2 lg:max-w-[400px] 2xl:max-w-[582px] 2xl:left-0 xl:left-20 lg:left-10 left-5 bottom-0 lg:bottom-auto lg:top-0 lg:block hidden">
            <div className="flex flex-row flex-wrap lg:flex-col gap-5 lg:gap-[40px] 2xl:ps-[70px] lg:py-[70px] py-10 relative h-full">
              <div className="flex gap-5 lg:gap-8 xl:gap-[75px] lg:ms-[60px] xl:ms-[100px]">
                <figure
                  data-ns-animate
                  data-delay="0.2"
                  className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full"
                >
                  <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-6 rounded-full p-6">
                    <img src="./images/icons/google-meet.svg" className="size-full" alt="integration icon" />
                  </div>
                </figure>
              </div>

              <div className="flex gap-5 lg:gap-8 xl:gap-[75px] lg:self-start">
                <figure
                  data-ns-animate
                  data-delay="0.3"
                  className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full"
                >
                  <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-6 rounded-full p-6">
                    <img src="./images/icons/gmail.svg" className="size-full" alt="integration icon" />
                  </div>
                </figure>

                <figure
                  data-ns-animate
                  data-delay="0.4"
                  className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full"
                >
                  <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-6 rounded-full p-6">
                    <img src="./images/icons/marvel.svg" className="size-full" alt="integration icon" />
                  </div>
                </figure>
              </div>

              <div className="flex gap-5 lg:gap-8 xl:gap-[75px] lg:ms-[60px] xl:ms-[100px]">
                <figure
                  data-ns-animate
                  data-delay="0.5"
                  className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full"
                >
                  <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-6 rounded-full p-6">
                    <img src="./images/icons/confluence.svg" className="size-full" alt="integration icon" />
                  </div>
                </figure>

                <figure
                  data-ns-animate
                  data-delay="0.6"
                  className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full"
                >
                  <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-6 rounded-full p-6">
                    <img src="./images/icons/framer.svg" className="size-full" alt="integration icon" />
                  </div>
                </figure>
              </div>

              <div className="flex gap-5 lg:gap-8 xl:gap-[75px] lg:ms-[100px] xl:ms-[185px]">
                <figure
                  data-ns-animate
                  data-delay="0.7"
                  className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full"
                >
                  <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-6 rounded-full p-6">
                    <img src="./images/icons/vl.svg" className="size-full dark:hidden" alt="integration icon" />
                    <img src="./images/icons/vl-white.svg" className="size-full hidden dark:block" alt="integration icon" />
                  </div>
                </figure>

                <figure
                  data-ns-animate
                  data-delay="0.8"
                  className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full"
                >
                  <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-6 rounded-full p-6">
                    <img src="./images/icons/edge.svg" className="size-full" alt="integration icon" />
                  </div>
                </figure>
              </div>
            </div>
          </div>

          <div className="lg:absolute lg:w-1/2 lg:max-w-[400px] 2xl:max-w-[582px] 2xl:right-0 xl:right-28 lg:right-10 right-5 bottom-0 lg:bottom-auto lg:top-0 lg:block hidden">
            <div className="flex flex-row flex-wrap lg:flex-col gap-5 lg:gap-[40px] 2xl:pe-[70px] lg:py-[70px] py-10 relative h-full">
              <div className="flex lg:self-end lg:me-[60px] xl:me-[100px]">
                <figure
                  data-ns-animate
                  data-delay="0.2"
                  className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full"
                >
                  <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-6 rounded-full p-6">
                    <img src="./images/icons/confluence.svg" className="size-full" alt="integration icon" />
                  </div>
                </figure>
              </div>

              <div className="flex gap-8 lg:gap-[50px] xl:gap-[75px] lg:self-end">
                <figure
                  data-ns-animate
                  data-delay="0.3"
                  className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full"
                >
                  <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-6 rounded-full p-6">
                    <img src="./images/icons/slack.svg" className="size-full" alt="integration icon" />
                  </div>
                </figure>

                <figure
                  data-ns-animate
                  data-delay="0.4"
                  className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full"
                >
                  <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-6 rounded-full p-6">
                    <img src="./images/icons/snapchat.svg" className="size-full" alt="integration icon" />
                  </div>
                </figure>
              </div>

              <div className="flex gap-8 lg:gap-[50px] xl:gap-[75px] lg:me-[60px] lg:self-end xl:me-[100px]">
                <figure
                  data-ns-animate
                  data-delay="0.5"
                  className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full"
                >
                  <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-6 rounded-full p-6">
                    <img src="./images/icons/google.svg" className="size-full" alt="integration icon" />
                  </div>
                </figure>

                <figure
                  data-ns-animate
                  data-delay="0.6"
                  className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full"
                >
                  <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-6 rounded-full p-6">
                    <img src="./images/icons/ms_yammer.svg" className="size-full" alt="integration icon" />
                  </div>
                </figure>
              </div>

              <div className="flex gap-8 lg:gap-[50px] xl:gap-[75px] lg:me-[100px] xl:me-[185px] self-end">
                <figure
                  data-ns-animate
                  data-delay="0.7"
                  className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full"
                >
                  <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-6 rounded-full p-6">
                    <img src="./images/icons/microsoft.svg" className="size-full" alt="integration icon" />
                  </div>
                </figure>

                <figure
                  data-ns-animate
                  data-delay="0.8"
                  className="size-[100px] 2xl:size-[120px] flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full"
                >
                  <div className="size-[80px] 2xl:size-[100px] bg-white dark:bg-background-6 rounded-full p-6">
                    <img src="./images/icons/figma.svg" className="size-full" alt="integration icon" />
                  </div>
                </figure>
              </div>
            </div>
          </div>

          {/* FOR MOBILE */}
          <div className="lg:hidden flex gap-4 flex-wrap items-center justify-center md:mt-20 mt-8 sm:px-10 px-6">
            <figure
              data-ns-animate
              data-delay="0.4"
              className="sm:size-[75px] size-14 flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full"
            >
              <div className="sm:size-[60px] size-10 bg-white dark:bg-background-6 rounded-full p-2">
                <img src="./images/icons/google-meet.svg" className="size-full" alt="integration icon" />
              </div>
            </figure>

            <figure
              data-ns-animate
              data-delay="0.4"
              className="sm:size-[75px] size-14 flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full"
            >
              <div className="sm:size-[60px] size-10 bg-white dark:bg-background-6 rounded-full p-2">
                <img src="./images/icons/gmail.svg" className="size-full" alt="integration icon" />
              </div>
            </figure>

            <figure
              data-ns-animate
              data-delay="0.4"
              className="sm:size-[75px] size-14 flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full"
            >
              <div className="sm:size-[60px] size-10 bg-white dark:bg-background-6 rounded-full p-2">
                <img src="./images/icons/marvel.svg" className="size-full" alt="integration icon" />
              </div>
            </figure>

            <figure
              data-ns-animate
              data-delay="0.4"
              className="sm:size-[75px] size-14 flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full"
            >
              <div className="sm:size-[60px] size-10 bg-white dark:bg-background-6 rounded-full p-2">
                <img src="./images/icons/confluence.svg" className="size-full" alt="integration icon" />
              </div>
            </figure>

            <figure
              data-ns-animate
              data-delay="0.5"
              className="sm:size-[75px] size-14 flex items-center justify-center bg-background-2 dark:bg-background-7 rounded-full"
            >
              <div className="sm:size-[60px] size-10 bg-white dark:bg-background-6 rounded-full p-2">
                <img src="./images/icons/google.svg" className="size-full" alt="integration icon" />
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-background-3 dark:bg-background-5 md:py-[100px] py-[50px]">
        <div className="main-container">
          <div className="text-center space-y-3 mb-[70px]">
            <h2
              data-ns-animate
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
              Join the NextSaaS community
            </h2>
            <p
              data-ns-animate
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
              Ask questions, share solutions, and connect with other users around the world.
            </p>
          </div>
          <div className="grid grid-cols-12 md:gap-8 gap-y-8">
            <div
              data-ns-animate
              data-delay="0.3"
              className="col-span-12 md:col-span-6 lg:col-span-4"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="space-y-6 text-center bg-background-1 rounded-[20px] sm:p-11 p-7 dark:bg-background-6">
                <div className="mx-auto">
                  <span className="ns-shape-9 text-[52px] text-secondary dark:text-accent"> </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-heading-5">Open discussions</h3>
                  <p>Learn how to streamline your workflow with smart automation.</p>
                </div>
              </div>
            </div>
            <div
              data-ns-animate
              data-delay="0.4"
              className="col-span-12 md:col-span-6 lg:col-span-4"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="space-y-6 text-center bg-background-1 rounded-[20px] sm:p-11 p-7 dark:bg-background-6">
                <div className="mx-auto">
                  <span className="ns-shape-3 text-[52px] text-secondary dark:text-accent"> </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-heading-5">Use case sharing</h3>
                  <p>
                    Monitor your suppliers, manage purchase orders seamlessly, and keep an eye on your
                  </p>
                </div>
              </div>
            </div>
            <div
              data-ns-animate
              data-delay="0.5"
              className="col-span-12 md:col-span-6 lg:col-span-4"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="space-y-6 text-center bg-background-1 rounded-[20px] sm:p-11 p-7 dark:bg-background-6">
                <div className="mx-auto">
                  <span className="ns-shape-12 text-[52px] text-secondary dark:text-accent"> </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-heading-5">Feedback &amp; feature requests</h3>
                  <p>
                    Help your team stay aligned and productive using shared dashboards and custom roles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-[50px] md:py-20 lg:py-28 dark:bg-background-5 bg-white"
        aria-label="Use Case Overview"
      >
        <div className="main-container">
          <div className="flex items-center flex-col lg:flex-row justify-between">
            {/* Left content */}
            <div className="xl:max-w-[650px] lg:max-w-[476px] max-[400px]:max-w-[300px] w-full space-y-5 text-center lg:text-left">
              <span
                data-ns-animate
                data-delay="0.3"
                className="badge badge-green badge-yellow-v2"
              >
                Get started
              </span>

              <div className="space-y-3">
                <h2
                  data-ns-animate
                  data-delay="0.4"
                  className="text-secondary dark:text-accent text-heading-5 sm:text-heading-4 lg:text-heading-2"
                >
                  Ready to start earning with NextSaaS?
                </h2>

                <p data-ns-animate data-delay="0.5">
                  If you have any questions, feel free to reach out to our team.
                </p>
              </div>
            </div>

            {/* Right content */}
            <div className="lg:basis-[466px] space-y-6 md:ml-0 xl:ml-[100px] pt-[40px] lg:pt-[67px] w-full sm:w-[80%] md:w-[60%]">
              {/* Form */}
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
                  className="px-[18px] shadow-1 h-12 py-3 placeholder:text-secondary/50 rounded-full border border-stroke-1 lg:max-w-[340px] md:w-[71%] w-full dark:border-stroke-7 dark:placeholder:text-accent/60 focus:outline-none focus:border-primary-600 dark:focus:border-primary-400 dark:text-accent font-normal"
                />

                <button
                  type="submit"
                  className="btn btn-md btn-primary h-12 w-full sm:w-[28%] lg:w-auto hover:btn-secondary dark:hover:btn-accent"
                >
                  Get started
                </button>
              </form>

              {/* Benefits */}
              <ul className="flex flex-row items-center justify-center gap-x-4 sm:gap-x-6 lg:justify-start">
                {[
                  "No credit card required",
                  "14-Day free trial",
                ].map((text, index) => (
                  <li
                    key={text}
                    data-ns-animate
                    data-delay={0.7 + index * 0.1}
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

      <Footer />
      
      {/* Animation CSS */}
      <style global jsx>{`
        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-cardReveal {
          animation: cardReveal 0.5s forwards ease;
        }
      `}</style>
    </div>
    </main>
  );
}
