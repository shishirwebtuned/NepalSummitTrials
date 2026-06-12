"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const TrekImageCard = ({ imageSrc, altText }: { imageSrc: string; altText: string }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg w-[80%] h-[80%] md:w-[50%] md:h-[50%] lg:w-[33rem] lg:h-[38rem] relative group">
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.18 }}
        transition={{ type: "spring", stiffness: 50, damping: 20, mass: 0.5 }}
        style={{ transformOrigin: "left" }}
        className="w-full h-full"
      >
        <Image
          src={imageSrc}
          alt={altText}
          width={400}
          height={400}
          className="w-full h-full object-cover"
          priority={false}
        />
      </motion.div>
      <div className="flex items-center gap-2 h-12 w-18 rounded-xl px-3  absolute inset-0 top-10 left-10 bg-[rgba(255,255,255,0.2)] backdrop-blur-lg">
        <h3 className="text-2xl ">4</h3>{" "}
        <FaStar className="size-8  fill-yellow-400" />
      </div>

      <div className="opacity-95 flex  rounded-xl absolute bottom-6 left-0 right-0 mx-6 py-4 transition-colors duration-300 pointer-events-none">
        <div className="relative">
          <div className="bg-[#D5E880] px-5 py-2 rounded-tr-full rounded-br-full w-[5rem] text-nowrap">
            <p className="jakarta text-xs md:text-sm">14 days</p>
          </div>
          <div className="pl-4 py-2">
            <h3 className="text-[#E7FF7C]">Fixed Departure</h3>
            <h2 className="jakarta font-semibold pt-1 text-white text-sm md:text-base lg:text-lg">
              Dolpo Trekking
            </h2>
            <p className="text-white jakarta text-[10px] md:text-[11px] lg:text-[13px]">
              Altitude: 4800m
            </p>
            <p className="jakarta text-base pt-2 md:text-lg lg:text-xl text-white font-semibold">
              $670
            </p>
          </div>
          {/* Add the vertical line */}
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-[#D5E880]"></div>
        </div>

        <div className="relative">
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default TrekImageCard;
