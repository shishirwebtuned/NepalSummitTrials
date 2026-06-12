

import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProgressBar from "./Progressbar";
import MountainHeader from "./MountainHeader";

const PercentImageCard = ({
  progressData = [],
  title,
  description,
  linkTitle,
  href,
  image,
  reverse = false,
}: {
  progressData?: { title: string; percentage: number }[];
  title: string;
  description: string;
  linkTitle?: string;
  href?: string;
  image: string;
  reverse?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } w-full items-center gap-8`}
    >
      <div className="w-full lg:w-[30%] flex justify-center lg:justify-start">
        <Image src={image} alt="Image" height={400} width={300} />
      </div>

      <div
        className={`w-full lg:w-[70%] flex flex-col justify-center ${reverse ? "lg:order-1" : "lg:order-2"
          }`}
      >
        <MountainHeader
          title="About Us"
          borderClass="border-b-2 border-[#2A78A6] rounded-full w-10"
        />
        <h2 className="gloock text-lg md:text-2xl lg:text-3xl pb-4 text-[#0D3A48]">
          {title}
        </h2>
        <p className="jakarta text-sm lg:text-base">
          {description}{" "}
          {linkTitle && href ? (
            <span>
              <Link href={href} className="text-[#2A78A6] text-sm lg:text-base">
                {linkTitle}
              </Link>
            </span>
          ) : null}
        </p>

        <div className="mt-4 space-y-4">
          {progressData.map((item, index) => (
            <ProgressBar
              key={index}
              title={item.title}
              percentage={item.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PercentImageCard;
