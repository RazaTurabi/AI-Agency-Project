import Footer from "../footer";
import Header from "../header";

const decentralizedTestimonial = () => {

    // reviewsData.ts
    const reviews = [
    {
        name: "Darrell Steward",
        role: "Head of Operations, Finlytics",
        avatar: "./images/ns-avatar-1.png",
        review:
        "As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.",
    },
    {
        name: "Cameron Williamson",
        role: "Product Manager, NovaApps",
        avatar: "./images/ns-avatar-2.png",
        review:
        "As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations. Your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.",
    },
    {
        name: "Arlene McCoy",
        role: "Chief Technology Officer, CloudScale",
        avatar: "./images/ns-avatar-3.png",
        review:
        "As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations. Your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.",
    },
    {
        name: "Wade Warren",
        role: "Marketing Lead, BrightDesk",
        avatar: "./images/ns-avatar-4.png",
        review:
        "As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations. Your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.",
    },
    {
        name: "Courtney Henry",
        role: "Finance Director, ApexCorp",
        avatar: "./images/ns-avatar-5.png",
        review:
        "As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.",
    },
    {
        name: "Dianne Russell",
        role: "Data Analyst, InsightIQ",
        avatar: "./images/ns-avatar-6.png",
        review:
        "As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.",
    },
    {
        name: "Savannah Nguyen",
        role: "UX Designer, FlowStudio",
        avatar: "./images/ns-avatar-7.png",
        review:
        "As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations. Your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.",
    },
    {
        name: "Leslie Alexander",
        role: "Growth Manager, MarketHub",
        avatar: "./images/ns-avatar-8.png",
        review:
        "As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.",
    },
    {
        name: "Guy Hawkins",
        role: "Founder, PixelForge",
        avatar: "./images/ns-avatar-8.png",
        review:
        "As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.",
    },
    ];

    // testimonialsData.ts
    const customerAvatars = [
    { src: "./images/ns-avatar-1.png", bg: "bg-ns-yellow", alt: "Customer avatar 1" },
    { src: "./images/ns-avatar-2.png", bg: "bg-ns-red", alt: "Customer avatar 2" },
    { src: "./images/ns-avatar-3.png", bg: "bg-ns-green", alt: "Customer avatar 3" },
    { label: "99+", bg: "bg-ns-cyan", alt: "99+ customers" },
    ];

    const clientLogos = [
    {
        light: "./images/icons/client-logo-6.svg",
        dark: "./images/icons/client-logo-6-dark.svg",
        alt: "Client company logo 1",
    },
    {
        light: "./images/icons/client-logo-7.svg",
        dark: "./images/icons/client-logo-7-dark.svg",
        alt: "Client company logo 2",
    },
    {
        light: "./images/icons/client-logo-8.svg",
        dark: "./images/icons/client-logo-8-dark.svg",
        alt: "Client company logo 3",
    },
    {
        light: "./images/icons/client-logo-9.svg",
        dark: "./images/icons/client-logo-9-dark.svg",
        alt: "Client company logo 4",
    },
    {
        light: "./images/icons/client-logo-10.svg",
        dark: "./images/icons/client-logo-10-dark.svg",
        alt: "Client company logo 5",
    },
    ];


    return(
        <div>
            <main>
                <Header />
                <section className="pb-[75px] md:pb-[100px] lg:pb-[200px] bg-background-1 dark:bg-background-6 xl:pt-[180px] md:pt-42 sm:pt-36 pt-32">
                    <div className="main-container">
                        <div className="space-y-[70px]">
                        {/* Heading */}
                        <div className="text-center space-y-5">
                            <span data-ns-animate="" data-delay="0.3" className="badge badge-green">
                            Reviews
                            </span>
                            <h2 data-ns-animate="" data-delay="0.4">
                            Success stories from happy clients
                            </h2>
                        </div>

                        {/* Reviews Cards */}
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
                            {reviews.map((user, index) => (
                            <article
                                key={index}
                                data-ns-animate=""
                                data-delay={`${0.5 + index * 0.1}`}
                                className="mb-8 break-inside-avoid bg-background-3 dark:bg-background-7 p-2.5 rounded-[20px]"
                            >
                                <div className="bg-white dark:bg-background-6 p-4 sm:p-8 rounded-xl space-y-6">
                                {/* User Info */}
                                <div className="flex items-center justify-between pb-6 border-b border-b-stroke-2 dark:border-b-stroke-6">
                                    <div className="flex items-center gap-3">
                                    <figure className="size-11 overflow-hidden rounded-full bg-(image:--color-gradient-8)">
                                        <img
                                        src={user.avatar}
                                        alt={`${user.name}'s profile`}
                                        loading="lazy"
                                        className="size-full object-cover"
                                        />
                                    </figure>
                                    <div>
                                        <p className="text-lg font-medium text-secondary dark:text-accent">
                                        {user.name}
                                        </p>
                                        <p className="text-tagline-2">{user.role}</p>
                                    </div>
                                    </div>

                                    {/* Social Link */}
                                    <a
                                    href="#"
                                    aria-label={`Follow ${user.name} on Twitter`}
                                    className="size-9 bg-background-2 dark:bg-background-5 rounded-full flex items-center justify-center"
                                    >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="13"
                                        height="12"
                                        viewBox="0 0 13 12"
                                        fill="none"
                                        aria-hidden="true"
                                        className="fill-secondary dark:fill-accent"
                                    >
                                        <g clipPath="url(#clip0_928_12896)">
                                        <path d="M10.1161 0H11.9564L7.93583 5.08308L12.6657 12H8.96225L6.06156 7.80492L2.7425 12H0.901058L5.20148 6.56308L0.664062 0H4.46156L7.08353 3.83446L10.1161 0ZM9.47018 10.7815H10.4899L3.90746 1.15446H2.81316L9.47018 10.7815Z"></path>
                                        </g>
                                    </svg>
                                    </a>
                                </div>

                                {/* User Review */}
                                <p>{user.review}</p>
                                </div>
                            </article>
                            ))}
                        </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div
                        data-ns-animate=""
                        data-delay="0.2"
                        className="main-container text-center rounded-4xl py-[100px] -z-0 bg-background-3 dark:bg-background-7 overflow-hidden relative"
                    >
                        <div
                        className="absolute -top-[164%] rotate-[21deg] -left-[35%] w-full h-full -z-10 select-none pointer-events-none"
                        aria-hidden="true"
                        >
                        <img src="./images/ns-img-498.png" alt="Decorative background gradient" className="scale-[40%]" />
                        </div>

                        {/* Customer Testimonial */}
                        <article className="text-center space-y-4 mb-6">
                        {/* Customer Avatars */}
                        <div className="flex justify-center -space-x-2.5 cursor-pointer" role="group" aria-label="Customer avatars">
                            {customerAvatars.map((avatar, index) =>
                            "label" in avatar ? (
                                <div
                                key={index}
                                className={`inline-flex items-center relative z-10 justify-center size-[38px] ${avatar.bg} rounded-full ring-2 ring-accent text-secondary/80 text-tagline-3 font-medium`}
                                >
                                {avatar.label}
                                </div>
                            ) : (
                                <img
                                key={index}
                                className={`inline-block size-[38px] rounded-full ring-2 ring-accent ${avatar.bg}`}
                                src={avatar.src}
                                alt={avatar.alt}
                                width={38}
                                height={38}
                                />
                            )
                            )}
                        </div>

                        {/* Trust Metrics */}
                        <div>
                            <p className="text-tagline-2 text-secondary dark:text-accent font-medium">Trusted by 20k+</p>
                            <p className="text-tagline-3">Customers Across the Globe</p>
                        </div>
                        </article>

                        {/* Client Logos */}
                        <div className="max-w-[1130px] mx-auto relative">
                        <div className="absolute left-0 top-5 h-full w-[7%] bg-gradient-to-r from-background-3 to-transparent dark:from-background-7 z-40"></div>
                        <div className="absolute right-0 top-5 h-full w-[7%] bg-gradient-to-l from-background-3 to-transparent dark:from-background-7 z-40"></div>

                        <div className="logos-marquee-container horizontal-marquee smooth" data-animate="true" style={{ "--_speed": "40000ms", "--_direction": "forwards", "--_gap": "0px" } as React.CSSProperties}>
                            <div className="horizontal-marquee-inner">
                            {Array(2).fill("").map((_, loopIndex) => (
                                <div key={loopIndex} className="flex items-center justify-center border-t border-secondary/10 dark:border-accent/10 pt-10 gap-8" role="group">
                                {clientLogos.map((logo, index) => (
                                    <figure key={index} className="min-w-[140px] md:min-w-[201px] ml-8">
                                    <img src={logo.light} alt={logo.alt} className="lg:w-auto inline-block dark:hidden" width={120} height={40} />
                                    <img src={logo.dark} alt={logo.alt} className="lg:w-auto hidden dark:block" width={120} height={40} />
                                    </figure>
                                ))}
                                </div>
                            ))}
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

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
    )
}

export default decentralizedTestimonial;