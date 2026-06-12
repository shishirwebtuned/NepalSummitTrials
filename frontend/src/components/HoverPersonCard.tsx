import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const HoverpersonCard = ({
  reverse = false,
  buttonText,
  buttonClick,
  title,
  image,
  desc,
}: {
  reverse?: boolean;
  buttonText?: string;
  buttonClick?: () => void;
  title?: string;
  image?: string;
  desc?: string;
}) => {
  return (
    <div className="px-6 py-6 relative lg:px-16 lg:py-14">
      <div
        className={`relative w-full lg:h-[30vh] md:h-[25vh] h-full rounded-[2rem] flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center bg-center bg-cover bg-no-repeat gap-4`}
        style={{ backgroundImage: `url(/images/homepage/HoverPersonBg.svg)` }}
      >
        {/* Background shapes */}
        {/* <div className="absolute inset-0 z-0 w-full">
          <img
            src="images/homepage/HoverPersongBg.svg"
            className="object-cover w-full h-full"
          />
        </div> */}

        {/* Left image */}
        {!reverse && image && (
          <div className="relative md:w-[20%] w-0 h-full md:flex hidden overflow-visible z-10">
            <img
              src={image}
              alt="Hiker"
              className="absolute bottom-0 left-0 translate-x-[-10%] lg:translate-x-[-20%] translate-y-[-22%] lg:translate-y-[-12%] object-contain lg:scale-[125%] scale-[145%]"
              style={{ zIndex: 1 }}
            />
          </div>
        )}
        {/* Right image */}
        {reverse && image && (
          <div className="relative md:w-[20%] w-0 h-full md:flex hidden overflow-visible z-10">
            <img
              src={image}
              alt="Hiker"
              className="absolute bottom-0 right-0 translate-y-[-22%] translate-x-[10%] lg:translate-x-[20%] lg:translate-y-[-12%] object-contain lg:scale-[125%] scale-[145%]"
              style={{ zIndex: 1 }}
            />
          </div>
        )}

        {/* Text + Button */}
        <div className="relative md:w-[80%] w-full h-full z-10 p-4 text-white flex lg:flex-row flex-col lg:items-center justify-center lg:gap-4 gap-2">
          <div className="lg:px-3 px-0 lg:w-[80%] w-full flex flex-col lg:gap-4 gap-2">
            <h1 className="font-bold jakarta text-lg md:text-2xl lg:text-4xl leading-tight">
              {title}
            </h1>
            <p className="jakarta font-medium text-xs md:text-base lg:text-lg">
              {desc}
            </p>
          </div>
          <div className="mt-2 lg:w-[20%] w-full">
            <button
              onClick={buttonClick}
              className="bg-[#D5E880] hover:bg-[#C0D66E] w-auto text-black flex items-center gap-2 rounded-lg md:px-4 px-3 md:py-3 py-2 text-xs md:text-base font-medium"
            >
              {buttonText}
              <FiArrowRight className="text-black text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverpersonCard;
