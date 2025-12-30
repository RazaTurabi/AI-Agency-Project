"use client";

import Header from "../header";
import Footer from "../footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import ArticleCard from "./ArticleCard";

import "swiper/css";
import "swiper/css/pagination";

import { useState } from "react";


const articles = [
  {
    id: 1,
    image: "/images/ns-img-443.png",
    category: "Crypto",
    date: "14.05.2025",
    readTime: "1 min",
    title: "Product-led growth vs sales-led growth which one wins",
    href: "/BlogDetails",
    delay: 0.3,
  },
  {
    id: 2,
    image: "/images/ns-img-444.png",
    category: "Finance",
    date: "15.05.2025",
    readTime: "2 min",
    title: "Our saas seo strategy 6 months 300 percent organic traffic growth",
    href: "/BlogDetails",
    delay: 0.4,
  },
  {
    id: 3,
    image: "/images/ns-img-444.png",
    category: "Marketing",
    date: "16.05.2025",
    readTime: "3 min",
    title: "10 proven marketing strategies for rapid business",
    href: "/BlogDetails",
    delay: 0.5,
  },
  {
    id: 4,
    image: "/images/ns-img-444.png",
    category: "AI",
    date: "17.05.2025",
    readTime: "2 min",
    title: "How ai is reshaping modern saas platforms",
    href: "/BlogDetails",
    delay: 0.6,
  },
  {
    id: 5,
    image: "/images/ns-img-444.png",
    category: "Startup",
    date: "18.05.2025",
    readTime: "3 min",
    title: "Early stage startup mistakes founders repeat every year",
    href: "/BlogDetails",
    delay: 0.3,
  },
  {
    id: 6,
    image: "/images/ns-img-444.png",
    category: "Business",
    date: "19.05.2025",
    readTime: "4 min",
    title: "How to validate a business idea before building product",
    href: "/BlogDetails",
    delay: 0.4,
  },
  {
    id: 7,
    image: "/images/ns-img-444.png",
    category: "Finance",
    date: "20.05.2025",
    readTime: "2 min",
    title: "Cash flow management tips every startup must follow",
    href: "/BlogDetails",
    delay: 0.5,
  },
  {
    id: 8,
    image: "/images/ns-img-444.png",
    category: "Growth",
    date: "21.05.2025",
    readTime: "3 min",
    title: "Growth hacking techniques used by fast scaling saas brands",
    href: "/BlogDetails",
    delay: 0.6,
  },
  {
    id: 9,
    image: "/images/ns-img-444.png",
    category: "AI",
    date: "22.05.2025",
    readTime: "2 min",
    title: "Artificial intelligence trends shaping digital products",
    href: "/BlogDetails",
    delay: 0.3,
  },
  {
    id: 10,
    image: "/images/ns-img-444.png",
    category: "Marketing",
    date: "23.05.2025",
    readTime: "4 min",
    title: "Content marketing framework for consistent lead generation",
    href: "/BlogDetails",
    delay: 0.4,
  },

  /* ---------- 11 to 40 ---------- */

  {
    id: 11,
    image: "/images/ns-img-444.png",
    category: "SaaS",
    date: "24.05.2025",
    readTime: "3 min",
    title: "Building scalable saas architecture for long term growth",
    href: "/BlogDetails",
    delay: 0.5,
  },
  {
    id: 12,
    image: "/images/ns-img-444.png",
    category: "Startup",
    date: "25.05.2025",
    readTime: "2 min",
    title: "Why most startups fail within first eighteen months",
    href: "/BlogDetails",
    delay: 0.6,
  },
  {
    id: 13,
    image: "/images/ns-img-444.png",
    category: "Finance",
    date: "26.05.2025",
    readTime: "3 min",
    title: "Bootstrapping vs venture capital which suits your startup",
    href: "/BlogDetails",
    delay: 0.3,
  },
  {
    id: 14,
    image: "/images/ns-img-444.png",
    category: "Growth",
    date: "27.05.2025",
    readTime: "4 min",
    title: "Scaling digital products without breaking core systems",
    href: "/BlogDetails",
    delay: 0.4,
  },
  {
    id: 15,
    image: "/images/ns-img-444.png",
    category: "AI",
    date: "28.05.2025",
    readTime: "2 min",
    title: "Using ai automation to reduce operational costs",
    href: "/BlogDetails",
    delay: 0.5,
  },
  {
    id: 16,
    image: "/images/ns-img-444.png",
    category: "Marketing",
    date: "29.05.2025",
    readTime: "3 min",
    title: "Seo strategies that still work in competitive niches",
    href: "/BlogDetails",
    delay: 0.6,
  },
  {
    id: 17,
    image: "/images/ns-img-444.png",
    category: "Business",
    date: "30.05.2025",
    readTime: "4 min",
    title: "How to build strong brand positioning in crowded markets",
    href: "/BlogDetails",
    delay: 0.3,
  },
  {
    id: 18,
    image: "/images/ns-img-444.png",
    category: "Startup",
    date: "31.05.2025",
    readTime: "2 min",
    title: "Founder mindset shifts required after first product launch",
    href: "/BlogDetails",
    delay: 0.4,
  },
  {
    id: 19,
    image: "/images/ns-img-444.png",
    category: "SaaS",
    date: "01.06.2025",
    readTime: "3 min",
    title: "Reducing churn rate using customer feedback loops",
    href: "/BlogDetails",
    delay: 0.5,
  },
  {
    id: 20,
    image: "/images/ns-img-444.png",
    category: "Growth",
    date: "02.06.2025",
    readTime: "4 min",
    title: "Metrics every growth focused team should track",
    href: "/BlogDetails",
    delay: 0.6,
  },

  /* ---------- 21 to 40 ---------- */

  {
    id: 21,
    image: "/images/ns-img-444.png",
    category: "AI",
    date: "03.06.2025",
    readTime: "2 min",
    title: "Future of ai powered personalization in products",
    href: "/BlogDetails",
    delay: 0.3,
  },
  {
    id: 22,
    image: "/images/ns-img-444.png",
    category: "Marketing",
    date: "04.06.2025",
    readTime: "3 min",
    title: "Email marketing workflows that convert consistently",
    href: "/BlogDetails",
    delay: 0.4,
  },
  {
    id: 23,
    image: "/images/ns-img-444.png",
    category: "Finance",
    date: "05.06.2025",
    readTime: "2 min",
    title: "Managing startup burn rate during early growth phase",
    href: "/BlogDetails",
    delay: 0.5,
  },
  {
    id: 24,
    image: "/images/ns-img-444.png",
    category: "Business",
    date: "06.06.2025",
    readTime: "4 min",
    title: "Operational systems that help founders scale faster",
    href: "/BlogDetails",
    delay: 0.6,
  },
  {
    id: 25,
    image: "/images/ns-img-444.png",
    category: "SaaS",
    date: "07.06.2025",
    readTime: "3 min",
    title: "Feature prioritization framework for product teams",
    href: "/BlogDetails",
    delay: 0.3,
  },
  {
    id: 26,
    image: "/images/ns-img-444.png",
    category: "Growth",
    date: "08.06.2025",
    readTime: "4 min",
    title: "How viral loops help products grow organically",
    href: "/BlogDetails",
    delay: 0.4,
  },
  {
    id: 27,
    image: "/images/ns-img-444.png",
    category: "AI",
    date: "09.06.2025",
    readTime: "2 min",
    title: "Machine learning use cases every startup should explore",
    href: "/BlogDetails",
    delay: 0.5,
  },
  {
    id: 28,
    image: "/images/ns-img-444.png",
    category: "Marketing",
    date: "10.06.2025",
    readTime: "3 min",
    title: "Building high converting landing pages for saas",
    href: "/BlogDetails",
    delay: 0.6,
  },
  {
    id: 29,
    image: "/images/ns-img-444.png",
    category: "Startup",
    date: "11.06.2025",
    readTime: "2 min",
    title: "Hiring first ten employees without damaging culture",
    href: "/BlogDetails",
    delay: 0.3,
  },
  {
    id: 30,
    image: "/images/ns-img-444.png",
    category: "Business",
    date: "12.06.2025",
    readTime: "4 min",
    title: "Leadership skills founders must develop early",
    href: "/BlogDetails",
    delay: 0.4,
  },
  {
    id: 31,
    image: "/images/ns-img-444.png",
    category: "SaaS",
    date: "13.06.2025",
    readTime: "3 min",
    title: "Customer onboarding strategies that improve retention",
    href: "/BlogDetails",
    delay: 0.5,
  },
  {
    id: 32,
    image: "/images/ns-img-444.png",
    category: "Growth",
    date: "14.06.2025",
    readTime: "4 min",
    title: "Experimentation culture for continuous growth teams",
    href: "/BlogDetails",
    delay: 0.6,
  },
  {
    id: 33,
    image: "/images/ns-img-444.png",
    category: "AI",
    date: "15.06.2025",
    readTime: "2 min",
    title: "Ai driven analytics for smarter decision making",
    href: "/BlogDetails",
    delay: 0.3,
  },
  {
    id: 34,
    image: "/images/ns-img-444.png",
    category: "Marketing",
    date: "16.06.2025",
    readTime: "3 min",
    title: "Social media growth strategies for modern brands",
    href: "/BlogDetails",
    delay: 0.4,
  },
  {
    id: 35,
    image: "/images/ns-img-444.png",
    category: "Finance",
    date: "17.06.2025",
    readTime: "2 min",
    title: "Understanding unit economics before scaling",
    href: "/BlogDetails",
    delay: 0.5,
  },
  {
    id: 36,
    image: "/images/ns-img-444.png",
    category: "Startup",
    date: "18.06.2025",
    readTime: "3 min",
    title: "Transitioning from founder led sales to teams",
    href: "/BlogDetails",
    delay: 0.6,
  },
  {
    id: 37,
    image: "/images/ns-img-444.png",
    category: "Business",
    date: "19.06.2025",
    readTime: "4 min",
    title: "Decision making frameworks for fast moving startups",
    href: "/BlogDetails",
    delay: 0.3,
  },
  {
    id: 38,
    image: "/images/ns-img-444.png",
    category: "SaaS",
    date: "20.06.2025",
    readTime: "3 min",
    title: "Improving product adoption using behavioral data",
    href: "/BlogDetails",
    delay: 0.4,
  },
  {
    id: 39,
    image: "/images/ns-img-444.png",
    category: "Growth",
    date: "21.06.2025",
    readTime: "4 min",
    title: "Long term growth planning beyond first million users",
    href: "/BlogDetails",
    delay: 0.5,
  },
  {
    id: 40,
    image: "/images/ns-img-444.png",
    category: "AI",
    date: "22.06.2025",
    readTime: "2 min",
    title: "Ethical considerations when building ai products",
    href: "/BlogDetails",
    delay: 0.6,
  },
];



export default function Page() {

  const ARTICLES_PER_PAGE = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE)

  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;

  const currentArticles = articles.slice(startIndex, endIndex);



  return (
    <>
      <Header />

      <main className="dark:bg-background-7">

        {/* BLOG SLIDER SECTION */}
        <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] xl:pt-[180px] md:pt-42 sm:pt-36 pt-32">
          <div className="main-container">
            <div className="space-y-14 md:space-y-[70px]">

              {/* Heading */}
              <div className="max-w-[700px] space-y-3 mx-auto text-center">
                <h2 data-ns-animate data-delay="0.2">
                  Our Latest Thinking Articles
                </h2>
                <p data-ns-animate data-delay="0.3">
                  Our recent news &amp; insights highlight the latest developments
                  and trends shaping our industry.
                </p>
              </div>

              {/* Slider */}
              <div className="relative" data-ns-animate data-delay="0.4">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={40}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  speed={1000}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  className="blog-article-swiper"
                >
                  <SwiperSlide>
                    <ArticleCard image="/images/ns-img-430.png" />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ArticleCard image="/images/ns-img-431.png" />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ArticleCard image="/images/ns-img-432.png" />
                  </SwiperSlide>
                </Swiper>
              </div>

            </div>
          </div>
        </section>



    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="main-container">
        {/* Heading */}
        <div className="text-center space-y-3 mb-[70px]">
          <h2 data-ns-animate data-delay="0.1">
            Our recent{" "}
            <span className="text-primary-500 inline-block">
              news &amp; insights
            </span>
          </h2>

          <p
            data-ns-animate
            data-delay="0.2"
            className="max-w-[738px] mx-auto"
          >
            Our recent news and insights highlight the latest developments,
            achievements, and thought leadership shaping our journey forward.
          </p>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-[70px]">
          {currentArticles.map((article, index) => (
            <article
              key={article.id}
              data-ns-animate
              data-delay={article.delay}
              className="group"
            >
              <div className="bg-background-1 dark:bg-background-5 rounded-[20px] overflow-hidden relative scale-100 hover:scale-[102%] transition-transform duration-500">
                <figure className="xl:min-h-[310px] xl:max-h-[310px] rounded-b-[20px] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={600}
                    height={310}
                    className="w-full h-full object-cover"
                  />
                </figure>

                <div className="p-4 md:p-6 lg:p-8 space-y-4">
                  <span className="badge badge-cyan">
                    {article.category}
                  </span>

                  <div className="flex items-center gap-4">
                    <time className="text-tagline-2 text-secondary/60 dark:text-accent/60">
                      {article.date}
                    </time>
                    <div className="w-px h-3 bg-stroke-2 dark:bg-stroke-6" />
                    <time className="text-tagline-2 text-secondary/60 dark:text-accent/60">
                      {article.readTime}
                    </time>
                  </div>

                  <h3 className="font-normal sm:text-heading-5 text-tagline-1 line-clamp-2">
                    <Link href={article.href}>
                      {article.title}
                    </Link>
                  </h3>

                  <Link
                    href={article.href}
                    className="btn btn-md btn-white hover:btn-primary dark:btn-transparent inline-block mt-6"
                  >
                    <span>Read more</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <ul
          data-ns-animate
          data-delay="0.4"
          className="flex items-center justify-center mt-14 gap-2"
        >
          {/* Prev */}
          <li className="group">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage((prev) => Math.max(prev - 1, 1));
              }}
              className="flex w-10 h-10 items-center justify-center border border-stroke-3 dark:border-stroke-7 rounded-full hover:bg-primary-500 duration-300 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                <path
                  d="M12.5 6H1.5M1.5 6L6 1.5M1.5 6L6 10.5"
                  className="stroke-secondary dark:stroke-accent group-hover:stroke-white duration-300"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>

          {/* Page 1 Active */}
          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            return (
              <li
                key={page}
                className={`group ${page === currentPage ? "page-active" : ""}`}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(page);
                  }}
                  className="flex w-10 h-10 items-center text-tagline-2 font-medium justify-center rounded-full dark:text-accent hover:bg-primary-500 duration-300 hover:text-accent group-[.page-active]:bg-primary-500 group-[.page-active]:text-accent dark:group-[.page-active]:text-accent"
                >
                  {page}
                </a>
              </li>
            );
          })}


          {/* Next */}
          <li className="group">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage((prev) => Math.min(prev + 1, totalPages));
              }}
              className="flex w-10 h-10 items-center justify-center border border-stroke-3 dark:border-stroke-7 rounded-full hover:bg-primary-500 duration-300 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                <path
                  d="M1.5 6H12.5M12.5 6L8 1.5M12.5 6L8 10.5"
                  className="stroke-secondary dark:stroke-accent group-hover:stroke-white duration-300"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>
        </ul>
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
     </main>
     <Footer/>
    </>
  )
}

