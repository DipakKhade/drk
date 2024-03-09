import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
export default function Hero(){
  return(
    <>
    <section className="flex  items-center relative">
 
     
    <div className="relative items-center w-full gap-12 p-8 mx-auto lg:inline-flex lg:p-20 max-w-7xl rounded-3xl lg:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <div>
          <span className="inline-flex items-center"><span className="px-6 py-2 text-base font-bold uppercase rounded-lg">Hello, World!</span></span>
          <p className="mx-auto mt-8 text-2xl font-extrabold tracking-tight md:text-4xl">
          Built with Next.js 14 server components
            <span className="md:block">An End to End fullstack site</span>
          </p>
          <p className="max-w-3xl mx-auto mt-4 lg:text-lg text-slate-500">
          adorned with the sleek
            Shadcn Aceternity UI, integrates dynamic
            blogs fetched from Contentful. Under the hood, we employ Prisma and
            PostgreSQL for reliable data storage. Enjoy secure login and sign-up
            features with Axios, JSON Web Tokens, Zod for validation, and bcrypt
            for password hashing. Dockerized for easy
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
  </section>
  </>
  )
}