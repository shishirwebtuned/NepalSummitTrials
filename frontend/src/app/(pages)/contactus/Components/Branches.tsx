

import Image from "next/image";
import React from "react";
import MonastryCard from "./MonastryCard";

const Branches = () => {
  const monastryCardDetails = [
    {
      locationTitle: "Nepal",
      locationText: "Kabi Marg, Banasthali, G.P.O Box: 3379, Kathmandu, Nepal",
      phoneNo: "+977-1-5350117",
      email: "info@hvtreks.com",
      image: "/images/contact/Nepal.png",
    },
    {
      locationTitle: "Netherland",
      locationText: "295 Plymouth Street, Halifax MA 2338",
      phoneNo: "(+977) 987654321",
      email: "hermannvanhoof@ziggo.nl",
      image: "/images/contact/Netherland.png",
    },
    {
      locationTitle: "Denmark",
      locationText: "6438 Basile Rowe, East Syracuse NY 13057",
      phoneNo: "(+977) 987654321",
      email: "jannipoort@gmail.com",
      image: "/images/contact/Denmark.png",
    },
    {
      locationTitle: "Portugal",
      locationText: "101 Sanford Farm Shpg Center, Amsterdam NY 12010",
      phoneNo: "+35920286519",
      email: "t.lakpa14@gmail.com",
      image: "/images/contact/Portugal.png",
    },
  ];
  return (
    <div className="bg-[#d0e1eb] relative h-full flex flex-col items-center justify-center">
      <Image
        src="/images/contact/Monastry.png"
        alt="Monastry image"
        height={300}
        width={1000}
        className="absolute z-0 -bottom-2 object-contain"
      />
      <div className="z-10 text-center mt-12 mx-2   ">
        <h2 className="jakarta text-[#0D3A48] text-sm">Branches</h2>
        <h1 className="gloock text-3xl text-[#0D3A48]">
          All-in-One Adventure Planning
        </h1>
        <div className="flex items-center justify-center gap-2 pb-4">
          <div className="border-b-2 border-[#a1b5c0] rounded-full w-36"></div>
          <Image
            src="/images/icons/765737_09 1.png"
            alt="Mountain logo"
            width={150}
            height={35}
          />
          <div className="border-b-2 border-[#a1b5c0] rounded-full w-36"></div>
        </div>
      </div>
      <div className="z-10 flex flex-col lg:flex-row gap-4 mx-3 lg:mx-[6rem]">
        {monastryCardDetails.map((item, index) => (
          <MonastryCard
            key={index}
            locationTitle={item.locationTitle}
            locationText={item.locationText}
            email={item.email}
            phoneNo={item.phoneNo}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Branches;
