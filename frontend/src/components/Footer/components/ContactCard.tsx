

"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa6";

const ContactCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    console.log("DATA SUBMITTED");
  };

  return (
    <div className="px-[1rem] bg-[#041B29] rounded-xl py-8">
      <h1 className="text-white text-sm md:text-base lg:text-lg font-semibold ">
        Signup for our latest news and articles
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="relative rounded-xl">
          <input
            {...register("Email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 lg:text-base md:text-sm text-xs rounded-xl bg-white text-gray-800 focus:outline-none border border-gray-300"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-full bg-[#D5E880] text-gray-800 font-bold px-4 py-2 rounded-tr-xl rounded-br-xl hover:bg-[#c0d260] transition-colors"
          >
            {/* → */}
            <FaArrowRight className="lg:size-5 md:size-4 size-3" />
          </button>
          {(() => {
            // Narrow the error type for safe rendering
            const emailError = errors.Email as { message?: string } | undefined;
            return (
              emailError?.message && (
                <p className="text-red-500 text-sm mt-1">{emailError.message}</p>
              )
            );
          })()}
        </div>
        <div className="mt-4 flex items-center">
          <input
            {...register("subscribe")}
            type="checkbox"
            className="h-4 w-4 accent-[#D5E880] custom-checkbox  focus:ring-[#D5E880] border-gray-300 rounded-full "
          />
          <label className="ml-2 text-white lg:text-sm md:text-[13px] text-xs">
            I agree to privacy policy
          </label>
        </div>
      </form>
    </div>
  );
};

export default ContactCard;
