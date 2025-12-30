"use client";

import { useState } from "react";
import Footer from "../footer";
import Header from "../header";

const FinanceProcessPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the primary role of a business agency?",
      answer:
        "When collaborating with a business agency you can generally expect an extensive array of services designed to not only support your current operations but also to foster growth and innovation within your business These services often include strategic planning marketing solutions financial consulting and operational improvements",
    },
    {
      question: "What kinds of services should I anticipate from a business agency?",
      answer:
        "When collaborating with a business agency you can generally expect an extensive array of services designed to not only support your current operations but also to foster growth and innovation within your business These services often include strategic planning marketing solutions financial consulting and operational improvements",
    },
    {
      question: "How often should I consider updating my website?",
      answer:
        "When collaborating with a business agency you can generally expect an extensive array of services designed to not only support your current operations but also to foster growth and innovation within your business These services often include strategic planning marketing solutions financial consulting and operational improvements",
    },
    {
      question: "How often is it recommended to refresh my website?",
      answer:
        "When collaborating with a business agency you can generally expect an extensive array of services designed to not only support your current operations but also to foster growth and innovation within your business These services often include strategic planning marketing solutions financial consulting and operational improvements",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    return (
    <div>
      <main>
        <Header />
        <section className="pb-[100px] xl:pt-[180px] md:pt-42 sm:pt-36 pt-32">
            <div className="main-container">
                <div className="text-center space-y-3 mb-[72px]">
                <h2
                    data-ns-animate=""
                    data-delay="0.3"
                    className="max-w-[552px] mx-auto"
                    style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px) rotate(0deg) scale(1)" }}
                >
                    From sign-up to success in just a few steps
                </h2>
                <p
                    data-ns-animate=""
                    data-delay="0.4"
                    className="max-w-[692px] mx-auto"
                    style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px) rotate(0deg) scale(1)" }}
                >
                    We make it easy to Get started simple to scale and seamless to succeed Whether you're
                    using one feature or the full suite NextSaaS is built to support you every step of the way.
                </p>
                </div>
                <div className="grid grid-cols-12 md:gap-8 gap-y-5">
                {/* Top Row */}
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <div
                    data-ns-animate=""
                    data-delay="0.3"
                    className="sm:p-8 p-5 bg-background-1 dark:bg-background-6 rounded-[20px] space-y-8 h-full flex flex-col"
                    style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px) rotate(0deg) scale(1)" }}
                    >
                    <div className="flex items-center justify-between">
                        <p className="text-tagline-2 text-secondary dark:text-accent">Step 1</p>
                        <span className="ns-shape-36 text-[52px] text-secondary dark:text-accent"></span>
                    </div>
                    <div className="space-y-4 flex-1">
                        <h3 className="sm:text-heading-5 text-heading-6 font-normal">Create your account</h3>
                        <p>
                        Choose a plan that fits your needs and start exploring the platform with a free trial.
                        </p>
                        <ul className="text-tagline-1 font-normal text-secondary/60 space-y-2 list-disc list-inside dark:text-accent/60">
                        <li>Quick signup process</li>
                        <li>No setup fees</li>
                        <li>Instant access to your dashboard</li>
                        </ul>
                    </div>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <div
                    data-ns-animate=""
                    data-delay="0.4"
                    className="card-item sm:p-8 p-5 bg-background-1 dark:bg-background-6 rounded-[20px] space-y-8 h-full flex flex-col"
                    style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px) rotate(0deg) scale(1)" }}
                    >
                    <div className="flex items-center justify-between">
                        <p className="text-tagline-2 text-secondary dark:text-accent">Step 2</p>
                        <span className="ns-shape-8 text-[52px] text-secondary dark:text-accent"></span>
                    </div>
                    <div className="space-y-4 flex-1">
                        <h3 className="sm:text-heading-5 text-heading-6 font-normal">Customize your workspace</h3>
                        <p>Use templates to set up your team workflows integrations and brand.</p>
                        <ul className="text-tagline-1 font-normal text-secondary/60 space-y-2 list-disc list-inside dark:text-accent/60">
                        <li>Choose what to track</li>
                        <li>Add users and set permissions</li>
                        <li>Connect your favorite tools</li>
                        </ul>
                    </div>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <div
                    data-ns-animate=""
                    data-delay="0.5"
                    className="card-item sm:p-8 p-5 bg-background-1 dark:bg-background-6 rounded-[20px] space-y-8 h-full flex flex-col"
                    style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px) rotate(0deg) scale(1)" }}
                    >
                    <div className="flex items-center justify-between">
                        <p className="text-tagline-2 text-secondary dark:text-accent">Step 3</p>
                        <span className="ns-shape-2 text-[52px] text-secondary dark:text-accent"></span>
                    </div>
                    <div className="space-y-4 flex-1">
                        <h3 className="sm:text-heading-5 text-heading-6 font-normal">Automate & collaborate</h3>
                        <p>
                        Choose a plan that fits your needs and start exploring the platform with a free trial.
                        </p>
                        <ul className="text-tagline-1 font-normal text-secondary/60 space-y-2 list-disc list-inside dark:text-accent/60">
                        <li>Drag-and-drop automation</li>
                        <li>Task routing & approvals</li>
                        <li>Notifications & real-time sync</li>
                        </ul>
                    </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-3">
                    <div
                    data-ns-animate=""
                    data-delay="0.6"
                    className="card-item sm:p-8 p-5 bg-background-1 dark:bg-background-6 rounded-[20px] space-y-8 h-full flex flex-col"
                    style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px) rotate(0deg) scale(1)" }}
                    >
                    <div className="flex items-center justify-between">
                        <p className="text-tagline-2 text-secondary dark:text-accent">Step 4</p>
                        <span className="ns-shape-36 text-[52px] text-secondary dark:text-accent"></span>
                    </div>
                    <div className="space-y-4 flex-1">
                        <h3 className="sm:text-heading-5 text-heading-6 font-normal">Create your account</h3>
                        <p>
                        Choose a plan that fits your needs and start exploring the platform with a free trial.
                        </p>
                        <ul className="text-tagline-1 font-normal text-secondary/60 space-y-2 list-disc list-inside dark:text-accent/60">
                        <li>Quick signup process</li>
                        <li>No setup fees</li>
                        <li>Instant access to your dashboard</li>
                        </ul>
                    </div>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <div
                    data-ns-animate=""
                    data-delay="0.7"
                    className="card-item sm:p-8 p-5 bg-background-1 dark:bg-background-6 rounded-[20px] space-y-8 h-full flex flex-col"
                    style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px) rotate(0deg) scale(1)" }}
                    >
                    <div className="flex items-center justify-between">
                        <p className="text-tagline-2 text-secondary dark:text-accent">Step 5</p>
                        <span className="ns-shape-8 text-[52px] text-secondary dark:text-accent"></span>
                    </div>
                    <div className="space-y-4 flex-1">
                        <h3 className="sm:text-heading-5 text-heading-6 font-normal">Customize your workspace</h3>
                        <p>
                        Use templates or build your own dashboards workflows and integrations that reflect
                        </p>
                        <ul className="text-tagline-1 font-normal text-secondary/60 space-y-2 list-disc list-inside dark:text-accent/60">
                        <li>Choose what to track</li>
                        <li>Add users and set permissions</li>
                        <li>Connect your favorite tools</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section className="md:pt-[100px] pt-[50px] md:pb-[200px] pb-[100px]">
            <div className="main-container">
                <div className="text-center space-y-5 max-w-[620px] mx-auto mb-[70px]">
                <span
                    data-ns-animate=""
                    data-delay="0.1"
                    className="badge badge-cyan"
                    style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px) rotate(0deg) scale(1)" }}
                >
                    FAQ
                </span>
                <div className="space-y-3">
                    <h2
                    data-ns-animate=""
                    data-delay="0.2"
                    style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px) rotate(0deg) scale(1)" }}
                    >
                    Commonly asked questions
                    </h2>
                    <p
                    data-ns-animate=""
                    data-delay="0.3"
                    style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px) rotate(0deg) scale(1)" }}
                    >
                    By offering concise and informative responses this section helps users find solutions
                    without the need to contact customer support saving time
                    </p>
                </div>
                </div>

                <div
                data-ns-animate=""
                data-delay="0.4"
                className="sm:max-w-[850px] max-w-full sm:mx-auto space-y-4"
                style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px) rotate(0deg) scale(1)" }}
                >
                {faqs.map((faq, index) => (
                    <div
                    key={index}
                    className="bg-background-1 dark:bg-background-6 rounded-[20px] sm:px-8 px-6 accordion-item"
                    style={{ overflow: "hidden", opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px) rotate(0deg) scale(1)" }}
                    >
                    <button
                        className="accordion-action flex items-center cursor-pointer justify-between sm:pt-8 pt-6 sm:pb-8 pb-6 w-full"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent">
                        {faq.question}
                        </span>
                        <span
                        className={`sm:ml-auto ml-2.5 block accordion-arrow ${openIndex === index ? "rotate-180" : ""}`}
                        data-state={openIndex === index ? "true" : "false"}
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="16"
                            height="16"
                            data-state={openIndex === index ? "true" : "false"}
                        >
                            <path
                            strokeOpacity="0.8"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            className="stroke-secondary dark:stroke-accent"
                            ></path>
                        </svg>
                        </span>
                    </button>
                    <div className={`accordion-content ${openIndex === index ? "block" : "hidden"}`}>
                        <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 pt-6 pb-8">
                        <p>{faq.answer}</p>
                        </div>
                    </div>
                    </div>
                ))}
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

  export default FinanceProcessPage;