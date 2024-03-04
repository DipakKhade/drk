import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
const Link = dynamic(() => import("next/link"), { ssr: false });


export default function Hero() {
  return (
    <>
      <main className="h-96 md:h-[60vh] justify-center align-middle text-center">
        <div className="p-6 md:p-24">
          <h1 className="text-3xl md:text-6xl font-bold">
            Built for Learning Next.js 14 server components and API Routes.
          </h1>
          <p className="p-4 text-lg text-gray-500 indent-7">
            Dive deep into the world of modern web development as you explore
            the latest features of Next.js 14. From building dynamic frontend
            experiences to mastering backend integrations and optimizing DevOps
            workflows, this platform is your gateway to unlocking the full
            potential of web development.{" "}
          </p>
        </div>

        <div className=" space-x-5">
          <Link href={"/blogs"}>
            <Button
              className="mt-6 rounded-full hover:shadow-sm"
              size={"lg"}
              asChild
            >
              <Link href={"/blogs"}>
                <p className="text-white">Blogs</p>{" "}
                <ChevronRight className="text-white h-4 w-4 ml-1 hover:translate-x-1 ease-in-out duration-200 " />
              </Link>
            </Button>
          </Link>
          <Link href={"/explore"}>
            <Button
              className="mt-6 rounded-full hover:shadow-sm"
              size={"lg"}
              asChild
            >
              <Link href={"/blogs"}>
                <p className="text-white">See more</p>{" "}
                <ChevronRight className="text-white h-4 w-4 ml-1 hover:translate-x-1 ease-in-out duration-200 " />
              </Link>
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
}

// export default dynamic(() => Promise.resolve(Hero), { ssr: false });
