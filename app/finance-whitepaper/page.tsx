import { div } from "framer-motion/client"
import Header from "../header";
import Footer from "../footer";

const FinanceWhitepaper = () => { 

const cards = [
  {
    img: "./images/ns-img-406.jpg",
    title: "Scaling securely in the cloud",
    desc: "Learn best practices for data security, compliance, and trust in a multi-tenant SaaS environment.",
    link: "./decentralized-finance-whitepaper-details.html",
  },
  {
    img: "./images/ns-img-407.jpg",
    title: "Mastering SaaS retention metrics",
    desc: "Understand retention analysis, churn behavior, and how to increase lifetime customer value through data-driven insights.",
    link: "./decentralized-finance-whitepaper-details.html",
  },
  {
    img: "./images/ns-img-408.jpg",
    title: "AI-powered workflows",
    desc: "See how AI is changing product adoption, onboarding efficiency, and operational performance across SaaS platforms.",
    link: "./decentralized-finance-whitepaper-details.html",
  },
  {
    img: "./images/ns-img-409.jpg",
    title: "Building scalable pricing models",
    desc: "Explore usage-based pricing, hybrid subscription models, and strategies that reduce churn while improving ARR.",
    link: "./decentralized-finance-whitepaper-details.html",
  },
  {
    img: "./images/ns-img-408.jpg",
    title: "AI-powered workflows",
    desc: "See how AI is changing product adoption, onboarding efficiency, and operational performance across SaaS platforms.",
    link: "./decentralized-finance-whitepaper-details.html",
  },
  {
    img: "./images/ns-img-408.jpg",
    title: "AI-powered workflows",
    desc: "See how AI is changing product adoption, onboarding efficiency, and operational performance across SaaS platforms.",
    link: "./decentralized-finance-whitepaper-details.html",
  },
  {
    img: "./images/ns-img-408.jpg",
    title: "AI-powered workflows",
    desc: "See how AI is changing product adoption, onboarding efficiency, and operational performance across SaaS platforms.",
    link: "./decentralized-finance-whitepaper-details.html",
  },
  {
    img: "./images/ns-img-408.jpg",
    title: "AI-powered workflows",
    desc: "See how AI is changing product adoption, onboarding efficiency, and operational performance across SaaS platforms.",
    link: "./decentralized-finance-whitepaper-details.html",
  },
  {
    img: "./images/ns-img-408.jpg",
    title: "AI-powered workflows",
    desc: "See how AI is changing product adoption, onboarding efficiency, and operational performance across SaaS platforms.",
    link: "./decentralized-finance-whitepaper-details.html",
  },
  {
    img: "./images/ns-img-408.jpg",
    title: "AI-powered workflows",
    desc: "See how AI is changing product adoption, onboarding efficiency, and operational performance across SaaS platforms.",
    link: "./decentralized-finance-whitepaper-details.html",
  },
  {
    img: "./images/ns-img-408.jpg",
    title: "AI-powered workflows",
    desc: "See how AI is changing product adoption, onboarding efficiency, and operational performance across SaaS platforms.",
    link: "./decentralized-finance-whitepaper-details.html",
  },
  {
    img: "./images/ns-img-408.jpg",
    title: "AI-powered workflows",
    desc: "See how AI is changing product adoption, onboarding efficiency, and operational performance across SaaS platforms.",
    link: "./decentralized-finance-whitepaper-details.html",
  }
];

    return ( 
        <div>
            <main>
                <Header />
                    <section className="xl:pt-[170px] lg:pt-[140px] pt-[100px] xl:pb-28 lg:pb-20 pb-16">
                        <div className="main-container">
                            <div className="text-center space-y-6">
                            <span
                                data-ns-animate=""
                                data-delay="0.1"
                                className="badge badge-green-v2"
                                style={{ opacity: 1, filter: "blur(0px)", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" }}
                            >
                                Whitepapers &amp; Insights
                            </span>

                            <div className="space-y-4">
                                <h1
                                data-ns-animate=""
                                data-delay="0.2"
                                className="font-normal"
                                style={{ opacity: 1, filter: "blur(0px)", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" }}
                                >
                                Deep research. real data.<br />
                                actionable SaaS strategies.
                                </h1>

                                <p
                                data-ns-animate=""
                                data-delay="0.3"
                                style={{ opacity: 1, filter: "blur(0px)", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" }}
                                >
                                Explore our exclusive whitepapers packed with expert insights, case studies, and growth
                                playbooks for <br />
                                modern SaaS businesses. Stay ahead with knowledge that drives performance.
                                </p>
                            </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="mx-5">
                            <div className="max-w-[1880px] mx-auto bg-background-12 dark:bg-background-7 rounded-[30px] xl:py-[174px] lg:py-[120px] md:py-20 py-16">
                            <div className="main-container">
                                <div className="grid grid-cols-12 gap-6 items-stretch">

                                {/* FEATURED CARD — unchanged */}
                                <div
                                    data-ns-animate=""
                                    data-delay="0.1"
                                    className="col-span-12"
                                >
                                    <article className="p-2 rounded-4xl w-full bg-white dark:bg-background-6 group flex md:flex-row flex-col items-start gap-5 justify-between">
                                    <div className="max-w-[472px] w-full p-5 flex flex-col justify-between gap-y-5 h-full items-start md:min-h-[405px]">
                                        <div>
                                        <h2 className="text-heading-5 font-normal">
                                            The future of SaaS <br />
                                            automation (2025 Report)
                                        </h2>
                                        <p>
                                            Discover how AI-driven automation is reshaping SaaS operations, improving scalability, and reducing churn.
                                        </p>
                                        </div>

                                        <div>
                                        <a href="./decentralized-finance-whitepaper-details.html" className="btn btn-md btn-accent">
                                            <span>Read More</span>
                                        </a>
                                        </div>
                                    </div>

                                    <figure className="md:max-w-[613px] w-full md:min-h-[405px] rounded-[20px] overflow-hidden">
                                        <img
                                        src="./images/ns-img-405.jpg"
                                        alt="The future of SaaS automation"
                                        className="w-full h-full object-cover rounded-[20px] md:min-h-[405px] group-hover:scale-105 transition-all duration-500 ease-in-out"
                                        />
                                    </figure>
                                    </article>
                                </div>

                                {/* SMALL CARDS — USING MAP */}
                                {cards.map((card, i) => (
                                    <div
                                    key={i}
                                    data-ns-animate=""
                                    data-delay={0.2 + i * 0.1}
                                    className="col-span-12 sm:col-span-6 lg:col-span-4"
                                    >
                                    <article className="p-2 bg-white dark:bg-background-6 rounded-[20px] h-full flex flex-col">
                                        <figure className="rounded-xl overflow-hidden flex-shrink-0 aspect-[4/3]">
                                        <img
                                            src={card.img}
                                            alt={card.title}
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                        </figure>

                                        <div className="pt-7 pb-6 px-5 space-y-10 flex-grow flex flex-col">
                                        <div className="space-y-2 flex-grow">
                                            <h2 className="text-heading-6 font-normal">{card.title}</h2>
                                            <p>{card.desc}</p>
                                        </div>

                                        <div>
                                            <a href={card.link} className="btn btn-md btn-accent">
                                            <span>Read More</span>
                                            </a>
                                        </div>
                                        </div>
                                    </article>
                                    </div>
                                ))}

                                </div>
                            </div>
                            </div>
                        </div>
                    </section>

                    <section className="xl:py-28 lg:py-20 py-16">
                        <div className="main-container">
                            <div className="text-center">
                            <h2
                                data-ns-animate=""
                                data-delay="0.1"
                                className="text-heading-3"
                                style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px) rotate(0deg) scale(1)" }}
                            >
                                Transforming business success with NextSaaS
                            </h2>
                            </div>
                        </div>
                        <div className="py-14">
                            <div
                            data-ns-animate=""
                            data-delay="0.2"
                            className="relative mx-auto"
                            style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px) rotate(0deg) scale(1)" }}
                            >
                            <div
                                className="logos-marquee-container horizontal-marquee smooth"
                                data-animate="true"
                                style={{ ["--_speed" as any]: "40000ms", ["--_direction" as any]: "forwards", ["--_gap" as any]: "0px" }}
                            >
                                <div className="horizontal-marquee-inner">
                                <div className="flex items-center justify-center gap-8">
                                    <figure className="w-28 md:w-36 ml-8">
                                    <img src="./images/icons/client-logo-1.svg" alt="Client logo" className="lg:w-auto inline-block dark:hidden" />
                                    <img src="./images/icons/client-logo-dark-1.svg" alt="Client logo" className="lg:w-auto hidden dark:inline-block" />
                                    </figure>
                                    <figure className="w-28 md:w-36">
                                    <img src="./images/icons/client-logo-2.svg" alt="Client logo" className="lg:w-auto inline-block dark:hidden" />
                                    <img src="./images/icons/client-logo-dark-2.svg" alt="Client logo" className="lg:w-auto hidden dark:inline-block" />
                                    </figure>
                                    <figure className="w-28 md:w-36">
                                    <img src="./images/icons/client-logo-3.svg" alt="Client logo" className="lg:w-auto inline-block dark:hidden" />
                                    <img src="./images/icons/client-logo-dark-3.svg" alt="Client logo" className="lg:w-auto hidden dark:inline-block" />
                                    </figure>
                                    <figure className="w-28 md:w-36">
                                    <img src="./images/icons/client-logo-4.svg" alt="Client logo" className="lg:w-auto inline-block dark:hidden" />
                                    <img src="./images/icons/client-logo-dark-4.svg" alt="Client logo" className="lg:w-auto hidden dark:inline-block" />
                                    </figure>
                                    <figure className="w-28 md:w-36">
                                    <img src="./images/icons/client-logo-5.svg" alt="Client logo" className="lg:w-auto inline-block dark:hidden" />
                                    <img src="./images/icons/client-logo-dark-5.svg" alt="Client logo" className="lg:w-auto hidden dark:inline-block" />
                                    </figure>
                                </div>
                                <div className="flex items-center justify-center gap-8" aria-hidden="true">
                                    <figure className="w-28 md:w-36 ml-8">
                                    <img src="./images/icons/client-logo-1.svg" alt="Client logo" className="lg:w-auto inline-block dark:hidden" />
                                    <img src="./images/icons/client-logo-dark-1.svg" alt="Client logo" className="lg:w-auto hidden dark:inline-block" />
                                    </figure>
                                    <figure className="w-28 md:w-36">
                                    <img src="./images/icons/client-logo-2.svg" alt="Client logo" className="lg:w-auto inline-block dark:hidden" />
                                    <img src="./images/icons/client-logo-dark-2.svg" alt="Client logo" className="lg:w-auto hidden dark:inline-block" />
                                    </figure>
                                    <figure className="w-28 md:w-36">
                                    <img src="./images/icons/client-logo-3.svg" alt="Client logo" className="lg:w-auto inline-block dark:hidden" />
                                    <img src="./images/icons/client-logo-dark-3.svg" alt="Client logo" className="lg:w-auto hidden dark:inline-block" />
                                    </figure>
                                    <figure className="w-28 md:w-36">
                                    <img src="./images/icons/client-logo-4.svg" alt="Client logo" className="lg:w-auto inline-block dark:hidden" />
                                    <img src="./images/icons/client-logo-dark-4.svg" alt="Client logo" className="lg:w-auto hidden dark:inline-block" />
                                    </figure>
                                    <figure className="w-28 md:w-36">
                                    <img src="./images/icons/client-logo-5.svg" alt="Client logo" className="lg:w-auto inline-block dark:hidden" />
                                    <img src="./images/icons/client-logo-dark-5.svg" alt="Client logo" className="lg:w-auto hidden dark:inline-block" />
                                    </figure>
                                </div>
                                </div>
                                <div className="horizontal-marquee-inner" aria-hidden="true">
                                <div className="flex items-center justify-center gap-8">
                                    <figure className="w-28 md:w-36 ml-8">
                                    <img src="./images/icons/client-logo-1.svg" alt="Client logo" className="lg:w-auto inline-block dark:hidden" />
                                    <img src="./images/icons/client-logo-dark-1.svg" alt="Client logo" className="lg:w-auto hidden dark:inline-block" />
                                    </figure>
                                    <figure className="w-28 md:w-36">
                                    <img src="./images/icons/client-logo-2.svg" alt="Client logo" className="lg:w-auto inline-block dark:hidden" />
                                    <img src="./images/icons/client-logo-dark-2.svg" alt="Client logo" className="lg:w-auto hidden dark:inline-block" />
                                    </figure>
                                    <figure className="w-28 md:w-36">
                                    <img src="./images/icons/client-logo-3.svg" alt="Client logo" className="lg:w-auto inline-block dark:hidden" />
                                    <img src="./images/icons/client-logo-dark-3.svg" alt="Client logo" className="lg:w-auto hidden dark:inline-block" />
                                    </figure>
                                    <figure className="w-28 md:w-36">
                                    <img src="./images/icons/client-logo-4.svg" alt="Client logo" className="lg:w-auto inline-block dark:hidden" />
                                    <img src="./images/icons/client-logo-dark-4.svg" alt="Client logo" className="lg:w-auto hidden dark:inline-block" />
                                    </figure>
                                    <figure className="w-28 md:w-36">
                                    <img src="./images/icons/client-logo-5.svg" alt="Client logo" className="lg:w-auto inline-block dark:hidden" />
                                    <img src="./images/icons/client-logo-dark-5.svg" alt="Client logo" className="lg:w-auto hidden dark:inline-block" />
                                    </figure>
                                </div>
                                <div className="flex items-center justify-center gap-8">
                                    <figure className="w-28 md:w-36 ml-8">
                                    <img src="./images/icons/client-logo-1.svg" alt="Client logo" className="lg:w-auto inline-block dark:hidden" />
                                    <img src="./images/icons/client-logo-dark-1.svg" alt="Client logo" className="lg:w-auto hidden dark:inline-block" />
                                    </figure>
                                    <figure className="w-28 md:w-36">
                                    <img src="./images/icons/client-logo-2.svg" alt="Client logo" className="lg:w-auto inline-block dark:hidden" />
                                    <img src="./images/icons/client-logo-dark-2.svg" alt="Client logo" className="lg:w-auto hidden dark:inline-block" />
                                    </figure>
                                    <figure className="w-28 md:w-36">
                                    <img src="./images/icons/client-logo-3.svg" alt="Client logo" className="lg:w-auto inline-block dark:hidden" />
                                    <img src="./images/icons/client-logo-dark-3.svg" alt="Client logo" className="lg:w-auto hidden dark:inline-block" />
                                    </figure>
                                    <figure className="w-28 md:w-36">
                                    <img src="./images/icons/client-logo-4.svg" alt="Client logo" className="lg:w-auto inline-block dark:hidden" />
                                    <img src="./images/icons/client-logo-dark-4.svg" alt="Client logo" className="lg:w-auto hidden dark:inline-block" />
                                    </figure>
                                    <figure className="w-28 md:w-36">
                                    <img src="./images/icons/client-logo-5.svg" alt="Client logo" className="lg:w-auto inline-block dark:hidden" />
                                    <img src="./images/icons/client-logo-dark-5.svg" alt="Client logo" className="lg:w-auto hidden dark:inline-block" />
                                    </figure>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>

                <Footer />
            </main>
        </div>
     );
}

export default FinanceWhitepaper;