"use client";
import { useRef, useState } from "react";
import { BsChatSquareText } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Image from "next/image";

const treks = [
  {
    id: 1,
    title: "Dolpo Trekking",
    duration: "14 Days",
    type: "Fixed Departure",
    altitude: "4800m",
    image: "/images/campingTrek/MustSee.png",
  },
  {
    id: 2,
    title: "Dolpo Trekking",
    duration: "14 Days",
    type: "Fixed Departure",
    altitude: "4800m",
    image: "/images/campingTrek/MustSee.png",
  },
  {
    id: 3,
    title: "Dolpo Trekking",
    duration: "14 Days",
    type: "Fixed Departure",
    altitude: "4800m",
    image: "/images/campingTrek/MustSee.png",
  },
  {
    id: 4,
    title: "Dolpo Trekking",
    duration: "14 Days",
    type: "Fixed Departure",
    altitude: "4800m",
    image: "/images/campingTrek/MustSee.png",
  },
  {
    id: 5,
    title: "Dolpo Trekking",
    duration: "14 Days",
    type: "Fixed Departure",
    altitude: "4800m",
    image: "/images/campingTrek/MustSee.png",
  },
  {
    id: 6,
    title: "Dolpo Trekking",
    duration: "14 Days",
    type: "Fixed Departure",
    altitude: "4800m",
    image: "/images/campingTrek/MustSee.png",
  },
  {
    id: 7,
    title: "Dolpo Trekking",
    duration: "14 Days",
    type: "Fixed Departure",
    altitude: "4800m",
    image: "/images/campingTrek/MustSee.png",
  },
];

export const MustSeeTrekComp = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const cardVariants = {
    initial: {},
    hover: {},
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0 },
  };

  const ratingVariants = {
    initial: { opacity: 0, x: -20 },
    hover: { opacity: 1, x: 0 },
  };

  return (
    <div className="lg:py-20 md:py-16 py-10 px-4 text-center relative md:max-w-6xl max-w-5xl lg:max-w-7xl lg:mx-[8%] md:mx-[4%] mx-0">
      <div className="w-full flex flex-col gap-3 items-center justify-center">
        <h2 className="text-[#0D3A48] jakarta text-center text-sm md:text-[15px] lg:text-base">
          Recommended
        </h2>
        <p className="gloock font-medium text-[#0D3A48] text-[20px] md:text-[24px] lg:text-[30px]">
          Must-See Treks for Adventure Lovers!
        </p>
        <div className="flex items-center gap-3">
          <div className="border-b-2 w-30 border-[#b9cbd0]"></div>
          <Image
            src="/images/icons/765737_09 1.png"
            alt="Mountain logo"
            width={105}
            height={35}
          />
          <div className="border-b-2 w-30 border-[#b9cbd0]"></div>
        </div>
      </div>
      {/* Scroll Buttons */}
      <button
        className="hidden md:flex absolute md:left-[-4] left-[6px] top-[60%] cursor-pointer -translate-y-1/2 z-10 bg-[#2A78A6]/70 hover:bg-[#48728B] backdrop-blur-[5px] text-white p-1 rounded-full"
        onClick={() => scroll("left")}
      >
        <RiArrowLeftSFill className="lg:size-11 md:size-9 size-6" />
      </button>
      <button
        className="hidden md:flex absolute md:right-[-12] right-[6px]  top-[60%] cursor-pointer -translate-y-1/2 z-10 bg-[#2A78A6]/70 hover:bg-[#48728B] backdrop-blur-[5px] text-white p-1 rounded-full"
        onClick={() => scroll("right")}
      >
        <RiArrowRightSFill className="lg:size-11 md:size-9 size-6" />
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex lg:gap-5 md:gap-4 gap-3 overflow-x-auto scroll-smooth no-scrollbar py-6 px-2"
      >
        {treks.map((trek) => {
          const [isHovered, setIsHovered] = useState(false);

          return (
            <motion.div
              key={trek.id}
              variants={cardVariants}
              initial="initial"
              layout
              whileHover="hover"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-full lg:min-w-[23rem] md:min-w-[20rem] min-w-[15rem] group cursor-pointer lg:h-[16rem] md:h-[14rem] h-[10rem] max-w-sm bg-white rounded-md shadow-md overflow-hidden ease-in-out transition-all duration-500"
            >
              <img
                src={trek.image}
                alt={trek.title}
                className="w-full absolute h-full group-hover:scale-[120%] ease-in-out transition-all duration-500 object-cover rounded-md"
              />

              <div className="relative jakarta w-full h-full bg-gradient-to-t from-black/40 to-transparent flex flex-row justify-between items-end px-6 py-5">
                <motion.div
                  variants={ratingVariants}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute backdrop-blur-[2px] bg-[#FFFFFF66] px-3 ml-2 py-1 top-3 left-2 rounded-md lg:text-[13px] md:text-xs text-[11px] text-white"
                >
                  5 star
                </motion.div>
                <div className="border-l border-[#C6E03A] flex flex-col justify-end items-start">
                  <span className="text-left bg-[#C6E03A] px-4 py-[4px] text-black lg:text-sm md:text-[13px] text-xs rounded-r-2xl font-medium">
                    {trek.duration}
                  </span>
                  <div className="text-left text-white ease-in-out transition-all duration-400 rounded-b-xl pl-2 mt-[6px]">
                    <p className="text-xs text-[#E7FF7C] lg:text-[13px] md:text-xs text-[11px]">
                      {trek.type}
                    </p>
                    <h3 className="font-semibold lg:text-lg md:text-[17px] text-base mt-[5px]">
                      {trek.title}
                    </h3>
                    <p className="lg:text-xs md:text-[11px] text-[10px]">
                      Altitude: {trek.altitude}
                    </p>
                    <motion.div
                      layout
                      initial={false}
                      animate={
                        isHovered
                          ? { opacity: 1, height: "auto", y: 0 }
                          : { opacity: 0, height: 0, y: 20 }
                      }
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="font-semibold lg:text-base md:text-[15px] text-sm mt-1"
                    >
                      $ 670
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  variants={buttonVariants}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-row flex-wrap justify-end items-center gap-2"
                >
                  <button className="cursor-pointer bg-transparent border-[1.5px] border-[#D5E880] px-[9px] py-[7px] rounded-lg">
                    <BsChatSquareText className="lg:size-5 md:size-4 size-3 text-[#D5E880]" />
                  </button>
                  <button className="cursor-pointer group/booking relative bg-[#D5E880] text-black lg:text-xs md:text-[11px] text-[10px] px-[12px] lg:py-[9px] md:py-[6.5px] py-[4px] rounded-lg flex items-center justify-center gap-1 transition-all duration-300 ease-in-out hover:pr-[15px] hover:bg-[#D5E880]/90">
                    Book Now
                    <span className="overflow-hidden items-center justify-center inline-block w-0 group-hover/booking:w-4 transition-all duration-300 ease-in-out group-hover/booking:pr-3">
                      <span className="inline-block opacity-0 group-hover/booking:opacity-100 items-center justify-center transform group-hover:translate-x-1 transition-all duration-300 ease-in-out">
                        <IoMdArrowForward className="size-3 mt-1" />
                      </span>
                    </span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
