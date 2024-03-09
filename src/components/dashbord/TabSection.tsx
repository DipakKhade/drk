"use client";

import Image from "next/image";
import { Tabs } from "../Tabs";
import githubProfile from "../../assets/images/gitprofile.png";
import Portfolio from "../../assets/images/portfolio.png";
import Blogs from "../../assets/images/Blogs.png";
import Snippets from "../../assets/images/snippets.png";


export function TabsSection() {
  const tabs = [
    {
      title: "github",
      value: "github",
      content: (
        <div className="w-full bg-neutral-900 dark:bg-slate-200 overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
          <p className="dark:text-slate-900">github</p>
          <GitHub />
        </div>
      ),
    },
    {
      title: "about",
      value: "about",
      content: (
        <div className="w-full bg-neutral-900 dark:bg-slate-200 overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white">
          <p className="dark:text-slate-900">about</p>
          <PortfolioTab />
        </div>
      ),
    },

    {
      title: "codes",
      value: "codes",
      content: (
        <div className="w-full bg-neutral-900 dark:bg-slate-200 overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
          <p className="dark:text-slate-900">codes</p>
          <SnippetsTab />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] pt-6 m-2 md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

function PortfolioTab() {
  return (
    <Image
      src={Portfolio}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
}

function SnippetsTab() {
  return (
    <Image
      src={Snippets}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
}

function BlogsTab() {
  return (
    <Image
      src={Blogs}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
}
const GitHub = () => {
  return (
      <Image
        src={githubProfile}
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
  );
};
