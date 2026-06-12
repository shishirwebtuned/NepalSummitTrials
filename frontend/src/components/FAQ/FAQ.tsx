

"use client";
import Image from "next/image";
import React from "react";
import {
  assistanceData,
  bookingDataA,
  documentData,
  paymentData,
} from "@/app/(pages)/faq/Components/faqObj";
import FaqHideCard from "../../app/(pages)/faq/Components/FaqHideCard";
import Tabs from "../Tabs";
import HoverCard from "./components/HoverCard";

const FAQ = ({ reverse = false }) => {
  // const buttonList = [
  //   { title: "Booking", style: "bg-[#0D3A48] hover:bg-[#1F5E72] text-white" },
  //   {
  //     title: "Documentation",
  //     style: "bg-[#D5E880] hover:bg-[#C0D46E] text-[#0D3A48]",
  //   },
  //   {
  //     title: "Payment",
  //     style: "bg-[#D5E880] hover:bg-[#C0D46E] text-[#0D3A48]",
  //   },
  //   {
  //     title: "Assistance",
  //     style: "bg-[#D5E880] hover:bg-[#C0D46E] text-[#0D3A48]",
  //   },
  // ];

  const tabData = [
    {
      label: "Booking",
      content: (
        <div className="w-full">
          {bookingDataA.map((item, index) => (
            <FaqHideCard key={index} title={item.title}>
              {item.children}
            </FaqHideCard>
          ))}
        </div>
      ),
    },
    {
      label: "Documentation",
      content: (
        <div className="w-full">
          {documentData.map((item, index) => (
            <FaqHideCard key={index} title={item.title}>
              {item.children}
            </FaqHideCard>
          ))}
        </div>
      ),
    },
    {
      label: "Payment",
      content: (
        <div className="w-full">
          {paymentData.map((item, index) => (
            <FaqHideCard key={index} title={item.title}>
              {item.children}
            </FaqHideCard>
          ))}
        </div>
      ),
    },
    {
      label: "Assistance",
      content: (
        <div className="w-full">
          {assistanceData.map((item, index) => (
            <FaqHideCard key={index} title={item.title}>
              {item.children}
            </FaqHideCard>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[url('/images/homepage/faqBackground.png')] bg-cover bg-bottom relative w-full h-full bg-no-repeat">
      <div className="flex flex-col text-center items-center justify-center gap-1 py-8">
        <h2 className="text-[#0D3A48] jakarta  text-center text-sm md:text-[15px] lg:text-base">
          FAQ's
        </h2>
        <p className="gloock font-medium text-[#0D3A48] text-[20px] md:text-[24px] lg:text-[30px] leading-normal">
          Got questions about your
          <br />
          adventure? We're here to help!
        </p>

        <div className="flex items-center gap-3">
          <div className="border-b-2 w-30 border-[#b9cbd0]"></div>
          <Image
            src="/images/icons/765737_09 1.png"
            alt="Mountain logo"
            width={105}
            height={35}
          />
          <div className="border-b-2 w-30 border-[#b9cbd0]"></div>
        </div>
      </div>

      <div
        className={`flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""
          } w-full items-center justify-between lg:px-[7%] md:px-[6%] px-[6%] gap-10`}
      >
        <div className="lg:w-[55%] w-full flex flex-col items-start justify-center">
          {/* <div className="flex flex-wrap items-center gap-3">
            {buttonList.map((item, index) => (
              <button
                key={index}
                className={`${item.style} lg:text-base md:text-sm text-xs lg:px-3 lg:py-3 md:px-[10px] md:py-[10px] px-2 py-2 jakarta rounded-xl cursor-pointer`}
              >
                {item.title}
              </button>
            ))}
          </div> */}
          <Tabs tabs={tabData} defaultTab="Booking" />

          <div className="bg-white rounded-xl w-full mt-8">
            {/* <div className="py-4 px-2 w-full">
              {hideCardContent.map((item, index) => (
                <HideCard
                  key={index}
                  title={item.title}
                  hiddenText={item.hiddenText}
                  linkTitle={item.linkTitle}
                  href={item.href}
                />
              ))}
            </div> */}
          </div>
        </div>

        <div className="lg:w-[45%] w-full flex items-center justify-center pb-10">
          <HoverCard imageSrc="/images/homepage/2782.jpg" altText="image" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
