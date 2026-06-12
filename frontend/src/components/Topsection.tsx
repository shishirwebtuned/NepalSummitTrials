

"use client";

import Image from "next/image";
import React from "react";
import Breadcrumb from "./Breadcrumb";

const Topsection = ({ title, image }: { title: string; image: string }) => {
  return (
    <div
      className="relative h-[60vh] sm:h-[80vh] lg:h-[80vh] lg:overflow-y-hidden bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-[#0D3A48B8] z-10" />

      <div className="relative z-10 flex flex-col items-center text-center pb-10 justify-center h-full px-4 sm:px-6 lg:px-8 text-white">
        <Breadcrumb title={title} />
      </div>

      <Image
        src="/images/about/clouds.png"
        alt="cloud"
        height={80}
        width={1920}
        className="absolute bottom-0 left-0 w-full h-auto object-cover z-20 translate-y-1/2"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1920px"
      />
    </div>
  );
};

export default Topsection;
