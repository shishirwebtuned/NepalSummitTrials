import React from "react";

export const NewsAndTrends = () => {
  return (
    <div className="relative bg-white">
      <img
        src="/images/homepage/NewsandTravelBag.png"
        className="absolute right-0 bottom-0 lg:w-[10rem] md:w-[8rem] w-[6rem] h-auto"
      />
      <div className="relative flex md:flex-row flex-col lg:gap-10 md:gap-6 gap-8 px-6 md:px-16 lg:px-28 py-10 ">
        {/* Left Feature Card */}
        <div className="md:w-[55%] w-full rounded-2xl group overflow-hidden cursor-pointer shadow-lg relative">
          {/* Background Image */}
          <img
            src="/images/homepage/NewsandTravel.png"
            alt="Feature Article"
            className="w-full h-full object-cover scale-100 group-hover:scale-125 transition-all ease-in-out duration-500"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D3A48]/40 to-[#0D3A48] z-10"></div>

          {/* Text Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
            <p className="lg:text-sm md:text-[13px] text-xs mb-1">
              Saroj Lama Tamang – 30th August, 2021
            </p>
            <h2 className="md:text-xl text-lg lg:text-2xl font-semibold leading-tight">
              Unveiling The Rich Tapestry Of Bhutan’s Cultural Heritage
            </h2>
          </div>
        </div>

        {/* Right Article List */}
        <div className="md:w-[45%] w-full">
          <div className="flex flex-col items-start gap-2 pb-6">
            <div className="flex flex-row items-center gap-4">
              <p className="text-[#0D3A48] jakarta font-medium text-sm md:text-[15px] lg:text-base">
                News & Trend in Travel
              </p>
              <div className="bg-[#2A78A6] w-[40px] h-[2px]"></div>
              <div className="ml-4">
                <img
                  src="/images/icons/765737_09 1.png"
                  alt="Mountain logo"
                  width={105}
                  height={35}
                />
              </div>
            </div>
            <h2 className="text-[20px] md:text-[24px] lg:text-[30px] text-[#0D3A48] gloock leading-tight mt-2">
              Crafting Journey That Matters
            </h2>
          </div>

          {/* Article Cards */}
          <div className="space-y-4 bg-[#EDF7FD] lg:p-6 md:p-5 p-4 rounded-xl">
            {[1, 2].map((item) => (
              <div key={item} className="flex gap-4 rounded-xl items-center">
                <div className="w-[45%] h-full">
                  <img
                    src="/images/homepage/NewsandTravel1.png"
                    alt="Thumbnail"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-[55%] h-full text-sm">
                  <p className="lg:text-[12px] md:text-[11px] text-[10px] text-[#D27A3B] jakarta mb-1">
                    Saroj Lama Tamang – 7th January, 2022
                  </p>
                  <h4 className="text-[#0B2839] jakarta font-semibold leading-tight lg:text-[15px] md:text-sm text-[13px] mb-1">
                    {item === 1
                      ? "Exploring the Journey of Historical Roots to Modern Times in Bhutan!"
                      : "Exploring the Charm of Traditional Nepalese Rural Homes & Scenic Trails"}
                  </h4>
                  <p className="text-[#000000]/70 jakarta lg:text-[12px] md:text-[11px] text-[10px]">
                    DAP as we know … this subject may be of basic knowledge to
                    the experts but...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
