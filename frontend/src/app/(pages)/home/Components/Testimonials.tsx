"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const Testimonials = () => {
  // Testimonials data - organized by pages
  const testimonialPages = [
    {
      id: 1,
      name: "Hong Jingsheng",
      role: "Customer",
      date: "05 Apr 2025",
      rating: 5,
      image: "/images/homepage/Ellipse 6.png",
      quote:
        "I had an unforgettable experience trekking through the breathtaking landscapes of the Rocky Mountains. The guides were knowledgeable and supportive, making every step enjoyable. I can't wait to go back for another adventure!",
    },
    {
      id: 2,
      name: "Kibwe Sone",
      role: "Customer",
      date: "05 Apr 2025",
      rating: 5,
      image: "/images/homepage/Ellipse 6.png",
      quote:
        "My trekking adventure through the stunning Rocky Mountains was truly unforgettable. The guides were incredibly knowledgeable and supportive, ensuring that every moment was enjoyable. I'm already looking forward to my next journey back!",
    },

    {
      id: 3,
      name: "Hayden Norah",
      role: "Customer",
      date: "05 Apr 2025",
      rating: 5,
      image: "/images/homepage/Ellipse 6 (1).png",
      quote:
        "Exploring the breathtaking Rocky Mountains was an experience I will always cherish. The guides were exceptionally skilled and provided unwavering support, making every step of the journey a delight. I can't wait for my next adventure!",
    },
  ];

  // State for current page
  const [currentPage, setCurrentPage] = useState(0);

  // Navigation functions
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % testimonialPages.length);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) =>
      prev === 0 ? testimonialPages.length - 1 : prev - 1
    );
  };

  // Render star rating
  const renderStars = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ));
  };

  return (
    <div className="w-full py-16 relative overflow-hidden">
      {/* Background image */}
      <img
        src="/images/homepage/bgOpacity.png"
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      <div className="absolute inset-0 bg-[#F2F5F9] z-10 opacity-90"></div>

      {/* Content container */}
      <div className="w-full flex md:flex-row flex-col gap-10 px-6 md:px-16 lg:px-24 relative z-10">
        <div className="md:w-[30%] w-full">
          <div className="flex items-center gap-4">
            <p className="text-[#0D3A48] jakarta font-medium text-sm md:text-[15px] lg:text-base">
              Testimonials
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
            Heartfelt Words From
            <br />
            Those Who Found More
            <br />
            Than a Trail
          </h2>
          <p className="mt-5 lg:text-base md:text-[15px] text-sm">
            I had the most incredible experience with TrailBlazers! The guides
            were not only knowledgeable but also passionate about the mountains.
            Every step of the trek felt like an adventure, and I made lifelong
            friends along the way. I can't wait for my next journey with them!
          </p>
          <div className="mt-8">
            <button className="flex items-center bg-lime-200 text-blue-900 font-medium px-6 py-3 rounded hover:bg-lime-300 transition-colors">
              Read More
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="md:w-[70%] w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
            }}
          >
            {testimonialPages.map((item) => (
              <div
                key={item.id}
                className="lg:pr-5 md:pr-0 sm:pr-4 pr-0 shrink-0 relative lg:w-1/2 md:w-full sm:w-1/2 w-full"
              >
                <div className="bg-white w-full rounded-tr-[2rem] rounded-bl-[2rem] relative">
                  <div className="flex relative w-full justify-between items-center mb-4 pt-5">
                    <div className="flex flex-wrap p-7 items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-full object-cover lg:h-14 lg:w-14 md:h-10 md:w-10 h-8 w-8"
                      />
                      <div>
                        <h4 className="text-black lg:text-base md:text-[15px] text-sm font-semibold">
                          {item.name}
                        </h4>
                        <p className="lg:text-sm md:text-[13px] text-xs text-gray-500">
                          {item.role}
                        </p>
                        <div className="flex mt-1">
                          {renderStars(item.rating)}
                        </div>
                      </div>
                    </div>
                    <div className="lg:text-sm md:text-[13px] text-xs absolute right-0 bg-[#F2F5F9] p-3 rounded-l-4xl font-medium">
                      {item.date}
                    </div>
                  </div>

                  <p className="text-gray-800 px-8 pb-12 text-[13px] md:text-sm lg:text-[15px] leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-6xl text-gray-600 bg-white rounded-full py-6 px-6 leading-none flex items-end justify-center">
                  <FaQuoteLeft className="lg:text-3xl md:text-2xl text-xl" />
                </div>

                {/* <div className="absolute bottom-0 translate-y-2 right-0 bg-white">
                  hi
                </div> */}
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="mt-12 flex justify-evenly items-center gap-4">
            <button
              onClick={goToPreviousPage}
              className="bg-[#D5E880]/50 p-2 cursor-pointer shadow-md rounded-full disabled:bg-gray-200"
              disabled={currentPage === 0}
            >
              <GoArrowLeft />
            </button>
            <span className="text-blue-900 font-semibold">
              0{currentPage + 1}
            </span>
            <button
              onClick={goToNextPage}
              className="bg-[#D5E880]/50 p-2 cursor-pointer shadow-md rounded-full disabled:bg-gray-200"
              disabled={currentPage === testimonialPages.length - 1}
            >
              <GoArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
