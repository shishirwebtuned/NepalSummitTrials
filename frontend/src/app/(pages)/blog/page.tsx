import Topsection from "@/components/Topsection";
import React from "react";
import { BlogGrid } from "./Components/BlogGrid";
import { BlogBanner } from "./Components/BlogBanner";
import { Recommendation } from "./Components/Recommendation";

const page = () => {
  return (
    <div>
      <Topsection
        title="Your Journey Starts With a Message"
        image="/images/about/aboutbg.png"
      />
      <BlogGrid />
      <BlogBanner />
      <Recommendation />
    </div>
  );
};

export default page;
