"use client";
import React, { useRef } from "react";
import Image from "next/image";

const Offer = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const screenWidth = window.innerWidth;
      let cardsPerView = 4;

      if (screenWidth < 640) {
        cardsPerView = 2; // sm
      } else if (screenWidth < 768) {
        cardsPerView = 2; // md
      } else if (screenWidth < 1024) {
        cardsPerView = 3; // lg
      } else {
        cardsPerView = 4; // xl and up
      }

      const cardWidth = container.offsetWidth / cardsPerView;

      container.scrollBy({
        left:
          direction === "left"
            ? -cardWidth * cardsPerView
            : cardWidth * cardsPerView,
        behavior: "smooth",
      });
    }
  };

  const offer = [
    {
      id: 1,
      title: "Cycle & Mountain Biking",
      icon: "/images/icons/Layer_1 (3).png",
      image: "/images/Rectangle 23 (1).png",
      desc: "Experience stunning views from above on a thrilling helicopter tour!",
    },
    {
      id: 2,
      title: "Mountain Helicopter Tour",
      icon: "/images/icons/Layer_1 (2).png",
      image: "/images/Rectangle 23 (5).png",
      desc: "Experience stunning views from above on a thrilling helicopter tour!",
    },
    {
      id: 3,
      title: "Upper Mustang Motorbike Tour",
      icon: "/images/icons/Layer_1 (3).png",
      image: "/images/Rectangle 23 (4).png",
      desc: "Experience stunning views from above on a thrilling helicopter tour!",
    },
    {
      id: 4,
      title: "Paragliding Nepal",
      icon: "/images/icons/Layer_1 (1).png",
      image: "/images/Rectangle 23 (3).png",
      desc: "Experience stunning views from above on a thrilling helicopter tour!",
    },
    {
      id: 5,
      title: "Jungle Safari",
      icon: "/images/icons/Layer_1 (2).png",
      image: "/images/Rectangle 23 (4).png",
      desc: "Experience stunning views from above on a thrilling helicopter tour!",
    },
    {
      id: 6,
      title: "Zip Flyer Adventure",
      icon: "/images/icons/Layer_1 (3).png",
      image: "/images/Rectangle 23 (1).png",
      desc: "Experience stunning views from above on a thrilling helicopter tour!",
    },
  ];

  return (
    <div className="relative z-10 max-w-7xl px-4 py-16 mx-auto">
      {/* Heading */}
      <div className="mb-12 text-center">
        <p className="text-[#0D3A48] text-sm md:text-[15px] lg:text-base jakarta">
          What We Offer
        </p>
        <h2 className="mt-2 text-[20px] md:text-[24px] lg:text-[30px] text-[#0D3A48] gloock">
          All-in-One Adventure Planning
        </h2>
        <div className="flex items-center justify-center mt-4">
          <div className="w-32 h-px bg-[#0B2839]"></div>
          <img
            src="/images/icons/765737_09 1.png"
            alt="Mountain icon"
            className="mx-3 w-[101px] h-[34px]"
          />
          <div className="w-32 h-px bg-[#0B2839]"></div>
        </div>
      </div>

      {/* Left Button */}
      <button
        className="absolute top-[60%] -translate-y-1/2 left-2 z-20 bg-[#D5E880] hover:bg-[#c7d873] w-10 h-10 flex items-center justify-center rounded-full shadow-md"
        onClick={() => scroll("left")}
      >
        <span className="text-2xl text-[#0D3A48]">&#8249;</span>
      </button>

      {/* Right Button */}
      <button
        className="absolute top-[60%] -translate-y-1/2 right-2 z-20 bg-[#D5E880] hover:bg-[#c7d873] w-10 h-10 flex items-center justify-center rounded-full shadow-md"
        onClick={() => scroll("right")}
      >
        <span className="text-2xl text-[#0D3A48]">&#8250;</span>
      </button>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {offer.map((item) => (
          <div
            key={item.id}
            className="w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 cursor-pointer flex-shrink-0 px-2"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="rounded-[20px] cursor-pointer group overflow-hidden relative group shadow-md">
              {/* Image */}
              <div className="relative w-full h-[350px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out transform group-hover:scale-125 group-hover:-translate-y-10 group-hover:-translate-x-4"
                />

                {/* Overlay inside image */}
                <div className="relative flex flex-col items-center justify-center bottom-0 w-[17.5rem] left-0 right-0 bg-[#F2F5F9]/80 p-1 gap-0 ml-[4.8rem] -rotate-[22deg] rounded-3xl h-[20rem] translate-y-[14.5rem] group-hover:translate-y-[10rem] transition-all duration-700 ease-in-out">
                  <div className="group-hover:bg-[#D5E880] bg-[#2A78A6] p-2 absolute top-0 -translate-y-8 left-[45%] rounded-full rotate-[20deg] transition-all duration-700 ease-in-out">
                    <Image
                      src={item.icon}
                      alt="icon"
                      width={1000}
                      height={1000}
                      className="object-contain lg:w-[2.8rem] md:w-[2.4rem] w-[2rem] group-hover:scale-x-[-1] transition-all duration-700 ease-in-out"
                    />
                  </div>
                  <p className="text-[#0D3A48] pt-[130px] px-10 text-center lg:text-lg md:text-base text-sm rotate-[22deg] -translate-y-[110px] font-semibold transition-all duration-700 ease-in-out">
                    {item.title}
                  </p>
                  <p className="text-[#0D3A48] pt-8 group-hover:pt-5 group-hover:pb-4 pr-20 text-center lg:text-sm md:text-xs text-[10px] rotate-[22deg] -translate-y-[110px] font-light transition-all duration-700 ease-in-out">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
