"use client";
import { useGetPosts } from "@/hooks/post";
import { useEffect, useState } from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "@/components/RichText";
import Spinner from "@/components/Spinner";
interface slugProps {
  params: {
    slug: string;
  };
}
export default function Page(props: slugProps) {
  const { posts, postSlug, loading } = useGetPosts();
  const { slug } = props.params;
  const [currentPost, setCurrentPost] = useState<any>("");
  //   console.log(posts)
  // console.log(currentPost?.fields?.content);
  useEffect(() => {
    (async () => {
      if (posts && posts.items) {
        let pageSlug = posts.items.find(
          (post: any) => post.fields.slug === slug,
        );
        setCurrentPost(pageSlug);
      }
    })();
  }, [posts, slug]);

  // console.log(currentPost)
  // console.log('http://'+currentPost?.fields?.coverImage?.fields?.file?.url)

  if (loading) {
    return <Spinner />;
  }

  return (
    <main className="pt-32 p-2 prose dark:prose-invert w-[85vw] sm:w-[70vw] m-auto">
      <div className="w-full ">

      {currentPost?.fields?.title}

      {currentPost?.fields?.coverImage?.fields?.file?.url && (
        <Image
        src={"http://" + currentPost?.fields?.coverImage?.fields?.file?.url}
        width={600}
        height={500}
        alt={currentPost?.fields?.coverImage?.fields?.title}
        />
        )}
      {/* {JSON.stringify(currentPost)} */}
        </div>

      {documentToReactComponents(currentPost?.fields?.content, options)}

    </main>
  );
}
