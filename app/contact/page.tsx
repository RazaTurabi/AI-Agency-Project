import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Map from '../Map'
import GetStarted from '../useCases/GetStarted'
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <>
     <main className=' dark:bg-background-7'>
    <Header/>
     <section
      className="pb-14 md:pb-16 lg:pb-20 xl:pb-[100px] xl:pt-[180px] md:pt-42 sm:pt-36 pt-32"
      aria-label="Contact Information and Form"
    >
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* Heading */}
          <div className="max-w-[680px] mx-auto text-center space-y-3">
            <h2
              data-ns-animate=""
              data-delay="0.2"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "translate(0px,0px) rotate(0deg) scale(1)",
              }}
            >
              Reach out to our support team for help.
            </h2>
            <p
              data-ns-animate=""
              data-delay="0.3"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "translate(0px,0px) rotate(0deg) scale(1)",
              }}
            >
              Whether you have a question, need technical assistance, or just want some guidance, our
              support team is here to help. We're available around the clock to provide quick and
              friendly support.
            </p>
          </div>

          {/* Contact Info + Form */}
          <div className="flex lg:items-start flex-col justify-center items-center gap-10 lg:flex-row lg:gap-8 xl:gap-[70px]">
            {/* Contact Info Cards */}
            <div
              data-ns-animate=""
              data-delay="0.4"
              className="flex flex-col gap-8 md:flex-row lg:flex-col"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "translate(0px,0px) rotate(0deg) scale(1)",
              }}
            >
              {/* Card 1 - Address */}
              <div className="bg-secondary dark:bg-background-6 rounded-[20px] p-11 space-y-6 w-full md:max-w-[371px] text-center relative overflow-hidden">
                <figure className="absolute select-none pointer-events-none size-[350px] overflow-hidden top-[-187px] left-[174px] -rotate-[78deg]">
                  <Image src="/images/ns-img-510.png" alt="Decorative gradient overlay" fill className="object-cover" />
                </figure>
                <figure className="size-10 overflow-hidden mx-auto">
                  <Image src="/images/icons/home.svg" alt="Office location icon" width={40} height={40} />
                </figure>
                <div className="space-y-2.5">
                  <p className="text-heading-6 text-accent">Our Address</p>
                  <p className="text-accent/60">2464 Royal Ln. Mesa, New Jersey 45463</p>
                </div>
              </div>

              {/* Card 2 - Email */}
              <div className="card-item bg-secondary dark:bg-background-6 rounded-[20px] p-11 w-full md:max-w-[371px] text-center relative overflow-hidden">
                <figure className="absolute size-[350px] select-none pointer-events-none overflow-hidden top-[-206px] left-[-36px] rotate-[62deg]">
                  <Image src="/images/ns-img-509.png" alt="Decorative gradient overlay" fill className="object-cover" />
                </figure>
                <div className="space-y-6">
                  <figure className="size-10 overflow-hidden mx-auto">
                    <Image src="/images/icons/mail-open.svg" alt="Email icon" width={40} height={40} />
                  </figure>
                  <div className="space-y-2.5">
                    <p className="text-heading-6 text-accent">Email Us</p>
                    <p className="text-accent/60">
                      <Link href="mailto:hello@nextsaaS.com" className="underline">hello@nextsaaS.com</Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Phone */}
              <div className="bg-secondary dark:bg-background-6 rounded-[20px] p-11 w-full md:max-w-[371px] text-center relative overflow-hidden">
                <figure className="size-[450px] top-[-264px] left-[-255px] absolute select-none pointer-events-none">
                  <Image src="/images/ns-img-498.png" alt="Decorative gradient overlay" fill className="object-cover" />
                </figure>
                <div className="space-y-6">
                  <figure className="size-10 overflow-hidden mx-auto">
                    <Image src="/images/icons/phone-right.svg" alt="Phone icon" width={40} height={40} />
                  </figure>
                  <div className="space-y-2.5">
                    <p className="text-heading-6 text-accent">Call Us</p>
                    <p className="text-accent/60">
                      <Link href="tel:+391035256845933" className="underline">+391 (0)35 2568 4593</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              data-ns-animate=""
              data-delay="0.3"
              className="max-w-[847px] w-full mx-auto bg-white dark:bg-background-6 rounded-4xl p-6 md:p-8 lg:p-11"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "translate(0px,0px) rotate(0deg) scale(1)",
              }}
            >
              <form action="/index.html" method="POST" className="space-y-8">
                {/* Name & Phone */}
                <div className="flex items-center flex-col md:flex-row gap-8 justify-between">
                  <div className="space-y-2 lg:max-w-[364px] w-full">
                    <label htmlFor="fullname" className="block text-tagline-2 text-secondary dark:text-accent font-medium">Your name</label>
                    <input type="text" id="fullname" name="fullname" placeholder="Enter your name" required autoComplete="name" className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"/>
                  </div>
                  <div className="space-y-2 max-w-[364px] w-full">
                    <label htmlFor="number" className="block text-tagline-2 text-secondary dark:text-accent font-medium">Your number</label>
                    <input type="text" id="number" name="number" placeholder="Enter your number" required autoComplete="tel" className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"/>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-tagline-2 text-secondary dark:text-accent font-medium">Email address</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" required autoComplete="email" className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"/>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-tagline-2 text-secondary dark:text-accent font-medium">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Enter your subject" required className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"/>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-tagline-2 text-secondary dark:text-accent font-medium">Write message</label>
                  <textarea id="message" name="message" rows={7} placeholder="Enter your messages" required className="w-full px-[18px] py-3 rounded-xl border dark:bg-background-6 dark:border-stroke-7 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary dark:focus-visible:border-stroke-4/20 placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"></textarea>
                </div>

                {/* Terms Checkbox */}
                <fieldset className="flex items-center gap-2 mb-4">
                  <label htmlFor="terms" className="flex items-center gap-x-3">
                    <input id="terms" type="checkbox" className="sr-only peer" required />
                    <span className="size-4 rounded-full border border-stroke-3 dark:border-stroke-7 relative after:absolute after:size-2.5 after:bg-primary-500 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-primary-500 cursor-pointer"></span>
                  </label>
                  <label htmlFor="terms" className="text-tagline-3 cursor-pointer text-secondary/60 dark:text-accent/60">
                    I agree with the{" "}
                    <Link href="#" className="text-primary-500 underline text-tagline-3">terms and conditions</Link>
                  </label>
                </fieldset>

                {/* Submit Button */}
                <button type="submit" className="btn btn-md btn-secondary w-full hover:btn-primary dark:btn-accent before:content-none first-letter:uppercase">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Map/>
    <GetStarted/>
    <Footer/>
    </main>
    </>
  )
}

export default page