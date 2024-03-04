import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
const Link = dynamic(() => import("next/link"), { ssr: false });

export default function Hero() {
  return (
    <>
      <main className="h-96 md:h-[60vh] justify-center align-middle text-center">
        <div className="p-6 md:p-24">
          <h1 className="text-3xl md:text-6xl font-bold">Hello, World!</h1>
          <p className="p-4 text-lg text-gray-500 indent-7">
            Built with Next.js 14 server components and adorned with the sleek
            Shadcn Aceternity UI, integrates dynamic
            blogs fetched from Contentful. Under the hood, we employ Prisma and
            PostgreSQL for reliable data storage. Enjoy secure login and sign-up
            features with Axios, JSON Web Tokens, Zod for validation, and bcrypt
            for password hashing. Our application is Dockerized for easy
            deployment. Dive in and experience simplicity meets sophistication.
          </p>
        </div>

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
        
      </main>
    </>
  );
}

// export default dynamic(() => Promise.resolve(Hero), { ssr: false });
