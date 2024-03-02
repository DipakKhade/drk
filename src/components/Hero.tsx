import { Button } from "./ui/button"
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export default function Hero(){
    return(<>
    
    <main className="h-96 md:h-[60vh] justify-center align-middle text-center">
        <div className="p-6 md:p-24">
        <h1 className="text-3xl md:text-6xl font-bold">Built for Learning Next.js 14 server components and API Routes.</h1>
        <p className="p-4 text-lg text-gray-500 indent-7">Dive deep into the world of modern web development as you explore the latest features of Next.js 14. From building dynamic frontend experiences to mastering backend integrations and optimizing DevOps workflows, this platform is your gateway to unlocking the full potential of web development. </p>
        </div>

<div className="">
    <Link href={'/explore'}>
<Button className="p-3">Explore <FaArrowRightLong className="text-lg pl-2"/></Button>
    </Link>
</div>
        
    </main>
    </>)
}