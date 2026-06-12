"use client";
import React from "react";
import { motion } from "framer-motion";
const Offerg = () => {
  const places = [
    {
      placename: "Tiger Monastery Paro",
      expenses: "Starts from $120",
      days: "14 Days",
      image: "/images/Rectangle 22021(5).png",
      colSpan: "col-span-2", // Large card
    },
    {
      placename: "Everest Base Camp",
      expenses: "Starts from $180",
      days: "14 Days",
      image: "/images/Rectangle 22021(1).png",
      colSpan: "col-span-1",
    },
    {
      placename: "Everest Base Camp",
      expenses: "Starts from $150",
      days: "10 Days",
      image: "/images/Rectangle 22021(2).png",
      colSpan: "col-span-1",
    },
    {
      placename: "Everest Base Camp",
      expenses: "Starts from $120",
      days: "14 Days",
      image: "/images/Rectangle 22021(3).png",
      colSpan: "col-span-1",
    },
    {
      placename: "Makkinath",
      expenses: "Starts from $140",
      days: "5 Days",
      image: "/images/Rectangle 22021(4).png",
      colSpan: "col-span-1",
    },
    {
      placename: "Annapurna Base Camp",
      expenses: "Starts from $100",
      days: "8 Days",
      image: "/images/Rectangle 22021.png",
      colSpan: "col-span-2", // Wide card
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
            className="mx-3 w-24 h-8"
          />
          <div className="w-32 h-px bg-[#0B2839]"></div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {places.map((place, index) => (
          <div
            key={index}
            className={`${place.colSpan} relative overflow-hidden rounded-lg group`}
          >
            {/* Image */}
            <div className="h-[312px] w-full overflow-hidden">
              <img
                src={place.image}
                alt={place.placename}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
              {/* Animate content */}
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="flex flex-col space-y-2"
              >
                {/* Content that moves slightly up */}
                <motion.div
                  variants={{
                    rest: { y: 50 },
                    hover: { y: -10 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-white text-lg md:text-[22px] lg:text-[26px] gloock font-medium">
                    {place.placename}
                  </h3>
                  <div className="flex items-center text-white mt-1">
                    <img
                      src="/images/icons/healthicons_money-bag-outline.png"
                      alt="price icon"
                      className="mr-2 lg:w-5 lg:h-5 md:w-4 md:h-4 w-4 h-4"
                    />
                    <p className="lg:text-[17px] md:text-[15px] text-[13px] jakarta">
                      {place.expenses}
                    </p>
                  </div>
                  <div className="flex items-center text-white mt-1">
                    <img
                      src="/images/icons/mynaui_clock-square.png"
                      alt="calendar icon"
                      className="mr-2 lg:w-5 lg:h-5 md:w-4 md:h-4 w-4 h-4"
                    />
                    <p className="lg:text-[17px] md:text-[15px] text-[13px] jakarta">
                      {place.days}
                    </p>
                  </div>
                </motion.div>

                {/* Button appears on hover */}
                <motion.div
                  variants={{
                    rest: { opacity: 0, y: 20 },
                    hover: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  className="bg-[#D5E880] w-[150px] h-[55px] text-[18px] text-[#0D3A48] font-medium jakarata rounded-md flex justify-center items-center"
                >
                  Explore Trek
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offerg;
