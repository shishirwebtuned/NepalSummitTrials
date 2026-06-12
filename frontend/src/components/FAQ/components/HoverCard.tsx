

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HoverCard = ({ imageSrc, altText }: { imageSrc: string; altText: string }) => {
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

      <div className="bg-white group-hover:bg-[#D5E880] opacity-95 rounded-xl absolute bottom-6 left-0 right-0 mx-6 py-4 transition-colors duration-300 pointer-events-none">
        <div className="px-6">
          <h1 className="text-[#0B2839] lg:text-xl md:text-lg text-base font-semibold mb-2">
            Still have a question?
          </h1>
          <p className="lg:text-base md:text-sm text-xs">
            Libero placerat cras euismod morbi vehicula tempor egestas sem
            vitae. Nunc semper vel vulputate nec at.
          </p>

          <button className="bg-[#D5E880] lg:text-base md:text-sm text-xs cursor-pointer group-hover:bg-black group-hover:text-white px-3 py-2 rounded-xl mt-2 transition-colors duration-300 pointer-events-auto">
            Ask Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
