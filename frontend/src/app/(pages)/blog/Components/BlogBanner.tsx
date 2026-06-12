import React from "react";

export const BlogBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat lg:h-[70vh] md:h-[60vh] h-[50vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/blog/blogBanner.jpg')",
      }}
    >

      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold lora leading-tight">
          Richird Norton photorealistic <br /> rendering as real photos
        </h1>
        <p className="md:mt-4 mt-3 lora text-[15px] text-sm md:text-base text-gray-200">
          Progressively incentivize cooperative systems through technically
          sound
          <br />
          functionalities. The credibly productivate seamless data.
        </p>
        <div className="bg-white w-10 h-[2.5px] md:mt-6 md:mb-4 mb-3 mt-4 flex"></div>
        <p className="md:mt-2 mt-1 lg:text-sm md:text-[13px] text-xs text-gray-300 lora">
          08.08.2021
        </p>
        <button className="md:mt-6 mt-4 px-4 py-1 rounded-lg uppercase text-white bg-[#FFFFFF]/15 lg:text-[13px] md:text-xs text-[11px] transition duration-300">
          Fashion
        </button>
      </div>
    </div>
  );
};
