"use client";
import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";

type Trek = {
  name: string
  cover_image: string | null
  gallery: string[] | null
  duration_days: number
  difficulty: string
  max_altitude: number | null
  group_size: string | null
  category: string
}

const ImageAndOfferSection = ({ trek }: { trek: Trek }) => {
  const images = [
    trek.cover_image,
    ...(trek.gallery || []),
  ].filter(Boolean) as string[]

  const [activeImage, setActiveImage] = useState<string>(
    images[0] || '/images/campingTrek/trekDetail.png'
  )

  // const staticImages = [
  //   "/images/campingTrek/trekDetail.png",
  //   "/images/campingTrek/routeMap.png",
  //   "/images/campingTrek/groupImg.png",
  //   "/images/campingTrek/trekDetail.png",
  // ];

  const trekDetails = [
    {
      label: 'Duration',
      labelValue: `${trek.duration_days} Days`,
      image: '/images/icons/DurationIcon1.svg',
    },
    {
      label: 'Difficulty Level',
      labelValue: trek.difficulty.charAt(0).toUpperCase() + trek.difficulty.slice(1),
      image: '/images/icons/DifficultyIcon.svg',
    },
    ...(trek.max_altitude
      ? [{
        label: 'Altitude',
        labelValue: `${trek.max_altitude.toLocaleString()}m`,
        image: '/images/icons/MountainIcon1.svg',
      }]
      : []),
    ...(trek.group_size
      ? [{
        label: 'Group Size',
        labelValue: trek.group_size,
        image: '/images/icons/WalkIcon.svg',
      }]
      : []),
  ]

  return (
    <div className="">
      <div className="flex flex-col sm:flex-row w-full lg:h-[60vh] md:h-[50vh] h-[35vh] sm:gap-0 gap-2 overflow-hidden">
        <div className="sm:w-[78%] w-full sm:h-full h-[70%] flex items-center justify-center">
          <img
            src={activeImage || "/images/campingTrek/trekDetail.png"}
            alt="Trek Image"
            className="w-auto h-auto sm:object-cover object-contain rounded-r-md transition-all duration-300"
          />
        </div>
        <div className="sm:w-[22%] w-full sm:h-full h-[30%] flex flex-row sm:flex-col overflow-auto px-4 gap-2 scrollbar-hide">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              onClick={() => setActiveImage(image)}
              alt={`${trek.name} ${index + 1}`}
              className={`w-auto h-auto object-contain cursor-pointer rounded-md mb-2 transition-all ${activeImage === image ? 'ring-2 ring-[#2A78A6]' : ''
                }`}
            />
          ))}
        </div>
      </div>
      <div className="bg-[#DDF8FF66] jakarta flex flex-col lg:flex-row lg:gap-0 gap-6 lg:justify-between items-center justify-center lg:px-24 md:px-14 px-6 py-8">
        <div className="flex flex-col gap-2 jakarta">
          <p className="text-black lg:text-xl font-semibold md:text-lg text-base">
            {trek.name}          </p>
          <div className="flex flex-row items-center justify-start gap-2">
            <IoLocation className="text-[#2A78A6]" />
            <p className="text-[#636363] lg:text-sm md:text-xs text-[11px]">
              {trek.category}, Nepal
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-start gap-5">
          {trekDetails.map((detail, index) => (
            <div key={index} className="flex flex-row items-center gap-2">
              <img
                src={detail.image}
                className="lg:h-9 lg:w-9 md:h-8 md:w-8 w-7 h-7"
              />
              <div className="flex flex-col">
                <p className="text-[#9E9E9E] lg:text-xs md:text-[11px] font-medium text-[10px]">
                  {detail.label}
                </p>
                <p className="text-gray-700 font-semibold lg:text-sm md:text-[13px] text-xs">
                  {detail.labelValue}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageAndOfferSection;
