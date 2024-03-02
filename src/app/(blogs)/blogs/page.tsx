'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useGetPosts } from '@/app/hooks/post';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Skeleton from '@/components/Skeleton';

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



const Page = () =>{

const{posts,loading}=useGetPosts()

   console.log(posts)
  //  console.log(loading)


   if(loading){
    return <Skeleton/>
   }
  return (
  
   <>
   <main className='pt-32 md:w-[80vw] m-auto'>

      <div className='container'>
        <ul className='sm:flex space-y-5 md:space-x-4 md:space-y-0 flex-wrap'>
          {posts.items.map((post:Post, index:number) => (
            <div key={index}>
<Link href={`/blogs/${post.fields.slug}`}>

              <Card className="w-[340px] md:w-[500px]">
              <CardHeader>
      
        </CardHeader>
        {/* <CardDescription>{post.fields.exceprt}</CardDescription> */}
        <CardContent> <Image  src={'http://'+post.fields.coverImage.fields.file.url} height={400} width={500} alt={post.fields.coverImage.fields.title} /></CardContent>
        <CardTitle className='pl-6'>{post.fields.title}</CardTitle>
        < CardFooter>{post.fields.exceprt}</CardFooter>
                </Card>

                </Link>
            </div>
          ))}
        </ul>
      </div>
    </main>
   </>

    
  
  )
}

// export const getStaticProps = async () => {

//   return {
//     props: {
//       posts: response.items,
//       revalidate: 60
//     }
//   }
// }


export default Page;