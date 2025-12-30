import Footer from "../footer";
import Header from "../header";

const decentralizedFinanceCustomersDetailsPage = () => {
    return(
        <div>
            <main>
                <Header />
                <section className="xl:pt-[180px] md:pt-42 sm:pt-36 pt-32" aria-label="customer hero section">
                <div className="main-container">
                    {/* Hero content */}
                    <div className="text-center space-y-4 pb-20 lg:pb-28">
                    <h1
                        data-ns-animate=""
                        data-delay="0.1"
                        className="font-normal lg:text-heading-2"
                        style={{ opacity: 1, filter: 'blur(0px)', transform: 'translate(0px, 0px)' }}
                    >
                        Customer stories
                    </h1>
                    <p
                        data-ns-animate=""
                        data-delay="0.2"
                        className="text-secondary/60 dark:text-accent/60 lg:max-w-[518px] lg:mx-auto"
                        style={{ opacity: 1, filter: 'blur(0px)', transform: 'translate(0px, 0px)' }}
                    >
                        Discover case studies on how Supabase is being used around the world to quickly create
                        outstanding products and set new industry standards.
                    </p>
                    </div>
                </div>
                </section>

                <section className="xl:pt-[180px] md:pt-42 sm:pt-36 pt-32 xl:pb-28 pb-24" aria-label="customer details info section">
                <div className="main-container space-y-14">
                    {/* customer details info content */}
                    <div className="flex justify-between flex-col md:flex-row gap-y-4 md:gap-x-16 lg:gap-x-10">
                    <figure data-ns-animate="" data-delay="0.1">
                        <img
                        src="/images/icons/notion-v2.svg"
                        alt="customer details info 1"
                        className="sticky top-20 dark:invert"
                        width={100}
                        height={100}
                        />
                    </figure>

                    <div className="lg:max-w-[808px] space-y-8" data-ns-animate="" data-delay="0.2">
                        <h1 className="text-heading-5 md:text-heading-4 lg:text-heading-3">
                        Demo case Study: <br className="hidden md:block" />
                        Example corp innovative solutions
                        </h1>
                        <figure className="rounded-[30px] overflow-hidden">
                        <img
                            src="/images/ns-img-428.png"
                            alt="customer details info"
                            width={808}
                            height={450}
                        />
                        </figure>
                    </div>
                    </div>

                    {/* Overview */}
                    <div className="flex justify-between flex-col md:flex-row gap-y-4 md:gap-x-16 lg:gap-x-10">
                    <div data-ns-animate="" data-delay="0.1">
                        <p className="text-heading-4 md:text-heading-5 text-secondary dark:text-accent sticky top-20">Overview</p>
                    </div>

                    <div className="lg:max-w-[808px] space-y-8">
                        <h2 className="text-heading-5 md:text-heading-4 lg:text-heading-3" data-ns-animate="" data-delay="0.1">
                        Discover how scale rapid enhances <br className="hidden md:block" /> cutting-edge chatbots.
                        </h2>
                        <p data-ns-animate="" data-delay="0.2">
                        Explore how intelligent phone agents help businesses stay connected with customers. These bots utilize automatic speech recognition to convert voice inquiries into text enabling them to provide accurate information about hours locations and services. By continuously refining their intent classification models with real-world data these chatbots enhance customer experiences.
                        </p>
                    </div>
                    </div>

                    {/* Problem */}
                    <div className="flex justify-between flex-col md:flex-row gap-y-4 md:gap-x-16 lg:gap-x-10">
                    <div data-ns-animate="" data-delay="0.1">
                        <p className="text-heading-4 md:text-heading-5 text-secondary dark:text-accent sticky top-20">The problem</p>
                    </div>

                    <div className="lg:max-w-[808px] space-y-8">
                        <h2 className="text-heading-5 md:text-heading-4 lg:text-heading-3" data-ns-animate="" data-delay="0.1">
                        Demo content for showcasing purposes.
                        </h2>
                        <p data-ns-animate="" data-delay="0.2">
                        Demo content illustrating the challenges faced by companies with large datasets that remain unannotated. This content will highlight importance of scalable solutions for data labeling to enhance model performance and accuracy.
                        </p>
                        <article
                        data-ns-animate=""
                        data-delay="0.3"
                        className="bg-white dark:bg-background-5 border border-stroke-1 dark:border-stroke-6 rounded-[20px] sm:p-14 p-7"
                        style={{ opacity: 1, filter: 'blur(0px)', transform: 'translate(0px, 0px)' }}
                        >
                        <figure className="flex items-center gap-3">
                            <img src="./images/ns-avatar-15.png" className="size-11 rounded-full object-center object-cover" alt="Darrell Steward's avatar" width={44} height={44} loading="lazy" />
                            <figure>
                            <h3 className="text-tagline-1 sm:text-lg font-semibold leading-[1.5]">Darrell Steward</h3>
                            <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">
                                Product Designer
                            </p>
                            </figure>
                        </figure>

                        {/* rating and twitter link */}
                        <div className="flex items-center justify-between pt-6 pb-5">
                            {/* stars */}
                            <figure className="flex items-center gap-1">
                            {/* repeat SVG stars */}
                            {[...Array(10)].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="size-[15px]" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M7.25672 0.486272C7.53172 -0.162091 8.46832 -0.162091 8.74332 0.486274L10.3663 4.31303C10.4823 4.58637 10.7445 4.77313 11.0454 4.79678L15.2582 5.12799C15.9719 5.18411 16.2614 6.05763 15.7175 6.51446L12.5079 9.2107C12.2786 9.40331 12.1784 9.70552 12.2485 9.99343L13.2291 14.0249C13.3952 14.7079 12.6375 15.2478 12.0264 14.8818L8.41965 12.7214C8.16202 12.5671 7.83802 12.5671 7.5804 12.7214L3.9736 14.8818C3.3625 15.2478 2.60477 14.7079 2.77091 14.0249L3.75155 9.99343C3.82159 9.70552 3.72147 9.40331 3.49221 9.2107L0.28245 6.51446C-0.261375 6.05763 0.0280544 5.18411 0.741835 5.12799L4.9547 4.79678C5.25561 4.77313 5.51774 4.58637 5.63367 4.31303L7.25672 0.486272Z" className="fill-[#864FFE]" />
                                </svg>
                            ))}
                            </figure>

                            <a href="https://x.com" target="_blank" rel="noopener" aria-label="Follow Darrell Steward on Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M17.8441 4.24219H20.6042L14.5741 11.0196L21.668 20.2422H16.1136L11.7631 14.6488L6.7852 20.2422H4.02341L10.4731 12.993L3.66797 4.24219H9.36342L13.2959 9.35481L17.8441 4.24219ZM16.8753 18.6176H18.4048L8.53238 5.78147H6.89117L16.8753 18.6176Z" className="fill-background-8 dark:fill-accent" />
                            </svg>
                            </a>
                        </div>

                        <p className="pb-6">
                            As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.
                        </p>
                        </article>
                    </div>
                    </div>

                    {/* Solution */}
                    <div className="flex justify-between flex-col md:flex-row gap-y-4 md:gap-x-16 lg:gap-x-10">
                    <div data-ns-animate="" data-delay="0.1">
                        <p className="text-heading-4 md:text-heading-5 text-secondary dark:text-accent sticky top-20">The Solution</p>
                    </div>

                    <div className="lg:max-w-[808px] space-y-8">
                        <h2 className="text-heading-5 md:text-heading-4 lg:text-heading-3" data-ns-animate="" data-delay="0.1">
                        Demo content for Text classification annotations
                        </h2>
                        <p data-ns-animate="" data-delay="0.2">
                        Demo Content for user-friendly tools that help companies acquire high-quality annotations. Companies can send samples for review and receive labels that describe phrases. By comparing these labels with their own data companies can enhance their models improving text-to-speech accuracy and bot understanding.
                        </p>
                        <article
                        data-ns-animate=""
                        data-delay="0.3"
                        className="bg-white dark:bg-background-5 border border-stroke-1 dark:border-stroke-6 rounded-[20px] sm:p-14 p-7"
                        style={{ opacity: 1, filter: 'blur(0px)', transform: 'translate(0px, 0px)' }}
                        >
                        <figure className="flex items-center gap-3">
                            <img src="./images/ns-avatar-15.png" className="size-11 rounded-full object-center object-cover" alt="Darrell Steward's avatar" width={44} height={44} loading="lazy" />
                            <figure>
                            <h3 className="text-tagline-1 sm:text-lg font-semibold leading-[1.5]">Darrell Steward</h3>
                            <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">
                                Product Designer
                            </p>
                            </figure>
                        </figure>

                        {/* rating and twitter link */}
                        <div className="flex items-center justify-between pt-6 pb-5">
                            {/* stars */}
                            <figure className="flex items-center gap-1">
                            {/* repeat SVG stars */}
                            {[...Array(10)].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="size-[15px]" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M7.25672 0.486272C7.53172 -0.162091 8.46832 -0.162091 8.74332 0.486274L10.3663 4.31303C10.4823 4.58637 10.7445 4.77313 11.0454 4.79678L15.2582 5.12799C15.9719 5.18411 16.2614 6.05763 15.7175 6.51446L12.5079 9.2107C12.2786 9.40331 12.1784 9.70552 12.2485 9.99343L13.2291 14.0249C13.3952 14.7079 12.6375 15.2478 12.0264 14.8818L8.41965 12.7214C8.16202 12.5671 7.83802 12.5671 7.5804 12.7214L3.9736 14.8818C3.3625 15.2478 2.60477 14.7079 2.77091 14.0249L3.75155 9.99343C3.82159 9.70552 3.72147 9.40331 3.49221 9.2107L0.28245 6.51446C-0.261375 6.05763 0.0280544 5.18411 0.741835 5.12799L4.9547 4.79678C5.25561 4.77313 5.51774 4.58637 5.63367 4.31303L7.25672 0.486272Z" className="fill-[#864FFE]" />
                                </svg>
                            ))}
                            </figure>

                            <a href="https://x.com" target="_blank" rel="noopener" aria-label="Follow Darrell Steward on Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M17.8441 4.24219H20.6042L14.5741 11.0196L21.668 20.2422H16.1136L11.7631 14.6488L6.7852 20.2422H4.02341L10.4731 12.993L3.66797 4.24219H9.36342L13.2959 9.35481L17.8441 4.24219ZM16.8753 18.6176H18.4048L8.53238 5.78147H6.89117L16.8753 18.6176Z" className="fill-background-8 dark:fill-accent" />
                            </svg>
                            </a>
                        </div>

                        <p className="pb-6">
                            As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.
                        </p>
                        </article>
                    </div>
                    </div>

                    {/* Result */}
                    <div className="flex justify-between flex-col md:flex-row gap-y-4 md:gap-x-16 lg:gap-x-10">
                    <div data-ns-animate="" data-delay="0.1">
                        <p className="text-heading-4 md:text-heading-5 text-secondary dark:text-accent sticky top-20">The result</p>
                    </div>

                    <div className="lg:max-w-[808px] space-y-8">
                        <h2 className="text-heading-5 md:text-heading-4 lg:text-heading-3" data-ns-animate="" data-delay="0.1">
                        Discover how goodcall enhances customer interactions with innovative solutions.
                        </h2>
                        <p data-ns-animate="" data-delay="0.2">
                        Since partnering with Scale Rapid Goodcall has boosted their model's intent classification accuracy by 5%. Outsourcing labeling process freed engineering resources. Using Scale Rapid's text classifications Goodcall pinpointed areas for enhancement in speech recognition revealing transcript and intent model limitations enabling informed improvements.
                        </p>
                        <article
                        data-ns-animate=""
                        data-delay="0.3"
                        className="bg-white dark:bg-background-5 border border-stroke-1 dark:border-stroke-6 rounded-[20px] sm:p-14 p-7"
                        style={{ opacity: 1, filter: 'blur(0px)', transform: 'translate(0px, 0px)' }}
                        >
                        <figure className="flex items-center gap-3">
                            <img src="./images/ns-avatar-15.png" className="size-11 rounded-full object-center object-cover" alt="Darrell Steward's avatar" width={44} height={44} loading="lazy" />
                            <figure>
                            <h3 className="text-tagline-1 sm:text-lg font-semibold leading-[1.5]">Darrell Steward</h3>
                            <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">
                                Product Designer
                            </p>
                            </figure>
                        </figure>

                        {/* rating and twitter link */}
                        <div className="flex items-center justify-between pt-6 pb-5">
                            {/* stars */}
                            <figure className="flex items-center gap-1">
                            {/* repeat SVG stars */}
                            {[...Array(10)].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="size-[15px]" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M7.25672 0.486272C7.53172 -0.162091 8.46832 -0.162091 8.74332 0.486274L10.3663 4.31303C10.4823 4.58637 10.7445 4.77313 11.0454 4.79678L15.2582 5.12799C15.9719 5.18411 16.2614 6.05763 15.7175 6.51446L12.5079 9.2107C12.2786 9.40331 12.1784 9.70552 12.2485 9.99343L13.2291 14.0249C13.3952 14.7079 12.6375 15.2478 12.0264 14.8818L8.41965 12.7214C8.16202 12.5671 7.83802 12.5671 7.5804 12.7214L3.9736 14.8818C3.3625 15.2478 2.60477 14.7079 2.77091 14.0249L3.75155 9.99343C3.82159 9.70552 3.72147 9.40331 3.49221 9.2107L0.28245 6.51446C-0.261375 6.05763 0.0280544 5.18411 0.741835 5.12799L4.9547 4.79678C5.25561 4.77313 5.51774 4.58637 5.63367 4.31303L7.25672 0.486272Z" className="fill-[#864FFE]" />
                                </svg>
                            ))}
                            </figure>

                            <a href="https://x.com" target="_blank" rel="noopener" aria-label="Follow Darrell Steward on Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M17.8441 4.24219H20.6042L14.5741 11.0196L21.668 20.2422H16.1136L11.7631 14.6488L6.7852 20.2422H4.02341L10.4731 12.993L3.66797 4.24219H9.36342L13.2959 9.35481L17.8441 4.24219ZM16.8753 18.6176H18.4048L8.53238 5.78147H6.89117L16.8753 18.6176Z" className="fill-background-8 dark:fill-accent" />
                            </svg>
                            </a>
                        </div>

                        <p className="pb-6">
                            As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.
                        </p>
                        </article>
                    </div>
                    </div>
                </div>
                </section>
                <Footer />
            </main>
        </div>
    );
};

export default decentralizedFinanceCustomersDetailsPage;