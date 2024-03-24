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
import { Pagination } from "@/components/ui/pagination";
import Spinner from "@/components/Spinner";
import { client } from "@/lib/contentful/client.js";
import { useEffect, useRef } from "react";
import { usePagination } from "@mantine/hooks";
import { Post } from "@/lib/types";
import Search from "@/components/SearchInput";

const Page = () => {
  const ITEM_PER_PAGE = 4;
  const [posts, setPosts] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const buttonRef = useRef(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getEntries({ content_type: "post" });
        setPosts(response?.items);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
    // setTimeout(() => {
    //   buttonRef.current.click();
    // }, 500);
  }, []);

  // const [visible, setVisible] = useState(posts?.slice(0,ITEM_PER_PAGE));

  const pagination = usePagination({
    total: Math.ceil(posts?.length / ITEM_PER_PAGE),
    initialPage: 1,
    onChange(page) {
      const start = (page - 1) * ITEM_PER_PAGE;
      const end = start + ITEM_PER_PAGE;
      // setVisible(posts.slice(start, end));
    },
  });

  // console.log(posts)

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <main className="pt-32 w-[85vw] md:w-[90vw]">
        {/* <Search/> */}
        <div className="container">
          <h2 className="text-2xl font-bold pb-8">
            I share what I&apos;ve been working on recently and things I learned
            along the way.
          </h2>

          {
            // visible  &&  visible.length>0 &&
            <ul className="flex flex-wrap gap-10  sm:grid-cols-3">
              
              {posts?.map((post: Post, index: number) => (
                <div
                  key={index}
                  className="group relative flex flex-col space-y-2"
                >
                  <Link href={`/blogs/${post.fields.slug}`}>
                    <Card className="w-[300px] lg:w-[400px] hover:shadow-md hover:translate--11">
                      <CardHeader></CardHeader>
                      {/* <CardDescription>{post.fields.exceprt}</CardDescription> */}
                      <CardContent>
                        {" "}
                        <Image
                          className="rounded-sm"
                          src={
                            "http://" + post.fields.coverImage.fields.file.url
                          }
                          height={400}
                          width={500}
                          alt={post.fields.coverImage.fields.title}
                        />
                      </CardContent>
                      <CardTitle className="pl-6">
                        {post.fields.title}
                      </CardTitle>
                      <CardFooter>{post.fields.exceprt}</CardFooter>
                    </Card>
                  </Link>
                </div>
              ))}
            </ul>
          }
        </div>

        {/* <div className="p-8 w-full m-auto">
          <Pagination>
          <div className="flex gap-4">
            <button
            ref={buttonRef}
              onClick={pagination.previous}
              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 dark:text-slate-50 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                ></path>
              </svg>
              Previous
            </button>

            <button
              onClick={pagination.next}
              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 dark:text-slate-50 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                ></path>
              </svg>
            </button>
          </div>
          </Pagination>
        </div> */}
      </main>
    </>
  );
};

export default Page;



