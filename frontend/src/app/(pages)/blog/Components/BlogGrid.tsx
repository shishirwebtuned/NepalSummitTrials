"use client";
import { useState } from "react";
import { BlogCard } from "./BlogCard";
import { blogData } from "@/data/data";

const categories = [
  "All",
  "Trekking & Hiking",
  "Peak Climbing",
  "Cultural Tours",
  "Adventure Activities",
  "Travel Tips",
  "Festivals & Events",
];

export const BlogGrid = () => {
  const [active, setActive] = useState("All");

  const filteredBlogs =
    active === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === active);

  return (
    <section className="px-8 md:px-16 lg:px-24 pb-10 lg:pt-10 md:pt-18 pt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="lg:text-4xl md:text-3xl text-2xl tracking-wider font-medium text-gray-900 gloock">
          Popular topics
        </h2>
      </div>

      <div className="flex flex-row justify-between w-full items-center mb-6">
        <div className="flex flex-wrap gap-x-3 gap-y-1 w-[80%]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`lg:text-sm md:text-[13px] jakarta font-semibold cursor-pointer text-xs px-2 py-1 rounded-full transition ${
                active === cat ? "text-[#2A78A6]" : "text-[#6B6B6B]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <button className="text-[13px] text-end w-[20%] text-[#495057] hover:underline">
          View All
        </button>
      </div>
      <div className="grid pt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-10">
        <button className="lg:px-4 md:px-3 px-2 md:py-2 py-1 border rounded lg:text-sm md:text-[13px] text-[11px] hover:bg-gray-100">
          ← Previous
        </button>
        <div className="flex md:gap-2 gap-1">
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6 rounded lg:text-sm md:text-[13px] text-xs hover:bg-gray-100 border text-gray-700"
            >
              {n}
            </button>
          ))}
        </div>
        <button className="lg:px-4 md:px-3 px-2 md:py-2 py-1 border rounded lg:text-sm md:text-[13px] text-[11px] hover:bg-gray-100">
          Next →
        </button>
      </div>
    </section>
  );
};
