import { Button } from "./ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ThemeToggle";
const rs = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Header() {
  return (
    <>
      <nav className="fixed z-50 top-0 px-4 w-full h-16 border-b shadow-sm bg-background/80 backdrop-blur-md flex items-center gap-2">
        <div className="px-6 max-w-2xl flex antialiased">
          <h1
            className={cn(
              "sm:text-2xl font-semibold text-neutral-800 dark:text-neutral-200 md:text-3xl mb-2",
              rs.className
            )}
          >
           @Dipak Khade
          </h1>

          <div className="absolute right-6 flex space-x-2">
            <Button className="bg-slate-100 text-slate-800 hover:text-slate-100 hover:bg-violet-700">Log in</Button>
            <ModeToggle/>
          </div>
        </div>
      </nav>
    </>
  );
}

