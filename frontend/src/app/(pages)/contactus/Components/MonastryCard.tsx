

import React from "react";
import { IoLocation } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";

const MonastryCard = ({
  locationTitle,
  locationText,
  email,
  image,
  phoneNo,
}: {
  locationTitle: string;
  locationText: string;
  email: string;
  image: string;
  phoneNo: string;
}) => {
  return (
    <div className="flex flex-col rounded-2xl bg-[rgba(239,249,255,0.8)]  hover:scale-105 transition-transform duration-500  max-w-sm mt-6 mb-4">
      <div className="rounded-tr-2xl rounded-tl-2xl rounded-bl-0 overflow-hidden mb-4">
        <Image
          //   src="/images/contact/Nepal.png"
          src={image}
          alt="Mountain image"
          height={400}
          width={600}
          objectFit="contain"
          className="rounded-tr-2xl rounded-tl-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div>
        <h1 className="jakarta font-semibold text-lg mx-[1rem] mb-4">
          {locationTitle}
        </h1>
        <div className="flex items-center gap-4 mb-4 mx-[1.5rem]">
          <IoLocation
            className="flex-shrink-0 w-6 h-6 lg:w-6 lg:h-6"
            style={{ color: "#0B2839" }}
          />
          <h2 className="text-sm lg:text-base break-words">{locationText}</h2>
        </div>
        <div className="flex items-center gap-4 mb-4 mx-[1.5rem]">
          <MdPhoneInTalk
            className="flex-shrink-0 w-6 h-6 lg:w-6 lg:h-6"
            style={{ color: "#0B2839" }}
          />
          <h2 className="jakarta text-sm">{phoneNo}</h2>
        </div>
        <div className="flex items-center gap-4 mb-4 mx-[1.5rem]">
          <IoIosMail
            className="flex-shrink-0 w-6 h-6 lg:w-6 lg:h-6"
            style={{ color: "#0B2839" }}
          />
          <h2 className="jakarta text-sm">{email}</h2>
        </div>
      </div>
    </div>
  );
};

export default MonastryCard;
