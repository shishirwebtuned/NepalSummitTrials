"use client";
import Tabs from "@/components/Tabs";
import React from "react";
import FaqHideCard from "./FaqHideCard";
import {
  bookingData,
  documentData,
  paymentData,
  assistanceData,
} from "./faqObj";

const FaqContent = () => {
  const tabData = [
    {
      label: "Booking",
      content: (
        <div>
          {bookingData.map((item, index) => (
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
        <div>
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
        <div>
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
        <div>
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
    <div className="mt-[8rem] lg:mt-[4rem] mx-3 lg:mx-[6rem]">
      <Tabs
        tabs={tabData}
        defaultTab="Overview"
      />
    </div>
  );
};

export default FaqContent;
