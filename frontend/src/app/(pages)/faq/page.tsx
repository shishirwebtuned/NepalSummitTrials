import React from "react";
import FaqContent from "./Components/FaqContent";
import Topsection from "@/components/Topsection";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Topsection
        title="Your Journey Starts With a Message"
        image="/images/about/aboutbg.png"
      />

      <FaqContent />
      <div className="w-full pt-2 px-3 lg:px-[6rem]">
        <Image
          src="/images/faq/background.png"
          alt="Mountain background"
          height={400}
          width={1000}
          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-contain"
        />
      </div>
    </div>
  );
};

export default page;
