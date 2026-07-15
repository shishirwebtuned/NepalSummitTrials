
import Image from "next/image";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { FaClock } from "react-icons/fa";

const ContactCard = () => {
  const cardDetails = [
    {
      title: "Location",
      description: "Ravi Marg, Banasthali, Kathmandu",
      icon: IoLocation,
    },
    {
      title: "Contact Number",
      description: "+977-1-5350117",
      icon: BiSolidPhoneCall,
    },
    {
      title: "Email",
      description: "Info@Hvtreks.Com",
      icon: IoIosMail,
    },
    {
      title: "Location",
      description: "Ravi Marg, Banasthali, Kathmandu",
      icon: FaClock,
    },
  ];
  return (
    <div className="flex flex-col rounded-2xl bg-[#0b2838] max-w-xl mt-6 mb-4">
      <div className="rounded-2xl overflow-hidden mb-8">
        <Image
          src="/images/contact/cardbackground.png"
          alt="Mountain image"
          height={400}
          width={600}
          className="rounded-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div>
        {cardDetails.map((item, index) => (
          <div key={index}>
            <div className="flex gap-3 mx-3 lg:mx-[3rem] ">
              <div className="bg-[#2b4657] flex items-center justify-center rounded-xl h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12">
                <item.icon
                  className="size-5 md:size-6 lg:size-8"
                  style={{ color: "#D5E880" }}
                />
              </div>

              <div>
                <h2 className="jakarta text-xs md:text-[14px] text-[#E4E4E4]">{item.title}</h2>
                <p className="jakarta text-white text-sm md:text-[17px]">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="border-[#37454c] border-b-2 w-full my-4   "></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
