"use client";
import { FilterComp } from "@/components/shared/FilterComp";
import { Pagination } from "@/components/shared/Pagination";
import { SearchComp } from "@/components/shared/SearchComp";
import { trekPackages } from "@/data/data";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsChatSquareText } from "react-icons/bs";
import { IoMdArrowForward } from "react-icons/io";

export const CampaignTrek = () => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const handleNavigate = (trekId: string | number) => {
    router.push(`/trek-detail/${trekId}`);
  };

  const handleBooking = () => {
    router.push("/trip-details");
  };

  return (
    <div className="flex flex-col md:flex-row pb-6 pt-10 lg:px-24 md:px-14 px-6 gap-5">
      <div className="w-full md:w-1/4 lg:w-1/4">
        <FilterComp />
      </div>
      <div className="lg:w-3/4 md:w-3/4 w-full">
        <SearchComp />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trekPackages.map((trek, idx) => (
            <div
              key={idx}
              onClick={() => handleNavigate(trek?.id)}
              className="bg-white rounded-xl relative overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="overflow-hidden relative w-full h-[12rem] cursor-pointer">
                <img
                  src={trek.image}
                  alt={trek.title}
                  className="w-full h-full object-cover scale-100 hover:scale-125 transition-transform duration-500 ease-in-out"
                />
                <div className="">
                  <span className="text-[#0B2839]/80 lg:text-[13px] md:text-xs text-[11px] bg-[#D5E880] font-medium px-3 py-[3px] rounded-xl absolute top-3 left-4">
                    {trek.discount}
                  </span>
                </div>
              </div>
              <div className="p-4 jakarta">
                <h3 className="text-md cursor-pointer font-semibold text-[#0B2839] ">
                  {trek.title}
                </h3>
                <div className="border border-[#BEBEBE]/30 rounded-lg px-3 py-2 mt-5 flex flex-col">
                  <div className=" text-yellow-500 flex flex-row items-center">
                    <span className="lg:text-sm md:text-[13px] text-xs">
                      {trek.rating}
                    </span>
                    <p className="text-[#9E9E9E] ml-2 lg:text-sm md:text-[13px] text-xs">
                      {trek.ratingValue}
                      <span className="ml-1 lg:text-[13px] md:text-xs text-[11px]">
                        ({trek.reviews} reviews)
                      </span>
                    </p>
                  </div>
                  <p className="lg:text-sm md:text-[13px] text-xs flex flex-row items-center gap-1 text-gray-500 mt-1 mb-1">
                    <img
                      src="/images/icons/DurationIcon.svg"
                      alt="Travel Website"
                    />
                    Duration: {trek.duration}
                  </p>
                  <p className="lg:text-sm md:text-[13px] text-xs flex flex-row items-center gap-1 text-gray-500 mb-1">
                    <img
                      src="/images/icons/MountainIcon.svg"
                      alt="Travel Website"
                    />
                    Altitude: {trek.altitude}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-5">
                  <div className="flex flex-col items-start justify-center gap-2">
                    <span className="text-[#0B2839]/80 lg:text-[11px] md:text-[10px] text-[9px] bg-[#D5E880] font-medium px-2 py-[3px] rounded-xl">
                      {trek.discount}
                    </span>
                    <p className="text-black font-semibold lg:text-[15px] md:text-sm text-[13px]">
                      $ {trek.price}
                      <span className="ml-2 line-through text-[#A4A4A4] lg:text-sm md:text-[13px] text-xs">
                        $ {trek.originalPrice}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-row flex-wrap justify-end items-center gap-2">
                    <button className="bg-white border-[1.5px] border-[#0B2839] px-[9px] py-[7px] rounded-lg">
                      <BsChatSquareText className="lg:size-5 md:size-4 size-3" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBooking();
                      }}
                      className="group relative cursor-pointer bg-[#0B2839] text-white lg:text-xs md:text-[11px] text-[10px] px-[12px] lg:py-[9px] md:py-[6.5px] py-[4px] rounded-lg flex items-center justify-center gap-1 transition-all duration-300 ease-in-out hover:pr-[15px] hover:bg-[#0B2839]/80"
                    >
                      Book Now
                      <span className="overflow-hidden items-center justify-center inline-block w-0 group-hover:w-4 transition-all duration-300 ease-in-out group-hover:pr-3">
                        <span className="inline-block opacity-0 group-hover:opacity-100 items-center justify-center transform group-hover:translate-x-1 transition-all duration-300 ease-in-out">
                          <IoMdArrowForward className="size-3 mt-1" />
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={page}
          totalPages={10}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>
    </div>
  );
};
