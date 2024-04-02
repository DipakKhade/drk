"use client";
import { Poppins } from "next/font/google";
import { ModeToggle } from "./ThemeToggle";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const rs = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Header() {
  const { data: session, status } = useSession();
  // console.log(session);
  return (
    <>
      <nav className="fixed dark:bg-slate-950 z-50 top-0 px-4 w-full h-16 border-b shadow-sm bg-background/80 backdrop-blur-md flex items-center gap-2">
        <div className="px-6 max-w-2xl flex antialiased">
          {/* <h1
            className={cn(
              "sm:text-2xl font-semibold text-neutral-800 dark:text-neutral-200 md:text-3xl mb-2",
              rs.className,
            )}
          >
            @Dipak Khade
          </h1> */}

          <Link href={"/"}>
            <Avatar>
              {
                status=='unauthenticated'? 
                <AvatarImage src="https://assets.materialup.com/uploads/9a462a9b-2856-446a-97af-717c10fe59f9/preview.png" />
                :
                
              <AvatarImage src={session?.user?.image ||'https://assets.materialup.com/uploads/9a462a9b-2856-446a-97af-717c10fe59f9/preview.png'} />
              }
              <AvatarFallback>DK</AvatarFallback>
            </Avatar>
          </Link>

          <div className="pl-2 pt-2 font-semibold">
            {
              session?.user?.name ? <span>{session?.user?.name}</span> : ''
            }
          </div>


          <div className="absolute right-6 flex space-x-2">
            {status == "unauthenticated" ? (
             
             <Link href={'/signup'}>

              <Button
                className="bg-slate-100 text-slate-800 hover:text-slate-100 hover:bg-blue-400 w-14 h-8"
                >
                signup
              </Button>
                </Link>
            ) : (
              <Button
                onClick={() => signOut()}
                className="bg-slate-100 text-slate-800 hover:text-slate-100 hover:bg-blue-400 w-14 h-8"
              >
                logout
              </Button>
            )}
            <div>
              <Link href={'https://dipakkhade-dev.vercel.app/'}>
              <Button className="bg-slate-100 text-slate-800 hover:text-slate-100 hover:bg-blue-400 w-14 h-8">about</Button>
              </Link>
            </div>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}
