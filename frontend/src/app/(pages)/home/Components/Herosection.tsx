"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <div className="relative h-[74vh] lg:h-screen w-full overflow-hidden bg-[#276597]">
      {/* Content Container */}
      <div className="relative lg:-top-40 md:-top-40 sm:-top-40 -top-40 z-10 h-full flex flex-col items-center justify-center text-white px-4 md:px-8 my-10">
        <motion.h1
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-5xl sm:text-7xl md:text-[150px] xl:text-[160px] font-bold mb-4 text-center tracking-wider mange bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF]/10 text-transparent bg-clip-text"
        >
          {/* Adventure */}
          Elite Escapes
        </motion.h1>
      </div>

      {/* Static Background Image */}
      {/* <div>
        <Image
          src="/images/Mask group.png"
          alt="bgimage"
          fill
          className="z-30 xl:mt-30 md:mt-40 mt-40 lg:object-contain object-cover"
        />
      </div> */}

      <div>
        <Image
          src="/images/mountainbg2.png"
          alt="bgimage"
          fill
          className="z-30 xl:mt-30 md:mt-24 mt-0 md:object-cover object-contain"
        />
      </div>

      {/* Cloud-like effect at bottom */}

      <div className="absolute -bottom-50 left-0 w-full h-full flex gap-4 z-30">
        {/* Static cloud */}
        <div className="absolute left-0  bottom-10 md:bottom-0 w-[600px] h-[500px]">
          <Image src="/images/Group 4.png" alt="Eco-conscious icon" fill />
        </div>

        {/* Moving cloud from left to right ONCE */}
        {/* <motion.div
          initial={{ x: -600, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute left-0 bottom-5 w-[600px] h-[550px]"
        >
          <Image src="/images/Group 4.png" alt="Eco-conscious icon" fill />
        </motion.div> */}

        {/* Static clouds */}
        <div className="absolute left-40 bottom-20 md:bottom-0 w-[600px] h-[500px] z-30">
          <Image
            src="/images/41576353_8918181 3.png"
            alt="Eco-conscious icon"
            fill
          />
        </div>
        <div className="absolute left-50 bottom-20 md:bottom-0 w-[600px] h-[500px] z-30">
          <Image
            src="/images/41576353_8918181 3.png"
            alt="Eco-conscious icon"
            fill
          />
        </div>

        <div className="absolute left-[30rem] bottom-20 md:bottom-0 w-[600px] h-[500px] z-30">
          <Image
            src="/images/41576353_8918181 3.png"
            alt="Eco-conscious icon"
            fill
          />
          <Image src="/images/cloud1.png" alt="Eco-conscious icon" fill />
          <Image src="/images/cloud1.png" alt="Eco-conscious icon" fill />
          <Image
            src="/images/cloud1.png"
            alt="Eco-conscious icon"
            fill
            className="ml-32"
          />
        </div>

        {/* Moving cloud from right to left ONCE */}
        {/* <motion.div
          initial={{ x: 600, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
          className="absolute right-0 bottom-5 w-[600px] h-[550px]"
        >
          <Image src="/images/Group 5.png" alt="Eco-conscious icon" fill />
        </motion.div> */}

        {/* Static cloud */}
        <div className="absolute right-0 bottom-10 md:bottom-0 w-[600px] h-[500px]">
          <Image src="/images/Group 5.png" alt="Eco-conscious icon" fill />
        </div>
      </div>

    </div>
  );
};

export default Herosection;
