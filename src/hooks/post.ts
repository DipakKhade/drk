"use client";
// import { useState, useEffect } from "react";
// import { client } from "@/lib/contentful/client.js";
// import {redis} from '../lib/redis'

// export function useGetPosts() {
//   const [posts, setPosts] = useState<any>();
//   const [loading, setLoading] = useState<boolean>(true);
//   const [postSlug, setPostSlug] = useState<any>("");

//   useEffect(() => {
//     (async () => {

//       try {
//        const cachedValues= await redis.get('posts');

//        if(cachedValues){
//         setPosts(cachedValues)
//        }

//        else{
//         const response = await client.getEntries({ content_type: "post" });
//         setPosts(response);
//         await redis.set('posts',response)
//        }

//       } catch (error) {
//         console.log(error)
//       }

//       // setPostSlug(response.items[0].fields.slug);
//       setLoading(false);

//     })();
//   }, []);

//   return { posts, postSlug, loading };
// }

import { useState, useEffect } from "react";
import { client } from "@/lib/contentful/client.js";
// import { usePagination } from "@mantine/hooks";

export function useGetPosts() {
  const [posts, setPosts] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [postSlug, setPostSlug] = useState<any>("");
  useEffect(() => {
    (async () => {
      const response = await client.getEntries({ content_type: "post" });
      setPosts(response);
      setPostSlug(response.items[0].fields.slug);
      setLoading(false);
    })();
  }, []);

  return { posts, postSlug, loading };
}


export function useGetSpecificPost(slug:string){
  const [Specificpost ,setSpecificPost]=useState<any>()
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(()=>{
    (async()=>{
      client.getEntries({
        content_type: 'post',
        //@ts-ignore
        // select:"fields.slug"===slug
        'fields.slug': slug, 
      })
      .then((response:any) => {
        setSpecificPost(response)
        // console.log(response)
        setLoading(false);
      })
      .catch(console.error)
    })();

  })
  return {Specificpost,setSpecificPost,loading}
}