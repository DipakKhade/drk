"use client";
import React, { useEffect, useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [success, setSuccess] = useState<boolean>(false);
  const [loader, setloader] = useState<boolean>(false);
  useEffect(() => {
    if (success) {
      toast.success("Successfully Signed in");
      setTimeout(() => {
        router.push("/blogs");
      }, 1000);
    }
  }, [success]);

  // const sessionStatus = useSetRecoilState(sessionAtom);
  return (
    <>
    <main className="pt-24 sm:w-[40vw] m-auto">
      {/* <Toaster richColors position="top-right" /> */}

      <Card className="dark:bg-black">
        <form
          onSubmit={handleSubmit(async (d) => {
            setloader(true);
            const res = await axios.post("/api/login", {
              data: d,
            });
            if (res.data.success) {
              toast.success(res.data.msg);
            } else {
              toast.warning(res.data.msg);
            }
            setloader(false);
            if (res.data.success) {
              setTimeout(() => {
                router.push("/blogs");
              }, 1000);
            }
          })}
        >
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Add Email and Password here. Click Login when you&apos;re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="Email">Email</Label>
              <Input {...register("email")} id="Email" defaultValue="" />
            </div>
            <div className="space-y-1">
              <LabelInputContainer className="mb-4">
                <Label htmlFor="password">Password</Label>
                <Input
                  {...register("password")}
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  />
              </LabelInputContainer>
            </div>
          </CardContent>
          <CardFooter>
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              {loader ? (
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                    ></path>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#1C64F2"
                    ></path>
                </svg>
              ) : (
                <span>Log in &rarr;</span>
                )}

              <BottomGradient />
            </button>
          </CardFooter>

          <div className="p-2">
            don&apos;t have an account ? <span className="font-semibold"><Link href={'/signup'}>sign up</Link></span>
          </div>
        </form>
      </Card>
    </main>
</>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
