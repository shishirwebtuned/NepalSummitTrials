import Image from "next/image";
import React from "react";
import { blogData } from "@/data/data";
import { BlogCard } from "./BlogCard";

export const RelatedBlogs = () => {
  return (
    <div className="lg:px-24 md:px-16 px-8 py-12 flex flex-col w-full gap-10 bg-[#ACC0CC]/20">
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <p className="text-[#0D3A48] jakarta font-medium text-sm md:text-[15px] lg:text-base">
            Recommendation
          </p>
          <div className="bg-[#2A78A6] w-[40px] h-[2px]"></div>
          <div className="ml-4">
            <Image
              src="/images/icons/765737_09 1.png"
              alt="Mountain logo"
              width={105}
              height={35}
            />
          </div>
        </div>
        <h2 className="text-[20px] md:text-[24px] lg:text-[30px] text-[#0D3A48] gloock leading-tight mt-2">
          Related Blogs
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {blogData.slice(0, 4).map((blog, index) => (
          <BlogCard key={index} blog={blog} author={false} />
        ))}
      </div>
    </div>
  );
};
