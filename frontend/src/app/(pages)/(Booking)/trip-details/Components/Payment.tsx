"use client";
import React, { useState } from "react";
import {
    FaCcVisa,
    FaCcMastercard,
    FaArrowRight,
    FaCreditCard,
} from "react-icons/fa";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import BookingButtons from "@/components/BookingButtons";
import { FaFileLines } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import InputField from "@/components/shared/InputField";
import DateInput from "@/components/shared/DateInput";
import DropdownField from "@/components/shared/DropdownField";
import Image from "next/image";
import { countryOptions } from "./tripDetailsObj";

const paymentMethods = [
    {
        name: "Card",
        image: "",
        icon: <FaCreditCard />,
    },
    {
        name: "Stripe",
        image: "/images/logo/stripeLogo.svg",
        icon: "",
    },
    {
        name: "Paypal",
        image: "/images/logo/paypalLogo.svg",
        icon: "",
    },
    {
        name: "Esewa",
        image: "/images/logo/esewaLogo.svg",
        icon: "",
    },
    {
        name: "Khalti",
        image: "/images/logo/khaltiLogo.svg",
        icon: "",
    },
];

const Payment = ({ onBack, onNext }: { onBack: () => void; onNext: () => void }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        onNext();
    };

    const [selectedMethod, setSelectedMethod] = useState("Card");

    return (
        <div className="flex jakarta flex-col-reverse md:flex-row gap-8 w-full sm:px-8 px-5 md:px-16 lg:px-24 md:mt-10 mt-10">
            {/* Left: Payment Inputs */}
            <div className="md:w-2/3 w-full bg-white rounded-md lg:p-6 md:p-5 p-2 ">
                {/* Tabs */}
                <div className="grid sm:grid-cols-5 grid-cols-3 gap-2 mb-6 lg:text-sm md:text-xs text-[10px] font-medium">
                    {paymentMethods.map((method) => (
                        <button
                            key={method.name}
                            onClick={() => setSelectedMethod(method.name)}
                            className={`px-2 py-2 border-2 cursor-pointer rounded-md flex flex-col gap-1 items-start ${selectedMethod === method.name
                                ? "border-[#2A78A6] text-[#2A78A6] bg-white"
                                : "border-[#E0E0E0] text-[#727F96]"
                                }`}
                        >
                            {method.icon ? (
                                <span className="text-xl text-[#2A78A6]">{method.icon}</span>
                            ) : (
                                <img
                                    src={method.image}
                                    alt={method.name}
                                    className="lg:h-[22px] md:h-5 h-4 w-auto"
                                    height={1000}
                                    width={1000}
                                />
                            )}
                            <p className="font-semibold">{method.name}</p>
                        </button>
                    ))}
                </div>

                {/* Card Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6 lg:text-sm md:text-[13px] text-xs"
                >
                    <div>
                        {/* <label className="block mb-2 font-medium">
              Card Number <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-[#C0C0C0] rounded-md px-3 py-2">
              <input
                type="text"
                placeholder="XXXX XXXX XXXX XXXX"
                className="w-full outline-none"
              />
              <div className="flex gap-1 text-lg ">
                <FaCcVisa />
                <FaCcMastercard />
              </div>
            </div> */}
                        <InputField
                            type="text"
                            register={register}
                            name="cardNumber"
                            label="Card Number"
                            required={true}
                            placeholder="XXXX XXXX XXXX XXXX"
                            errors={errors}
                            icon={
                                <div className="flex items-center gap-2">
                                    <FaCcVisa className="lg:size-8 md:size-7 size-6" />
                                    <FaCcMastercard className="lg:size-8 md:size-7 size-6" />
                                </div>
                            }
                        // iconClassName=" text-[#D5E880]"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* <div>
              <label className="block mb-2 font-medium">
                Expiry Date <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="MM | YYYY"
                className="w-full border border-[#C0C0C0] rounded-md px-3 py-2 outline-none"
              />
            </div> */}
                        <DateInput
                            register={register}
                            name="expiryDate"
                            errors={errors}
                            label="Expiry Date"
                            // required={true}
                            placeholder="MM | YYYY"
                            className="mb-2"
                            iconColor="#D5E880"
                        />
                        {/* <div>
              <label className="block mb-2 font-medium">
                CVC <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Eg. 123"
                className="w-full border border-[#C0C0C0] rounded-md px-3 py-2 outline-none"
              />
            </div> */}

                        <InputField
                            register={register}
                            name="cvc"
                            errors={errors}
                            label="CVC"
                            required={true}
                            type="text"
                            placeholder="Eg. 123"
                            className="mb-2"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* <div>
              <label className="block mb-2 font-medium">Country</label>
              <select className="w-full border border-[#C0C0C0] rounded-md px-3 py-2 outline-none">
                <option>United States</option>
                <option>Nepal</option>
                <option>Canada</option>
              </select>
            </div> */}
                        <DropdownField
                            register={register}
                            name="country"
                            label="Country"
                            required={true}
                            options={countryOptions}
                            errors={errors}
                            placeholder="Select"
                        />

                        <InputField
                            register={register}
                            name="postalCode"
                            errors={errors}
                            label="Postal Code"
                            required={true}
                            type="text"
                            placeholder="Eg. 12345"
                            className="mb-2"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex w-full items-center justify-center pt-4">
                        <BookingButtons
                            nextText="Submit"
                            onBackClick={onBack}
                            onNextClick={onNext}
                        />
                    </div>
                </form>
            </div>

            {/* Right: Summary */}
            <div className="w-full md:w-1/3 flex flex-col justify-around bg-[#DDEBF5]/70 rounded-2xl p-6 shadow-sm relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[100%] bg-[#D5E880] px-12 py-[6px] rounded-t-md text-sm font-medium"></div>

                <div className="">
                    <h2 className="lg:text-xl md:text-lg text-base text-[#253058] font-semibold">
                        Payment Summary
                    </h2>
                    <div className="py-5 space-y-3 mt-4 rounded-2xl px-5 bg-[#DFECF6]">
                        <div className="flex justify-between">
                            <span className="text-[#7C87AA] lg:text-sm md:text-xs text-[10px]">
                                Booking Number
                            </span>
                            <span className="font-medium text-[#253058] lg:text-sm md:text-xs text-[10px]">
                                T1458523
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#7C87AA] lg:text-sm md:text-xs text-[10px]">
                                VAT
                            </span>
                            <span className="font-medium text-[#253058] lg:text-sm md:text-xs text-[10px]">
                                %20
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#7C87AA] lg:text-sm md:text-xs text-[10px]">
                                VAT Amount
                            </span>
                            <span className="font-medium text-[#253058] lg:text-sm md:text-xs text-[10px]">
                                $123.28
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#7C87AA] lg:text-sm md:text-xs text-[10px]">
                                Booking Amount
                            </span>
                            <span className="font-medium text-[#253058] lg:text-sm md:text-xs text-[10px]">
                                $123.28
                            </span>
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-row w-full relative justify-between">
          <div className="rounded-full bg-white absolute p-3">hi</div>
          <div className="border-dashed border-t"></div>

          <div className="rounded-full bg-white p-3">hi</div>
        </div> */}
                <div className="border-dashed border-t w-full h-10 mt-12"></div>
                <div className="mb-4 pt-0 flex flex-row justify-between items-center">
                    <div>
                        <span className="text-[#7C87AA] tracking-wide lg:text-sm md:text-xs text-[10px]">
                            Amount to be Paid
                        </span>
                        <div className="lg:text-2xl md:text-xl mt-1 text-lg font-semibold text-[#253058] ">
                            $ 576
                            <span className="lg:text-sm md:text-xs text-[10px] font-medium text-gray-600">
                                ,32
                            </span>
                        </div>
                    </div>
                    <div className="text-[#7C87AA]">
                        <FaFileLines className="lg:size-14 md:size-10 size-8" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
