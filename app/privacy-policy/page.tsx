import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <>
     <main className=' dark:bg-background-7'>
<Header/>



    <section className="pb-[100px] xl:pt-[180px] md:pt-42 sm:pt-36 pt-32">
      <div className="main-container">
        <div className="space-y-[75px] privacy-policy">
          {/* Heading */}
          <div className="space-y-2">
            <h2 data-ns-animate data-delay="0.1">
              Data protection guidelines
            </h2>
            <p data-ns-animate data-delay="0.2">
              <span className="text-secondary dark:text-accent">NextSaaS</span> is
              a product operated by{" "}
              <span className="text-secondary dark:text-accent">
                NextSaaS Technologies LLC
              </span>
              . We specialize in property management solutions, empowering
              businesses worldwide to streamline their operations efficiently.
              We are committed to protecting your privacy and handling your
              information transparently.
            </p>
          </div>

          {/* Policy intro */}
          <div data-ns-animate data-delay="0.3" className="space-y-2">
            <h4>NextSaaS privacy policy</h4>
            <p>
              This Privacy Policy describes how your personal information is
              collected, used, and shared when you visit, subscribe, register,
              or make a purchase from{" "}
              <Link
                href="https://nextsaas.com"
                target="_blank"
                className="text-secondary dark:text-accent"
              >
                https://nextsaas.com
              </Link>{" "}
              (the &quot;Site&quot;).
            </p>
          </div>

          {/* Personal info */}
          <div data-ns-animate data-delay="0.4" className="space-y-6">
            <div className="space-y-2">
              <h4>Personal information we collect</h4>
              <p>
                When you visit the Site, we automatically collect certain
                information about your device including browser, IP address,
                time zone, and cookies. This is referred to as{" "}
                <span className="text-secondary dark:text-accent">
                  &quot;Device Information.&quot;
                </span>
              </p>
            </div>

            <ul
              data-ns-animate
              data-delay="0.5"
              className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60"
            >
              <li>
                <strong className="text-secondary dark:text-accent font-normal">
                  Cookies –
                </strong>{" "}
                Data files placed on your device. (
                <Link
                  href="http://www.allaboutcookies.org"
                  target="_blank"
                  className="text-secondary"
                >
                  Learn more
                </Link>
                )
              </li>
              <li>
                <strong className="text-secondary dark:text-accent font-normal">
                  Log Files –
                </strong>{" "}
                Track IP address, browser type, ISP, and timestamps.
              </li>
              <li>
                <strong className="text-secondary dark:text-accent font-normal">
                  Web Beacons, Tags, and Pixels –
                </strong>{" "}
                Monitor site usage.
              </li>
              <li>
                <strong className="text-secondary dark:text-accent font-normal">
                  Google Analytics and Pixels –
                </strong>{" "}
                Track traffic and interaction behavior.
              </li>
            </ul>
          </div>

          {/* Image + Form */}
          <div className="grid grid-cols-12 gap-y-[100px] lg:gap-[100px]">
            <div className="col-span-12 lg:col-span-6">
              <p className="max-w-[550px] mb-[70px]">
                When you make or attempt to purchase through the Site, we collect
                information such as name, email, billing address, shipping
                address, and payment details.
              </p>

              <figure className="max-w-[595px] w-full overflow-hidden rounded-[20px]">
                <Image
                  src="/images/ns-img-391.png"
                  alt="support-contact"
                  width={595}
                  height={400}
                  className="size-full object-cover"
                />
              </figure>
            </div>

            {/* Form */}
            <div className="col-span-12 lg:col-span-6">
              <form className="p-6 lg:p-[42px] rounded-[20px] bg-white dark:bg-background-8">
                {[
                  { label: "Your name", id: "name", placeholder: "Enter your name" },
                  {
                    label: "Billing and shipping addresses",
                    id: "address",
                    placeholder: "Billing and shipping addresses",
                  },
                  {
                    label: "Payment information",
                    id: "payment",
                    placeholder: "Credit card, PayPal, or bank details",
                  },
                  {
                    label: "Email address",
                    id: "email",
                    placeholder: "Enter your email address",
                  },
                ].map((field) => (
                  <fieldset key={field.id} className="space-y-2 mb-8">
                    <label
                      htmlFor={field.id}
                      className="text-tagline-1 text-secondary dark:text-accent font-medium block"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type="text"
                      placeholder={field.placeholder}
                      className="w-full block border dark:text-accent dark:bg-background-6 border-stroke-3 dark:border-stroke-7 bg-background-1 py-3 px-[18px] rounded-full h-12"
                    />
                  </fieldset>
                ))}

                <fieldset className="flex items-center gap-2 mb-4">
                  <input id="agree" type="checkbox" required />
                  <label
                    htmlFor="agree"
                    className="text-tagline-3 text-secondary/60 dark:text-accent/60"
                  >
                    I agree with the{" "}
                    <Link
                      href="#"
                      className="text-primary-500 underline"
                    >
                      terms and conditions
                    </Link>
                  </label>
                </fieldset>

                <button
                  type="submit"
                  className="btn dark:btn-accent btn-md btn-secondary hover:btn-primary w-full"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Remaining sections unchanged structurally */}
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
     </main>
   <Footer/>


   
    
    </>
   
  )
}

export default page