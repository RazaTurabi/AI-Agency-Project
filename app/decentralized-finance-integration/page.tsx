import Footer from "../footer";
import Header from "../header";


const decentralizedIntegrationPage = () => {
    return(
        <div>
            <main>
                <Header />
                <section className="py-[50px] md:py-[70px] lg:py-[85px] xl:py-[100px] bg-background-2 dark:bg-background-6" aria-label="Integration Partners">
                <div className="main-container">
                    <div className="space-y-[70px]">
                    {/* integration heading */}
                    <div className="max-w-[1028px] text-center w-full mx-auto">
                        <span data-ns-animate="" data-delay="0.2" className="badge badge-green mb-5" style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px)" }}>
                        Integration
                        </span>
                        <h2 data-ns-animate="" data-delay="0.3" className="text-heading-3 lg:text-heading-2 mb-3" style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px)" }}>
                        Enhance your productivity effortlessly with over 50 integrations.
                        </h2>
                        <p data-ns-animate="" data-delay="0.4" className="text-secondary/60 dark:text-accent/60 max-w-[582px] mx-auto w-full" style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px)" }}>
                        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like nothing.
                        </p>
                    </div>

                    {/* brand logos */}
                    <div data-ns-animate="" data-delay="0.6" className="space-y-7" style={{ opacity: 1, filter: "blur(0px)", transform: "translate(0px, 0px)" }}>
                        {/* marquee logo one */}
                        <div className="relative max-w-[1128px] mx-auto">
                        <div className="absolute left-0 top-0 h-[120px] w-[15%] md:w-[20%] bg-gradient-to-r from-background-2/90 to-transparent dark:from-background-6 z-40" />
                        <div className="absolute right-0 top-0 h-[120px] w-[15%] md:w-[20%] bg-gradient-to-l from-background-2/90 to-transparent dark:from-background-6 z-40" />

                        <div className="logos-marquee-container horizontal-marquee smooth" data-animate="true" style={{ "--_speed": "40000ms" } as React.CSSProperties}>
                            <div className="horizontal-marquee-inner">
                            <div className="flex items-center gap-5 md:gap-[34px] justify-center" role="group">
                                <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                                <img src="./images/icons/google.svg" alt="Google logo" loading="lazy" className="size-12" />
                                </figure>
                                <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                                <img src="./images/icons/slack.svg" alt="Slack logo" loading="lazy" className="size-12" />
                                </figure>
                                <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                                <img src="./images/icons/confluence.svg" alt="Confluence logo" loading="lazy" className="size-12" />
                                </figure>
                                <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                                <img src="./images/icons/snapchat.svg" alt="Snapchat logo" loading="lazy" className="size-12" />
                                </figure>
                                <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                                <img src="./images/icons/ms_yammer.svg" alt="Yammer logo" loading="lazy" className="dark:hidden size-12" />
                                <img src="./images/icons/ms_yammer-dark.svg" alt="Yammer logo" loading="lazy" className="hidden dark:inline-block" />
                                </figure>
                                <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                                <img src="./images/icons/figma.svg" alt="Figma logo" loading="lazy" className="size-12" />
                                </figure>
                                <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                                <img src="./images/icons/microsoft.svg" alt="Microsoft logo" loading="lazy" className="size-12" />
                                </figure>
                            </div>
                            </div>
                        </div>
                        </div>

                        {/* marquee logo two */}
                        <div className="relative max-w-[985px] mx-auto">
                        <div className="absolute left-0 top-0 h-[120px] w-[15%] md:w-[20%] bg-gradient-to-r from-background-2/90 to-transparent dark:from-background-6 z-40" />
                        <div className="absolute right-0 top-0 h-[120px] w-[15%] md:w-[20%] bg-gradient-to-l from-background-2/90 to-transparent dark:from-background-6 z-40" />

                        <div className="logos-right-marquee-container horizontal-marquee smooth" data-animate="true" style={{ "--_speed": "40000ms" } as React.CSSProperties}>
                            <div className="horizontal-marquee-inner">
                            <div className="flex items-center gap-[34px] justify-center" role="group">
                                <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                                <img src="./images/icons/google-meet.svg" alt="Google Meet logo" loading="lazy" className="size-12" />
                                </figure>
                                <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                                <img src="./images/icons/edge.svg" alt="Microsoft Edge logo" width={48} height={48} loading="lazy" />
                                </figure>
                                <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                                <img src="./images/icons/vl.svg" alt="LV logo" loading="lazy" className="dark:hidden size-12" />
                                <img src="./images/icons/vl-white.svg" alt="LV logo" loading="lazy" className="hidden dark:inline-block" />
                                </figure>
                                <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                                <img src="./images/icons/framer.svg" alt="Framer logo" loading="lazy" className="size-12" />
                                </figure>
                                <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                                <img src="./images/icons/marvel.svg" alt="Marvel logo" loading="lazy" className="dark:hidden size-12" />
                                <img src="./images/icons/marvel-dark.svg" alt="Marvel logo" loading="lazy" className="hidden dark:inline-block" />
                                </figure>
                                <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                                <img src="./images/icons/confluence.svg" alt="Confluence logo" loading="lazy" className="size-12" />
                                </figure>
                                <figure className="size-20 md:size-[120px] bg-white dark:bg-background-6 rounded-full flex items-center justify-center ml-8 border-[10px] border-background-2 dark:border-background-9">
                                <img src="./images/icons/gmail.svg" alt="Gmail logo" loading="lazy" className="size-12" />
                                </figure>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <section className="pb-24 pt-14 md:pb-36 md:pt-16 lg:pb-44 lg:pt-[88px] xl:pb-[200px] xl:pt-[100px] bg-background-1 dark:bg-background-6">
                <div className="main-container space-y-14 md:space-y-[70px]">
                    <div className="space-y-5 text-center max-w-[540px] mx-auto">
                    <span
                        data-ns-animate=""
                        data-delay="0.2"
                        className="badge badge-green"
                        style={{ opacity: 1, filter: 'blur(0px)', transform: 'translate(0px, 0px)' }}
                    >
                        process
                    </span>
                    <h2
                        data-ns-animate=""
                        data-delay="0.3"
                        style={{ opacity: 1, filter: 'blur(0px)', transform: 'translate(0px, 0px)' }}
                    >
                        Follow the minimalistic steps of installation
                    </h2>
                    </div>

                    <div className="grid gap-8 grid-cols-12 justify-center">
                    {/* Step 1 */}
                    <article
                        data-ns-animate=""
                        data-delay="0.3"
                        className="space-y-8 p-8 col-span-12 md:col-span-6 rounded-[20px] shadow-7 lg:col-span-4 dark:bg-background-5"
                        style={{ opacity: 1, filter: 'blur(0px)', transform: 'translate(0px, 0px)' }}
                    >
                        <div className="flex items-center justify-between">
                        <span className="text-tagline-2 dark:text-accent">Step 1</span>
                        <span className="ns-shape-36 text-[52px] text-secondary dark:text-accent"></span>
                        </div>
                        <div className="space-y-3">
                        <h3 className="text-heading-5">Connect Your Platform</h3>
                        <p className="max-w-[344px]">
                            Easy integration with Shopify, WooCommerce, Zapier, HubSpot, and more.
                        </p>
                        </div>
                    </article>

                    {/* Step 2 */}
                    <article
                        data-ns-animate=""
                        data-delay="0.4"
                        className="space-y-8 p-8 col-span-12 md:col-span-6 rounded-[20px] shadow-7 lg:col-span-4 dark:bg-background-5"
                        style={{ opacity: 1, filter: 'blur(0px)', transform: 'translate(0px, 0px)' }}
                    >
                        <div className="flex items-center justify-between">
                        <span className="text-tagline-2 dark:text-accent">Step 2</span>
                        <span className="ns-shape-8 text-[52px] text-secondary dark:text-accent"></span>
                        </div>
                        <div className="space-y-3">
                        <h3 className="text-heading-5">Design &amp; Automate</h3>
                        <p className="max-w-[344px]">
                            Use our AI-powered email builder and pre-made automation templates.
                        </p>
                        </div>
                    </article>

                    {/* Step 3 */}
                    <article
                        data-ns-animate=""
                        data-delay="0.5"
                        className="space-y-8 p-8 col-span-12 md:col-span-6 rounded-[20px] shadow-7 lg:col-span-4 dark:bg-background-5"
                        style={{ opacity: 1, filter: 'blur(0px)', transform: 'translate(0px, 0px)' }}
                    >
                        <div className="flex items-center justify-between">
                        <span className="text-tagline-2 dark:text-accent">Step 3</span>
                        <span className="ns-shape-2 text-[52px] text-secondary dark:text-accent"></span>
                        </div>
                        <div className="space-y-3 col-span-4">
                        <h3 className="text-heading-5">Optimize &amp; Scale</h3>
                        <p className="max-w-[344px]">
                            Monitor email performance with real-time analytics and predictive insights.
                        </p>
                        </div>
                    </article>
                    </div>
                </div>
                </section>
                <section className="py-[50px] md:py-20 lg:py-28 dark:bg-background-6 bg-white" aria-label="Use Case Overview">
                <div className="main-container">
                    <div className="flex items-center flex-col lg:flex-row justify-between">
                    <div className="xl:max-w-[650px] lg:max-w-[476px] max-[400px]:max-w-[300px] w-full space-y-5 text-center lg:text-left">
                        <span
                        data-ns-animate=""
                        data-delay="0.3"
                        className="badge badge-green badge-green"
                        style={{ opacity: 1, filter: 'blur(0px)', transform: 'translate(0px, 0px)' }}
                        >
                        Get started
                        </span>
                        <div className="space-y-3">
                        <h2
                            data-ns-animate=""
                            data-delay="0.4"
                            className="text-secondary dark:text-accent text-heading-5 sm:text-heading-4 lg:text-heading-2"
                            style={{ opacity: 1, filter: 'blur(0px)', transform: 'translate(0px, 0px)' }}
                        >
                            Build a complete website using the assistance
                            <span className="text-primary-500 hidden">{'{$span-text}'}</span>
                        </h2>
                        <p
                            data-ns-animate=""
                            data-delay="0.5"
                            style={{ opacity: 1, filter: 'blur(0px)', transform: 'translate(0px, 0px)' }}
                        >
                            Start your free trial today and see your ideas come to life easily and creatively.
                        </p>
                        </div>
                    </div>

                    <div className="lg:basis-[466px] space-y-6 md:ml-0 xl:ml-[100px] pt-[40px] lg:pt-[67px] w-full sm:w-[80%] md:w-[60%]">
                        <form
                        data-ns-animate=""
                        data-delay="0.6"
                        action="#"
                        method="post"
                        className="flex items-center flex-col gap-5 sm:flex-row justify-start lg:gap-3"
                        style={{ opacity: 1, filter: 'blur(0px)', transform: 'translate(0px, 0px)' }}
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

                        <ul className="flex flex-row items-center justify-center gap-x-4 sm:gap-x-6 sm:gap-y-0 gap-y-5 lg:justify-start">
                        <li
                            data-ns-animate=""
                            data-delay="0.7"
                            className="flex items-center justify-center gap-2"
                            style={{ opacity: 1, filter: 'blur(0px)', transform: 'translate(0px, 0px)' }}
                        >
                            <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none" aria-hidden="true" className="fill-white dark:fill-secondary">
                                <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"></path>
                            </svg>
                            </span>
                            <p className="text-tagline-3 sm:text-tagline-2">No credit card required</p>
                        </li>

                        <li
                            data-ns-animate=""
                            data-delay="0.8"
                            className="flex items-center justify-center gap-2"
                            style={{ opacity: 1, filter: 'blur(0px)', transform: 'translate(0px, 0px)' }}
                        >
                            <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none" aria-hidden="true" className="fill-white dark:fill-secondary">
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
                <Footer />
            </main>
        </div>
    );
};


export default decentralizedIntegrationPage;