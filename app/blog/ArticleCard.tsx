"use client";

import Link from "next/link";
import Image from "next/image";

type ArticleCardProps = {
  image: string;
};

export default function ArticleCard({ image }: ArticleCardProps) {
  return (
    <article className="scale-100 hover:scale-[99%] bg-background-1 dark:bg-background-5 rounded-[20px] overflow-hidden transition-transform duration-500">
      <figure className="w-full max-h-[550px] rounded-[20px] overflow-hidden">
        <Image
          src={image}
          alt="Why most NextSaaS startups fail and how to beat the odds"
          width={800}
          height={550}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="p-4 md:p-6 lg:p-8 space-y-4 rounded-b-[20px]">
        <span className="badge badge-cyan">Finance</span>

        <div className="flex items-center gap-5">
          <time className="text-tagline-2 font-medium text-secondary/60 dark:text-accent/60">
            14.05.2025
          </time>

          <div className="w-px h-3 bg-stroke-2 dark:bg-stroke-6" />

          <time className="text-tagline-2 font-medium text-secondary/60 dark:text-accent/60">
            1 min
          </time>
        </div>

        <h3 className="font-normal sm:text-heading-5 text-tagline-1">
          <Link href="/ai-agency-blog-details">
            Why most NextSaaS startups fail—and how to beat the odds
          </Link>
        </h3>

        <Link
          href="/BlogDetails"
          className="btn btn-md btn-white hover:btn-primary dark:btn-transparent inline-block"
        >
          <span>Read more</span>
        </Link>
      </div>
    </article>
  );
}
