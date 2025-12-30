import { main } from "framer-motion/client"
import Header from "../header"
import Footer from "../footer";

export default function BlogDetails() {
  return (
    <main>
    <Header />
    <section className="mt-20 p-2">
    
      <div className="main-container mt-12">
        <div className="space-y-3 max-w-[1209px] mx-auto">
          <h2
            data-ns-animate
            data-delay="0.1" 
            className="max-w-[884px]"
          >
            Take control of your online banking and earn rewards.
          </h2>

          <div className="flex items-center gap-3">
            <figure
              data-ns-animate
              data-delay="0.2"
              className="size-12 rounded-full overflow-hidden bg-[#ECEAED]"
            >
              <img
                src="/images/ns-avatar-6.png"
                className="object-center object-cover"
                alt="Esther Howard avatar"
                width={48}
                height={48}
                loading="lazy"
              />
            </figure>

            <div>
              <h3
                data-ns-animate
                data-delay="0.3"
                className="text-tagline-1 font-medium"
              >
                Esther Howard
              </h3>

              <time
                dateTime="2014-03-13"
                data-ns-animate
                data-delay="0.4"
                className="text-tagline-2 flex items-center gap-2 font-normal text-secondary/60 dark:text-accent/60"
              >
                March 13, 2014 <span>•</span> 5 min read
              </time>
            </div>
          </div>
        </div>

        <figure
          data-ns-animate
          data-delay="0.4"
          className="max-w-full rounded-lg md:rounded-4xl my-10 md:my-[70px] overflow-hidden"
        >
          <img
            src="/images/ns-img-492.png"
            className="w-full h-full object-cover object-center"
            alt="blog details cover"
          />
        </figure>

        {/* Blog body */}
        <article className="details-body">
          <h3 data-ns-animate data-delay="0.1">Introduction</h3>

          <p data-ns-animate data-delay="0.2">
            Lorem ipsum dolor sit amet consectetur. Diam consectetur suspendisse
            dolor quam consectetur amet enim. Adipiscing tortor pretium
            pellentesque fames vulputate suscipit.
          </p>

          <p data-ns-animate data-delay="0.2">
            Lorem ipsum dolor sit amet consectetur. Elit egestas non velit
            phasellus purus justo.
          </p>

          <h3 data-ns-animate data-delay="0.2">
            Key benefits of AI-Powered chatbots
          </h3>

          <h4 data-ns-animate data-delay="0.2">24/7 Availability</h4>

          <p data-ns-animate data-delay="0.2">
            Lorem ipsum dolor sit amet consectetur. Diam consectetur suspendisse
            dolor quam consectetur amet enim.
          </p>

          <h4 data-ns-animate data-delay="0.2">Cost Efficiency</h4>

          <p data-ns-animate data-delay="0.2">
            Lorem ipsum dolor sit amet consectetur. Elit egestas non velit
            phasellus purus justo.
          </p>

          <h3 data-ns-animate data-delay="0.2">Real-World Use Cases</h3>

          <h4 data-ns-animate data-delay="0.2">E-commerce</h4>
          <p data-ns-animate data-delay="0.2">
            Automating FAQ responses, tracking orders, and providing product
            recommendations.
          </p>

          <h4 data-ns-animate data-delay="0.2">Healthcare</h4>
          <p data-ns-animate data-delay="0.2">
            Managing patient appointments, answering common medical questions,
            and sending medication reminders.
          </p>

          <h4 data-ns-animate data-delay="0.2">Finance</h4>
          <p data-ns-animate data-delay="0.2">
            Assisting with balance inquiries, fraud alerts, and basic account
            troubleshooting.
          </p>

          <figure data-ns-animate data-delay="0.2">
            <img
              src="/images/ns-img-464.png"
              className="w-full h-full object-cover object-center"
              alt="blog image"
            />
          </figure>
          <h3 data-ns-animate data-delay="0.2">Work harder & gain success</h3>
          <p data-ns-animate data-delay="0.2">Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit.
            Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.
          </p>
          <ul>           
            <li data-ns-animate data-delay="0.1">
              Manage your time so you’ll get more done
            </li>
            <li data-ns-animate data-delay="0.1">
              Cut expenses without sacrificing quality
            </li>
            <li data-ns-animate data-delay="0.1">
              Attract high-paying customers
            </li>
          </ul>
          
        </article>

        {/* Share section */}
        <div
          data-ns-animate
          data-delay="0.2"
          className="space-y-4 max-w-[950px] mx-auto mt-[70px] details-body"
        >
          <h3 className="text-heading-6">Manage your online banking</h3>
          <p data-ns-animate data-delay="0.2">Lorem ipsum dolor sit amet consectetur. Diam consectetur suspendisse dolor quam consectetur amet enim. Adipiscing tortor pretium pellentesque fames vulputate suscipit. Magnis urna commodo enim feugiat. Eu in lacus amet mi nec arcu. Odio lectus vitae convallis feugiat convallis amet
            Lorem ipsum dolor sit amet consectetur. Diam consectetur suspendisse dolor quam consectetur amet enim. Adipiscing tortor pretium pellentesque fames vulputate suscipit. Magnis urna commodo enim feugiat. Eu in lacus amet mi nec arcu. Odio lectus vitae convallis feugiat convallis amet
          </p>
          <ul>           
            <li data-ns-animate data-delay="0.1">
              Manage your time so you’ll get more done
            </li>
            <li data-ns-animate data-delay="0.1">
              Cut expenses without sacrificing quality
            </li>
            <li data-ns-animate data-delay="0.1">
              Attract high-paying customers
            </li>
          </ul>
        </div>
        <section>
          <div
            data-ns-animate
            data-delay="0.2"
            className="space-y-4 max-w-[950px] mx-auto mt-[70px]"
            style={{
              opacity: 1,
              filter: "blur(0px)",
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(0px, 0px)",
            }}
          >
            <h5 className="text-heading-6">Share this post</h5>

            <ul className="flex items-center gap-2.5">
              <li className="group/social-link border border-secondary/10 dark:border-stroke-7 inline-flex items-center justify-center p-2.5 rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:bg-primary-500 hover:border-primary-500">
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M18.75 10.0535C18.75 5.19145 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.19145 1.25 10.0535C1.25 14.4475 4.44973 18.0896 8.63281 18.75V12.5982H6.41113V10.0535H8.63281V8.11396C8.63281 5.90759 9.93916 4.68886 11.9378 4.68886C12.8948 4.68886 13.8965 4.8608 13.8965 4.8608V7.02728H12.7932C11.7063 7.02728 11.3672 7.70594 11.3672 8.40282V10.0535H13.7939L13.406 12.5982H11.3672V18.75C15.5503 18.0896 18.75 14.4475 18.75 10.0535Z"
                      className="fill-secondary dark:fill-accent group-hover/social-link:fill-accent transition-all duration-300 ease-in-out"
                    />
                  </svg>
                </a>
              </li>

              <li className="group/social-link border border-secondary/10 dark:border-stroke-7 inline-flex items-center justify-center p-2.5 rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:bg-primary-500 hover:border-primary-500">
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 1.25C5.16947 1.25 1.25 5.16947 1.25 10C1.25 14.8305 5.16947 18.75 10 18.75C14.821 18.75 18.75 14.8305 18.75 10C18.75 5.16947 14.821 1.25 10 1.25Z"
                      className="fill-secondary dark:fill-accent group-hover/social-link:fill-accent transition-all duration-300 ease-in-out"
                    />
                  </svg>
                </a>
              </li>

              <li className="group/social-link border border-secondary/10 dark:border-stroke-7 inline-flex items-center justify-center p-2.5 rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:bg-primary-500 hover:border-primary-500">
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 1.25C5.16562 1.25 1.25 5.16562 1.25 10C1.25 13.8719 3.75469 17.1422 7.23281 18.3016"
                      className="fill-secondary dark:fill-accent group-hover/social-link:fill-accent transition-all duration-300 ease-in-out"
                    />
                  </svg>
                </a>
              </li>

              <li className="group/social-link border border-secondary/10 dark:border-stroke-7 inline-flex items-center justify-center p-2.5 rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:bg-primary-500 hover:border-primary-500">
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10.0007 1C6.35854 1 3.07729 3.19375 1.6851 6.55469"
                      className="fill-secondary dark:fill-accent group-hover/social-link:fill-accent transition-all duration-300 ease-in-out"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Comments */}
        <article
          data-ns-animate
          data-delay="0.2"
          className="max-w-[850px] mx-auto mt-10 mb-12 md:mt-[72px] details-body p-4 rounded-2xl bg-white"
        >
          <h5 className="text-heading-4 mb-6 text-black">Comments</h5>

          <form>
            <fieldset className="mb-6">
              <label className="text-tagline-1 font-medium">
                Full Name
              </label>
              <input
                type="text"
                className="w-full rounded-full px-4 py-3 border border-stroke-3"
                placeholder="Enter your name"
              />
            </fieldset>

            <fieldset className="mb-6">
              <label className="text-tagline-1 font-medium">
                Email address
              </label>
              <input
                type="email"
                className="w-full rounded-full px-4 py-3 border border-stroke-3"
                placeholder="Enter your email"
              />
            </fieldset>

            <fieldset className="mb-6">
              <label className="text-tagline-1 font-medium">
                Message
              </label>
              <textarea
                className="w-full rounded-xl px-4 py-3 border border-stroke-3 min-h-[120px]"
                placeholder="Enter your message"
              />
            </fieldset>
            <div className="flex items-center gap-2 mb-3">
              <input
                type="checkbox"
                id="checkbox"
                className="h-4 w-4 rounded border border-secondary/30 accent-primary-500 cursor-pointer"
              />
              <label
                htmlFor="checkbox"
                className="text-sm cursor-pointer select-none"
              >
                Accept terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-secondary w-full hover:btn-primary p-2"
            >
              Submit
            </button>
          </form>
          
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
    <Footer />
    </main>
  );
}
