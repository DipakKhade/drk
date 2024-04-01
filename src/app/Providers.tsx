"use client";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react"
export const Providers = ({ children }: { children: React.ReactNode }) => {

  

  return (

    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <SessionProvider>

      <RecoilRoot>
        {children}
        </RecoilRoot>
      </SessionProvider>
    </ThemeProvider>
  );
};
