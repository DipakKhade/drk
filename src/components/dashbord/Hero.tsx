import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
export default function Hero() {
  return (
    <>
      <section className="flex  items-center relative">
        <div className="h-[50rem] w-full dark:bg-slate-950 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <span className="inline-flex items-center">
                <span className="px-6 py-2 text-base font-bold uppercase rounded-lg">
                  Hello, World!
                </span>
              </span>
              <p className="mx-auto mt-8 text-2xl font-extrabold tracking-tight md:text-4xl">
                Built with Next.js 14 server components
                <span className="md:block"> <br className="md:hidden"/>An End to End fullstack site</span>
              </p>
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
              <p className="max-w-3xl mx-auto mt-4 lg:text-lg text-slate-500">
                adorned with the sleek Shadcn Aceternity UI, integrates dynamic
                blogs fetched from Contentful. Under the hood, we employ Prisma
                and PostgreSQL for reliable data storage. Enjoy secure login and
                sign-up features with Axios, JSON Web Tokens, Zod for
                validation, and bcrypt for password hashing. Dockerized for easy
                deployment.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 mt-10 sm:flex-row">
              <div className=" space-x-5">
                <Link href={"/blogs"}>
                  <Button
                    className="mt-6 rounded-full hover:shadow-sm"
                    size={"lg"}
                  >
                    <p className="text-white">Notes</p>{" "}
                    <ChevronRight className="text-white h-4 w-4 ml-1 hover:translate-x-1 ease-in-out duration-200 " />
                  </Button>
                </Link>
                <Link href={"/explore"}>
                  <Button
                    className="mt-6 rounded-full hover:shadow-sm"
                    size={"lg"}
                  >
                    <p className="text-white">See more</p>{" "}
                    <ChevronRight className="text-white h-4 w-4 ml-1 hover:translate-x-1 ease-in-out duration-200 " />
                  </Button>
                </Link>
              </div>
            </div>
            {/* <div className="mt-3">
          <span className="text-white">Get to known when we will launch. We won&lsquo;t share your email.</span>
        </div> */}
            <div className="flex-col mx-auto mt-12 sm:flex sm:max-w-lg">
              <p className="text-base text-white">by @dipak_khade</p>
            </div>
          </div>
        </div>

        {/* 
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p>
    </div>
     */}
      </section>
    </>
  );
}
