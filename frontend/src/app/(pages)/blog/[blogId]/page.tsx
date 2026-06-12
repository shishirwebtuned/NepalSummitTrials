import Topsection from "@/components/Topsection";
import React from "react";
import { BlogDescription } from "../Components/BlogDescription";
import { RelatedBlogs } from "../Components/RelatedBlogs";

const page = () => {
  return (
    <div>
      <Topsection
        title="Your Journey Starts With a Message"
        image="/images/about/aboutbg.png"
      />
      <BlogDescription />
      <RelatedBlogs />
    </div>
  );
};

export default page;
