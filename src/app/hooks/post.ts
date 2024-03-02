'use client';
import { useState ,useEffect} from "react";
import { client } from '@/lib/contentful/client.js'

export function useGetPosts(){
    const [posts, setPosts] = useState<any>()
    const [loading,setLoading]=useState<boolean>(true)
    const [postSlug,setPostSlug]=useState<any>('')
    const [postArray,setPostArray]=useState<any>()
    
    useEffect(() => {
        (async()=>{
            const response = await client.getEntries({ content_type: 'post' })
            setPosts(response)
            setPostSlug(response.items[0].fields.slug)

            // setPostArray()
            setLoading(false)
        })();
        
    }, [])


    return {posts,postSlug,loading}
    
}
