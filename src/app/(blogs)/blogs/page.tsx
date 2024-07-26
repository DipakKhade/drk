"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/Spinner";
import { client } from "@/lib/contentful/client.js";
import { useEffect } from "react";
import { Post } from "@/lib/types";
import { SearchBar } from "@/components/searchbar";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"



const Page = () => {
  const [posts, setPosts] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [isActive,setisActive]=useState<any>(false)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getEntries({ content_type: "post" });
        const titleblog = await client.getEntries({
          content_type: "post",
          select: ["fields.title"],
        });
        setPosts(response?.items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();

  


    
  }, []);



  if (loading) {
    return <Spinner />;
  }
  return (
    <>

      <main className="pt-24 md:pl-28 w-[85vw] md:w-[90vw]">
        <Command className="rounded-lg border shadow-md ml-8">
     
     <CommandInput
      onFocus={() => setisActive(true)} 
      onBlur={() => setisActive(false)}
      placeholder="Type to search ..." />
     
{ isActive ?   <CommandList>
       <CommandEmpty>No results found.</CommandEmpty>
       <CommandGroup heading="Suggestions">

{
 posts.map((i:any,index:number)=>(
   <CommandItem key={index}>
    <Smile className="mr-2 h-4 w-4" />
    <Link href={`/blogs/${posts[index].fields.slug}`}>
   <span>{(posts[index].fields["title"])}</span>
    </Link>
 </CommandItem>
 ))
}
       
       </CommandGroup>
       <CommandSeparator />
       
     </CommandList>   :''}
    
   </Command>



        <div className="container pt-12">
          <h2 className="md:text-2xl font-bold pb-8 dark:text-blue-600">
            I share what I&apos;ve been working on recently and things I learned
            along the way.
          </h2>

          {
            // visible  &&  visible.length>0 &&
            <ul className="flex flex-wrap sm:grid- w-full gap-4 md:max-w-screen-xl md:px-6 min-h-screen">
            {posts?.map((post: Post, index: number) => (
              <div
                key={index}
                className="group relative flex flex-col space-y-2 w-[75vw] sm:w-[30vw]"
              >
                <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-sm h-[400px]">
                  <div className="flex-1">
                    <Image
                      className="rounded-sm object-cover h-[200px] w-full"
                      src={
                        "http:" + post?.fields?.coverImage?.fields?.file?.url
                      }
                      height={200}
                      width={500}
                      alt={post?.fields?.coverImage?.fields?.title}
                    />
                  </div>
                  <div className="p-6 flex-1 overflow-hidden">
                    <h5 className="block truncate mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      {post?.fields?.title}
                    </h5>
                    <p className="block truncate font-sans text-base antialiased font-light leading-relaxed text-inherit">
                      {post?.fields?.exceprt}
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <Link href={`/blogs/${post?.fields?.slug}`}>
                      <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                      >
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </ul>
          }
        </div>
      </main>
    </>
  );
};

export default Page;