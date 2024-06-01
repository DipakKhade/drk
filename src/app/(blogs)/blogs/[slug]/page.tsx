"use client";
import { useGetPosts ,useGetSpecificPost} from "@/hooks/post";
import { useEffect, useState } from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "@/components/RichText";
import Spinner from "@/components/Spinner";
import { client } from "@/lib/contentful/client.js";
interface slugProps {
  params: {
    slug: string;
  };
}
export default function Page(props: slugProps) {
  const [SpecificPost, setSpecificPost] = useState<any>(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'post',
          'fields.slug': props.params.slug, // Correctly filtering by fields.slug
        });

        if (response.items.length > 0) {
          //@ts-ignore
          setSpecificPost(response.items[0]);
        } else {
          setSpecificPost(null); // No post found
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (props.params.slug) {
      fetchPost();
    }
  }, [props.params.slug]); // Re-run the effect when slug changes
  
  //   console.log(posts)
  // console.log(currentPost?.fields?.content);

  // console.log(currentPost)
  // console.log('http://'+currentPost?.fields?.coverImage?.fields?.file?.url)

  if (!SpecificPost) {
    return <Spinner />;
  }

  return (
    <main className="pt-32 p-2 prose dark:prose-invert w-[85vw] sm:w-[70vw] m-auto">
      <div className="w-full text-4xl">
        {SpecificPost?.fields?.title}

        {/* {currentPost?.fields?.coverImage?.fields?.file?.url && (
          <Image
            src={"http:" + currentPost?.fields?.coverImage?.fields?.file?.url}
            width={600}
            height={500}
            alt={currentPost?.fields?.coverImage?.fields?.title}
          />
        )} */}
        {/* {JSON.stringify(currentPost)} */}
      </div>

      {documentToReactComponents(SpecificPost?.fields?.content, options)}
    </main>
  );
}
