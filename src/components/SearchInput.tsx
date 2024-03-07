import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";
import { useForm } from 'react-hook-form';

   
export default function Search(){
    const [query, setQuery] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


    return <>
    <main className="m-auto p-12">

        <form 
        onSubmit={async(query)=>{
            const res=await axios.get('/api/search',{
                data:{
                    query
                }
            });
            console.log(res)
                }
            }
            >

                <div className="flex space-x-2">
        <Input className="w-96"
        {...register('qurey')}
        placeholder="search a note"/>
        <Button type="submit">search</Button>
        </div>
        </form>
    </main>
    </>
}