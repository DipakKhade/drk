import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/siteConfig/config";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Providers } from "./Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//font
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={cn(fontSans.variable, fontHeading.variable)}>
  

       
          <div className="min-h-[calc(100vh-64px)] dark:bg-[#121212]">
        <Providers>
<Header/>
            {children}
            <Footer/>
        </Providers>

            </div>

      </body>
    </html>
  );
}
