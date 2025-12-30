import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <>
    <Header/>



     <main className=' dark:bg-background-7'>

       


    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px] xl:pt-[180px] md:pt-42 sm:pt-36 pt-32">
      <div className="main-container">
        <div data-ns-animate data-delay="0.3" className="space-y-3">
          <h2>Terms &amp; conditions</h2>

          <div className="space-y-7">
            <p>
              This site, nextsaas.com (hereafter referred to as NextSaaS, site,
              or website) is owned and operated by NextSaaS Technologies LLC
              (hereafter referred to as NextSaaS, we, or company).
            </p>
            <p>
              Please carefully read, review, and understand our Terms and
              Conditions before using any services or products from
              nextsaas.com. Your access to and use of this website and its
              products indicate that you accept and agree to be bound by these
              terms and conditions.
            </p>
            <p>
              If you do not agree with these terms, you should leave the site
              immediately and not use any of the materials or services available
              here.
            </p>
          </div>
        </div>

        <article className="terms-conditions-body">
          <div data-ns-animate data-delay="0.4" className="space-y-6">
            <h3>1. Limitation of liability</h3>
            <p>
              Under no circumstances shall NextSaaS be liable for any direct,
              indirect, incidental, special, or consequential damages, including
              loss of data, profits, or business interruption.
            </p>
            <p>
              If your use of materials from this site results in the need for
              servicing or repair, you assume all associated costs.
            </p>
          </div>

          <div data-ns-animate data-delay="0.5" className="space-y-6">
            <h3>2. License</h3>
            <p>
              NextSaaS services are provided under a commercial license
              agreement. Each purchase includes updates and support for 365
              days.
            </p>
            <p>
              You may not resell, redistribute, or modify NextSaaS products
              without written consent.
            </p>
          </div>

          <div data-ns-animate data-delay="0.6" className="space-y-6">
            <h3>3. Ownership and liability</h3>
            <p>
              All NextSaaS products and materials remain the intellectual
              property of NextSaaS Technologies LLC.
            </p>
            <p>
              Products are provided “as is” without warranty of any kind.
            </p>
            <p>
              User accounts and licenses are{" "}
              <strong className="font-bold !text-secondary dark:!text-accent">
                non-transferable
              </strong>
              .
            </p>
          </div>

          <div data-ns-animate data-delay="0.3" className="space-y-6">
            <h3>4. Refund policy</h3>
            <p>
              We offer a 14-day no-questions-asked refund policy. Contact support
              within 14 days of purchase to receive a full refund.
            </p>
          </div>

          <div data-ns-animate data-delay="0.4">
            <Link
              href="/ai-agency-refund-policy"
              className="section-button btn dark:btn-accent hover:btn-primary btn-xl btn-secondary"
            >
              Learn more about our refund policy
            </Link>
          </div>

          <div data-ns-animate data-delay="0.5" className="space-y-6">
            <h3>5. Warranty</h3>
            <p>
              NextSaaS services are provided without any warranty. Compatibility
              is not guaranteed across all browsers or systems.
            </p>
          </div>

          <div data-ns-animate data-delay="0.6" className="space-y-6">
            <h3>6. Account termination and suspension</h3>
            <p>
              NextSaaS reserves the right to suspend or terminate accounts for:
            </p>
            <ul>
              <li>Abusive or malicious behavior</li>
              <li>False or misleading information</li>
              <li>Unauthorized resale or distribution</li>
              <li>Illegal activities</li>
              <li>Security risks</li>
            </ul>
          </div>

          <div data-ns-animate data-delay="0.3" className="space-y-6">
            <h3>7. Privacy policy</h3>
            <p>
              NextSaaS does not sell or share your personal information. Data is
              used for:
            </p>
            <ul>
              <li>Order processing</li>
              <li>Account management</li>
              <li>Billing disputes</li>
              <li>Fraud prevention</li>
              <li>Legal compliance</li>
            </ul>
          </div>

          <div data-ns-animate data-delay="0.4">
            <Link
              href="/ai-agency-privacy-policy"
              className="section-button btn btn-xl dark:btn-accent hover:btn-primary btn-secondary"
            >
              Read our detailed privacy policy
            </Link>
          </div>
        </article>
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