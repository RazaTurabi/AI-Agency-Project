"use client";

import { useEffect, useRef,useState } from "react";
import Footer from "../footer";
import Header from "../header";

type Card = {
  id: number;
  image: string;
  headline: string;
  description: string;
  result: string;
  url: string;
};

const cardsData: Card[] = [
  {
    id: 1,
    image: "./images/ns-img-436.png",
    headline: "Acme agency – marketing & automation",
    description: "Automated campaign tracking and lead scoring",
    result: "70% improvement in qualified leads",
    url: "./decentralized-finance-case-study-details.html",
  },
  {
    id: 2,
    image: "./images/ns-img-434.png",
    headline: "InsightAI – product development visibility",
    description: "Connected product analytics and team workflows",
    result: "50% faster feature rollout",
    url: "./decentralized-finance-case-study-details.html",
  },
  {
    id: 3,
    image: "./images/ns-img-435.png",
    headline: "MediCore – secure data reporting",
    description: "HIPAA-compliant data dashboards for healthcare",
    result: "Saved 15 hours/week in manual entry",
    url: "./decentralized-finance-case-study-details.html",
  },
  {
    id: 4,
    image: "./images/ns-img-435.png",
    headline: "MediCore – secure data reporting",
    description: "HIPAA-compliant data dashboards for healthcare",
    result: "Saved 15 hours/week in manual entry",
    url: "./decentralized-finance-case-study-details.html",
  },
  {
    id: 5,
    image: "./images/ns-img-435.png",
    headline: "MediCore – secure data reporting",
    description: "HIPAA-compliant data dashboards for healthcare",
    result: "Saved 15 hours/week in manual entry",
    url: "./decentralized-finance-case-study-details.html",
  },
  {
    id: 6,
    image: "./images/ns-img-435.png",
    headline: "MediCore – secure data reporting",
    description: "HIPAA-compliant data dashboards for healthcare",
    result: "Saved 15 hours/week in manual entry",
    url: "./decentralized-finance-case-study-details.html",
  },
  {
    id: 7,
    image: "./images/ns-img-435.png",
    headline: "MediCore – secure data reporting",
    description: "HIPAA-compliant data dashboards for healthcare",
    result: "Saved 15 hours/week in manual entry",
    url: "./decentralized-finance-case-study-details.html",
  },
  {
    id: 8,
    image: "./images/ns-img-435.png",
    headline: "MediCore – secure data reporting",
    description: "HIPAA-compliant data dashboards for healthcare",
    result: "Saved 15 hours/week in manual entry",
    url: "./decentralized-finance-case-study-details.html",
  },
  {
    id: 9,
    image: "./images/ns-img-435.png",
    headline: "MediCore – secure data reporting",
    description: "HIPAA-compliant data dashboards for healthcare",
    result: "Saved 15 hours/week in manual entry",
    url: "./decentralized-finance-case-study-details.html",
  },
  {
    id: 10,
    image: "./images/ns-img-435.png",
    headline: "MediCore – secure data reporting",
    description: "HIPAA-compliant data dashboards for healthcare",
    result: "Saved 15 hours/week in manual entry",
    url: "./decentralized-finance-case-study-details.html",
  },
  {
    id: 11,
    image: "./images/ns-img-435.png",
    headline: "MediCore – secure data reporting",
    description: "HIPAA-compliant data dashboards for healthcare",
    result: "Saved 15 hours/week in manual entry",
    url: "./decentralized-finance-case-study-details.html",
  },
  {
    id: 12,
    image: "./images/ns-img-435.png",
    headline: "MediCore – secure data reporting",
    description: "HIPAA-compliant data dashboards for healthcare",
    result: "Saved 15 hours/week in manual entry",
    url: "./decentralized-finance-case-study-details.html",
  },


  // 👉 Add more cards if you want extra pages
];

const decentralizedFinanceCaseStudyPage =() => {

    const pageSize = 3; // number of cards per page
    const totalPages = Math.ceil(cardsData.length / pageSize);

    const [currentPage, setCurrentPage] = useState(1);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);

    const start = (currentPage - 1) * pageSize;
    const currentCards = cardsData.slice(start, start + pageSize);

    // Fade-in animation when in view
    useEffect(() => {
        const observer = new IntersectionObserver(
        entries => {
            entries.forEach(e => e.isIntersecting && setIsVisible(true));
        },
        { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return(
        <div>
            <main>
                <Header />


                <section className="pb-[20px] lg:pb-[100px] xl:pt-[180px] md:pt-42 sm:pt-36 pt-32">
                <div className="main-container">
                    <div className="space-y-[70px]">
                    <div className="max-w-[800px] space-y-3">
                        <h1
                        id="case-study-title"
                        data-ns-animate=""
                        data-delay="0.2"
                        className="text-heading-3 md:text-heading-2 font-normal"
                        style={
                            {
                            opacity: 1,
                            filter: "blur(0px)",
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate(0px, 0px)",
                            } as any
                        }
                        >
                        How leading teams grow with Creative Portfolio
                        </h1>
                        <p
                        data-ns-animate=""
                        data-delay="0.3"
                        style={
                            {
                            opacity: 1,
                            filter: "blur(0px)",
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate(0px, 0px)",
                            } as any
                        }
                        >
                        From fast-moving startups to established enterprises, businesses around the world use
                        NextSaaS to streamline operations, increase visibility, and accelerate growth. Explore how
                        our platform delivers real-world impact.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2
                        data-ns-animate=""
                        data-delay="0.4"
                        className="text-heading-4"
                        style={
                            {
                            opacity: 1,
                            filter: "blur(0px)",
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate(0px, 0px)",
                            } as any
                        }
                        >
                        Featured case study
                        </h2>
                        <ul className="max-w-[435px] space-y-2">
                        <li
                            data-ns-animate=""
                            data-delay="0.5"
                            data-instant=""
                            className="text-lg font-medium leading-[150%] text-secondary dark:text-accent"
                            style={
                            {
                                opacity: 1,
                                filter: "blur(0px)",
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                            } as any
                            }
                        >
                            Client:
                            <span className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal">
                            VelocityFinance
                            </span>
                        </li>
                        <li
                            data-ns-animate=""
                            data-delay="0.6"
                            data-instant=""
                            className="text-lg font-medium leading-[150%] text-secondary dark:text-accent"
                            style={
                            {
                                opacity: 1,
                                filter: "blur(0px)",
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                            } as any
                            }
                        >
                            Industry:
                            <span className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal">
                            Fintech
                            </span>
                        </li>
                        <li
                            data-ns-animate=""
                            data-delay="0.7"
                            data-instant=""
                            className="text-lg font-medium leading-[150%] text-secondary dark:text-accent"
                            style={
                            {
                                opacity: 1,
                                filter: "blur(0px)",
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                            } as any
                            }
                        >
                            Use case:
                            <span className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal">
                            Automating financial reporting &amp; real-time analytics
                            </span>
                        </li>
                        </ul>
                    </div>

                    <figure
                        data-ns-animate=""
                        data-delay="0.8"
                        data-instant=""
                        data-start="top 97%"
                        className="max-w-[1288px] rounded-4xl overflow-hidden"
                        style={
                        {
                            opacity: 1,
                            filter: "blur(0px)",
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate(0px, 0px)",
                        } as any
                        }
                    >
                        <img
                        src="./images/ns-img-380.png"
                        alt="VelocityFinance case study dashboard showing financial reporting interface"
                        className="size-full object-cover"
                        />
                    </figure>

                    <div className="space-y-1">
                        <h3
                        data-ns-animate=""
                        data-delay="0.1"
                        className="text-heading-4"
                        style={
                            {
                            opacity: 1,
                            filter: "blur(0px)",
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate(0px, 0px)",
                            } as any
                        }
                        >
                        The challenge
                        </h3>
                        <p
                        data-ns-animate=""
                        data-delay="0.2"
                        className="max-w-[705px]"
                        style={
                            {
                            opacity: 1,
                            filter: "blur(0px)",
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate(0px, 0px)",
                            } as any
                        }
                        >
                        VelocityFinance was managing its financial operations manually, using a combination of
                        spreadsheets and disconnected tools. Their reporting process was slow, error-prone, and
                        difficult to scale.
                        </p>
                    </div>

                    <div className="flex items-center flex-col md:flex-row gap-16 justify-between">
                        <div className="space-y-6">
                        <div>
                            <h4
                            data-ns-animate=""
                            data-delay="0.3"
                            className="text-heading-4"
                            style={
                                {
                                opacity: 1,
                                filter: "blur(0px)",
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                                } as any
                            }
                            >
                            The Solution
                            </h4>
                            <p
                            data-ns-animate=""
                            data-delay="0.4"
                            style={
                                {
                                opacity: 1,
                                filter: "blur(0px)",
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                                } as any
                            }
                            >
                            NextSaaS helped them:
                            </p>
                        </div>
                        <ul className="space-y-2">
                            <li
                            data-ns-animate=""
                            data-delay="0.3"
                            style={
                                {
                                opacity: 1,
                                filter: "blur(0px)",
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                                } as any
                            }
                            >
                            <p className="before:content-[''] before:size-2 before:bg-secondary dark:before:bg-accent before:rounded-full before:inline-block before:mr-3">
                                Set up real-time dashboards with custom financial KPIs
                            </p>
                            </li>
                            <li
                            data-ns-animate=""
                            data-delay="0.4"
                            style={
                                {
                                opacity: 1,
                                filter: "blur(0px)",
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                                } as any
                            }
                            >
                            <p className="before:content-[''] before:size-2 before:bg-secondary dark:before:bg-accent before:rounded-full before:inline-block before:mr-3">
                                Automate monthly reporting for leadership and investors
                            </p>
                            </li>
                            <li
                            data-ns-animate=""
                            data-delay="0.5"
                            style={
                                {
                                opacity: 1,
                                filter: "blur(0px)",
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                                } as any
                            }
                            >
                            <p className="before:content-[''] before:size-2 before:bg-secondary dark:before:bg-accent before:rounded-full before:inline-block before:mr-3">
                                Integrate their accounting tools and CRM into one platform
                            </p>
                            </li>
                        </ul>
                        </div>

                        <div className="space-y-6">
                        <div>
                            <h4
                            data-ns-animate=""
                            data-delay="0.3"
                            className="text-heading-4"
                            style={
                                {
                                opacity: 1,
                                filter: "blur(0px)",
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                                } as any
                            }
                            >
                            The results
                            </h4>
                            <p
                            data-ns-animate=""
                            data-delay="0.4"
                            style={
                                {
                                opacity: 1,
                                filter: "blur(0px)",
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                                } as any
                            }
                            >
                            NextSaaS helped them:
                            </p>
                        </div>
                        <ul className="space-y-2">
                            <li
                            data-ns-animate=""
                            data-delay="0.3"
                            style={
                                {
                                opacity: 1,
                                filter: "blur(0px)",
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                                } as any
                            }
                            >
                            <p className="before:content-[''] before:size-2 before:bg-secondary dark:before:bg-accent before:rounded-full before:inline-block before:mr-3">
                                82% reduction in reporting time
                            </p>
                            </li>
                            <li
                            data-ns-animate=""
                            data-delay="0.4"
                            style={
                                {
                                opacity: 1,
                                filter: "blur(0px)",
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                                } as any
                            }
                            >
                            <p className="before:content-[''] before:size-2 before:bg-secondary dark:before:bg-accent before:rounded-full before:inline-block before:mr-3">
                                95% accuracy increase across all financial statements
                            </p>
                            </li>
                            <li
                            data-ns-animate=""
                            data-delay="0.5"
                            style={
                                {
                                opacity: 1,
                                filter: "blur(0px)",
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                                } as any
                            }
                            >
                            <p className="before:content-[''] before:size-2 before:bg-secondary dark:before:bg-accent before:rounded-full before:inline-block before:mr-3">
                                4x faster decision-making during strategic reviews
                            </p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

                <section className="pb-[80px] lg:pb-[100px]">
                <div className="main-container">
                    <div className="space-y-14">
                    {/* heading  */}
                    <div className="space-y-3">
                        <h2
                        id="testimonials-title"
                        data-ns-animate=""
                        data-delay="0.1"
                        style={{ opacity: 1, filter: "blur(0px)", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" }}
                        >
                        What our users say
                        </h2>

                        <blockquote>
                        <p
                            data-ns-animate=""
                            data-delay="0.2"
                            style={{ opacity: 1, filter: "blur(0px)", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" }}
                        >
                            "Creative Portfolio delivered our entire platform ahead of schedule—flawless execution
                            and real partnership."
                        </p>
                        </blockquote>
                    </div>

                    {/* testimonial card  */}
                    <div
                        data-ns-animate=""
                        data-delay="0.3"
                        className="bg-secondary dark:bg-background-6 p-8 rounded-[20px] space-y-6 max-w-[950px]"
                        style={{ opacity: 1, filter: "blur(0px)", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" }}
                    >
                        <figure className="size-14 rounded-full overflow-hidden bg-(image:--color-gradient-7)">
                        <img
                            src="./images/ns-avatar-5.png"
                            className="size-full object-cover"
                            alt="Darren Mitchell, CFO at VelocityFinance"
                        />
                        </figure>

                        <blockquote cite="https://velocityfinance.com">
                        <p className="text-white dark:text-accent/60">
                            "NextSaaS transformed our reporting process, reducing what used to take hours into just
                            a few clicks. It has become our definitive source of truth, streamlining our operations
                            and enhancing our decision-making capabilities."
                        </p>
                        </blockquote>

                        <div className="pb-4">
                        <h4 className="text-white text-lg font-medium leading-[150%]">Darren Mitchell</h4>
                        <p className="text-tagline-2 text-accent/60">CFO at VelocityFinance</p>
                        </div>
                    </div>

                    <div
                        data-ns-animate=""
                        data-delay="0.4"
                        className="text-center lg:text-left"
                        style={{ opacity: 1, filter: "blur(0px)", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" }}
                    >
                        <a
                        href="./decentralized-finance-case-study-details.html"
                        className="btn btn-primary hover:btn-secondary dark:hover:btn-accent lg:btn-xl btn-md w-[85%] md:w-[55%] lg:w-auto"
                        aria-label="Read the full VelocityFinance case study"
                        >
                        <span>Read full case study</span>
                        </a>
                    </div>
                    </div>
                </div>
                </section>

                <section
                    ref={sectionRef}
                    className="py-[50px] lg:py-[100px]"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0px)" : "translateY(40px)",
                        transition: "all .8s ease",
                    }}
                    >
                    <div className="main-container">
                        <div className="space-y-[70px]">
                        {/* heading */}
                        <div className="space-y-3 text-center">
                            <h2 id="success-stories-heading" data-ns-animate="" data-delay="0.1" className="text-heading-3">
                            More success stories
                            </h2>
                            <p data-ns-animate="" data-delay="0.2" className="max-w-[738px] mx-auto">
                            Our recent news and insights highlight the latest developments, achievements, and thought
                            leadership shaping our journey forward. From product innovations and strategic
                            partnerships to industry trends
                            </p>
                        </div>

                        {/* success blog */}
                        <div className="space-y-14">
                            {/* cards */}
                            <div className="grid grid-cols-12 items-start justify-center gap-8">
                            {currentCards.map((card, i) => (
                                <article
                                key={card.id}
                                data-ns-animate=""
                                data-delay={(i + 2) / 10}
                                className="group max-w-[409px] col-span-12 md:col-span-6 lg:col-span-4"
                                itemScope
                                itemType="http://schema.org/Article"
                                >
                                <div className="bg-background-1 dark:bg-background-6 rounded-[20px] scale-100 hover:scale-[102%] transition-transform duration-500 hover:transition-transform hover:duration-500">
                                    <figure className="max-w-[409px] h-[260px] overflow-hidden rounded-t-[20px]">
                                    <img src={card.image} alt={card.headline} className="size-full object-cover" itemProp="image" />
                                    </figure>

                                    {/* content */}
                                    <div className="p-6 space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="text-heading-5" itemProp="headline">
                                        {card.headline}
                                        </h3>
                                        <div className="space-y-2">
                                        <p itemProp="description">{card.description}</p>
                                        <p>
                                            <span className="text-secondary dark:text-accent font-medium">Results:</span>{" "}
                                            {card.result}
                                        </p>
                                        </div>
                                    </div>

                                    {/* btn */}
                                    <div>
                                        <a
                                        href={card.url}
                                        rel="noopener noreferrer"
                                        className="btn btn-md btn-white dark:btn-transparent hover:btn-primary"
                                        aria-label={`Read more about ${card.headline}`}
                                        itemProp="url"
                                        >
                                        <span>Read more</span>
                                        </a>
                                    </div>
                                    </div>
                                </div>
                                </article>
                            ))}
                            </div>

                            {/* pagination */}
                            <ul className="flex items-center justify-center mt-14 gap-2">
                            <li className="group">
                                <button
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                className="flex w-10 h-10 items-center justify-center border border-stroke-3 dark:border-stroke-7 rounded-full hover:bg-primary-500 duration-300 group"
                                >
                                <span>
                                    &lt;
                                </span>
                                </button>
                            </li>

                            {[...Array(totalPages)].map((_, i) => (
                                <li key={i} className={`group ${currentPage === i + 1 ? "page-active" : ""}`}>
                                <button
                                    onClick={() => setCurrentPage(i + 1)}
                                    className="flex w-10 h-10 items-center text-tagline-2 font-medium justify-center rounded-full dark:text-accent hover:bg-primary-500 duration-300 hover:text-accent group-[.page-active]:bg-primary-500 group-[.page-active]:text-accent dark:group-[.page-active]:bg-accent dark:group-[.page-active]:text-primary-500"
                                >
                                    {i + 1}
                                </button>
                                </li>
                            ))}

                            <li className="group">
                                <button
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                className="flex w-10 h-10 items-center justify-center border border-stroke-3 dark:border-stroke-7 rounded-full hover:bg-primary-500 duration-300 group"
                                >
                                <span>
                                    &gt;
                                </span>
                                </button>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </section>

                <section className="pt-[80px] lg:pt-[100px] pb-24 md:pb-28 lg:pb-32 xl:pb-[200px]">
                <div className="main-container">
                    <div
                    data-ns-animate=""
                    data-delay="0.1"
                    className="relative z-10"
                    style={{
                        opacity: 1,
                        filter: "blur(0px)",
                        transform: "translate(0px, 0px)",
                    }}
                    >
                    <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 rounded-[20px] overflow-hidden">
                        <img
                        src="./images/ns-img-14.png"
                        alt="Decorative background pattern"
                        className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="py-14 px-6 md:px-11 grid max-sm:grid-cols-1 grid-cols-2 max-sm:gap-10 gap-5">
                        <div className="max-w-[500px]">
                        <h2 id="feature-heading" className="text-accent text-heading-5 mb-8">
                            Here are some of the use cases we've successfully addressed: optimizing workflow
                            efficiency, enhancing customer
                        </h2>

                        <div>
                            <a
                            href="./decentralized-finance-services.html"
                            className="btn btn-md dark:btn-dark dark:hover:btn-white hover:btn-primary border-0 btn-white"
                            >
                            <span>Get started</span>
                            </a>
                        </div>
                        </div>

                        <div>
                        <ul className="space-y-4">
                            {[
                            "Centralized analytics for leadership teams",
                            "Workflow automation across sales, ops, and product",
                            "Improved onboarding and client management",
                            "Marketing attribution and ROI reporting",
                            "Secure and compliant data access",
                            ].map((text, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
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

                                <span className="text-accent dark:text-accent/60">{text}</span>
                            </li>
                            ))}
                        </ul>
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


            </main>
        </div>
    );
}

export default decentralizedFinanceCaseStudyPage;