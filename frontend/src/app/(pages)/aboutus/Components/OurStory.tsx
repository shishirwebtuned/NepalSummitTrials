

"use client";

import React from "react";
import Image from "next/image";

const OurStory = () => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-[90vh] my-5 lg:h-[800px] overflow-hidden">
      <Image
        src="/images/about/ourstoryBg.jpg"
        alt="Our Story Background"
        fill
        className="object-cover lg:object-contain"
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 100vw"
      />

      <div className="absolute inset-0 flex items-center justify-center sm:inset-y-0 sm:right-4 md:right-8 lg:right-12 xl:right-20 sm:justify-end px-2 sm:px-6">
        <div className="max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-2xl w-full">
          <div className="transform -skew-x-[8deg] sm:-skew-x-[10deg] bg-[#D5E880] opacity-85 p-4 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-lg">
            <div className="transform skew-x-[8deg] sm:skew-x-[10deg]">
              <h2 className="font-['Gloock'] text-lg sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4 text-center">
                Our Story
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-base md:text-lg text-gray-800 leading-relaxed">
                Palsang’s adventure began humbly in 1989 as a 16-year-old porter
                in Dolpa. With determination and integrity, he rose to become a
                highly respected guide across the Himalayas. After 16 years with
                a Dutch trekking company, he launched Himalayan Vacation Treks,
                blending world-class professionalism with a deeply personal
                mission: to uplift his community and share authentic Himalayan
                experiences with the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
