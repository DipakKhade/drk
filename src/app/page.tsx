import Hero from "@/components/dashbord/Hero";
import { TabsSection } from "@/components/dashbord/TabSection";
import BlogsPreview from "@/components/dashbord/BlogsPreview";
import { Suspense } from "react";
import Spinner from "@/components/Spinner";
export default function Home() {

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <main className="pt-16">
          <Hero />

          <TabsSection />
          <BlogsPreview />
        </main>
      </Suspense>
    </>
  );
}
