"use client";
import Image from "next/image";
import Link from "next/link";
import { useGetPosts } from "@/hooks/post";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Skeleton from "@/components/Skeleton";

interface Post {
  metadata: {
    tags: string[];
  };
  fields: {
    title: string;
    slug: string;
    author: {
      fields: {
        picture: {
          fields: {
            title: string;
            file: {
              url: string;
              details: {
                size: number;
                image: {
                  width: number;
                  height: number;
                };
              };
              fileName: string;
              contentType: string;
            };
          };
        };
      };
    };
    exceprt: string;
    coverImage: {
      fields: {
        title: string;
        file: {
          url: string;
          details: {
            size: number;
            image: {
              width: number;
              height: number;
            };
          };
          fileName: string;
          contentType: string;
        };
      };
    };
    content: {
      nodeType: string;
      data: any;
      content: {
        nodeType: string;
        data: any;
        content: {
          nodeType: string;
          data: any;
          content: any[];
        }[];
      }[];
    }[];
  };
}

const Page = () => {
  const { posts, loading } = useGetPosts();

  // console.log(posts);
  //  console.log(loading)

  if (loading) {
    return <Skeleton />;
  }
  return (
    <>
      <main className="pt-32 md:w-[80vw] m-auto">
        <div className="container">
          <h2 className="text-2xl font-bold pb-8">
            I share what I&apos;ve been working on recently and things I learned
            along the way.
          </h2>
          <ul className="grid gap-10 sm:grid-cols-2">
            {posts.items.map((post: Post, index: number) => (
              <div
                key={index}
                className="group relative flex flex-col space-y-2"
              >
                <Link href={`/blogs/${post.fields.slug}`}>
                  <Card className="w-[340px] lg:w-[500px] hover:shadow-md">
                    <CardHeader></CardHeader>
                    {/* <CardDescription>{post.fields.exceprt}</CardDescription> */}
                    <CardContent>
                      {" "}
                      <Image
                        className="rounded-sm"
                        src={"http://" + post.fields.coverImage.fields.file.url}
                        height={400}
                        width={500}
                        alt={post.fields.coverImage.fields.title}
                      />
                    </CardContent>
                    <CardTitle className="pl-6">{post.fields.title}</CardTitle>
                    <CardFooter>{post.fields.exceprt}</CardFooter>
                  </Card>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

// export const getStaticProps = async () => {

//   return {
//     props: {
//       posts: response.items,
//       revalidate: 60
//     }
//   }
// }

export default Page;
