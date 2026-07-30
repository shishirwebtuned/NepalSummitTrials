import Topsection from "@/components/Topsection";
import React from "react";
import { BlogBanner } from "./Components/BlogBanner";
import { Recommendation } from "./Components/Recommendation";
import { createClient } from "@/lib/supabase/server";
import BlogGrid from "./Components/BlogGrid";

const page = async () => {
  const supabase = await createClient()

  const { data: blogs } = await supabase
    .from('blogs')
    .select('id, title, slug, excerpt, cover_image, category, published_at, author_id')
    .eq('status', 'published')
    .order('published_at', { ascending: false })


  return (
    <div>
      <Topsection
        title="Your Journey Starts With a Message"
        image="/images/about/aboutbg.png"
      />
      <BlogGrid blogs={blogs || []} />
      <BlogBanner />
      <Recommendation />
    </div>
  );
};

export default page;
