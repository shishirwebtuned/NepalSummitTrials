import BookingButtons from "@/components/BookingButtons";
import React from "react";
import { TbEdit } from "react-icons/tb";

const TravelerInfo = ({ onNext, onBack }: { onNext: () => void; onBack: () => void }) => {
    const tripDetails = [
        { label: "Duration", value: "15 Days" },
        { label: "Trip Start", value: "6th May 2024" },
        { label: "No. of Travelers", value: "2 Persons" },
        { label: "Advanced Payable", value: "US $150 (10% of Total Amount)" },
    ];

    const priceDetails = [
        {
            label: "Package Price",
            value: "700 * 2Person(s)",
            price: 1400,
        },
        {
            label: "Kathmandu to Pokhara Flight Ticket",
            value: "100 *2 Person(s)",
            price: 200,
        },
        {
            label: "Extra Night Accommodation in Kathmandu or Pokhara",
            value: "100 * 2Person(s)",
            price: 200,
        },
    ];

    const totalPrice = [
        { label: "Total Price", value: 1800 },
        { label: "Payable Now", value: 180 },
    ];

    const leadTravelerDetails = {
        personalInfo: [
            { label: "Full Name", value: "John Doe" },
            { label: "Gender", value: "Male" },
            { label: "Nationality", value: "Canadian" },
            { label: "Phone Number", value: "+123 4953453" },
            { label: "Email Address", value: "johndoe@gmail.com" },
        ],
        addressInfo: [
            { label: "Mailing Address", value: "123 Main St, LA, USA" },
            { label: "City", value: "California" },
            { label: "Province ", value: "California" },
        ],
        emergencyContact: [
            { label: "Full Name", value: "John Doe Sister" },
            { label: "Relationship", value: "Sister" },
            { label: "Phone Number", value: "+1 234 567 8900" },
        ],
    };

    const secondTravelerDetails = [
        { label: "Full Name", value: "John Doe" },
        { label: "Gender", value: "Female" },
        { label: "Nationality", value: "Canadian" },
        { label: "Phone Number", value: "+123 4953453" },
        { label: "Email Address", value: "johndoe@gmail.com" },
    ];
    return (
        <div className="jakarta sm:px-8 px-5 md:px-16 lg:px-24">
            <div>
                <p className="text-[#0B2839] font-semibold lg:text-xl md:text-lg text-base">
                    Review Booking Details
                </p>
            </div>
            <div className="bg-[#F1FCFF] mt-5 border border-[#A3BCC9]/60 rounded-xl lg:px-6 md:px-5 px-3 lg:py-6 md:py-5 py-4 flex flex-col sm:gap-2 gap-4">
                <div className="flex sm:flex-row flex-col text-center justify-center sm:justify-between items-center sm:gap-1 gap-2">
                    <p className="text-[#2A78A6] lg:text-xl md:text-lg text-base font-semibold">
                        Dolpo Fixed Departure Trekking 2025 - Spring Offer
                    </p>
                    <button className="bg-[#0B2839]/80 flex flex-row items-center gap-2 cursor-pointer text-white px-3 py-1 rounded-md hover:bg-[#0B2839] transition-all duration-200">
                        <p className="lg:text-lg md:text-base text-sm">Edit</p>
                        <TbEdit />
                    </button>
                </div>
                <div className="flex flex-col justify-center items-start gap-1 ">
                    {tripDetails.map((detail, index) => (
                        <div
                            key={index}
                            className="flex flex-row items-center justify-start gap-2 text-[#6F717C] lg:text-base md:text-sm text-xs"
                        >
                            <span className="font-semibold">{detail.label}:</span>
                            <p className="font-medium"> {detail.value}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col mt-8 gap-6">
                {priceDetails.map((detail, index) => (
                    <div
                        key={index}
                        className="flex fex-row items-center justify-between"
                    >
                        <div className="flex flex-col justify-center items-start gap-[3px] lg:text-lg md:text-base text-sm">
                            <span className=" text-black">{detail.label}:</span>
                            <p className="text-[#6F717C]">US ${detail.value}</p>
                        </div>
                        <p className="text-black lg:text-lg md:text-base text-sm font-semibold">
                            US ${detail.price}
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-between mt-6 gap-2">
                {totalPrice.map((detail, index) => (
                    <div
                        key={index}
                        className="flex flex-row justify-between items-center text-[#2A78A6] lg:text-xl md:text-lg text-base font-semibold"
                    >
                        <span className="">{detail.label}:</span>
                        <p className="">US ${detail.value}</p>
                    </div>
                ))}
            </div>
            <div className="bg-[#F1FCFF] border mt-7 border-[#A3BCC9]/60 rounded-md lg:px-4 px-3 lg:py-5 md:py-4 py-3 flex flex-col gap-2">
                <p className="lg:text-xl md:text-lg text-base">
                    The Balance of{" "}
                    <span className="text-[#2A78A6] font-semibold">US $1660</span> is
                    payable upon arrival.
                </p>
            </div>
            <div className="flex flex-col gap-10 w-full mt-10">
                <div className="w-full">
                    <p className="bg-[#D5E880]/20 px-4 py-3 w-full text-[#0B2839] lg:text-xl md:text-lg text-base font-semibold rounded-md">
                        Lead Traveler Details
                    </p>
                    <div className="lg:px-10 md:px-6 px-3">
                        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 items-center justify-center mt-4">
                            {leadTravelerDetails.personalInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-start justify-between md:gap-1 gap-[2px]"
                                >
                                    <span className="font-medium text-[#000000]/60 lg:text-sm md:text-xs text-[10px]">
                                        {info.label}
                                    </span>
                                    <p className="font-semibold text-black lg:text-base md:text-sm text-xs">
                                        {info.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col mt-6">
                            <div className="text-[#628DA7] border-b pb-1 border-[#D9D9D9] lg:text-base md:text-sm text-xs">
                                Address
                            </div>

                            <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 items-center justify-center mt-4">
                                {leadTravelerDetails.addressInfo.map((info, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-start justify-between md:gap-1 gap-[2px]"
                                    >
                                        <span className="font-medium text-[#000000]/60 lg:text-sm md:text-xs text-[10px]">
                                            {info.label}
                                        </span>
                                        <p className="font-semibold text-black lg:text-base md:text-sm text-xs">
                                            {info.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col mt-6">
                            <div className="text-[#628DA7] border-b pb-1 border-[#D9D9D9] lg:text-base md:text-sm text-xs">
                                Emergency Contact
                            </div>

                            <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 items-center justify-center mt-4">
                                {leadTravelerDetails.emergencyContact.map((info, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-start justify-between md:gap-1 gap-[2px]"
                                    >
                                        <span className="font-medium text-[#000000]/60 lg:text-sm md:text-xs text-[10px]">
                                            {info.label}
                                        </span>
                                        <p className="font-semibold text-black lg:text-base md:text-sm text-xs">
                                            {info.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <p className="bg-[#D5E880]/20 px-4 py-3 w-full text-[#0B2839] lg:text-xl md:text-lg text-base font-semibold rounded-md">
                        Traveler 2 Details
                    </p>
                    <div className="lg:px-10 md:px-6 px-3 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 items-center justify-center mt-4">
                        {secondTravelerDetails.map((info, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-start justify-between md:gap-1 gap-[2px]"
                            >
                                <span className="font-medium text-[#000000]/60 lg:text-sm md:text-xs text-[10px]">
                                    {info.label}
                                </span>
                                <p className="font-semibold text-black lg:text-base md:text-sm text-xs">
                                    {info.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="lg:mt-16 md:mt-10 mt-6">
                <BookingButtons onBackClick={onBack} onNextClick={onNext} />
            </div>
        </div>
    );
};

export default TravelerInfo;
