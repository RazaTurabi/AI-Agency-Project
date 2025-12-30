import React from 'react'

const GetStarted = () => {
  return (
     <section
      className="py-[50px] md:py-20 lg:py-28 dark:bg-background-6 bg-white"
      aria-label="Use Case Overview"
    >
      <div className="main-container">
        <div className="flex items-center flex-col lg:flex-row justify-between">
          {/* Left Text */}
          <div className="xl:max-w-[650px] lg:max-w-[476px] max-[400px]:max-w-[300px] w-full space-y-5 text-center lg:text-left">
            <span
              data-ns-animate=""
              data-delay="0.3"
              className="badge badge-green badge-green"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "translate(0px, 0px) rotate(0deg) scale(1)",
              }}
            >
              Get started
            </span>
            <div className="space-y-3">
              <h2
                data-ns-animate=""
                data-delay="0.4"
                className="text-secondary dark:text-accent text-heading-5 sm:text-heading-4 lg:text-heading-2"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                }}
              >
                Build a complete website using the assistance
                <span className="text-primary-500 hidden">{/* optional span text */}</span>
              </h2>
              <p
                data-ns-animate=""
                data-delay="0.5"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                }}
              >
                Start your free trial today and see your ideas come to life easily and creatively.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:basis-[466px] space-y-6 md:ml-0 xl:ml-[100px] pt-[40px] lg:pt-[67px] w-full sm:w-[80%] md:w-[60%]">
            <form
              data-ns-animate=""
              data-delay="0.6"
              action="#"
              method="post"
              className="flex items-center flex-col gap-5 sm:flex-row justify-start lg:gap-3"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "translate(0px, 0px) rotate(0deg) scale(1)",
              }}
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

            {/* Feature List */}
            <ul className="flex flex-row items-center justify-center gap-x-4 sm:gap-x-6 sm:gap-y-0 gap-y-5 lg:justify-start">
              <li
                data-ns-animate=""
                data-delay="0.7"
                className="flex items-center justify-center gap-2"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                }}
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
                    <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"></path>
                  </svg>
                </span>
                <p className="text-tagline-3 sm:text-tagline-2">No credit card required</p>
              </li>
              <li
                data-ns-animate=""
                data-delay="0.8"
                className="flex items-center justify-center gap-2"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                }}
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
  )
}

export default GetStarted