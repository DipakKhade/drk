"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Page() {
  const [query, setQuery] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <main className="pt-24">
        <form
          onSubmit={async (data: any) => {
            console.log(data);
            await axios.post("/api/search", {
              headers: {
                data,
              },
            });
          }}
        >
          <div>
            <Input {...register("qurey")} placeholder="search a note" />
            <Button type="submit">search</Button>
          </div>
        </form>
      </main>
    </>
  );
}
