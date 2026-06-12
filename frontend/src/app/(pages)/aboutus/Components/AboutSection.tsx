import Image from "next/image";
import React from "react";
import HighlightsSection from "./Highlights";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center pb-4 mt-[4.5rem] md:flex-row my-4  mx-4 lg:mx-[8rem] gap-12 ">
      <div className="flex-1">
        {/* <Image
          src="/images/about/shapeimg.png"
          alt="shape"
          height={300}
          width={500}
        /> */}

        <Image
          src="/images/aboutus.jpg"
          alt="shape"
          className="rounded-2xl h-[80%]"
          height={200}
          width={500}
        />
      </div>
      <div className="self-start flex-1">
        <div className="flex items-center gap-2 pb-4">
          <h2 className="jakarta text-[1rem] ">About Us</h2>
          <div className="border-b-2 border-[#2A78A6] rounded-full w-10"></div>
          <Image
            src="/images/icons/765737_09 1.png"
            alt="Mountain logo"
            width={105}
            height={35}
          />
        </div>
        <h2 className="gloock text-lg md:text-xl lg:text-3xl pb-4 text-[#0D3A48]">
          Experience the Himalayas with Heart and Heritage
        </h2>

        <p className="jakarta text-sm leading-relaxed lg:text-[15px] py-2">
          For over 17 years, Himalayan Vacation Treks and Expedition has been
          guiding travelers through the majestic landscapes of Nepal and beyond,
          offering more than just treks — we offer a journey into the soul of
          the Himalayas.
        </p>
        <p className="jakarta text-sm leading-relaxed lg:text-[15px] py-2">
          Founded in July 2008 by Palsang Tamang, a seasoned guide and
          passionate social activist, our company is rooted in the rich cultural
          heritage of the Tamang community from Thulo Parsel, a small Buddhist
          village in the heart of Nepal. Backed by a guiding team with over a
          century of combined experience, we specialize in Himalayan treks,
          cultural tours, rafting adventures, and jungle safaris across Nepal,
          Tibet, Bhutan, and India.
        </p>

        <div>
          <HighlightsSection />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
